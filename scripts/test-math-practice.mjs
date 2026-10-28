import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { createRequire } from 'node:module'
import ts from 'typescript'

const root = resolve(import.meta.dirname, '..')
async function loadModule(file) {
  let source = readFileSync(resolve(root, file), 'utf8')
  if (file.endsWith('practiceQuestions.ts')) {
    const questions = readFileSync(resolve(root, 'client/src/content/practice-questions.json'), 'utf8')
    source = source.replace("import questions from '@/content/practice-questions.json'", `const questions = ${questions}`)
    const ll880Questions = readFileSync(resolve(root, 'client/src/content/ll880-questions.json'), 'utf8')
    source = source.replace("import ll880Questions from '@/content/ll880-questions.json'", `const ll880Questions = ${ll880Questions}`)
  }
  const compiled = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext } }).outputText
  return import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`)
}
const { normalizeProgress, mergeProgress, isPending, isUnattempted, matchesPracticeStatus, hasNote, readPracticeProgress, savePracticeProgress, PRACTICE_STORAGE_KEY } = await loadModule('client/src/math/practice.ts')
const { practiceQuestions, demoQuestion } = await loadModule('client/src/math/practiceQuestions.ts')
const { normalizePracticeLocation, readPracticeLocation, savePracticeLocation } = await loadModule('client/src/math/practiceLocation.ts')
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
for (const q of [...weak2025, ...originals2025]) {
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
storage.set('math2-practice-location-v1-ll880', '{broken')
assert.equal(readPracticeLocation('ll880'), undefined)
assert.deepEqual(readPracticeProgress(), Object.create(null))
const marked = { q2025: { mastery: 'unknown', note: '先判断导数奇偶性', updatedAt: 100, reviews: 0 } }
assert.equal(savePracticeProgress(marked), true)
assert.equal(isPending(readPracticeProgress().q2025), true)
const mastered = { q2025: { ...marked.q2025, mastery: 'mastered', updatedAt: 200, reviews: 1 } }
assert.equal(isPending(mastered.q2025), false)
assert.equal(isPending({ mastery: 'unfamiliar' }), true)
assert.equal(isPending(undefined), false)
for (const status of ['all', 'pending', 'unmarked', 'mastered', 'unknown', 'unfamiliar', 'favorites']) {
  assert.equal(matchesPracticeStatus({ favorite: true, mastery: 'mastered' }, status), true, '收藏题必须保留在各显示模式')
}
assert.equal(matchesPracticeStatus({ mastery: 'mastered' }, 'unmarked'), false)
assert.equal(matchesPracticeStatus({ mastery: 'unknown' }, 'pending'), true)
assert.equal(matchesPracticeStatus(undefined, 'unmarked'), true)
assert.equal(matchesPracticeStatus(undefined, 'favorites'), false)
const favorite = normalizeProgress({ q: { favorite: true, note: '收藏笔记', updatedAt: 200, reviews: 0 } })
assert.equal(mergeProgress({}, favorite).q.favorite, true, '备份合并保留收藏')
assert.equal(mergeProgress(favorite, { q: { ...favorite.q, favorite: false, updatedAt: 300 } }).q.favorite, false, '取消收藏可以保存')
assert.equal(normalizeProgress({ q: { favorite: 'true' } }).q.favorite, undefined)
assert.equal(isUnattempted(undefined), true)
assert.equal(isUnattempted({ note: '只记了提醒' }), true)
assert.equal(isUnattempted({ mastery: 'mastered' }), false, '旧的熟练度记录也表示做过')
assert.equal(isUnattempted({ mastery: 'unknown' }), false)
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
globalThis.localStorage.setItem = () => { throw new Error('QuotaExceededError') }
assert.equal(savePracticeLocation('exams', checkpoint), false)
assert.equal(savePracticeProgress(marked), false)
console.log(`错题回归通过：${practiceQuestions.length} 道正式题数据校验、示例隔离、状态收集与移出、保存与恢复、旧备份合并、损坏数据及保存失败处理`)
