<script setup lang="ts">
import { computed } from 'vue'
import DOMPurify from 'dompurify'
import katex from 'katex'
import { marked } from 'marked'

const props = defineProps<{ source: string }>()

const html = computed(() => {
  const formulas: string[] = []
  const protectedSource = props.source.replace(
    /\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$[^$\n]+?\$|\\\([^\n]*?\\\)/g,
    (match) => {
      const index = formulas.push(match) - 1
      return `MATHPLACEHOLDER${index}X`
    },
  )

  const rendered = marked.parse(protectedSource, { async: false, breaks: false, gfm: true }) as string
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

<template><div class="math-markdown" v-html="html"></div></template>

<style scoped>
.math-markdown { color: #26352d; font-size: 16px; line-height: 1.9; overflow-wrap: anywhere; }
.math-markdown :deep(h3) { margin: 30px 0 12px; color: #173322; font-size: 21px; line-height: 1.5; }
.math-markdown :deep(h5) { margin: 34px 0 12px; color: #15271d; font-size: 19px; line-height: 1.45; font-weight: 750; }
.math-markdown :deep(h5:first-child) { margin-top: 2px; }
.math-markdown :deep(p) { margin: 11px 0; }
.math-markdown :deep(ul), .math-markdown :deep(ol) { margin: 11px 0; padding-left: 1.6em; }
.math-markdown :deep(li) { margin: 6px 0; }
.math-markdown :deep(blockquote) { margin: 18px 0; border-left: 3px solid #b6cdbf; padding: 10px 16px; background: #f3f7f3; color: #53675b; }
.math-markdown :deep(hr) { margin: 34px 0; border: 0; border-top: 1px solid #e1e7e1; }
.math-markdown :deep(table) { width: 100%; margin: 18px 0; border-collapse: collapse; font-size: 15px; }
.math-markdown :deep(th), .math-markdown :deep(td) { border: 1px solid #dce5dd; padding: 10px 12px; text-align: left; vertical-align: top; }
.math-markdown :deep(th) { background: #f0f5f1; color: #253b2e; }
.math-markdown :deep(.katex-display) { margin: 20px 0; padding: 13px 8px; overflow-x: auto; overflow-y: hidden; border-radius: 8px; background: #fafcf9; }
.math-markdown :deep(.katex) { color: #15291d; }
.math-markdown :deep(strong) { color: #183c29; font-weight: 750; }
.math-markdown :deep(code) { border-radius: 4px; padding: 2px 5px; background: #eef3ef; color: #315a43; }
@media (max-width: 640px) { .math-markdown { font-size: 15px; line-height: 1.82; } .math-markdown :deep(table) { display: block; overflow-x: auto; white-space: nowrap; } }
</style>
