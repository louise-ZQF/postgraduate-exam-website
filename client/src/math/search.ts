import { mathTopics } from '@/generated/math2-content'
import type { MathSearchResult } from './types'

const SYNONYM_GROUPS = [
  ['判断', '判定'],
  ['求导', '导数', '微分'],
  ['不定积分', '原函数'],
  ['定积分', '牛顿-莱布尼茨公式'],
  ['相似对角化判断', '相似对角化判定', '判断矩阵能否相似对角化', '相似对角化', '对角化'],
  ['特征向量', '特征矢量'],
  ['线性无关', '无关'],
  ['线性相关', '相关'],
  ['同解', '解相同'],
]

export function normalizeMathQuery(value: string): string {
  return value
    .normalize('NFKC')
    .toLowerCase()
    .replace(/判断/g, '判定')
    .replace(/特征矢量/g, '特征向量')
    .replace(/[\s　、，,。.；;:：()（）\[\]【】]/g, '')
}

function queryTerms(query: string): string[] {
  const raw = query.trim()
  const terms = new Set<string>([raw, normalizeMathQuery(raw)])
  const compact = raw.replace(/[\s　]+/g, '')
  if (compact.length >= 2) terms.add(compact)

  for (const group of SYNONYM_GROUPS) {
    const matched = group.find((item) => raw.includes(item))
    if (!matched) continue
    group.forEach((item) => terms.add(raw.replace(matched, item)))
  }

  raw.split(/[\s　、，,。.\/；;:：]+/).filter((item) => item.length >= 2).forEach((item) => terms.add(item))

  // 中文搜索通常不会加空格。补充 2—6 字连续片段，使“参数方程二阶导数”
  // 能命中“参数方程的一阶和二阶求导公式”，同时保留完整短语的最高权重。
  for (const value of [...terms]) {
    const normalized = normalizeMathQuery(value)
    for (const match of normalized.matchAll(/[\u3400-\u9fff]+/g)) {
      const text = match[0]
      for (let length = 2; length <= Math.min(6, text.length); length++) {
        for (let start = 0; start + length <= text.length; start++) {
          terms.add(text.slice(start, start + length))
        }
      }
    }
  }
  return [...terms].filter(Boolean)
}

function firstMatchingSnippet(text: string, terms: string[], maxLength = 118): string {
  const compact = text.replace(/\s+/g, ' ').trim()
  if (!compact) return ''
  let hit = -1
  for (const term of terms.sort((a, b) => b.length - a.length)) {
    const index = compact.toLowerCase().indexOf(term.toLowerCase())
    if (index >= 0 && (hit < 0 || index < hit)) hit = index
  }
  if (hit < 0) return compact.slice(0, maxLength) + (compact.length > maxLength ? '…' : '')
  const start = Math.max(0, hit - 34)
  const end = Math.min(compact.length, start + maxLength)
  return `${start > 0 ? '…' : ''}${compact.slice(start, end)}${end < compact.length ? '…' : ''}`
}

export function searchMath(query: string, limit = 8): MathSearchResult[] {
  const trimmed = query.trim()
  if (!trimmed) return []
  const terms = queryTerms(trimmed)
  const normalizedQuery = normalizeMathQuery(trimmed)

  return mathTopics
    .flatMap((topic) => {
      const candidates = topic.anchors.length
        ? topic.anchors
        : [{ id: topic.id, title: topic.title, searchText: topic.searchText, summary: topic.summary }]

      return candidates.map((candidate) => {
        const title = candidate.title.toLowerCase()
        const normalizedTitle = normalizeMathQuery(candidate.title)
        const body = candidate.searchText.toLowerCase()
        const normalizedBody = normalizeMathQuery(candidate.searchText)
        let score = 0

        if (title === trimmed.toLowerCase()) score += 1000
        if (normalizedTitle === normalizedQuery) score += 900
        if (title.includes(trimmed.toLowerCase())) score += 220
        if (normalizedTitle.includes(normalizedQuery)) score += 190
        if (body.includes(trimmed.toLowerCase())) score += 82
        if (normalizedBody.includes(normalizedQuery)) score += 70

        for (const term of terms) {
          const normalizedTerm = normalizeMathQuery(term)
          if (!normalizedTerm) continue
          if (normalizedTitle.includes(normalizedTerm)) score += 42 + normalizedTerm.length * 3
          if (normalizedBody.includes(normalizedTerm)) score += 8 + Math.min(normalizedTerm.length, 8)
        }

        return {
          ...topic,
          title: candidate.title,
          searchText: candidate.searchText,
          summary: candidate.summary,
          score,
          snippet: firstMatchingSnippet(candidate.searchText, terms),
          resultId: candidate.id,
          targetId: candidate.id,
        }
      })
    })
    .filter((topic) => topic.score > 0)
    .sort((a, b) => b.score - a.score || a.chapterId.localeCompare(b.chapterId) || a.id.localeCompare(b.id))
    .slice(0, limit)
}

export function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function plainMathText(value: string): string {
  return value
    .replace(/\\\((.*?)\\\)/g, '$1')
    .replace(/\$([^$\n]+)\$/g, '$1')
    .replace(/\\,/g, ' ')
    .replace(/\\(?:mathbf|mathrm|text)\{([^{}]*)\}/g, '$1')
    .replace(/\\(?:top|sim|pm|mp|ne|le|ge)/g, (token) => ({
      '\\top': 'T',
      '\\sim': '相似',
      '\\pm': '±',
      '\\mp': '∓',
      '\\ne': '≠',
      '\\le': '≤',
      '\\ge': '≥',
    })[token] ?? token)
    .replace(/[{}]/g, '')
}

export function highlightMatch(value: string, query: string): string {
  const escaped = escapeHtml(value)
  const terms = queryTerms(query)
    .filter((term) => term.length >= 2 && value.toLowerCase().includes(term.toLowerCase()))
    .sort((a, b) => b.length - a.length)
  if (!terms.length) return escaped
  const pattern = terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
  return escaped.replace(new RegExp(`(${pattern})`, 'gi'), '<mark>$1</mark>')
}
