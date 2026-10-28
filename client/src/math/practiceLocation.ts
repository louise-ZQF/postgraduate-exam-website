export type PracticeCollection = 'exams' | 'll880'
export type PracticeLocation = {
  questionId: string
  view: 'all' | 'review' | 'notes' | 'removed'
  year: string
  paper: string
  status: string
  type: string
  level: string
  keyword: string
  offset: number
  updatedAt: number
}

const locationKey = (collection: PracticeCollection) => `math2-practice-location-v1-${collection}`
const validId = (value: unknown): value is string => typeof value === 'string' && /^[a-zA-Z0-9_-]{1,120}$/.test(value)

export function normalizePracticeLocation(value: unknown): PracticeLocation | undefined {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return
  const item = value as Partial<PracticeLocation>
  if (!validId(item.questionId)) return
  return {
    questionId: item.questionId,
    view: ['review', 'notes', 'removed'].includes(item.view ?? '') ? item.view as PracticeLocation['view'] : 'all',
    year: typeof item.year === 'string' && /^(19|20)\d{2}$/.test(item.year) ? item.year : '',
    paper: validId(item.paper) ? item.paper : '',
    status: ['all', 'pending', 'unmarked', 'favorites', 'mastered', 'unknown', 'unfamiliar'].includes(item.status ?? '') ? item.status! : 'all',
    type: validId(item.type) ? item.type : 'all',
    level: ['基础题', '综合题', '拓展题'].includes(item.level ?? '') ? item.level! : 'all',
    keyword: typeof item.keyword === 'string' ? item.keyword.slice(0, 80) : '',
    offset: typeof item.offset === 'number' && Number.isFinite(item.offset) ? Math.max(-2000, Math.min(100000, item.offset)) : 0,
    updatedAt: typeof item.updatedAt === 'number' && Number.isFinite(item.updatedAt) ? Math.max(0, item.updatedAt) : 0,
  }
}

export function readPracticeLocation(collection: PracticeCollection): PracticeLocation | undefined {
  try { return normalizePracticeLocation(JSON.parse(localStorage.getItem(locationKey(collection)) ?? 'null')) }
  catch { return }
}

export function savePracticeLocation(collection: PracticeCollection, location: PracticeLocation): boolean {
  try { localStorage.setItem(locationKey(collection), JSON.stringify(location)); return true }
  catch { return false }
}
