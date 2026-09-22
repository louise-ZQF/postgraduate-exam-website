<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import MathHeader from '@/components/MathHeader.vue'
import {
  FAVORITES_CHANGED_EVENT,
  readFavorites,
  removeFavorite,
  type MathFavorite,
} from '@/math/favorites'

const favorites = ref<MathFavorite[]>([])

function refresh() {
  favorites.value = readFavorites()
}

function remove(id: string) {
  favorites.value = removeFavorite(id)
}

onMounted(() => {
  refresh()
  window.addEventListener(FAVORITES_CHANGED_EVENT, refresh)
  window.addEventListener('storage', refresh)
})

onBeforeUnmount(() => {
  window.removeEventListener(FAVORITES_CHANGED_EVENT, refresh)
  window.removeEventListener('storage', refresh)
})
</script>

<template>
  <div class="favorites-page">
    <MathHeader />
    <main>
      <header>
        <div>
          <span>REVIEW LIST</span>
          <h1>待背收藏</h1>
          <p>没背下来的公式先放这里；背完后点击“已背会，删除”。</p>
        </div>
        <strong>{{ favorites.length }} 条</strong>
      </header>

      <section v-if="favorites.length" class="favorite-list">
        <article v-for="item in favorites" :key="item.id">
          <div class="favorite-path">{{ item.partTitle }} <span>/</span> {{ item.chapterTitle }}</div>
          <h2>{{ item.title }}</h2>
          <p v-if="item.summary">{{ item.summary }}</p>
          <div class="actions">
            <RouterLink
              :to="{ name: 'knowledge', params: { chapterId: item.chapterId }, query: { section: item.id } }"
            >去背诵并定位 ↗</RouterLink>
            <button type="button" @click="remove(item.id)">已背会，删除</button>
          </div>
        </article>
      </section>

      <section v-else class="empty">
        <div>☆</div>
        <h2>还没有待背公式</h2>
        <p>在搜索结果或知识正文中点击“收藏”，公式就会出现在这里。</p>
        <RouterLink to="/search">去搜索公式</RouterLink>
      </section>
    </main>
  </div>
</template>

<style scoped>
.favorites-page { min-height: 100vh; background: #f8faf6; color: #18261e; }
main { width: min(940px, calc(100% - 36px)); margin: 0 auto; padding: 64px 0 100px; }
main > header { display: flex; align-items: end; justify-content: space-between; margin-bottom: 28px; border-bottom: 1px solid #dfe6df; padding-bottom: 27px; }
header span { color: #a06f39; font-family: Manrope, sans-serif; font-size: 10px; font-weight: 800; letter-spacing: .2em; }
header h1 { margin: 8px 0 7px; font-family: "Noto Serif SC", "Songti SC", serif; font-size: 40px; }
header p { margin: 0; color: #748178; }
header strong { color: #2c6046; font-size: 14px; }
.favorite-list { display: grid; gap: 11px; }
article { border: 1px solid #dce5dd; border-radius: 10px; padding: 21px 23px; background: white; }
.favorite-path { color: #809086; font-size: 11px; }.favorite-path span { margin: 0 5px; color: #bdc7c0; }
h2 { margin: 8px 0; color: #203d2d; font-size: 19px; }
article p { margin: 0; color: #68776e; font-size: 13px; line-height: 1.75; }
.actions { display: flex; align-items: center; gap: 18px; margin-top: 17px; }
.actions a { color: #286044; font-size: 13px; font-weight: 700; }
.actions button { border: 0; padding: 0; background: transparent; color: #9a665c; cursor: pointer; font-size: 12px; }
.empty { padding: 110px 20px; text-align: center; color: #849088; }
.empty div { color: #96aa9c; font-size: 46px; }.empty h2 { margin: 10px 0 8px; }.empty p { margin: 0 0 20px; }
.empty a { display: inline-block; border-radius: 8px; padding: 10px 18px; background: #2b6045; color: white; font-size: 13px; font-weight: 700; }
@media (max-width: 580px) { main { padding-top: 42px; }main > header { align-items: start; }header h1 { font-size: 34px; }.actions { justify-content: space-between; } }
</style>
