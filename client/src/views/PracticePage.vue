<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MathHeader from '@/components/MathHeader.vue'
import PracticeQuestionCard from '@/components/PracticeQuestionCard.vue'
import PracticeImagePreview from '@/components/PracticeImagePreview.vue'
import PracticeIcon from '@/components/PracticeIcon.vue'
import PracticeToolbar from '@/components/PracticeToolbar.vue'
import { usePracticeAutoHide } from '@/composables/usePracticeAutoHide'
import { usePracticePosition } from '@/composables/usePracticePosition'
import { createPracticeCatalog, paperKey } from '@/math/practiceCatalog'
import ll880Chapters from '@/content/ll880-classification.json'
import { demoQuestion } from '@/math/practiceDemo'
import { hasNote, isPending, matchesPracticeStatus, mergeProgress, normalizeProgress, PRACTICE_STORAGE_KEY, PRACTICE_PROGRESS_SAVED_EVENT, PRACTICE_REMOVALS_CHANGED_EVENT, REMOVED_RETENTION_MS, practiceAutoHideKey, readPracticeProgress, savePracticeProgress, type Mastery, type QuestionImage, type PracticeQuestion, type PracticeProgress } from '@/math/practice'
import { readPracticeLocations, practiceLocationContext, type PracticeLocation } from '@/math/practiceLocation'

