<template>
  <RouterLink to="/" aria-label="返回数学二学习空间首页" class="brand">
    <span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M8 5h17M8 27h17M22 5l-11 11 11 11" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>
    <span><b>数学二学习空间</b><small>公式 · 题库 · 复习</small></span>
  </RouterLink>
</template>

<style scoped>
.brand { display: inline-flex; align-items: center; gap: 10px; width: max-content; min-height: 44px; color: var(--ink); }
.brand-mark { display: grid; place-items: center; width: 34px; height: 38px; border-radius: 10px; background: var(--accent-tint); color: var(--accent); }
.brand-mark svg { width: 26px; height: 26px; }
.brand > span:last-child { display: grid; line-height: 1.1; }
b { font-size: 16px; font-weight: 700; letter-spacing: -.02em; }
small { margin-top: 5px; color: var(--muted); font-size: 10px; letter-spacing: .04em; }
</style>
