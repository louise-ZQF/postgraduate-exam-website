<script setup lang="ts">
import { computed, ref } from 'vue'
import MathHeader from '@/components/MathHeader.vue'
import FunctionPlot from '@/components/FunctionPlot.vue'
import { functionGraphs, graphCategories, type GraphCategory } from '@/math/functionGraphs'

const selectedCategory = ref<'全部' | GraphCategory>('全部')
const graphQuery = ref('')

const filteredGraphs = computed(() => {
  const keyword = graphQuery.value.trim().toLowerCase()
  return functionGraphs.filter((graph) => {
    const categoryMatches = selectedCategory.value === '全部' || graph.category === selectedCategory.value
    const textMatches = !keyword || `${graph.title} ${graph.formula} ${graph.aliases} ${graph.conclusion}`.toLowerCase().includes(keyword)
    return categoryMatches && textMatches
  })
})

function categoryCount(category: GraphCategory) {
  return functionGraphs.filter((graph) => graph.category === category).length
}
</script>

<template>
  <div class="graphs-page">
    <MathHeader />

    <main>
      <section class="graphs-hero">
        <div class="hero-copy">
          <span class="eyebrow">FUNCTION ATLAS · 数学二</span>
          <h1>考研常见函数<br><em>图像图鉴</em></h1>
          <p>把常用函数的形状、定义域、值域、单调性、对称性、关键点和渐近线放在同一个地方，做极限、导数、积分和二重积分时随时对照。</p>
        </div>
        <div class="hero-summary" aria-label="图像库统计">
          <strong>{{ functionGraphs.length }}</strong>
          <span>幅可缩放函数图像</span>
          <small>公式实时绘制 · 关键结论随图记忆</small>
        </div>
      </section>

      <section class="graph-tools" aria-label="图像筛选">
        <label class="graph-search">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/></svg>
          <input v-model="graphQuery" placeholder="搜索函数，例如：反正切、幂指函数" />
        </label>
        <div class="category-tabs">
          <button :class="{ active: selectedCategory === '全部' }" @click="selectedCategory = '全部'">全部 <span>{{ functionGraphs.length }}</span></button>
          <button
            v-for="category in graphCategories"
            :key="category"
            :class="{ active: selectedCategory === category }"
            @click="selectedCategory = category"
          >{{ category }} <span>{{ categoryCount(category) }}</span></button>
        </div>
      </section>

      <section class="atlas">
        <div class="atlas-heading">
          <div><span>{{ selectedCategory === '全部' ? 'ALL GRAPHS' : selectedCategory }}</span><h2>{{ selectedCategory === '全部' ? '全部常见图像' : selectedCategory }}</h2></div>
          <p>当前显示 {{ filteredGraphs.length }} 幅</p>
        </div>

        <div v-if="filteredGraphs.length" class="graph-grid">
          <article v-for="(graph, index) in filteredGraphs" :id="graph.id" :key="graph.id" class="graph-card">
            <header>
              <span class="graph-index">{{ String(index + 1).padStart(2, '0') }}</span>
              <div><small>{{ graph.category }}</small><h3>{{ graph.title }}</h3></div>
              <strong>{{ graph.formula }}</strong>
            </header>
            <FunctionPlot :graph="graph" />
            <dl>
              <div><dt>定义域</dt><dd>{{ graph.domain }}</dd></div>
              <div><dt>值域</dt><dd>{{ graph.range }}</dd></div>
            </dl>
            <p class="conclusion">{{ graph.conclusion }}</p>
          </article>
        </div>

        <div v-else class="empty-state">
          <strong>没有找到对应图像</strong>
          <p>可以换一个函数名称，或切换到“全部”。</p>
          <button @click="graphQuery = ''; selectedCategory = '全部'">查看全部图像</button>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.graphs-page { min-height: 100vh; color: var(--ink-950); }
