export type Mastery = 'unfamiliar' | 'unknown' | 'mastered'
export type QuestionImage = { src: string; alt: string; width: number; height: number }
export type PracticeQuestion = {
  id: string
  year: number
  paperId?: string
  paperTitle?: string
  number: string
  examNumber?: string
  exerciseIndex?: number
  kind?: 'original' | 'exercise'
  source: string
  sourceCategory?: 'book' | 'mock'
  sourceUrl?: string
  topic: string
  type: 'choice' | 'fill' | 'solution'
  stem: string
  figures?: { src: string; alt: string; caption?: string; width: number; height: number }[]
  options?: { key: string; text: string }[]
  correctOption?: string
  answer: string
  explanation: string
  answerAvailable?: boolean
  bookId?: 'll880'
  chapterNumber?: number
  level?: '基础题' | '综合题' | '拓展题'
  questionTypes?: { id: string; title: string; references: string[] }[]
  questionImages?: QuestionImage[]
  answerImages?: QuestionImage[]
  searchText?: string
  sourceOrder?: number
}
export type QuestionProgress = { mastery?: Mastery; attemptedAt?: number; favorite?: boolean; removed?: boolean; removedAt?: number; deletedAt?: number; note: string; updatedAt: number; reviews: number }
export type PracticeProgress = Record<string, QuestionProgress>
export const PRACTICE_STORAGE_KEY = 'math2-practice-progress-v1'
export const PRACTICE_PROGRESS_SAVED_EVENT = 'math2-practice-progress-saved'
export const PRACTICE_REMOVALS_CHANGED_EVENT = 'math2-practice-removals-changed'
export const REMOVED_RETENTION_MS = 5 * 60 * 60 * 1000
export type PracticeAutoHides = Record<string, { deadline: number; previous?: QuestionProgress }>
export const practiceAutoHideKey = (collection: 'exams' | 'll880') => `math2-practice-auto-hide-v1-${collection}`

export function readPracticeAutoHides(collection: 'exams' | 'll880'): PracticeAutoHides {
  try {
    const raw = JSON.parse(localStorage.getItem(practiceAutoHideKey(collection)) ?? '{}')
    const result: PracticeAutoHides = Object.create(null)
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return result
    for (const [id, value] of Object.entries(raw)) {
      const item = value as Partial<PracticeAutoHides[string]> | null
      if (!/^[a-zA-Z0-9_-]{1,120}$/.test(id) || !item || typeof item.deadline !== 'number' || !Number.isFinite(item.deadline) || item.deadline < 0) continue
      result[id] = { deadline: item.deadline, ...(item.previous ? { previous: normalizeProgress({ [id]: item.previous })[id] } : {}) }
    }
    return result
  } catch { return Object.create(null) }
}

export function savePracticeAutoHides(collection: 'exams' | 'll880', state: PracticeAutoHides): boolean {
  try { localStorage.setItem(practiceAutoHideKey(collection), JSON.stringify(state)); return true }
  catch { return false }
}

