import { mathFormulas, mathTopics } from '@/generated/math2-content'
import type { MathSearchResult } from './types'

const segmenter = new Intl.Segmenter('zh', { granularity: 'word' })
const QUESTION_WORDS = /数学二|数二|考研|请问|如何|怎么|怎样|请教|帮我|给我/g
const STOP_WORDS = new Set(['的', '了', '吗', '呢', '是', '有', '与', '和', '及', '或', '在', '中', '个', '两', '求', '找', '查', '看', '是否', '能否', '一个', '公式', '计算'])
const SEARCH_EQUIVALENTS: Array<[RegExp, string]> = [
  [/特征矢量/g, '特征向量'],
  [/特征根/g, '特征值'],
  [/判断|判别/g, '判定'],
  [/求导/g, '导数'],
  [/导数表/g, '导数公式'],
  [/积分表/g, '积分公式'],
  [/泰勒表/g, '泰勒展开'],
  [/麦克劳林/g, '泰勒'],
  [/提水/g, '抽水'],
  [/重根/g, '重特征值'],
]

export function normalizeFormulaQuery(value: string): string {
  return value.normalize('NFKC').toLowerCase()
    .replace(/″/g, "''").replace(/′/g, "'")
    .replace(/\\(?:geq|ge)/g, '≥').replace(/\\(?:leq|le)/g, '≤')
    .replace(/\\(?:gt)/g, '>').replace(/\\(?:lt)/g, '<')
    .replace(/\\(?:prime)/g, "'")
    .replace(/\\sim/g, '~')
    .replace(/\\(?:mathrm|text|operatorname)\{([^{}]*)\}/g, '$1')
    .replace(/\\(?:left|right|bigl|bigr|!|,|;|quad|qquad)/g, '')
    .replace(/\{([^{}]*)\}/g, '$1')
    .replace(/([a-z]'+)\(x\)/g, '$1')
    .replace(/\s+/g, '')
}

function looksLikeFormula(value: string): boolean {
  return /[><=≤≥~^]|['′″]|\\(?:ge|le|prime|sim|frac|int|sqrt)/.test(value)
}

export function normalizeMathQuery(value: string): string {
  let normalized = value.normalize('NFKC').toLowerCase().replace(QUESTION_WORDS, '')
  normalized = normalized.replace(/特征矢量/g, '特征向量')
  for (const [pattern, replacement] of SEARCH_EQUIVALENTS) normalized = normalized.replace(pattern, replacement)
  return normalized
    .replace(/的/g, '')
    .replace(/[^\p{L}\p{N}]/gu, '')
}

function queryTerms(query: string): string[] {
  const cleaned = query
    .replace(/(?:怎么|如何|怎样)(?:计算|求|做|判定|判断)?/g, ' ')
    .replace(QUESTION_WORDS, ' ')
  const words = [...segmenter.segment(cleaned)]
    .filter((part) => part.isWordLike)
    .map((part) => normalizeMathQuery(part.segment))
    .filter((word) => word && !STOP_WORDS.has(word) && (word.length > 1 || /\p{Script=Han}/u.test(word) || query.trim().length === 1 || /\d/.test(word)))
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

const searchableEntries = mathTopics.flatMap((topic) => {
  const candidates = topic.anchors.length
    ? topic.anchors
    : [{ id: topic.id, title: topic.title, searchText: topic.searchText, summary: topic.summary, displaySummary: '' }]
  return candidates.map((candidate) => ({
    topic,
    candidate,
    title: normalizeMathQuery(candidate.title),
    body: normalizeMathQuery(candidate.searchText),
  }))
})

const topicById = new Map(mathTopics.map((topic) => [topic.id, topic]))
const searchableFormulas = mathFormulas.map((formula) => {
  const topic = topicById.get(formula.topicId)
  const parent = topic?.anchors.find((anchor) => anchor.id === formula.parentAnchorId)
  const inheritedTitle = parent && formula.title.startsWith(`${parent.title}：`)
  return {
    formula,
    topic,
    // 自动生成的“整组标题：符号”不是单条公式的专名，不能以标题权重参与召回。
    title: normalizeMathQuery(inheritedTitle ? formula.title.slice(parent.title.length + 1) : formula.title),
    fullTitle: normalizeMathQuery(formula.title),
    aliases: formula.searchAliases.map(normalizeMathQuery),
    context: normalizeMathQuery(formula.context.startsWith('所属知识点：') ? '' : formula.context),
    path: normalizeMathQuery(`${parent?.title ?? ''} ${topic?.title ?? ''}`),
    latex: normalizeFormulaQuery(formula.latex),
    formulaAliases: formula.searchAliases.map(normalizeFormulaQuery),
  }
})

function matchTerms(fields: string[], terms: string[]): number {
  return terms.filter((term) => fields.some((field) => field.includes(term))).length
}

function chineseBigramCoverage(query: string, fields: string[]): number {
  const chinese = query.match(/[\p{Script=Han}]{2,}/gu) ?? []
  const bigrams = new Set(chinese.flatMap((chunk) => [...chunk.slice(0, -1)].map((_, index) => chunk.slice(index, index + 2))))
  if (!bigrams.size) return 0
  return [...bigrams].filter((bigram) => fields.some((field) => field.includes(bigram))).length / bigrams.size
}

function conflictsWithQuery(query: string, title: string): boolean {
  if ((query.includes('x坐标') || query.includes('横坐标')) && title.includes('纵坐标')) return true
  if ((query.includes('y坐标') || query.includes('纵坐标')) && title.includes('横坐标')) return true
  if (query.includes('大于') && title.includes('小于')) return true
  if (query.includes('小于') && title.includes('大于')) return true
  if (query.includes('正定') && !query.includes('半正定') && title.includes('半正定')) return true
  if (query.includes('负定') && !query.includes('半负定') && title.includes('半负定')) return true
  return false
}

function textualScore(query: string, terms: string[], title: string, aliases: string[], context: string, path: string, formula: boolean, relaxed: boolean): number {
  if (!query) return 0
  if (formula && conflictsWithQuery(query, title)) return 0
  if (title === query) return formula ? 3200 : 2900
  if (aliases.includes(query)) return formula ? 3100 : 2750
  if (title.includes(query)) return formula ? 2700 : 2450
  if (aliases.some((alias) => alias.includes(query))) return formula ? 2600 : 2350
  if (formula && context.includes(query)) return 2500
  const titleHits = matchTerms([title], terms)
  const aliasHits = matchTerms(aliases, terms)
  const contextHits = matchTerms([context], terms)
  const pathHits = matchTerms([path], terms)
  const matched = matchTerms([title, ...aliases, context], terms)
  const coverage = terms.length ? matched / terms.length : 0
  if (!matched || (terms.length > 1 && coverage < (relaxed ? 0.5 : 0.75))) {
    if (!relaxed) return 0
    const bigramCoverage = chineseBigramCoverage(query, [title, ...aliases])
    return bigramCoverage >= 0.6 ? Math.round(420 + bigramCoverage * 420) : 0
  }
  // 仅在严格匹配没有结果时放宽覆盖率；标题和别名仍明显高于正文、章节路径。
  return Math.round(coverage * 780 + titleHits * 190 + aliasHits * 160 + contextHits * 42 + pathHits * 18
    + (context.includes(query) ? 180 : 0) + (path.includes(query) ? 100 : 0)
    + (formula ? 35 : 0))
}

function symbolicQueryPart(query: string): string {
  if (!looksLikeFormula(query)) return ''
  if (!/[\p{Script=Han}]/u.test(query)) return normalizeFormulaQuery(query)
  const relation = query.match(/[a-zA-Z][a-zA-Z0-9_'′″^(){}\\-]*\s*(?:>=|<=|>|<|=|≥|≤|~)\s*[a-zA-Z0-9_+\-(){}\\]+/)
  return relation ? normalizeFormulaQuery(relation[0]) : ''
}

export function searchMathWithCount(query: string, limit = 8, relaxed = false): { results: MathSearchResult[]; total: number } {
  const trimmed = query.trim()
  if (!trimmed) return { results: [], total: 0 }
  const formulaQuery = symbolicQueryPart(trimmed)
  const textQuery = formulaQuery ? trimmed.replace(/[^\s]*[><=≤≥~^'′″][^\s]*/g, ' ') : trimmed
  const terms = queryTerms(textQuery)
  const normalizedQuery = normalizeMathQuery(textQuery)
  if (!terms.length && !formulaQuery) return { results: [], total: 0 }

  const topics = formulaQuery ? [] : searchableEntries
    .map(({ topic, candidate, title, body }) => {
      if (normalizedQuery.includes('二重积分') && !topic.chapterTitle.includes('二重积分')) return null
      const score = textualScore(normalizedQuery, terms, title, [], body, normalizeMathQuery(topic.title), false, relaxed)
      if (!score) return null

      return {
        ...topic,
        kind: 'topic' as const,
        title: candidate.title,
        searchText: candidate.searchText,
        summary: candidate.summary,
        score,
        snippet: candidate.displaySummary ?? '',
        resultId: candidate.id,
        targetId: candidate.id,
      }
    })
    .filter((topic): topic is NonNullable<typeof topic> => topic !== null)

  const formulas = searchableFormulas.flatMap(({ formula, topic, title, fullTitle, aliases, context, path, latex, formulaAliases }) => {
    if (!topic) return []
    if (normalizedQuery.includes('二重积分') && !topic.chapterTitle.includes('二重积分')) return []
    let score = 0
    if (formulaQuery) {
      if (!latex.includes(formulaQuery) && !formulaAliases.some((alias) => alias.includes(formulaQuery))) return []
      score = latex === formulaQuery || formulaAliases.includes(formulaQuery) ? 3800 : 3300
      if (normalizedQuery && terms.length) score += textualScore(normalizedQuery, terms, title, aliases, context, path, true, relaxed) / 10
    } else score = fullTitle === normalizedQuery ? 3200
      : textualScore(normalizedQuery, terms, title, aliases, context, path, true, relaxed)
    if (!score) return []
    return [{
      ...topic,
      kind: 'formula' as const,
      formula,
      title: formula.title,
      summary: formula.context,
      snippet: formula.displayContext ?? '',
      searchText: [formula.title, formula.context, ...formula.searchAliases].join(' '),
      resultId: formula.id,
      targetId: formula.id,
      score,
    }]
  })
  const sorted: MathSearchResult[] = [...formulas, ...topics]
  sorted.sort((a, b) => b.score - a.score || a.chapterId.localeCompare(b.chapterId)
      || (a.formula && b.formula && a.formula.topicId === b.formula.topicId ? a.formula.order - b.formula.order : 0)
      || a.resultId.localeCompare(b.resultId))
  if (!sorted.length && !relaxed && !formulaQuery) return searchMathWithCount(query, limit, true)
  const useful = sorted[0]?.score >= 2500 ? sorted.filter((result) => result.score >= 1200) : sorted
  return { results: useful.slice(0, limit), total: useful.length }
}

export function searchMath(query: string, limit = 8): MathSearchResult[] {
  return searchMathWithCount(query, limit).results
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
