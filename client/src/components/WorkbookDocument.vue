<script setup lang="ts">
import { computed } from 'vue'
import MathMarkdown from '@/components/MathMarkdown.vue'
import { practiceImageUrl } from '@/math/practiceImage'
import type { WorkbookQuestion, WorkbookSection } from '@/math/workbook'

const props = defineProps<{ title: string; sections: WorkbookSection[] }>()
const numberedSections = computed(() => {
  let number = 0
  return props.sections.map(section => ({
    title: section.title,
    questions: section.questions.map(question => ({ ...question, number: ++number })),
  }))
})

function optionColumns(options: NonNullable<WorkbookQuestion['options']>) {
  const longest = Math.max(...options.map(option => option.text.length))
  if (longest <= 19 && options.length === 4) return 4
  return longest <= 65 ? 2 : 1
}

function hasTallScan(images: WorkbookQuestion['questionImages']) {
  return (images?.reduce((ratio, image) => ratio + image.height / image.width, 0) ?? 0) > 0.7
}
</script>

<template>
  <main class="workbook-sheet">
    <header class="workbook-title">
      <h1>{{ title }}</h1>
      <p>共 {{ numberedSections.at(-1)?.questions.at(-1)?.number }} 题</p>
    </header>
    <section v-for="(section, index) in numberedSections" :key="index" class="workbook-section">
      <h2 v-if="section.title">{{ section.title }} <small>{{ section.questions.length }} 题</small></h2>
      <article v-for="question in section.questions" :key="question.id" class="workbook-question"
        :class="[`workbook-${question.type}`, { 'workbook-tall-scan': hasTallScan(question.questionImages) }]" :data-question-id="question.id">
        <header class="workbook-question-heading"><strong>{{ question.label ?? question.number }}.</strong><span v-if="question.source">{{ question.source }}</span></header>
        <div class="workbook-body">
          <template v-if="question.questionImages?.length">
            <img v-for="picture in question.questionImages" :key="picture.src" class="workbook-scan"
              :src="practiceImageUrl(picture.src)" :alt="picture.alt" :width="picture.width" :height="picture.height" />
          </template>
          <MathMarkdown v-else class="workbook-stem" :source="question.stem" />
          <figure v-for="figure in question.figures" :key="figure.src">
            <img class="workbook-figure" :src="practiceImageUrl(figure.src)" :alt="figure.alt" :width="figure.width" :height="figure.height" />
            <figcaption v-if="figure.caption">{{ figure.caption }}</figcaption>
          </figure>
          <div v-if="question.options?.length" class="workbook-options" :style="{ '--option-columns': optionColumns(question.options) }">
            <div v-for="option in question.options" :key="option.key" class="workbook-option">
              <strong>{{ option.key }}.</strong><MathMarkdown inline :source="option.text" />
            </div>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<style>
.workbook-sheet {
  position: fixed;
  top: 0;
  left: -10000px;
  width: 174mm;
  visibility: hidden;
  background: white;
  color: black;
  font-family: 'Songti SC', 'Noto Serif CJK SC', SimSun, serif;
  font-size: 11pt;
  line-height: 1.65;
  --ink: #141414;
}
.workbook-sheet .workbook-title { margin: 0 0 7mm; text-align: center; break-after: avoid; }
.workbook-sheet .workbook-title h1 { margin: 0; font-size: 18pt; line-height: 1.35; }
.workbook-sheet .workbook-title p { margin: 2mm 0 0; font-size: 10pt; color: #555; }
.workbook-section h2 { margin: 0 0 4mm; font-size: 12pt; break-after: avoid; }
.workbook-section h2 small { margin-left: 2mm; color: #555; font-size: 9pt; font-weight: 400; }
.workbook-question { position: relative; box-sizing: border-box; margin: 0; min-height: 72mm; padding: 0 0 38mm; break-inside: avoid; }
.workbook-question.workbook-solution { min-height: 154mm; padding-bottom: 84mm; }
.workbook-question.workbook-tall-scan { padding-bottom: 25mm; }
.workbook-question-heading { display: flex; gap: 3mm; align-items: baseline; break-after: avoid; }
.workbook-question-heading strong { width: 7mm; flex: none; font-weight: 700; }
.workbook-question-heading span { color: #555; font-size: 9pt; }
.workbook-question-heading:not(:has(span)) { position: absolute; left: 0; top: 0; }
.workbook-body { padding-left: 8mm; }
.workbook-sheet .math-markdown { font: inherit; color: inherit; }
.workbook-sheet .math-markdown > :first-child { margin-top: 0; }
.workbook-sheet .math-markdown > :last-child { margin-bottom: 0; }
.workbook-sheet .math-markdown p { margin: 0 0 2mm; }
.workbook-sheet .math-markdown .katex-display { margin: 3mm 0; padding: 0; overflow: visible; background: none; break-inside: avoid; }
.workbook-sheet .math-markdown .reading-math { display: inline; }
.workbook-options { display: grid; grid-template-columns: repeat(var(--option-columns), minmax(0, 1fr)); gap: 1mm 4mm; margin-top: 2mm; }
.workbook-option { display: flex; align-items: baseline; gap: 2mm; break-inside: avoid; }
.workbook-sheet figure { margin: 3mm 0 0; break-inside: avoid; }
.workbook-sheet figcaption { color: #555; text-align: center; font-size: 9pt; }
.workbook-sheet img { display: block; width: auto; height: auto; max-width: 100%; object-fit: contain; break-inside: avoid; }
.workbook-sheet .workbook-figure { max-height: 72mm; margin: 0 auto; }
.workbook-sheet .workbook-scan { max-height: 158mm; margin: 1mm 0; }
@page workbook {
  size: A4;
  margin: 17mm 18mm 18mm;
  @top-left { content: '数学二 · 做题本'; font: 9pt 'Songti SC', 'Noto Serif CJK SC', SimSun, serif; color: #555; border-bottom: .4pt solid #aaa; }
  @bottom-center { content: '第 ' counter(page) ' 页，共 ' counter(pages) ' 页'; font: 9pt 'Songti SC', 'Noto Serif CJK SC', SimSun, serif; color: #555; }
}
@media print {
  body:has(> .workbook-sheet) > :not(.workbook-sheet) { display: none !important; }
  html:has(.workbook-sheet), body:has(> .workbook-sheet) { background: white !important; margin: 0 !important; }
  .workbook-sheet { page: workbook; position: static; visibility: visible; width: auto; }
}
</style>
