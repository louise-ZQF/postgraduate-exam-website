import { onBeforeUnmount, onMounted, type Ref } from 'vue'
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { savePracticeLocation, type PracticeCollection, type PracticeLocation } from '@/math/practiceLocation'

export function usePracticePosition(options: {
  collection: PracticeCollection
  paused: Readonly<Ref<boolean>>
  capture: (id: string, element: HTMLElement) => PracticeLocation | undefined
  onFinish: () => void
  onFailure: () => void
}) {
  let tracking = false
  let active = true
  let timer: number | undefined
  let scrollUntil = 0

  function remember(id: string) {
    if (!active || options.paused.value) return
    const element = document.getElementById(id)
    const location = element ? options.capture(id, element) : undefined
    if (location && !savePracticeLocation(options.collection, location)) options.onFailure()
  }
  function rememberViewport() {
    if (!tracking || options.paused.value) return
    const anchor = Math.min(120, window.innerHeight / 5)
    const card = Array.from(document.querySelectorAll<HTMLElement>('#practice-main .question-card')).find(element => {
      const rect = element.getBoundingClientRect()
      return rect.bottom > anchor && rect.top < window.innerHeight
    })
    if (card) remember(card.id)
  }
  function schedule(event?: Event) {
    if (!tracking || options.paused.value || (event?.type === 'scroll' && performance.now() > scrollUntil)) return
    if (timer) window.clearTimeout(timer)
    timer = window.setTimeout(() => { timer = undefined; rememberViewport(); scrollUntil = 0 }, 250)
  }
  function enable() { tracking = true; rememberViewport(); scrollUntil = performance.now() + 800 }
  function pauseNavigation(event: PointerEvent) {
    if (!(event.target as HTMLElement).closest?.('a, .directory button')) return
    if (timer) window.clearTimeout(timer)
    timer = undefined; scrollUntil = 0; tracking = false
  }
  function interaction(event: Event) {
    const card = (event.target as HTMLElement).closest?.('.question-card') as HTMLElement | null
    if (!card || options.paused.value) return
    if (event.type === 'pointerdown') tracking = true
    if (tracking) remember(card.id)
  }
  function keydown(event: KeyboardEvent) {
    if (event.key === 'Tab') { tracking = true; return }
    if ((event.target as HTMLElement).closest?.('input, textarea, select')) return
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) enable()
  }
  function finish() {
    if (options.paused.value) return
    if (timer) { window.clearTimeout(timer); rememberViewport() }
    timer = undefined; scrollUntil = 0; tracking = false
    options.onFinish()
  }
  onBeforeRouteLeave(finish)
  onBeforeRouteUpdate(finish)
  onMounted(() => {
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('wheel', enable, { passive: true })
    window.addEventListener('touchmove', enable, { passive: true })
    window.addEventListener('keydown', keydown)
    window.addEventListener('pointerdown', pauseNavigation, true)
    window.addEventListener('pagehide', rememberViewport)
  })
  onBeforeUnmount(() => {
    finish(); active = false
    if (timer) window.clearTimeout(timer)
    window.removeEventListener('scroll', schedule)
    window.removeEventListener('wheel', enable)
    window.removeEventListener('touchmove', enable)
    window.removeEventListener('keydown', keydown)
    window.removeEventListener('pointerdown', pauseNavigation, true)
    window.removeEventListener('pagehide', rememberViewport)
  })
  return { interaction, schedule, finish, isActive: () => active, remember: (id: string) => { tracking = true; remember(id) } }
}
