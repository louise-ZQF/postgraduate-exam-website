<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, shallowRef } from 'vue'
import { Download } from '@lucide/vue'
import WorkbookDocument from './WorkbookDocument.vue'
import type { WorkbookSection } from '@/math/workbook'

const props = defineProps<{
  title: string
  sections: () => WorkbookSection[] | Promise<WorkbookSection[]>
  disabled?: boolean
}>()
const workbook = shallowRef<{ title: string; sections: WorkbookSection[] }>()
const busy = defineModel<boolean>('busy', { default: false })
const error = ref('')
let originalTitle: string | undefined
let mounted = true

function finishExport() {
  window.removeEventListener('afterprint', finishExport)
  workbook.value = undefined
  busy.value = false
  if (originalTitle !== undefined) document.title = originalTitle
  originalTitle = undefined
}
onBeforeUnmount(() => { mounted = false; finishExport() })

async function exportWorkbook() {
  if (busy.value || props.disabled) return
  busy.value = true
  error.value = ''
  try {
    const title = `${props.title} · 做题本`
    const sections = (await props.sections()).filter(section => section.questions.length)
    if (!mounted) return
    if (!sections.length) {
      error.value = '当前集合没有可导出的题目。'
      finishExport()
      return
    }
    workbook.value = { title, sections }
    await nextTick()
    const sheet = document.querySelector<HTMLElement>('body > .workbook-sheet')
    if (!sheet) throw new Error('Workbook unavailable')
    // 先排版，再等待题图及公式字体，避免得到空白占位。
    sheet.getBoundingClientRect()
    const images = Array.from(sheet.querySelectorAll('img'))
    try {
      await Promise.all([document.fonts.ready, ...images.map(image => image.decode())])
    } catch {
      error.value = '有题图未加载，请重试后导出。'
      finishExport()
      return
    }
    if (!mounted) return
    originalTitle = document.title
    document.title = title
    window.addEventListener('afterprint', finishExport, { once: true })
    window.print()
  } catch {
    error.value = '无法打开打印窗口，请重试。'
    finishExport()
  }
}
</script>

<template>
  <div class="workbook-control">
    <button type="button" :disabled="disabled || busy" title="导出当前集合的题目与作答留白" @click="exportWorkbook">
      <Download aria-hidden="true" />{{ busy ? '准备做题本…' : '导出做题本 PDF' }}
    </button>
    <p v-if="error" role="status">{{ error }}</p>
    <Teleport to="body">
      <WorkbookDocument v-if="workbook" :title="workbook.title" :sections="workbook.sections" />
    </Teleport>
  </div>
</template>

<style scoped>
.workbook-control { min-width: 0; }
.workbook-control button { display: inline-flex; align-items: center; justify-content: center; gap: 7px; min-height: 44px; padding: 0 13px; border: 1px solid var(--line-strong); border-radius: 8px; color: var(--ink-soft); background: var(--paper); font-size: 12px; white-space: nowrap; }
.workbook-control button:not(:disabled):hover { border-color: var(--accent); color: var(--accent-dark); }
.workbook-control button:disabled { opacity: .5; cursor: default; }
.workbook-control svg { width: 16px; height: 16px; }
.workbook-control p { margin: 5px 0 0; color: var(--danger); font-size: 12px; white-space: normal; }
@media (max-width: 600px) { .workbook-control button { padding: 0 9px; font-size: 11px; } }
</style>
