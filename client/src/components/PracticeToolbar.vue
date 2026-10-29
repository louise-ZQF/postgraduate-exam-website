<script setup lang="ts">
import PracticeIcon from './PracticeIcon.vue'

const status = defineModel<string>('status', { required: true })
const keyword = defineModel<string>('keyword', { required: true })
defineProps<{ count: number; marked: number; hidden: number; removed: boolean; notes: boolean }>()
defineEmits<{ reveal: [] }>()
const filters = [{ value: 'all', label: '全部题目' }, { value: 'unmarked', label: '未做过' }, { value: 'pending', label: '我的错题' }, { value: 'favorites', label: '收藏' }]
</script>

<template>
  <section class="practice-toolbar toolbar" aria-label="题目筛选">
    <div class="filter-row">
      <div class="status-tabs" role="group" aria-label="显示范围">
        <button v-for="filter in filters" :key="filter.value" :aria-pressed="status === filter.value" :class="{ selected: status === filter.value }" @click="status = filter.value">{{ filter.label }}</button>
      </div>
      <div class="filter-tools">
        <label class="question-search"><PracticeIcon name="search" /><input v-model="keyword" maxlength="80" aria-label="搜索错题" :placeholder="notes ? '搜索题目或笔记' : '搜索题目、知识点'" /><button v-if="keyword" aria-label="清空搜索" @click="keyword = ''"><PracticeIcon name="close" /></button></label>
        <select v-model="status" aria-label="显示题目" class="detail-filter">
          <option value="all">更多状态</option><option value="unmarked">未做过</option><option value="pending">我的错题</option><option value="favorites">只看收藏</option>
          <optgroup label="按掌握程度"><option value="unfamiliar">不熟练</option><option value="unknown">不会</option><option value="mastered">已掌握</option></optgroup>
        </select>
      </div>
    </div>
    <div class="results-row">
      <p class="result-count" aria-live="polite"><strong>{{ count }}</strong> 道题<span>已标记 {{ marked }}</span></p>
      <button v-if="hidden" class="reveal-button" aria-label="重新显示已隐藏题目" @click="$emit('reveal')"><PracticeIcon name="eye" />已隐藏 {{ hidden }} 道<span>重新显示</span></button>
      <details v-if="!removed" class="practice-rules">
        <summary><PracticeIcon name="info" />练习规则</summary>
        <div class="rules-panel"><strong>专注当前这一轮</strong><p>标记「掌握」后 30 秒隐藏，改标可取消。</p><p>收藏题在各状态中保留，不会自动隐藏。</p><p>已作答或标记的题不再算未做过；本轮会保留正在作答的题。</p><p>隐藏状态与上次位置自动保存，可随时重新显示。</p></div>
      </details>
    </div>
  </section>
</template>

<style scoped>
.practice-toolbar { margin-top: 24px; }
.filter-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; border-bottom: 1px solid var(--line-strong); }
.status-tabs { display: flex; gap: 22px; align-self: stretch; }
.status-tabs button { position: relative; min-height: 52px; border: 0; padding: 0 2px; background: transparent; color: var(--ink-soft); font-size: 14px; white-space: nowrap; }
.status-tabs button:hover { color: var(--accent-dark); }
.status-tabs button.selected { color: var(--accent-dark); font-weight: 650; }
.status-tabs button.selected::after { content: ''; position: absolute; bottom: -1px; left: 0; right: 0; height: 2px; border-radius: 2px; background: var(--accent); }
.filter-tools { display: flex; align-items: center; gap: 8px; padding-bottom: 9px; min-width: 0; }
.question-search { display: flex; align-items: center; gap: 8px; min-width: 0; width: 228px; height: 44px; border: 1px solid var(--line); border-radius: 8px; padding: 0 11px; background: var(--paper); color: var(--muted); }
.question-search:focus-within { border-color: var(--accent); outline: 3px solid var(--focus-ring); }
svg { width: 16px; height: 16px; flex-shrink: 0; }
.question-search input { width: 100%; min-width: 0; border: 0; outline: 0; background: transparent; font-size: 13px; color: var(--ink); }
.question-search input::placeholder { color: var(--muted); }
.question-search button { display: grid; place-items: center; flex-shrink: 0; width: 32px; height: 44px; border: 0; background: transparent; color: var(--muted); }
.detail-filter { min-height: 44px; width: 108px; border: 1px solid var(--line); border-radius: 8px; padding: 0 8px; background: var(--paper); color: var(--ink-soft); font-size: 12px; }
.results-row { position: relative; display: flex; align-items: center; flex-wrap: wrap; gap: 4px 16px; min-height: 54px; }
.result-count { margin: 0; color: var(--ink-soft); font-size: 12px; font-variant-numeric: tabular-nums; }
.result-count strong { color: var(--ink); font-size: 14px; font-weight: 650; }
.result-count > span { margin-left: 14px; color: var(--muted); }
.reveal-button { display: inline-flex; align-items: center; gap: 6px; min-height: 44px; border: 0; padding: 0; background: transparent; color: var(--muted); font-size: 12px; }
.reveal-button span { color: var(--accent-dark); }
.reveal-button:hover span { text-decoration: underline; }
.practice-rules { margin-left: auto; }
.practice-rules summary { display: flex; align-items: center; gap: 5px; min-height: 44px; color: var(--muted); font-size: 12px; list-style: none; cursor: pointer; }
.practice-rules summary::-webkit-details-marker { display: none; }
.practice-rules summary:hover, .practice-rules[open] summary { color: var(--accent-dark); }
.rules-panel { position: absolute; z-index: 5; top: 48px; right: 0; width: min(320px, 100%); border: 1px solid var(--line); border-radius: 10px; padding: 16px 18px; background: var(--paper); box-shadow: 0 10px 30px #24314a12; font-size: 12px; }
.rules-panel strong { font-size: 13px; color: var(--ink); }.rules-panel p { margin: 8px 0 0; color: var(--ink-soft); line-height: 1.8; }
@media (max-width: 1100px) { .filter-row { flex-wrap: wrap; gap: 8px; }.filter-tools { margin-left: auto; }.status-tabs { gap: 18px; } }
@media (max-width: 600px) { .practice-toolbar { margin-top: 16px; }.filter-row { flex-direction: column; align-items: stretch; gap: 10px; }.status-tabs { justify-content: space-between; gap: 12px; order: 1; }.status-tabs button { min-height: 44px; font-size: 13px; }.filter-tools { width: 100%; margin: 0; padding: 0; }.question-search { width: auto; flex: 1; }.results-row { gap: 0 12px; }.result-count > span { margin-left: 8px; }.reveal-button { gap: 4px; }.reveal-button svg { display: none; }.practice-rules { margin-left: auto; }.practice-rules summary { font-size: 11px; }.practice-rules summary svg { width: 14px; } }
</style>
