<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MathHeader from '@/components/MathHeader.vue'
import MathMarkdown from '@/components/MathMarkdown.vue'
import { FAVORITES_CHANGED_EVENT, readFavorites, toggleFavorite } from '@/math/favorites'
import { rememberSearch } from '@/math/recentSearches'
import { highlightMatch, plainMathText, searchMathWithCount } from '@/math/search'
import type { MathSearchResult } from '@/math/types'

const route = useRoute()
const router = useRouter()
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

function submit() {
  const q = query.value.trim()
  if (!q) return
  rememberSearch(q)
  router.replace({ name: 'home', query: { q } })
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
        <h1 id="page-title">数学二公式知识库</h1>
        <p>输入知识点、题目里的关键词或公式写法，直接看到结论、适用条件和原文位置。</p>
        <form class="search-box" role="search" @submit.prevent="submit">
          <label for="main-search">搜索公式与结论</label>
          <div class="search-control">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/></svg>
            <input id="main-search" v-model="query" maxlength="30" autofocus autocomplete="off"
              placeholder="例如：凹凸性、正定判定、f''(x)>0" />
            <button type="submit">搜索</button>
          </div>
        </form>
      </section>

      <section class="result-section" aria-labelledby="results-title">
        <div class="result-heading">
          <h2 id="results-title">搜索结果</h2>
          <span v-if="query.trim()" role="status">{{ searchState.total }} 条相关内容<span v-if="searchState.total > results.length"> · 当前显示 {{ results.length }} 条</span></span>
          <span v-else>输入关键词后，即可从这里直达公式</span>
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
              <span class="result-open">查看原文 <span aria-hidden="true">↗</span></span>
            </RouterLink>
            <button type="button" class="favorite-button" :class="{ active: favoriteIds.has(result.targetId) }"
              :aria-pressed="favoriteIds.has(result.targetId)"
              :aria-label="(favoriteIds.has(result.targetId) ? '取消收藏：' : result.kind === 'formula' ? '收藏此公式：' : '收藏本组：') + plainMathText(result.title)"
              @click="toggleResultFavorite(result)"
            >{{ favoriteIds.has(result.targetId) ? '★ 已收藏' : result.kind === 'formula' ? '☆ 收藏此公式' : '☆ 收藏本组' }}</button>
          </article>
        </div>
        <button v-if="searchState.total > visibleCount" class="show-more" type="button" @click="visibleCount += 8">查看更多结果</button>
        <div v-if="!results.length && query.trim()" class="empty">
          <h3>暂时没有找到匹配内容</h3>
          <p>试试缩短关键词，或换用公式的另一种写法。</p>
        </div>
        <div v-if="!query.trim()" class="empty quiet">
          <h3>从一个线索开始</h3>
          <p>比如“相似矩阵”“形心”，或者直接输入 <code>f''(x)&gt;0</code>。</p>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.search-page { min-height: 100vh; }
main { width: min(1120px, calc(100% - 48px)); margin: 0 auto; padding: 64px 0 104px; }
.intro { max-width: 1000px; }
h1 { margin: 0; color: var(--ink); font-family: var(--serif); font-size: clamp(42px, 5.8vw, 76px); font-weight: 700; letter-spacing: -.035em; line-height: 1.28; }
.intro > p { max-width: 780px; margin: 22px 0 0; color: var(--ink-soft); font-size: clamp(16px, 1.6vw, 19px); line-height: 1.8; }
.search-box { max-width: 920px; margin-top: 42px; }
.search-box label { display: block; margin-bottom: 11px; color: var(--accent-dark); font-size: 13px; font-weight: 700; letter-spacing: .04em; }
.search-control { display: flex; align-items: center; min-height: 72px; border: 1px solid var(--line-strong); border-radius: 10px; padding: 7px 7px 7px 21px; background: var(--paper); box-shadow: 0 2px 0 rgba(74, 54, 32, .07); }
.search-control:focus-within { border-color: var(--accent); outline: 3px solid var(--focus-ring); }
.search-control svg { width: 23px; flex: 0 0 auto; fill: none; stroke: var(--muted); stroke-width: 1.8; }
.search-control input { min-width: 0; flex: 1; border: 0; outline: none; padding: 0 18px; background: transparent; color: var(--ink); font-size: 17px; }
.search-control input::placeholder { color: #8a8379; }
.search-control button { align-self: stretch; min-width: 104px; border: 0; border-radius: 6px; background: var(--accent); color: white; font-size: 16px; font-weight: 700; }
.search-control button:hover { background: var(--accent-dark); }
.result-section { margin-top: 66px; }
.result-heading { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; border-bottom: 1px solid var(--line-strong); padding-bottom: 15px; }
.result-heading h2 { margin: 0; font-family: var(--serif); font-size: 28px; line-height: 1.4; }
.result-heading > span { color: var(--muted); font-size: 13px; }
.results { margin-top: 20px; border: 1px solid var(--line); border-radius: 10px; background: var(--paper); }
.result-card { position: relative; padding: 23px 26px 20px; }
.result-card + .result-card { border-top: 1px solid var(--line); }
.result-link { display: block; max-width: 920px; }
.result-path { color: var(--muted); font-size: 12px; }
.result-path span { margin: 0 5px; color: #aa9e90; }
.result-card h3 { margin: 8px 0 4px; color: var(--ink); font-family: var(--serif); font-size: 23px; font-weight: 700; line-height: 1.5; }
.result-link:hover h3, .result-link:hover .result-open { color: var(--accent-dark); }
.result-formula { max-width: 780px; margin: 12px 0; color: var(--ink); }
.result-formula :deep(.katex-display) { margin: 0; border: 0; border-radius: 6px; padding: 13px 16px; background: #f8f5f0; text-align: left; }
.result-context { max-width: 780px; margin: 9px 0 0; color: var(--ink-soft); font-size: 14px; line-height: 1.7; }
.result-context :deep(p) { margin: 0; }
.result-card :deep(mark) { border-radius: 2px; padding: 0 2px; background: #f5decb; color: var(--ink); }
.result-open { display: inline-flex; align-items: center; min-height: 36px; margin-top: 10px; color: var(--accent-dark); font-size: 13px; font-weight: 700; }
.result-open span { margin-left: 6px; }
.favorite-button { min-height: 44px; border: 1px solid var(--line-strong); border-radius: 6px; padding: 0 13px; background: var(--paper); color: var(--ink-soft); font-size: 13px; font-weight: 650; }
.favorite-button:hover, .favorite-button.active { border-color: var(--accent); background: var(--accent-tint); color: var(--accent-dark); }
.show-more { display: block; min-height: 44px; margin: 20px auto 0; border: 1px solid var(--line-strong); border-radius: 6px; padding: 0 22px; background: var(--paper); color: var(--accent-dark); font-weight: 700; }
.show-more:hover { border-color: var(--accent); }
.empty { margin-top: 20px; border: 1px solid var(--line); border-radius: 10px; padding: 32px; background: var(--paper); }
.empty h3 { margin: 0 0 6px; font-family: var(--serif); font-size: 20px; }
.empty p { margin: 0; color: var(--muted); font-size: 14px; }
.empty code { color: var(--accent-dark); }
@media (max-width: 700px) {
  main { width: calc(100% - 32px); padding: 42px 0 72px; }
  h1 { font-size: clamp(35px, 9vw, 52px); }
  .intro > p { margin-top: 16px; font-size: 16px; }
  .search-box { margin-top: 28px; }
  .search-control { min-height: 62px; padding-left: 13px; }
  .search-control svg { width: 19px; }
  .search-control input { padding: 0 9px; font-size: 16px; }
  .search-control button { min-width: 69px; font-size: 14px; }
  .result-section { margin-top: 44px; }
  .result-heading { align-items: flex-start; flex-direction: column; gap: 2px; }
  .result-heading h2 { font-size: 24px; }
  .result-card { padding: 18px 16px; }
  .result-card h3 { font-size: 20px; }
  .result-formula :deep(.katex-display) { padding: 12px 8px; }
  .empty { padding: 24px 18px; }
}
</style>
