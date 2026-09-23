<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MathHeader from '@/components/MathHeader.vue'
import { FAVORITES_CHANGED_EVENT, readFavorites, toggleFavorite } from '@/math/favorites'
import { rememberSearch } from '@/math/recentSearches'
import { highlightMatch, plainMathText, searchMath } from '@/math/search'
import type { MathSearchResult } from '@/math/types'

const route = useRoute()
const router = useRouter()
const query = ref(String(route.query.q ?? '').slice(0, 30))
const results = computed(() => searchMath(query.value))
const favoriteIds = ref(new Set<string>())

function storeQuery(value: unknown) {
  const q = String(value ?? '').trim().slice(0, 30)
  if (q) rememberSearch(q)
}

function refreshFavorites() {
  favoriteIds.value = new Set(readFavorites().map((item) => item.id))
}

onMounted(() => {
  refreshFavorites()
  storeQuery(route.query.q)
  window.addEventListener(FAVORITES_CHANGED_EVENT, refreshFavorites)
  window.addEventListener('storage', refreshFavorites)
})

onBeforeUnmount(() => {
  window.removeEventListener(FAVORITES_CHANGED_EVENT, refreshFavorites)
  window.removeEventListener('storage', refreshFavorites)
})

watch(() => route.query.q, (value) => {
  query.value = String(value ?? '').slice(0, 30)
  storeQuery(value)
})

function submit() {
  const q = query.value.trim()
  if (q) {
    rememberSearch(q)
    router.replace({ name: 'search', query: { q } })
  }
}

function toggleResultFavorite(result: MathSearchResult) {
  toggleFavorite({
    id: result.targetId,
    title: plainMathText(result.title),
    summary: result.snippet || result.summary,
    chapterId: result.chapterId,
    chapterTitle: result.chapterTitle,
    partTitle: result.partTitle,
  })
  refreshFavorites()
}
</script>

<template>
  <div class="search-page">
    <MathHeader :key="String(route.query.q ?? '')" :initial-query="String(route.query.q ?? '')" />
    <main>
      <div class="search-intro">
        <span>FULL-TEXT SEARCH</span>
        <h1>全文搜索</h1>
        <p>同时检索知识点名称、公式名、判定条件与正文。</p>
      </div>
      <form class="search-box" @submit.prevent="submit">
        <input v-model="query" maxlength="30" autofocus placeholder="例如：相似对角化判断" aria-label="搜索关键词" />
        <button type="submit">搜索</button>
      </form>

      <div v-if="query.trim()" class="result-meta">为“<b>{{ query }}</b>”找到 <strong>{{ results.length }}</strong> 条相关内容</div>
      <section v-if="results.length" class="results">
        <article
          v-for="result in results"
          :key="result.resultId"
          class="result-card"
        >
          <RouterLink
            :to="{ name: 'knowledge', params: { chapterId: result.chapterId }, query: { section: result.targetId } }"
            class="result-link"
          >
            <div class="result-path">{{ result.partTitle }} <span>/</span> {{ result.chapterTitle }}</div>
            <h2 v-html="highlightMatch(plainMathText(result.title), query)"></h2>
            <p v-html="highlightMatch(result.snippet, query)"></p>
            <span class="open">↗</span>
          </RouterLink>
          <button
            type="button"
            class="favorite-button"
            :class="{ active: favoriteIds.has(result.targetId) }"
            :aria-label="(favoriteIds.has(result.targetId) ? '取消收藏：' : '收藏：') + plainMathText(result.title)"
            @click="toggleResultFavorite(result)"
          >{{ favoriteIds.has(result.targetId) ? '★ 已收藏' : '☆ 收藏' }}</button>
        </article>
      </section>
      <section v-else-if="query.trim()" class="empty">
        <div>∅</div><h2>没有找到相关内容</h2><p>试试缩短关键词，或搜索公式的中文名称。</p>
      </section>
      <section v-else class="empty"><div>⌕</div><h2>输入一个知识点</h2><p>例如“求导公式一览”“同解判定”或“正定二次型”。</p></section>
    </main>
  </div>
</template>

