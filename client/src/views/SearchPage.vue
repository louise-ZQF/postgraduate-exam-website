<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MathHeader from '@/components/MathHeader.vue'
import { highlightMatch, searchMath } from '@/math/search'

const route = useRoute()
const router = useRouter()
const query = ref(String(route.query.q ?? '').slice(0, 30))
const results = computed(() => searchMath(query.value))

watch(() => route.query.q, (value) => { query.value = String(value ?? '').slice(0, 30) })
function submit() {
  const q = query.value.trim()
  if (q) router.replace({ name: 'search', query: { q } })
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
        <RouterLink
          v-for="result in results"
          :key="result.id"
          :to="{ name: 'knowledge', params: { chapterId: result.chapterId }, query: { section: result.id } }"
          class="result-card"
        >
          <div class="result-path">{{ result.partTitle }} <span>/</span> {{ result.chapterTitle }}</div>
          <h2 v-html="highlightMatch(result.title, query)"></h2>
          <p v-html="highlightMatch(result.snippet, query)"></p>
          <span class="open">↗</span>
        </RouterLink>
      </section>
      <section v-else-if="query.trim()" class="empty">
        <div>∅</div><h2>没有找到相关内容</h2><p>试试缩短关键词，或搜索公式的中文名称。</p>
      </section>
      <section v-else class="empty"><div>⌕</div><h2>输入一个知识点</h2><p>例如“求导公式一览”“同解判定”或“正定二次型”。</p></section>
    </main>
  </div>
</template>

<style scoped>
.search-page { min-height: 100vh; background: #f8faf6; color: #18261e; }
main { width: min(940px, calc(100% - 36px)); margin: 0 auto; padding: 70px 0 100px; }
.search-intro > span { color: #a06f39; font-family: Manrope, sans-serif; font-size: 10px; font-weight: 800; letter-spacing: .2em; }.search-intro h1 { margin: 8px 0 7px; font-family: "Noto Serif SC", "Songti SC", serif; font-size: 40px; }.search-intro p { margin: 0; color: #748178; }
.search-box { display: flex; height: 58px; margin: 32px 0 20px; border: 1px solid #ccd8ce; border-radius: 10px; padding: 6px; background: white; box-shadow: 0 12px 32px rgba(44,72,55,.07); }.search-box input { min-width: 0; flex: 1; border: 0; outline: 0; padding: 0 16px; background: transparent; font-size: 16px; }.search-box button { border: 0; border-radius: 7px; padding: 0 27px; background: #2b6045; color: white; font-weight: 700; }
.result-meta { margin: 25px 0 14px; color: #7b887f; font-size: 13px; }.result-meta b, .result-meta strong { color: #295c42; }
.results { display: grid; gap: 10px; }.result-card { position: relative; display: block; border: 1px solid #dce5dd; border-radius: 9px; padding: 20px 58px 20px 22px; background: white; transition: .18s ease; }.result-card:hover { transform: translateY(-1px); border-color: #abc0b0; box-shadow: 0 9px 22px rgba(45,72,56,.06); }.result-path { color: #809086; font-size: 11px; }.result-path span { margin: 0 5px; color: #bdc7c0; }.result-card h2 { margin: 7px 0; font-size: 18px; }.result-card p { margin: 0; color: #65746b; font-size: 13px; line-height: 1.75; }.result-card :deep(mark) { border-radius: 2px; padding: 0 2px; background: #f7e4b8; color: #593d1c; }.open { position: absolute; top: 50%; right: 24px; transform: translateY(-50%); color: #6b8d78; }
.empty { padding: 95px 20px; text-align: center; color: #849088; }.empty div { color: #99ad9f; font-family: serif; font-size: 40px; }.empty h2 { margin: 11px 0 8px; color: #526158; font-size: 18px; }.empty p { margin: 0; font-size: 13px; }
@media (max-width: 580px) { main { padding-top: 45px; }.search-intro h1 { font-size: 34px; }.result-card { padding-left: 17px; }.result-card p { display: -webkit-box; overflow: hidden; -webkit-line-clamp: 3; -webkit-box-orient: vertical; } }
</style>
