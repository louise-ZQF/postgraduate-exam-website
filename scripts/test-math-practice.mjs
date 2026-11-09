import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { createRequire } from 'node:module'
import ts from 'typescript'

const root = resolve(import.meta.dirname, '..')
function moduleUrl(file, imports = {}) {
  let source = readFileSync(resolve(root, file), 'utf8')
  for (const [name, url] of Object.entries(imports)) source = source.replace(`from '${name}'`, `from '${url}'`)
  const compiled = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext } }).outputText
  return `data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`
}
const loadModule = (file, imports) => import(moduleUrl(file, imports))
const practiceModuleUrl = moduleUrl('client/src/math/practice.ts')
const { normalizeProgress, mergeProgress, isPending, isUnattempted, matchesPracticeStatus, hasNote, readPracticeProgress, savePracticeProgress, togglePracticeFavorite, practiceMasteryPatch, MISSED_POINT_FAVORITE, MISSED_POINT_MASTERY, PRACTICE_STORAGE_KEY, practiceAutoHideKey, readPracticeAutoHides, savePracticeAutoHides, cleanExpiredRemovals, REMOVED_RETENTION_MS } = await import(practiceModuleUrl)
const practiceQuestions = ['practice-questions.json', 'll880-questions.json'].flatMap(file => JSON.parse(readFileSync(resolve(root, 'client/src/content', file), 'utf8')))
const { demoQuestion } = await loadModule('client/src/math/practiceDemo.ts')
const { createPracticeCatalog, groupMistakesByChapter } = await loadModule('client/src/math/practiceCatalog.ts')
const { protectMarkdownMath, escapeMathHtml, formatNoteBold, normalizeNoteMath, repairFragmentedMath } = await loadModule('client/src/math/markdownMath.ts')
const { noteMarkdown } = await loadModule('client/src/math/noteMarkdown.ts', { marked: import.meta.resolve('marked') })
const examsCatalog = createPracticeCatalog(practiceQuestions, 'exams')
const bookCatalog = createPracticeCatalog(practiceQuestions, 'll880')
assert.equal(examsCatalog.questions.length, 475)
assert.equal(bookCatalog.questions.length, 649)
assert.equal(examsCatalog.papers.length, 17)
assert.equal(bookCatalog.papers.length, 8)
assert.equal(new Set([...examsCatalog.questions, ...bookCatalog.questions].map(q => q.id)).size, practiceQuestions.length)
assert.equal(examsCatalog.papers.reduce((sum, paper) => sum + paper.questions.length, 0), 475)
const group2025 = examsCatalog.papers.find(paper => paper.year === 2025).questions
assert.equal(group2025[0].id, 'math2-2025-q4-original')
assert.ok(examsCatalog.searchText.get('math2-2025-q4-original').includes('2025'))
const { normalizePracticeLocation, practiceLocationContext, readPracticeLocation, readPracticeLocations, savePracticeLocation } = await loadModule('client/src/math/practiceLocation.ts', { './practice': practiceModuleUrl })
const ids = new Set()
for (const q of practiceQuestions) {
  assert.match(q.id, /^[a-zA-Z0-9_-]{1,120}$/)
  assert.ok(!ids.has(q.id), `重复题目 ID：${q.id}`)
  ids.add(q.id)
  assert.ok(Number.isInteger(q.year) && q.year >= 1980 && q.year <= 2100, `年份无效：${q.id}`)
  for (const field of ['number', 'source', 'topic', 'stem']) assert.ok(typeof q[field] === 'string' && q[field].trim(), `${q.id} 缺少 ${field}`)
  if (q.answerAvailable === false) {
    assert.equal(q.kind, 'original', `${q.id} 补充题不能缺少解析`)
    assert.equal(q.answer, '')
    assert.equal(q.explanation, '')
  } else {
    for (const field of ['answer', 'explanation']) assert.ok(typeof q[field] === 'string' && q[field].trim(), `${q.id} 缺少 ${field}`)
  }
  assert.ok(['choice', 'fill', 'solution'].includes(q.type))
  if (q.type === 'choice' && !q.questionImages?.length) {
    assert.ok(q.options?.length >= 2)
    assert.equal(new Set(q.options.map(o => o.key)).size, q.options.length)
    assert.ok(q.options.every(o => typeof o.text === 'string' && o.text.trim()))
    assert.ok(q.options.some(o => o.key === q.correctOption))
  }
}
const ll880 = practiceQuestions.filter(q => q.bookId === 'll880')
const chapters = JSON.parse(readFileSync(resolve(root, 'client/src/content/ll880-classification.json'), 'utf8'))
const examMistakes = groupMistakesByChapter(examsCatalog.questions, chapters)
const calculusMistakes = examMistakes.find(group => group.title === '一元函数微分').questions
assert.ok(['math2-2010-q11-original', 'math2-2025-q7-original', 'math2-2025-q7-weak01'].every(id => calculusMistakes.some(q => q.id === id)), '不同年份及配套题按现有章节标签放在一起')
assert.deepEqual(examMistakes.flatMap(group => group.questions.map(q => q.id)).sort(), examsCatalog.questions.map(q => q.id).sort(), '试卷分组不能漏题或重复')
assert.deepEqual(groupMistakesByChapter(bookCatalog.questions, chapters).map(group => [group.id, group.questions.length]), chapters.map(chapter => [chapter.id, chapter.count]), '880 错题沿用原书章节')
assert.equal(ll880.length, 649, '仅导入已有分类的八章 649 道题')
assert.deepEqual(chapters.map(chapter => [chapter.number, chapter.count]), [[2, 145], [3, 167], [4, 75], [6, 76], [7, 39], [8, 56], [9, 37], [10, 54]])
assert.equal(chapters.reduce((sum, chapter) => sum + chapter.types.length, 0), 192)
for (const chapter of chapters) {
  const group = ll880.filter(q => q.paperId === chapter.id)
  assert.equal(group.length, chapter.count)
  assert.ok(existsSync(resolve(root, 'client/public', chapter.sourceFile)), `${chapter.id} 缺少原分类总结`)
  const typeIds = new Set(chapter.types.map(type => type.id))
  assert.equal(typeIds.size, chapter.types.length)
  for (const q of group) {
    assert.ok(['基础题', '综合题', '拓展题'].includes(q.level))
    assert.ok(q.questionTypes.length > 0)
    assert.ok(q.questionTypes.every(type => typeIds.has(type.id) && type.references.length > 0))
    assert.ok(q.questionImages.length > 0 && q.answerImages.length > 0)
    assert.ok(!q.options, '原图题的选项随原图呈现，不生成未核对的交互选项')
    for (const picture of [...q.questionImages, ...q.answerImages]) {
      assert.match(picture.src, /^ll880\/[a-z0-9-]+\.webp$/)
      assert.ok(existsSync(resolve(root, 'client/public', picture.src)), `${q.id} 缺少 ${picture.src}`)
      assert.ok(picture.width > 0 && picture.height > 0 && picture.alt.trim())
    }
  }
  assert.equal(new Set(group.filter(q => !q.questionTypes?.[0]?.id).map(q => q.id)).size, 0, '默认题型分组不得漏题')
}
const integralSubparts = ll880.find(q => q.id === 'll880-c03-b-s01')
assert.ok(integralSubparts.questionTypes.length > 1, '保留原分类按小问划分的多个题型')
const weak2025 = practiceQuestions.filter(q => /^math2-2025-q\d+-weak\d+$/.test(q.id))
assert.equal(weak2025.length, 54, '2025 配套补弱不得漏题或混入原真题')
assert.ok(weak2025.every(q => q.year === 2025 && q.kind === 'exercise' && !q.bookId && q.paperTitle === '2025 年'))
assert.deepEqual(weak2025.map(q => Number(q.number)).sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1))
const weakGroups = [...new Set(weak2025.map(q => q.questionTypes[0].id))]
assert.deepEqual(weakGroups.map(id => {
  const group = weak2025.filter(q => q.questionTypes[0].id === id)
  return [group[0].examNumber, group.length]
}), [['4', 10], ['7', 10], ['16', 10], ['10', 10], ['5', 2], ['12', 2], ['14', 2], ['15', 2], ['18', 2], ['20', 2], ['21', 2]])
const katex = createRequire(resolve(root, 'client/package.json'))('katex')
const noteExample = String.raw`这个题目最难的点是求积分的时候，注意 F(x) 的下限是从0开始的。\(f(x)\) 可积，则 \(F(x)=\int_0^x f(t)\,dt\) 连续；在 \(f(x)\) 连续的点，才可以直接用 \(F'(x)=f(x)\)。`
const noteCases = [
  [noteExample, 4],
  [String.raw`$f'(x)$、$$\int_0^x f(t)\,dt$$、\(x^2\)、\[\frac{a}{b}\]`, 4],
  [String.raw`F(x)=\int_0^x f(t)\,dt`, 1],
  [String.raw`\int_0^x f(t)dt`, 1],
  [String.raw`f'(x)=f(x)`, 1],
  [String.raw`\begin{aligned} F(x)&=\int_0^x f(t)\,dt\\ F'(x)&=f(x)\end{aligned}`, 1],
  [String.raw`\begin{pmatrix}1&2\\3&4\end{pmatrix}`, 1],
  ['```latex\n\\frac{a}{b}\n```', 1],
  ['```js\nconst x = "$a$"\n```\n`$b$` 和 $c$', 1],
  [String.raw`价格 \$10，不完整的 \(f(x)`, 0],
  ['因为 `αTx` 是一个数，转置以后不变，所以\n```math\nαTx=(αTx)T=xTα.\n```\n\n于是把平方拆成两个相同的因子，只将第一个因子改写：\n```math\n(αTx)2=(αTx)(αTx)=(xTα)(αTx)=xT(ααT)x.\n```', 3],
  ['转置与平方：\n```math\n(αᵀx)²=xᵀ(ααᵀ)x\n```', 1],
  ['转置以后不变：\n(\nα\nT\nx\n)\nT\n=\nx\nT\nα', 1],
]
for (const [source, count] of noteCases) {
  const protectedMath = protectMarkdownMath(source, true)
  assert.equal(protectedMath.tokens.length, count, source)
  for (const token of protectedMath.tokens) assert.doesNotThrow(() => katex.renderToString(token.latex, { displayMode: token.display, throwOnError: true, strict: 'ignore' }), token.latex)
}
const brokenBoldNote = '**我列出式\\[\n2\\sqrt{1-y^2}\\cdot\\frac{dy}{dt}注意这点非常重要**\n\\]子以后继续求导。'
const repairedBold = protectMarkdownMath(brokenBoldNote, true)
assert.equal(repairedBold.tokens[0].latex, String.raw`2\sqrt{1-y^2}\cdot\frac{dy}{dt}`, '公式末尾误入的粗体标记和说明移回正文')
assert.match(noteMarkdown.parse(repairedBold.text), /<strong>我列出式\w+注意这点非常重要<\/strong>子以后/)
assert.match(noteMarkdown.parse('因为**这个结论。**所以继续推导'), /因为<strong>这个结论。<\/strong>所以/)
assert.match(noteMarkdown.parse('因为** 这一步 **所以继续推导'), /因为<strong>这一步<\/strong>所以/)
assert.match(noteMarkdown.parse('`**中文。**`'), /<code>\*\*中文。\*\*<\/code>/)
const acrossFormula = '第一步\n\n\\[\nx^2+1\n\\]\n\n第二步'
const oldBold = protectMarkdownMath(`**${acrossFormula}**`, true)
assert.match(noteMarkdown.parse(oldBold.text), /<strong>第一步<\/strong>[\s\S]+<strong>第二步<\/strong>/)
const newBold = formatNoteBold(acrossFormula, 0, acrossFormula.length).value
assert.equal(newBold, '<strong>第一步</strong>\n\n\\[\nx^2+1\n\\]\n\n<strong>第二步</strong>')
const stopsInsideMath = formatNoteBold(acrossFormula, 0, acrossFormula.indexOf('^'))
assert.equal(stopsInsideMath.value, '<strong>第一步</strong>\n\n\\[\nx^2+1\n\\]')
const withCode = '第一步\n\n```text\n**字面量**\n```\n\n第二步'
assert.equal(formatNoteBold(withCode, 0, withCode.length).value, '<strong>第一步</strong>\n\n```text\n**字面量**\n```\n\n<strong>第二步</strong>')
assert.equal(escapeMathHtml('<img src=x onerror="alert(1)">'), '&lt;img src=x onerror=&quot;alert(1)&quot;&gt;')
assert.equal(normalizeNoteMath('αTx=(αTx)T=xTα.', '转置'), 'α^{T}x=(α^{T}x)^{T}=x^{T}α.')
assert.equal(normalizeNoteMath('(αTx)2=xT(ααT)x', '转置，平方'), '(α^{T}x)^{2}=x^{T}(αα^{T})x')
assert.equal(normalizeNoteMath('ATx=xTα'), 'ATx=xTα', '没有上下文时，不擅自推断普通字母 T 是转置')
assert.equal(normalizeNoteMath('x²+y₂'), 'x^{2}+y_{2}')
assert.equal(repairFragmentedMath('α\nT\nx\n=\nx\nT\nα\n\nαTx=xTα'), 'αTx=xTα')
assert.equal(repairFragmentedMath('在上限\ny\n=\n1\ny=1 处得到'), '在上限\ny=1 处得到', '短公式与紧接中文的重复展示层也要整理')
assert.equal(repairFragmentedMath('(x\n^2\n)\n^{3/2}\n=\n|x\n|^3'), '(x^2)^{3/2}=|x|^3', '数学片段不一定每行只有一个字符')
assert.equal(repairFragmentedMath('y\n=\n1\n\ny=10'), 'y=1\n\ny=10', '不能误删只有相同前缀的另一个公式')
assert.equal(repairFragmentedMath('```js\ny\n=\n1\n```', true), '```js\ny\n=\n1\n```', '普通代码的换行保持原样')
assert.equal(repairFragmentedMath('第一步\n第二步\nA\nB\nC'), '第一步\n第二步\nA\nB\nC', '不拼接普通分行文字')
assert.equal(protectMarkdownMath('y\n=\n1', true).tokens[0].latex, 'y=1')
for (const file of ['高等数学.md', '线性代数.md']) {
  const source = readFileSync(resolve(root, 'content/approved', file), 'utf8').replace(/<!--\s*formula\s+[^\n]*?-->/g, '')
  const legacy = [...source.matchAll(/\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$[^$\n]+?\$|\\\([^\n]*?\\\)/g)].map(([token]) => (token.startsWith('$$') || token.startsWith('\\[') || token.startsWith('\\(') ? token.slice(2, -2) : token.slice(1, -1)).trim())
  assert.deepEqual(protectMarkdownMath(source).tokens.map(token => token.latex), legacy, '已有公式顺序与收藏锚点保持一致')
}

