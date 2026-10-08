<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MathHeader from '@/components/MathHeader.vue'
import MathMarkdown from '@/components/MathMarkdown.vue'
import PracticeIcon from '@/components/PracticeIcon.vue'
import { demoQuestion, practiceQuestions } from '@/math/practiceQuestions'
import { isPending, mergeProgress, normalizeProgress, PRACTICE_STORAGE_KEY, readPracticeProgress, savePracticeProgress, type Mastery, type PracticeProgress } from '@/math/practice'

const route = useRoute()
const router = useRouter()
const questions = [...practiceQuestions].sort((a, b) => b.year - a.year || a.number.localeCompare(b.number, 'zh-CN', { numeric: true }))
const questionById = new Map([...questions, demoQuestion].map(q => [q.id, q]))
const progress = ref<PracticeProgress>(readPracticeProgress())
const demoProgress = ref<PracticeProgress>({})
const demoMode = ref(questions.length === 0)
const mode = computed(() => route.query.view === 'review' ? 'review' : 'all')
const year = computed(() => String(route.query.year ?? ''))
const keyword = ref('')
const statusFilter = ref('all')
const directoryOpen = ref(false)
const answerOpen = ref(false)
const noteOpen = ref(false)
const selectedOption = ref('')
const working = ref('')
const notice = ref('')
const storageFailed = ref(false)
const importInput = ref<HTMLInputElement>()
const questionCard = ref<HTMLElement>()
const queueIds = ref<string[]>([])
const activeId = ref('')
const statuses: { value: Mastery; label: string }[] = [
  { value: 'unfamiliar', label: '不熟练' }, { value: 'unknown', label: '不会' }, { value: 'mastered', label: '掌握' },
]
const activeProgress = computed(() => demoMode.value ? demoProgress.value : progress.value)
const sourceQuestions = computed(() => demoMode.value ? [demoQuestion] : questions)
const pendingCount = computed(() => questions.filter(q => isPending(progress.value[q.id])).length)
const masteredCount = computed(() => questions.filter(q => progress.value[q.id]?.mastery === 'mastered').length)
const years = computed(() => [...new Set(questions.map(q => q.year))].map(value => {
  const group = questions.filter(q => q.year === value)
  return { value, count: group.length, pending: group.filter(q => isPending(progress.value[q.id])).length }
}))
const filtered = computed(() => sourceQuestions.value.filter(q => {
  const item = activeProgress.value[q.id]
  return (demoMode.value || !year.value || String(q.year) === year.value)
    && (mode.value !== 'review' || isPending(item))
    && (statusFilter.value === 'all' || (statusFilter.value === 'unmarked' ? !item?.mastery : item?.mastery === statusFilter.value))
    && (!keyword.value.trim() || `${q.year} ${q.number} ${q.source} ${q.topic} ${q.stem}`.toLowerCase().includes(keyword.value.trim().toLowerCase()))
}))
const queue = computed(() => queueIds.value.map(id => questionById.get(id)).filter(q => q !== undefined))
const currentIndex = computed(() => queue.value.findIndex(q => q.id === activeId.value))
const question = computed(() => queue.value[currentIndex.value])
const currentProgress = computed(() => question.value ? activeProgress.value[question.value.id] : undefined)
const heading = computed(() => mode.value === 'review' ? '错题再练' : '我的错题本')
const markedInQueue = computed(() => queue.value.filter(q => activeProgress.value[q.id]?.mastery).length)

function resetAttempt() { answerOpen.value = false; selectedOption.value = ''; working.value = ''; noteOpen.value = false }
function restartQueue() {
  queueIds.value = filtered.value.map(q => q.id)
  const requested = String(route.query.question ?? '')
  activeId.value = queueIds.value.includes(requested) ? requested : queueIds.value[0] ?? ''
  resetAttempt()
}
watch([mode, year, keyword, statusFilter, demoMode], restartQueue, { immediate: true })
watch(() => route.query.question, value => {
  const id = String(value ?? '')
  if (queueIds.value.includes(id) && activeId.value !== id) { activeId.value = id; resetAttempt() }
})
watch(activeId, resetAttempt)

