<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MathHeader from '@/components/MathHeader.vue'
import MathMarkdown from '@/components/MathMarkdown.vue'
import { mathChapters } from '@/generated/math2-content'

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

async function scrollToRequestedSection() {
  await nextTick()
  const requested = String(route.query.section ?? route.params.topicId ?? '')
  if (!requested) {
    window.scrollTo({ top: 0, behavior: 'auto' })
    return
  }
  const target = document.getElementById(requested)
  if (target) target.scrollIntoView({ behavior: 'auto', block: 'start' })
}

watch(() => route.fullPath, async () => {
  menuOpen.value = false
  await scrollToRequestedSection()
}, { flush: 'post' })

onMounted(scrollToRequestedSection)

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
            <nav><RouterLink :to="`/knowledge/${item.id}`">打开整章（{{ item.topics.length }} 节）</RouterLink></nav>
          </details>
        </template>
      </aside>

      <button v-if="menuOpen" class="menu-mask" aria-label="关闭目录" @click="menuOpen = false"></button>

      <main v-if="chapter">
        <div class="breadcrumb"><RouterLink to="/">首页</RouterLink><span>/</span>{{ chapter.partTitle }}<span>/</span>{{ chapter.title }}</div>
        <article>
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
.knowledge-page { min-height: 100vh; background: #f7f9f5; color: #1a291f; }
.reader { width: min(1500px, 100%); margin: 0 auto; display: grid; grid-template-columns: 310px minmax(0, 1fr); }
aside { position: sticky; top: 68px; height: calc(100vh - 68px); overflow-y: auto; border-right: 1px solid #dfe6df; padding: 31px 22px 60px; background: #f2f5f0; scrollbar-width: thin; }
.aside-title { display: grid; margin: 0 8px 30px; }.aside-title span { color: #a2713c; font-family: Manrope, sans-serif; font-size: 9px; font-weight: 800; letter-spacing: .2em; }.aside-title b { margin-top: 7px; font-family: "Noto Serif SC", "Songti SC", serif; font-size: 24px; }
.part-label { margin: 25px 8px 9px; color: #869188; font-size: 10px; font-weight: 700; letter-spacing: .17em; }
details { border-top: 1px solid #e0e6e0; }summary { position: relative; padding: 13px 22px 13px 8px; color: #59675e; cursor: pointer; font-size: 13px; font-weight: 650; list-style: none; }summary::-webkit-details-marker { display: none; }summary::after { position: absolute; right: 7px; content: '+'; color: #9aa59d; }details[open] summary::after { content: '−'; }summary.active { color: #23563c; }
details nav { display: grid; padding: 1px 0 11px 8px; }details nav a { position: relative; border-left: 1px solid #d5dfd6; padding: 7px 8px 7px 15px; color: #718078; font-size: 12px; line-height: 1.45; }details nav a:hover { color: #285d42; }details nav a.active { border-left-color: #337552; background: linear-gradient(90deg, rgba(58,116,83,.09), transparent); color: #24593e; font-weight: 700; }details nav a.active::before { position: absolute; top: 12px; left: -3px; width: 5px; height: 5px; border-radius: 50%; content: ''; background: #337552; }
main { width: min(860px, calc(100% - 64px)); margin: 0 auto; padding: 43px 0 90px; }.breadcrumb { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 23px; color: #8b968e; font-size: 11px; }.breadcrumb a:hover { color: #2b6045; }.breadcrumb span { color: #c0c8c1; }
article { border: 1px solid #dfe6df; border-radius: 8px; padding: 47px clamp(26px, 6vw, 68px) 58px; background: white; box-shadow: 0 16px 45px rgba(45,68,53,.045); }article > header { margin-bottom: 42px; border-bottom: 1px solid #e1e7e1; padding-bottom: 33px; }.topic-number { color: #a16e35; font-family: Manrope, sans-serif; font-size: 10px; font-weight: 800; letter-spacing: .15em; }h1 { margin: 11px 0 13px; color: #15291c; font-family: "Noto Serif SC", "Songti SC", serif; font-size: clamp(30px, 4vw, 42px); line-height: 1.3; }article header p { margin: 0; color: #7b887f; font-size: 13px; line-height: 1.75; }
.chapter-toc { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 20px; margin: -8px 0 42px; border-bottom: 1px solid #e5eae5; padding-bottom: 34px; }.chapter-toc a { color: #456654; font-size: 13px; line-height: 1.5; }.chapter-toc a:hover { color: #1f5a3a; text-decoration: underline; text-underline-offset: 3px; }.chapter-section { scroll-margin-top: 88px; padding: 8px 0 42px; }.chapter-section + .chapter-section { border-top: 1px solid #e4e9e4; padding-top: 40px; }.chapter-section > h2 { margin: 0 0 22px; color: #173322; font-family: "Noto Serif SC", "Songti SC", serif; font-size: 28px; line-height: 1.4; }
.pager { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 17px; }.pager a { display: grid; gap: 7px; min-height: 78px; border: 1px solid #dfe6df; border-radius: 8px; padding: 15px 18px; background: white; transition: .18s ease; }.pager a:hover { border-color: #abc0b0; transform: translateY(-1px); }.pager small { color: #8a978e; }.pager b { color: #345343; font-size: 13px; }.pager .next { text-align: right; }
.mobile-menu, .menu-mask { display: none; }
@media (max-width: 900px) { .reader { grid-template-columns: 1fr; }.mobile-menu { position: fixed; right: 14px; bottom: 18px; z-index: 75; display: block; border: 0; border-radius: 999px; padding: 12px 18px; background: #285e43; color: white; box-shadow: 0 8px 24px rgba(31,72,49,.25); font-weight: 700; }aside { position: fixed; top: 0; left: 0; z-index: 80; width: min(330px, 88vw); height: 100vh; transform: translateX(-102%); transition: transform .25s ease; box-shadow: 20px 0 50px rgba(20,38,27,.16); }aside.open { transform: translateX(0); }.menu-mask { position: fixed; inset: 0; z-index: 70; display: block; border: 0; background: rgba(16,28,21,.32); }main { width: min(760px, calc(100% - 32px)); padding-top: 30px; } }
@media (max-width: 560px) { article { border-right: 0; border-left: 0; border-radius: 0; padding: 34px 18px 44px; }main { width: 100%; }.breadcrumb { padding: 0 18px; }.chapter-toc { grid-template-columns: 1fr; }.chapter-section > h2 { font-size: 24px; }.pager { padding: 0 12px; }.pager b { display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical; } }
</style>
