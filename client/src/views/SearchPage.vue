<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowUpRight, Search, Star, X } from '@lucide/vue'
import MathHeader from '@/components/MathHeader.vue'
import MathMarkdown from '@/components/MathMarkdown.vue'
import { FAVORITES_CHANGED_EVENT, readFavorites, toggleFavorite } from '@/math/favorites'
import { rememberSearch } from '@/math/recentSearches'
import { highlightMatch, plainMathText, searchMathWithCount } from '@/math/search'
import type { MathSearchResult } from '@/math/types'

const route = useRoute()
const router = useRouter()
const starterQueries = ['曲率圆', '链式法则', '泰勒公式', '相似矩阵']
const searchInput = ref<HTMLInputElement | null>(null)
const query = ref(String(route.query.q ?? '').slice(0, 30))
const visibleCount = ref(8)
const searchState = computed(() => searchMathWithCount(query.value, visibleCount.value))
const results = computed(() => searchState.value.results)
const favoriteIds = ref(new Set<string>())

function refreshFavorites() {
  favoriteIds.value = new Set(readFavorites().map((item) => item.id))
}

onMounted(() => {
  refreshFavorites()
  if (route.query.q) rememberSearch(String(route.query.q))
  window.addEventListener(FAVORITES_CHANGED_EVENT, refreshFavorites)
  window.addEventListener('storage', refreshFavorites)
})

onBeforeUnmount(() => {
  window.removeEventListener(FAVORITES_CHANGED_EVENT, refreshFavorites)
  window.removeEventListener('storage', refreshFavorites)
})

watch(() => route.query.q, (value) => {
  query.value = String(value ?? '').slice(0, 30)
  visibleCount.value = 8
  if (value) rememberSearch(String(value))
})

watch(query, () => { visibleCount.value = 8 })

function submit(value = query.value) {
  const q = value.trim()
  if (!q) return
  query.value = q
  rememberSearch(q)
  router.replace({ name: 'home', query: { q } })
}

function clearSearch() {
  query.value = ''
  router.replace({ name: 'home' })
  searchInput.value?.focus()
}

function toggleResultFavorite(result: MathSearchResult) {
  toggleFavorite({
    id: result.targetId,
    targetId: result.targetId,
    kind: result.kind,
    title: result.title,
    summary: result.kind === 'formula' ? result.formula?.displayContext ?? '' : result.snippet || result.summary,
    latex: result.formula?.latex,
    context: result.formula?.displayContext,
    chapterId: result.chapterId,
    chapterTitle: result.chapterTitle,
    partTitle: result.partTitle,
  })
  refreshFavorites()
}
</script>

<template>
  <div class="search-page">
    <MathHeader hide-search />
    <main id="main-content">
      <section class="intro" aria-labelledby="page-title">
        <h1 id="page-title">公式检索</h1>
        <form class="search-box" role="search" aria-label="公式检索" @submit.prevent="submit()">
          <div class="search-control">
            <Search :size="18" aria-hidden="true" />
            <input ref="searchInput" v-model="query" maxlength="30" autocomplete="off"
              aria-label="搜索知识点、关键词或公式" placeholder="关键词或公式" />
            <button v-if="query" class="clear-search" type="button" aria-label="清空搜索" title="清空搜索" @click="clearSearch">
              <X :size="17" aria-hidden="true" />
            </button>
            <button class="submit-search" type="submit">搜索</button>
          </div>
        </form>
        <div v-if="!query.trim()" class="sample-searches" aria-label="搜索示例">
          <span>试着搜索</span>
          <button v-for="example in starterQueries" :key="example" type="button" @click="submit(example)">{{ example }}</button>
        </div>
      </section>

      <section v-if="query.trim()" class="result-section" aria-labelledby="results-title">
        <div class="result-heading">
          <h2 id="results-title">搜索结果</h2>
          <span role="status">{{ searchState.total }} 条结果<span v-if="searchState.total > results.length"> · 显示 {{ results.length }} 条</span></span>
        </div>

        <div v-if="results.length" class="results">
          <article v-for="result in results" :key="result.resultId" class="result-card">
            <RouterLink
              :to="{ name: 'knowledge', params: { chapterId: result.chapterId }, query: { section: result.targetId, q: query.trim() } }"
              class="result-link"
            >
              <div class="result-path">{{ result.partTitle }} <span aria-hidden="true">/</span> {{ result.chapterTitle }}</div>
              <h3 v-html="highlightMatch(plainMathText(result.title), query)"></h3>
              <MathMarkdown v-if="result.formula" class="result-formula" :source="`\\[${result.formula.latex}\\]`" />
              <MathMarkdown v-if="result.snippet" class="result-context" :source="result.snippet" />
              <span class="result-open">查看原文 <ArrowUpRight :size="14" aria-hidden="true" /></span>
            </RouterLink>
            <button type="button" class="favorite-button"
              :aria-pressed="favoriteIds.has(result.targetId)"
              :aria-label="(result.kind === 'formula' ? '收藏公式：' : '收藏本组：') + plainMathText(result.title)"
              :title="favoriteIds.has(result.targetId) ? '取消收藏' : '收藏'"
              @click="toggleResultFavorite(result)"
            ><Star :size="18" aria-hidden="true" /></button>
          </article>
        </div>
        <button v-if="searchState.total > visibleCount" class="show-more" type="button" @click="visibleCount += 8">查看更多结果</button>
        <div v-if="!results.length" class="empty">
          <h3>暂时没有找到匹配内容</h3>
          <p>试试缩短关键词，或换用公式的另一种写法。</p>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.search-page { min-height: 100vh; background: var(--study-canvas); color: var(--study-ink); }