function selectView(view: 'all' | 'review', selectedYear = year.value) {
  directoryOpen.value = false
  statusFilter.value = 'all'
  router.push({ name: 'practice', query: { ...(view === 'review' ? { view } : {}), ...(selectedYear ? { year: selectedYear } : {}) } })
}
function goTo(id: string) {
  if (!queueIds.value.includes(id)) return
  activeId.value = id
  router.replace({ query: { ...route.query, question: id } })
  nextTick(() => { questionCard.value?.focus({ preventScroll: true }); questionCard.value?.scrollIntoView({ block: 'start' }) })
}
function move(offset: number) { const next = queue.value[currentIndex.value + offset]; if (next) goTo(next.id) }
function persist(id: string, patch: { mastery?: Mastery; note?: string; reviews?: number }) {
  const target = demoMode.value ? demoProgress : progress
  const previous = target.value[id] ?? { note: '', updatedAt: 0, reviews: 0 }
  target.value = { ...target.value, [id]: { ...previous, ...patch, updatedAt: Date.now() } }
  if (!demoMode.value) {
    progress.value = mergeProgress(readPracticeProgress(), progress.value)
    storageFailed.value = !savePracticeProgress(progress.value)
  }
}
function mark(mastery: Mastery) {
  if (!question.value) return
  persist(question.value.id, { mastery, reviews: (currentProgress.value?.reviews ?? 0) + (mode.value === 'review' ? 1 : 0) })
  notice.value = demoMode.value ? '示例状态已更新，不计入正式统计。' : mastery === 'mastered' ? '已掌握，已移出待复习集合。' : '已加入待复习集合，可在“错题再练”中重做。'
}
function saveNote(event: Event) {
  if (question.value) persist(question.value.id, { note: (event.target as HTMLTextAreaElement).value })
}
function exportBackup() {
  const blob = new Blob([JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), progress: progress.value }, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url; link.download = '数学二错题复习进度.json'; link.click()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
  notice.value = '已导出正式题目的熟练度与笔记。'
}
async function importBackup(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  try {
    if (file.size > 5 * 1024 * 1024) throw new Error('文件过大')
    const data = JSON.parse(await file.text())
    if (data.version !== 1 || !data.progress || typeof data.progress !== 'object' || Array.isArray(data.progress)) throw new Error('备份格式不正确')
    progress.value = mergeProgress(progress.value, normalizeProgress(data.progress))
    storageFailed.value = !savePracticeProgress(progress.value)
    restartQueue()
    notice.value = '进度已恢复，同一道题保留较新的记录。'
  } catch { notice.value = '无法恢复，请选择本页面导出的 JSON 进度备份（不超过 5 MB）。' }
  input.value = ''
}
function syncProgress(event: StorageEvent) { if (event.key === PRACTICE_STORAGE_KEY || event.key === null) progress.value = readPracticeProgress() }
onMounted(() => window.addEventListener('storage', syncProgress))
onBeforeUnmount(() => window.removeEventListener('storage', syncProgress))
</script>

