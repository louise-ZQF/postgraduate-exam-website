<template>
  <RouterLink to="/" aria-label="返回数学二学习空间首页" class="brand">
    <span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M8 5h17M8 27h17M22 5l-11 11 11 11" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>
    <b>数学二学习空间</b>
  </RouterLink>
</template>

<style scoped>
.brand { display: inline-flex; align-items: center; gap: 9px; width: max-content; min-height: 44px; color: var(--ink); }
.brand-mark { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 6px; background: var(--accent-tint); color: var(--accent); }
.brand-mark svg { width: 21px; height: 21px; }
b { font-size: 15px; font-weight: 680; letter-spacing: -.015em; }
</style>