const props = withDefaults(defineProps<{ collection?: 'exams' | 'll880'; source: PracticeQuestion[] }>(), { collection: 'exams' })
const isBook = props.collection === 'll880'
const routeName = isBook ? 'll880' : 'practice'
const route = useRoute()
const router = useRouter()
const baseUrl = import.meta.env.BASE_URL
const imagePreview = ref<InstanceType<typeof PracticeImagePreview>>()
function openImage(image: QuestionImage, trigger: HTMLElement) { imagePreview.value?.open(image, trigger) }
watch(() => route.fullPath, () => imagePreview.value?.close())
const catalog = createPracticeCatalog(props.source, props.collection)
const questions = catalog.questions
const questionById = new Map([...questions, demoQuestion].map(q => [q.id, q]))
const progress = ref<PracticeProgress>(readPracticeProgress())
const storedLocations = readPracticeLocations(props.collection).filter(location => questions.some(q => q.id === location.questionId) && !progress.value[location.questionId]?.deletedAt)
const lastInteractedQuestion = questions.filter(q => !progress.value[q.id]?.removed && progress.value[q.id]?.updatedAt > 0).sort((a, b) => progress.value[b.id].updatedAt - progress.value[a.id].updatedAt)[0]
const fallbackLocation: PracticeLocation | undefined = lastInteractedQuestion ? {
  questionId: lastInteractedQuestion.id, view: 'all', year: String(lastInteractedQuestion.year), paper: paperKey(lastInteractedQuestion), status: 'all', type: 'all', level: 'all', keyword: '', offset: 0, updatedAt: progress.value[lastInteractedQuestion.id].updatedAt,
} : undefined
const lastLocations = ref<PracticeLocation[]>(storedLocations.length ? storedLocations : fallbackLocation ? [fallbackLocation] : [])
const selectedLocationContext = ref(lastLocations.value[0] ? practiceLocationContext(lastLocations.value[0]) : '')
const lastLocation = computed(() => lastLocations.value.find(location => practiceLocationContext(location) === selectedLocationContext.value) ?? lastLocations.value[0])
const resumeOptions = computed(() => lastLocations.value.map((location, index) => {
  const q = questionById.get(location.questionId)!
  const title = q.bookId ? `${q.paperTitle} · ${q.source.replace('李林880 · ', '')}` : `${q.paperTitle ?? `${q.year} 年`} · ${q.kind === 'exercise' ? '补充练习' : '第'} ${q.number} 题`
  const view = practiceLocationContext(location) === 'favorites' ? '收藏' : { all: '练习', review: '错题再练', notes: '笔记', removed: '已移除' }[location.view]
  const date = new Date(location.updatedAt)
  const time = Number.isNaN(date.getTime()) ? '' : date.toLocaleString('zh-CN', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false })
  return { key: practiceLocationContext(location), label: `${index ? '上一次' : '最近一次'} · ${view} · ${title}${time ? ` · ${time}` : ''}` }
}))
function refreshResumeLocations(selectNew = false) {
  const history = readPracticeLocations(props.collection).filter(location => questions.some(q => q.id === location.questionId) && !progress.value[location.questionId]?.deletedAt)
  if (!history.length) {
    lastLocations.value = lastLocations.value.filter(location => !progress.value[location.questionId]?.deletedAt)
    selectedLocationContext.value = lastLocations.value[0] ? practiceLocationContext(lastLocations.value[0]) : ''
    return
  }
  const previousContext = lastLocations.value[0] ? practiceLocationContext(lastLocations.value[0]) : ''
  lastLocations.value = history
  if ((selectNew && previousContext !== practiceLocationContext(history[0])) || !history.some(location => practiceLocationContext(location) === selectedLocationContext.value)) selectedLocationContext.value = practiceLocationContext(history[0])
}
const resuming = ref(false)
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
const statusFilter = ref(route.query.view === 'review' ? 'pending' : 'all')
const displayLabels: Record<string, string> = { all: '全部题目', pending: '错题再练', unmarked: '未做过的题目', favorites: '收藏的题目', unfamiliar: '不熟练的题目', unknown: '不会的题目', mastered: '已掌握的题目' }
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
const activeProgress = computed(() => demoMode.value ? demoProgress.value : progress.value)
const sourceQuestions = computed(() => demoMode.value ? [demoQuestion] : questions)
const queueIdSet = computed(() => new Set(queueIds.value))
const { deadlines: autoHideDeadlines, hidden: hiddenMastered, previous: autoHidePriorProgress, cancel: cancelAutoHide, save: saveAutoHides, restore: restoreAutoHides, schedule: scheduleAutoHide, flush: flushAutoHides, reconcile: reconcileAutoHides, reveal: revealHidden } = usePracticeAutoHide({
  collection: props.collection, progress: activeProgress, paused: exportingPdf, demo: demoMode,
  isKnown: id => questionById.has(id), isRemovedView: () => mode.value === 'removed',
  onHide: removeFromQueue, onFailure: () => { storageFailed.value = true },
})
const { interaction: trackQuestionInteraction, schedule: scheduleLocationSave, finish: finishLocationTracking, remember: rememberQuestion, isActive: locationPageActive } = usePracticePosition({
  collection: props.collection, paused: computed(() => resuming.value || exportingPdf.value),
  capture: (id, element) => {
    if (demoMode.value || mode.value === 'removed' || !queueIdSet.value.has(id) || progress.value[id]?.removed) return
    return { questionId: id, view: mode.value, year: selectedYear.value, paper: selectedPaper.value, status: statusFilter.value, type: typeFilter.value, level: levelFilter.value, keyword: keyword.value, offset: Math.round(-element.getBoundingClientRect().top), updatedAt: Date.now() }
  },
  onFinish: () => refreshResumeLocations(), onSaved: () => refreshResumeLocations(true),
  onFailure: () => { notice.value = '浏览器暂时无法保存上次做题位置。' },
})
const retainedCount = computed(() => questions.filter(q => !progress.value[q.id]?.deletedAt).length)
const visibleQuestions = computed(() => questions.filter(q => !progress.value[q.id]?.removed && !progress.value[q.id]?.deletedAt))
const removedCount = computed(() => questions.filter(q => progress.value[q.id]?.removed && !progress.value[q.id]?.deletedAt).length)
const pendingCount = computed(() => visibleQuestions.value.filter(q => isPending(progress.value[q.id]) || progress.value[q.id]?.favorite).length)
const notedCount = computed(() => visibleQuestions.value.filter(q => hasNote(progress.value[q.id])).length)
const favoriteCount = computed(() => visibleQuestions.value.filter(q => progress.value[q.id]?.favorite).length)
const hiddenInScope = computed(() => questions.filter(q => hiddenMastered.value.has(q.id) && isCurrentScope(q)).length)
const workspaceTitle = computed(() => mode.value === 'all' ? (papers.value.find(paper => paper.id === selectedPaper.value)?.title.replace('李林880 · ', '') ?? heading.value) : mode.value === 'review' ? statusFilter.value === 'favorites' ? '我的收藏' : '错题再练' : mode.value === 'notes' ? '题目笔记' : '已移除题目')
const workspaceSubtitle = computed(() => mode.value === 'removed' ? '移除满 5 小时后自动清理，到期前可恢复。' : mode.value === 'all' ? isBook ? `2027 版 · ${selectedChapter.value?.types.length ?? 0} 个题型` : selectedPaper.value.startsWith('zy2026-') ? '模拟试卷与配套练习' : '数学二真题与配套练习' : `${isBook ? '李林 880' : '试卷题库'} · ${selectedYear.value ? papers.value.find(paper => paper.id === selectedPaper.value)?.title ?? '' : '全部' + (isBook ? '章节' : '试卷')}`)
const masteredCount = computed(() => visibleQuestions.value.filter(q => progress.value[q.id]?.mastery === 'mastered').length)
function isCurrentScope(q: (typeof questions)[number]) {
  return mode.value === 'review' || demoMode.value || (['notes', 'removed'].includes(mode.value) && !selectedYear.value) || paperKey(q) === selectedPaper.value
}
function matchesQuestion(q: (typeof questions)[number], view = mode.value) {
  const item = activeProgress.value[q.id]
  const filterItem = autoHideDeadlines.value[q.id] && statusFilter.value !== 'mastered' ? autoHidePriorProgress.get(q.id) : item
  return !item?.deletedAt && (view === 'removed' ? Boolean(item?.removed) : !item?.removed)
    && (view !== 'notes' || hasNote(item))
    && (typeFilter.value === 'all' || q.questionTypes?.some(type => type.id === typeFilter.value))
    && (levelFilter.value === 'all' || q.level === levelFilter.value)
    && (item?.favorite || matchesPracticeStatus(filterItem, statusFilter.value))
    && (!keyword.value.trim() || `${catalog.searchText.get(q.id) ?? q.stem.toLowerCase()} ${view === 'notes' ? item?.note?.toLowerCase() ?? '' : ''}`.includes(keyword.value.trim().toLowerCase()))
}
function isListed(q: (typeof questions)[number], view = mode.value) {
  if (view === mode.value && isCurrentScope(q)) return queueIdSet.value.has(q.id)
  return matchesQuestion(q, view) && (!hiddenMastered.value.has(q.id) || Boolean(activeProgress.value[q.id]?.favorite))
}
const allDisplayCount = computed(() => questions.filter(q => isListed(q, 'all')).length)
const papers = computed(() => catalog.papers.filter(paper => paper.questions.some(q => !progress.value[q.id]?.deletedAt)).map(({ questions: group, ...paper }) => ({ ...paper, count: group.filter(q => isListed(q)).length })))
const directoryPapers = computed(() => ['removed', 'notes'].includes(mode.value) ? papers.value.filter(item => item.count > 0) : papers.value)
const directoryTotal = computed(() => papers.value.reduce((sum, item) => sum + item.count, 0))
const bookDirectory = computed(() => directoryPapers.value.filter(item => item.book))
const examDirectory = computed(() => directoryPapers.value.filter(item => !item.book))
const examGroups = computed(() => [
  { id: 'real', title: '真题', papers: examDirectory.value.filter(item => item.series === 'real') },
  { id: 'zy2026', title: '2026 版张宇四套卷', papers: examDirectory.value.filter(item => item.series === 'zy2026') },
].filter(group => group.papers.length))
const expandedGroups = ref<string[]>([])
watch(selectedPaper, id => {
  const group = examGroups.value.find(group => group.papers.some(paper => paper.id === id))
  if (group && !expandedGroups.value.includes(group.id)) expandedGroups.value.push(group.id)
}, { immediate: true })
function toggleGroup(id: string, event: Event) {
  const open = (event.target as HTMLDetailsElement).open
  expandedGroups.value = open ? [...new Set([...expandedGroups.value, id])] : expandedGroups.value.filter(value => value !== id)
}
const filtered = computed(() => sourceQuestions.value.filter(q => isCurrentScope(q) && matchesQuestion(q)))
const queue = computed(() => queueIds.value.map(id => questionById.get(id)).filter(q => q !== undefined))
const heading = computed(() => demoMode.value ? '错题示例' : mode.value === 'removed' ? (isBook ? '880 · 已移除题目' : '试卷 · 已移除题目') : mode.value === 'notes' ? (isBook ? '880 · 题目笔记' : '试卷 · 题目笔记') : mode.value === 'review' ? `${isBook ? '李林 880' : '试卷'} · ${displayLabels[statusFilter.value] ?? '题目筛选'}` : isBook ? '李林 880 · 按题型练习' : '数学二试卷错题本')
const markedInQueue = computed(() => queue.value.filter(q => activeProgress.value[q.id]?.mastery).length)
const paperScope = computed(() => {
  const selected = papers.value.find(item => item.id === selectedPaper.value)
  return selected ? selected.title : isBook ? '李林 880' : '错题卷'
})
const yearGroups = computed(() => [...new Set(queue.value.map(q => q.paperId ?? String(q.year)))].map(id => {
  const group = queue.value.filter(q => (q.paperId ?? String(q.year)) === id)
  const chapter = ll880Chapters.find(item => item.id === id)
  const types = chapter?.types ?? [...new Map(group.flatMap(q => q.questionTypes ?? []).map(type => [type.id, type])).values()]
  const sections = types.filter(type => typeFilter.value === 'all' || type.id === typeFilter.value).map(type => ({ id: type.id, title: type.title, questions: group.filter(q => typeFilter.value === 'all' ? q.questionTypes?.[0]?.id === type.id : q.questionTypes?.some(item => item.id === type.id)) })).filter(section => section.questions.length)
  const ungrouped = group.filter(q => !q.questionTypes?.length)
  if (ungrouped.length) sections.push({ id, title: '', questions: ungrouped })
  return { id, title: group[0].paperTitle ?? `${group[0].year} 年数学二`, book: Boolean(chapter), mock: Boolean(group[0].paperId), exerciseOnly: group.every(q => q.kind === 'exercise'), questions: group, sections }
}))
let noticeTimer: number | undefined

