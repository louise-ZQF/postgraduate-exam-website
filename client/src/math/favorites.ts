import { legacyAnchorIds } from '@/generated/math2-content'

const STORAGE_KEY = 'math2-favorites-v2'
const LEGACY_KEY = 'math2-favorites-v1'
export const FAVORITES_CHANGED_EVENT = 'math2-favorites-changed'

export type MathFavorite = {
  id: string
  targetId: string
  kind: 'formula' | 'topic'
  title: string
  summary: string
  chapterId: string
  chapterTitle: string
  partTitle: string
  latex?: string
  context?: string
  addedAt: number
}

function validFavorite(value: unknown): value is MathFavorite {
  if (!value || typeof value !== 'object') return false
  const item = value as Partial<MathFavorite>
  return typeof item.id === 'string' && typeof item.targetId === 'string'
    && (item.kind === 'formula' || item.kind === 'topic')
    && typeof item.title === 'string' && typeof item.summary === 'string'
    && typeof item.chapterId === 'string' && typeof item.chapterTitle === 'string'
    && typeof item.partTitle === 'string' && typeof item.addedAt === 'number'
}

function writeFavorites(items: MathFavorite[]): MathFavorite[] {
  if (typeof window === 'undefined') return items
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    window.dispatchEvent(new CustomEvent(FAVORITES_CHANGED_EVENT))
  } catch {
    // 本地存储不可用时仍允许浏览。
  }
  return items
}

export function readFavorites(): MathFavorite[] {
  if (typeof window === 'undefined') return []
  try {
    let stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === null) {
      const legacy = JSON.parse(window.localStorage.getItem(LEGACY_KEY) ?? '[]')
      const migrated = Array.isArray(legacy) ? legacy.filter((item) => item && typeof item.id === 'string').map((item) => ({
        ...item,
        id: legacyAnchorIds[item.id] ?? item.id,
        targetId: legacyAnchorIds[item.id] ?? item.id,
        kind: 'topic' as const,
      })) : []
      writeFavorites(migrated.filter(validFavorite))
      stored = window.localStorage.getItem(STORAGE_KEY)
    }
    const parsed = JSON.parse(stored ?? '[]')
    if (!Array.isArray(parsed)) return []
    const seen = new Set<string>()
    return parsed.filter(validFavorite).filter((item) => {
      if (seen.has(item.id)) return false
      seen.add(item.id)
      return true
    })
  } catch {
    return []
  }
}

export function removeFavorite(id: string): MathFavorite[] {
  return writeFavorites(readFavorites().filter((item) => item.id !== id))
}

export function toggleFavorite(item: Omit<MathFavorite, 'addedAt'>): MathFavorite[] {
  const current = readFavorites()
  return current.some((favorite) => favorite.id === item.id)
    ? writeFavorites(current.filter((favorite) => favorite.id !== item.id))
    : writeFavorites([{ ...item, addedAt: Date.now() }, ...current])
}
