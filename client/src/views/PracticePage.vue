<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MathHeader from '@/components/MathHeader.vue'
import PracticeQuestionCard from '@/components/PracticeQuestionCard.vue'
import PracticeIcon from '@/components/PracticeIcon.vue'
import ll880Chapters from '@/content/ll880-classification.json'
import { demoQuestion, practiceQuestions } from '@/math/practiceQuestions'
import { hasNote, isPending, mergeProgress, normalizeProgress, PRACTICE_STORAGE_KEY, readPracticeProgress, savePracticeProgress, type Mastery, type PracticeProgress } from '@/math/practice'

const route = useRoute()
const router = useRouter()
const baseUrl = import.meta.env.BASE_URL
const questions = [...practiceQuestions].sort((a, b) =>
  Number(Boolean(a.bookId)) - Number(Boolean(b.bookId))
  || (a.bookId && b.bookId ? (a.chapterNumber ?? 0) - (b.chapterNumber ?? 0) || (a.sourceOrder ?? 0) - (b.sourceOrder ?? 0) : b.year - a.year)
  || Number(a.examNumber ?? a.number) - Number(b.examNumber ?? b.number)
  || Number(a.kind !== 'original') - Number(b.kind !== 'original')
  || (a.exerciseIndex ?? 0) - (b.exerciseIndex ?? 0),
)
const paperKey = (question: (typeof questions)[number]) => question.paperId ?? String(question.year)
const questionById = new Map([...questions, demoQuestion].map(q => [q.id, q]))
const progress = ref<PracticeProgress>(readPracticeProgress())
const demoProgress = ref<PracticeProgress>({})
const demoMode = ref(questions.length === 0)
const mode = computed(() => route.query.view === 'removed' ? 'removed' : route.query.view === 'notes' ? 'notes' : route.query.view === 'review' ? 'review' : 'all')
const selectedYear = computed(() => {
  if (mode.value === 'review') return ''
  const requestedPaper = questions.find(q => paperKey(q) === String(route.query.paper ?? ''))
  if (requestedPaper) return String(requestedPaper.year)
  const requested = Number(route.query.year)
  if (questions.some(q => q.year === requested)) return String(requested)
  const linked = questionById.get(String(route.query.question ?? ''))
  return String(linked?.year || (['notes', 'removed'].includes(mode.value) ? '' : questions[0]?.year) || '')
})
const selectedPaper = computed(() => {
  if (!selectedYear.value) return ''
  const group = questions.filter(q => String(q.year) === selectedYear.value)
  const requested = String(route.query.paper ?? '')
  if (group.some(q => paperKey(q) === requested)) return requested
  const linked = questionById.get(String(route.query.question ?? ''))
  if (linked && String(linked.year) === selectedYear.value) return paperKey(linked)
  return group[0] ? paperKey(group[0]) : ''
})
const keyword = ref('')
const statusFilter = ref('all')
const typeFilter = ref('all')
const levelFilter = ref('all')
const selectedChapter = computed(() => ll880Chapters.find(chapter => chapter.id === selectedPaper.value))
const chapterTypes = computed(() => selectedChapter.value?.types ?? [])
const directoryOpen = ref(false)
const notice = ref('')
const undoRemovalId = ref('')
const storageFailed = ref(false)
const exportingPdf = ref(false)
const pdfTitle = ref('')
let savedDocumentTitle = ''
const importInput = ref<HTMLInputElement>()
const queueIds = ref<string[]>([])
const round = ref(0)
const statuses: { value: Mastery; label: string }[] = [
  { value: 'unfamiliar', label: '不熟练' }, { value: 'unknown', label: '不会' }, { value: 'mastered', label: '掌握' },
]
const activeProgress = computed(() => demoMode.value ? demoProgress.value : progress.value)
const sourceQuestions = computed(() => demoMode.value ? [demoQuestion] : questions)
const visibleQuestions = computed(() => questions.filter(q => !progress.value[q.id]?.removed))
const removedCount = computed(() => questions.length - visibleQuestions.value.length)
const pendingCount = computed(() => visibleQuestions.value.filter(q => isPending(progress.value[q.id])).length)
const notedCount = computed(() => visibleQuestions.value.filter(q => hasNote(progress.value[q.id])).length)
const masteredCount = computed(() => visibleQuestions.value.filter(q => progress.value[q.id]?.mastery === 'mastered').length)
const papers = computed(() => [...new Set(questions.map(paperKey))].map(id => {
  const all = questions.filter(q => paperKey(q) === id)
  const group = all.filter(q => !progress.value[q.id]?.removed)
  return { id, year: all[0].year, book: Boolean(all[0].bookId), title: all[0].paperTitle ?? `${all[0].year} 年`, count: group.length, notes: group.filter(q => hasNote(progress.value[q.id])).length, removed: all.length - group.length }
}))
const directoryPapers = computed(() => mode.value === 'removed' ? papers.value.filter(item => item.removed > 0) : mode.value === 'notes' ? papers.value.filter(item => item.notes > 0) : papers.value)
const bookDirectory = computed(() => directoryPapers.value.filter(item => item.book))
const examDirectory = computed(() => directoryPapers.value.filter(item => !item.book))
const filtered = computed(() => sourceQuestions.value.filter(q => {
  const item = activeProgress.value[q.id]
  return (mode.value === 'review' || demoMode.value || (['notes', 'removed'].includes(mode.value) && !selectedYear.value) || paperKey(q) === selectedPaper.value)
    && (mode.value === 'removed' ? Boolean(item?.removed) : !item?.removed)
    && (mode.value !== 'review' || isPending(item))
    && (mode.value !== 'notes' || hasNote(item))
    && (typeFilter.value === 'all' || q.questionTypes?.some(type => type.id === typeFilter.value))
    && (levelFilter.value === 'all' || q.level === levelFilter.value)
    && (statusFilter.value === 'all' || (statusFilter.value === 'unmarked' ? !item?.mastery : item?.mastery === statusFilter.value))
    && (!keyword.value.trim() || `${q.year} ${q.number} ${q.source} ${q.topic} ${q.stem} ${q.searchText ?? ''} ${q.level ?? ''} ${q.questionTypes?.map(type => type.title).join(' ') ?? ''} ${mode.value === 'notes' ? item?.note ?? '' : ''}`.toLowerCase().includes(keyword.value.trim().toLowerCase()))
}))
const queue = computed(() => queueIds.value.map(id => questionById.get(id)).filter(q => q !== undefined))
const heading = computed(() => demoMode.value ? '错题示例' : mode.value === 'removed' ? '已移除题目' : mode.value === 'notes' ? '有笔记的题目' : mode.value === 'review' ? '数学二错题再练' : selectedChapter.value ? '李林 880 · 按题型练习' : '数学二错题本')
const markedInQueue = computed(() => queue.value.filter(q => activeProgress.value[q.id]?.mastery).length)
const paperScope = computed(() => {
  const selected = papers.value.find(item => item.id === selectedPaper.value)
  return selected ? `${selected.title}${selected.book ? '' : ' · 错题卷'}` : '错题卷'
})
const yearGroups = computed(() => [...new Set(queue.value.map(q => q.paperId ?? String(q.year)))].map(id => {
  const group = queue.value.filter(q => (q.paperId ?? String(q.year)) === id)
  const chapter = ll880Chapters.find(item => item.id === id)
  const sections = chapter ? chapter.types.filter(type => typeFilter.value === 'all' || type.id === typeFilter.value).map(type => ({ id: type.id, title: type.title, questions: group.filter(q => typeFilter.value === 'all' ? q.questionTypes?.[0]?.id === type.id : q.questionTypes?.some(item => item.id === type.id)) })).filter(section => section.questions.length) : [{ id, title: '', questions: group }]
  return { id, title: group[0].paperTitle ?? `${group[0].year} 年数学二 · 错题卷`, book: Boolean(chapter), mock: Boolean(group[0].paperId), questions: group, sections }
}))
let noticeTimer: number | undefined

