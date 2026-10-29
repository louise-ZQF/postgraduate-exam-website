<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import MathMarkdown from './MathMarkdown.vue'
import { noteFromClipboard } from '@/math/notePaste'

const props = defineProps<{ modelValue: string; inputId: string; label: string; storageFailed: boolean }>()
const emit = defineEmits<{ 'update:modelValue': [value: string]; blur: [] }>()
const mode = ref('split')
const input = ref<HTMLTextAreaElement>()
const root = ref<HTMLElement>()
const feedback = ref('')
const imageOpen = ref(false)
const imageUrl = ref('')
const limit = 10_000
const modes = [{ id: 'split', title: '分屏' }, { id: 'edit', title: '仅编辑' }, { id: 'preview', title: '仅预览' }]
const commands = [
  { id: 'h1', title: '一级标题', label: 'H1', prefix: '# ', suffix: '', placeholder: '标题', line: true },
  { id: 'h2', title: '二级标题', label: 'H2', prefix: '## ', suffix: '', placeholder: '小标题', line: true },
  { id: 'bold', title: '加粗', label: 'B', prefix: '**', suffix: '**', placeholder: '重点内容' },
  { id: 'italic', title: '斜体', label: 'I', prefix: '*', suffix: '*', placeholder: '内容' },
  { id: 'bullet', title: '无序列表', label: '列表', prefix: '- ', suffix: '', placeholder: '第一点', line: true },
  { id: 'ordered', title: '有序列表', label: '步骤', prefix: '1. ', suffix: '', placeholder: '第一步', line: true },
  { id: 'quote', title: '引用', label: '引用', prefix: '> ', suffix: '', placeholder: '易错点', line: true },
  { id: 'highlight', title: '标注重点', label: '重点', prefix: '<mark>', suffix: '</mark>', placeholder: '重点内容' },
  { id: 'code', title: '行内代码', label: '</>', prefix: '`', suffix: '`', placeholder: '代码' },
  { id: 'codeblock', title: '代码块', label: '代码块', prefix: '```text\n', suffix: '\n```', placeholder: '代码内容', block: true },
  { id: 'table', title: '插入表格', label: '表格', prefix: '', suffix: '', placeholder: '| 条件 | 结论 |\n| --- | --- |\n|  |  |', block: true },
  { id: 'math', title: '插入行内公式', label: '公式', prefix: '\\(', suffix: '\\)', placeholder: 'f\'(x)=f(x)' },
  { id: 'mathblock', title: '插入公式块', label: '公式块', prefix: '$$\n', suffix: '\n$$', placeholder: '\\int_0^x f(t)\\,dt', block: true },
]
const savedLabel = computed(() => props.storageFailed ? '保存失败，请导出备份' : '自动保存')

function update(value: string) { feedback.value = ''; emit('update:modelValue', value) }
async function insert(value: string, selectStart = 0, selectEnd = value.length) {
  const element = input.value
  const start = element?.selectionStart ?? props.modelValue.length
  const end = element?.selectionEnd ?? start
  if (props.modelValue.length - (end - start) + value.length > limit) { feedback.value = '笔记最多 10000 字，本次插入未保存。'; return }
  const next = props.modelValue.slice(0, start) + value + props.modelValue.slice(end)
  mode.value = mode.value === 'preview' ? 'split' : mode.value
  update(next)
  await nextTick()
  input.value?.focus({ preventScroll: true })
  input.value?.setSelectionRange(start + selectStart, start + selectEnd)
}
function format(command: typeof commands[number]) {
  const element = input.value
  let start = element?.selectionStart ?? props.modelValue.length
  let end = element?.selectionEnd ?? start
  if (command.line && element) {
    start = props.modelValue.lastIndexOf('\n', start - 1) + 1
    const lineEnd = props.modelValue.indexOf('\n', end)
    end = lineEnd < 0 ? props.modelValue.length : lineEnd
    element.setSelectionRange(start, end)
  }
  const selected = props.modelValue.slice(start, end) || command.placeholder
  let prefix = command.prefix, suffix = command.suffix
  if (command.block) {
    if (start > 0 && props.modelValue[start - 1] !== '\n') prefix = '\n\n' + prefix
    if (end < props.modelValue.length && props.modelValue[end] !== '\n') suffix += '\n\n'
  }
  const content = command.line ? selected.split('\n').map((line, index) => `${command.id === 'ordered' ? `${index + 1}. ` : prefix}${line}`).join('\n') : prefix + selected + suffix
  void insert(content, command.line ? 0 : prefix.length, command.line ? content.length : prefix.length + selected.length)
}
function keydown(event: KeyboardEvent) {
  if ((event.ctrlKey || event.metaKey) && ['b', 'i'].includes(event.key.toLowerCase())) {
    event.preventDefault()
    format(commands.find(command => command.id === (event.key.toLowerCase() === 'b' ? 'bold' : 'italic'))!)
  }
}
function paste(event: ClipboardEvent) {
  const data = event.clipboardData
  if (!data) return
  const converted = noteFromClipboard(data.getData('text/html'), data.getData('text/plain'))
  if (converted) { event.preventDefault(); void insert(converted, converted.length, converted.length) }
}
async function copy() {
  try { await navigator.clipboard.writeText(props.modelValue); feedback.value = 'Markdown 已复制' }
  catch { feedback.value = '请在编辑区选中文本后复制。' }
}
function addImage() {
  const url = imageUrl.value.trim()
  if (!/^https?:\/\/[^\s<>]+$/i.test(url)) { feedback.value = '请输入完整的 http 或 https 图片地址。'; return }
  imageOpen.value = false
  void insert(`![图片](<${url}>)`)
  imageUrl.value = ''
}
function blur(event: FocusEvent) {
  if (!root.value?.contains(event.relatedTarget as Node | null)) emit('blur')
}
</script>

