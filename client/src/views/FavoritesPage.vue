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
.favorites-page { min-height: 100vh; background: transparent; color: #18261e; }
main { width: min(980px, calc(100% - 36px)); margin: 0 auto; padding: 62px 0 104px; }
main > header { display: flex; align-items: end; justify-content: space-between; margin-bottom: 30px; border-bottom: 1px solid #d8e3dc; padding-bottom: 28px; }
header span { color: #9b6426; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 10px; font-weight: 800; letter-spacing: .18em; }
header h1 { margin: 8px 0 7px; color: #112a1e; font-family: ui-serif, "Songti SC", STSong, serif; font-size: 42px; letter-spacing: -.025em; }
header p { margin: 0; color: #6e8176; }
header strong { display: grid; min-width: 58px; height: 58px; place-items: center; border: 1px solid #cddbd3; border-radius: 50%; background: rgba(255,255,255,.72); color: #215a40; box-shadow: 0 7px 22px rgba(30,67,48,.05); font-size: 13px; }
.favorite-list { display: grid; gap: 13px; }
article { position: relative; overflow: hidden; border: 1px solid #d7e2dc; border-radius: 15px; padding: 23px 25px 21px; background: rgba(255,255,255,.95); box-shadow: 0 6px 20px rgba(30,67,48,.04); transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease; }
article::before { position: absolute; top: 0; bottom: 0; left: 0; width: 4px; content: ''; background: #d3ad70; }article:hover { transform: translateY(-2px); border-color: #acc2b5; box-shadow: 0 14px 32px rgba(30,67,48,.08); }
.favorite-path { color: #7b8d83; font-size: 11px; font-weight: 600; }.favorite-path span { margin: 0 6px; color: #b9c5be; }
h2 { margin: 9px 0 8px; color: #18392a; font-size: 20px; line-height: 1.5; }
article p { margin: 0; color: #607369; font-size: 13px; line-height: 1.78; }
.actions { display: flex; align-items: center; gap: 20px; margin-top: 18px; }
.actions a { border-radius: 8px; padding: 7px 10px; background: #e8f1ec; color: #205b40; font-size: 12px; font-weight: 750; }
.actions button { border: 0; border-bottom: 1px solid transparent; padding: 0 0 2px; background: transparent; color: #966057; cursor: pointer; font-size: 12px; }.actions button:hover { border-bottom-color: #c9a49d; }
.empty { margin-top: 20px; border: 1px dashed #ccd9d1; border-radius: 19px; padding: 98px 20px; background: rgba(255,255,255,.46); text-align: center; color: #7b8c83; }
.empty div { color: #91a99b; font-size: 46px; }.empty h2 { margin: 10px 0 8px; color: #455e51; }.empty p { margin: 0 0 22px; }
.empty a { display: inline-block; border-radius: 10px; padding: 11px 19px; background: linear-gradient(135deg, #2e7555, #1d573f); color: white; box-shadow: 0 8px 18px rgba(31,90,64,.2); font-size: 13px; font-weight: 750; }
@media (max-width: 600px) { main { padding-top: 42px; }main > header { align-items: start; }header h1 { font-size: 35px; }header strong { min-width: 50px; height: 50px; }.actions { justify-content: space-between; }article { padding: 21px 19px; } }
</style>
