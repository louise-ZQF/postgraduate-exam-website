<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <span>数学二知识库 · 公式、结论与题型索引</span>
      <a href="https://github.com/louise-ZQF/postgraduate-exam-website" target="_blank" rel="noreferrer">在 GitHub 上查看源码 ↗</a>
    </div>
  </footer>
</template>

<style scoped>
.app-footer { width: 100%; border-top: 1px solid #e0e6e0; padding: 24px 20px; background: #f2f5f0; color: #879289; font-size: 11px; }
.footer-inner { width: min(1050px, 100%); margin: auto; display: flex; justify-content: space-between; gap: 18px; }
.footer-inner a { color: #496b58; }
@media (max-width: 600px) { .footer-inner { flex-direction: column; text-align: center; } }
</style>