<template>
  <section ref="root" class="note-editor note-area" aria-label="错因笔记编辑器" @focusout="blur">
    <div class="note-heading"><strong>错因笔记</strong><span :class="{ failed: storageFailed }"><i aria-hidden="true"></i>{{ savedLabel }}</span></div>
    <div class="editor-topbar">
      <div class="editor-modes" role="group" aria-label="笔记编辑布局"><button v-for="item in modes" :key="item.id" :aria-pressed="mode === item.id" :class="{ active: mode === item.id }" @click="mode = item.id">{{ item.title }}</button></div>
      <button class="copy-button" :disabled="!modelValue" @click="copy">复制 Markdown</button>
    </div>
    <div class="editor-frame">
      <div v-if="mode !== 'preview'" class="editor-tools" role="toolbar" aria-label="笔记格式工具"><button v-for="command in commands" :key="command.id" :class="command.id" :title="command.title" :aria-label="command.title" @mousedown.prevent @click="format(command)">{{ command.label }}</button><button aria-label="插入图片链接" :aria-expanded="imageOpen" @click="imageOpen = !imageOpen">图片</button></div>
      <form v-if="imageOpen" class="image-form" @submit.prevent="addImage"><label :for="`${inputId}-image`">图片地址</label><input :id="`${inputId}-image`" v-model="imageUrl" type="url" placeholder="https://…" /><button type="submit">插入</button><button type="button" @click="imageOpen = false">取消</button></form>
      <div class="editor-panes" :class="mode">
        <div v-if="mode !== 'edit'" class="note-preview" role="region" aria-label="笔记实时预览"><div class="pane-label">实时预览<span>Markdown + LaTeX</span></div><MathMarkdown v-if="modelValue.trim()" :source="modelValue" automatic breaks /><p v-else class="preview-empty">输入内容后，这里会实时显示公式和排版。</p></div>
        <div v-if="mode !== 'preview'" class="note-source"><label class="pane-label" :for="inputId">编辑原文<span>{{ modelValue.length }} / 10000</span></label><textarea :id="inputId" ref="input" :aria-label="label" :value="modelValue" :maxlength="limit" spellcheck="false" placeholder="记录思路、推导或易错点，也可以直接粘贴 Markdown 和 LaTeX。" @input="update(($event.target as HTMLTextAreaElement).value)" @keydown="keydown" @paste="paste" /></div>
      </div>
    </div>
    <div class="editor-footer"><details><summary>公式写法</summary><p>支持 $…$、$$…$$、\(…\)、\[…\]，以及单独一行的 LaTeX 和矩阵、对齐环境；代码块内的普通代码保持原样。</p></details><span v-if="feedback" role="status">{{ feedback }}</span></div>
  </section>
</template>

