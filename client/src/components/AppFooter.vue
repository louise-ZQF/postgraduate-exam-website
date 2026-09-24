<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <span>数学二知识库 · 公式、结论与常见函数图像</span>
      <a href="https://github.com/louise-ZQF/postgraduate-exam-website" target="_blank" rel="noreferrer">在 GitHub 上查看源码 ↗</a>
    </div>
  </footer>
</template>

<style scoped>
.app-footer { width: 100%; border-top: 1px solid #d7e2dc; padding: 27px 20px; background: #eaf0ec; color: #74857b; font-size: 11px; }
.footer-inner { width: min(1080px, 100%); margin: auto; display: flex; justify-content: space-between; gap: 18px; }
.footer-inner a { color: #315f49; font-weight: 650; }
.footer-inner a:hover { color: #174b36; }
@media (max-width: 600px) { .footer-inner { flex-direction: column; text-align: center; } }
</style>
