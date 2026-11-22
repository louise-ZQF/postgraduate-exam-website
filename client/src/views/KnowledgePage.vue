<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, Search, Star } from '@lucide/vue'
import MathHeader from '@/components/MathHeader.vue'
import MathMarkdown, { favoriteIcon } from '@/components/MathMarkdown.vue'
import { legacyAnchorIds, mathChapters } from '@/generated/math2-content'
import { FAVORITES_CHANGED_EVENT, readFavorites, toggleFavorite } from '@/math/favorites'
import { plainMathText } from '@/math/search'
import { rememberSearch } from '@/math/recentSearches'

const route = useRoute()
const router = useRouter()
const chapter = computed(() => mathChapters.find((item) => item.id === route.params.chapterId) ?? mathChapters[0])
const backToSearch = computed(() => ({ name: 'home', query: route.query.q ? { q: String(route.query.q) } : {} }))
const query = ref(String(route.query.q ?? '').slice(0, 30))
const searchToolbar = ref<HTMLElement | null>(null)
const requestedSection = computed(() => {
  const raw = String(route.query.section ?? route.params.topicId ?? '')
  return legacyAnchorIds[raw] ?? raw
})
let highlightedSection: HTMLElement | null = null

watch(() => route.query.q, (value) => { query.value = String(value ?? '').slice(0, 30) })

function submitSearch() {
  const q = query.value.trim()
  if (!q) return
  rememberSearch(q)
  router.push({ name: 'home', query: { q } })
}

function decorateFavoriteButtons() {
  const favoriteIds = new Set(readFavorites().map((item) => item.id))
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
        button.className = 'reading-favorite anchor-favorite-button'
        button.dataset.favoriteId = anchor.id
        button.innerHTML = favoriteIcon
        button.setAttribute('aria-label', '收藏本组：' + plainMathText(anchor.title))
        heading.append(button)
      }
      const active = favoriteIds.has(anchor.id)
      button.title = active ? '取消收藏本组' : '收藏本组'
      button.setAttribute('aria-pressed', String(active))
    })
  }
  document.querySelectorAll<HTMLButtonElement>('.formula-favorite-button').forEach((button) => {
    const formulaId = button.dataset.formulaId
    const active = Boolean(formulaId && favoriteIds.has(formulaId))
    button.title = active ? '取消收藏公式' : '收藏公式'
    button.setAttribute('aria-pressed', String(active))
  })
}

function handleArticleClick(event: MouseEvent) {
  const target = event.target as Element
  const jump = target.closest<HTMLAnchorElement>('.study-subheader a')
  if (jump && route.query.q && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
    const destination = router.resolve(jump.hash.slice(1))
    event.preventDefault()
    router.push({ path: destination.path, query: { ...destination.query, q: route.query.q } })
    return
  }
  const formulaButton = target.closest<HTMLButtonElement>('.formula-favorite-button')
  const formulaId = formulaButton?.dataset.formulaId
  if (formulaId) {
    const formula = chapter.value.topics.flatMap((topic) => topic.formulas).find((item) => item.id === formulaId)
    if (!formula) return
    toggleFavorite({
      id: formula.id, targetId: formula.id, kind: 'formula', title: formula.title,
      summary: formula.displayContext ?? '', context: formula.displayContext ?? '', latex: formula.latex,
      chapterId: chapter.value.id, chapterTitle: chapter.value.title, partTitle: chapter.value.partTitle,
    })
    return
  }
  const button = target.closest<HTMLButtonElement>('.anchor-favorite-button')
  const favoriteId = button?.dataset.favoriteId
  if (!favoriteId) return
  for (const topic of chapter.value.topics) {
    const anchor = topic.anchors.find((item) => item.id === favoriteId)
    if (!anchor) continue
    toggleFavorite({
      id: anchor.id, targetId: anchor.id, kind: 'topic', title: plainMathText(anchor.title),
      summary: anchor.displaySummary ?? '', chapterId: chapter.value.id, chapterTitle: chapter.value.title,
      partTitle: chapter.value.partTitle,
    })
    return
  }
}

function scrollToRequestedSection(smooth = false) {
  highlightedSection?.classList.remove('search-target')
  const target = requestedSection.value ? document.getElementById(requestedSection.value) : null
  highlightedSection = target
  if (target) {
    target.classList.add('search-target')
    const toolbarHeight = searchToolbar.value?.getBoundingClientRect().height ?? 70
    const animate = smooth && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: window.scrollY + target.getBoundingClientRect().top - toolbarHeight - 16, behavior: animate ? 'smooth' : 'instant' })
  }
}

