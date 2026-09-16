<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BrandLogo from './BrandLogo.vue'

const props = defineProps<{ initialQuery?: string }>()
const router = useRouter()
const query = ref(props.initialQuery ?? '')

function submit() {
  const q = query.value.trim().slice(0, 30)
  if (q) router.push({ name: 'search', query: { q } })
}
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <BrandLogo />
      <form class="header-search" role="search" @submit.prevent="submit">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/></svg>
        <input v-model="query" maxlength="30" aria-label="搜索数学知识点" placeholder="搜索公式、结论或题型" />
      </form>
      <nav aria-label="主导航">
        <RouterLink to="/knowledge">知识目录</RouterLink>
        <RouterLink to="/search">全文搜索</RouterLink>
        <a href="https://github.com/louise-ZQF/postgraduate-exam-website" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header { position: sticky; top: 0; z-index: 60; border-bottom: 1px solid rgba(206,218,210,.85); background: rgba(250,251,247,.9); backdrop-filter: blur(18px); }
.header-inner { width: min(1440px, calc(100% - 40px)); height: 68px; margin: auto; display: grid; grid-template-columns: 250px minmax(260px, 540px) 1fr; align-items: center; gap: 28px; }
.header-search { height: 40px; display: flex; align-items: center; gap: 9px; border: 1px solid #d9e1da; border-radius: 10px; padding: 0 13px; background: white; transition: .2s ease; }
.header-search:focus-within { border-color: #3c7057; box-shadow: 0 0 0 3px rgba(60,112,87,.1); }
.header-search svg { width: 17px; fill: none; stroke: #708075; stroke-width: 1.8; }
.header-search input { width: 100%; border: 0; outline: 0; color: #17231d; background: transparent; font-size: 14px; }
nav { justify-self: end; display: flex; gap: 24px; align-items: center; color: #536258; font-size: 14px; }
nav a { transition: color .18s ease; }
nav a:hover, nav a.router-link-active { color: #245b42; }
@media (max-width: 850px) { .header-inner { grid-template-columns: auto 1fr; width: min(100% - 24px, 760px); gap: 14px; } nav { display: none; } }
@media (max-width: 520px) { .site-header { position: relative; } .header-inner { height: auto; padding: 12px 0; grid-template-columns: 1fr; } .header-search { width: 100%; } }
</style>
