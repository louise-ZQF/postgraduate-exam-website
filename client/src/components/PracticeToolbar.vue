<script setup lang="ts">
import PracticeIcon from './PracticeIcon.vue'
import { favoriteReasonLabels, isFavoriteFilter, manualErrorReasons, practiceStatusLabels, type PracticeStatus } from '@/math/practice'

const status = defineModel<PracticeStatus>('status', { required: true })
const keyword = defineModel<string>('keyword', { required: true })
defineProps<{ count: number; marked: number; hidden: number; removed: boolean; notes: boolean }>()
defineEmits<{ reveal: [] }>()
const filters = ['all', 'unmarked', 'pending', 'favorites'] as const
const errorFilters = [...manualErrorReasons, 'wrong'] as const
const isSelected = (filter: typeof filters[number]) => filter === 'favorites' ? isFavoriteFilter(status.value) : filter === 'pending' ? status.value === 'pending' || errorFilters.some(error => error === status.value) : status.value === filter
</script>

<template>
  <section class="practice-toolbar toolbar" aria-label="题目筛选">
    <div class="filter-row">
      <div class="status-tabs" role="group" aria-label="显示范围">
        <button v-for="filter in filters" :key="filter" :aria-pressed="isSelected(filter)" :class="{ selected: isSelected(filter) }" @click="status = filter">{{ practiceStatusLabels[filter] }}</button>
      </div>
      <div class="filter-tools">
        <label class="question-search"><PracticeIcon name="search" /><input v-model="keyword" maxlength="80" aria-label="搜索错题" :placeholder="notes ? '搜索题目或笔记' : '搜索题目、知识点'" /><button v-if="keyword" aria-label="清空搜索" @click="keyword = ''"><PracticeIcon name="close" /></button></label>
        <select v-model="status" aria-label="显示题目" class="detail-filter">
          <option value="all">全部题目</option><option value="unmarked">未做过</option><option value="pending">我的错题</option><option value="mastered">已掌握</option>
          <optgroup label="按错因"><option v-for="filter in errorFilters" :key="filter" :value="filter">{{ practiceStatusLabels[filter] }}</option></optgroup>
          <optgroup label="按收藏原因"><option value="favorites">全部收藏</option><option v-for="(label, reason) in favoriteReasonLabels" :key="reason" :value="reason">{{ label }}</option></optgroup>
        </select>
      </div>
    </div>
    <div class="results-row">
      <p class="result-count" aria-live="polite"><strong>{{ count }}</strong> 道题<span>已标记 {{ marked }}</span></p>
      <button v-if="hidden" class="reveal-button" aria-label="重新显示已隐藏题目" @click="$emit('reveal')"><PracticeIcon name="eye" />已隐藏 {{ hidden }} 道<span>重新显示</span></button>
      <details v-if="!removed" class="practice-rules">
        <summary><PracticeIcon name="info" />练习规则</summary>
        <div class="rules-panel"><p>标记错因或答错选择题后，题目会进入我的错题。</p><p>收藏原因可以多选。点「之前没有注意的点」可同时标记错因和收藏。</p><p>标记「掌握」后 30 秒隐藏，收藏题免于自动隐藏。</p><p>未做过的题在开始作答后仍留在本轮，方便继续做。</p></div>
      </details>
    </div>
  </section>
</template>

<style scoped>
.practice-toolbar { margin-top: 16px; border: 1px solid var(--line); border-radius: 12px; padding: 0 16px; background: var(--paper); box-shadow: var(--shadow-card); }
.filter-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; min-height: 60px; border-bottom: 1px solid var(--line); }
.status-tabs { display: flex; align-items: center; gap: 2px; padding: 3px; border: 1px solid var(--line); border-radius: 8px; background: var(--surface-soft); }
.status-tabs button { position: relative; min-height: 36px; border: 0; border-radius: 5px; padding: 0 12px; background: transparent; color: var(--ink-soft); font-size: 12px; white-space: nowrap; }
.status-tabs button:hover { color: var(--accent-dark); }
.status-tabs button.selected { color: var(--ink); background: var(--paper); box-shadow: 0 1px 3px #1f293715; font-weight: 600; }
.status-tabs button.selected::after { display: none; }
.filter-tools { display: flex; align-items: center; gap: 8px; min-width: 0; }
.question-search { display: flex; align-items: center; gap: 8px; min-width: 0; width: 220px; height: 40px; border: 1px solid var(--line); border-radius: 7px; padding: 0 11px; background: var(--paper); color: var(--muted); }
.question-search:focus-within { border-color: var(--accent); outline: 3px solid var(--focus-ring); }
svg { width: 16px; height: 16px; flex-shrink: 0; }
.question-search input { width: 100%; min-width: 0; border: 0; outline: 0; background: transparent; font-size: 13px; color: var(--ink); }
.question-search input::placeholder { color: var(--muted); }
.question-search button { display: grid; place-items: center; flex-shrink: 0; width: 32px; height: 44px; border: 0; background: transparent; color: var(--muted); }
.detail-filter { min-height: 40px; width: 152px; border: 1px solid var(--line); border-radius: 7px; padding: 0 8px; background: var(--paper); color: var(--ink-soft); font-size: 12px; }
.results-row { position: relative; display: flex; align-items: center; flex-wrap: wrap; gap: 4px 16px; min-height: 42px; }
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
