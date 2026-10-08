<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import MathHeader from '@/components/MathHeader.vue'
import MathMarkdown from '@/components/MathMarkdown.vue'
import { FAVORITES_CHANGED_EVENT, readFavorites, removeFavorite, type MathFavorite } from '@/math/favorites'

const favorites = ref<MathFavorite[]>([])
const selectedChapter = ref('')
const onlyFormulas = ref(false)
const chapters = computed(() => [...new Map(favorites.value.map((item) => [item.chapterId, item.chapterTitle])).entries()])
const visibleFavorites = computed(() => favorites.value
  .filter((item) => !selectedChapter.value || item.chapterId === selectedChapter.value)
  .filter((item) => !onlyFormulas.value || item.kind === 'formula')
  .sort((a, b) => b.addedAt - a.addedAt))

function refresh() { favorites.value = readFavorites() }
function remove(id: string) { favorites.value = removeFavorite(id) }

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
      <header class="page-header">
        <div>
          <h1>待背公式</h1>
          <p>只收藏你真正需要背的那一条。旧版整组收藏仍会保留，并单独标明。</p>
        </div>
        <span class="total">{{ favorites.length }} 条收藏</span>
      </header>

      <div v-if="favorites.length" class="filters">
        <label for="chapter-filter">章节</label>
        <select id="chapter-filter" v-model="selectedChapter">
          <option value="">全部章节</option>
          <option v-for="[id, title] in chapters" :key="id" :value="id">{{ title }}</option>
        </select>
        <label class="formula-filter"><input v-model="onlyFormulas" type="checkbox" /> 只看公式</label>
      </div>

      <section v-if="visibleFavorites.length" class="favorite-list" aria-label="待背收藏">
        <article v-for="item in visibleFavorites" :key="item.id">
          <div class="favorite-path">{{ item.partTitle }} <span aria-hidden="true">/</span> {{ item.chapterTitle }}</div>
          <span class="favorite-kind">{{ item.kind === 'formula' ? '公式收藏' : '旧版知识点收藏' }}</span>
          <h2><MathMarkdown :source="item.title" inline /></h2>
          <MathMarkdown v-if="item.kind === 'formula' && item.latex" class="favorite-formula" :source="`\\[${item.latex}\\]`" />
          <MathMarkdown v-if="item.context || item.summary" class="favorite-context" :source="item.context || item.summary" />
          <div class="actions">
            <RouterLink :to="{ name: 'knowledge', params: { chapterId: item.chapterId }, query: { section: item.targetId } }">查看原文 ↗</RouterLink>
            <button type="button" @click="remove(item.id)">已背会，移出待背</button>
          </div>
        </article>
      </section>
      <section v-else-if="!favorites.length" class="empty">
        <h2>还没有待背公式</h2>
        <p>搜索知识点，在需要复习的公式旁点击“收藏此公式”。</p>
        <RouterLink to="/">去搜索公式</RouterLink>
      </section>
      <section v-else class="empty">
        <h2>这个筛选下暂时没有内容</h2>
        <p>换一个章节，或关闭“只看公式”。</p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.favorites-page { min-height: 100vh; }
main { width: min(920px, calc(100% - 48px)); margin: 0 auto; padding: 58px 0 100px; }
.page-header { display: flex; align-items: end; justify-content: space-between; gap: 20px; border-bottom: 1px solid var(--line-strong); padding-bottom: 24px; }
h1 { margin: 0 0 9px; color: var(--ink); font-family: var(--serif); font-size: clamp(36px, 4.5vw, 54px); line-height: 1.3; }
.page-header p { max-width: 670px; margin: 0; color: var(--ink-soft); font-size: 15px; }
.total { color: var(--accent-dark); font-size: 13px; font-weight: 700; white-space: nowrap; }
.filters { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; margin: 25px 0 20px; color: var(--ink-soft); font-size: 14px; }
.filters select { max-width: min(320px, 70vw); min-height: 44px; border: 1px solid var(--line-strong); border-radius: 6px; padding: 0 10px; background: var(--paper); color: var(--ink); }
.formula-filter { display: inline-flex; align-items: center; gap: 7px; min-height: 44px; margin-left: 10px; cursor: pointer; }
.formula-filter input { width: 18px; height: 18px; accent-color: var(--accent); }
.favorite-list { border: 1px solid var(--line); border-radius: 10px; background: var(--paper); }
article { padding: 25px 28px 23px; }
article + article { border-top: 1px solid var(--line); }
.favorite-path { color: var(--muted); font-size: 12px; }
.favorite-path span { margin: 0 5px; color: var(--muted); }
.favorite-kind { display: block; margin-top: 12px; color: var(--accent-dark); font-size: 12px; font-weight: 700; }
h2 { margin: 4px 0 8px; font-family: var(--serif); font-size: 24px; line-height: 1.5; }
.favorite-formula { max-width: 760px; margin: 12px 0; }
.favorite-formula :deep(.katex-display) { margin: 0; border: 0; border-radius: 6px; padding: 14px 17px; background: var(--surface-soft); text-align: left; }
.favorite-context { max-width: 760px; color: var(--ink-soft); font-size: 14px; line-height: 1.75; }
.favorite-context :deep(p) { margin: 0; }
.actions { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin-top: 17px; }
.actions a, .actions button { display: inline-flex; align-items: center; min-height: 44px; border: 1px solid var(--line-strong); border-radius: 6px; padding: 0 13px; background: var(--paper); color: var(--accent-dark); font-size: 13px; font-weight: 650; }
.actions a:hover, .actions button:hover { border-color: var(--accent); background: var(--accent-tint); }
.actions button { color: var(--ink-soft); }
.empty { margin-top: 25px; border: 1px solid var(--line); border-radius: 10px; padding: 40px; background: var(--paper); }
.empty h2 { margin: 0 0 8px; }
.empty p { margin: 0 0 18px; color: var(--muted); }
.empty a { display: inline-flex; align-items: center; min-height: 44px; border-radius: 6px; padding: 0 17px; background: var(--accent); color: white; font-weight: 700; }
@media (max-width: 700px) { main { width: calc(100% - 32px); padding: 38px 0 72px; }.page-header { align-items: start; flex-direction: column; gap: 10px; }.page-header p { font-size: 14px; }article { padding: 19px 17px; }h2 { font-size: 21px; }.formula-filter { margin-left: 0; }.empty { padding: 27px 20px; } }
</style>
