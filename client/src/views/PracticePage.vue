<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MathHeader from '@/components/MathHeader.vue'
import PracticeQuestionCard from '@/components/PracticeQuestionCard.vue'
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
const selectedYear = computed(() => {
  const requested = Number(route.query.year)
  if (questions.some(q => q.year === requested)) return String(requested)
  const linked = questionById.get(String(route.query.question ?? ''))
  return String(linked?.year || questions[0]?.year || '')
})
const keyword = ref('')
const statusFilter = ref('all')
const directoryOpen = ref(false)
const notice = ref('')
const storageFailed = ref(false)
const importInput = ref<HTMLInputElement>()
const queueIds = ref<string[]>([])
const round = ref(0)
const statuses: { value: Mastery; label: string }[] = [
  { value: 'unfamiliar', label: '不熟练' }, { value: 'unknown', label: '不会' }, { value: 'mastered', label: '掌握' },
]
const activeProgress = computed(() => demoMode.value ? demoProgress.value : progress.value)
const sourceQuestions = computed(() => demoMode.value ? [demoQuestion] : questions)
const pendingInPaper = computed(() => questions.filter(q => String(q.year) === selectedYear.value && isPending(progress.value[q.id])).length)
const pendingCount = computed(() => questions.filter(q => isPending(progress.value[q.id])).length)
const masteredCount = computed(() => questions.filter(q => progress.value[q.id]?.mastery === 'mastered').length)
const years = computed(() => [...new Set(questions.map(q => q.year))].map(value => {
  const group = questions.filter(q => q.year === value)
  return { value, count: group.length, pending: group.filter(q => isPending(progress.value[q.id])).length }
}))
const filtered = computed(() => sourceQuestions.value.filter(q => {
  const item = activeProgress.value[q.id]
  return (demoMode.value || String(q.year) === selectedYear.value)
    && (mode.value !== 'review' || isPending(item))
    && (statusFilter.value === 'all' || (statusFilter.value === 'unmarked' ? !item?.mastery : item?.mastery === statusFilter.value))
    && (!keyword.value.trim() || `${q.year} ${q.number} ${q.source} ${q.topic} ${q.stem}`.toLowerCase().includes(keyword.value.trim().toLowerCase()))
}))
const queue = computed(() => queueIds.value.map(id => questionById.get(id)).filter(q => q !== undefined))
const heading = computed(() => demoMode.value ? '错题示例' : `${selectedYear.value} 年${mode.value === 'review' ? '错题再练' : '错题卷'}`)
const markedInQueue = computed(() => queue.value.filter(q => activeProgress.value[q.id]?.mastery).length)
const yearGroups = computed(() => [...new Set(queue.value.map(q => q.year))].map(value => ({
  year: value, questions: queue.value.filter(q => q.year === value),
})))
let noticeTimer: number | undefined

function restartQueue() {
  // 本轮列表固定，标记掌握后不会移走当前卡片或打乱滚动位置。
  queueIds.value = filtered.value.map(q => q.id)
  round.value += 1
}
watch([mode, selectedYear, keyword, statusFilter, demoMode], restartQueue, { immediate: true })
watch(notice, () => {
  if (noticeTimer) window.clearTimeout(noticeTimer)
  if (notice.value) noticeTimer = window.setTimeout(() => { notice.value = '' }, 3500)
})

