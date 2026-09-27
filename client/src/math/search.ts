import { mathTopics } from '@/generated/math2-content'
import type { MathSearchResult } from './types'

const segmenter = new Intl.Segmenter('zh', { granularity: 'word' })
const QUESTION_WORDS = /数学二|数二|考研|请问|如何|怎么|怎样/g
const STOP_WORDS = new Set(['的', '了', '吗', '呢', '是', '有', '与', '和', '及', '或', '在', '中', '个', '两', '求', '找', '查', '看', '是否', '能否', '一个'])

export function normalizeMathQuery(value: string): string {
  return value
    .normalize('NFKC')
    .toLowerCase()
    .replace(/判断/g, '判定')
    .replace(/特征矢量/g, '特征向量')
    .replace(/求导/g, '导数')
    .replace(/[^\p{L}\p{N}]/gu, '')
}

function queryTerms(query: string): string[] {
  const cleaned = query
    .replace(/(?:怎么|如何|怎样)(?:计算|求|做|判定|判断)?/g, ' ')
    .replace(QUESTION_WORDS, ' ')
  const words = [...segmenter.segment(cleaned)]
    .filter((part) => part.isWordLike)
    .map((part) => normalizeMathQuery(part.segment))
    .filter((word) => word && !STOP_WORDS.has(word))
  const terms = new Set<string>()
  for (let index = 0; index < words.length; index++) {
    // 中文分词有时把“定积分”切为“定 / 积分”，合并后才是有意义的词。
    if (words[index] === '定' && words[index + 1] === '积分') {
      terms.add('定积分')
      index++
    } else if (words[index] !== '定') {
      terms.add(words[index])
    }
  }
  return [...terms]
}

function firstMatchingSnippet(text: string, terms: string[], maxLength = 118): string {
  const compact = text.replace(/\s+/g, ' ').trim()
  if (!compact) return ''
  let hit = -1
  for (const term of terms) {
    const index = compact.toLowerCase().indexOf(term)
    if (index >= 0 && (hit < 0 || index < hit)) hit = index
  }
  if (hit < 0) return compact.slice(0, maxLength) + (compact.length > maxLength ? '…' : '')
  const start = Math.max(0, hit - 34)
  const end = Math.min(compact.length, start + maxLength)
  return `${start > 0 ? '…' : ''}${compact.slice(start, end)}${end < compact.length ? '…' : ''}`
}

const searchableEntries = mathTopics.flatMap((topic) => {
  const candidates = topic.anchors.length
    ? topic.anchors
    : [{ id: topic.id, title: topic.title, searchText: topic.searchText, summary: topic.summary }]
  return candidates.map((candidate) => ({
    topic,
    candidate,
    title: normalizeMathQuery(candidate.title),
    body: normalizeMathQuery(candidate.searchText),
  }))
})

export function searchMath(query: string, limit = 8): MathSearchResult[] {
  const trimmed = query.trim()
  if (!trimmed) return []
  const terms = queryTerms(trimmed)
  if (!terms.length) return []
  const normalizedQuery = normalizeMathQuery(trimmed)

  return searchableEntries
    .map(({ topic, candidate, title, body }) => {
      const titleHits = terms.filter((term) => title.includes(term))
      const bodyHits = terms.filter((term) => body.includes(term))
      const matched = terms.filter((term) => titleHits.includes(term) || bodyHits.includes(term)).length
      // 常见的两三个关键词须全部匹配，避免只碰到“矩阵”和“判定”就冒充“矩阵相似判定”。
      if (!matched || (terms.length <= 3 && matched !== terms.length) || (terms.length > 3 && matched / terms.length < 0.75)) return null

      const coverage = matched / terms.length
      const score = coverage * 500
        + titleHits.length * 85
        + bodyHits.length * 12
        + (title === normalizedQuery ? 400 : 0)
        + (title.includes(normalizedQuery) ? 180 : 0)
        + (body.includes(normalizedQuery) ? 35 : 0)

      return {
        ...topic,
        title: candidate.title,
        searchText: candidate.searchText,
        summary: candidate.summary,
        score,
        snippet: firstMatchingSnippet(titleHits.length ? candidate.summary : candidate.searchText, terms),
        resultId: candidate.id,
        targetId: candidate.id,
      }
    })
    .filter((topic): topic is NonNullable<typeof topic> => topic !== null)
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
  const terms = [...new Set([...queryTerms(query), ...[...segmenter.segment(query)].filter((part) => part.isWordLike).map((part) => part.segment)])]
    .filter((term) => term.length >= 2 && value.toLowerCase().includes(term.toLowerCase()))
    .sort((a, b) => b.length - a.length)
  if (!terms.length) return escaped
  const pattern = terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
  return escaped.replace(new RegExp(`(${pattern})`, 'gi'), '<mark>$1</mark>')
}
