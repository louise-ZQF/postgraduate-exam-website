const STORAGE_KEY = 'math2-recent-searches-v1'
const MAX_RECENT_SEARCHES = 5

function clean(value: unknown): string {
  return typeof value === 'string' ? value.trim().slice(0, 30) : ''
}

function deduplicate(values: unknown[]): string[] {
  const seen = new Set<string>()
  const result: string[] = []

  for (const value of values) {
    const query = clean(value)
    const key = query.normalize('NFKC').toLowerCase()
    if (!query || seen.has(key)) continue
    seen.add(key)
    result.push(query)
    if (result.length === MAX_RECENT_SEARCHES) break
  }

  return result
}

export function readRecentSearches(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '[]')
    return Array.isArray(stored) ? deduplicate(stored) : []
  } catch {
    return []
  }
}

export function rememberSearch(value: string): string[] {
  const query = clean(value)
  if (!query) return readRecentSearches()
  const next = deduplicate([query, ...readRecentSearches()])
  if (typeof window === 'undefined') return next
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    // 浏览器禁用本地存储时仍可正常搜索。
  }
  return next
}

export function clearRecentSearches(): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // 浏览器禁用本地存储时无需处理。
  }
}
