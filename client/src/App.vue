<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppFooter from '@/components/AppFooter.vue'
import { isNavigating } from '@/router'
import { usePracticeRemovalCleanup } from '@/composables/usePracticeRemovalCleanup'

usePracticeRemovalCleanup()

const route = useRoute()
const showLoading = ref(false)
let loadingTimer: number | undefined

function clearLoadingTimer() {
  if (loadingTimer !== undefined) window.clearTimeout(loadingTimer)
  loadingTimer = undefined
}

watch(isNavigating, (pending) => {
  clearLoadingTimer()
  if (pending) loadingTimer = window.setTimeout(() => { showLoading.value = true }, 160)
  else showLoading.value = false
}, { immediate: true })

onBeforeUnmount(clearLoadingTimer)
</script>

<template>
  <RouterView />
  <AppFooter />

  <Transition name="route-progress">
    <div v-if="showLoading" class="route-progress" role="status">
      <div class="route-progress-track" aria-hidden="true"></div>
      <span :class="route.matched.length ? 'route-loading-announcement' : 'route-loading-center'">正在加载页面…</span>
    </div>
  </Transition>
</template>

<style scoped>
.route-progress { position: fixed; inset: 0; z-index: 9999; pointer-events: none; }
.route-progress-track { height: 3px; overflow: hidden; background: var(--accent-tint); }
.route-progress-track::after { display: block; width: 36%; height: 100%; background: var(--accent); content: ''; animation: route-slide 1.2s ease-in-out infinite; }
@keyframes route-slide { from { transform: translateX(-100%); } to { transform: translateX(280%); } }
.route-progress-leave-active { transition: opacity 140ms ease-out; }
.route-progress-leave-to { opacity: 0; }
.route-loading-announcement { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
.route-loading-center { position: absolute; top: 42%; width: 100%; text-align: center; color: var(--ink-soft); font-size: 14px; }
</style>