const originals2025 = practiceQuestions.filter(q => q.year === 2025 && q.kind === 'original')
assert.deepEqual(originals2025.map(q => Number(q.number)).sort((a, b) => a - b), [4, 5, 7, 10, 12, 14, 15, 16, 18, 20, 21])
assert.equal(practiceQuestions.filter(q => q.year === 2025).length, 65)
for (const q of originals2025) {
  assert.ok(q.explanation.includes('原错因记录'), `${q.id} 保留原错因`)
  assert.ok(weak2025.some(exercise => exercise.questionTypes[0].id === q.questionTypes[0].id), `${q.id} 与已有补充练习对应`)
}
for (const q of weak2025) {
  assert.equal(q.sourceOrder, Number(q.number), '保留原文练习顺序')
  assert.ok(q.source.startsWith('非真题练习 · '))
}
const imported2023 = practiceQuestions.filter(q => q.year === 2023)
assert.equal(examsCatalog.papers.find(paper => paper.id === '2023').questions.length, 13)
assert.deepEqual(imported2023.filter(q => q.kind === 'original').map(q => Number(q.number)), [1, 5, 12, 15, 18, 19, 20, 21, 22])
const exercises2023 = imported2023.filter(q => q.kind === 'exercise')
assert.deepEqual(exercises2023.map(q => Number(q.examNumber)), [1, 5, 15, 19])
assert.ok(imported2023.every(q => !q.bookId && q.paperTitle === '2023 年'))
for (const q of imported2023.filter(q => q.kind === 'original')) assert.ok(q.explanation.includes('原错因记录'))
for (const q of exercises2023) assert.ok(imported2023.some(original => original.kind === 'original' && original.questionTypes[0].id === q.questionTypes[0].id))
assert.ok(imported2023.filter(q => q.examNumber === '19').every(q => q.source.includes('仅第一问') && !q.stem.includes('体积')), '第19题及其配套练习只导入第一问面积')
for (const q of [...weak2025, ...originals2025, ...imported2023]) {
  for (const value of [q.stem, q.answer, q.explanation, ...(q.options ?? []).map(option => option.text)]) {
    for (const token of value.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$\n]+?)\$/g)) {
      assert.doesNotThrow(() => katex.renderToString(token[1] ?? token[2], { displayMode: Boolean(token[1]), throwOnError: true, strict: 'ignore' }), `${q.id} 公式必须可渲染`)
    }
  }
}
assert.ok(!ids.has(demoQuestion.id), '预览题不得混入正式题库')
assert.equal(demoQuestion.correctOption, 'C')
const storage = new Map()
globalThis.localStorage = { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) }
assert.equal(readPracticeLocation('exams'), undefined)
const checkpoint = { questionId: 'math2-2025-q4-original', view: 'all', year: '2025', paper: '2025', status: 'unmarked', type: 'all', level: 'all', keyword: '极限', offset: 180, updatedAt: 100 }
assert.equal(savePracticeLocation('exams', checkpoint), true)
assert.deepEqual(readPracticeLocation('exams'), checkpoint)
assert.equal(readPracticeLocation('ll880'), undefined, '试卷和880分别保存做题位置')
assert.equal(normalizePracticeLocation({ questionId: '../bad' }), undefined)
assert.equal(normalizePracticeLocation({ questionId: 'valid', status: 'bad', offset: Infinity }).status, 'all')
assert.equal(normalizePracticeLocation({ questionId: 'valid', offset: Infinity }).offset, 0)
assert.equal(normalizePracticeLocation({ ...checkpoint, status: 'unfamiliar' }).status, 'wrong')
const favoriteCheckpoint = normalizePracticeLocation({ ...checkpoint, view: 'review', status: 'favorite-hard' })
assert.equal(favoriteCheckpoint.status, 'favorite-hard')
assert.equal(practiceLocationContext(favoriteCheckpoint), 'favorites')
storage.set('math2-practice-location-v1-ll880', '{broken')
assert.equal(readPracticeLocation('ll880'), undefined)
const notesCheckpoint = { ...checkpoint, questionId: 'math2-2010-q5-original', view: 'notes', year: '', paper: '', status: 'all', keyword: '', updatedAt: 200 }
assert.equal(savePracticeLocation('exams', notesCheckpoint), true)
assert.deepEqual(readPracticeLocations('exams'), [notesCheckpoint, checkpoint], '看笔记后仍保留之前的练习位置')
const laterNotes = { ...notesCheckpoint, questionId: 'math2-2024-q2-original', year: '2024', paper: '2024', offset: 90, updatedAt: 300 }
assert.equal(savePracticeLocation('exams', laterNotes), true)
assert.deepEqual(readPracticeLocations('exams'), [laterNotes, checkpoint], '连续浏览笔记只更新当前记录，不能挤掉之前的做题位置')
const resumed = { ...checkpoint, offset: 220, updatedAt: 400 }
assert.equal(savePracticeLocation('exams', resumed), true)
assert.deepEqual(readPracticeLocations('exams'), [resumed, laterNotes], '跳回较早位置后，两条记录都保留')
const anotherPaper = { ...checkpoint, questionId: 'math2-2022-q1-original', paper: '2022', year: '2022', updatedAt: 500 }
assert.equal(savePracticeLocation('exams', anotherPaper), true)
assert.deepEqual(readPracticeLocations('exams'), [anotherPaper, resumed], '只保留最近两处练习记录')
storage.set('math2-practice-location-v1-ll880', JSON.stringify(checkpoint))
assert.deepEqual(readPracticeLocations('ll880'), [checkpoint], '自动兼容旧版的单条记录')
storage.set('math2-practice-location-history-v1-ll880', '{broken')
assert.deepEqual(readPracticeLocations('ll880'), [checkpoint], '历史损坏时仍恢复旧记录')
assert.equal(savePracticeLocation('ll880', notesCheckpoint), true)
assert.deepEqual(readPracticeLocations('exams'), [anotherPaper, resumed], '试卷和880的两条历史相互隔离')
assert.deepEqual(readPracticeProgress(), Object.create(null))
const marked = { q2025: { mastery: 'no-idea', note: '先判断导数奇偶性', updatedAt: 100, reviews: 0 } }
const hideState = { q2025: { deadline: 30000, previous: marked.q2025 }, hidden: { deadline: 0 } }
assert.equal(savePracticeAutoHides('exams', hideState), true)
assert.deepEqual({ ...readPracticeAutoHides('exams') }, hideState, '刷新后保留隐藏记录、截止时间和标记前状态')
assert.deepEqual(Object.keys(readPracticeAutoHides('ll880')), [], '880 和试卷的隐藏记录隔离')
storage.set(practiceAutoHideKey('ll880'), JSON.stringify({ '../bad': { deadline: 1 }, negative: { deadline: -1 }, invalid: null, valid: { deadline: 0 } }))
assert.deepEqual(Object.keys(readPracticeAutoHides('ll880')), ['valid'])
storage.set(practiceAutoHideKey('ll880'), '{broken')
assert.deepEqual(Object.keys(readPracticeAutoHides('ll880')), [])
assert.equal(savePracticeProgress(marked), true)
assert.equal(isPending(readPracticeProgress().q2025), true)
const mastered = { q2025: { ...marked.q2025, mastery: 'mastered', updatedAt: 200, reviews: 1 } }
assert.equal(isPending(mastered.q2025), false)
assert.equal(normalizeProgress({ q: { mastery: 'unknown' } }).q.mastery, 'wrong', '旧「不会」可能是自动判错，保留为待标')
assert.equal(normalizeProgress({ q: { mastery: 'unfamiliar' } }).q.mastery, 'wrong', '旧「不熟练」不猜测具体错因')
for (const mastery of ['no-idea', 'calculation-error', MISSED_POINT_MASTERY, 'wrong']) {
  assert.equal(matchesPracticeStatus({ mastery }, 'pending'), true, '手动错因与未分类的作答错误都进入错题')
}
assert.equal(matchesPracticeStatus({ mastery: 'calculation-error' }, 'no-idea'), false)
assert.equal(isPending(undefined), false)
assert.equal(matchesPracticeStatus({ favorite: true, mastery: 'mastered' }, 'pending'), false, '收藏与做题状态分别筛选')
assert.equal(matchesPracticeStatus({ favorite: true, mastery: 'mastered' }, 'favorites'), true)
assert.equal(matchesPracticeStatus({ mastery: 'mastered' }, 'unmarked'), false)
assert.equal(matchesPracticeStatus(undefined, 'unmarked'), true)
assert.equal(matchesPracticeStatus(undefined, 'favorites'), false)
const favorite = normalizeProgress({ q: { favorite: true, note: '收藏笔记', updatedAt: 200, reviews: 0 } })
assert.equal(mergeProgress({}, favorite).q.favorite, true, '备份合并保留收藏')
assert.equal(mergeProgress(favorite, { q: { ...favorite.q, favorite: false, updatedAt: 300 } }).q.favorite, false, '取消收藏可以保存')
assert.equal(normalizeProgress({ q: { favorite: 'true' } }).q.favorite, undefined)
const favoriteWithReason = { ...marked.q2025, ...togglePracticeFavorite(favorite.q, 'favorite-idea') }
const favoriteWithTwoReasons = { ...favoriteWithReason, ...togglePracticeFavorite(favoriteWithReason, 'favorite-hard') }
const restoredFavorite = mergeProgress({}, { q: favoriteWithTwoReasons }).q
assert.equal(matchesPracticeStatus(restoredFavorite, 'pending'), true, '收藏不会覆盖错因')
assert.equal(matchesPracticeStatus(restoredFavorite, 'favorite-idea'), true)
assert.equal(matchesPracticeStatus(restoredFavorite, 'favorite-hard'), true)
assert.equal(matchesPracticeStatus(restoredFavorite, 'favorite-calculation'), false)
assert.equal(matchesPracticeStatus(favorite.q, 'favorite-hard'), false, '旧收藏保留，但不自动分配原因')
const oneReason = { ...restoredFavorite, ...togglePracticeFavorite(restoredFavorite, 'favorite-hard') }
assert.equal(oneReason.favorite, true)
assert.equal(togglePracticeFavorite(oneReason, 'favorite-idea').favorite, false)
const missedPoint = { ...oneReason, ...practiceMasteryPatch(oneReason, MISSED_POINT_MASTERY) }
const restoredMissedPoint = mergeProgress({}, { q: missedPoint }).q
assert.equal(matchesPracticeStatus(restoredMissedPoint, MISSED_POINT_MASTERY), true, '联动标记保留为错因')
assert.equal(matchesPracticeStatus(restoredMissedPoint, MISSED_POINT_FAVORITE), true, '联动标记也进入收藏')
assert.equal(matchesPracticeStatus(restoredMissedPoint, 'favorite-idea'), true, '原收藏标签一起保留')
assert.deepEqual(practiceMasteryPatch(restoredMissedPoint, MISSED_POINT_MASTERY).favoriteReasons, restoredMissedPoint.favoriteReasons, '重标同一错因不会取消收藏或重复添加')
const removedMissedFavorite = { ...restoredMissedPoint, ...togglePracticeFavorite(restoredMissedPoint, MISSED_POINT_FAVORITE) }
assert.equal(matchesPracticeStatus(removedMissedFavorite, MISSED_POINT_MASTERY), true, '取消该收藏标签仍保留错因')
const masteredMissedPoint = { ...restoredMissedPoint, ...practiceMasteryPatch(restoredMissedPoint, 'mastered') }
assert.equal(matchesPracticeStatus(masteredMissedPoint, 'mastered'), true)
assert.equal(matchesPracticeStatus(masteredMissedPoint, 'pending'), true, '普通练习点掌握后仍保留错题')
assert.equal(matchesPracticeStatus(mergeProgress({}, { q: masteredMissedPoint }).q, MISSED_POINT_MASTERY), true, '错题库保存原错因并支持筛选')
const dismissedMistake = mergeProgress({}, { q: { ...masteredMissedPoint, mistakeReason: undefined } }).q
assert.equal(matchesPracticeStatus(dismissedMistake, 'pending'), false)
assert.equal(dismissedMistake.mastery, 'mastered')
assert.equal(dismissedMistake.note, restoredMissedPoint.note)
assert.equal(dismissedMistake.favorite, true)
assert.equal(matchesPracticeStatus(masteredMissedPoint, MISSED_POINT_FAVORITE), true, '掌握后仍能按收藏标签找到')
assert.equal(isUnattempted(undefined), true)
assert.equal(isUnattempted({ note: '只记了提醒' }), true)
assert.equal(isUnattempted({ mastery: 'mastered' }), false, '旧的熟练度记录也表示做过')
assert.equal(isUnattempted({ mastery: 'wrong' }), false)
assert.equal(isUnattempted({ attemptedAt: 100 }), false, '已选择过答案的题不再属于未做过')
assert.equal(isUnattempted({ reviews: 1 }), false, '旧的复习次数记录也表示做过')
const attempted = normalizeProgress({ q: { attemptedAt: 100, note: '', updatedAt: 200, reviews: 0 } })
assert.equal(attempted.q.attemptedAt, 100)
assert.equal(mergeProgress({}, attempted).q.attemptedAt, 100, '导入导出、合并不能丢失作答记录')
assert.equal(normalizeProgress({ q: { attemptedAt: Infinity } }).q.attemptedAt, undefined)
assert.equal(normalizeProgress({ q: { attemptedAt: -1 } }).q.attemptedAt, undefined)
assert.equal(hasNote(undefined), false)
assert.equal(hasNote({ note: ' \n\t' }), false, '空白不算笔记')
assert.equal(hasNote({ note: '先判断导数奇偶性', mastery: 'mastered' }), true, '已掌握的笔记也应收录')
assert.equal(mergeProgress(mastered, marked).q2025.mastery, 'mastered', '旧备份不得覆盖较新状态')
const restored = mergeProgress(marked, mastered)
assert.equal(restored.q2025.note, marked.q2025.note)
assert.equal(restored.q2025.reviews, 1)
assert.equal(savePracticeProgress(restored), true)
assert.equal(readPracticeProgress().q2025.mastery, 'mastered')
storage.set(PRACTICE_STORAGE_KEY, '{broken')
assert.deepEqual(readPracticeProgress(), {})
const sanitized = normalizeProgress({ invalid: { mastery: 'invalid', note: 10, reviews: -4, updatedAt: Infinity }, valid: { mastery: 'unknown', note: 'x'.repeat(12000), reviews: 2.7, updatedAt: 50 }, 'bad id': { mastery: 'unknown' } })
assert.equal(sanitized.invalid.mastery, undefined)
assert.equal(sanitized.invalid.reviews, 0)
assert.equal(sanitized.invalid.updatedAt, 0)
assert.equal(sanitized.valid.note.length, 10000)
assert.equal(sanitized.valid.reviews, 2)
assert.equal(sanitized['bad id'], undefined)
const removed = normalizeProgress({ question: { note: '保留笔记', mastery: 'unknown', removed: true, updatedAt: 300, reviews: 2 } })
assert.equal(removed.question.removed, true)
assert.equal(mergeProgress(removed, { question: { ...removed.question, removed: false, updatedAt: 400 } }).question.removed, false)
assert.equal(mergeProgress(removed, { question: { ...removed.question, removed: false, updatedAt: 200 } }).question.removed, true, '旧备份不能撤销较新的移除')
assert.equal(normalizeProgress({ q: { removed: 'true' } }).q.removed, undefined)
assert.equal(normalizeProgress({ q: { removed: 'true', removedAt: 1 } }).q.removedAt, undefined, '无效的移除标记不能产生清理时间')
const removalStart = 1_000_000
const scheduledRemoval = { q: { note: '移除时保留的笔记', mastery: 'unknown', favorite: true, removed: true, removedAt: removalStart, updatedAt: removalStart, reviews: 2 } }
const beforeCleanup = cleanExpiredRemovals(scheduledRemoval, removalStart + REMOVED_RETENTION_MS - 1)
assert.equal(beforeCleanup.changed, false, '满5小时前不得清理')
assert.equal(beforeCleanup.nextDeadline, removalStart + REMOVED_RETENTION_MS)
const afterCleanup = cleanExpiredRemovals(scheduledRemoval, removalStart + REMOVED_RETENTION_MS)
assert.deepEqual(afterCleanup.deletedIds, ['q'])
assert.equal(afterCleanup.progress.q.deletedAt, removalStart + REMOVED_RETENTION_MS)
assert.equal(afterCleanup.progress.q.note, '', '到期清理笔记和复习状态')
assert.equal(afterCleanup.progress.q.mastery, undefined)
assert.equal(afterCleanup.progress.q.favorite, undefined)
assert.equal(afterCleanup.nextDeadline, undefined)
assert.equal(cleanExpiredRemovals(afterCleanup.progress, removalStart + 2 * REMOVED_RETENTION_MS).changed, false, '清理只执行一次')
const migratedRemoval = cleanExpiredRemovals({ q: { note: '旧笔记', removed: true, updatedAt: 1, reviews: 0 } }, removalStart)
assert.equal(migratedRemoval.progress.q.removedAt, removalStart, '旧记录从首次迁移开始计时')
assert.equal(migratedRemoval.nextDeadline, removalStart + REMOVED_RETENTION_MS)
assert.equal(cleanExpiredRemovals(migratedRemoval.progress, removalStart + 1).changed, false, '刷新不重新计时')
const editedRemoval = { q: { ...scheduledRemoval.q, note: '移除后补充的笔记', updatedAt: removalStart + REMOVED_RETENTION_MS - 1 } }
assert.equal(cleanExpiredRemovals(editedRemoval, removalStart + REMOVED_RETENTION_MS).deletedIds.length, 1, '编辑笔记不延长清理时间')
const cancelledRemoval = normalizeProgress({ q: { ...scheduledRemoval.q, removed: false } })
assert.equal(cancelledRemoval.q.removedAt, undefined, '恢复题目取消原来的清理时间')
assert.equal(cleanExpiredRemovals(cancelledRemoval, removalStart + REMOVED_RETENTION_MS).nextDeadline, undefined)
const staleRestore = { q: { note: '旧副本', removed: false, updatedAt: removalStart + 3 * REMOVED_RETENTION_MS, reviews: 0 } }
assert.equal(mergeProgress(afterCleanup.progress, staleRestore).q.deletedAt, afterCleanup.progress.q.deletedAt, '旧副本不能使已清理的题复活')
assert.equal(mergeProgress(staleRestore, afterCleanup.progress).q.deletedAt, afterCleanup.progress.q.deletedAt, '合并顺序不影响清理记录')
const removalWithoutTime = { q: { ...scheduledRemoval.q, removedAt: undefined, updatedAt: removalStart + 1 } }
assert.equal(mergeProgress(scheduledRemoval, removalWithoutTime).q.removedAt, removalStart, '导入旧格式不能延长现有清理时间')
globalThis.localStorage.setItem = () => { throw new Error('QuotaExceededError') }
assert.equal(savePracticeLocation('exams', checkpoint), false)
assert.equal(savePracticeProgress(marked), false)
console.log(`错题回归通过：${practiceQuestions.length} 道正式题数据校验、示例隔离、状态收集与移出、保存与恢复、旧备份合并、损坏数据及保存失败处理`)