watch([chapter, requestedSection], ([nextChapter], [previousChapter]) => {
  if (route.name !== 'knowledge') return
  if (nextChapter !== previousChapter) decorateFavoriteButtons()
  scrollToRequestedSection(nextChapter === previousChapter)
}, { flush: 'post' })

onMounted(() => {
  decorateFavoriteButtons()
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
      <div ref="searchToolbar" class="reading-search-toolbar">
        <RouterLink class="toolbar-link back-link" :to="backToSearch" aria-label="返回搜索" title="返回搜索">
          <ArrowLeft :size="18" aria-hidden="true" />
          <span>返回搜索</span>
        </RouterLink>
        <form class="reading-search" role="search" aria-label="继续搜索公式与结论" @submit.prevent="submitSearch">
          <input v-model="query" type="search" maxlength="30" aria-label="搜索公式或结论"
            autocomplete="off" placeholder="搜索公式或结论" />
          <button type="submit" aria-label="搜索" title="搜索"><Search :size="18" aria-hidden="true" /></button>
        </form>
        <RouterLink class="toolbar-link" to="/favorites" aria-label="待背公式" title="待背公式">
          <Star :size="18" aria-hidden="true" />
          <span>待背公式</span>
        </RouterLink>
      </div>
      <article @click="handleArticleClick">
        <header class="chapter-header">
          <span>{{ chapter.partTitle }}</span>
          <h1>{{ chapter.title }}</h1>
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
.knowledge-page { min-height: 100vh; background: var(--canvas); }
main { width: min(1040px, calc(100% - 48px)); margin: 0 auto; padding-bottom: 72px; }
.reading-search-toolbar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 0;
  background: var(--canvas);
}
.toolbar-link {
  display: inline-flex;
  min-width: 44px;
  min-height: 44px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border-radius: 9px;
  color: var(--ink-soft);
  font-size: 14px;
  font-weight: 650;
}
.toolbar-link:hover, .toolbar-link:focus-visible { color: var(--accent-dark); }
.reading-search {
  display: flex;
  flex: 1;
  min-width: 0;
  align-items: center;
  border: 1px solid var(--line-strong);
  border-radius: 10px;
  background: var(--paper);
}
.reading-search:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px var(--focus-ring); }
.reading-search input {
  flex: 1;
  min-width: 0;
  min-height: 44px;
  padding: 0 12px;
  border: 0;
  border-radius: inherit;
  outline: none;
  background: transparent;
  color: var(--ink);
  font-size: 16px;
}
.reading-search button {
  display: grid;
  min-width: 44px;
  min-height: 44px;
  place-items: center;
  border-radius: 8px;
  color: var(--accent-dark);
}
.reading-search button:hover { background: var(--accent-tint); }

article {
  min-width: 0;
  padding: clamp(22px, 5vw, 56px);
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--paper);
  box-shadow: var(--shadow-card);
}
.chapter-header { padding-bottom: 24px; border-bottom: 1px solid var(--line); }
.chapter-header span { color: var(--accent-dark); font-size: 14px; font-weight: 650; }
h1 { margin: 5px 0 0; font-family: var(--serif); font-size: clamp(26px, 4vw, 42px); line-height: 1.3; }
.chapter-section { padding: 30px 0 14px; }
.chapter-section + .chapter-section { border-top: 1px solid var(--line); }
.chapter-section > h2 { margin: 0 0 16px; font-family: var(--serif); font-size: clamp(22px, 3vw, 27px); line-height: 1.4; }
.chapter-section :deep(h5[id]) {
  position: relative;
  min-height: 46px;
  padding: 7px 48px 7px 0;
  font-size: clamp(21px, 3vw, 27px);
}
.chapter-section :deep(h5.search-target::before) {
  position: absolute;
  inset: 11px auto 11px -12px;
  width: 3px;
  border-radius: 4px;
  background: var(--accent);
  content: "";
}
.chapter-section :deep(.reading-favorite) {
  display: inline-grid;
  flex: 0 0 auto;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 0;
  border-radius: 9px;
  background: transparent;
  color: var(--muted);
  vertical-align: middle;
}
.chapter-section :deep(.reading-favorite svg) {
  width: 18px;
  height: 18px;
  fill: transparent;
  stroke: currentColor;
  stroke-width: 1.65;
  stroke-linejoin: round;
  pointer-events: none;
}
.chapter-section :deep(.reading-favorite:hover), .chapter-section :deep(.reading-favorite[aria-pressed="true"]) {
  background: var(--accent-tint);
  color: var(--accent-dark);
}
.chapter-section :deep(.reading-favorite[aria-pressed="true"] svg) { fill: currentColor; }
.chapter-section :deep(.anchor-favorite-button) {
  position: absolute;
  inset: 50% 0 auto auto;
  transform: translateY(-50%);
}
.bottom-back {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  margin-top: 12px;
  color: var(--accent-dark);
  font-size: 14px;
  font-weight: 650;
}

