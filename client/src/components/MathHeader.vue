<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { FAVORITES_CHANGED_EVENT, readFavorites } from '@/math/favorites'
import { clearRecentSearches, readRecentSearches, rememberSearch } from '@/math/recentSearches'
import BrandLogo from './BrandLogo.vue'

const props = defineProps<{ initialQuery?: string }>()
const router = useRouter()
const query = ref(props.initialQuery ?? '')
const historyOpen = ref(false)
const recentSearches = ref<string[]>([])
const favoriteCount = ref(0)
let closeTimer: number | undefined

function refreshFavorites() {
  favoriteCount.value = readFavorites().length
}

function submit() {
  const q = query.value.trim().slice(0, 30)
  if (!q) return
  recentSearches.value = rememberSearch(q)
  historyOpen.value = false
  router.push({ name: 'search', query: { q } })
}

function openHistory() {
  if (closeTimer) window.clearTimeout(closeTimer)
  recentSearches.value = readRecentSearches()
  historyOpen.value = true
}

function scheduleCloseHistory() {
  closeTimer = window.setTimeout(() => {
    historyOpen.value = false
  }, 120)
}

function useRecentSearch(value: string) {
  if (closeTimer) window.clearTimeout(closeTimer)
  query.value = value
  recentSearches.value = rememberSearch(value)
  historyOpen.value = false
  router.push({ name: 'search', query: { q: value } })
}

function clearHistory() {
  clearRecentSearches()
  recentSearches.value = []
}

onMounted(() => {
  recentSearches.value = readRecentSearches()
  refreshFavorites()
  window.addEventListener(FAVORITES_CHANGED_EVENT, refreshFavorites)
  window.addEventListener('storage', refreshFavorites)
})

onBeforeUnmount(() => {
  if (closeTimer) window.clearTimeout(closeTimer)
  window.removeEventListener(FAVORITES_CHANGED_EVENT, refreshFavorites)
  window.removeEventListener('storage', refreshFavorites)
})
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <BrandLogo />
      <div class="header-search-wrap">
        <form class="header-search" role="search" @submit.prevent="submit">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/></svg>
          <input
            v-model="query"
            maxlength="30"
            aria-label="搜索数学知识点"
            placeholder="搜索公式、结论或题型"
            @focus="openHistory"
            @blur="scheduleCloseHistory"
            @keydown.esc="historyOpen = false"
          />
        </form>
        <section v-if="historyOpen && recentSearches.length" class="search-history" aria-label="最近搜索">
          <div class="history-heading"><span>最近搜索</span><button type="button" @mousedown.prevent @click="clearHistory">清空</button></div>
          <button
            v-for="item in recentSearches"
            :key="item"
            class="history-item"
            type="button"
            @mousedown.prevent
            @click="useRecentSearch(item)"
          ><span aria-hidden="true">↺</span>{{ item }}</button>
        </section>
      </div>
      <nav aria-label="主导航">
        <RouterLink to="/knowledge">知识目录</RouterLink>
        <RouterLink to="/search">全文搜索</RouterLink>
        <RouterLink to="/favorites">待背收藏<span v-if="favoriteCount" class="favorite-count">{{ favoriteCount }}</span></RouterLink>
        <a href="https://github.com/louise-ZQF/postgraduate-exam-website" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header { position: sticky; top: 0; z-index: 60; border-bottom: 1px solid rgba(202,216,208,.9); background: rgba(248,251,249,.88); box-shadow: 0 1px 0 rgba(255,255,255,.8), 0 10px 32px rgba(25,58,43,.045); backdrop-filter: blur(20px) saturate(150%); }
.header-inner { width: min(1480px, calc(100% - 40px)); min-height: 74px; margin: auto; display: grid; grid-template-columns: 226px minmax(300px, 600px) 1fr; align-items: center; gap: 24px; }
.header-search-wrap { position: relative; min-width: 0; }
.header-search { height: 44px; display: flex; align-items: center; gap: 10px; border: 1px solid #d1ddd5; border-radius: 13px; padding: 0 15px; background: rgba(255,255,255,.92); box-shadow: inset 0 1px 0 white, 0 4px 15px rgba(25,58,43,.04); transition: border-color .2s ease, box-shadow .2s ease, background-color .2s ease; }
.header-search:focus-within { border-color: #3d7d5f; background: white; box-shadow: 0 0 0 4px rgba(45,116,84,.1), 0 8px 22px rgba(25,58,43,.07); }
.header-search svg { width: 18px; flex: 0 0 auto; fill: none; stroke: #657a6e; stroke-width: 1.8; }
.header-search input { width: 100%; border: 0; outline: 0; color: #172b21; background: transparent; font-size: 14px; }
.header-search input::placeholder { color: #91a098; }
nav { justify-self: end; display: flex; gap: 3px; align-items: center; color: #52655b; font-size: 13px; font-weight: 600; }
nav a { border-radius: 999px; padding: 8px 10px; transition: color .18s ease, background-color .18s ease; white-space: nowrap; }
nav a:hover { background: #edf4f0; color: #1f5a42; }
nav a.router-link-active { background: #e4efe9; color: #174b36; }
.search-history { position: absolute; top: calc(100% + 9px); left: 0; z-index: 90; display: grid; width: 100%; overflow: hidden; border: 1px solid #d1ded6; border-radius: 14px; padding: 9px; background: rgba(255,255,255,.98); box-shadow: 0 22px 52px rgba(25,58,43,.16); }
.history-heading { display: flex; align-items: center; justify-content: space-between; padding: 5px 8px 8px; color: #7d8e85; font-size: 11px; font-weight: 700; letter-spacing: .04em; }
.history-heading button { border: 0; padding: 2px; background: transparent; color: #819087; cursor: pointer; font-size: 11px; }
.history-item { display: flex; align-items: center; gap: 10px; width: 100%; border: 0; border-radius: 9px; padding: 10px 9px; overflow: hidden; background: transparent; color: #344f40; cursor: pointer; font-size: 13px; text-align: left; text-overflow: ellipsis; white-space: nowrap; }
.history-item:hover { background: #edf4f0; color: #174b36; }.history-item span { color: #88a092; }
.favorite-count { display: inline-grid; min-width: 18px; height: 18px; margin-left: 5px; place-items: center; border-radius: 999px; background: #cfdfd6; color: #174b36; font-size: 10px; font-weight: 800; }
@media (max-width: 980px) { .header-inner { grid-template-columns: auto minmax(240px, 1fr); width: min(100% - 28px, 880px); gap: 16px; padding: 10px 0 9px; } nav { grid-column: 1 / -1; justify-self: stretch; justify-content: center; border-top: 1px solid #e2e9e5; padding-top: 7px; } }
@media (max-width: 600px) { .site-header { position: sticky; }.header-inner { grid-template-columns: 1fr; width: calc(100% - 24px); gap: 10px; padding: 10px 0 8px; }.header-search-wrap, .header-search { width: 100%; } nav { justify-content: flex-start; gap: 1px; overflow-x: auto; padding: 7px 0 0; scrollbar-width: none; }nav::-webkit-scrollbar { display: none; }nav a { flex: 0 0 auto; padding: 7px 9px; font-size: 12px; } }
</style>
