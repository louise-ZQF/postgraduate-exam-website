import { onBeforeUnmount, onMounted } from 'vue'
import { cleanExpiredRemovals, PRACTICE_PROGRESS_SAVED_EVENT, PRACTICE_REMOVALS_CHANGED_EVENT, PRACTICE_STORAGE_KEY, readPracticeProgress, savePracticeProgress } from '@/math/practice'

export function usePracticeRemovalCleanup() {
  let timer: number | undefined
  let running = false

  function clean() {
    if (running) return
    if (timer !== undefined) window.clearTimeout(timer)
    timer = undefined
    // 到期时重新读取，防止其他标签页刚恢复的题被旧状态清理。
    const result = cleanExpiredRemovals(readPracticeProgress())
    if (result.changed) {
      running = true
      const saved = savePracticeProgress(result.progress)
      running = false
      // 等当前标记操作完成再更新列表，保留其 30 秒隐藏缓冲。
      queueMicrotask(() => window.dispatchEvent(new CustomEvent(PRACTICE_REMOVALS_CHANGED_EVENT, { detail: { saved, deletedIds: result.deletedIds } })))
      if (!saved) return
    }
    if (result.nextDeadline !== undefined) timer = window.setTimeout(clean, Math.max(0, Math.min(result.nextDeadline - Date.now(), 2_147_483_647)))
  }
  function sync(event: StorageEvent) { if (event.key === PRACTICE_STORAGE_KEY || event.key === null) clean() }
  function visible() { if (!document.hidden) clean() }

  onMounted(() => {
    window.addEventListener(PRACTICE_PROGRESS_SAVED_EVENT, clean)
    window.addEventListener('storage', sync)
    window.addEventListener('pageshow', clean)
    window.addEventListener('focus', clean)
    document.addEventListener('visibilitychange', visible)
    clean()
  })
  onBeforeUnmount(() => {
    if (timer !== undefined) window.clearTimeout(timer)
    window.removeEventListener(PRACTICE_PROGRESS_SAVED_EVENT, clean)
    window.removeEventListener('storage', sync)
    window.removeEventListener('pageshow', clean)
    window.removeEventListener('focus', clean)
    document.removeEventListener('visibilitychange', visible)
  })
}
