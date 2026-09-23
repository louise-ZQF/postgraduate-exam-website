<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import MathHeader from '@/components/MathHeader.vue'
import { mathChapters, mathContentStats } from '@/generated/math2-content'

const router = useRouter()
const query = ref('')
const samples = ['相似对角化判断', '求导公式一览', '等价无穷小', '正定判定']

function search(value = query.value) {
  const q = value.trim()
  if (q) router.push({ name: 'search', query: { q } })
}
</script>

<template>
  <div class="home-page">
    <MathHeader />
    <main>
      <section class="hero">
        <div class="eyebrow"><span></span>考研数学二 · 公式与结论知识库</div>
        <h1>搜公式、查结论，<em>直接定位。</em></h1>
        <p class="lead">数学二的定义、定理、公式和判定条件集中在这里。输入中文名称，直接跳到对应条目。</p>

        <form class="hero-search" @submit.prevent="search()">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/></svg>
          <input v-model="query" maxlength="30" autofocus placeholder="输入知识点，例如：相似对角化判断" aria-label="搜索数学二知识点" />
          <button type="submit">搜索 <span>→</span></button>
        </form>
        <div class="sample-row"><span>试试：</span><button v-for="sample in samples" :key="sample" @click="search(sample)">{{ sample }}</button></div>

        <div class="stats" aria-label="内容统计">
          <div><strong>{{ mathContentStats.chapters }}</strong><span>章体系目录</span></div>
          <div><strong>{{ mathContentStats.anchors }}</strong><span>个可搜索条目</span></div>
          <div><strong>100%</strong><span>数学二范围</span></div>
        </div>
      </section>

      <section class="catalog">
        <div class="section-heading"><div><span>KNOWLEDGE MAP</span><h2>按章节浏览</h2></div><RouterLink to="/knowledge">打开完整目录 ↗</RouterLink></div>
        <div class="part" v-for="part in ['calculus', 'linear-algebra']" :key="part">
          <h3>{{ part === 'calculus' ? '高等数学' : '线性代数' }}</h3>
          <div class="chapter-grid">
            <RouterLink
              v-for="chapter in mathChapters.filter((item) => item.partId === part)"
              :key="chapter.id"
              :to="`/knowledge/${chapter.id}`"
              class="chapter-card"
            >
              <span class="chapter-no">{{ String(mathChapters.indexOf(chapter) + 1).padStart(2, '0') }}</span>
              <div><b>{{ chapter.title.replace(/^第[一二三四五六]+章　/, '') }}</b><small>{{ chapter.topics.length }} 个章内条目</small></div>
              <span class="arrow">↗</span>
            </RouterLink>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.home-page { min-height: 100vh; background: transparent; color: #17251d; }
main { overflow: hidden; }
.hero { position: relative; max-width: 1180px; margin: 0 auto; padding: 76px 40px 64px; }
.hero::before { position: absolute; top: 30px; right: -30px; width: 430px; height: 360px; border: 1px solid rgba(45,116,84,.13); border-radius: 44% 56% 46% 54%; content: ''; background: radial-gradient(circle at 38% 42%, rgba(255,255,255,.96) 0 4px, transparent 5px), repeating-linear-gradient(0deg, transparent 0 33px, rgba(44,94,69,.055) 34px 35px); transform: rotate(-6deg); pointer-events: none; }
.hero::after { position: absolute; top: 92px; right: 125px; content: '∫  ∑  lim'; color: rgba(30,91,64,.16); font-family: Georgia, "Times New Roman", serif; font-size: 62px; letter-spacing: .15em; transform: rotate(-4deg); }
.eyebrow { position: relative; z-index: 1; display: flex; align-items: center; gap: 11px; color: #5e7167; font-size: 11px; font-weight: 800; letter-spacing: .18em; }
.eyebrow span { width: 29px; height: 3px; border-radius: 99px; background: #b67a32; }
h1 { position: relative; z-index: 1; max-width: 850px; margin: 24px 0 20px; color: #10251d; font-family: ui-serif, "Songti SC", STSong, "Noto Serif CJK SC", serif; font-size: clamp(42px, 5.8vw, 70px); font-weight: 700; line-height: 1.2; letter-spacing: -.045em; }
h1 em { color: #246247; font-style: normal; }
.lead { position: relative; z-index: 1; max-width: 650px; margin: 0 0 30px; color: #5d7066; font-size: 16px; line-height: 1.85; }
.hero-search { position: relative; z-index: 2; display: flex; align-items: center; width: min(800px, 100%); min-height: 66px; border: 1px solid #c9d8d0; border-radius: 17px; padding: 7px 8px 7px 20px; background: rgba(255,255,255,.96); box-shadow: 0 22px 55px rgba(29,70,49,.12), inset 0 1px 0 white; transition: border-color .2s ease, box-shadow .2s ease; }
.hero-search:focus-within { border-color: #3c7c5e; box-shadow: 0 0 0 5px rgba(45,116,84,.1), 0 24px 58px rgba(29,70,49,.14); }
.hero-search svg { width: 22px; flex: 0 0 auto; fill: none; stroke: #63776c; stroke-width: 1.8; }
.hero-search input { min-width: 0; flex: 1; border: 0; outline: 0; padding: 0 15px; background: transparent; color: #193125; font-size: 16px; }
.hero-search input::placeholder { color: #91a098; }
.hero-search button { align-self: stretch; border: 0; border-radius: 11px; padding: 0 26px; background: linear-gradient(135deg, #2d7454, #1c573e); color: white; box-shadow: 0 7px 16px rgba(31,90,64,.2); font-weight: 750; transition: transform .18s ease, box-shadow .18s ease; }
.hero-search button:hover { transform: translateY(-1px); box-shadow: 0 9px 20px rgba(31,90,64,.25); }
.hero-search button span { margin-left: 12px; }
.sample-row { position: relative; z-index: 1; display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 16px; color: #829188; font-size: 12px; }
.sample-row button { border: 1px solid #d7e2dc; border-radius: 999px; padding: 5px 10px; background: rgba(255,255,255,.62); color: #426451; transition: .18s ease; }
.sample-row button:hover { border-color: #adc4b6; background: white; color: #1d5a3f; }
.stats { position: relative; z-index: 1; display: flex; gap: 0; width: min(700px, 100%); margin-top: 40px; border: 1px solid #dbe5df; border-radius: 14px; padding: 18px 0; background: rgba(255,255,255,.48); }
.stats div { display: grid; min-width: 170px; border-right: 1px solid #dce5e0; padding: 0 30px; }
.stats div:first-child { padding-left: 0; }.stats div:last-child { border: 0; }
.stats div:first-child { padding-left: 30px; }.stats strong { color: #1c543b; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 27px; }.stats span { margin-top: 2px; color: #73867b; font-size: 12px; }
.catalog { border-top: 1px solid #dce5e0; background: rgba(233,240,236,.72); padding: 68px max(28px, calc((100vw - 1080px)/2)) 92px; }
.section-heading { display: flex; align-items: end; justify-content: space-between; margin-bottom: 42px; }
.section-heading span { color: #9b6426; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 10px; font-weight: 800; letter-spacing: .18em; }
.section-heading h2 { margin: 7px 0 0; font-family: ui-serif, "Songti SC", STSong, serif; font-size: 34px; }
.section-heading > a { color: #41614f; font-size: 13px; }
.part + .part { margin-top: 45px; }.part h3 { margin: 0 0 15px; color: #7c897f; font-size: 13px; letter-spacing: .18em; }
.chapter-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.chapter-card { display: grid; grid-template-columns: 42px 1fr auto; align-items: center; min-height: 96px; border: 1px solid #d7e2dc; border-radius: 14px; padding: 17px 18px; background: rgba(255,255,255,.82); box-shadow: inset 0 1px 0 white; transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease; }
.chapter-card:hover { transform: translateY(-3px); border-color: #9db8a8; background: white; box-shadow: 0 15px 34px rgba(35,72,51,.09); }
.chapter-no { color: #a56b29; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11px; font-weight: 800; }.chapter-card div { display: grid; gap: 6px; }.chapter-card b { color: #173426; font-size: 16px; }.chapter-card small { color: #7c8d83; }.arrow { color: #62826e; font-size: 16px; }
@media (max-width: 820px) { .hero { padding: 62px 24px; }.hero::before { right: -240px; }.hero::after { display: none; }.chapter-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .hero { padding: 34px 18px 48px; }.hero::before, .hero::after { display: none; }h1 { margin-top: 18px; font-size: 34px; line-height: 1.25; }.lead { margin-bottom: 22px; font-size: 15px; line-height: 1.75; }.hero-search { min-height: 58px; padding-left: 14px; }.hero-search button { padding: 0 16px; }.stats { justify-content: space-between; }.stats div, .stats div:first-child { min-width: 0; padding: 0 13px; }.stats strong { font-size: 22px; }.stats span { font-size: 10px; }.catalog { padding: 50px 18px 68px; }.chapter-grid { grid-template-columns: 1fr; }.section-heading > a { display: none; } }
</style>