function restartQueue() {
  // 标记后先保留当前卡片，由独立计时器在 30 秒后移出。
  updateQueue()
  round.value += 1
}
function updateQueue() { queueIds.value = filtered.value.filter(q => !hiddenMastered.value.has(q.id) || activeProgress.value[q.id]?.favorite).map(q => q.id) }
function removeFromQueue(id: string) {
  const card = document.getElementById(id)
  const hadFocus = Boolean(card?.contains(document.activeElement))
  const cards = Array.from(document.querySelectorAll<HTMLElement>('.question-card'))
  const index = cards.findIndex(element => element.id === id)
  const focusTarget = cards[index + 1] ?? cards[index - 1]
  queueIds.value = queueIds.value.filter(value => value !== id)
  if (hadFocus) nextTick(() => { if (focusTarget?.isConnected) focusTarget.focus({ preventScroll: true }); else document.getElementById('practice-main')?.focus({ preventScroll: true }) })
}
function showHiddenMastered() {
  revealHidden()
  statusFilter.value = 'all'
  restartQueue()
}
restoreAutoHides()
watch(statusFilter, value => { if (!resuming.value && (value === 'all' || value === 'mastered')) revealHidden() }, { flush: 'sync' })
watch(mode, value => { statusFilter.value = value === 'review' ? 'pending' : 'all' })
watch([mode, selectedYear, selectedPaper, keyword, statusFilter, typeFilter, levelFilter, demoMode], restartQueue, { immediate: true })
watch(selectedPaper, () => { typeFilter.value = 'all'; levelFilter.value = 'all' })
watch(notice, () => {
  if (noticeTimer) window.clearTimeout(noticeTimer)
  if (notice.value) noticeTimer = window.setTimeout(() => { notice.value = '' }, 3500)
})

