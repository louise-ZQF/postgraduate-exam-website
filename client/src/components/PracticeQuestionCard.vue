<script setup lang="ts">
import { computed, ref } from 'vue'
import MathMarkdown from '@/components/MathMarkdown.vue'
import PracticeIcon from '@/components/PracticeIcon.vue'
import type { Mastery, PracticeQuestion, QuestionProgress } from '@/math/practice'

const props = defineProps<{ question: PracticeQuestion; index: number; progress?: QuestionProgress; storageFailed: boolean }>()
const emit = defineEmits<{ mark: [id: string, mastery: Mastery]; note: [id: string, note: string] }>()
const answerOpen = ref(false)
const noteOpen = ref(false)
const selectedOption = ref('')
const statuses: { value: Mastery; label: string }[] = [
  { value: 'unfamiliar', label: '不熟练' }, { value: 'unknown', label: '不会' }, { value: 'mastered', label: '掌握' },
]
// 短公式随题干排版，矩阵、分段函数与多行公式保留独立行。
const stem = computed(() => props.question.stem.replace(/\s*\$\$([\s\S]*?)\$\$\s*/g, (block, formula: string) => {
  const latex = formula.trim()
  return latex.length <= 110 && !/\\begin\{|\\\\/.test(latex) ? ` $${latex.replace(/\s+/g, ' ')}$ ` : `\n\n${block.trim()}\n\n`
}).trim())
</script>

<template>
  <article :id="question.id" class="question-card" tabindex="-1" :aria-labelledby="`title-${question.id}`">
    <header class="question-meta">
      <span class="question-index">{{ index }}</span>
      <div class="question-source"><span>{{ question.source }}</span><span v-if="question.examNumber" class="exam-number">真题 {{ question.examNumber }} · 练习 {{ question.exerciseIndex }}</span></div>
      <span v-if="progress?.mastery" class="mastery-badge" :class="progress.mastery">{{ statuses.find(s => s.value === progress?.mastery)?.label }}</span>
    </header>
    <h3 :id="`title-${question.id}`" class="visually-hidden">{{ question.year }} 年 {{ question.source }} {{ question.number }}题</h3>
    <p class="question-topic">{{ question.topic }}</p>
    <MathMarkdown class="question-stem" :source="stem" compact />
    <fieldset v-if="question.options?.length" class="options">
      <legend class="visually-hidden">第 {{ index }} 题，选择你的答案</legend>
      <label v-for="option in question.options" :key="option.key" class="option" :class="{ selected: selectedOption === option.key, correct: answerOpen && question.correctOption === option.key, wrong: answerOpen && selectedOption === option.key && question.correctOption !== option.key }">
        <input v-model="selectedOption" type="radio" :name="question.id" :value="option.key" :aria-label="`选项 ${option.key}`" />
        <span class="option-key">{{ option.key }}.</span><MathMarkdown :source="option.text" inline compact /><PracticeIcon v-if="answerOpen && question.correctOption === option.key" name="check" class="option-result" />
      </label>
    </fieldset>
    <div class="question-actions">
      <button class="answer-toggle" :aria-expanded="answerOpen" :aria-controls="`answer-${question.id}`" @click="answerOpen = !answerOpen"><PracticeIcon name="eye" />{{ answerOpen ? '收起答案与解析' : '查看答案与解析' }}</button>
      <div class="mastery-controls" role="group" :aria-label="`第 ${index} 题掌握程度`"><button v-for="status in statuses" :key="status.value" :class="[status.value, { marked: progress?.mastery === status.value }]" :aria-pressed="progress?.mastery === status.value" @click="emit('mark', question.id, status.value)"><PracticeIcon :name="status.value === 'mastered' ? 'check' : status.value" />{{ status.label }}</button></div>
      <button class="note-toggle" :class="{ 'has-note': progress?.note }" :aria-label="progress?.note ? '查看错因笔记' : '记录错因笔记'" :aria-expanded="noteOpen" :aria-controls="`note-${question.id}`" @click="noteOpen = !noteOpen"><PracticeIcon name="note" /><span class="visually-hidden">错因笔记</span></button>
    </div>
    <section v-if="answerOpen" :id="`answer-${question.id}`" class="answer-panel" aria-label="答案与解析">
      <h4>答案</h4><MathMarkdown :source="question.answer" compact />
      <p v-if="selectedOption && question.correctOption" class="answer-feedback">{{ selectedOption === question.correctOption ? '选择正确' : `本次选择 ${selectedOption}，正确选项为 ${question.correctOption}` }}</p>
      <h4>解析</h4><MathMarkdown :source="question.explanation" compact />
    </section>
    <label v-if="noteOpen" :id="`note-${question.id}`" class="note-area"><span>错因笔记</span><textarea :aria-label="`${question.source}的错因笔记`" :value="progress?.note ?? ''" maxlength="10000" placeholder="记录错因或易忘的步骤" rows="2" @input="emit('note', question.id, ($event.target as HTMLTextAreaElement).value)" /><small>{{ storageFailed ? '保存失败，请导出备份' : '自动保存' }}</small></label>
  </article>
</template>

<style scoped>
.question-card { scroll-margin-top: 22px; min-width: 0; border: 1px solid var(--line); border-radius: 11px; padding: 17px 21px 10px; background: var(--paper); }
.question-card:focus { outline: 2px solid var(--accent); outline-offset: 3px; }
svg { width: 17px; height: 17px; flex-shrink: 0; }
button { cursor: pointer; transition: background .16s, border-color .16s, color .16s; }
.question-meta { display: flex; align-items: center; gap: 10px; color: var(--muted); font-size: 12px; }
.question-index { display: grid; place-items: center; flex-shrink: 0; min-width: 28px; height: 28px; border-radius: 5px; background: var(--surface-soft); color: var(--ink); font-size: 15px; font-weight: 700; }
.question-source { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 12px; min-width: 0; line-height: 1.6; }
.exam-number { white-space: nowrap; }
.mastery-badge { margin-left: auto; border-radius: 5px; padding: 3px 7px; white-space: nowrap; }
.question-topic { margin: 6px 0 0 38px; color: var(--muted); font-size: 12px; line-height: 1.5; }
.question-stem { margin: 14px 0; font-size: 18px; line-height: 1.7; font-weight: 500; }
.options { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; min-width: 0; margin: 0 0 14px; padding: 0; border: 0; }
.option { position: relative; display: flex; align-items: center; gap: 9px; min-width: 0; min-height: 44px; border: 1px solid var(--line); border-radius: 6px; padding: 8px 11px; color: var(--ink); font-size: 17px; cursor: pointer; }
.option input { position: absolute; inset: 0; opacity: 0; width: 100%; height: 100%; cursor: pointer; }
.option:focus-within { outline: 3px solid var(--focus-ring); border-color: var(--accent); }
.option:hover, .option.selected { border-color: var(--accent); background: var(--accent-tint); }
.option-key { flex-shrink: 0; font-weight: 600; }
.option :deep(.math-markdown) { min-width: 0; }
.option.correct { border-color: var(--success); background: var(--success-tint); }
.option.wrong { border-color: var(--danger); background: var(--danger-tint); }
.option-result { margin-left: auto; color: var(--success); }
.question-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 12px; border-top: 1px solid var(--line); padding-top: 7px; }
.answer-toggle { display: inline-flex; align-items: center; gap: 7px; min-height: 44px; border: 0; padding: 0 4px; background: transparent; color: var(--ink); font-size: 13px; font-weight: 600; }
.answer-toggle:hover { color: var(--accent); }
.mastery-controls { display: flex; gap: 8px; margin-left: auto; }
.mastery-controls button { display: flex; align-items: center; justify-content: center; gap: 6px; min-height: 44px; border: 1px solid var(--line); border-radius: 6px; padding: 7px 10px; background: var(--paper); color: var(--ink-soft); font-size: 13px; white-space: nowrap; }
.mastery-controls button:hover { border-color: currentColor; background: var(--surface-soft); }
.mastery-controls .unfamiliar.marked, .mastery-badge.unfamiliar { border-color: var(--warning); background: var(--warning-tint); color: var(--warning); }
.mastery-controls .unknown.marked, .mastery-badge.unknown { border-color: var(--danger); background: var(--danger-tint); color: var(--danger); }
.mastery-controls .mastered.marked, .mastery-badge.mastered { border-color: var(--success); background: var(--success-tint); color: var(--success); }
.note-toggle { display: grid; place-items: center; width: 44px; height: 44px; border: 0; border-radius: 6px; background: transparent; color: var(--muted); }
.note-toggle:hover, .note-toggle.has-note { background: var(--accent-tint); color: var(--accent-dark); }
.answer-panel { margin: 10px 0; border-top: 1px solid var(--line); padding: 14px 0 4px; font-size: 16px; line-height: 1.75; }
.answer-panel h4 { margin: 0 0 6px; color: var(--accent-dark); font-size: 14px; }
.answer-panel h4:not(:first-child) { margin-top: 16px; }
.answer-feedback { margin: 8px 0; color: var(--ink-soft); font-size: 13px; }
.note-area { display: grid; gap: 6px; margin: 12px 0 6px; font-size: 13px; }
.note-area textarea { width: 100%; border: 1px solid var(--line-strong); border-radius: 6px; padding: 9px 11px; background: var(--paper); color: var(--ink); font: inherit; line-height: 1.7; resize: vertical; }
.note-area small { color: var(--muted); }
.visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
@media (max-width: 1000px) { .mastery-controls { margin-left: 0; }.note-toggle { margin-left: auto; } }
@media (max-width: 600px) { .question-card { padding: 14px 14px 8px; }.question-stem { font-size: 17px; }.question-topic { margin-left: 0; }.options { grid-template-columns: 1fr; }.question-actions { gap: 5px 8px; }.answer-toggle { order: 0; }.note-toggle { order: 1; }.mastery-controls { order: 2; width: 100%; }.mastery-controls button { flex: 1; }.question-source { font-size: 12px; } }
</style>
