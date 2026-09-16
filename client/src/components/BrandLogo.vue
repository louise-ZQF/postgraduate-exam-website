<template>
  <RouterLink to="/" aria-label="返回数学二知识库首页" class="brand">
    <span class="mark" aria-hidden="true">
      <svg viewBox="0 0 44 34"><path d="M4 27 15 8l9 19L34 5l6 22"/><path d="M8 23h31"/></svg>
    </span>
    <span><b>数学二知识库</b><small>MATH Ⅱ INDEX</small></span>
  </RouterLink>
</template>

<style scoped>
.brand { display: inline-flex; align-items: center; gap: 10px; width: max-content; color: #1b3d2a; }
.mark { display: grid; width: 35px; height: 35px; place-items: center; border-radius: 8px; background: #285c42; color: white; box-shadow: 0 5px 14px rgba(40,92,66,.18); }
.mark svg { width: 27px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.brand > span:last-child { display: grid; line-height: 1.05; }
b { font-size: 14px; letter-spacing: .04em; }
small { margin-top: 5px; color: #7d8c81; font-family: Manrope, sans-serif; font-size: 8px; font-weight: 700; letter-spacing: .16em; }
</style>