<style scoped>
.note-editor { display: block; margin: 18px 0 4px; font-size: 13px; }
.note-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 10px; }.note-heading strong { font-size: 13px; font-weight: 600; }.note-heading > span { display: inline-flex; align-items: center; gap: 5px; color: var(--muted); font-size: 11px; }.note-heading i { width: 5px; height: 5px; border-radius: 50%; background: var(--success); }.note-heading .failed { color: var(--danger); }.note-heading .failed i { background: var(--danger); }
.editor-topbar { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 8px; }.editor-modes { display: flex; gap: 4px; padding: 3px; border: 1px solid var(--line); border-radius: 7px; background: var(--surface-soft); }.editor-modes button { min-height: 34px; border: 0; border-radius: 5px; padding: 0 12px; background: transparent; color: var(--muted); font-size: 12px; }.editor-modes button.active { background: var(--paper); color: var(--accent-dark); box-shadow: 0 1px 3px #24314a12; font-weight: 600; }.copy-button { min-height: 38px; border: 0; border-radius: 6px; padding: 0 8px; background: transparent; color: var(--ink-soft); font-size: 11px; }.copy-button:hover { color: var(--accent-dark); background: var(--surface-soft); }.copy-button:disabled { opacity: .5; cursor: default; }
.editor-frame { border: 1px solid var(--line-strong); border-radius: 9px; overflow: hidden; background: var(--paper); }.editor-tools { display: flex; flex-wrap: wrap; gap: 2px; padding: 5px 7px; border-bottom: 1px solid var(--line); background: var(--surface-soft); }.editor-tools button { min-width: 34px; min-height: 36px; border: 0; border-radius: 5px; padding: 0 8px; background: transparent; color: var(--ink-soft); font-size: 11px; }.editor-tools button:hover { background: var(--paper); color: var(--accent-dark); }.editor-tools .bold { font-size: 14px; font-weight: 750; }.editor-tools .italic { font-family: serif; font-size: 15px; font-style: italic; }.editor-tools .bullet, .editor-tools .code, .editor-tools .math { border-left: 1px solid var(--line-strong); border-radius: 0; margin-left: 4px; padding-left: 12px; }
.editor-panes { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); min-height: 240px; }.editor-panes.edit, .editor-panes.preview { grid-template-columns: minmax(0, 1fr); }.note-preview, .note-source { min-width: 0; }.editor-panes.split .note-preview { border-right: 1px solid var(--line); }.pane-label { display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 36px; margin: 0; padding: 0 14px; border-bottom: 1px solid var(--line); color: var(--ink-soft); background: var(--surface-soft); font-size: 11px; font-weight: 500; }.pane-label span { color: var(--muted); font-size: 10px; font-weight: 400; }.note-source { display: flex; flex-direction: column; }.note-source textarea { display: block; flex: 1; width: 100%; min-height: 210px; resize: vertical; border: 0; border-radius: 0; padding: 14px 16px; outline: 0; background: var(--paper); color: var(--ink); font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif; font-size: 14px; line-height: 1.9; }.note-source textarea::placeholder { color: #929aa7; }.note-source textarea:focus { box-shadow: inset 0 0 0 2px var(--focus-ring); }.note-preview :deep(.math-markdown) { padding: 14px 16px; font-size: 14px; line-height: 1.9; }.note-preview :deep(.math-markdown > :first-child) { margin-top: 0; }.note-preview :deep(.math-markdown > :last-child) { margin-bottom: 0; }.note-preview :deep(.katex-display) { padding: 6px 0; background: transparent; }.note-preview :deep(h1) { font-size: 21px; }.note-preview :deep(h2) { font-size: 18px; }.note-preview :deep(h3) { margin-top: 16px; font-size: 16px; font-family: inherit; }.note-preview :deep(pre) { font-size: 12px; }.preview-empty { margin: 36px 18px; color: var(--muted); font-size: 12px; text-align: center; }.editor-footer { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin-top: 6px; color: var(--muted); font-size: 11px; }.editor-footer details { max-width: 650px; }.editor-footer summary { cursor: pointer; min-height: 30px; line-height: 30px; }.editor-footer p { margin: 0 0 8px; line-height: 1.8; }.editor-footer > span { color: var(--accent-dark); }.image-form { display: flex; align-items: center; gap: 8px; padding: 10px; border-bottom: 1px solid var(--line); font-size: 12px; }.image-form input { flex: 1; min-width: 0; height: 36px; border: 1px solid var(--line-strong); border-radius: 5px; padding: 0 8px; }.image-form button { min-height: 36px; border: 0; border-radius: 5px; padding: 0 10px; color: var(--accent-dark); background: var(--accent-tint); }

.note-preview :deep(.reading-math) { display: inline-block; max-width: 100%; overflow-x: auto; overflow-y: hidden; padding: 2px 0; vertical-align: middle; }
.note-preview :deep(table) { display: block; max-width: 100%; overflow-x: auto; }
</style>