export function normalizeProgress(value: unknown): PracticeProgress {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {}
  const result: PracticeProgress = Object.create(null)
  for (const [id, raw] of Object.entries(value)) {
    if (!/^[a-zA-Z0-9_-]{1,120}$/.test(id) || !raw || typeof raw !== 'object') continue
    const item = raw as Partial<QuestionProgress>
    if (typeof item.deletedAt === 'number' && Number.isFinite(item.deletedAt) && item.deletedAt > 0) {
      result[id] = { removed: true, deletedAt: item.deletedAt, note: '', reviews: 0, updatedAt: Math.max(item.deletedAt, typeof item.updatedAt === 'number' && Number.isFinite(item.updatedAt) ? item.updatedAt : 0) }
      continue
    }
    const mastery = ['unfamiliar', 'unknown', 'mastered'].includes(item.mastery ?? '') ? item.mastery : undefined
    result[id] = {
      mastery,
      ...(typeof item.favorite === 'boolean' ? { favorite: item.favorite } : {}),
      ...(typeof item.attemptedAt === 'number' && Number.isFinite(item.attemptedAt) && item.attemptedAt > 0 ? { attemptedAt: item.attemptedAt } : {}),
      ...(typeof item.removed === 'boolean' ? { removed: item.removed } : {}),
      ...(item.removed === true && typeof item.removedAt === 'number' && Number.isFinite(item.removedAt) && item.removedAt > 0 ? { removedAt: item.removedAt } : {}),
      note: typeof item.note === 'string' ? item.note.slice(0, 10000) : '',
      updatedAt: typeof item.updatedAt === 'number' && Number.isFinite(item.updatedAt) ? item.updatedAt : 0,
      reviews: typeof item.reviews === 'number' && Number.isFinite(item.reviews) ? Math.max(0, Math.floor(item.reviews)) : 0,
    }
  }
  return result
}

export function isPending(item?: QuestionProgress): boolean {
  return item?.mastery === 'unfamiliar' || item?.mastery === 'unknown'
}

export function hasNote(item?: QuestionProgress): boolean {
  return Boolean(item?.note?.trim())
}

export function isUnattempted(item?: QuestionProgress): boolean {
  return !item?.mastery && !item?.attemptedAt && !item?.reviews
}

export function matchesPracticeStatus(item: QuestionProgress | undefined, status: string): boolean {
  if (item?.favorite) return true
  if (status === 'all') return true
  if (status === 'pending') return isPending(item)
  if (status === 'unmarked') return isUnattempted(item)
  return item?.mastery === status
}

export function mergeProgress(current: PracticeProgress, incoming: PracticeProgress): PracticeProgress {
  const result = normalizeProgress(current)
  for (const [id, item] of Object.entries(normalizeProgress(incoming))) {
    if (result[id]?.deletedAt) {
      if (item.deletedAt && item.deletedAt > result[id].deletedAt!) result[id] = item
    } else if (item.deletedAt || !result[id] || item.updatedAt >= result[id].updatedAt) {
      result[id] = item.removed && !item.removedAt && result[id]?.removedAt ? { ...item, removedAt: result[id].removedAt } : item
    }
  }
  return result
}

export function cleanExpiredRemovals(value: PracticeProgress, now = Date.now()) {
  const progress = normalizeProgress(value)
  let changed = false
  let nextDeadline: number | undefined
  const deletedIds: string[] = []
  for (const [id, item] of Object.entries(progress)) {
    if (!item.removed || item.deletedAt) continue
    if (!item.removedAt) {
      // 旧记录没有移除时间，首次迁移时给予完整的 5 小时恢复期。
      item.removedAt = now
      item.updatedAt = Math.max(now, item.updatedAt)
      changed = true
    }
    const deadline = item.removedAt + REMOVED_RETENTION_MS
    if (now >= deadline) {
      progress[id] = { removed: true, deletedAt: deadline, note: '', reviews: 0, updatedAt: Math.max(now, item.updatedAt) }
      deletedIds.push(id)
      changed = true
    } else nextDeadline = nextDeadline === undefined ? deadline : Math.min(nextDeadline, deadline)
  }
  return { progress, changed, nextDeadline, deletedIds }
}

export function readPracticeProgress(): PracticeProgress {
  try { return normalizeProgress(JSON.parse(localStorage.getItem(PRACTICE_STORAGE_KEY) ?? '{}')) }
  catch { return {} }
}

export function savePracticeProgress(progress: PracticeProgress): boolean {
  try {
    localStorage.setItem(PRACTICE_STORAGE_KEY, JSON.stringify(progress))
    if (typeof window !== 'undefined') window.dispatchEvent(new Event(PRACTICE_PROGRESS_SAVED_EVENT))
    return true
  }
  catch { return false }
}
