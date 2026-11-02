<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import MathMarkdown from '@/components/MathMarkdown.vue'
import PracticeIcon from '@/components/PracticeIcon.vue'
import PracticeNoteEditor from '@/components/PracticeNoteEditor.vue'
import { BookText, CircleCheck, CircleGauge, CircleX, Ellipsis, ExternalLink, Eye, NotebookText, RotateCcw, Star, Tag, Trash2 } from '@lucide/vue'
import arcDiagram from '@/assets/practice-figures/zy2026-set1-q5.svg?raw'
import { REMOVED_RETENTION_MS, type Mastery, type PracticeQuestion, type QuestionImage, type QuestionProgress } from '@/math/practice'

const props = defineProps<{ question: PracticeQuestion; index: number; progress?: QuestionProgress; storageFailed: boolean; showNote?: boolean; removed?: boolean; manageable?: boolean; printMode?: boolean; autoHidePending?: boolean }>()
const emit = defineEmits<{ mark: [id: string, mastery: Mastery]; favorite: [id: string]; attempt: [id: string, correct: boolean | undefined]; note: [id: string, note: string]; noteBlur: []; remove: [id: string]; restore: [id: string]; preview: [image: QuestionImage, trigger: HTMLElement] }>()
const arcDiagramUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(arcDiagram)}`
const figureUrl = (src: string) => src === 'practice-figures/zy2026-set1-q5.svg' ? arcDiagramUrl : `${import.meta.env.BASE_URL}${src}`
function previewImage(picture: QuestionImage, event: MouseEvent) {
  emit('preview', { ...picture, src: figureUrl(picture.src) }, event.currentTarget as HTMLElement)
}
const answerOpen = ref(false)
const explanationOpen = ref(false)
const knowledgeMenu = ref<HTMLDetailsElement>()
const managementMenu = ref<HTMLDetailsElement>()
function closeMenu(event: FocusEvent) {
  const menu = event.currentTarget as HTMLDetailsElement
  if (!menu.contains(event.relatedTarget as Node | null)) menu.open = false
}
function manageQuestion() {
  if (managementMenu.value) managementMenu.value.open = false
  if (props.removed) emit('restore', props.question.id)
  else emit('remove', props.question.id)
}
const answerPanel = ref<HTMLElement>()
let answerObserver: IntersectionObserver | undefined
let collapseTimer: number | undefined
let collapseDeadline = 0
let answerInViewport = true

function cancelAutoCollapse() {
  if (collapseTimer !== undefined) window.clearTimeout(collapseTimer)
  collapseTimer = undefined
  collapseDeadline = 0
}
function updateAutoCollapse() {
  // 后台标签页可能延迟执行定时器，恢复时也检查实际离开时长。
  if ((answerOpen.value || explanationOpen.value) && collapseDeadline && Date.now() >= collapseDeadline) {
    answerOpen.value = false
    explanationOpen.value = false
    cancelAutoCollapse()
    return
  }
  if ((!answerOpen.value && !explanationOpen.value) || (answerInViewport && !document.hidden)) {
    cancelAutoCollapse()
  } else if (collapseTimer === undefined) {
    collapseDeadline = Date.now() + 60_000
    collapseTimer = window.setTimeout(() => {
      answerOpen.value = false
      explanationOpen.value = false
      cancelAutoCollapse()
    }, 60_000)
  }
}
watch(answerPanel, panel => {
  answerObserver?.disconnect()
  cancelAutoCollapse()
  answerInViewport = true
  if (!panel) return
  answerObserver = new IntersectionObserver(entries => {
    answerInViewport = entries.some(entry => entry.isIntersecting)
    updateAutoCollapse()
  })
  answerObserver.observe(panel)
  updateAutoCollapse()
}, { flush: 'post' })
onMounted(() => document.addEventListener('visibilitychange', updateAutoCollapse))
onBeforeUnmount(() => {
  answerObserver?.disconnect()
  cancelAutoCollapse()
  document.removeEventListener('visibilitychange', updateAutoCollapse)
})
const noteOpen = ref(props.showNote ?? false)
const selectedOption = ref('')
const removalDeadlineLabel = computed(() => props.removed && props.progress?.removedAt ? new Date(props.progress.removedAt + REMOVED_RETENTION_MS).toLocaleString('zh-CN', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false }) : '')
const showResult = computed(() => answerOpen.value || explanationOpen.value || Boolean(selectedOption.value))
const knowledgeItems = computed(() => props.question.questionTypes?.length ? props.question.questionTypes.map(item => ({ title: item.title, detail: item.references.join('、') })) : [{ title: props.question.topic, detail: '' }])
const lastUpdated = computed(() => props.progress?.updatedAt ? new Date(props.progress.updatedAt).toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' }).replaceAll('/', '-') : '')
const statuses: { value: Mastery; label: string }[] = [
  { value: 'unfamiliar', label: '不熟练' }, { value: 'unknown', label: '不会' }, { value: 'mastered', label: '掌握' },
]
</script>

<template>
  <article :id="question.id" class="question-card" tabindex="-1" :aria-labelledby="`title-${question.id}`">
    <header class="question-meta">
      <span class="question-index">{{ question.number }}</span>
      <div class="question-source"><a v-if="question.sourceUrl" :href="question.sourceUrl" target="_blank" rel="noopener">{{ question.source }}<ExternalLink /></a><span v-else>{{ question.source }}</span><span v-if="question.exerciseIndex" class="exam-number">{{ question.paperId ? '原题' : '真题' }} {{ question.examNumber }} · 练习 {{ question.exerciseIndex }}</span></div>
      <span v-if="progress?.mastery" class="mastery-record" :title="`最近更新 ${lastUpdated}`">{{ progress.mastery === 'mastered' ? '已掌握' : statuses.find(s => s.value === progress?.mastery)?.label }}<span v-if="lastUpdated"> · {{ lastUpdated }}</span></span>
      <details ref="knowledgeMenu" class="question-knowledge" @focusout="closeMenu" @keydown.esc="knowledgeMenu && (knowledgeMenu.open = false)"><summary><Tag /><span>相关知识点</span><small>{{ knowledgeItems.length }}</small></summary><div class="knowledge-panel"><strong>{{ question.topic }}</strong><p v-if="question.bookId" class="knowledge-level">{{ question.level }} · {{ question.type === 'choice' ? '选择题' : question.type === 'fill' ? '填空题' : '解答题' }}</p><div v-for="item in knowledgeItems" :key="item.title"><span>{{ item.title }}</span><small v-if="item.detail">{{ item.detail }}</small></div></div></details>
      <details v-if="manageable" ref="managementMenu" class="question-management" @focusout="closeMenu" @keydown.esc="managementMenu && (managementMenu.open = false)"><summary aria-label="更多题目操作" title="更多操作"><Ellipsis /></summary><div class="management-panel"><button class="question-manage" :class="{ restore: removed }" @click="manageQuestion"><RotateCcw v-if="removed" /><Trash2 v-else />{{ removed ? '恢复题目' : '移除题目' }}</button></div></details>
    </header>
    <h3 :id="`title-${question.id}`" class="visually-hidden">{{ question.year }} 年 {{ question.source }} {{ question.number }}题</h3>
    <p class="print-only print-topic">{{ question.topic }}</p>
    <p v-if="removalDeadlineLabel" class="removal-deadline">将于 {{ removalDeadlineLabel }} 自动清理</p>
    <div v-if="question.questionImages?.length" class="source-images question-source-images"><button v-for="picture in question.questionImages" :key="picture.src" type="button" class="image-preview-trigger" :aria-label="`${picture.alt}，放大预览`" @click="previewImage(picture, $event)"><img :src="figureUrl(picture.src)" :alt="picture.alt" :width="picture.width" :height="picture.height" loading="lazy" decoding="async" /></button></div>
    <MathMarkdown v-else class="question-stem" :source="question.stem" compact />
    <div v-if="question.figures?.length" class="question-figures"><figure v-for="figure in question.figures" :key="figure.src"><button type="button" class="image-preview-trigger" :aria-label="`${figure.alt}，放大预览`" @click="previewImage(figure, $event)"><img :src="figureUrl(figure.src)" :alt="figure.alt" :width="figure.width" :height="figure.height" loading="lazy" decoding="async" /></button><figcaption v-if="figure.caption">{{ figure.caption }}</figcaption></figure></div>
    <fieldset v-if="question.options?.length" class="options">
      <legend class="visually-hidden">第 {{ index }} 题，选择你的答案</legend>
      <label v-for="option in question.options" :key="option.key" class="option" :class="{ selected: selectedOption === option.key, correct: showResult && question.correctOption === option.key, wrong: showResult && selectedOption === option.key && question.correctOption !== option.key }">
        <input v-model="selectedOption" type="radio" :name="question.id" :value="option.key" :aria-label="`选项 ${option.key}`" @change="emit('attempt', question.id, question.correctOption ? selectedOption === question.correctOption : undefined)" />
        <span class="option-key">{{ option.key }}.</span><MathMarkdown :source="option.text" inline compact /><PracticeIcon v-if="showResult && question.correctOption === option.key" name="check" class="option-result" /><PracticeIcon v-else-if="selectedOption === option.key && question.correctOption !== option.key" name="unknown" class="option-result incorrect" />
      </label>
    </fieldset>
    <p v-if="selectedOption && question.correctOption" class="choice-feedback" :class="selectedOption === question.correctOption ? 'correct' : 'incorrect'" role="status" aria-live="polite"><PracticeIcon :name="selectedOption === question.correctOption ? 'check' : 'unknown'" />{{ selectedOption === question.correctOption ? `回答正确，答案是 ${question.correctOption}` : `回答错误，你选了 ${selectedOption}，正确答案是 ${question.correctOption}` }}</p>
    <div class="question-actions">
      <div class="reading-controls"><button class="note-toggle" :class="{ 'has-note': progress?.note }" :aria-label="progress?.note ? '查看错因笔记' : '记录错因笔记'" :aria-expanded="noteOpen" :aria-controls="`note-${question.id}`" @click="noteOpen = !noteOpen"><NotebookText /><span>笔记</span></button><template v-if="question.answerAvailable !== false"><button class="answer-toggle" :class="{ active: answerOpen }" :aria-label="answerOpen ? '收起答案' : '查看答案'" :aria-expanded="answerOpen" :aria-controls="`answer-${question.id}`" @click="answerOpen = !answerOpen"><Eye />答案</button><button class="explanation-toggle" :class="{ active: explanationOpen }" :aria-label="explanationOpen ? '收起解析' : '查看解析'" :aria-expanded="explanationOpen" :aria-controls="`answer-${question.id}`" @click="explanationOpen = !explanationOpen"><BookText />解析</button></template></div>
      <div class="study-controls"><button v-if="manageable" class="favorite-toggle" :class="{ saved: progress?.favorite }" :aria-pressed="Boolean(progress?.favorite)" :aria-label="progress?.favorite ? '取消收藏题目' : '收藏题目'" @click="emit('favorite', question.id)"><Star />收藏</button><div class="mastery-controls" role="group" :aria-label="`第 ${index} 题掌握程度`"><button v-for="status in statuses" :key="status.value" :class="[status.value, { marked: progress?.mastery === status.value }]" :aria-pressed="progress?.mastery === status.value" @click="emit('mark', question.id, status.value)"><CircleCheck v-if="status.value === 'mastered'" /><CircleGauge v-else-if="status.value === 'unfamiliar'" /><CircleX v-else />{{ status.label }}</button></div></div>
    </div>
    <section v-if="question.answerAvailable !== false && (answerOpen || explanationOpen || printMode)" :class="{ 'print-only': !answerOpen && !explanationOpen }" ref="answerPanel" :id="`answer-${question.id}`" class="answer-panel" aria-label="答案与解析">
      <template v-if="question.answerImages?.length"><h4>原书答案与解析</h4><div class="source-images"><button v-for="picture in question.answerImages" :key="picture.src" type="button" class="image-preview-trigger" :aria-label="`${picture.alt}，放大预览`" @click="previewImage(picture, $event)"><img :src="figureUrl(picture.src)" :alt="picture.alt" :width="picture.width" :height="picture.height" loading="lazy" decoding="async" /></button></div></template>
      <template v-else><template v-if="answerOpen || printMode"><h4>答案</h4><MathMarkdown :source="question.answer" compact /></template><template v-if="explanationOpen || printMode"><h4>解析</h4><MathMarkdown :source="question.explanation" compact /></template></template>
    </section>
    <p v-if="autoHidePending && !printMode" class="auto-hide-hint" role="status">已掌握，稍后自动隐藏；改为「不会」或「不熟练」可取消。</p>
    <section v-if="printMode && progress?.note?.trim()" class="print-note print-only"><h4>错因笔记</h4><MathMarkdown :source="progress.note" automatic breaks /></section>
    <PracticeNoteEditor v-if="noteOpen" :id="`note-${question.id}`" :input-id="`note-input-${question.id}`" :label="`${question.source}的错因笔记`" :model-value="progress?.note ?? ''" :storage-failed="storageFailed" @update:model-value="emit('note', question.id, $event)" @blur="emit('noteBlur')" />
  </article>
</template>

<style scoped>
.question-card { --ink: #1b2230; --ink-soft: #56616f; --line: #e3e6ec; scroll-margin-top: 22px; min-width: 0; border: 1px solid #dfe3e9; border-radius: 16px; padding: 20px 24px; background: #fff; color: var(--ink); box-shadow: none; }
.question-card:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }
svg { width: 16px; height: 16px; flex-shrink: 0; stroke-width: 1.8; }
button, summary { cursor: pointer; transition: background .15s, border-color .15s, color .15s; }
.question-meta { display: flex; align-items: center; flex-wrap: wrap; gap: 10px 18px; min-height: 36px; color: var(--ink-soft); font-size: 14px; }
.question-index { display: grid; place-items: center; flex-shrink: 0; min-width: 34px; height: 34px; padding: 0 8px; border: 1px solid #e8eaf0; border-radius: 10px; background: #f7f8fb; color: var(--ink-soft); font-size: 16px; font-weight: 650; }
.question-source { display: flex; align-items: center; flex: 0 1 auto; gap: 10px; min-width: 0; max-width: 58%; font-size: 14px; font-weight: 500; line-height: 1.5; }
.question-source > span:first-child, .question-source > a { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.question-source > a { display: inline-flex; align-items: center; gap: 7px; }.question-source > a:hover { color: var(--accent-dark); }
.question-source > a svg { width: 14px; height: 14px; }.exam-number { white-space: nowrap; font-size: 12px; }
.mastery-record { flex-shrink: 0; color: var(--ink-soft); font-size: 14px; white-space: nowrap; }
.question-knowledge, .question-management { position: relative; }
summary { display: flex; align-items: center; justify-content: center; gap: 9px; min-height: 36px; list-style: none; color: var(--ink-soft); }
summary::-webkit-details-marker { display: none; }
.question-knowledge summary { border-radius: 7px; font-size: 14px; font-weight: 600; }.question-knowledge summary small { display: grid; place-items: center; width: 23px; height: 23px; border-radius: 50%; background: #f7f8fb; font-size: 11px; font-weight: 400; }
.question-knowledge summary:hover, .question-knowledge[open] summary { color: var(--ink); }
.question-management { margin-left: auto; }.question-management summary { width: 36px; border-radius: 7px; }.question-management summary:hover, .question-management[open] summary { background: #f7f8fb; }
.knowledge-panel, .management-panel { position: absolute; z-index: 5; top: calc(100% + 7px); border: 1px solid var(--line); border-radius: 10px; padding: 14px; background: #fff; box-shadow: 0 8px 24px #1f293712; }
.knowledge-panel { left: 0; width: 300px; max-width: 70vw; font-size: 13px; line-height: 1.7; }.knowledge-panel strong { display: block; color: var(--ink); font-size: 13px; }.knowledge-panel > div { padding-top: 10px; margin-top: 10px; border-top: 1px solid var(--line); }.knowledge-panel small { display: block; margin-top: 3px; color: var(--muted); font-size: 11px; }.knowledge-level { margin: 6px 0 0; font-size: 12px; color: var(--muted); }
.management-panel { right: 0; min-width: 150px; padding: 5px; }.question-manage { display: flex; align-items: center; gap: 9px; width: 100%; min-height: 38px; border: 0; border-radius: 6px; padding: 0 10px; background: #fff; color: var(--danger); font-size: 13px; }.question-manage:hover { background: var(--danger-tint); }.question-manage.restore { color: var(--accent-dark); }.question-manage.restore:hover { background: var(--accent-tint); }
.removal-deadline { margin: 10px 0 0; color: var(--muted); font-size: 12px; }
.question-card .question-stem { margin: 20px 0 24px; font-size: 18px; line-height: 1.8; font-weight: 400; }
.question-card .question-stem :deep(p) { line-height: 1.8; }.question-card .question-stem :deep(.reading-math) { display: inline; overflow: visible; padding: 0; vertical-align: baseline; }.question-card .question-stem :deep(.katex) { font-size: 1.21em; }.question-card .question-stem :deep(.katex-display) { margin: 20px 0; padding: 2px 0; }.question-card .question-stem :deep(.katex-display > .katex) { text-align: center; }
.image-preview-trigger { display: block; width: 100%; border: 0; padding: 0; background: transparent; cursor: zoom-in; }.image-preview-trigger:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }
.source-images { display: grid; gap: 12px; max-width: 780px; margin: 22px auto 24px; }.source-images .image-preview-trigger { min-width: 0; background: #fff; border-radius: 6px; }.source-images img { display: block; max-width: 100%; width: 100%; height: auto; margin: 0 auto; }
.question-figures { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; margin: 12px 0 20px; }.question-figures figure { margin: 0; width: 340px; max-width: 100%; text-align: center; }.question-figures img { display: block; width: 100%; max-height: 260px; height: auto; object-fit: contain; margin: auto; border-radius: 6px; background: #fff; }.question-figures figcaption { margin-top: 6px; color: var(--muted); font-size: 12px; }
.options { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px 16px; min-width: 0; margin: 0 0 20px; padding: 0; border: 0; }.option { position: relative; display: flex; align-items: center; gap: 8px; min-width: 0; min-height: 48px; border: 1px solid #dfe3e9; border-radius: 10px; padding: 8px 12px; color: var(--ink); font-size: 18px; line-height: 1.65; cursor: pointer; }.option input { position: absolute; inset: 0; opacity: 0; width: 100%; height: 100%; cursor: pointer; }.option:focus-within { outline: 3px solid var(--focus-ring); border-color: var(--accent); }.option:hover, .option.selected { border-color: var(--accent); background: var(--accent-tint); }.option-key { flex-shrink: 0; font-weight: 500; }.option :deep(.math-markdown) { min-width: 0; }.question-card .option :deep(.reading-math) { display: inline; overflow: visible; padding: 0; vertical-align: baseline; }.question-card .option :deep(.katex) { font-size: 1.21em; }.option.correct { border-color: #48ad77; background: #e1f8e9; }.option.wrong { border-color: var(--danger); background: var(--danger-tint); }.option-result { margin-left: auto; color: var(--success); }.option-result.incorrect { color: var(--danger); }
.question-actions { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; border-top: 1px solid #e8eaef; padding-top: 12px; }
.reading-controls, .study-controls, .mastery-controls { display: flex; align-items: center; }.reading-controls { gap: 14px; }.study-controls { gap: 16px; margin-left: auto; }.mastery-controls { gap: 8px; }
.reading-controls button { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 40px; border: 0; border-radius: 7px; padding: 0 5px; background: transparent; color: var(--ink); font-size: 14px; font-weight: 600; }.reading-controls button:hover { background: #f7f8fb; }.reading-controls button.active, .reading-controls button.has-note { color: var(--accent-dark); }
.favorite-toggle, .mastery-controls button { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 40px; border: 1px solid #dfe3e9; border-radius: 10px; padding: 0 14px; background: #fff; color: var(--ink-soft); font-size: 14px; font-weight: 600; white-space: nowrap; }.favorite-toggle:hover, .mastery-controls button:hover { background: #f7f8fb; border-color: #c3cad5; }.favorite-toggle.saved { border-color: #d8ae69; color: var(--warning); background: var(--warning-tint); }.favorite-toggle.saved svg { fill: currentColor; }.mastery-controls .unfamiliar.marked { border-color: #d8ae69; background: var(--warning-tint); color: var(--warning); }.mastery-controls .unknown.marked { border-color: #e0959e; background: var(--danger-tint); color: var(--danger); }.mastery-controls .mastered.marked { border-color: #45b078; background: #dff9e9; color: #227346; }
.answer-panel { margin: 16px 0 0; border-top: 1px solid var(--line); padding: 18px 0 4px; font-size: 16px; line-height: 1.8; }.answer-panel h4 { margin: 0 0 8px; color: var(--ink); font-size: 14px; font-weight: 600; }.answer-panel h4:not(:first-child) { margin-top: 18px; }.choice-feedback { display: flex; align-items: center; gap: 8px; margin: 0 0 16px; border-radius: 8px; padding: 10px 12px; font-size: 14px; line-height: 1.6; }.choice-feedback.correct { background: var(--success-tint); color: var(--success); }.choice-feedback.incorrect { background: var(--danger-tint); color: var(--danger); }
.auto-hide-hint { margin: 10px 0 0; color: var(--muted); font-size: 12px; line-height: 1.7; }.print-only { display: none; }.visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
</style>
