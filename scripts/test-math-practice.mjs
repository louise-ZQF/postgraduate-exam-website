import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
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
const { normalizeProgress, mergeProgress, isPending, hasNote, readPracticeProgress, savePracticeProgress, PRACTICE_STORAGE_KEY } = await loadModule('client/src/math/practice.ts')
const { practiceQuestions, demoQuestion } = await loadModule('client/src/math/practiceQuestions.ts')
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
assert.ok(!ids.has(demoQuestion.id), '预览题不得混入正式题库')
assert.equal(demoQuestion.correctOption, 'C')
const storage = new Map()
globalThis.localStorage = { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) }
assert.deepEqual(readPracticeProgress(), Object.create(null))
const marked = { q2025: { mastery: 'unknown', note: '先判断导数奇偶性', updatedAt: 100, reviews: 0 } }
assert.equal(savePracticeProgress(marked), true)
assert.equal(isPending(readPracticeProgress().q2025), true)
const mastered = { q2025: { ...marked.q2025, mastery: 'mastered', updatedAt: 200, reviews: 1 } }
assert.equal(isPending(mastered.q2025), false)
assert.equal(isPending({ mastery: 'unfamiliar' }), true)
assert.equal(isPending(undefined), false)
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
assert.equal(savePracticeProgress(marked), false)
console.log(`错题回归通过：${practiceQuestions.length} 道正式题数据校验、示例隔离、状态收集与移出、保存与恢复、旧备份合并、损坏数据及保存失败处理`)
