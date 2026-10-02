<script setup lang="ts">
import MathHeader from '@/components/MathHeader.vue'
import MathMarkdown from '@/components/MathMarkdown.vue'
import notes from '@/content/linear-algebra-proofs.json'
</script>

<template>
  <div class="proofs-page">
    <MathHeader />
    <main>
      <RouterLink class="back-link" to="/">← 返回搜索</RouterLink>
      <header class="page-heading">
        <h1>线代证明题专场</h1>
        <p>{{ notes.title }}</p>
      </header>
      <MathMarkdown class="introduction" :source="notes.intro" />
      <section v-for="part in notes.sections" :id="part.id" :key="part.id" class="proof-part" :aria-labelledby="`${part.id}-heading`">
        <h2 :id="`${part.id}-heading`">{{ part.title }}</h2>
        <MathMarkdown v-if="part.intro" class="part-intro" :source="part.intro" />
        <div class="problem-list">
          <article v-for="problem in part.problems" :id="problem.id" :key="problem.id" :aria-labelledby="`${problem.id}-heading`">
            <h3 :id="`${problem.id}-heading`">{{ problem.title }}</h3>
            <MathMarkdown class="problem-body" :source="problem.body" />
          </article>
        </div>
        <MathMarkdown v-if="part.footer" class="part-footer" :source="part.footer" />
      </section>
      <RouterLink class="back-link bottom-link" to="/">← 返回搜索</RouterLink>
    </main>
  </div>
</template>

<style scoped>
.proofs-page { min-height: 100vh; }
main { width: 100%; padding: 36px clamp(24px, 4vw, 72px) 80px; }
.back-link { display: inline-flex; align-items: center; min-height: 44px; color: var(--accent-dark); font-size: 14px; font-weight: 650; }
.back-link:hover { text-decoration: underline; }
.page-heading { margin: 24px 0; }
h1, h2, h3 { color: var(--ink); font-family: var(--serif); }
h1 { margin: 0; font-size: clamp(38px, 4.5vw, 64px); line-height: 1.3; }
.page-heading p { margin: 12px 0 0; color: var(--ink-soft); font-size: 18px; }
.introduction { margin-bottom: 44px; }
.proof-part { margin-top: 48px; scroll-margin-top: 24px; }
h2 { margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid var(--line-strong); font-size: 30px; line-height: 1.5; }
.part-intro { margin-bottom: 16px; }
.problem-list { border: 1px solid var(--line); border-radius: 8px; background: var(--paper); }
article { padding: 28px clamp(24px, 3vw, 48px) 32px; scroll-margin-top: 24px; }
article + article { border-top: 1px solid var(--line); }
h3 { margin: 0 0 18px; font-size: 25px; line-height: 1.5; }
.problem-body :deep(h4) { margin: 24px 0 8px; font-family: inherit; font-size: 18px; line-height: 1.5; }
.problem-body :deep(h4:first-child) { margin-top: 0; }
.problem-body :deep(p) { margin: 8px 0 14px; }
.problem-body :deep(.katex-display) { margin: 20px 0; padding: 18px 20px; }
.part-footer { margin: 20px 0 0; color: var(--ink-soft); }
.bottom-link { margin-top: 36px; }
</style>
