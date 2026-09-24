import { createRouter, createWebHashHistory } from "vue-router";
import { ref } from "vue";

/**
 * GitHub Pages 是纯静态托管，不支持 SPA history 模式的任意路径 rewrite：
 *   - 用户直接访问 /postgraduate-exam-website/knowledge/os/mutex 会 404
 *   - 切到 createWebHashHistory，路由信息放在 # 之后（/#/knowledge/os/mutex），
 *     服务器只取 # 之前的路径请求 index.html，SPA 自解析 # 后内容，一切正常。
 */

/** 路由跳转中（含懒加载 chunk 下载）的全局状态，给顶部进度条用 */
export const isNavigating = ref(false)

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) return savedPosition
    const section = String(to.query.section ?? '')
    if (/^[a-z0-9-]+$/.test(section)) return { el: `#${section}`, top: 88 }
    if (to.path === from.path) return undefined
    return { top: 0 }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomePage.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("@/views/SearchPage.vue"),
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("@/views/FavoritesPage.vue"),
    },
    {
      path: "/graphs",
      name: "graphs",
      component: () => import("@/views/FunctionGraphsPage.vue"),
    },
    {
      path: "/knowledge/:chapterId?/:topicId?",
      name: "knowledge",
      component: () => import("@/views/KnowledgePage.vue"),
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
});

router.beforeEach(() => {
  isNavigating.value = true
})
router.afterEach(() => {
  isNavigating.value = false
})
router.onError(() => {
  isNavigating.value = false
})

export default router
