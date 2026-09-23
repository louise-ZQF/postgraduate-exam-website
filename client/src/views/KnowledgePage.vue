<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MathHeader from '@/components/MathHeader.vue'
import MathMarkdown from '@/components/MathMarkdown.vue'
import { mathChapters } from '@/generated/math2-content'
import { FAVORITES_CHANGED_EVENT, readFavorites, toggleFavorite } from '@/math/favorites'
import { plainMathText } from '@/math/search'

const route = useRoute()
const router = useRouter()
const menuOpen = ref(false)

const chapter = computed(() => mathChapters.find((item) => item.id === route.params.chapterId) ?? mathChapters[0])
const chapterIndex = computed(() => mathChapters.findIndex((item) => item.id === chapter.value.id))
const previous = computed(() => chapterIndex.value > 0 ? mathChapters[chapterIndex.value - 1] : null)
const next = computed(() => chapterIndex.value >= 0 && chapterIndex.value < mathChapters.length - 1 ? mathChapters[chapterIndex.value + 1] : null)

function routeFor(item: typeof mathChapters[number]) {
  return `/knowledge/${item.id}`
}

function decorateFavoriteButtons() {
  const favoriteIds = new Set(readFavorites().map((item) => item.id))
  for (const topic of chapter.value.topics) {
    const section = document.getElementById(topic.id)
    const headings = section?.querySelectorAll<HTMLElement>('.math-markdown h5') ?? []
    topic.anchors.forEach((anchor, index) => {
      const heading = headings[index]
      if (!heading) return
      heading.id = anchor.id
      let button = heading.querySelector<HTMLButtonElement>('.anchor-favorite-button')
      if (!button) {
        button = document.createElement('button')
        button.type = 'button'
        button.className = 'anchor-favorite-button'
        button.dataset.favoriteId = anchor.id
        heading.append(button)
      }
      const active = favoriteIds.has(anchor.id)
      button.classList.toggle('active', active)
      button.textContent = active ? '★ 已收藏' : '☆ 收藏'
      button.setAttribute('aria-label', (active ? '取消收藏：' : '收藏：') + plainMathText(anchor.title))
    })
  }
}

function handleArticleClick(event: MouseEvent) {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>('.anchor-favorite-button')
  const favoriteId = button?.dataset.favoriteId
  if (!favoriteId) return
  for (const topic of chapter.value.topics) {
    const anchor = topic.anchors.find((item) => item.id === favoriteId)
    if (!anchor) continue
    toggleFavorite({
      id: anchor.id,
      title: plainMathText(anchor.title),
      summary: anchor.summary,
      chapterId: chapter.value.id,
      chapterTitle: chapter.value.title,
      partTitle: chapter.value.partTitle,
    })
    decorateFavoriteButtons()
    return
  }
}

async function scrollToRequestedSection() {
  await nextTick()
  decorateFavoriteButtons()
  document.querySelectorAll('.search-target').forEach((item) => item.classList.remove('search-target'))
  const requested = String(route.query.section ?? route.params.topicId ?? '')
  if (!requested) {
    window.scrollTo({ top: 0, behavior: 'auto' })
    return
  }
  const target = document.getElementById(requested)
  if (target) {
    target.classList.add('search-target')
    target.scrollIntoView({ behavior: 'auto', block: 'start' })
  }
}

watch(() => route.fullPath, async () => {
  menuOpen.value = false
  await scrollToRequestedSection()
}, { flush: 'post' })

onMounted(() => {
  scrollToRequestedSection()
  window.addEventListener(FAVORITES_CHANGED_EVENT, decorateFavoriteButtons)
  window.addEventListener('storage', decorateFavoriteButtons)
})

onBeforeUnmount(() => {
  window.removeEventListener(FAVORITES_CHANGED_EVENT, decorateFavoriteButtons)
  window.removeEventListener('storage', decorateFavoriteButtons)
})

if (!route.params.chapterId) {
  const firstChapter = mathChapters[0]
  if (firstChapter) router.replace(`/knowledge/${firstChapter.id}`)
}
</script>