main { width: min(860px, calc(100% - 48px)); margin: auto; padding: 42px 0 72px; }
h1 {
  margin: 0 0 16px;
  color: var(--study-ink);
  font-family: var(--serif);
  font-size: clamp(28px, 3.8vw, 42px);
  font-weight: 700;
  line-height: 1.3;
}
.search-control {
  display: flex;
  min-height: 56px;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--study-rule);
  border-radius: 9px;
  padding: 4px 4px 4px 14px;
  background: var(--paper);
}
.search-control:focus-within { border-color: var(--study-accent); box-shadow: 0 0 0 3px var(--study-focus); }
.search-control > svg { flex: 0 0 auto; color: var(--study-muted); }
.search-control input {
  min-width: 0;
  min-height: 44px;
  flex: 1;
  border: 0;
  outline: none;
  background: transparent;
  color: var(--study-ink);
  font-size: 16px;
}
.search-control input::placeholder { color: var(--study-muted); }
.search-control button { min-height: 44px; flex-shrink: 0; border-radius: 6px; }
.clear-search { display: grid; width: 44px; place-items: center; color: var(--study-muted); }
.clear-search:hover { background: var(--study-tint); }
.submit-search {
  min-width: 68px;
  padding: 0 14px;
  background: var(--study-accent);
  color: white;
  font-size: 14px;
  font-weight: 650;
}
.submit-search:hover { background: var(--study-accent-hover); }
.sample-searches { display: flex; flex-wrap: wrap; align-items: center; gap: 0 14px; margin-top: 5px; color: var(--study-muted); font-size: 13px; }
.sample-searches button { min-height: 44px; color: var(--study-accent); text-decoration: underline; text-underline-offset: 4px; }
.sample-searches button:hover { color: var(--study-accent-hover); }
.result-section { margin-top: 24px; }
.result-heading { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 2px 12px; padding-bottom: 10px; }
.result-heading h2 { margin: 0; font-size: 18px; font-weight: 700; }
.result-heading > span { color: var(--study-muted); font-size: 12px; font-variant-numeric: tabular-nums; }
.results { border: 1px solid var(--study-rule); border-radius: 10px; background: var(--paper); }
.result-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: start;
  gap: 10px;
  padding: 15px 16px 12px 20px;
}
.result-card + .result-card { border-top: 1px solid var(--study-rule); }
.result-link { display: block; min-width: 0; }
.result-path { color: var(--study-muted); font-size: 12px; }
.result-path span { margin: 0 4px; }
.result-card h3 { margin: 4px 0; color: var(--study-ink); font-size: 18px; font-weight: 700; line-height: 1.45; overflow-wrap: anywhere; }
.result-link:hover h3, .result-link:hover .result-open { color: var(--study-accent); text-decoration: underline; text-underline-offset: 4px; }
.result-formula { margin-top: 8px; }
.result-formula :deep(.katex-display) { margin: 0; padding: 6px 10px; border-inline-start: 2px solid var(--study-rule); border-radius: 0; background: transparent; }
.result-formula :deep(.katex-display > .katex) { text-align: start; }
.result-context { margin-top: 5px; color: var(--study-muted); font-size: 14px; line-height: 1.65; overflow-wrap: anywhere; }
.result-context :deep(p) { margin: 0; }
.result-card :deep(mark) { border-radius: 2px; padding: 0 1px; background: var(--study-tint); color: var(--study-ink); }
.result-open { display: inline-flex; min-height: 32px; align-items: center; gap: 4px; color: var(--study-accent); font-size: 13px; font-weight: 650; }
.favorite-button { display: grid; width: 44px; height: 44px; place-items: center; border-radius: 7px; color: var(--study-muted); }
.favorite-button:hover, .favorite-button[aria-pressed="true"] { background: var(--study-tint); color: var(--study-accent); }
.favorite-button[aria-pressed="true"] :deep(svg) { fill: currentColor; }
.show-more { display: block; min-height: 44px; margin: 16px auto 0; padding: 0 16px; border: 1px solid var(--study-rule); border-radius: 7px; background: var(--paper); color: var(--study-accent); font-weight: 650; }
.show-more:hover { border-color: var(--study-accent); }
.empty { border-block-start: 1px solid var(--study-rule); padding: 18px 0; }
.empty h3 { margin: 0 0 4px; font-size: 18px; font-weight: 650; }
.empty p { margin: 0; color: var(--study-muted); font-size: 14px; }
@media (max-width: 680px) {
  main { width: calc(100% - 32px); padding: 22px 0 46px; }
  h1 { margin-bottom: 12px; }
  .search-control { gap: 6px; padding-inline-start: 10px; }
  .submit-search { min-width: 54px; padding: 0 8px; }
  .result-section { margin-top: 20px; }
  .result-card { gap: 2px; padding: 11px 6px 9px 12px; }
  .result-card h3 { font-size: 16px; }
  .result-formula :deep(.katex-display) { margin-inline: 0; }
  .result-context { font-size: 13px; }
}
</style>
