<template>
  <RouterLink to="/" aria-label="返回数学二知识库首页" class="brand">
    <span class="mark" aria-hidden="true">
      <svg viewBox="0 0 44 34"><path d="M4 27 15 8l9 19L34 5l6 22"/><path d="M8 23h31"/></svg>
    </span>
    <span><b>数学二知识库</b><small>MATH Ⅱ INDEX</small></span>
  </RouterLink>
</template>

<style scoped>
.brand { display: inline-flex; align-items: center; gap: 11px; width: max-content; color: #153a2a; }
.mark { position: relative; display: grid; width: 38px; height: 38px; place-items: center; overflow: hidden; border: 1px solid rgba(255,255,255,.22); border-radius: 11px; background: linear-gradient(145deg, #2f7455, #174936); color: white; box-shadow: 0 7px 18px rgba(25,75,52,.2); }
.mark::after { position: absolute; top: -12px; right: -8px; width: 26px; height: 26px; border-radius: 50%; content: ''; background: rgba(255,255,255,.12); }
.mark svg { position: relative; z-index: 1; width: 28px; fill: none; stroke: currentColor; stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round; }
.brand > span:last-child { display: grid; line-height: 1.05; }
b { font-size: 15px; letter-spacing: .035em; }
small { margin-top: 5px; color: #73877b; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 8px; font-weight: 700; letter-spacing: .14em; }
</style>
