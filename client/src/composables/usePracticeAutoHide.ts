import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'
import { readPracticeAutoHides, savePracticeAutoHides, type PracticeAutoHides, type PracticeProgress, type QuestionProgress } from '@/math/practice'
import type { PracticeCollection } from '@/math/practiceLocation'

export function usePracticeAutoHide(options: {
  collection: PracticeCollection
  progress: Readonly<Ref<PracticeProgress>>
  paused: Ref<boolean>
  demo: Ref<boolean>
  isKnown: (id: string) => boolean
  isRemovedView: () => boolean
  onHide: (id: string) => void
  onFailure: () => void
}) {
  const deadlines = ref<Record<string, number>>({})
  const hidden = ref(new Set<string>())
  const timers = new Map<string, number>()
  const previous = new Map<string, QuestionProgress | undefined>()

  function cancel(id: string) {
    const timer = timers.get(id)
    if (timer !== undefined) window.clearTimeout(timer)
    timers.delete(id)
    previous.delete(id)
    delete deadlines.value[id]
  }
  function save() {
    if (options.demo.value) return
    const state: PracticeAutoHides = Object.fromEntries([...hidden.value].map(id => [id, { deadline: 0 }]))
    for (const [id, deadline] of Object.entries(deadlines.value)) state[id] = { deadline, previous: previous.get(id) }
    if (!savePracticeAutoHides(options.collection, state)) options.onFailure()
  }
  const eligible = (id: string) => {
    const item = options.progress.value[id]
    return options.isKnown(id) && item?.mastery === 'mastered' && !item.removed && !item.favorite
  }
  function hide(id: string) {
    if (options.paused.value) return
    cancel(id)
    if (!eligible(id)) return
    hidden.value.add(id)
    options.onHide(id)
    save()
  }
  function restore() {
    for (const id of timers.keys()) cancel(id)
    hidden.value.clear()
    for (const [id, item] of Object.entries(readPracticeAutoHides(options.collection))) {
      if (!eligible(id)) continue
      if (item.deadline <= Date.now()) hidden.value.add(id)
      else {
        previous.set(id, item.previous)
        deadlines.value[id] = item.deadline
        timers.set(id, window.setTimeout(() => hide(id), item.deadline - Date.now()))
      }
    }
  }
  function schedule(id: string, prior: QuestionProgress | undefined) {
    cancel(id)
    if (options.isRemovedView() || !eligible(id)) { save(); return }
    previous.set(id, prior)
    deadlines.value[id] = Date.now() + 30_000
    timers.set(id, window.setTimeout(() => hide(id), 30_000))
    save()
  }
  function flush() {
    if (document.hidden || options.paused.value) return
    for (const [id, deadline] of Object.entries(deadlines.value)) if (Date.now() >= deadline) hide(id)
  }
  function reconcile() {
    for (const id of [...hidden.value, ...Object.keys(deadlines.value)]) {
      if (!eligible(id)) { hidden.value.delete(id); cancel(id) }
    }
  }
  function reveal() { hidden.value.clear(); save() }

  onMounted(() => document.addEventListener('visibilitychange', flush))
  onBeforeUnmount(() => {
    document.removeEventListener('visibilitychange', flush)
    for (const id of timers.keys()) cancel(id)
  })
  return { deadlines, hidden, previous, cancel, save, restore, schedule, flush, reconcile, reveal }
}
