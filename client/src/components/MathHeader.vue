<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { FAVORITES_CHANGED_EVENT, readFavorites } from '@/math/favorites'
import { clearRecentSearches, readRecentSearches, rememberSearch } from '@/math/recentSearches'
import BrandLogo from './BrandLogo.vue'

const props = defineProps<{ initialQuery?: string; hideSearch?: boolean }>()
const router = useRouter()
const query = ref(props.initialQuery ?? '')
const historyOpen = ref(false)
const recentSearches = ref<string[]>([])
const favoriteCount = ref(0)
let closeTimer: number | undefined

function refreshFavorites() {
  favoriteCount.value = readFavorites().length
}

function submit(value = query.value) {
  const q = value.trim().slice(0, 30)
  if (!q) return
  recentSearches.value = rememberSearch(q)
  historyOpen.value = false
  router.push({ name: 'home', query: { q } })
}

function openHistory() {
  if (closeTimer) window.clearTimeout(closeTimer)
  recentSearches.value = readRecentSearches()
  historyOpen.value = true
}

function scheduleCloseHistory() {
  closeTimer = window.setTimeout(() => { historyOpen.value = false }, 120)
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
    <div class="header-inner" :class="{ 'without-search': props.hideSearch }">
      <BrandLogo />
      <div v-if="!props.hideSearch" class="header-search-wrap">
        <form class="header-search" role="search" @submit.prevent="submit()">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/></svg>
          <input v-model="query" maxlength="30" aria-label="搜索数学公式" placeholder="搜索公式或结论"
            @focus="openHistory" @blur="scheduleCloseHistory" @keydown.esc="historyOpen = false" />
        </form>
        <section v-if="historyOpen && recentSearches.length" class="search-history" aria-label="最近搜索">
          <div class="history-heading"><span>最近搜索</span><button type="button" @mousedown.prevent @click="clearHistory">清空</button></div>
          <button v-for="item in recentSearches" :key="item" class="history-item" type="button"
            @mousedown.prevent @click="submit(item)">{{ item }}</button>
        </section>
      </div>
      <nav aria-label="主导航">
        <RouterLink to="/">搜索</RouterLink>
        <RouterLink to="/favorites">待背收藏<span v-if="favoriteCount" class="favorite-count">{{ favoriteCount }}</span></RouterLink>
        <RouterLink to="/practice">错题本</RouterLink>
        <RouterLink to="/graphs">常见图像</RouterLink>
        <RouterLink to="/proofs">证明题专场</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header { position: relative; z-index: 20; border-bottom: 1px solid var(--line); background: var(--paper); }
.header-inner { display: grid; grid-template-columns: auto minmax(160px, 300px) 1fr; align-items: center; gap: 20px; width: min(1280px, calc(100% - 48px)); min-height: 78px; margin: auto; }
.header-inner.without-search { grid-template-columns: auto 1fr; }
.header-search-wrap { position: relative; min-width: 0; }
.header-search { display: flex; align-items: center; gap: 9px; height: 42px; border: 1px solid var(--line-strong); border-radius: 8px; padding: 0 12px; background: var(--paper); }
.header-search:focus-within { border-color: var(--accent); outline: 3px solid var(--focus-ring); }
.header-search svg { width: 17px; flex: 0 0 auto; fill: none; stroke: var(--muted); stroke-width: 1.8; }
.header-search input { width: 100%; min-width: 0; border: 0; outline: none; background: transparent; color: var(--ink); font-size: 14px; }
.header-search input::placeholder { color: var(--muted); }
nav { display: flex; justify-self: end; align-items: center; gap: 8px; }
nav a { display: inline-flex; align-items: center; min-height: 44px; border-radius: 6px; padding: 0 12px; color: var(--ink-soft); font-size: 14px; font-weight: 600; white-space: nowrap; }
nav a:hover, nav a.router-link-active { background: var(--accent-tint); color: var(--accent-dark); }
.favorite-count { display: inline-grid; min-width: 19px; height: 19px; margin-left: 6px; place-items: center; border-radius: 50%; background: var(--accent); color: white; font-size: 11px; }
.search-history { position: absolute; top: calc(100% + 7px); left: 0; z-index: 30; width: 100%; border: 1px solid var(--line-strong); border-radius: 8px; padding: 7px; background: var(--paper); box-shadow: 0 8px 24px rgba(44, 35, 26, .1); }
.history-heading { display: flex; justify-content: space-between; padding: 5px 8px 7px; color: var(--muted); font-size: 12px; }
.history-heading button { border: 0; background: transparent; color: var(--accent-dark); }
.history-item { display: block; width: 100%; min-height: 38px; border: 0; border-radius: 5px; padding: 7px 8px; background: transparent; color: var(--ink); text-align: left; }
.history-item:hover { background: var(--accent-tint); }
@media (max-width: 1050px) { .header-inner { grid-template-columns: 1fr auto; gap: 8px; padding: 12px 0; }.header-search-wrap { grid-column: 1 / -1; grid-row: 2; } }
@media (max-width: 760px) { .header-inner, .header-inner.without-search { grid-template-columns: 1fr; width: calc(100% - 32px); gap: 5px; }.header-search-wrap { grid-column: 1; grid-row: 3; margin-top: 8px; }nav { justify-self: start; gap: 2px; flex-wrap: wrap; }nav a { min-height: 44px; padding: 0 10px; font-size: 13px; } }
</style>
