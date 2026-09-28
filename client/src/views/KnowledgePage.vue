<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MathHeader from '@/components/MathHeader.vue'
import MathMarkdown from '@/components/MathMarkdown.vue'
import { legacyAnchorIds, mathChapters } from '@/generated/math2-content'
import { FAVORITES_CHANGED_EVENT, readFavorites, toggleFavorite } from '@/math/favorites'
import { plainMathText } from '@/math/search'

const route = useRoute()
const router = useRouter()
const chapter = computed(() => mathChapters.find((item) => item.id === route.params.chapterId) ?? mathChapters[0])
const backToSearch = computed(() => ({ name: 'home', query: route.query.q ? { q: String(route.query.q) } : {} }))

function decorateFavoriteButtons() {
  const favoriteIds = new Set(readFavorites().map((item) => item.id))
  const formulasById = new Map(chapter.value.topics.flatMap((topic) => topic.formulas).map((item) => [item.id, item]))
  for (const topic of chapter.value.topics) {
    const section = document.getElementById(topic.id)
    const headings = section?.querySelectorAll<HTMLElement>('.math-markdown h5') ?? []
    topic.anchors.forEach((anchor, index) => {
      const heading = headings[index]
      if (!heading) return
      heading.id = anchor.id
      let button = heading.querySelector<HTMLButtonElement>('.anchor-favorite-button')
      if (!button) {
        button = document.createElement('button')
        button.type = 'button'
        button.className = 'anchor-favorite-button'
        button.dataset.favoriteId = anchor.id
        heading.append(button)
      }
      const active = favoriteIds.has(anchor.id)
      button.classList.toggle('active', active)
      button.textContent = active ? '★ 已收藏本组' : '☆ 收藏本组'
      button.setAttribute('aria-label', (active ? '取消收藏本组：' : '收藏本组：') + plainMathText(anchor.title))
      button.setAttribute('aria-pressed', String(active))
    })
  }
  document.querySelectorAll<HTMLButtonElement>('.formula-favorite-button').forEach((button) => {
    const formulaId = button.dataset.formulaId
    const active = Boolean(formulaId && favoriteIds.has(formulaId))
    button.classList.toggle('active', active)
    button.textContent = active ? '★ 已收藏此公式' : '☆ 收藏此公式'
    button.setAttribute('aria-pressed', String(active))
    const formula = formulasById.get(formulaId ?? '')
    if (formula) button.setAttribute('aria-label', `${active ? '取消收藏此公式' : '收藏此公式'}：${formula.title}`)
  })
}

function handleArticleClick(event: MouseEvent) {
  const formulaButton = (event.target as HTMLElement).closest<HTMLButtonElement>('.formula-favorite-button')
  const formulaId = formulaButton?.dataset.formulaId
  if (formulaId) {
    const formula = chapter.value.topics.flatMap((topic) => topic.formulas).find((item) => item.id === formulaId)
    if (!formula) return
    toggleFavorite({
      id: formula.id, targetId: formula.id, kind: 'formula', title: formula.title,
      summary: formula.context, context: formula.context, latex: formula.latex,
      chapterId: chapter.value.id, chapterTitle: chapter.value.title, partTitle: chapter.value.partTitle,
    })
    decorateFavoriteButtons()
    return
  }
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>('.anchor-favorite-button')
  const favoriteId = button?.dataset.favoriteId
  if (!favoriteId) return
  for (const topic of chapter.value.topics) {
    const anchor = topic.anchors.find((item) => item.id === favoriteId)
    if (!anchor) continue
    toggleFavorite({
      id: anchor.id, targetId: anchor.id, kind: 'topic', title: plainMathText(anchor.title),
      summary: anchor.summary, chapterId: chapter.value.id, chapterTitle: chapter.value.title,
      partTitle: chapter.value.partTitle,
    })
    decorateFavoriteButtons()
    return
  }
}

async function scrollToRequestedSection() {
  await nextTick()
  await document.fonts.ready
  await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())))
  decorateFavoriteButtons()
  document.querySelectorAll('.search-target').forEach((item) => item.classList.remove('search-target'))
  const rawRequested = String(route.query.section ?? route.params.topicId ?? '')
  const requested = legacyAnchorIds[rawRequested] ?? rawRequested
  if (!requested) {
    window.scrollTo({ top: 0, behavior: 'auto' })
    return
  }
  const target = document.getElementById(requested)
  if (target) {
    target.classList.add('search-target')
    window.scrollTo({ top: window.scrollY + target.getBoundingClientRect().top - 70, behavior: 'auto' })
  }
}

