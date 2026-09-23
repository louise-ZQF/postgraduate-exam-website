<script setup lang="ts">
import { computed } from 'vue'
import DOMPurify from 'dompurify'
import katex from 'katex'
import { marked } from 'marked'

const props = withDefaults(defineProps<{ source: string; inline?: boolean }>(), {
  inline: false,
})

const html = computed(() => {
  const formulas: string[] = []
  const protectedSource = props.source.replace(
    /\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$[^$\n]+?\$|\\\([^\n]*?\\\)/g,
    (match) => {
      const index = formulas.push(match) - 1
      return `MATHPLACEHOLDER${index}X`
    },
  )

  const rendered = props.inline
    ? marked.parseInline(protectedSource, { async: false, gfm: true }) as string
    : marked.parse(protectedSource, { async: false, breaks: false, gfm: true }) as string
  const sanitized = DOMPurify.sanitize(rendered, {
    FORBID_ATTR: ['id', 'style'],
    FORBID_TAGS: ['button', 'embed', 'form', 'iframe', 'input', 'object', 'script', 'style'],
    USE_PROFILES: { html: true },
  })

  return sanitized.replace(/MATHPLACEHOLDER(\d+)X/g, (_, rawIndex: string) => {
    const token = formulas[Number(rawIndex)] ?? ''
    const displayMode = token.startsWith('$$') || token.startsWith('\\[')
    const formula = token.startsWith('$$')
      ? token.slice(2, -2)
      : token.startsWith('\\[') || token.startsWith('\\(')
        ? token.slice(2, -2)
        : token.slice(1, -1)
    try {
      return katex.renderToString(formula.trim(), { displayMode, throwOnError: false, trust: false, strict: 'ignore' })
    } catch {
      return `<code>${formula}</code>`
    }
  })
})
</script>

<template><component :is="inline ? 'span' : 'div'" class="math-markdown" :class="{ inline }" v-html="html" /></template>

<style scoped>
.math-markdown { color: #263b31; font-size: 16.5px; line-height: 1.92; overflow-wrap: anywhere; }
.math-markdown.inline { display: inline; color: inherit; font: inherit; line-height: inherit; }
.math-markdown :deep(h3) { margin: 32px 0 13px; color: #173725; font-family: ui-serif, "Songti SC", STSong, serif; font-size: 22px; line-height: 1.5; }
.math-markdown :deep(h5) { position: relative; margin: 38px 0 14px; padding-left: 14px; color: #112a1d; font-size: 20px; line-height: 1.48; font-weight: 760; letter-spacing: -.01em; }
.math-markdown :deep(h5)::before { position: absolute; top: .27em; bottom: .22em; left: 0; width: 4px; border-radius: 99px; content: ''; background: linear-gradient(#c88b3f, #a96b24); }
.math-markdown :deep(h5:first-child) { margin-top: 2px; }
.math-markdown :deep(p) { margin: 12px 0; }
.math-markdown :deep(ul), .math-markdown :deep(ol) { margin: 13px 0; padding-left: 1.65em; }
.math-markdown :deep(li) { margin: 7px 0; padding-left: .1em; }
.math-markdown :deep(li::marker) { color: #4c7a61; }
.math-markdown :deep(blockquote) { margin: 20px 0; border: 1px solid #dce7e0; border-left: 4px solid #679178; border-radius: 0 10px 10px 0; padding: 12px 17px; background: #f1f7f3; color: #4d6558; }
.math-markdown :deep(hr) { margin: 38px 0; border: 0; border-top: 1px solid #dfe7e2; }
.math-markdown :deep(table) { width: 100%; margin: 18px 0; border-collapse: collapse; font-size: 15px; }
.math-markdown :deep(th), .math-markdown :deep(td) { border: 1px solid #d9e4dd; padding: 11px 13px; text-align: left; vertical-align: top; }
.math-markdown :deep(th) { background: #edf4f0; color: #203a2c; }
.math-markdown :deep(tr:nth-child(even) td) { background: #fafcfb; }
.math-markdown :deep(.katex-display) { margin: 21px 0; border: 1px solid #e0e8e3; border-left: 4px solid #b6cbbf; border-radius: 11px; padding: 16px 12px; overflow-x: auto; overflow-y: hidden; background: linear-gradient(120deg, #f8fbf9, #fcfdfc); box-shadow: inset 0 1px 0 white; }
.math-markdown :deep(.katex) { color: #15291d; }
.math-markdown :deep(strong) { color: #17452f; font-weight: 760; }
.math-markdown :deep(code) { border: 1px solid #dce6e0; border-radius: 5px; padding: 2px 5px; background: #edf3ef; color: #27583e; }
@media (max-width: 640px) { .math-markdown { font-size: 16px; line-height: 1.86; }.math-markdown :deep(h5) { font-size: 18px; }.math-markdown :deep(.katex-display) { margin-right: -8px; margin-left: -8px; border-radius: 9px; padding: 14px 8px; }.math-markdown :deep(table) { display: block; overflow-x: auto; white-space: nowrap; } }
</style>
