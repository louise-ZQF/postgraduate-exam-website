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
const historyKey = (collection: PracticeCollection) => `math2-practice-location-history-v1-${collection}`
const validId = (value: unknown): value is string => typeof value === 'string' && /^[a-zA-Z0-9_-]{1,120}$/.test(value)

export function practiceLocationContext(location: PracticeLocation): string {
  const view = location.view === 'review' && location.status === 'favorites' ? 'favorites' : location.view
  return view === 'all' ? `${view}:${location.paper || location.year}` : view
}

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
  return readPracticeLocations(collection)[0]
}

export function readPracticeLocations(collection: PracticeCollection): PracticeLocation[] {
  try {
    const raw = JSON.parse(localStorage.getItem(historyKey(collection)) ?? 'null')
    if (Array.isArray(raw)) {
      const seen = new Set<string>()
      const locations = raw.map(normalizePracticeLocation).filter((item): item is PracticeLocation => {
        if (!item || seen.has(practiceLocationContext(item))) return false
        seen.add(practiceLocationContext(item))
        return true
      }).slice(0, 2)
      if (locations.length) return locations
    }
  } catch { /* 旧版单条记录仍可恢复。 */ }
  try {
    const legacy = normalizePracticeLocation(JSON.parse(localStorage.getItem(locationKey(collection)) ?? 'null'))
    return legacy ? [legacy] : []
  } catch { return [] }
}

export function savePracticeLocation(collection: PracticeCollection, location: PracticeLocation): boolean {
  const current = normalizePracticeLocation(location)
  if (!current) return false
  // 同一试卷、笔记集合内的连续操作只更新当前位置，防止滚动和输入挤掉上一次做题记录。
  const history = [current, ...readPracticeLocations(collection).filter(item => practiceLocationContext(item) !== practiceLocationContext(current))].slice(0, 2)
  try {
    localStorage.setItem(historyKey(collection), JSON.stringify(history))
    localStorage.setItem(locationKey(collection), JSON.stringify(current))
    return true
  }
  catch { return false }
}
