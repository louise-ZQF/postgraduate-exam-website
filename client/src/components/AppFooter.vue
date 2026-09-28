<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <span>数学二公式知识库 · 让每一条公式都能被找到</span>
      <a href="https://github.com/louise-ZQF/postgraduate-exam-website" target="_blank" rel="noreferrer">在 GitHub 上查看源码 ↗</a>
    </div>
  </footer>
</template>

<style scoped>
.app-footer { width: 100%; border-top: 1px solid var(--line); padding: 27px 20px; background: var(--canvas); color: var(--muted); font-size: 12px; }
.footer-inner { width: min(1080px, 100%); margin: auto; display: flex; justify-content: space-between; gap: 18px; }
.footer-inner a { color: var(--accent-dark); font-weight: 650; }
.footer-inner a:hover { text-decoration: underline; }
@media (max-width: 600px) { .footer-inner { flex-direction: column; text-align: center; } }
</style>