async function jumpToRoute() {
  await nextTick()
  const requested = String(route.query.question ?? '')
  const questionElement = queueIds.value.includes(requested) ? document.getElementById(requested) : null
  const yearElement = document.getElementById('practice-main')
  const target = questionElement ?? yearElement
  if (target) {
    target.scrollIntoView({ block: 'start' })
    questionElement?.focus({ preventScroll: true })
  }
}
watch(() => [route.query.year, route.query.question, route.query.view], jumpToRoute)
async function selectView(view: 'all' | 'review', targetYear = selectedYear.value) {
  directoryOpen.value = false
  statusFilter.value = 'all'
  await router.push({ name: 'practice', query: { ...(view === 'review' ? { view } : {}), ...(targetYear ? { year: targetYear } : {}) } })
  await jumpToRoute()
}
function persist(id: string, patch: { mastery?: Mastery; note?: string; reviews?: number }) {
  const target = demoMode.value ? demoProgress : progress
  const previous = target.value[id] ?? { note: '', updatedAt: 0, reviews: 0 }
  target.value = { ...target.value, [id]: { ...previous, ...patch, updatedAt: Date.now() } }
  if (!demoMode.value) {
    progress.value = mergeProgress(readPracticeProgress(), progress.value)
    storageFailed.value = !savePracticeProgress(progress.value)
  }
}
function mark(id: string, mastery: Mastery) {
  persist(id, { mastery, reviews: (activeProgress.value[id]?.reviews ?? 0) + (mode.value === 'review' ? 1 : 0) })
  notice.value = demoMode.value ? '示例状态已更新' : mastery === 'mastered' ? '已掌握，已移出待复习集合' : '已加入错题再练'
}
function saveNote(id: string, note: string) { persist(id, { note }) }
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
onMounted(() => {
  window.addEventListener('storage', syncProgress)
  jumpToRoute()
})
onBeforeUnmount(() => {
  window.removeEventListener('storage', syncProgress)
  if (noticeTimer) window.clearTimeout(noticeTimer)
})
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
            <button :class="{ active: mode === 'all' }" @click="selectView('all')"><PracticeIcon name="book" />年份试卷<span>{{ questions.length }}</span></button>
            <button :class="{ active: mode === 'review' }" @click="selectView('review')"><PracticeIcon name="repeat" />错题再练<span>{{ pendingCount }}</span></button>
          </nav>
          <div class="directory-heading">试卷年份<span>{{ years.length }} 个年份</span></div>
          <nav class="year-nav" aria-label="年份分类">
            <button v-for="item in years" :key="item.value" :class="{ active: selectedYear === String(item.value) }" @click="selectView(mode, String(item.value))"><span>{{ item.value }} 年</span><span>{{ mode === 'review' ? item.pending : item.count }}</span></button>
          </nav>
          <p v-if="!years.length" class="directory-empty">题目上传后，这里会自动按真实年份生成目录。</p>
          <div class="progress-card"><div><span>已掌握</span><strong>{{ masteredCount }} <small>/ {{ questions.length }}</small></strong></div><progress :value="masteredCount" :max="questions.length || 1" aria-label="正式错题掌握进度" /><p>不熟练和不会的题，会自动收集到错题再练。</p></div>
          <div class="backup-actions"><button @click="exportBackup"><PracticeIcon name="download" />导出进度</button><button @click="importInput?.click()"><PracticeIcon name="upload" />恢复进度</button><input ref="importInput" class="visually-hidden" type="file" accept=".json,application/json" aria-label="选择进度备份" @change="importBackup" /></div>
          <p class="storage-hint">进度保存在当前浏览器；换设备时可导出备份再恢复。</p>
        </div>
      </aside>
      <main id="practice-main">
        <header class="workspace-heading"><div><h1>{{ heading }}</h1><p v-if="mode === 'review'">不熟练和不会的题</p></div><button class="primary-button" @click="mode === 'review' ? restartQueue() : selectView('review')"><PracticeIcon name="repeat" />{{ mode === 'review' ? '重新开始本轮' : '本卷错题再练' }}<span v-if="mode !== 'review'">{{ pendingInPaper }}</span></button></header>
        <section v-if="!questions.length" class="preview-banner"><PracticeIcon name="book" /><div><strong>错题本已就绪，等待录入你的题目</strong><p>下方使用你提供的截图演示操作，年份尚未确认，不计入正式题库和复习统计。</p></div><button @click="demoMode = !demoMode">{{ demoMode ? '收起示例' : '体验示例' }}</button></section>
        <p v-if="storageFailed" role="alert" class="storage-error">浏览器暂时无法保存进度，请立即导出备份以保留本次标记和笔记。</p>
        <div class="toolbar"><div class="scope-label">{{ demoMode ? '交互示例' : `${selectedYear} 年试卷` }}<span>{{ queue.length }} 题 · 已标记 {{ markedInQueue }}</span></div><div class="toolbar-filters"><label class="question-search"><PracticeIcon name="search" /><input v-model="keyword" maxlength="80" aria-label="搜索错题" placeholder="搜索题目、知识点" /></label><select v-model="statusFilter" aria-label="按掌握程度筛选"><option value="all">全部状态</option><option value="unmarked">未标记</option><option v-for="status in statuses" :key="status.value" :value="status.value">{{ status.label }}</option></select></div></div>
        <div v-if="queue.length" class="question-list">
          <section v-for="group in yearGroups" :id="`practice-year-${group.year}`" :key="group.year" class="year-section" :aria-labelledby="`year-title-${group.year}`">
            <h2 :id="`year-title-${group.year}`" class="visually-hidden">{{ group.year }} 年试卷题目</h2>
            <div class="year-questions"><PracticeQuestionCard v-for="(question, index) in group.questions" :key="`${round}-${question.id}`" :question="question" :index="index + 1" :progress="activeProgress[question.id]" :storage-failed="storageFailed" @mark="mark" @note="saveNote" /></div>
          </section>
          <footer class="paper-end"><span>本卷结束</span><span>{{ selectedYear }} 年 · {{ queue.length }} 题</span></footer>
        </div>
        <section v-else class="empty-state"><PracticeIcon :name="mode === 'review' ? 'check' : 'book'" /><h2>{{ mode === 'review' ? '这里暂时没有需要再练的题' : questions.length ? '没有符合筛选条件的题目' : '准备好收集你的第一道错题' }}</h2><p>{{ mode === 'review' ? '将题目标为“不熟练”或“不会”后，它们会自动出现在这里。' : questions.length ? '试试其他年份、状态，或清空搜索关键词。' : '上传题目时附上年份，我会把题干、答案和解析一起录入。' }}</p><button v-if="mode === 'review'" class="primary-button" @click="selectView('all')">返回本卷错题</button></section>
        <p v-if="notice" class="notice" role="status" aria-live="polite">{{ notice }}</p>
      </main>
    </div>
  </div>