async function jumpToRoute() {
  if (resuming.value) return
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
  finishLocationTracking()
  directoryOpen.value = false
  if (view === 'review') statusFilter.value = 'pending'
  else if (view !== mode.value) statusFilter.value = 'all'
  typeFilter.value = 'all'
  levelFilter.value = 'all'
  await router.push({ name: routeName, query: { ...(view !== 'all' ? { view } : {}), ...(targetYear && view !== 'review' ? { year: targetYear } : {}), ...(targetPaper && targetYear && targetPaper !== targetYear && view !== 'review' ? { paper: targetPaper } : {}) } })
  await jumpToRoute()
}
async function selectFavorites() { await selectView('review'); statusFilter.value = 'favorites' }
function persist(id: string, patch: { mastery?: Mastery; attemptedAt?: number; favorite?: boolean; removed?: boolean; removedAt?: number; note?: string; reviews?: number }) {
  if (!demoMode.value) progress.value = mergeProgress(readPracticeProgress(), progress.value)
  const target = demoMode.value ? demoProgress : progress
  const previous = target.value[id] ?? { note: '', updatedAt: 0, reviews: 0 }
  if (previous.deletedAt || (previous.removed && previous.removedAt && Date.now() >= previous.removedAt + REMOVED_RETENTION_MS)) {
    window.dispatchEvent(new Event(PRACTICE_PROGRESS_SAVED_EVENT))
    notice.value = '这道题已到期自动清理。'
    return false
  }
  target.value = { ...target.value, [id]: { ...previous, ...patch, updatedAt: Date.now() } }
  if (!demoMode.value) {
    progress.value = mergeProgress(readPracticeProgress(), progress.value)
    storageFailed.value = !savePracticeProgress(progress.value)
    rememberQuestion(id)
  }
  return true
}
function mark(id: string, mastery: Mastery) {
  const previous = autoHidePriorProgress.has(id) ? autoHidePriorProgress.get(id) : activeProgress.value[id]
  cancelAutoHide(id)
  hiddenMastered.value.delete(id)
  if (!persist(id, { mastery, attemptedAt: Date.now(), reviews: (activeProgress.value[id]?.reviews ?? 0) + (mode.value === 'review' ? 1 : 0) })) return
  if (mastery === 'mastered') scheduleAutoHide(id, previous)
  else saveAutoHides()
  notice.value = demoMode.value ? '示例状态已更新' : mastery === 'mastered' ? (activeProgress.value[id]?.favorite ? '已掌握，收藏题将继续保留。' : mode.value === 'removed' ? '已标记为掌握' : '已掌握，30 秒后自动隐藏；改标其他状态可取消。') : isBook ? '已加入 880 错题再练' : '已加入试卷错题再练'
}
function toggleFavorite(id: string) {
  const favorite = !activeProgress.value[id]?.favorite
  cancelAutoHide(id)
  hiddenMastered.value.delete(id)
  if (!persist(id, { favorite })) return
  if (!favorite && activeProgress.value[id]?.mastery === 'mastered') scheduleAutoHide(id, activeProgress.value[id])
  else saveAutoHides()
  updateQueue()
  notice.value = favorite ? '已收藏，当前试卷或章节中各显示模式都会保留，也不会自动隐藏。' : '已取消收藏，恢复当前筛选规则。'
}
function recordAttempt(id: string, correct: boolean | undefined) {
  if (correct === false) mark(id, 'unknown')
  else persist(id, { attemptedAt: Date.now() })
}
function saveNote(id: string, note: string) { persist(id, { note }) }
function refreshNotesQueue() {
  // 清空笔记后等编辑结束再移出，避免输入途中卡片消失。
  if (mode.value === 'notes') updateQueue()
}
function removeQuestion(id: string) {
  cancelAutoHide(id)
  hiddenMastered.value.delete(id)
  saveAutoHides()
  if (!persist(id, { removed: true, removedAt: Date.now() })) return
  queueIds.value = queueIds.value.filter(item => item !== id)
  undoRemovalId.value = id
  notice.value = '已移除，5 小时后自动清理；到期前可恢复。'
}
function restoreQuestion(id: string) {
  if (!persist(id, { removed: false, removedAt: undefined })) return
  updateQueue()
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
  flushAutoHides()
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
    reconcileAutoHides()
    saveAutoHides()
    storageFailed.value = !savePracticeProgress(progress.value)
    restartQueue()
    notice.value = '进度已恢复，同一道题保留较新的记录。'
  } catch { notice.value = '无法恢复，请选择本页面导出的 JSON 进度备份（不超过 5 MB）。' }
  input.value = ''
}
function syncProgress(event: Event) {
  if (event instanceof CustomEvent && event.detail?.saved === false) { storageFailed.value = true; return }
  const key = event instanceof StorageEvent ? event.key : null
  if (key === PRACTICE_STORAGE_KEY || key === practiceAutoHideKey(props.collection) || key === null) {
    progress.value = readPracticeProgress()
    restoreAutoHides()
    updateQueue()
  }
  if (!key || key === PRACTICE_STORAGE_KEY || key.startsWith('math2-practice-location-')) refreshResumeLocations()
}
async function resumeLastLocation() {
  const saved = lastLocation.value
  const original = questionById.get(saved?.questionId ?? '')
  if (!saved || !original || resuming.value) return
  resuming.value = true
  let resumedId = ''
  try {
    directoryOpen.value = false
    await router.push({ name: routeName, query: {
      ...(saved.view !== 'all' ? { view: saved.view } : {}),
      ...(saved.year ? { year: saved.year } : {}),
      ...(saved.paper && saved.paper !== saved.year ? { paper: saved.paper } : {}),
    } })
    await nextTick()
    if (!locationPageActive()) return
    statusFilter.value = saved.status
    typeFilter.value = chapterTypes.value.some(type => type.id === saved.type) ? saved.type : 'all'
    levelFilter.value = saved.level
    keyword.value = saved.keyword
    await nextTick()
    restartQueue()
    await nextTick()
    let target = queue.value.find(q => q.id === saved.questionId)
    if (!target) {
      const available = new Set(queueIds.value)
      const index = questions.findIndex(q => q.id === saved.questionId)
      target = questions.slice(index + 1).find(q => available.has(q.id)) ?? questions.slice(0, index).reverse().find(q => available.has(q.id))
    }
    if (!target) {
      await router.replace({ name: routeName, query: { year: String(original.year), ...(original.paperId ? { paper: original.paperId } : {}), ...(progress.value[original.id]?.removed ? { view: 'removed' } : {}) } })
      await nextTick()
      statusFilter.value = 'all'; typeFilter.value = 'all'; levelFilter.value = 'all'; keyword.value = ''
      await nextTick()
      restartQueue()
      await nextTick()
      target = queue.value.find(q => q.id === saved.questionId) ?? queue.value[0]
    }
    const element = target ? document.getElementById(target.id) : null
    if (element && target) {
      element.scrollIntoView({ block: 'start' })
      await Promise.all([document.fonts.ready, ...Array.from(element.querySelectorAll('img')).map(img => { img.loading = 'eager'; return img.decode().catch(() => undefined) })])
      if (!locationPageActive()) return
      const offset = target.id === saved.questionId ? Math.max(-Math.min(160, window.innerHeight / 4), Math.min(saved.offset, element.getBoundingClientRect().height - 80)) : 0
      window.scrollTo({ top: Math.max(0, window.scrollY + element.getBoundingClientRect().top + offset), behavior: 'instant' })
      element.focus({ preventScroll: true })
      resumedId = target.id
      notice.value = target.id === saved.questionId ? '已回到上次做题位置。' : '上次题目已不在当前筛选中，已定位到附近的题目。'
    } else notice.value = '上次题目已隐藏，当前筛选下暂无待做题目；可重新显示已隐藏题目。'
  } finally {
    resuming.value = false
    if (locationPageActive() && resumedId) rememberQuestion(resumedId)
  }
}
watch([keyword, statusFilter, typeFilter, levelFilter], () => { nextTick(scheduleLocationSave) })
onMounted(() => {
  window.addEventListener('storage', syncProgress)
  window.addEventListener(PRACTICE_REMOVALS_CHANGED_EVENT, syncProgress)
  window.addEventListener('afterprint', finishPdfExport)
  jumpToRoute()
})
onBeforeUnmount(() => {
  window.removeEventListener('storage', syncProgress)
  window.removeEventListener(PRACTICE_REMOVALS_CHANGED_EVENT, syncProgress)
  window.removeEventListener('afterprint', finishPdfExport)
  finishPdfExport()
  if (noticeTimer) window.clearTimeout(noticeTimer)
})
</script>

