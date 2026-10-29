import type { PracticeQuestion } from './practice'
import type { PracticeCollection } from './practiceLocation'

export const paperKey = (question: PracticeQuestion) => question.paperId ?? String(question.year)

export function createPracticeCatalog(source: PracticeQuestion[], collection: PracticeCollection) {
  const questions = source.filter(q => collection === 'll880' ? q.bookId === 'll880' : !q.bookId).sort((a, b) =>
    Number(Boolean(a.bookId)) - Number(Boolean(b.bookId))
    || (a.bookId && b.bookId ? (a.chapterNumber ?? 0) - (b.chapterNumber ?? 0) || (a.sourceOrder ?? 0) - (b.sourceOrder ?? 0) : b.year - a.year)
    || (a.sourceOrder ?? Number(a.examNumber ?? a.number)) - (b.sourceOrder ?? Number(b.examNumber ?? b.number))
    || Number(a.kind !== 'original') - Number(b.kind !== 'original')
    || (a.exerciseIndex ?? 0) - (b.exerciseIndex ?? 0),
  )
  const groups = new Map<string, PracticeQuestion[]>()
  const searchText = new Map<string, string>()
  for (const q of questions) {
    const id = paperKey(q)
    const group = groups.get(id) ?? []
    group.push(q); groups.set(id, group)
    searchText.set(q.id, `${q.year} ${q.number} ${q.source} ${q.topic} ${q.stem} ${q.searchText ?? ''} ${q.level ?? ''} ${q.questionTypes?.map(type => type.title).join(' ') ?? ''}`.toLowerCase())
  }
  const papers = [...groups].map(([id, group]) => ({
    id, year: group[0].year, book: Boolean(group[0].bookId), series: id.startsWith('zy2026-') ? 'zy2026' : 'real',
    title: group[0].paperTitle ?? `${group[0].year} 年`, questions: group,
  }))
  return { questions, papers, searchText }
}