function restartQueue() {
  // 本轮列表固定，标记掌握后不会移走当前卡片或打乱滚动位置。
  queueIds.value = filtered.value.map(q => q.id)
  round.value += 1
}
watch([mode, selectedYear, selectedPaper, keyword, statusFilter, typeFilter, levelFilter, demoMode], restartQueue, { immediate: true })
watch(selectedPaper, () => { typeFilter.value = 'all'; levelFilter.value = 'all' })
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
watch(() => [route.query.year, route.query.paper, route.query.question, route.query.view], jumpToRoute)
async function selectView(view: 'all' | 'review' | 'notes' | 'removed', targetYear = ['notes', 'removed'].includes(view) ? '' : selectedYear.value, targetPaper = view === 'all' ? selectedPaper.value : '') {
  directoryOpen.value = false
  statusFilter.value = 'all'
  typeFilter.value = 'all'
  levelFilter.value = 'all'
  await router.push({ name: 'practice', query: { ...(view !== 'all' ? { view } : {}), ...(targetYear && view !== 'review' ? { year: targetYear } : {}), ...(targetPaper && targetYear && targetPaper !== targetYear && view !== 'review' ? { paper: targetPaper } : {}) } })
  await jumpToRoute()
}
function persist(id: string, patch: { mastery?: Mastery; removed?: boolean; note?: string; reviews?: number }) {
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
function refreshNotesQueue() {
  // 清空笔记后等编辑结束再移出，避免输入途中卡片消失。
  if (mode.value === 'notes') queueIds.value = filtered.value.map(q => q.id)
}
function removeQuestion(id: string) {
  persist(id, { removed: true })
  queueIds.value = queueIds.value.filter(item => item !== id)
  undoRemovalId.value = id
  notice.value = '已移除题目，可在“已移除题目”中恢复。'
}
function restoreQuestion(id: string) {
  persist(id, { removed: false })
  queueIds.value = filtered.value.map(q => q.id)
  undoRemovalId.value = ''
  notice.value = '题目已恢复，笔记和熟练度已保留。'
}
async function exportPdf() {
  if (!queue.value.length || exportingPdf.value) return
  exportingPdf.value = true
  pdfTitle.value = `${heading.value} · ${queue.value.length}题`
  savedDocumentTitle = document.title
  document.title = pdfTitle.value
  await nextTick()
  try {
    await document.fonts.ready
    await Promise.all(Array.from(document.querySelectorAll<HTMLImageElement>('#practice-main img')).map(img => {
      img.loading = 'eager'
      return img.decode().catch(() => undefined)
    }))
    window.print()
  } catch {
    finishPdfExport()
    notice.value = '无法打开导出窗口，请重试。'
  }
}
function finishPdfExport() {
  if (!exportingPdf.value) return
  exportingPdf.value = false
  document.title = savedDocumentTitle
}
function exportBackup() {
  const blob = new Blob([JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), progress: progress.value }, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url; link.download = '数学二错题复习进度.json'; link.click()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
  notice.value = '已导出熟练度、笔记和题目移除记录。'
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
function syncProgress(event: StorageEvent) {
  if (event.key === PRACTICE_STORAGE_KEY || event.key === null) {
    progress.value = readPracticeProgress()
    queueIds.value = filtered.value.map(q => q.id)
  }
}
onMounted(() => {
  window.addEventListener('storage', syncProgress)
  window.addEventListener('afterprint', finishPdfExport)
  jumpToRoute()
})
onBeforeUnmount(() => {
  window.removeEventListener('storage', syncProgress)
  window.removeEventListener('afterprint', finishPdfExport)
  finishPdfExport()
  if (noticeTimer) window.clearTimeout(noticeTimer)
})
</script>

<template>
  <div class="practice-page" :class="{ 'pdf-export': exportingPdf }">
    <MathHeader hide-search />
    <div class="practice-layout">
      <aside class="directory" aria-label="错题分类">
        <button class="mobile-directory" :aria-expanded="directoryOpen" aria-controls="directory-content" @click="directoryOpen = !directoryOpen"><PracticeIcon name="book" />题库、试卷与复习目录<span>{{ directoryOpen ? '收起' : '展开' }}</span></button>
        <div id="directory-content" class="directory-content" :class="{ open: directoryOpen }">
          <div class="directory-brand"><PracticeIcon name="book" /><div><strong>错题工作台</strong></div></div>
          <nav class="collection-nav" aria-label="错题集合">
            <button :aria-pressed="mode === 'all'" :class="{ active: mode === 'all' }" @click="selectView('all')"><PracticeIcon name="book" />题库与试卷<span>{{ visibleQuestions.length }}</span></button>
            <button :aria-pressed="mode === 'review'" :class="{ active: mode === 'review' }" @click="selectView('review')"><PracticeIcon name="repeat" />错题再练<span>{{ pendingCount }}</span></button>
            <button :aria-pressed="mode === 'notes'" :class="{ active: mode === 'notes' }" @click="selectView('notes')"><PracticeIcon name="note" />有笔记的题目<span>{{ notedCount }}</span></button>
            <button :aria-pressed="mode === 'removed'" :class="{ active: mode === 'removed' }" @click="selectView('removed')"><PracticeIcon name="trash" />已移除题目<span>{{ removedCount }}</span></button>
          </nav>
          <template v-if="mode !== 'review' && bookDirectory.length"><div class="directory-heading">李林 880 · 按章节<span>{{ bookDirectory.length }} 章</span></div><nav class="year-nav book-nav" aria-label="李林880章节"><button v-for="item in bookDirectory" :key="item.id" :aria-pressed="selectedPaper === item.id" :class="{ active: selectedPaper === item.id }" @click="selectView(mode, String(item.year), item.id)"><span>{{ item.title.replace('李林880 · ', '') }}</span><span>{{ mode === 'removed' ? item.removed : mode === 'notes' ? item.notes : item.count }}</span></button></nav></template>
          <div v-if="mode !== 'review'" class="directory-heading">{{ mode === 'removed' ? '移除试卷' : mode === 'notes' ? '笔记试卷' : '试卷目录' }}<span>{{ examDirectory.length }} 张试卷</span></div>
          <nav v-if="mode !== 'review'" class="year-nav" aria-label="试卷分类">
            <button v-if="mode === 'notes' || mode === 'removed'" :aria-pressed="!selectedYear" :class="{ active: !selectedYear }" @click="selectView(mode)"><span>全部题目</span><span>{{ mode === 'removed' ? removedCount : notedCount }}</span></button>
            <button v-for="item in examDirectory" :aria-pressed="selectedPaper === item.id" :key="item.id" :class="{ active: selectedPaper === item.id }" @click="selectView(mode, String(item.year), item.id)"><span>{{ item.title }}</span><span>{{ mode === 'removed' ? item.removed : mode === 'notes' ? item.notes : item.count }}</span></button>
          </nav>
          <p v-if="!papers.length" class="directory-empty">题目上传后，这里会按真题年份和模拟卷套数生成目录。</p>
          <div class="progress-card"><div><span>已掌握</span><strong>{{ masteredCount }} <small>/ {{ visibleQuestions.length }}</small></strong></div><progress :value="masteredCount" :max="visibleQuestions.length || 1" aria-label="正式错题掌握进度" /><p>不熟练和不会的题，会自动收集到错题再练。</p></div>
          <div class="backup-actions"><button @click="exportBackup"><PracticeIcon name="download" />导出进度</button><button @click="importInput?.click()"><PracticeIcon name="upload" />恢复进度</button><input ref="importInput" class="visually-hidden" type="file" accept=".json,application/json" aria-label="选择进度备份" @change="importBackup" /></div>
          <p class="storage-hint">进度保存在当前浏览器；换设备时可导出备份再恢复。</p>
        </div>
      </aside>
      <main id="practice-main">
        <header class="workspace-heading"><div><h1>{{ heading }}</h1><p v-if="mode === 'removed'">移除的题目可以随时恢复</p><p v-else-if="mode === 'notes'">写过笔记的题目，按试卷汇总</p><p v-else-if="mode === 'review'">所有年份的不熟练和不会题目</p></div><button v-if="mode === 'all' || mode === 'review'" class="primary-button" @click="mode === 'review' ? restartQueue() : selectView('review')"><PracticeIcon name="repeat" />{{ mode === 'review' ? '重新开始本轮' : '全部错题再练' }}<span v-if="mode !== 'review'">{{ pendingCount }}</span></button></header>
        <section v-if="!questions.length" class="preview-banner"><PracticeIcon name="book" /><div><strong>错题本已就绪，等待录入你的题目</strong><p>下方使用你提供的截图演示操作，年份尚未确认，不计入正式题库和复习统计。</p></div><button @click="demoMode = !demoMode">{{ demoMode ? '收起示例' : '体验示例' }}</button></section>
        <p v-if="storageFailed" role="alert" class="storage-error">浏览器暂时无法保存进度，请立即导出备份以保留本次标记和笔记。</p>
        <p class="print-summary print-only">{{ pdfTitle }} · 含答案解析与笔记</p>
        <section v-if="selectedChapter && mode !== 'review'" class="chapter-filters" aria-label="880题型筛选"><div class="chapter-intro"><p>沿用已有分类 · {{ selectedChapter.count }} 道题 · {{ selectedChapter.types.length }} 个题型</p><a :href="`${baseUrl}${selectedChapter.sourceFile}`" target="_blank" rel="noopener">查看原分类总结</a></div><div class="chapter-filter-controls"><label>具体题型<select v-model="typeFilter" aria-label="按具体题型筛选"><option value="all">全部题型</option><option v-for="item in chapterTypes" :key="item.id" :value="item.id">{{ item.order }}. {{ item.title }}</option></select></label><label>原书分层<select v-model="levelFilter" aria-label="按原书基础综合拓展筛选"><option value="all">基础、综合与拓展</option><option v-for="level in ['基础题', '综合题', '拓展题']" :key="level" :value="level">{{ level }}</option></select></label></div><p class="chapter-hint">同一道题的不同小问可对应多个题型，筛选时会一并收录。</p></section>
        <div class="toolbar"><div class="scope-label">{{ demoMode ? '交互示例' : mode === 'review' ? '全部年份错题' : mode === 'removed' ? (selectedYear ? `${paperScope} · 已移除题目` : '全部已移除题目') : mode === 'notes' ? (selectedYear ? `${paperScope} · 笔记题目` : '全部笔记题目') : paperScope }}<span>{{ queue.length }} 题 · 已标记 {{ markedInQueue }}</span></div><div class="toolbar-filters"><button class="pdf-button" :disabled="!queue.length || exportingPdf" @click="exportPdf"><PracticeIcon name="download" />{{ exportingPdf ? '准备导出…' : '导出 PDF' }}</button><label class="question-search"><PracticeIcon name="search" /><input v-model="keyword" maxlength="80" aria-label="搜索错题" :placeholder="mode === 'notes' ? '搜索题目、笔记内容' : '搜索题目、知识点'" /></label><select v-model="statusFilter" aria-label="按掌握程度筛选"><option value="all">全部状态</option><option value="unmarked">未标记</option><option v-for="status in statuses" :key="status.value" :value="status.value">{{ status.label }}</option></select></div></div>
        <div v-if="queue.length" class="question-list">
          <div v-if="mode === 'review'" class="year-questions review-questions"><PracticeQuestionCard v-for="(question, index) in queue" :key="`${round}-${question.id}`" :question="question" :index="index + 1" :progress="activeProgress[question.id]" :storage-failed="storageFailed" :print-mode="exportingPdf" :manageable="!demoMode" @remove="removeQuestion" @restore="restoreQuestion" @note-blur="refreshNotesQueue" @mark="mark" @note="saveNote" /></div>
          <section v-for="group in mode === 'review' ? [] : yearGroups" :id="`practice-year-${group.id}`" :key="group.id" class="year-section" :aria-labelledby="`year-title-${group.id}`">
            <header class="paper-heading"><div><span class="paper-label">{{ mode === 'removed' ? '已移除题目' : mode === 'notes' ? '有笔记的题目' : group.book ? '2027 版 · 原分类题型' : group.mock ? '模拟卷与配套练习' : '真题与配套练习' }}</span><h2 :id="`year-title-${group.id}`">{{ group.title }}{{ mode === 'removed' ? ' · 已移除题目' : mode === 'notes' ? ' · 笔记题目' : '' }}</h2></div><span>{{ group.questions.length }} 题</span></header>
            <section v-for="section in group.sections" :key="section.id" class="type-section" :aria-label="section.title || group.title"><h3 v-if="section.title" class="type-heading">{{ section.title }}<small>{{ section.questions.length }} 题</small></h3><div class="year-questions"><PracticeQuestionCard v-for="(question, index) in section.questions" :key="`${round}-${question.id}`" :question="question" :index="index + 1" :progress="activeProgress[question.id]" :storage-failed="storageFailed" :print-mode="exportingPdf" :show-note="mode === 'notes' || mode === 'removed'" :manageable="!demoMode" :removed="mode === 'removed'" @remove="removeQuestion" @restore="restoreQuestion" @note-blur="refreshNotesQueue" @mark="mark" @note="saveNote" /></div></section>
          </section>
          <footer class="paper-end"><strong>{{ mode === 'review' ? '错题再练 · 本轮结束' : mode === 'removed' ? '已移除题目 · 本页结束' : mode === 'notes' ? '笔记汇总 · 本页结束' : `${paperScope} · 本卷结束` }}</strong></footer>
        </div>
        <section v-else class="empty-state"><PracticeIcon :name="mode === 'review' ? 'check' : 'book'" /><h2>{{ mode === 'removed' ? '暂无符合条件的已移除题目' : mode === 'notes' ? '暂无符合条件的笔记题目' : mode === 'review' ? '这里暂时没有需要再练的题' : questions.length ? '没有符合筛选条件的题目' : '准备好收集你的第一道错题' }}</h2><p>{{ mode === 'removed' ? '点击题目上的“移除题目”后，会收集到这里，笔记和熟练度保留。' : mode === 'notes' ? '在题目下方写下笔记后，会自动收集到这里；也可以调整年份、状态或搜索条件。' : mode === 'review' ? '将题目标为“不熟练”或“不会”后，它们会自动出现在这里。' : questions.length ? '试试其他年份、状态，或清空搜索关键词。' : '上传题目时附上年份，我会把题干、答案和解析一起录入。' }}</p><button v-if="mode !== 'all'" class="primary-button" @click="selectView('all')">返回错题本</button></section>
        <p v-if="notice" class="notice" role="status" aria-live="polite">{{ notice }}<button v-if="undoRemovalId && notice.startsWith('已移除')" @click="restoreQuestion(undoRemovalId)">撤销</button></p>
      </main>
    </div>
  </div>
</template>

<style scoped>
.print-only { display: none; }
.chapter-filters { margin-top: 20px; border: 1px solid var(--line); border-radius: 12px; padding: 16px 18px; background: var(--paper); }
.chapter-intro { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 8px; font-size: 13px; }
.chapter-intro p { margin: 0; color: var(--ink-soft); }.chapter-intro a { color: var(--accent-dark); padding: 6px 0; }
.chapter-filter-controls { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 12px; }.chapter-filter-controls label { display: grid; gap: 6px; min-width: 0; flex: 1 1 180px; font-size: 12px; color: var(--ink-soft); }.chapter-filter-controls label:first-child { flex: 3 1 280px; }.chapter-filter-controls select { width: 100%; max-width: 100%; min-width: 0; font-size: 14px; }.chapter-hint { margin: 10px 0 0; font-size: 12px; color: var(--muted); line-height: 1.8; }
.type-section + .type-section { margin-top: 30px; }.type-heading { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin: 0 0 14px; color: var(--ink); font-size: 16px; line-height: 1.7; }.type-heading small { flex-shrink: 0; font-size: 12px; color: var(--muted); font-weight: 400; }.book-nav button { line-height: 1.6; font-size: 13px; }
.pdf-button { display: inline-flex; align-items: center; gap: 7px; min-height: 44px; border: 1px solid var(--line); border-radius: 8px; padding: 0 12px; background: var(--paper); color: var(--accent-dark); font-size: 12px; white-space: nowrap; }.pdf-button:disabled { opacity: .5; cursor: default; }
.practice-page { min-height: 100vh; }
.practice-layout { display: grid; grid-template-columns: 242px minmax(0, 1fr); gap: 32px; width: min(1280px, calc(100% - 64px)); margin: 0 auto; padding: 32px 0 72px; }
svg { width: 19px; height: 19px; flex-shrink: 0; }
button { transition: background .16s, border-color .16s, color .16s; }
.directory { min-width: 0; }.directory-content { position: sticky; top: 20px; max-height: calc(100vh - 40px); overflow-y: auto; border: 1px solid var(--line); border-radius: 14px; padding: 16px 12px; background: var(--paper); scrollbar-gutter: stable; }
.directory-brand { display: flex; gap: 12px; align-items: center; padding: 6px 10px 20px; border-bottom: 1px solid var(--line); margin-bottom: 14px; }.directory-brand > svg { width: 25px; height: 25px; color: var(--accent); }.directory-brand strong { display: block; font-size: 17px; }.directory-brand span { display: block; margin-top: 4px; color: var(--muted); font-size: 12px; }
.collection-nav, .year-nav { display: grid; gap: 5px; }.collection-nav button, .year-nav button { display: flex; gap: 10px; align-items: center; width: 100%; min-height: 46px; border: 1px solid transparent; border-radius: 9px; padding: 10px 13px; background: transparent; color: var(--ink-soft); text-align: left; font-size: 14px; }.collection-nav button > span:last-child, .year-nav button > span:last-child { margin-left: auto; font-size: 12px; font-variant-numeric: tabular-nums; }.collection-nav button.active, .year-nav button.active { background: var(--accent-tint); color: var(--accent-dark); font-weight: 700; border-color: #dbe5fc; }.collection-nav button:hover, .year-nav button:not(:disabled):hover { border-color: var(--line-strong); background: var(--surface-soft); }
.year-nav button:disabled { opacity: .45; cursor: default; }
.directory-heading { display: flex; justify-content: space-between; margin: 18px 13px 10px; font-size: 12px; font-weight: 650; color: var(--ink-soft); }.directory-heading span { color: var(--muted); font-weight: 400; }.year-nav { gap: 3px; }.year-nav button { min-height: 40px; padding: 8px 13px; }.directory-empty { margin: 0 13px; font-size: 13px; color: var(--muted); line-height: 1.8; }
.progress-card { margin-top: 20px; border: 1px solid var(--line); border-radius: 10px; padding: 14px; background: var(--surface-soft); }.progress-card > div { display: flex; align-items: center; justify-content: space-between; font-size: 13px; }.progress-card strong { font-size: 21px; color: var(--accent-dark); }.progress-card small { font-size: 13px; color: var(--muted); font-weight: 400; }
progress { width: 100%; height: 5px; display: block; margin-top: 12px; border: 0; border-radius: 9px; overflow: hidden; background: var(--line); accent-color: var(--success); }progress::-webkit-progress-bar { background: var(--line); }progress::-webkit-progress-value { background: var(--success); }.progress-card p { margin: 12px 0 0; color: var(--muted); font-size: 12px; line-height: 1.8; }
.backup-actions { display: flex; gap: 6px; margin-top: 16px; }.backup-actions button { display: flex; align-items: center; gap: 7px; min-height: 44px; border: 0; background: transparent; color: var(--ink-soft); padding: 0 9px; font-size: 12px; }.backup-actions svg { width: 15px; }.backup-actions button:hover { color: var(--accent); }.storage-hint { margin: 6px 10px 0; color: var(--muted); font-size: 12px; line-height: 1.8; }
main { min-width: 0; }.workspace-heading { display: flex; justify-content: space-between; align-items: center; gap: 20px; }.eyebrow { color: var(--muted); font-size: 12px; letter-spacing: .06em; }h1 { margin: 0; font-size: 28px; line-height: 1.4; font-weight: 750; letter-spacing: -.035em; }.workspace-heading p { margin: 0; color: var(--ink-soft); font-size: 14px; }
.primary-button { display: inline-flex; align-items: center; justify-content: center; gap: 9px; min-height: 44px; flex-shrink: 0; border: 0; border-radius: 10px; padding: 11px 18px; background: var(--accent); color: white; font-size: 13px; font-weight: 600; }.primary-button:hover { background: var(--accent-dark); }.primary-button > span { border-left: 1px solid #ffffff50; padding-left: 9px; }
.preview-banner { display: flex; align-items: center; gap: 12px; margin-top: 25px; border: 1px solid var(--line); border-radius: 10px; padding: 14px 16px; background: var(--paper); }.preview-banner > svg { color: var(--accent); }.preview-banner strong { font-size: 13px; font-weight: 600; }.preview-banner p { margin: 4px 0 0; color: var(--muted); font-size: 12px; }.preview-banner button { min-height: 44px; flex-shrink: 0; margin-left: auto; border: 0; padding: 0 8px; background: transparent; color: var(--accent-dark); font-size: 12px; font-weight: 600; }
.toolbar { display: flex; justify-content: space-between; align-items: center; gap: 16px; margin-top: 22px; padding: 16px 18px; border: 1px solid var(--line); border-radius: 12px; background: var(--paper); }.scope-label { font-size: 14px; font-weight: 650; }.scope-label > span { display: block; margin-top: 4px; margin-left: 0; color: var(--muted); font-size: 12px; font-weight: 400; }.toolbar-filters { display: flex; gap: 9px; }.question-search { display: flex; align-items: center; gap: 8px; width: 218px; min-height: 42px; border: 1px solid var(--line); border-radius: 8px; padding: 0 11px; background: var(--paper); color: var(--muted); }.question-search svg { width: 16px; }.question-search input { width: 100%; min-width: 0; border: 0; outline: 0; background: transparent; color: var(--ink); font-size: 12px; }.question-search:focus-within { outline: 3px solid var(--focus-ring); border-color: var(--accent); }select { min-height: 44px; max-width: 130px; border: 1px solid var(--line); border-radius: 8px; padding: 0 10px; background: var(--paper); color: var(--ink-soft); font-size: 12px; }
.question-list { margin-top: 12px; }
.year-section { scroll-margin-top: 20px; margin-top: 0; }.year-section + .year-section { margin-top: 30px; }
.year-heading { display: flex; align-items: baseline; gap: 12px; margin-bottom: 10px; }.year-heading h2 { margin: 0; color: var(--ink); font-size: 20px; font-weight: 700; }.year-heading > span { color: var(--muted); font-size: 12px; }
.paper-heading { display: flex; align-items: center; justify-content: space-between; gap: 16px; border-bottom: 1px solid var(--line); margin: 8px 0 18px; padding: 18px 4px 16px; }.paper-label { color: var(--accent-dark); font-size: 12px; font-weight: 650; letter-spacing: .08em; }.paper-heading h2 { margin: 4px 0 0; color: var(--ink); font-size: 21px; line-height: 1.5; font-weight: 700; }.paper-heading > span { color: var(--muted); font-size: 12px; white-space: nowrap; border: 1px solid var(--line); border-radius: 6px; padding: 4px 10px; background: var(--paper); }
.year-questions { display: grid; gap: 20px; }.paper-end { display: flex; align-items: center; justify-content: center; gap: 12px; margin-top: 26px; border-top: 2px solid var(--line-strong); border-bottom: 1px solid var(--line); padding: 24px 0; color: var(--ink-soft); font-size: 14px; }
.empty-state { display: grid; justify-items: center; text-align: center; gap: 10px; margin-top: 20px; border: 1px solid var(--line); border-radius: 16px; padding: 65px 24px; background: var(--paper); }.empty-state > svg { width: 35px; height: 35px; margin-bottom: 8px; color: var(--accent); }.empty-state h2 { margin: 0; font-size: 20px; }.empty-state p { max-width: 460px; margin: 0 0 10px; color: var(--muted); font-size: 14px; }.notice { position: fixed; z-index: 20; bottom: 22px; right: 24px; max-width: calc(100% - 40px); margin: 0; border: 1px solid var(--line); border-radius: 8px; padding: 12px 18px; background: var(--paper); box-shadow: 0 4px 20px #18223818; color: var(--accent-dark); font-size: 13px; }.storage-error { margin-top: 20px; padding: 12px; border-radius: 8px; background: var(--danger-tint); color: var(--danger); font-size: 13px; }.mobile-directory { display: none; }
.notice button { margin-left: 12px; min-height: 44px; border: 0; background: transparent; color: var(--accent-dark); font-weight: 700; text-decoration: underline; }
.visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
@media (max-width: 1100px) { .practice-layout { grid-template-columns: 205px minmax(0, 1fr); gap: 24px; width: calc(100% - 40px); }.toolbar { flex-wrap: wrap; }.question-search { width: 200px; } }
@media (max-width: 760px) { .practice-layout { display: block; width: calc(100% - 28px); padding-top: 16px; }.directory { margin-bottom: 18px; }.mobile-directory { display: flex; align-items: center; gap: 9px; width: 100%; min-height: 44px; border: 1px solid var(--line); border-radius: 8px; padding: 0 12px; background: var(--paper); font-size: 13px; }.mobile-directory span { margin-left: auto; color: var(--muted); font-size: 12px; }.directory-content { display: none; position: static; max-height: none; padding: 12px; margin-top: 8px; }.directory-content.open { display: block; }.directory-brand { display: none; }.year-nav { grid-template-columns: repeat(2, minmax(0, 1fr)); max-height: none; }.workspace-heading { flex-wrap: wrap; gap: 10px; }h1 { font-size: 25px; }.workspace-heading p { font-size: 13px; }.primary-button { padding: 8px 11px; }.toolbar { gap: 12px; margin-top: 14px; }.toolbar-filters { width: 100%; flex-wrap: wrap; }.toolbar { padding: 14px; }.toolbar-filters .question-search { min-width: 120px; }.question-search { flex: 1; width: auto; }.scope-label { font-size: 14px; }.year-heading h2 { font-size: 19px; }.year-questions { gap: 12px; }.empty-state { padding: 35px 18px; } }
</style>

<style scoped>
@media (max-width: 600px) { .paper-heading h2 { font-size: 19px; }.paper-heading { padding: 14px 2px; } }
</style>

<style>
@media print {
  @page { size: A4; margin: 15mm; }
  body { background: white !important; }
  .pdf-export ~ .app-footer, .pdf-export .site-header, .pdf-export .directory,
  .pdf-export .toolbar, .pdf-export .chapter-filters, .pdf-export .workspace-heading, .pdf-export .notice,
  .pdf-export .storage-error, .pdf-export .paper-end, .route-loading-overlay { display: none !important; }
  .pdf-export .practice-layout { display: block; width: 100%; margin: 0; padding: 0; }
  .pdf-export .print-only { display: block !important; }
  .pdf-export .print-summary { font-size: 16pt; font-weight: 700; margin: 0 0 14pt; }
  .pdf-export .question-list { margin: 0; }
  .pdf-export .year-questions { display: block; }
  .pdf-export .question-card { border: 0; border-bottom: 1px solid #ccc; border-radius: 0; padding: 12pt 0; margin: 0; break-inside: avoid; }
  .pdf-export .question-card:has(.question-source-images) { break-inside: auto; }
  .pdf-export .source-images a { break-inside: avoid; padding: 0; }
  .pdf-export .question-card h3, .pdf-export .options legend { display: none; }
  .pdf-export .question-actions, .pdf-export .question-meta-actions, .pdf-export .choice-feedback,
  .pdf-export .note-area, .pdf-export .option input, .pdf-export .option-result { display: none !important; }
  .pdf-export .question-meta { break-after: avoid; }
  .pdf-export .question-stem, .pdf-export .answer-panel, .pdf-export .print-note { font-size: 10.5pt; line-height: 1.6; }
  .pdf-export .math-markdown { color: #000; font-size: 10.5pt !important; line-height: 1.6 !important; }
  .pdf-export .katex-display, .pdf-export .reading-math { overflow: visible !important; break-inside: avoid; }
  .pdf-export .options { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .pdf-export .option { font-size: 10.5pt; border-color: #ccc !important; background: white !important; color: #000 !important; min-height: 0; }
  .pdf-export .question-figures img { max-height: 180pt; }
  .pdf-export .print-note p { white-space: pre-wrap; overflow-wrap: anywhere; }
  .pdf-export .paper-heading { break-after: avoid; }
}
</style>