</template>

<style scoped>
.practice-page { min-height: 100vh; }
.practice-layout { display: grid; grid-template-columns: 232px minmax(0, 1fr); gap: 30px; width: min(1280px, calc(100% - 64px)); margin: 0 auto; padding: 24px 0 64px; }
svg { width: 19px; height: 19px; flex-shrink: 0; }
button { transition: background .16s, border-color .16s, color .16s; }
.directory { min-width: 0; }.directory-content { position: sticky; top: 20px; max-height: calc(100vh - 40px); overflow-y: auto; }
.directory-brand { display: flex; gap: 12px; align-items: center; padding: 6px 12px 14px; }.directory-brand > svg { width: 25px; height: 25px; color: var(--accent); }.directory-brand strong { display: block; font-size: 17px; }.directory-brand span { display: block; margin-top: 4px; color: var(--muted); font-size: 12px; }
.collection-nav, .year-nav { display: grid; gap: 5px; }.collection-nav button, .year-nav button { display: flex; gap: 10px; align-items: center; width: 100%; min-height: 46px; border: 1px solid transparent; border-radius: 9px; padding: 10px 13px; background: transparent; color: var(--ink-soft); text-align: left; font-size: 14px; }.collection-nav button > span:last-child, .year-nav button > span:last-child { margin-left: auto; font-size: 12px; font-variant-numeric: tabular-nums; }.collection-nav button.active, .year-nav button.active { background: var(--accent-tint); color: var(--accent-dark); font-weight: 700; }.collection-nav button:hover, .year-nav button:not(:disabled):hover { border-color: var(--line-strong); background: var(--paper); }
.year-nav button:disabled { opacity: .45; cursor: default; }
.directory-heading { display: flex; justify-content: space-between; margin: 18px 13px 10px; font-size: 12px; font-weight: 650; color: var(--ink-soft); }.directory-heading span { color: var(--muted); font-weight: 400; }.year-nav { gap: 3px; }.year-nav button { min-height: 40px; padding: 8px 13px; }.directory-empty { margin: 0 13px; font-size: 13px; color: var(--muted); line-height: 1.8; }
.progress-card { margin-top: 18px; border: 1px solid var(--line); border-radius: 12px; padding: 16px; background: var(--paper); }.progress-card > div { display: flex; align-items: center; justify-content: space-between; font-size: 13px; }.progress-card strong { font-size: 21px; color: var(--accent-dark); }.progress-card small { font-size: 13px; color: var(--muted); font-weight: 400; }
progress { width: 100%; height: 5px; display: block; margin-top: 12px; border: 0; border-radius: 9px; overflow: hidden; background: var(--line); accent-color: var(--success); }progress::-webkit-progress-bar { background: var(--line); }progress::-webkit-progress-value { background: var(--success); }.progress-card p { margin: 12px 0 0; color: var(--muted); font-size: 12px; line-height: 1.8; }
.backup-actions { display: flex; gap: 6px; margin-top: 16px; }.backup-actions button { display: flex; align-items: center; gap: 7px; min-height: 44px; border: 0; background: transparent; color: var(--ink-soft); padding: 0 9px; font-size: 12px; }.backup-actions svg { width: 15px; }.backup-actions button:hover { color: var(--accent); }.storage-hint { margin: 6px 10px 0; color: var(--muted); font-size: 12px; line-height: 1.8; }
main { min-width: 0; }.workspace-heading { display: flex; justify-content: space-between; align-items: center; gap: 20px; }.eyebrow { color: var(--muted); font-size: 12px; letter-spacing: .06em; }h1 { margin: 0; font-size: 28px; line-height: 1.4; font-weight: 750; letter-spacing: -.03em; }.workspace-heading p { margin: 0; color: var(--ink-soft); font-size: 14px; }
.primary-button { display: inline-flex; align-items: center; justify-content: center; gap: 9px; min-height: 44px; flex-shrink: 0; border: 0; border-radius: 8px; padding: 11px 16px; background: var(--accent); color: white; font-size: 13px; font-weight: 600; }.primary-button:hover { background: var(--accent-dark); }.primary-button > span { border-left: 1px solid #ffffff50; padding-left: 9px; }
.preview-banner { display: flex; align-items: center; gap: 12px; margin-top: 25px; border: 1px solid var(--line); border-radius: 10px; padding: 14px 16px; background: var(--paper); }.preview-banner > svg { color: var(--accent); }.preview-banner strong { font-size: 13px; font-weight: 600; }.preview-banner p { margin: 4px 0 0; color: var(--muted); font-size: 12px; }.preview-banner button { min-height: 44px; flex-shrink: 0; margin-left: auto; border: 0; padding: 0 8px; background: transparent; color: var(--accent-dark); font-size: 12px; font-weight: 600; }
.toolbar { display: flex; justify-content: space-between; align-items: center; gap: 16px; margin-top: 12px; padding: 10px 0; border-bottom: 1px solid var(--line); }.scope-label { font-size: 15px; font-weight: 650; }.scope-label > span { margin-left: 12px; color: var(--muted); font-size: 12px; font-weight: 400; }.toolbar-filters { display: flex; gap: 9px; }.question-search { display: flex; align-items: center; gap: 8px; width: 218px; min-height: 42px; border: 1px solid var(--line); border-radius: 8px; padding: 0 11px; background: var(--paper); color: var(--muted); }.question-search svg { width: 16px; }.question-search input { width: 100%; min-width: 0; border: 0; outline: 0; background: transparent; color: var(--ink); font-size: 12px; }.question-search:focus-within { outline: 3px solid var(--focus-ring); border-color: var(--accent); }select { min-height: 44px; max-width: 130px; border: 1px solid var(--line); border-radius: 8px; padding: 0 10px; background: var(--paper); color: var(--ink-soft); font-size: 12px; }
.question-list { margin-top: 12px; }
.year-section { scroll-margin-top: 20px; margin-top: 0; }.year-section + .year-section { margin-top: 30px; }
.year-heading { display: flex; align-items: baseline; gap: 12px; margin-bottom: 10px; }.year-heading h2 { margin: 0; color: var(--ink); font-size: 20px; font-weight: 700; }.year-heading > span { color: var(--muted); font-size: 12px; }
.year-questions { display: grid; gap: 14px; }.paper-end { display: flex; align-items: center; justify-content: center; gap: 12px; margin-top: 26px; border-top: 1px solid var(--line); padding: 20px 0; color: var(--muted); font-size: 13px; }
.empty-state { display: grid; justify-items: center; text-align: center; gap: 10px; margin-top: 20px; border: 1px solid var(--line); border-radius: 16px; padding: 65px 24px; background: var(--paper); }.empty-state > svg { width: 35px; height: 35px; margin-bottom: 8px; color: var(--accent); }.empty-state h2 { margin: 0; font-size: 20px; }.empty-state p { max-width: 460px; margin: 0 0 10px; color: var(--muted); font-size: 14px; }.notice { position: fixed; z-index: 20; bottom: 22px; right: 24px; max-width: calc(100% - 40px); margin: 0; border: 1px solid var(--line); border-radius: 8px; padding: 12px 18px; background: var(--paper); box-shadow: 0 4px 20px #18223818; color: var(--accent-dark); font-size: 13px; }.storage-error { margin-top: 20px; padding: 12px; border-radius: 8px; background: var(--danger-tint); color: var(--danger); font-size: 13px; }.mobile-directory { display: none; }
.visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
@media (max-width: 1100px) { .practice-layout { grid-template-columns: 205px minmax(0, 1fr); gap: 24px; width: calc(100% - 40px); }.toolbar { flex-wrap: wrap; }.question-search { width: 200px; } }
@media (max-width: 760px) { .practice-layout { display: block; width: calc(100% - 28px); padding-top: 16px; }.directory { margin-bottom: 18px; }.mobile-directory { display: flex; align-items: center; gap: 9px; width: 100%; min-height: 44px; border: 1px solid var(--line); border-radius: 8px; padding: 0 12px; background: var(--paper); font-size: 13px; }.mobile-directory span { margin-left: auto; color: var(--muted); font-size: 12px; }.directory-content { display: none; position: static; max-height: none; padding: 12px 0; }.directory-content.open { display: block; }.directory-brand { display: none; }.year-nav { grid-template-columns: repeat(2, minmax(0, 1fr)); max-height: none; }.workspace-heading { flex-wrap: wrap; gap: 10px; }h1 { font-size: 25px; }.workspace-heading p { font-size: 13px; }.primary-button { padding: 8px 11px; }.toolbar { gap: 12px; margin-top: 14px; }.toolbar-filters { width: 100%; }.question-search { flex: 1; width: auto; }.scope-label { font-size: 14px; }.year-heading h2 { font-size: 19px; }.year-questions { gap: 12px; }.empty-state { padding: 35px 18px; } }
</style>