<template>
  <div class="knowledge-page">
    <MathHeader />
    <button class="mobile-menu" type="button" @click="menuOpen = !menuOpen">☰ 章节目录</button>
    <div class="reader">
      <aside :class="{ open: menuOpen }">
        <div class="aside-title"><span>CONTENTS</span><b>知识目录</b></div>
        <template v-for="partId in ['calculus', 'linear-algebra']" :key="partId">
          <div class="part-label">{{ partId === 'calculus' ? '高等数学' : '线性代数' }}</div>
          <details v-for="item in mathChapters.filter((c) => c.partId === partId)" :key="item.id" :open="item.id === chapter.id">
            <summary :class="{ active: item.id === chapter.id }">{{ item.title }}</summary>
            <nav>
              <RouterLink :to="`/knowledge/${item.id}`" class="chapter-overview">整章概览 · {{ item.topics.length }} 节</RouterLink>
              <RouterLink
                v-for="topic in item.id === chapter.id ? item.topics : []"
                :key="topic.id"
                :to="{ name: 'knowledge', params: { chapterId: item.id }, query: { section: topic.id } }"
                class="topic-link"
              ><MathMarkdown :source="topic.title" inline /></RouterLink>
            </nav>
          </details>
        </template>
      </aside>

      <button v-if="menuOpen" class="menu-mask" aria-label="关闭目录" @click="menuOpen = false"></button>

      <main v-if="chapter">
        <div class="breadcrumb"><RouterLink to="/">首页</RouterLink><span>/</span>{{ chapter.partTitle }}<span>/</span>{{ chapter.title }}</div>
        <article @click="handleArticleClick">
          <header>
            <div class="topic-number">CHAPTER {{ String(chapterIndex + 1).padStart(2, '0') }} / {{ mathChapters.length }}</div>
            <h1>{{ chapter.title }}</h1>
            <p>本章集中收录公式、定义、定理、判定条件与必要方法；搜索结果会定位到下面的具体条目。</p>
          </header>
          <nav class="chapter-toc" aria-label="本章目录">
            <RouterLink
              v-for="item in chapter.topics"
              :key="item.id"
              :to="{ name: 'knowledge', params: { chapterId: chapter.id }, query: { section: item.id } }"
            ><MathMarkdown :source="item.title" inline /></RouterLink>
          </nav>
          <section v-for="item in chapter.topics" :id="item.id" :key="item.id" class="chapter-section">
            <h2><MathMarkdown :source="item.title" inline /></h2>
            <MathMarkdown :source="item.body" />
          </section>
        </article>

        <nav class="pager" aria-label="上一条和下一条">
          <RouterLink v-if="previous" :to="routeFor(previous)" class="previous"><small>← 上一章</small><b>{{ previous.title }}</b></RouterLink><span v-else></span>
          <RouterLink v-if="next" :to="routeFor(next)" class="next"><small>下一章 →</small><b>{{ next.title }}</b></RouterLink>
        </nav>
      </main>
    </div>
  </div>
</template>

