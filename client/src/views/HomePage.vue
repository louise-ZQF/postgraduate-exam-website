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
        <h1>把散落的公式，<br><em>连成可搜索的知识网。</em></h1>
        <p class="lead">以数学二考纲为边界，收录定义、定理、公式、判定条件与易错点。搜索一个名称，直接到达对应条目。</p>

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
.home-page { min-height: 100vh; background: #fafbf7; color: #17251d; }
main { overflow: hidden; }
.hero { position: relative; max-width: 1120px; margin: 0 auto; padding: 100px 36px 86px; }
.hero::before { position: absolute; top: 10px; right: -140px; width: 540px; height: 540px; border: 1px solid #dce6dd; border-radius: 50%; content: ''; box-shadow: inset 0 0 0 65px #fafbf7, inset 0 0 0 66px #e7eee8, inset 0 0 0 145px #fafbf7, inset 0 0 0 146px #edf2ed; opacity: .72; pointer-events: none; }
.hero::after { position: absolute; top: 140px; right: 91px; width: 8px; height: 8px; border-radius: 50%; content: ''; background: #c18c4d; box-shadow: 78px 114px 0 #4e8568, -98px 171px 0 #9bb8a7; }
.eyebrow { position: relative; z-index: 1; display: flex; align-items: center; gap: 11px; color: #617168; font-size: 12px; font-weight: 700; letter-spacing: .18em; }
.eyebrow span { width: 27px; height: 2px; background: #ba7e3c; }
h1 { position: relative; z-index: 1; max-width: 790px; margin: 28px 0 22px; color: #15231b; font-family: "Noto Serif SC", "Songti SC", serif; font-size: clamp(46px, 6.4vw, 78px); font-weight: 700; line-height: 1.16; letter-spacing: -.045em; }
h1 em { color: #2c6649; font-style: normal; }
.lead { position: relative; z-index: 1; max-width: 680px; margin: 0 0 36px; color: #607067; font-size: 17px; line-height: 1.9; }
.hero-search { position: relative; z-index: 2; display: flex; align-items: center; width: min(780px, 100%); min-height: 64px; border: 1px solid #cfdacf; border-radius: 13px; padding: 7px 8px 7px 20px; background: white; box-shadow: 0 18px 44px rgba(43,76,57,.1); }
.hero-search svg { width: 22px; flex: 0 0 auto; fill: none; stroke: #75827a; stroke-width: 1.8; }
.hero-search input { min-width: 0; flex: 1; border: 0; outline: 0; padding: 0 15px; background: transparent; color: #193125; font-size: 16px; }
.hero-search button { align-self: stretch; border: 0; border-radius: 9px; padding: 0 26px; background: #285e43; color: white; font-weight: 700; }
.hero-search button span { margin-left: 12px; }
.sample-row { position: relative; z-index: 1; display: flex; flex-wrap: wrap; gap: 9px; margin-top: 15px; color: #89958d; font-size: 12px; }
.sample-row button { border: 0; padding: 0; background: transparent; color: #52705e; text-decoration: underline; text-decoration-color: #c5d2c8; text-underline-offset: 4px; }
.stats { position: relative; z-index: 1; display: flex; gap: 0; width: min(690px, 100%); margin-top: 54px; border-top: 1px solid #dfe6df; padding-top: 26px; }
.stats div { display: grid; min-width: 160px; border-right: 1px solid #e0e6e0; padding: 0 34px; }
.stats div:first-child { padding-left: 0; }.stats div:last-child { border: 0; }
.stats strong { color: #234f39; font-family: Manrope, sans-serif; font-size: 28px; }.stats span { margin-top: 3px; color: #7a887f; font-size: 12px; }
.catalog { border-top: 1px solid #e1e7e1; background: #f3f6f1; padding: 72px max(28px, calc((100vw - 1050px)/2)) 94px; }
.section-heading { display: flex; align-items: end; justify-content: space-between; margin-bottom: 42px; }
.section-heading span { color: #a17442; font-family: Manrope, sans-serif; font-size: 10px; font-weight: 800; letter-spacing: .2em; }
.section-heading h2 { margin: 7px 0 0; font-family: "Noto Serif SC", "Songti SC", serif; font-size: 34px; }
.section-heading > a { color: #41614f; font-size: 13px; }
.part + .part { margin-top: 45px; }.part h3 { margin: 0 0 15px; color: #7c897f; font-size: 13px; letter-spacing: .18em; }
.chapter-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.chapter-card { display: grid; grid-template-columns: 40px 1fr auto; align-items: center; min-height: 94px; border: 1px solid #dce4dc; border-radius: 9px; padding: 16px 18px; background: rgba(255,255,255,.76); transition: .2s ease; }
.chapter-card:hover { transform: translateY(-2px); border-color: #a9bdae; background: white; box-shadow: 0 12px 30px rgba(48,73,58,.07); }
.chapter-no { color: #af7c45; font-family: Manrope, sans-serif; font-size: 11px; font-weight: 800; }.chapter-card div { display: grid; gap: 6px; }.chapter-card b { font-size: 16px; }.chapter-card small { color: #8a968e; }.arrow { color: #779080; }
@media (max-width: 820px) { .hero { padding: 70px 24px; }.hero::before { right: -310px; }.chapter-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .hero { padding: 54px 18px 62px; }.hero::before, .hero::after { display: none; }h1 { font-size: 42px; }.lead { font-size: 15px; }.hero-search { min-height: 58px; padding-left: 14px; }.hero-search button { padding: 0 16px; }.stats { justify-content: space-between; }.stats div { min-width: 0; padding: 0 15px; }.stats strong { font-size: 23px; }.catalog { padding: 52px 18px 70px; }.chapter-grid { grid-template-columns: 1fr; }.section-heading > a { display: none; } }
</style>
