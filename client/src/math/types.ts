export type MathTopic = {
  id: string
  title: string
  body: string
  summary: string
  searchText: string
}

export type MathChapter = {
  id: string
  partId: 'calculus' | 'linear-algebra'
  partTitle: string
  title: string
  topics: MathTopic[]
}

export type MathSearchResult = MathTopic & {
  chapterId: string
  chapterTitle: string
  partId: string
  partTitle: string
  score: number
  snippet: string
}
