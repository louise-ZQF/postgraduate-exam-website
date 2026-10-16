<template>
  <RouterLink to="/" aria-label="返回数学二公式知识库搜索首页" class="brand">
    <span class="brand-rule" aria-hidden="true"></span>
    <span><b>数学二公式知识库</b><small>公式 · 结论 · 待背</small></span>
  </RouterLink>
</template>

<style scoped>
.brand { display: inline-flex; align-items: center; gap: 12px; width: max-content; min-height: 44px; color: var(--ink); }
.brand-rule { width: 5px; height: 36px; border-radius: 4px; background: var(--accent); }
.brand > span:last-child { display: grid; line-height: 1.1; }
b { font-size: 17px; font-weight: 750; letter-spacing: .01em; }
small { margin-top: 4px; color: var(--muted); font-size: 11px; letter-spacing: .08em; }
</style>
