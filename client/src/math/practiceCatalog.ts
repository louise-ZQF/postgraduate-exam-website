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

type Chapter = { id: string; title: string; label: string; order: number }
type BookChapter = { id: string; title: string; number: number }

// 统一不同年份已有的章节名称，短标签也归入对应章节。
const examChapters: [subject: string, chapter: string, ...aliases: string[]][] = [
  ['高等数学', '函数、极限与连续', '函数', '极限', '极限与连续', '数列', '数列极限', '函数与数列',
    '小 o 与等价无穷小', '等价无穷小与阶的比较'],
  ['高等数学', '一元函数微分', '一元微分', '参数方程', '极坐标', '高阶导数', '中值定理', '极限与导数',
    '绝对值与可导性', '斜渐近线与根式有理化', '斜渐近线与截距', '参数方程与变限积分求导', '由极限证明可导',
    '中值定理与弦斜率', '分段参数方程与二阶可导性', '泰勒公式与中值定理证明', '相关变化率'],
  ['高等数学', '一元函数积分', '一元积分', '定积分', '定积分定义', '反常积分', '变上限积分', '变限积分',
    '积分应用', '曲线弧长', '积分平移与区间拼接', '无界区域的面积', '分段函数的原函数',
    '含绝对值的积分与最值', '旋转体的体积与表面积', '函数平均值与唯一零点的证明'],
  ['高等数学', '多元函数微分', '多元微分', '隐函数的极值', '多元函数的驻点与极值'],
  ['高等数学', '二重积分', '多元积分', '积分次序与对称性', '轮换对称与极坐标计算', '二重积分与极坐标换元'],
  ['高等数学', '微分方程', '函数与微分方程', '一阶齐次微分方程', '一阶线性微分方程'],
  ['高等数学', '综合专题', '多元微分与一元积分'],
  ['线性代数', '行列式'],
  ['线性代数', '矩阵', '矩阵运算', '伴随矩阵', '矩阵高次幂与列向量线性组合'],
  ['线性代数', '向量组', '向量'],
  ['线性代数', '线性方程组', '无解条件与线性方程组', '列向量关系与通解', '秩与公共非零解'],
  ['线性代数', '特征值与相似矩阵', '特征值', '矩阵相似', '实对称矩阵', '相似矩阵的性质', '特征值、特征向量与相似对角化'],
  ['线性代数', '二次型', '二次型的正负惯性指数'],
]
const examChaptersByTopic = new Map(examChapters.flatMap(([label, title, ...aliases], order) => {
  const chapter = { id: `exam-${order + 1}`, title, label, order }
  return [title, ...aliases].map(alias => [alias, chapter] as const)
}))
function examMistakeChapter(question: PracticeQuestion): Chapter {
  const [head, label] = question.topic.split(/\s+\/\s+/).map(part => part.trim())
  const hasSubject = head === '高等数学' || head === '线性代数'
  return examChaptersByTopic.get(hasSubject ? label : head) ?? {
    id: hasSubject ? `other-${encodeURIComponent(head)}` : 'uncategorized',
    title: '其他专题',
    label: hasSubject ? head : '试卷',
    order: examChapters.length,
  }
}

export function groupMistakesByChapter(questions: readonly PracticeQuestion[], bookChapters: readonly BookChapter[]) {
  const bookById = new Map(bookChapters.map(chapter => [chapter.id, chapter]))
  const groups = new Map<string, Chapter & { questions: PracticeQuestion[] }>()
  for (const question of questions) {
    const book = question.bookId && bookById.get(paperKey(question))
    const chapter = book
      ? { id: book.id, title: book.title, label: question.topic.split(' / ')[0], order: book.number }
      : examMistakeChapter(question)
    let group = groups.get(chapter.id)
    if (!group) {
      group = { ...chapter, questions: [] }
      groups.set(chapter.id, group)
    }
    group.questions.push(question)
  }
  return [...groups.values()].sort((a, b) => a.order - b.order)
}