main { min-width: 0; overflow: hidden; }
.graphs-hero { display: grid; grid-template-columns: minmax(0, 1fr) 250px; gap: 64px; align-items: end; width: min(1120px, calc(100% - 48px)); margin: 0 auto; padding: 70px 0 54px; }
.eyebrow { color: var(--amber-700); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11px; font-weight: 800; letter-spacing: .18em; }
h1 { margin: 18px 0 18px; font-family: ui-serif, "Songti SC", STSong, serif; font-size: clamp(44px, 6vw, 72px); line-height: 1.12; letter-spacing: -.045em; }
h1 em { color: var(--brand-600); font-style: normal; }
.hero-copy p { max-width: 700px; margin: 0; color: var(--ink-600); font-size: 16px; line-height: 1.9; }
.hero-summary { display: grid; border-left: 3px solid #bd7c31; padding: 4px 0 4px 24px; }
.hero-summary strong { color: var(--brand-700); font-family: Georgia, serif; font-size: 52px; line-height: 1; }
.hero-summary span { margin-top: 9px; color: var(--ink-800); font-weight: 750; }
.hero-summary small { margin-top: 7px; color: var(--ink-400); line-height: 1.6; }
.graph-tools { position: sticky; top: 74px; z-index: 25; display: grid; gap: 14px; border-block: 1px solid var(--line); padding: 18px max(24px, calc((100vw - 1120px) / 2)); background: rgba(244,248,245,.93); box-shadow: 0 12px 30px rgba(22,58,41,.045); backdrop-filter: blur(18px); }
.graph-search { display: flex; align-items: center; gap: 10px; width: min(520px, 100%); height: 44px; border: 1px solid #cedbd3; border-radius: 12px; padding: 0 14px; background: white; }
.graph-search:focus-within { border-color: var(--brand-600); box-shadow: 0 0 0 4px rgba(45,116,84,.09); }
.graph-search svg { width: 18px; fill: none; stroke: #6e8176; stroke-width: 1.8; }
.graph-search input { min-width: 0; flex: 1; border: 0; outline: 0; background: transparent; color: var(--ink-950); font-size: 14px; }
.category-tabs { display: flex; gap: 7px; overflow-x: auto; padding-bottom: 2px; scrollbar-width: none; }
.category-tabs::-webkit-scrollbar { display: none; }
.category-tabs button { flex: 0 0 auto; border: 1px solid #d6e1da; border-radius: 999px; padding: 7px 12px; background: rgba(255,255,255,.72); color: #52675c; font-size: 12px; font-weight: 650; transition: .18s ease; }
.category-tabs button:hover { border-color: #9fb9aa; color: var(--brand-700); }
.category-tabs button.active { border-color: var(--brand-700); background: var(--brand-700); color: white; box-shadow: 0 7px 18px rgba(31,90,66,.18); }
.category-tabs span { margin-left: 4px; opacity: .7; font-family: ui-monospace, monospace; font-size: 10px; }
.atlas { width: min(1120px, calc(100% - 48px)); margin: 0 auto; padding: 62px 0 90px; }
.atlas-heading { display: flex; align-items: end; justify-content: space-between; margin-bottom: 28px; }
.atlas-heading span { color: var(--amber-700); font-family: ui-monospace, monospace; font-size: 10px; font-weight: 800; letter-spacing: .16em; }
.atlas-heading h2 { margin: 6px 0 0; font-family: ui-serif, "Songti SC", STSong, serif; font-size: 32px; }
.atlas-heading p { margin: 0; color: var(--ink-400); font-size: 12px; }
.graph-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
.graph-card { min-width: 0; overflow: hidden; border: 1px solid #d5e1da; border-radius: 18px; padding: 22px; background: rgba(255,255,255,.88); box-shadow: var(--shadow-card); transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease; }
.graph-card:hover { transform: translateY(-3px); border-color: #a7beaf; box-shadow: 0 18px 44px rgba(23,55,41,.1); }
.graph-card header { display: grid; grid-template-columns: 36px 1fr auto; align-items: center; gap: 10px; margin-bottom: 10px; }
.graph-index { color: #ad712e; font-family: ui-monospace, monospace; font-size: 11px; font-weight: 800; }
.graph-card header small { color: var(--ink-400); font-size: 10px; letter-spacing: .1em; }
.graph-card h3 { margin: 2px 0 0; color: var(--ink-800); font-size: 17px; }
.graph-card header strong { border-radius: 9px; padding: 7px 10px; background: var(--amber-100); color: #87551e; font-family: Georgia, "Times New Roman", serif; font-size: 17px; white-space: nowrap; }
.graph-card dl { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 8px 0; }
.graph-card dl div { display: flex; justify-content: space-between; gap: 10px; border: 1px solid #e0e8e3; border-radius: 9px; padding: 8px 10px; background: #f8faf9; }
.graph-card dt { color: var(--ink-400); font-size: 11px; }
.graph-card dd { margin: 0; color: var(--ink-800); font-family: Georgia, "Times New Roman", serif; font-size: 12px; }
.conclusion { min-height: 48px; margin: 12px 0 0; border-left: 3px solid #c48a48; padding: 5px 0 5px 12px; color: #50665a; font-size: 13px; line-height: 1.7; }
.empty-state { border: 1px dashed #c8d7cf; border-radius: 18px; padding: 70px 20px; background: rgba(255,255,255,.65); text-align: center; }
.empty-state strong { color: var(--ink-800); font-size: 20px; }.empty-state p { color: var(--ink-400); }.empty-state button { border: 0; border-radius: 10px; padding: 10px 16px; background: var(--brand-700); color: white; }
@media (max-width: 980px) { .graph-tools { top: 145px; }.graphs-hero { grid-template-columns: 1fr; gap: 28px; }.hero-summary { width: fit-content; }.graph-grid { grid-template-columns: 1fr; } }
@media (max-width: 600px) { .graphs-hero { width: calc(100% - 36px); padding: 42px 0 34px; }.graphs-hero h1 { font-size: 39px; }.hero-copy p { font-size: 14px; }.hero-summary strong { font-size: 42px; }.graph-tools { position: relative; top: auto; padding: 14px 18px; }.atlas { width: calc(100% - 28px); padding: 44px 0 64px; }.graph-card { padding: 16px 12px; }.graph-card header { grid-template-columns: 28px 1fr; }.graph-card header strong { grid-column: 2; justify-self: start; }.graph-card dl { grid-template-columns: 1fr; }.atlas-heading h2 { font-size: 27px; } }
</style>
