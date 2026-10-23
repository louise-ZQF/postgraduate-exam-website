<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import MathMarkdown from '@/components/MathMarkdown.vue'
import PracticeIcon from '@/components/PracticeIcon.vue'
import arcDiagram from '@/assets/practice-figures/zy2026-set1-q5.svg?raw'
import type { Mastery, PracticeQuestion, QuestionProgress } from '@/math/practice'

const props = defineProps<{ question: PracticeQuestion; index: number; progress?: QuestionProgress; storageFailed: boolean; showNote?: boolean; removed?: boolean; manageable?: boolean; printMode?: boolean }>()
const emit = defineEmits<{ mark: [id: string, mastery: Mastery]; note: [id: string, note: string]; noteBlur: []; remove: [id: string]; restore: [id: string] }>()
const arcDiagramUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(arcDiagram)}`
const figureUrl = (src: string) => src === 'practice-figures/zy2026-set1-q5.svg' ? arcDiagramUrl : `${import.meta.env.BASE_URL}${src}`
const answerOpen = ref(false)
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
  if (answerOpen.value && collapseDeadline && Date.now() >= collapseDeadline) {
    answerOpen.value = false
    cancelAutoCollapse()
    return
  }
  if (!answerOpen.value || (answerInViewport && !document.hidden)) {
    cancelAutoCollapse()
  } else if (collapseTimer === undefined) {
    collapseDeadline = Date.now() + 60_000
    collapseTimer = window.setTimeout(() => {
      answerOpen.value = false
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
const showResult = computed(() => answerOpen.value || Boolean(selectedOption.value))
const statuses: { value: Mastery; label: string }[] = [
  { value: 'unfamiliar', label: '不熟练' }, { value: 'unknown', label: '不会' }, { value: 'mastered', label: '掌握' },
]
</script>

<template>
  <article :id="question.id" class="question-card" tabindex="-1" :aria-labelledby="`title-${question.id}`">
    <header class="question-meta">
      <span class="question-index">{{ question.number }}</span>
      <div class="question-source"><span>{{ question.source }}</span><span v-if="question.exerciseIndex" class="exam-number">{{ question.paperId ? '原题' : '真题' }} {{ question.examNumber }} · 练习 {{ question.exerciseIndex }}</span></div>
      <div v-if="progress?.mastery || manageable" class="question-meta-actions">
        <span v-if="progress?.mastery" class="mastery-badge" :class="progress.mastery">{{ statuses.find(s => s.value === progress?.mastery)?.label }}</span>
        <button v-if="manageable" class="question-manage" :class="{ restore: removed }" :aria-label="`${question.source}：${removed ? '恢复题目' : '移除题目'}`" @click="removed ? emit('restore', question.id) : emit('remove', question.id)"><PracticeIcon :name="removed ? 'repeat' : 'trash'" />{{ removed ? '恢复题目' : '移除题目' }}</button>
      </div>
    </header>
    <h3 :id="`title-${question.id}`" class="visually-hidden">{{ question.year }} 年 {{ question.source }} {{ question.number }}题</h3>
    <p class="question-topic">{{ question.topic }}</p>
    <div v-if="question.bookId" class="book-tags"><span class="level-badge">{{ question.level }}</span><span>{{ question.type === 'choice' ? '选择题' : question.type === 'fill' ? '填空题' : '解答题' }}</span></div>
    <div v-if="question.questionTypes?.length" class="question-type-tags"><span v-for="item in question.questionTypes" :key="item.id">{{ item.title }}<small v-if="question.questionTypes.length > 1"> · {{ item.references.join('、') }}</small></span></div>
    <div v-if="question.questionImages?.length" class="source-images question-source-images"><a v-for="picture in question.questionImages" :key="picture.src" :href="figureUrl(picture.src)" target="_blank" rel="noopener" :aria-label="`${picture.alt}，打开原图放大`"><img :src="figureUrl(picture.src)" :alt="picture.alt" :width="picture.width" :height="picture.height" loading="lazy" decoding="async" /></a></div>
    <MathMarkdown v-else class="question-stem" :source="question.stem" compact />
    <div v-if="question.figures?.length" class="question-figures"><figure v-for="figure in question.figures" :key="figure.src"><img :src="figureUrl(figure.src)" :alt="figure.alt" :width="figure.width" :height="figure.height" loading="lazy" decoding="async" /><figcaption v-if="figure.caption">{{ figure.caption }}</figcaption></figure></div>
    <fieldset v-if="question.options?.length" class="options">
      <legend class="visually-hidden">第 {{ index }} 题，选择你的答案</legend>
      <label v-for="option in question.options" :key="option.key" class="option" :class="{ selected: selectedOption === option.key, correct: showResult && question.correctOption === option.key, wrong: showResult && selectedOption === option.key && question.correctOption !== option.key }">
        <input v-model="selectedOption" type="radio" :name="question.id" :value="option.key" :aria-label="`选项 ${option.key}`" />
        <span class="option-key">{{ option.key }}.</span><MathMarkdown :source="option.text" inline compact /><PracticeIcon v-if="showResult && question.correctOption === option.key" name="check" class="option-result" /><PracticeIcon v-else-if="selectedOption === option.key && question.correctOption !== option.key" name="unknown" class="option-result incorrect" />
      </label>
    </fieldset>
    <p v-if="selectedOption && question.correctOption" class="choice-feedback" :class="selectedOption === question.correctOption ? 'correct' : 'incorrect'" role="status" aria-live="polite"><PracticeIcon :name="selectedOption === question.correctOption ? 'check' : 'unknown'" />{{ selectedOption === question.correctOption ? `回答正确，答案是 ${question.correctOption}` : `回答错误，你选了 ${selectedOption}，正确答案是 ${question.correctOption}` }}</p>
    <div class="question-actions">
      <button v-if="question.answerAvailable !== false" class="answer-toggle" :aria-expanded="answerOpen" :aria-controls="`answer-${question.id}`" @click="answerOpen = !answerOpen"><PracticeIcon name="eye" />{{ answerOpen ? '收起答案与解析' : '查看答案与解析' }}</button>
      <div class="mastery-controls" role="group" :aria-label="`第 ${index} 题掌握程度`"><button v-for="status in statuses" :key="status.value" :class="[status.value, { marked: progress?.mastery === status.value }]" :aria-pressed="progress?.mastery === status.value" @click="emit('mark', question.id, status.value)"><PracticeIcon :name="status.value === 'mastered' ? 'check' : status.value" />{{ status.label }}</button></div>
      <button class="note-toggle" :class="{ 'has-note': progress?.note }" :aria-label="progress?.note ? '查看错因笔记' : '记录错因笔记'" :aria-expanded="noteOpen" :aria-controls="`note-${question.id}`" @click="noteOpen = !noteOpen"><PracticeIcon name="note" /><span class="visually-hidden">错因笔记</span></button>
    </div>
    <section v-if="question.answerAvailable !== false && (answerOpen || printMode)" :class="{ 'print-only': !answerOpen }" ref="answerPanel" :id="`answer-${question.id}`" class="answer-panel" aria-label="答案与解析">
      <template v-if="question.answerImages?.length"><h4>原书答案与解析</h4><div class="source-images"><a v-for="picture in question.answerImages" :key="picture.src" :href="figureUrl(picture.src)" target="_blank" rel="noopener" :aria-label="`${picture.alt}，打开原图放大`"><img :src="figureUrl(picture.src)" :alt="picture.alt" :width="picture.width" :height="picture.height" loading="lazy" decoding="async" /></a></div></template>
      <template v-else><h4>答案</h4><MathMarkdown :source="question.answer" compact /><h4>解析</h4><MathMarkdown :source="question.explanation" compact /></template>
    </section>
    <section v-if="printMode && progress?.note?.trim()" class="print-note print-only"><h4>错因笔记</h4><p>{{ progress.note }}</p></section>
    <label v-if="noteOpen" :id="`note-${question.id}`" class="note-area"><span>错因笔记</span><textarea :aria-label="`${question.source}的错因笔记`" :value="progress?.note ?? ''" maxlength="10000" @blur="emit('noteBlur')" placeholder="记录错因或易忘的步骤" rows="2" @input="emit('note', question.id, ($event.target as HTMLTextAreaElement).value)" /><small>{{ storageFailed ? '保存失败，请导出备份' : '自动保存' }}</small></label>
  </article>
</template>

<style scoped>
.print-only { display: none; }
.book-tags, .question-type-tags { display: flex; flex-wrap: wrap; gap: 6px 10px; margin-top: 12px; color: var(--ink-soft); font-size: 12px; line-height: 1.7; }
.book-tags span, .question-type-tags > span { border-radius: 5px; padding: 3px 8px; background: var(--surface-soft); }
.book-tags .level-badge { color: var(--accent-dark); background: var(--accent-tint); font-weight: 600; }
.question-type-tags small { font-size: inherit; color: var(--muted); }
.source-images { display: grid; gap: 12px; margin: 18px 0; }
.source-images a { display: block; min-width: 0; background: white; border-radius: 6px; padding: 8px; }
.source-images img { display: block; max-width: 100%; width: 100%; height: auto; margin: 0 auto; }
.source-images a:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }
.question-card { scroll-margin-top: 22px; min-width: 0; border: 1px solid var(--line); border-radius: 14px; padding: 22px 26px 16px; background: var(--paper); box-shadow: 0 3px 12px #24314a03; }
.question-card:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }
svg { width: 17px; height: 17px; flex-shrink: 0; }
button { cursor: pointer; transition: background .16s, border-color .16s, color .16s; }
.question-meta { display: flex; align-items: center; gap: 10px; color: var(--muted); font-size: 12px; }
.question-index { display: grid; place-items: center; flex-shrink: 0; min-width: 32px; height: 32px; border-radius: 8px; background: var(--accent-tint); color: var(--accent-dark); font-size: 15px; font-weight: 700; }
.question-source { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 12px; min-width: 0; line-height: 1.6; }
.exam-number { white-space: nowrap; }
.question-meta-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; margin-left: auto; }
.mastery-badge { border-radius: 5px; padding: 3px 7px; white-space: nowrap; }
.question-manage { display: inline-flex; align-items: center; justify-content: center; gap: 5px; flex-shrink: 0; min-height: 44px; border: 0; border-radius: 6px; padding: 0 8px; background: transparent; color: var(--muted); font-size: 12px; }.question-manage:hover { color: var(--danger); background: var(--danger-tint); }.question-manage.restore { color: var(--accent-dark); }.question-manage.restore:hover { background: var(--accent-tint); }
.question-topic { margin: 4px 0 0 42px; color: var(--muted); font-size: 12px; line-height: 1.5; }
.question-stem { margin: 20px 0; font-size: 18px; line-height: 1.8; font-weight: 400; }
.question-figures { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; margin: 12px 0 18px; }.question-figures figure { margin: 0; width: 340px; max-width: 100%; text-align: center; }.question-figures img { display: block; width: 100%; max-height: 260px; height: auto; object-fit: contain; margin: 0 auto; border-radius: 6px; background: white; }.question-figures figcaption { margin-top: 6px; color: var(--muted); font-size: 12px; line-height: 1.7; }
.options { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; min-width: 0; margin: 0 0 20px; padding: 0; border: 0; }
.option { position: relative; display: flex; align-items: center; gap: 9px; min-width: 0; min-height: 44px; border: 1px solid var(--line); border-radius: 9px; padding: 11px 14px; color: var(--ink); font-size: 17px; cursor: pointer; }
.option input { position: absolute; inset: 0; opacity: 0; width: 100%; height: 100%; cursor: pointer; }
.option:focus-within { outline: 3px solid var(--focus-ring); border-color: var(--accent); }
.option:hover, .option.selected { border-color: var(--accent); background: var(--accent-tint); }
.option-key { flex-shrink: 0; font-weight: 600; }
.option :deep(.math-markdown) { min-width: 0; }
.option.correct { border-color: var(--success); background: var(--success-tint); }
.option.wrong { border-color: var(--danger); background: var(--danger-tint); }
.option-result { margin-left: auto; color: var(--success); }
.question-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px; border-top: 1px solid var(--line); padding-top: 14px; }
.answer-toggle { display: inline-flex; align-items: center; gap: 7px; min-height: 44px; border: 0; padding: 0 4px; background: transparent; color: var(--accent-dark); font-size: 13px; font-weight: 600; }
.answer-toggle:hover { color: var(--accent); }
.mastery-controls { display: flex; gap: 8px; margin-left: auto; }
.mastery-controls button { display: flex; align-items: center; justify-content: center; gap: 6px; min-height: 44px; border: 1px solid var(--line); border-radius: 8px; padding: 7px 12px; background: var(--paper); color: var(--ink-soft); font-size: 13px; white-space: nowrap; }
.mastery-controls button:hover { border-color: currentColor; background: var(--surface-soft); }
.mastery-controls .unfamiliar.marked, .mastery-badge.unfamiliar { border-color: var(--warning); background: var(--warning-tint); color: var(--warning); }
.mastery-controls .unknown.marked, .mastery-badge.unknown { border-color: var(--danger); background: var(--danger-tint); color: var(--danger); }
.mastery-controls .mastered.marked, .mastery-badge.mastered { border-color: var(--success); background: var(--success-tint); color: var(--success); }
.note-toggle { display: grid; place-items: center; width: 44px; height: 44px; border: 0; border-radius: 6px; background: transparent; color: var(--muted); }
.note-toggle:hover, .note-toggle.has-note { background: var(--accent-tint); color: var(--accent-dark); }
.answer-panel { margin: 10px 0; border-top: 1px solid var(--line); padding: 18px 0 8px; font-size: 16px; line-height: 1.75; }
.answer-panel h4 { margin: 0 0 6px; color: var(--accent-dark); font-size: 14px; }
.answer-panel h4:not(:first-child) { margin-top: 16px; }
.choice-feedback { display: flex; align-items: center; gap: 8px; margin: 0 0 14px; border-radius: 6px; padding: 10px 12px; font-size: 14px; line-height: 1.6; }.choice-feedback.correct { background: var(--success-tint); color: var(--success); }.choice-feedback.incorrect { background: var(--danger-tint); color: var(--danger); }.option-result.incorrect { color: var(--danger); }
.note-area { display: grid; gap: 6px; margin: 12px 0 6px; font-size: 13px; }
.note-area textarea { width: 100%; border: 1px solid var(--line-strong); border-radius: 9px; padding: 12px 14px; background: var(--surface-soft); color: var(--ink); font: inherit; line-height: 1.7; resize: vertical; }
.note-area small { color: var(--muted); }
.visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
@media (max-width: 1000px) { .mastery-controls { margin-left: 0; }.note-toggle { margin-left: auto; } }
@media (max-width: 600px) { .question-card { padding: 16px 16px 12px; border-radius: 12px; }.question-stem { font-size: 17px; }.question-topic { margin-left: 0; }.options { grid-template-columns: 1fr; }.question-actions { gap: 5px 8px; }.answer-toggle { order: 0; }.note-toggle { order: 1; }.mastery-controls { order: 2; width: 100%; }.mastery-controls button { flex: 1; }.question-source { font-size: 12px; } }
</style>