<template>
  <div class="practice-page" :class="{ 'pdf-export': exportingPdf }">
    <MathHeader hide-search />
    <PracticeImagePreview ref="imagePreview" />
    <div class="practice-layout">
      <aside class="directory" :aria-label="isBook ? '880章节与复习目录' : '试卷与复习目录'">
        <button class="mobile-directory" :aria-expanded="directoryOpen" aria-controls="directory-content" @click="directoryOpen = !directoryOpen"><PracticeIcon name="book" />{{ isBook ? '880 章节与复习目录' : '试卷与复习目录' }}<span>{{ directoryOpen ? '收起' : '展开' }}</span></button>
        <div id="directory-content" class="directory-content" :class="{ open: directoryOpen }">
          <div class="directory-brand"><span class="directory-symbol"><PracticeIcon name="book" /></span><div><strong>{{ isBook ? '李林 880' : '试卷题库' }}</strong><span>{{ retainedCount }} 道题 · {{ isBook ? '按章节与题型' : '按年份与套卷' }}</span></div></div>
          <nav class="collection-nav" aria-label="错题集合">
            <button :aria-pressed="mode === 'all'" :class="{ active: mode === 'all' }" @click="selectView('all')"><PracticeIcon name="book" />{{ isBook ? '章节练习' : '试卷练习' }}<span>{{ allDisplayCount }}</span></button>
            <button :aria-pressed="mode === 'review' && statusFilter !== 'favorites'" :class="{ active: mode === 'review' && statusFilter !== 'favorites' }" @click="selectView('review')"><PracticeIcon name="repeat" />错题再练<span>{{ pendingCount }}</span></button>
            <button :aria-pressed="mode === 'review' && statusFilter === 'favorites'" :class="{ active: mode === 'review' && statusFilter === 'favorites' }" @click="selectFavorites"><PracticeIcon name="star" />我的收藏<span>{{ favoriteCount }}</span></button>
            <button :aria-pressed="mode === 'notes'" :class="{ active: mode === 'notes' }" @click="selectView('notes')"><PracticeIcon name="note" />题目笔记<span>{{ notedCount }}</span></button>
            <button :aria-pressed="mode === 'removed'" :class="{ active: mode === 'removed' }" @click="selectView('removed')"><PracticeIcon name="trash" />已移除题目<span>{{ removedCount }}</span></button>
          </nav>
          <nav v-if="mode === 'notes' || mode === 'removed'" class="year-nav all-notes" aria-label="汇总题目">
            <button :aria-pressed="!selectedYear" :class="{ active: !selectedYear }" @click="selectView(mode)"><span>全部题目</span><span>{{ directoryTotal }}</span></button>
          </nav>
          <template v-if="mode !== 'review' && isBook"><div class="directory-heading">章节目录<span>{{ bookDirectory.length }} 章</span></div><nav class="year-nav book-nav" aria-label="李林880章节"><button v-for="item in bookDirectory" :key="item.id" :aria-pressed="selectedPaper === item.id" :class="{ active: selectedPaper === item.id }" @click="selectView(mode, String(item.year), item.id)"><span>{{ item.title.replace('李林880 · ', '') }}</span><span>{{ item.count }}</span></button></nav></template>
          <template v-if="mode !== 'review' && !isBook">
            <div class="directory-heading">{{ mode === 'removed' ? '移除试卷' : mode === 'notes' ? '笔记试卷' : '试卷目录' }}<span>{{ examDirectory.length }} 张试卷</span></div>
            <details v-for="group in examGroups" :key="group.id" class="exam-folder" :open="expandedGroups.includes(group.id)" @toggle="toggleGroup(group.id, $event)">
              <summary><span class="folder-chevron" aria-hidden="true"></span><span>{{ group.title }}</span><small>{{ group.papers.length }} {{ group.id === 'real' ? '年' : '套' }}</small></summary>
              <nav class="year-nav" :aria-label="`${group.title}试卷目录`">
                <button v-for="item in group.papers" :key="item.id" :aria-pressed="selectedPaper === item.id" :class="{ active: selectedPaper === item.id }" @click="selectView(mode, String(item.year), item.id)"><span>{{ group.id === 'zy2026' ? item.title.split(' · ').at(-1) : item.title }}</span><span>{{ item.count }}</span></button>
              </nav>
            </details>
          </template>
          <p v-if="!papers.length" class="directory-empty">题目上传后，这里会按真题年份和模拟卷套数生成目录。</p>
          <div class="progress-card"><div><span>已掌握</span><strong>{{ masteredCount }} <small>/ {{ visibleQuestions.length }}</small></strong></div><progress :value="masteredCount" :max="visibleQuestions.length || 1" :aria-label="isBook ? '880掌握进度' : '试卷错题掌握进度'" /></div>
          <div class="backup-actions"><button @click="exportBackup"><PracticeIcon name="download" />导出进度</button><button @click="importInput?.click()"><PracticeIcon name="upload" />恢复进度</button><input ref="importInput" class="visually-hidden" type="file" accept=".json,application/json" aria-label="选择进度备份" @change="importBackup" /></div>
          <p class="storage-hint"><span class="saved-dot" aria-hidden="true"></span>进度自动保存在此浏览器</p>
        </div>
      </aside>
      <main id="practice-main" tabindex="-1" @pointerdown="trackQuestionInteraction" @focusin="trackQuestionInteraction">
        <header class="workspace-heading">
          <div><p class="workspace-path">数学二<span>/</span>{{ isBook ? '880 题库' : '试卷题库' }}</p><h1>{{ workspaceTitle }}</h1><p class="workspace-subtitle">{{ workspaceSubtitle }}</p></div>
          <div class="workspace-actions"><button v-if="mode === 'review'" class="text-button" @click="restartQueue"><PracticeIcon name="repeat" />重新开始本轮</button><button class="pdf-button" :disabled="!queue.length || exportingPdf" @click="exportPdf"><PracticeIcon name="download" />{{ exportingPdf ? '准备导出…' : '导出 PDF' }}</button></div>
        </header>
        <section v-if="resumeOptions.length" class="resume-card" aria-label="最近做题位置" @pointerdown.capture="finishLocationTracking" @focusin="finishLocationTracking"><PracticeIcon name="clock" /><span class="resume-caption">继续做题</span><label class="visually-hidden" for="resume-location">最近两次做题记录</label><select id="resume-location" v-model="selectedLocationContext" :disabled="resuming"><option v-for="option in resumeOptions" :key="option.key" :value="option.key">{{ option.label }}</option></select><button :disabled="resuming" @click="resumeLastLocation">{{ resuming ? '正在定位…' : '跳转' }}<PracticeIcon name="arrow" /></button></section>
        <section v-if="!questions.length" class="preview-banner"><PracticeIcon name="book" /><div><strong>错题本已就绪，等待录入你的题目</strong><p>下方使用你提供的截图演示操作，年份尚未确认，不计入正式题库和复习统计。</p></div><button @click="demoMode = !demoMode">{{ demoMode ? '收起示例' : '体验示例' }}</button></section>
        <p v-if="storageFailed" role="alert" class="storage-error">浏览器暂时无法保存进度，请立即导出备份以保留本次标记和笔记。</p>
        <p class="print-summary print-only">{{ pdfTitle }} · 含答案解析与笔记</p>
        <section v-if="selectedChapter && mode !== 'review'" class="chapter-filters" aria-label="880题型筛选">
          <div class="chapter-filter-controls"><label>题型<select v-model="typeFilter" aria-label="按具体题型筛选"><option value="all">全部题型</option><option v-for="item in chapterTypes" :key="item.id" :value="item.id">{{ item.order }}. {{ item.title }}</option></select></label><label>分层<select v-model="levelFilter" aria-label="按原书基础综合拓展筛选"><option value="all">基础、综合与拓展</option><option v-for="level in ['基础题', '综合题', '拓展题']" :key="level" :value="level">{{ level }}</option></select></label></div>
          <a :href="`${baseUrl}${selectedChapter.sourceFile}`" target="_blank" rel="noopener">原分类总结<PracticeIcon name="arrow" /></a>
        </section>
        <PracticeToolbar v-model:status="statusFilter" v-model:keyword="keyword" :count="queue.length" :marked="markedInQueue" :hidden="hiddenInScope" :removed="mode === 'removed'" :notes="mode === 'notes'" @reveal="showHiddenMastered" />
        <div v-if="queue.length" class="question-list">
          <div v-if="mode === 'review'" class="year-questions review-questions"><PracticeQuestionCard v-for="(question, index) in queue" :key="`${round}-${question.id}`" :question="question" :index="index + 1" :progress="activeProgress[question.id]" :auto-hide-pending="Boolean(autoHideDeadlines[question.id])" :storage-failed="storageFailed" :print-mode="exportingPdf" :manageable="!demoMode" @remove="removeQuestion" @restore="restoreQuestion" @note-blur="refreshNotesQueue" @mark="mark" @favorite="toggleFavorite" @attempt="recordAttempt" @note="saveNote" @preview="openImage" /></div>
          <section v-for="group in mode === 'review' ? [] : yearGroups" :id="`practice-year-${group.id}`" :key="group.id" class="year-section" :class="{ 'single-paper': yearGroups.length === 1 }" :aria-labelledby="`year-title-${group.id}`">
            <header class="paper-heading"><div><span class="paper-label">{{ mode === 'removed' ? '已移除题目' : mode === 'notes' ? '有笔记的题目' : group.book ? '2027 版 · 原分类题型' : group.exerciseOnly ? '非真题配套练习' : group.mock ? '模拟卷与配套练习' : '真题与配套练习' }}</span><h2 :id="`year-title-${group.id}`">{{ group.title }}{{ mode === 'removed' ? ' · 已移除题目' : mode === 'notes' ? ' · 笔记题目' : '' }}</h2></div><span>{{ group.questions.length }} 题</span></header>
            <section v-for="section in group.sections" :key="section.id" class="type-section" :aria-label="section.title || group.title"><h3 v-if="section.title" class="type-heading">{{ section.title }}<small>{{ section.questions.length }} 题</small></h3><div class="year-questions"><PracticeQuestionCard v-for="(question, index) in section.questions" :key="`${round}-${question.id}`" :question="question" :index="index + 1" :progress="activeProgress[question.id]" :auto-hide-pending="Boolean(autoHideDeadlines[question.id])" :storage-failed="storageFailed" :print-mode="exportingPdf" :show-note="mode === 'notes' || mode === 'removed'" :manageable="!demoMode" :removed="mode === 'removed'" @remove="removeQuestion" @restore="restoreQuestion" @note-blur="refreshNotesQueue" @mark="mark" @favorite="toggleFavorite" @attempt="recordAttempt" @note="saveNote" @preview="openImage" /></div></section>
          </section>
          <footer class="paper-end"><strong>{{ mode === 'review' ? '错题再练 · 本轮结束' : mode === 'removed' ? '已移除题目 · 本页结束' : mode === 'notes' ? '笔记汇总 · 本页结束' : `${paperScope} · ${isBook ? '本章' : '本卷'}结束` }}</strong></footer>
        </div>
        <section v-else class="empty-state"><PracticeIcon :name="mode === 'review' ? 'check' : 'book'" /><h2>{{ mode === 'removed' ? '暂无符合条件的已移除题目' : mode === 'notes' ? '暂无符合条件的笔记题目' : mode === 'review' ? '这里暂时没有需要再练的题' : questions.length ? '没有符合筛选条件的题目' : '准备好收集你的第一道错题' }}</h2><p>{{ mode === 'removed' ? '移除的题目保留 5 小时，到期前可恢复；清理后不再显示。' : mode === 'notes' ? '在题目下方写下笔记后，会自动收集到这里；也可以调整目录、状态或搜索条件。' : mode === 'review' ? '将题目标为“不熟练”或“不会”后，它们会自动出现在这里。' : questions.length ? '试试其他目录、状态，或清空搜索关键词。' : '上传题目时附上年份，我会把题干、答案和解析一起录入。' }}</p><button v-if="mode !== 'all'" class="primary-button" @click="selectView('all')">{{ isBook ? '返回 880 章节' : '返回错题本' }}</button></section>
        <p v-if="notice" class="notice" role="status" aria-live="polite">{{ notice }}<button v-if="undoRemovalId && notice.startsWith('已移除')" @click="restoreQuestion(undoRemovalId)">撤销</button></p>
      </main>
    </div>
  </div>
