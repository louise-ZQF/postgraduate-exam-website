const STORAGE_KEY = 'math2-favorites-v1'
export const FAVORITES_CHANGED_EVENT = 'math2-favorites-changed'

export type MathFavorite = {
  id: string
  title: string
  summary: string
  chapterId: string
  chapterTitle: string
  partTitle: string
  addedAt: number
}

function validFavorite(value: unknown): value is MathFavorite {
  if (!value || typeof value !== 'object') return false
  const item = value as Partial<MathFavorite>
  return typeof item.id === 'string'
    && typeof item.title === 'string'
    && typeof item.summary === 'string'
    && typeof item.chapterId === 'string'
    && typeof item.chapterTitle === 'string'
    && typeof item.partTitle === 'string'
    && typeof item.addedAt === 'number'
}

function writeFavorites(items: MathFavorite[]): MathFavorite[] {
  if (typeof window === 'undefined') return items
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    window.dispatchEvent(new CustomEvent(FAVORITES_CHANGED_EVENT))
  } catch {
    // 浏览器禁用本地存储时不影响正文浏览。
  }
  return items
}

export function readFavorites(): MathFavorite[] {
  if (typeof window === 'undefined') return []
  try {
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '[]')
    if (!Array.isArray(stored)) return []
    const seen = new Set<string>()
    return stored
      .filter(validFavorite)
      .filter((item) => {
        if (seen.has(item.id)) return false
        seen.add(item.id)
        return true
      })
  } catch {
    return []
  }
}

export function addFavorite(item: Omit<MathFavorite, 'addedAt'>): MathFavorite[] {
  const current = readFavorites().filter((favorite) => favorite.id !== item.id)
  return writeFavorites([{ ...item, addedAt: Date.now() }, ...current])
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