<style scoped>
.search-page { min-height: 100vh; background: transparent; color: #18261e; }
main { width: min(980px, calc(100% - 36px)); margin: 0 auto; padding: 62px 0 104px; }
.search-intro > span { color: #9b6426; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 10px; font-weight: 800; letter-spacing: .18em; }.search-intro h1 { margin: 8px 0 7px; color: #112a1e; font-family: ui-serif, "Songti SC", STSong, serif; font-size: 42px; letter-spacing: -.025em; }.search-intro p { margin: 0; color: #6e8176; }
.search-box { display: flex; height: 64px; margin: 30px 0 20px; border: 1px solid #c9d8d0; border-radius: 16px; padding: 7px; background: rgba(255,255,255,.97); box-shadow: 0 18px 46px rgba(30,67,48,.1); transition: .2s ease; }.search-box:focus-within { border-color: #3d7c5e; box-shadow: 0 0 0 5px rgba(45,116,84,.1), 0 20px 50px rgba(30,67,48,.12); }.search-box input { min-width: 0; flex: 1; border: 0; outline: 0; padding: 0 18px; background: transparent; color: #183326; font-size: 16px; }.search-box input::placeholder { color: #90a097; }.search-box button { border: 0; border-radius: 11px; padding: 0 30px; background: linear-gradient(135deg, #2e7555, #1c563e); color: white; box-shadow: 0 7px 16px rgba(31,90,64,.2); font-weight: 750; }
.result-meta { margin: 28px 2px 14px; color: #73867b; font-size: 13px; }.result-meta b, .result-meta strong { color: #20593f; }
.results { display: grid; gap: 12px; }.result-card { position: relative; overflow: hidden; border: 1px solid #d7e2dc; border-radius: 14px; background: rgba(255,255,255,.95); box-shadow: 0 5px 18px rgba(30,67,48,.035); transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease; }.result-card::before { position: absolute; top: 0; bottom: 0; left: 0; width: 4px; content: ''; background: #a8c1b2; transition: background-color .18s ease; }.result-card:hover { transform: translateY(-2px); border-color: #9eb9a9; box-shadow: 0 14px 32px rgba(30,67,48,.085); }.result-card:hover::before { background: #397b5b; }.result-link { display: block; padding: 21px 136px 21px 25px; }.result-path { color: #7a8d82; font-size: 11px; font-weight: 600; }.result-path span { margin: 0 6px; color: #b6c3bc; }.result-card h2 { margin: 8px 0 7px; color: #173729; font-size: 19px; line-height: 1.45; }.result-card p { margin: 0; color: #5f7368; font-size: 13px; line-height: 1.75; }.result-card :deep(mark) { border-radius: 4px; padding: 1px 3px; background: #ffebb9; color: #654419; box-shadow: inset 0 -1px 0 #e7c16f; }.open { position: absolute; top: 50%; right: 108px; transform: translateY(-50%); color: #668875; font-size: 17px; }
.favorite-button { position: absolute; top: 50%; right: 17px; transform: translateY(-50%); border: 1px solid #d2dfd7; border-radius: 999px; padding: 7px 10px; background: #f6f9f7; color: #5d7066; cursor: pointer; font-size: 11px; font-weight: 650; white-space: nowrap; transition: .18s ease; }.favorite-button:hover, .favorite-button.active { border-color: #d0a45e; background: #fff4dd; color: #8c571c; }
.empty { margin-top: 26px; border: 1px dashed #cfdcd4; border-radius: 18px; padding: 84px 20px; background: rgba(255,255,255,.46); text-align: center; color: #7c8d84; }.empty div { color: #8fa89a; font-family: ui-serif, serif; font-size: 42px; }.empty h2 { margin: 11px 0 8px; color: #455e51; font-size: 19px; }.empty p { margin: 0; font-size: 13px; }
@media (max-width: 600px) { main { padding-top: 42px; }.search-intro h1 { font-size: 35px; }.search-box { height: 58px; }.search-box button { padding: 0 21px; }.result-link { padding: 19px 17px 62px 22px; }.result-card p { display: -webkit-box; overflow: hidden; -webkit-line-clamp: 3; -webkit-box-orient: vertical; }.open { display: none; }.favorite-button { top: auto; right: 14px; bottom: 13px; transform: none; } }
</style>