</template>

<style scoped src="@/styles/practice.css"></style>

<style>
@media print {
  @page { size: A4; margin: 15mm; }
  body { background: white !important; }
  .pdf-export ~ .app-footer, .pdf-export .site-header, .pdf-export .directory,
  .pdf-export .toolbar, .pdf-export .chapter-filters, .pdf-export .workspace-heading, .pdf-export .notice,
  .pdf-export .display-hint,
  .pdf-export .resume-card,
  .pdf-export .storage-error, .pdf-export .paper-end, .route-loading-overlay { display: none !important; }
  .pdf-export .practice-layout { display: block; width: 100%; margin: 0; padding: 0; }
  .pdf-export .print-only { display: block !important; }
  .pdf-export .print-summary { font-size: 16pt; font-weight: 700; margin: 0 0 14pt; }
  .pdf-export .question-list { margin: 0; }
  .pdf-export .year-questions { display: block; }
  .pdf-export .question-card { border: 0; border-bottom: 1px solid #ccc; border-radius: 0; padding: 12pt 0; margin: 0; break-inside: avoid; }
  .pdf-export .question-card:has(.question-source-images) { break-inside: auto; }
  .pdf-export .source-images .image-preview-trigger { break-inside: avoid; padding: 0; }
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
  .pdf-export .paper-heading { display: flex !important; break-after: avoid; }
}
</style>
