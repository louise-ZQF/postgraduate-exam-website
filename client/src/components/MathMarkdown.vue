<script setup lang="ts">
import { computed } from 'vue'
import DOMPurify from 'dompurify'
import katex from 'katex'
import { marked } from 'marked'
import type { MathFormula } from '@/math/types'

const props = withDefaults(defineProps<{ source: string; inline?: boolean; formulas?: MathFormula[] }>(), {
  inline: false,
  formulas: () => [],
})

const html = computed(() => {
  const formulas: string[] = []
  const protectedSource = props.source.replace(/<!--\s*formula\s+[^\n]*?-->/g, '').replace(
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
      const renderedFormula = katex.renderToString(formula.trim(), { displayMode, throwOnError: false, trust: false, strict: 'ignore' })
      const items = props.formulas.filter((candidate) => candidate.sourceBlockIndex === Number(rawIndex))
      if (!items.length) return renderedFormula
      return items.map((item) => {
        const safeTitle = item.title.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char] ?? char)
        const itemMath = items.length === 1 ? renderedFormula : katex.renderToString(item.latex, { displayMode, throwOnError: false, trust: false, strict: 'ignore' })
        return `<span id="${item.id}" class="formula-unit${displayMode ? '' : ' inline-formula'}"><span class="formula-unit-math">${itemMath}</span><button class="formula-favorite-button" type="button" data-formula-id="${item.id}" aria-label="收藏此公式：${safeTitle}">☆ 收藏此公式</button></span>`
      }).join('')
    } catch {
      return `<code>${formula}</code>`
    }
  })
})
</script>

<template><component :is="inline ? 'span' : 'div'" class="math-markdown" :class="{ inline }" v-html="html" /></template>

<style scoped>
.math-markdown { color: var(--ink); font-size: 16.5px; line-height: 1.9; overflow-wrap: anywhere; }
.math-markdown.inline { display: inline; color: inherit; font: inherit; line-height: inherit; }
.math-markdown :deep(h3) { margin: 32px 0 12px; font-family: var(--serif); font-size: 22px; line-height: 1.5; }
.math-markdown :deep(h5) { margin: 36px 0 13px; color: var(--ink); font-family: var(--serif); font-size: 21px; line-height: 1.5; font-weight: 700; }
.math-markdown :deep(h5:first-child) { margin-top: 2px; }
.math-markdown :deep(p) { margin: 12px 0; }
.math-markdown :deep(ul), .math-markdown :deep(ol) { margin: 13px 0; padding-left: 1.6em; }
.math-markdown :deep(li) { margin: 7px 0; padding-left: .1em; }
.math-markdown :deep(li::marker) { color: var(--accent); }
.math-markdown :deep(blockquote) { margin: 20px 0; border-left: 3px solid var(--accent); padding: 8px 16px; background: var(--surface-soft); color: var(--ink-soft); }
.math-markdown :deep(hr) { margin: 36px 0; border: 0; border-top: 1px solid var(--line); }
.math-markdown :deep(table) { width: 100%; margin: 18px 0; border-collapse: collapse; font-size: 15px; }
.math-markdown :deep(th), .math-markdown :deep(td) { border: 1px solid var(--line); padding: 10px 12px; text-align: left; vertical-align: top; }
.math-markdown :deep(th) { background: var(--surface-soft); }
.math-markdown :deep(tr:nth-child(even) td) { background: var(--paper); }
.math-markdown :deep(.katex-display) { margin: 19px 0; overflow-x: auto; overflow-y: hidden; border: 0; border-radius: 6px; padding: 12px 14px; background: var(--surface-soft); }
.math-markdown :deep(.formula-unit) { display: block; scroll-margin-top: 24px; border-top: 1px solid var(--line); padding: 14px 0 17px; }
.math-markdown :deep(.inline-formula) { display: inline-flex; align-items: baseline; gap: 5px; border: 0; padding: 0; vertical-align: baseline; }
.math-markdown :deep(.inline-formula .formula-favorite-button) { min-height: 44px; padding: 4px 8px; white-space: nowrap; }
.math-markdown :deep(.formula-unit .katex-display) { margin: 2px 0 9px; padding: 9px 12px; }
.math-markdown :deep(.formula-favorite-button) { min-height: 44px; border: 1px solid var(--line-strong); border-radius: 6px; padding: 8px 12px; background: var(--paper); color: var(--ink-soft); font-size: 12px; font-weight: 650; }
.math-markdown :deep(.formula-favorite-button:hover), .math-markdown :deep(.formula-favorite-button.active) { border-color: var(--accent); background: var(--accent-tint); color: var(--accent-dark); }
.math-markdown :deep(.formula-unit.search-target) { background: var(--accent-tint); outline: 2px solid var(--accent); outline-offset: 5px; }
.math-markdown :deep(.katex) { color: var(--ink); }
.math-markdown :deep(strong) { color: var(--ink); font-weight: 750; }
.math-markdown :deep(code) { border: 1px solid var(--line); border-radius: 4px; padding: 2px 5px; background: var(--surface-soft); color: var(--accent-dark); }
@media (max-width: 700px) { .math-markdown { font-size: 16px; line-height: 1.85; }.math-markdown :deep(h5) { font-size: 19px; }.math-markdown :deep(.katex-display) { margin-right: -5px; margin-left: -5px; padding: 11px 7px; }.math-markdown :deep(table) { display: block; overflow-x: auto; white-space: nowrap; } }
</style>
