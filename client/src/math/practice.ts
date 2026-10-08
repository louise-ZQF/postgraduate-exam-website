export type Mastery = 'unfamiliar' | 'unknown' | 'mastered'
export type PracticeQuestion = {
  id: string
  year: number
  number: string
  examNumber?: string
  exerciseIndex?: number
  source: string
  topic: string
  type: 'choice' | 'fill' | 'solution'
  stem: string
  options?: { key: string; text: string }[]
  correctOption?: string
  answer: string
  explanation: string
}
export type QuestionProgress = { mastery?: Mastery; note: string; updatedAt: number; reviews: number }
export type PracticeProgress = Record<string, QuestionProgress>
export const PRACTICE_STORAGE_KEY = 'math2-practice-progress-v1'

export function normalizeProgress(value: unknown): PracticeProgress {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {}
  const result: PracticeProgress = Object.create(null)
  for (const [id, raw] of Object.entries(value)) {
    if (!/^[a-zA-Z0-9_-]{1,120}$/.test(id) || !raw || typeof raw !== 'object') continue
    const item = raw as Partial<QuestionProgress>
    const mastery = ['unfamiliar', 'unknown', 'mastered'].includes(item.mastery ?? '') ? item.mastery : undefined
    result[id] = {
      mastery,
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

export function mergeProgress(current: PracticeProgress, incoming: PracticeProgress): PracticeProgress {
  const result = normalizeProgress(current)
  for (const [id, item] of Object.entries(normalizeProgress(incoming))) {
    if (!result[id] || item.updatedAt >= result[id].updatedAt) result[id] = item
  }
  return result
}

export function readPracticeProgress(): PracticeProgress {
  try { return normalizeProgress(JSON.parse(localStorage.getItem(PRACTICE_STORAGE_KEY) ?? '{}')) }
  catch { return {} }
}

export function savePracticeProgress(progress: PracticeProgress): boolean {
  try { localStorage.setItem(PRACTICE_STORAGE_KEY, JSON.stringify(progress)); return true }
  catch { return false }
}
