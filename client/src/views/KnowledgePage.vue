<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MathHeader from '@/components/MathHeader.vue'
import MathMarkdown from '@/components/MathMarkdown.vue'
import { mathChapters, mathTopics } from '@/generated/math2-content'

const route = useRoute()
const router = useRouter()
const menuOpen = ref(false)

const chapter = computed(() => mathChapters.find((item) => item.id === route.params.chapterId) ?? mathChapters[0])
const topic = computed(() => chapter.value.topics.find((item) => item.id === route.params.topicId) ?? chapter.value.topics[0])
const flatIndex = computed(() => mathTopics.findIndex((item) => item.id === topic.value?.id))
const previous = computed(() => flatIndex.value > 0 ? mathTopics[flatIndex.value - 1] : null)
const next = computed(() => flatIndex.value >= 0 && flatIndex.value < mathTopics.length - 1 ? mathTopics[flatIndex.value + 1] : null)

function routeFor(item: typeof mathTopics[number]) {
  return `/knowledge/${item.chapterId}/${item.id}`
}

watch(() => route.fullPath, () => {
  menuOpen.value = false
  window.scrollTo({ top: 0, behavior: 'auto' })
}, { immediate: true })

if (!route.params.chapterId || !route.params.topicId) {
  const firstChapter = mathChapters[0]
  const firstTopic = firstChapter?.topics[0]
  if (firstChapter && firstTopic) router.replace(`/knowledge/${firstChapter.id}/${firstTopic.id}`)
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
              <RouterLink v-for="child in item.topics" :key="child.id" :to="`/knowledge/${item.id}/${child.id}`" :class="{ active: child.id === topic?.id }">{{ child.title }}</RouterLink>
            </nav>
          </details>
        </template>
      </aside>

      <button v-if="menuOpen" class="menu-mask" aria-label="关闭目录" @click="menuOpen = false"></button>

      <main v-if="topic">
        <div class="breadcrumb"><RouterLink to="/">首页</RouterLink><span>/</span>{{ chapter.partTitle }}<span>/</span>{{ chapter.title }}</div>
        <article>
          <header>
            <div class="topic-number">{{ String(flatIndex + 1).padStart(3, '0') }} / {{ mathTopics.length }}</div>
            <h1>{{ topic.title }}</h1>
            <p>{{ topic.summary }}</p>
          </header>
          <MathMarkdown :source="topic.body" />
        </article>

        <nav class="pager" aria-label="上一条和下一条">
          <RouterLink v-if="previous" :to="routeFor(previous)" class="previous"><small>← 上一条</small><b>{{ previous.title }}</b></RouterLink><span v-else></span>
          <RouterLink v-if="next" :to="routeFor(next)" class="next"><small>下一条 →</small><b>{{ next.title }}</b></RouterLink>
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
.pager { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 17px; }.pager a { display: grid; gap: 7px; min-height: 78px; border: 1px solid #dfe6df; border-radius: 8px; padding: 15px 18px; background: white; transition: .18s ease; }.pager a:hover { border-color: #abc0b0; transform: translateY(-1px); }.pager small { color: #8a978e; }.pager b { color: #345343; font-size: 13px; }.pager .next { text-align: right; }
.mobile-menu, .menu-mask { display: none; }
@media (max-width: 900px) { .reader { grid-template-columns: 1fr; }.mobile-menu { position: fixed; right: 14px; bottom: 18px; z-index: 75; display: block; border: 0; border-radius: 999px; padding: 12px 18px; background: #285e43; color: white; box-shadow: 0 8px 24px rgba(31,72,49,.25); font-weight: 700; }aside { position: fixed; top: 0; left: 0; z-index: 80; width: min(330px, 88vw); height: 100vh; transform: translateX(-102%); transition: transform .25s ease; box-shadow: 20px 0 50px rgba(20,38,27,.16); }aside.open { transform: translateX(0); }.menu-mask { position: fixed; inset: 0; z-index: 70; display: block; border: 0; background: rgba(16,28,21,.32); }main { width: min(760px, calc(100% - 32px)); padding-top: 30px; } }
@media (max-width: 560px) { article { border-right: 0; border-left: 0; border-radius: 0; padding: 34px 18px 44px; }main { width: 100%; }.breadcrumb { padding: 0 18px; }.pager { padding: 0 12px; }.pager b { display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical; } }
</style>
