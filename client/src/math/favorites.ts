import { legacyAnchorIds, mathFormulas, mathTopics } from '@/generated/math2-content'

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

const formulasById = new Map(mathFormulas.map((formula) => [formula.id, formula]))
const topicsById = new Map(mathTopics.map((topic) => [topic.id, topic]))
const anchorsById = new Map(mathTopics.flatMap((topic) => topic.anchors.map((anchor) => [anchor.id, { anchor, topic }] as const)))

const mergedHeadings: Record<string, string> = {
  'calculus-02-002-anchor-002': '隐函数求导',
  'calculus-02-002-anchor-003': '参数方程求导',
  'calculus-02-002-anchor-004': '反函数求导',
  'calculus-02-002-anchor-005': '幂指函数求导',
  'calculus-02-002-anchor-006': '极坐标曲线求导',
  'calculus-02-002-anchor-007': '高阶导数',
  'calculus-03-001-anchor-002': '换元与分部积分',
  'calculus-03-001-anchor-003': '有理式、根式与三角式',
  'calculus-03-001-anchor-004': '三角函数有理式的万能代换',
  'calculus-03-001-anchor-005': '部分分式分解',
  'calculus-03-001-anchor-006': '定积分性质、对称性与华里士公式',
  'calculus-03-001-anchor-007': '定义型极限与黎曼和',
  'calculus-03-001-anchor-008': '绝对值、最大最小值与分段积分',
}

function sectionBody(body: string, headings: RegExp, title: string) {
  const matches = [...body.matchAll(headings)]
  const index = matches.findIndex(match => (match[1] ?? match[2]).trim() === title)
  if (index < 0) return ''
  const heading = matches[index]
  return body.slice(heading.index + heading[0].length, matches[index + 1]?.index).trim()
}

export function favoriteTopicContent(item: MathFavorite) {
  const id = legacyAnchorIds[item.targetId] ?? item.targetId
  const found = anchorsById.get(id)
  if (found) {
    return { markdown: sectionBody(found.topic.body, /^#####[ \t]+(.+)$/gm, found.anchor.title), targetId: id }
  }
  const mergedHeading = mergedHeadings[item.targetId]
  const mergedTopic = mergedHeading && topicsById.get(item.targetId.replace(/-anchor-\d+$/, ''))
  if (mergedTopic) {
    const markdown = sectionBody(mergedTopic.body, /^(?:#####[ \t]+(.+)|\*\*([^*\n]+)\*\*[ \t]*)$/gm, mergedHeading)
    const firstFormulaId = markdown.match(/<!--\s*formula\s+[^\n]*?"id"\s*:\s*"([^"]+)"/)?.[1]
    if (markdown) return { markdown, targetId: firstFormulaId ?? mergedTopic.id }
  }
  const topic = topicsById.get(id)
  return { markdown: topic?.body ?? '', targetId: topic?.id }
}

export function favoriteDisplayTitle(item: MathFavorite): string {
  if (item.kind !== 'formula' || /\\[([]|\$/.test(item.title)) return item.title
  const integral = item.latex?.match(/^\\int(?![_^])\s*(.+?)\\,d[a-z]\s*=/s)?.[1]
  if (integral && item.title.endsWith(' 的不定积分')) return '\\(' + integral + '\\) 的不定积分'
  return item.title.replace(/(?<![\w\\])([a-zA-Z])\^(\d+|[a-zA-Z])(?![\w^])/g,
    (_, base, power) => '\\(' + base + '^{' + power + '}\\)')
}

export function favoriteTopicPreview(markdown: string) {
  const body = markdown.replace(/<!--\s*formula\s+[^\n]*?-->/g, '').trim()
  const display = body.match(/\\\[[\s\S]*?\\\]|\$\$[\s\S]*?\$\$/)
  const displayStart = display?.index ?? Infinity
  const firstParagraph = body.split(/\n\s*\n/, 1)[0]
  if (display && displayStart <= 240 && !/\n\s*\n/.test(body.slice(0, displayStart).trim())) {
    return body.slice(0, displayStart + display[0].length)
  }
  return firstParagraph.length <= 300 ? firstParagraph : ''
}

function currentFavorite(item: MathFavorite): MathFavorite {
  const targetId = legacyAnchorIds[item.targetId] ?? item.targetId
  if (item.kind === 'formula') {
    const formula = formulasById.get(targetId)
    if (!formula) return item
    return {
      ...item,
      id: formula.id,
      targetId: formula.id,
      title: formula.title,
      summary: formula.displayContext ?? '',
      context: formula.displayContext ?? '',
      latex: formula.latex,
      chapterId: formula.chapterId,
      chapterTitle: formula.chapterTitle,
      partTitle: formula.partTitle,
    }
  }
  const found = anchorsById.get(targetId)
  if (!found) return item
  return {
    ...item,
    id: found.anchor.id,
    targetId: found.anchor.id,
    title: found.anchor.title,
    summary: found.anchor.displaySummary ?? '',
    context: undefined,
    chapterId: found.topic.chapterId,
    chapterTitle: found.topic.chapterTitle,
    partTitle: found.topic.partTitle,
  }
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
  const current = items.map(currentFavorite)
  if (typeof window === 'undefined') return current
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(current))
    window.dispatchEvent(new CustomEvent(FAVORITES_CHANGED_EVENT))
  } catch {
    // 本地存储不可用时仍允许浏览。
  }
  return current
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
    return parsed.filter(validFavorite).map(currentFavorite).filter((item) => {
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