<template>
  <div class="practice-page">
    <MathHeader hide-search />
    <div class="practice-layout">
      <aside class="directory" aria-label="错题分类">
        <button class="mobile-directory" :aria-expanded="directoryOpen" aria-controls="directory-content" @click="directoryOpen = !directoryOpen"><PracticeIcon name="book" />年份与复习目录<span>{{ directoryOpen ? '收起' : '展开' }}</span></button>
        <div id="directory-content" class="directory-content" :class="{ open: directoryOpen }">
          <div class="directory-brand"><PracticeIcon name="book" /><div><strong>错题工作台</strong></div></div>
          <nav class="collection-nav" aria-label="错题集合">
            <button :class="{ active: mode === 'all' && !year }" @click="selectView('all', '')"><PracticeIcon name="book" />全部错题<span>{{ questions.length }}</span></button>
            <button :class="{ active: mode === 'review' && !year }" @click="selectView('review', '')"><PracticeIcon name="repeat" />错题再练<span>{{ pendingCount }}</span></button>
          </nav>
          <div class="directory-heading">按年份直达<span>{{ years.length }} 个年份</span></div>
          <nav class="year-nav" aria-label="年份分类">
            <button v-for="item in years" :key="item.value" :class="{ active: year === String(item.value) }" @click="selectView(mode, String(item.value))"><span>{{ item.value }} 年</span><span>{{ mode === 'review' ? item.pending : item.count }}</span></button>
          </nav>
          <p v-if="!years.length" class="directory-empty">题目上传后，这里会自动按真实年份生成目录。</p>
          <div class="progress-card"><div><span>已掌握</span><strong>{{ masteredCount }} <small>/ {{ questions.length }}</small></strong></div><progress :value="masteredCount" :max="questions.length || 1" aria-label="正式错题掌握进度" /><p>不熟练和不会的题，会自动收集到错题再练。</p></div>
          <div class="backup-actions"><button @click="exportBackup"><PracticeIcon name="download" />导出进度</button><button @click="importInput?.click()"><PracticeIcon name="upload" />恢复进度</button><input ref="importInput" class="visually-hidden" type="file" accept=".json,application/json" aria-label="选择进度备份" @change="importBackup" /></div>
          <p class="storage-hint">进度保存在当前浏览器；换设备时可导出备份再恢复。</p>
        </div>
      </aside>
      <main id="practice-main">
        <header class="workspace-heading"><div><h1>{{ heading }}</h1><p v-if="mode === 'review'">不熟练和不会的题</p></div><button class="primary-button" @click="mode === 'review' ? restartQueue() : selectView('review', '')"><PracticeIcon name="repeat" />{{ mode === 'review' ? '重新开始本轮' : '开始错题再练' }}<span v-if="mode !== 'review'">{{ pendingCount }}</span></button></header>
        <section v-if="!questions.length" class="preview-banner"><PracticeIcon name="book" /><div><strong>错题本已就绪，等待录入你的题目</strong><p>下方使用你提供的截图演示操作，年份尚未确认，不计入正式题库和复习统计。</p></div><button @click="demoMode = !demoMode">{{ demoMode ? '收起示例' : '体验示例' }}</button></section>
        <p v-if="storageFailed" role="alert" class="storage-error">浏览器暂时无法保存进度，请立即导出备份以保留本次标记和笔记。</p>
        <div class="toolbar"><div class="scope-label">{{ demoMode ? '交互示例' : year ? `${year} 年` : '全部年份' }}<span>{{ queue.length }} 题{{ mode === 'review' ? ' · 本轮复习' : '' }}</span></div><div class="toolbar-filters"><label class="question-search"><PracticeIcon name="search" /><input v-model="keyword" maxlength="80" aria-label="搜索错题" placeholder="搜索题目、知识点" /></label><select v-model="statusFilter" aria-label="按掌握程度筛选"><option value="all">全部状态</option><option value="unmarked">未标记</option><option v-for="status in statuses" :key="status.value" :value="status.value">{{ status.label }}</option></select></div></div>
        <template v-if="question">
          <div class="session-heading"><span>第 <strong>{{ currentIndex + 1 }}</strong> / {{ queue.length }} 题</span><span>{{ demoMode ? '示例状态不保存' : mode === 'review' ? '本轮题目保持固定，标记后可继续下一题' : `已标记 ${markedInQueue} / ${queue.length}` }}</span></div>
          <article :key="question.id" ref="questionCard" tabindex="-1" class="question-card" aria-labelledby="question-title">
            <header class="question-meta"><div><span class="question-number">{{ question.number === '示例' ? '示例' : question.examNumber ? `真题 ${question.examNumber} · 练习 ${question.exerciseIndex}` : `第 ${question.number} 题` }}</span><span>{{ question.source }}{{ question.year ? ` · ${question.year} 年` : '' }}</span><span class="type-badge">{{ question.type === 'choice' ? '选择题' : question.type === 'fill' ? '填空题' : '解答题' }}</span></div><span v-if="currentProgress?.mastery" class="mastery-badge" :class="currentProgress.mastery">{{ statuses.find(s => s.value === currentProgress?.mastery)?.label }}</span><span v-else class="unmarked-badge">未标记</span></header>
            <p class="question-topic">{{ question.topic }}</p>
            <h2 id="question-title" class="visually-hidden">{{ question.source }} {{ question.number }}题</h2>
            <MathMarkdown class="question-stem" :source="question.stem" />
            <fieldset v-if="question.options?.length" class="options"><legend class="visually-hidden">选择你的答案</legend><label v-for="option in question.options" :key="option.key" class="option" :class="{ selected: selectedOption === option.key, correct: answerOpen && question.correctOption === option.key, wrong: answerOpen && selectedOption === option.key && question.correctOption !== option.key }"><input v-model="selectedOption" type="radio" :name="question.id" :value="option.key" :aria-label="`选项 ${option.key}`" /><span class="option-key">{{ option.key }}</span><MathMarkdown :source="option.text" inline /><PracticeIcon v-if="answerOpen && question.correctOption === option.key" name="check" class="option-result" /></label></fieldset>
            <label v-else class="working-area"><span>我的作答 <small>也可以在纸上完成</small></span><textarea v-model="working" placeholder="写下答案或解题思路，本轮切题后清空" rows="3" /></label>
            <div class="answer-control"><button class="answer-toggle" :aria-expanded="answerOpen" aria-controls="answer-explanation" @click="answerOpen = !answerOpen"><PracticeIcon name="eye" />{{ answerOpen ? '收起答案与解析' : '查看答案与解析' }}</button><span>{{ selectedOption ? `已选择 ${selectedOption}` : '先独立思考，再核对答案' }}</span></div>
            <section v-if="answerOpen" id="answer-explanation" class="answer-panel" aria-label="答案与解析"><h3>答案</h3><MathMarkdown :source="question.answer" /><p v-if="selectedOption && question.correctOption" class="answer-feedback">{{ selectedOption === question.correctOption ? '本次选择正确，再确认是否能独立解释思路。' : `本次选择 ${selectedOption}，正确选项为 ${question.correctOption}。` }}</p><h3>解析</h3><MathMarkdown :source="question.explanation" /></section>
            <div class="mastery-controls" role="group" aria-label="标记掌握程度"><button v-for="status in statuses" :key="status.value" :class="[status.value, { marked: currentProgress?.mastery === status.value }]" :aria-pressed="currentProgress?.mastery === status.value" @click="mark(status.value)"><PracticeIcon :name="status.value === 'mastered' ? 'check' : status.value" />{{ status.label }}</button></div>
            <div class="question-bottom"><button class="note-toggle" :aria-expanded="noteOpen" aria-controls="question-note" @click="noteOpen = !noteOpen"><PracticeIcon name="note" />{{ currentProgress?.note ? '我的错因笔记' : '记录错因与提醒' }}</button><span>{{ currentProgress?.mastery === 'mastered' ? '已移出待复习集合' : currentProgress?.mastery ? '已收集到错题再练' : '标记后自动收集到复习集合' }}</span></div>
            <label v-if="noteOpen" id="question-note" class="note-area"><span>错因笔记</span><textarea aria-label="错因笔记" :value="currentProgress?.note ?? ''" maxlength="10000" placeholder="例如：忽略了链式法则，下次先判断导数奇偶性。" rows="3" @input="saveNote" /><small>{{ demoMode ? '示例笔记仅用于体验。' : storageFailed ? '本地保存失败，请导出备份。' : '输入后自动保存。' }}</small></label>
          </article>
          <nav class="question-pagination" aria-label="切换题目"><button :disabled="currentIndex <= 0" @click="move(-1)"><PracticeIcon name="arrow" class="reverse-arrow" />上一题</button><span>{{ currentIndex + 1 }} / {{ queue.length }}</span><button :disabled="currentIndex >= queue.length - 1" @click="move(1)">下一题<PracticeIcon name="arrow" /></button></nav>
          <section v-if="queue.length > 1" class="question-map" aria-label="题号直达"><div><h3>题号直达</h3><span>琥珀色 · 不熟练　红色 · 不会　绿色 · 掌握</span></div><div class="question-map-buttons"><button v-for="(item, index) in queue" :key="item.id" :class="[activeProgress[item.id]?.mastery, { current: item.id === question.id }]" :aria-label="`${item.year} 年${item.examNumber ? `真题第 ${item.examNumber} 题对应练习 ${item.exerciseIndex}` : `第 ${item.number} 题`}，${statuses.find(s => s.value === activeProgress[item.id]?.mastery)?.label ?? '未标记'}`" :aria-current="item.id === question.id ? 'true' : undefined" @click="goTo(item.id)">{{ index + 1 }}</button></div></section>
        </template>
        <section v-else class="empty-state"><PracticeIcon :name="mode === 'review' ? 'check' : 'book'" /><h2>{{ mode === 'review' ? '这里暂时没有需要再练的题' : questions.length ? '没有符合筛选条件的题目' : '准备好收集你的第一道错题' }}</h2><p>{{ mode === 'review' ? '将题目标为“不熟练”或“不会”后，它们会自动出现在这里。' : questions.length ? '试试其他年份、状态，或清空搜索关键词。' : '上传题目时附上年份，我会把题干、答案和解析一起录入。' }}</p><button v-if="mode === 'review'" class="primary-button" @click="selectView('all', '')">返回全部错题</button></section>
        <p class="notice" role="status" aria-live="polite">{{ notice }}</p>
      </main>
    </div>
  </div>