watch(() => route.fullPath, scrollToRequestedSection, { flush: 'post' })

onMounted(() => {
  scrollToRequestedSection()
  window.addEventListener(FAVORITES_CHANGED_EVENT, decorateFavoriteButtons)
  window.addEventListener('storage', decorateFavoriteButtons)
})

onBeforeUnmount(() => {
  window.removeEventListener(FAVORITES_CHANGED_EVENT, decorateFavoriteButtons)
  window.removeEventListener('storage', decorateFavoriteButtons)
})

if (!route.params.chapterId) {
  const firstChapter = mathChapters[0]
  if (firstChapter) router.replace(`/knowledge/${firstChapter.id}`)
}
</script>

<template>
  <div class="knowledge-page">
    <MathHeader hide-search />
    <main v-if="chapter">
      <RouterLink class="back-link" :to="backToSearch">← 返回搜索</RouterLink>
      <article @click="handleArticleClick">
        <header class="chapter-header">
          <span>{{ chapter.partTitle }}</span>
          <h1>{{ chapter.title }}</h1>
          <p>公式旁可单独收藏；从搜索结果进入时，会直接定位到对应公式。</p>
        </header>
        <section v-for="item in chapter.topics" :id="item.id" :key="item.id" class="chapter-section">
          <h2><MathMarkdown :source="item.title" inline /></h2>
          <MathMarkdown :source="item.body" :formulas="item.formulas" />
        </section>
      </article>
      <RouterLink class="back-link bottom-back" :to="backToSearch">← 返回搜索</RouterLink>
    </main>
  </div>
</template>

<style scoped>
.knowledge-page { min-height: 100vh; }
main { width: min(840px, calc(100% - 48px)); margin: 0 auto; padding: 28px 0 88px; }
.back-link { position: sticky; top: 0; z-index: 10; display: inline-flex; align-items: center; min-height: 48px; margin-bottom: 13px; border: 1px solid var(--line); border-radius: 6px; padding: 0 15px; background: var(--paper); color: var(--accent-dark); font-size: 14px; font-weight: 700; }
.back-link:hover { text-decoration: underline; text-underline-offset: 4px; }
article { min-width: 0; border: 1px solid var(--line); border-radius: 10px; padding: 48px clamp(26px, 6vw, 64px) 64px; background: var(--paper); }
.chapter-header { border-bottom: 1px solid var(--line); padding-bottom: 32px; }
.chapter-header span { color: var(--accent-dark); font-size: 13px; font-weight: 700; }
h1 { margin: 10px 0 12px; font-family: var(--serif); font-size: clamp(34px, 4vw, 46px); line-height: 1.3; }
.chapter-header p { margin: 0; color: var(--muted); font-size: 14px; }
.chapter-section { scroll-margin-top: 24px; padding: 36px 0 12px; }
.chapter-section + .chapter-section { border-top: 1px solid var(--line); }
.chapter-section > h2 { margin: 0 0 18px; font-family: var(--serif); font-size: 27px; line-height: 1.45; }
.chapter-section :deep(h5[id]) { scroll-margin-top: 24px; border-radius: 4px; }
.chapter-section :deep(h5.search-target), .chapter-section :deep(.formula-unit.search-target) { background: #fff2df; outline: 2px solid #e2aa79; outline-offset: 5px; }
.chapter-section :deep(.anchor-favorite-button) { float: right; min-height: 44px; margin: -4px 0 4px 14px; border: 1px solid var(--line-strong); border-radius: 6px; padding: 0 10px; background: var(--paper); color: var(--ink-soft); font-family: system-ui, sans-serif; font-size: 12px; font-weight: 600; }
.chapter-section :deep(.anchor-favorite-button:hover), .chapter-section :deep(.anchor-favorite-button.active) { border-color: var(--accent); background: var(--accent-tint); color: var(--accent-dark); }
.bottom-back { position: static; margin: 18px 0 0; }
@media (max-width: 700px) {
  main { width: calc(100% - 28px); padding-top: 14px; }
  article { padding: 28px 19px 40px; }
  .chapter-section { padding-top: 28px; }
  .chapter-section > h2 { font-size: 23px; }
  .chapter-section :deep(.anchor-favorite-button) { float: none; display: block; margin: 10px 0 0; }
}
</style>
