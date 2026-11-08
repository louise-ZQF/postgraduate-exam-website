const missedPointLabel = '之前没有注意的点'
export const MISSED_POINT_MASTERY = 'missed-point'
export const MISSED_POINT_FAVORITE = 'favorite-missed-point'
export const manualErrorReasons = ['no-idea', 'calculation-error', MISSED_POINT_MASTERY] as const
export const masteryLabels = {
  'no-idea': '没思路', 'calculation-error': '计算错误', [MISSED_POINT_MASTERY]: missedPointLabel,
  wrong: '错因待标', mastered: '掌握',
} as const
export type Mastery = keyof typeof masteryLabels
type MistakeReason = Exclude<Mastery, 'mastered'>
export type ManualMastery = Exclude<Mastery, 'wrong'>
export const favoriteReasonLabels = {
  'favorite-idea': '思路值得收藏',
  'favorite-calculation': '新的计算手法',
  'favorite-hard': '难题多看',
  [MISSED_POINT_FAVORITE]: missedPointLabel,
} as const
export type FavoriteReason = keyof typeof favoriteReasonLabels
export const practiceStatusLabels = {
  all: '全部题目', unmarked: '未做过', pending: '我的错题', favorites: '收藏',
  ...masteryLabels, mastered: '已掌握', ...favoriteReasonLabels,
} as const
export type PracticeStatus = keyof typeof practiceStatusLabels

function normalizeMastery(value: unknown): Mastery | undefined {
  // 旧版的「不会」也可能来自自动判错，不能还原成某一种具体错因。
  if (value === 'unknown' || value === 'unfamiliar') return 'wrong'
  if (typeof value === 'string' && Object.hasOwn(masteryLabels, value)) return value as Mastery
}

export function isFavoriteReason(value: unknown): value is FavoriteReason {
  return typeof value === 'string' && Object.hasOwn(favoriteReasonLabels, value)
}

export function isFavoriteFilter(status: PracticeStatus): boolean {
  return status === 'favorites' || isFavoriteReason(status)
}

export function normalizePracticeStatus(value: unknown): PracticeStatus {
  if (typeof value === 'string' && Object.hasOwn(practiceStatusLabels, value)) return value as PracticeStatus
  return normalizeMastery(value) ?? 'all'
}
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
export type QuestionProgress = { mastery?: Mastery; mistakeReason?: MistakeReason; attemptedAt?: number; favorite?: boolean; favoriteReasons?: FavoriteReason[]; removed?: boolean; removedAt?: number; deletedAt?: number; note: string; updatedAt: number; reviews: number }
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
    const mastery = normalizeMastery(item.mastery)
    const mistakeReason = normalizeMastery(item.mistakeReason)
    const reasons = item.favorite !== false && Array.isArray(item.favoriteReasons) ? [...new Set(item.favoriteReasons.filter(isFavoriteReason))] : []
    const favorite = reasons.length ? true : typeof item.favorite === 'boolean' ? item.favorite : undefined
    result[id] = {
      mastery,
      ...(mistakeReason && mistakeReason !== 'mastered' ? { mistakeReason } : {}),
      ...(favorite !== undefined ? { favorite } : {}),
      ...(reasons.length ? { favoriteReasons: reasons } : {}),
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

export function getMistakeReason(item?: QuestionProgress): MistakeReason | undefined {
  if (item?.mistakeReason) return item.mistakeReason
  if (item?.mastery && item.mastery !== 'mastered') return item.mastery
}

export function isPending(item?: QuestionProgress): boolean {
  return Boolean(getMistakeReason(item))
}

export function hasNote(item?: QuestionProgress): boolean {
  return Boolean(item?.note?.trim())
}

export function isUnattempted(item?: QuestionProgress): boolean {
  return !item?.mastery && !item?.attemptedAt && !item?.reviews
}

export function matchesPracticeStatus(item: QuestionProgress | undefined, status: PracticeStatus): boolean {
  if (status === 'all') return true
  if (status === 'pending') return isPending(item)
  if (status === 'unmarked') return isUnattempted(item)
  if (status === 'favorites') return item?.favorite === true
  if (isFavoriteReason(status)) return item?.favorite === true && Boolean(item.favoriteReasons?.includes(status))
  return status === 'mastered' ? item?.mastery === 'mastered' : getMistakeReason(item) === status
}

export function togglePracticeFavorite(item: QuestionProgress, reason?: FavoriteReason): Pick<QuestionProgress, 'favorite' | 'favoriteReasons'> {
  const previous = item.favoriteReasons ?? []
  const reasons: FavoriteReason[] = reason ? previous.includes(reason) ? previous.filter(value => value !== reason) : [...previous, reason] : []
  return { favorite: reasons.length > 0, favoriteReasons: reasons.length ? reasons : undefined }
}

export function practiceMasteryPatch(item: QuestionProgress, mastery: Mastery): Pick<QuestionProgress, 'mastery' | 'mistakeReason' | 'favorite' | 'favoriteReasons'> {
  const previousReason = getMistakeReason(item)
  if (mastery === 'mastered') return { mastery, mistakeReason: previousReason }
  if (mastery === MISSED_POINT_MASTERY) {
    const reasons = item.favoriteReasons ?? []
    return {
      mastery,
      mistakeReason: mastery,
      favorite: true,
      favoriteReasons: reasons.includes(MISSED_POINT_FAVORITE) ? reasons : [...reasons, MISSED_POINT_FAVORITE],
    }
  }
  const reason = mastery === 'wrong' ? previousReason ?? mastery : mastery
  return { mastery: reason, mistakeReason: reason }
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