/* 两列速查在小屏按「考点、结论」顺序逐项阅读。 */
.chapter-section :deep(.study-subheader) {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 4px 12px;
}
.chapter-section :deep(.study-subheader h6) {
  margin: 0;
  font-size: 17px;
  font-weight: 700;
}
.chapter-section :deep(.study-subheader a) {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 650;
}
.chapter-section :deep(.study-subheader a:hover) { text-decoration: underline; text-underline-offset: 4px; }
.chapter-section :deep(.study-reference) {
  margin-top: 18px;
  padding: 2px clamp(12px, 2.6vw, 24px) 8px;
  border: 1px solid var(--line);
  border-radius: 12px;
}
.chapter-section :deep(.study-reference table) {
  display: table;
  width: 100%;
  margin: 0;
  table-layout: fixed;
  white-space: normal;
}
.chapter-section :deep(.study-reference th), .chapter-section :deep(.study-reference td) {
  padding: 10px;
  border: 0;
  text-align: start;
  vertical-align: middle;
}
.chapter-section :deep(.study-reference thead th) {
  background: var(--surface-soft);
  color: var(--ink-soft);
  font-size: 13px;
  font-weight: 650;
}
.chapter-section :deep(.study-reference th:first-child) { width: 26%; }
.chapter-section :deep(.study-reference tbody th) { background: transparent; font-weight: 650; }
.chapter-section :deep(.study-reference tbody tr + tr) { border-top: 1px solid var(--line); }
.chapter-section :deep(.study-reference td:has(.inline-formula)) {
  position: relative;
  padding-inline-end: 48px;
}
.chapter-section :deep(.study-reference td .inline-formula) { display: inline; vertical-align: baseline; }
.chapter-section :deep(.study-reference .formula-favorite-button) {
  position: absolute;
  inset: 50% 0 auto auto;
  transform: translateY(-50%);
}
.chapter-section :deep(.study-reference td:has(.search-target)) { background: var(--accent-tint); }

/* 把等式留在各自的步骤里，让视线连续跟随解法。 */
.chapter-section :deep(.study-example) {
  margin-top: clamp(30px, 5vw, 56px);
  padding-top: 16px;
  border-top: 1px solid var(--line);
}
.chapter-section :deep(.study-example h5) { margin: 0; }
.chapter-section :deep(.worked-step) {
  margin-top: 16px;
  padding: 12px clamp(10px, 2vw, 20px);
  border-inline-start: 2px solid var(--line-strong);
}
.chapter-section :deep(.worked-step h6) {
  margin: 0 0 10px;
  color: var(--accent-dark);
  font-size: 17px;
  line-height: 1.55;
  font-weight: 700;
}
.chapter-section :deep(.worked-step > :last-child) { margin-bottom: 0; }
.chapter-section :deep(.worked-step .formula-unit:not(.search-target)) {
  border-color: transparent;
  background: transparent;
}
.chapter-section :deep(.worked-step .katex-display > .katex) { text-align: start; }
.chapter-section :deep(.study-example blockquote) {
  border: 0;
  border-radius: 8px;
  background: var(--surface-soft);
}

@media (max-width: 640px) {
  main { width: calc(100% - 20px); padding-bottom: 36px; }
  article { padding: 16px; border-radius: 12px; }
  .reading-search-toolbar { gap: 4px; padding: 6px 0; }
  .toolbar-link span { display: none; }
  .chapter-section { padding-top: 22px; }
  .chapter-section :deep(.study-reference table), .chapter-section :deep(.study-reference tbody) {
    display: block;
  }
  .chapter-section :deep(.study-reference thead) {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
  .chapter-section :deep(.study-reference tbody tr) {
    position: relative;
    display: grid;
    gap: 4px;
    padding: 9px 0;
  }
  .chapter-section :deep(.study-reference tbody th:first-child) {
    width: auto;
    padding: 0 48px 0 0;
    color: var(--ink-soft);
    font-size: 13px;
  }
  .chapter-section :deep(.study-reference td), .chapter-section :deep(.study-reference td:has(.inline-formula)) {
    position: static;
    display: block;
    padding: 0;
    font-size: 16px;
  }
  .chapter-section :deep(.study-reference tr:has(.formula-favorite-button) td) { padding-inline-end: 44px; }
  .chapter-section :deep(.study-reference .formula-favorite-button) {
    inset: 3px 0 auto auto;
    transform: none;
  }
  .chapter-section :deep(.study-reference .formula-unit-math) {
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
  }
}
</style>
