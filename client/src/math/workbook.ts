import type { PracticeQuestion } from './practice'

export type WorkbookQuestion = Pick<PracticeQuestion, 'id' | 'type' | 'stem' | 'questionImages' | 'figures' | 'options'> & { label?: string; source?: string }
export type WorkbookSection = { title: string; questions: WorkbookQuestion[] }

const questionTypes = [
  { type: 'choice', title: '选择题' },
  { type: 'fill', title: '填空题' },
  { type: 'solution', title: '解答题' },
] as const

export function workbookQuestion(question: PracticeQuestion, includeSource = false): WorkbookQuestion {
  return {
    id: question.id,
    type: question.type,
    stem: question.stem,
    questionImages: question.questionImages,
    figures: question.figures,
    options: question.options,
    label: includeSource ? undefined : question.number,
    source: includeSource ? question.source : undefined,
  }
}

export function workbookPaperSections(questions: readonly PracticeQuestion[], includeSource: boolean): WorkbookSection[] {
  return questionTypes.flatMap(({ type, title }) => {
    const selected = questions.filter(question => question.type === type)
    return selected.length ? [{ title, questions: selected.map(question => workbookQuestion(question, includeSource)) }] : []
  })
}

export function proofWorkbookSections(questions: readonly PracticeQuestion[]): WorkbookSection[] {
  const proofs = questions.filter(question => question.type === 'solution' && question.topic.startsWith('线性代数 /') && /证明|求证|试证/.test(question.stem))
  return [{ title: '证明题', questions: proofs.map(question => workbookQuestion(question, true)) }]
}
