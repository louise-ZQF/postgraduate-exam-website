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
.site-header { position: sticky; top: 0; z-index: 60; border-bottom: 1px solid rgba(206,218,210,.85); background: rgba(250,251,247,.9); backdrop-filter: blur(18px); }
.header-inner { width: min(1440px, calc(100% - 40px)); height: 68px; margin: auto; display: grid; grid-template-columns: 250px minmax(260px, 540px) 1fr; align-items: center; gap: 28px; }
.header-search-wrap { position: relative; min-width: 0; }
.header-search { height: 40px; display: flex; align-items: center; gap: 9px; border: 1px solid #d9e1da; border-radius: 10px; padding: 0 13px; background: white; transition: .2s ease; }
.header-search:focus-within { border-color: #3c7057; box-shadow: 0 0 0 3px rgba(60,112,87,.1); }
.header-search svg { width: 17px; fill: none; stroke: #708075; stroke-width: 1.8; }
.header-search input { width: 100%; border: 0; outline: 0; color: #17231d; background: transparent; font-size: 14px; }
nav { justify-self: end; display: flex; gap: 24px; align-items: center; color: #536258; font-size: 14px; }
nav a { transition: color .18s ease; }
nav a:hover, nav a.router-link-active { color: #245b42; }
.search-history { position: absolute; top: calc(100% + 8px); left: 0; z-index: 90; display: grid; width: 100%; overflow: hidden; border: 1px solid #d5dfd7; border-radius: 10px; padding: 8px; background: white; box-shadow: 0 16px 38px rgba(38,69,50,.14); }
.history-heading { display: flex; align-items: center; justify-content: space-between; padding: 4px 7px 7px; color: #8a968e; font-size: 11px; }
.history-heading button { border: 0; padding: 2px; background: transparent; color: #819087; cursor: pointer; font-size: 11px; }
.history-item { display: flex; align-items: center; gap: 9px; width: 100%; border: 0; border-radius: 7px; padding: 9px 8px; overflow: hidden; background: transparent; color: #3f5749; cursor: pointer; text-align: left; text-overflow: ellipsis; white-space: nowrap; }
.history-item:hover { background: #f1f6f2; color: #245b42; }.history-item span { color: #91a398; }
.favorite-count { display: inline-grid; min-width: 18px; height: 18px; margin-left: 5px; place-items: center; border-radius: 999px; background: #e9f0eb; color: #2c6548; font-size: 10px; font-weight: 800; }
@media (max-width: 850px) { .header-inner { grid-template-columns: auto 1fr; width: min(100% - 24px, 760px); gap: 14px; } nav { display: none; } }
@media (max-width: 520px) { .site-header { position: relative; } .header-inner { height: auto; padding: 12px 0; grid-template-columns: 1fr; } .header-search-wrap, .header-search { width: 100%; } }
</style>
