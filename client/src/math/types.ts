export type MathAnchor = {
  id: string
  legacyId: string
  title: string
  summary: string
  searchText: string
}

export type MathFormula = {
  id: string
  parentAnchorId: string
  legacyParentAnchorId: string
  title: string
  latex: string
  sourceBlockIndex: number
  searchAliases: string[]
  context: string
  chapterId: string
  topicId: string
  order: number
}

export type MathTopic = {
  id: string
  title: string
  body: string
  summary: string
  searchText: string
  anchors: MathAnchor[]
  formulas: MathFormula[]
}

export type MathChapter = {
  id: string
  partId: 'calculus' | 'linear-algebra'
  partTitle: string
  title: string
  topics: MathTopic[]
}

export type MathSearchResult = MathTopic & {
  kind: 'topic' | 'formula'
  formula?: MathFormula
  chapterId: string
  chapterTitle: string
  partId: string
  partTitle: string
  score: number
  snippet: string
  resultId: string
  targetId: string
}