</template>

<style scoped>
.practice-page { min-height: 100vh; }
.practice-layout { display: grid; grid-template-columns: 232px minmax(0, 1fr); gap: 42px; width: min(1280px, calc(100% - 64px)); margin: 0 auto; padding: 36px 0 64px; }
svg { width: 19px; height: 19px; flex-shrink: 0; }
button { transition: background .16s, border-color .16s, color .16s; }
.directory { min-width: 0; }.directory-content { position: sticky; top: 24px; }
.directory-brand { display: flex; gap: 12px; align-items: center; padding: 10px 12px 24px; }.directory-brand > svg { width: 25px; height: 25px; color: var(--accent); }.directory-brand strong { display: block; font-size: 17px; }.directory-brand span { display: block; margin-top: 4px; color: var(--muted); font-size: 12px; }
.collection-nav, .year-nav { display: grid; gap: 5px; }.collection-nav button, .year-nav button { display: flex; gap: 10px; align-items: center; width: 100%; min-height: 46px; border: 1px solid transparent; border-radius: 9px; padding: 10px 13px; background: transparent; color: var(--ink-soft); text-align: left; font-size: 14px; }.collection-nav button > span:last-child, .year-nav button > span:last-child { margin-left: auto; font-size: 12px; font-variant-numeric: tabular-nums; }.collection-nav button.active, .year-nav button.active { background: var(--accent-tint); color: var(--accent-dark); font-weight: 700; }.collection-nav button:hover, .year-nav button:hover { border-color: var(--line-strong); background: var(--paper); }
.directory-heading { display: flex; justify-content: space-between; margin: 29px 13px 12px; font-size: 12px; font-weight: 650; color: var(--ink-soft); }.directory-heading span { color: var(--muted); font-weight: 400; }.year-nav { max-height: 32vh; overflow-y: auto; }.directory-empty { margin: 0 13px; font-size: 13px; color: var(--muted); line-height: 1.8; }
.progress-card { margin-top: 30px; border: 1px solid var(--line); border-radius: 12px; padding: 16px; background: var(--paper); }.progress-card > div { display: flex; align-items: center; justify-content: space-between; font-size: 13px; }.progress-card strong { font-size: 21px; color: var(--accent-dark); }.progress-card small { font-size: 13px; color: var(--muted); font-weight: 400; }
progress { width: 100%; height: 5px; display: block; margin-top: 12px; border: 0; border-radius: 9px; overflow: hidden; background: var(--line); accent-color: var(--success); }progress::-webkit-progress-bar { background: var(--line); }progress::-webkit-progress-value { background: var(--success); }.progress-card p { margin: 12px 0 0; color: var(--muted); font-size: 12px; line-height: 1.8; }
.backup-actions { display: flex; gap: 6px; margin-top: 16px; }.backup-actions button { display: flex; align-items: center; gap: 7px; min-height: 44px; border: 0; background: transparent; color: var(--ink-soft); padding: 0 9px; font-size: 12px; }.backup-actions svg { width: 15px; }.backup-actions button:hover { color: var(--accent); }.storage-hint { margin: 6px 10px 0; color: var(--muted); font-size: 12px; line-height: 1.8; }
main { min-width: 0; }.workspace-heading { display: flex; justify-content: space-between; align-items: center; gap: 20px; }.eyebrow { color: var(--muted); font-size: 12px; letter-spacing: .06em; }h1 { margin: 8px 0 7px; font-size: 32px; line-height: 1.4; font-weight: 750; letter-spacing: -.03em; }.workspace-heading p { margin: 0; color: var(--ink-soft); font-size: 14px; }
.primary-button { display: inline-flex; align-items: center; justify-content: center; gap: 9px; min-height: 44px; flex-shrink: 0; border: 0; border-radius: 8px; padding: 11px 16px; background: var(--accent); color: white; font-size: 13px; font-weight: 600; }.primary-button:hover { background: var(--accent-dark); }.primary-button > span { border-left: 1px solid #ffffff50; padding-left: 9px; }
.preview-banner { display: flex; align-items: center; gap: 12px; margin-top: 25px; border: 1px solid var(--line); border-radius: 10px; padding: 14px 16px; background: var(--paper); }.preview-banner > svg { color: var(--accent); }.preview-banner strong { font-size: 13px; font-weight: 600; }.preview-banner p { margin: 4px 0 0; color: var(--muted); font-size: 12px; }.preview-banner button { min-height: 44px; flex-shrink: 0; margin-left: auto; border: 0; padding: 0 8px; background: transparent; color: var(--accent-dark); font-size: 12px; font-weight: 600; }
.toolbar { display: flex; justify-content: space-between; align-items: center; gap: 16px; margin-top: 24px; padding: 14px 0; border-bottom: 1px solid var(--line); }.scope-label { font-size: 15px; font-weight: 650; }.scope-label > span { margin-left: 12px; color: var(--muted); font-size: 12px; font-weight: 400; }.toolbar-filters { display: flex; gap: 9px; }.question-search { display: flex; align-items: center; gap: 8px; width: 218px; min-height: 42px; border: 1px solid var(--line); border-radius: 8px; padding: 0 11px; background: var(--paper); color: var(--muted); }.question-search svg { width: 16px; }.question-search input { width: 100%; min-width: 0; border: 0; outline: 0; background: transparent; color: var(--ink); font-size: 12px; }.question-search:focus-within { outline: 3px solid var(--focus-ring); border-color: var(--accent); }select { min-height: 44px; max-width: 130px; border: 1px solid var(--line); border-radius: 8px; padding: 0 10px; background: var(--paper); color: var(--ink-soft); font-size: 12px; }
.session-heading { display: flex; justify-content: space-between; gap: 12px; margin: 20px 1px 12px; color: var(--muted); font-size: 12px; }.session-heading strong { color: var(--ink); }
.question-card { scroll-margin-top: 24px; border: 1px solid var(--line); border-radius: 16px; padding: 26px 30px 20px; background: var(--paper); box-shadow: 0 3px 14px #18223803; }.question-meta { display: flex; align-items: center; justify-content: space-between; gap: 12px; font-size: 12px; color: var(--muted); }.question-meta > div { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }.question-number { display: inline-flex; justify-content: center; min-width: 34px; border-radius: 6px; padding: 4px 8px; background: var(--surface-soft); color: var(--ink); font-weight: 700; }.type-badge { border-left: 1px solid var(--line); padding-left: 12px; }.mastery-badge { border-radius: 5px; padding: 3px 8px; white-space: nowrap; }.unmarked-badge { white-space: nowrap; }.question-topic { margin: 16px 0 0; color: var(--muted); font-size: 12px; }.question-stem { margin: 18px 0 25px; font-size: clamp(19px, 1.6vw, 22px); font-weight: 550; line-height: 1.95; }.question-stem :deep(p) { margin: 0; }.question-stem :deep(.katex) { font-size: 1.12em; }
.options { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; min-width: 0; margin: 0 0 27px; padding: 0; border: 0; }.option { position: relative; display: flex; align-items: center; gap: 12px; min-height: 76px; border: 1px solid var(--line-strong); border-radius: 9px; padding: 16px; cursor: pointer; color: var(--ink); font-size: 17px; transition: background .16s, border-color .16s; }.option input { position: absolute; inset: 0; opacity: 0; width: 100%; height: 100%; cursor: pointer; }.option:focus-within { outline: 3px solid var(--focus-ring); border-color: var(--accent); }.option:hover, .option.selected { border-color: var(--accent); background: var(--accent-tint); }.option-key { display: grid; place-items: center; flex-shrink: 0; width: 27px; height: 27px; border-radius: 6px; background: var(--surface-soft); font-size: 13px; font-weight: 700; }.option.selected .option-key { background: var(--accent); color: white; }.option :deep(.math-markdown) { min-width: 0; overflow-wrap: anywhere; }.option.correct { border-color: var(--success); background: var(--success-tint); }.option.wrong { border-color: var(--danger); background: var(--danger-tint); }.option-result { margin-left: auto; color: var(--success); }
.answer-control { display: flex; align-items: center; justify-content: space-between; gap: 12px; border-top: 1px solid var(--line); padding: 15px 0 16px; }.answer-toggle { display: inline-flex; gap: 9px; align-items: center; min-height: 44px; border: 0; padding: 0; background: transparent; color: var(--ink); font-size: 14px; font-weight: 650; }.answer-toggle:hover { color: var(--accent); }.answer-control > span { color: var(--muted); font-size: 12px; }.answer-panel { margin-bottom: 20px; border: 1px solid var(--line); border-radius: 10px; padding: 18px 22px; background: var(--surface-soft); }.answer-panel h3 { margin: 0; color: var(--accent-dark); font-size: 13px; font-weight: 750; }.answer-panel h3:not(:first-child) { border-top: 1px solid var(--line); margin-top: 18px; padding-top: 18px; }.answer-panel :deep(.math-markdown) { font-size: 15px; }.answer-feedback { margin: 0; font-size: 12px; color: var(--ink-soft); }
.mastery-controls { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }.mastery-controls button { display: flex; align-items: center; justify-content: center; gap: 9px; min-height: 49px; border: 1px solid var(--line-strong); border-radius: 8px; background: var(--paper); color: var(--ink-soft); font-size: 15px; font-weight: 650; }.mastery-controls button:hover { border-color: currentColor; background: var(--surface-soft); }.mastery-controls .unfamiliar.marked, .mastery-badge.unfamiliar, .question-map-buttons .unfamiliar { border-color: var(--warning); background: var(--warning-tint); color: var(--warning); }.mastery-controls .unknown.marked, .mastery-badge.unknown, .question-map-buttons .unknown { border-color: var(--danger); background: var(--danger-tint); color: var(--danger); }.mastery-controls .mastered.marked, .mastery-badge.mastered, .question-map-buttons .mastered { border-color: var(--success); background: var(--success-tint); color: var(--success); }
.question-bottom { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding-top: 13px; }.note-toggle { display: flex; align-items: center; gap: 7px; min-height: 44px; border: 0; padding: 0; background: transparent; color: var(--muted); font-size: 12px; }.note-toggle svg { width: 15px; }.note-toggle:hover { color: var(--accent); }.question-bottom > span { color: var(--muted); font-size: 12px; }.note-area, .working-area { display: grid; gap: 8px; font-size: 13px; }.note-area small, .working-area small { color: var(--muted); font-size: 12px; font-weight: 400; }.working-area { margin-bottom: 22px; }.working-area small { margin-left: 9px; }textarea { width: 100%; min-height: 90px; border: 1px solid var(--line-strong); border-radius: 8px; padding: 12px; background: var(--paper); color: var(--ink); font: inherit; resize: vertical; line-height: 1.8; }
.question-pagination { display: flex; align-items: center; justify-content: space-between; margin-top: 18px; }.question-pagination button { display: flex; align-items: center; justify-content: center; gap: 8px; min-height: 44px; border: 1px solid var(--line-strong); border-radius: 8px; padding: 0 16px; background: var(--paper); color: var(--ink); font-size: 13px; }.question-pagination button:disabled { opacity: .45; cursor: default; }.question-pagination button:not(:disabled):hover { border-color: var(--accent); color: var(--accent); }.question-pagination > span { color: var(--muted); font-size: 12px; }.reverse-arrow { transform: rotate(180deg); }
.question-map { border-top: 1px solid var(--line); margin-top: 24px; padding-top: 18px; }.question-map > div:first-child { display: flex; justify-content: space-between; gap: 12px; align-items: center; }.question-map h3 { margin: 0; font-size: 13px; }.question-map span { color: var(--muted); font-size: 11px; }.question-map-buttons { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }.question-map-buttons button { min-width: 44px; min-height: 44px; border: 1px solid var(--line); border-radius: 7px; padding: 5px 10px; background: var(--paper); font-size: 13px; }.question-map-buttons .current { outline: 2px solid var(--accent); outline-offset: 2px; }
.empty-state { display: grid; justify-items: center; text-align: center; gap: 10px; margin-top: 20px; border: 1px solid var(--line); border-radius: 16px; padding: 65px 24px; background: var(--paper); }.empty-state > svg { width: 35px; height: 35px; margin-bottom: 8px; color: var(--accent); }.empty-state h2 { margin: 0; font-size: 20px; }.empty-state p { max-width: 460px; margin: 0 0 10px; color: var(--muted); font-size: 14px; }.notice { min-height: 22px; margin: 18px 0 0; color: var(--accent-dark); font-size: 12px; }.storage-error { margin-top: 20px; padding: 12px; border-radius: 8px; background: var(--danger-tint); color: var(--danger); font-size: 13px; }.mobile-directory { display: none; }
.visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
@media (max-width: 1100px) { .practice-layout { grid-template-columns: 205px minmax(0, 1fr); gap: 25px; width: calc(100% - 40px); }.workspace-heading { align-items: start; flex-direction: column; gap: 16px; }.question-card { padding: 23px; }.toolbar { flex-wrap: wrap; }.question-search { width: 200px; } }
@media (max-width: 950px) { .options { grid-template-columns: 1fr; } }
@media (max-width: 760px) { .practice-layout { display: block; width: calc(100% - 32px); padding-top: 18px; }.directory { margin-bottom: 24px; }.mobile-directory { display: flex; align-items: center; gap: 9px; width: 100%; min-height: 46px; border: 1px solid var(--line); border-radius: 9px; padding: 0 12px; background: var(--paper); font-size: 13px; }.mobile-directory span { margin-left: auto; color: var(--muted); font-size: 12px; }.directory-content { display: none; position: static; padding: 16px 6px 10px; }.directory-content.open { display: block; }.directory-brand { display: none; }.progress-card { margin-top: 18px; }.year-nav { grid-template-columns: repeat(2, minmax(0, 1fr)); }.workspace-heading { flex-direction: row; flex-wrap: wrap; }h1 { font-size: 28px; }.workspace-heading p { font-size: 13px; }.preview-banner { align-items: start; padding: 12px; }.preview-banner > svg { margin-top: 3px; }.preview-banner p { line-height: 1.8; }.preview-banner button { align-self: center; }.toolbar { gap: 12px; }.toolbar-filters { width: 100%; }.question-search { flex: 1; width: auto; }.scope-label { font-size: 14px; }.session-heading > span:last-child { max-width: 220px; text-align: right; font-size: 11px; }.question-card { padding: 18px 16px 12px; border-radius: 12px; }.question-meta > div { gap: 8px; }.question-stem { font-size: 19px; margin-bottom: 22px; }.options { grid-template-columns: 1fr; gap: 9px; margin-bottom: 20px; }.option { min-height: 65px; font-size: 16px; padding: 13px; }.mastery-controls { gap: 7px; }.mastery-controls button { gap: 5px; font-size: 13px; }.mastery-controls svg { width: 17px; }.answer-control { flex-wrap: wrap; gap: 3px; }.answer-panel { padding: 16px; }.question-bottom { flex-wrap: wrap; gap: 0; }.question-bottom > span { font-size: 11px; padding-bottom: 8px; }.question-map > div:first-child { flex-wrap: wrap; }.empty-state { padding: 40px 18px; } }
</style>