<style scoped>
.knowledge-page { min-height: 100vh; background: transparent; color: #1a291f; }
.reader { width: min(1540px, 100%); min-width: 0; margin: 0 auto; display: grid; grid-template-columns: 294px minmax(0, 1fr); }
aside { position: sticky; top: 74px; height: calc(100vh - 74px); overflow-y: auto; border-right: 1px solid #d7e2dc; padding: 30px 20px 60px; background: rgba(235,241,237,.78); backdrop-filter: blur(10px); scrollbar-width: thin; }
.aside-title { display: grid; margin: 0 8px 28px; }.aside-title span { color: #9b6426; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 9px; font-weight: 800; letter-spacing: .18em; }.aside-title b { margin-top: 7px; color: #173426; font-family: ui-serif, "Songti SC", STSong, serif; font-size: 24px; }
.part-label { margin: 25px 8px 9px; color: #869188; font-size: 10px; font-weight: 700; letter-spacing: .17em; }
details { border-top: 1px solid #dbe5df; }summary { position: relative; border-radius: 8px; padding: 13px 24px 13px 8px; color: #566b60; cursor: pointer; font-size: 13px; font-weight: 650; list-style: none; transition: .18s ease; }summary::-webkit-details-marker { display: none; }summary::after { position: absolute; right: 8px; content: '+'; color: #87998f; }details[open] summary::after { content: '−'; }summary:hover { color: #1f5a42; }summary.active { background: rgba(255,255,255,.54); color: #174b36; }
details nav { display: grid; padding: 3px 0 12px 8px; }details nav a { position: relative; border-left: 1px solid #cedbd3; padding: 7px 9px 7px 15px; color: #6c7f74; font-size: 12px; line-height: 1.5; }details nav a:hover { border-left-color: #7fa08d; color: #1e5b40; background: linear-gradient(90deg, rgba(45,116,84,.07), transparent); }.chapter-overview { color: #315f49 !important; font-weight: 700; }.topic-link { font-size: 11px !important; }
main { width: min(930px, calc(100% - 72px)); min-width: 0; margin: 0 auto; padding: 42px 0 94px; }.breadcrumb { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; color: #7f9087; font-size: 11px; }.breadcrumb a:hover { color: #246247; }.breadcrumb span { color: #b7c3bc; }
article { min-width: 0; border: 1px solid #d7e2dc; border-radius: 18px; padding: 52px clamp(30px, 6vw, 72px) 64px; background: rgba(255,255,255,.98); box-shadow: 0 22px 62px rgba(28,65,46,.075); }article > header { position: relative; margin-bottom: 38px; border-bottom: 1px solid #dfe7e2; padding-bottom: 34px; }article > header::after { position: absolute; bottom: -1px; left: 0; width: 72px; height: 3px; border-radius: 99px; content: ''; background: #b77a31; }.topic-number { color: #9b6426; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 10px; font-weight: 800; letter-spacing: .14em; }h1 { margin: 11px 0 13px; color: #10291d; font-family: ui-serif, "Songti SC", STSong, serif; font-size: clamp(32px, 4vw, 44px); line-height: 1.3; letter-spacing: -.025em; }article header p { max-width: 680px; margin: 0; color: #718279; font-size: 14px; line-height: 1.8; }
.chapter-toc { counter-reset: toc; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 9px 12px; margin: -4px 0 44px; border-bottom: 1px solid #e2e9e5; padding-bottom: 36px; }.chapter-toc a { counter-increment: toc; display: flex; align-items: center; gap: 9px; border: 1px solid #e0e8e3; border-radius: 10px; padding: 9px 11px; background: #f8faf8; color: #3e624f; font-size: 13px; line-height: 1.45; transition: .18s ease; }.chapter-toc a::before { content: counter(toc, decimal-leading-zero); color: #a57134; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 9px; font-weight: 800; }.chapter-toc a:hover { transform: translateY(-1px); border-color: #afc5b8; background: #f1f6f3; color: #174b36; }.chapter-section { scroll-margin-top: 96px; padding: 9px 0 46px; }.chapter-section + .chapter-section { border-top: 1px solid #e0e7e3; padding-top: 44px; }.chapter-section > h2 { margin: 0 0 24px; color: #163827; font-family: ui-serif, "Songti SC", STSong, serif; font-size: 29px; line-height: 1.4; letter-spacing: -.015em; }
.chapter-section :deep(h5[id]) { scroll-margin-top: 102px; border-radius: 9px; transition: background-color .2s ease, box-shadow .2s ease; }
.chapter-section :deep(h5.search-target) { margin-left: -12px; padding: 10px 12px; background: #fff3d9; box-shadow: 0 0 0 1px #e7c982, 0 8px 22px rgba(137,90,30,.08); }
.chapter-section :deep(.anchor-favorite-button) { float: right; margin: -2px 0 0 14px; border: 1px solid #d2dfd7; border-radius: 999px; padding: 6px 10px; background: #f6f9f7; color: #5e7167; cursor: pointer; font-family: system-ui, sans-serif; font-size: 11px; font-weight: 650; transition: .18s ease; }.chapter-section :deep(.anchor-favorite-button:hover), .chapter-section :deep(.anchor-favorite-button.active) { border-color: #d3aa67; background: #fff5df; color: #8e591d; }
.pager { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 18px; }.pager a { display: grid; gap: 7px; min-height: 82px; border: 1px solid #d7e2dc; border-radius: 13px; padding: 16px 19px; background: rgba(255,255,255,.9); box-shadow: 0 7px 20px rgba(28,65,46,.04); transition: .18s ease; }.pager a:hover { border-color: #9db8a8; transform: translateY(-2px); box-shadow: 0 12px 27px rgba(28,65,46,.075); }.pager small { color: #7d8e85; }.pager b { color: #315844; font-size: 13px; }.pager .next { text-align: right; }
.mobile-menu, .menu-mask { display: none; }
@media (max-width: 980px) { .reader { grid-template-columns: minmax(0, 1fr); }.mobile-menu { position: fixed; right: 14px; bottom: 18px; z-index: 75; display: block; border: 1px solid rgba(255,255,255,.28); border-radius: 999px; padding: 12px 18px; background: linear-gradient(135deg, #2e7454, #1b543c); color: white; box-shadow: 0 10px 28px rgba(31,72,49,.28); font-weight: 700; }aside { position: fixed; top: 0; left: 0; z-index: 80; width: min(330px, 88vw); height: 100vh; transform: translateX(-102%); transition: transform .25s ease; box-shadow: 20px 0 50px rgba(20,38,27,.16); }aside.open { transform: translateX(0); }.menu-mask { position: fixed; inset: 0; z-index: 70; display: block; border: 0; background: rgba(16,28,21,.36); backdrop-filter: blur(3px); }main { width: min(820px, calc(100% - 32px)); padding-top: 30px; } }
@media (max-width: 600px) { article { border-right: 0; border-left: 0; border-radius: 0; padding: 34px 18px 46px; box-shadow: none; }main { width: 100%; }.breadcrumb { padding: 0 18px; }.chapter-toc { grid-template-columns: 1fr; }.chapter-section > h2 { font-size: 24px; }.chapter-section :deep(.anchor-favorite-button) { float: none; margin: 9px 0 0; }.pager { padding: 0 12px; }.pager b { display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical; } }
</style>
