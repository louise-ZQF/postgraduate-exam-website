import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import ts from 'typescript'

const root = resolve(import.meta.dirname, '..')
async function loadModule(file) {
  let source = readFileSync(resolve(root, file), 'utf8')
  if (file.endsWith('practiceQuestions.ts')) {
    const questions = readFileSync(resolve(root, 'client/src/content/practice-questions.json'), 'utf8')
    source = source.replace("import questions from '@/content/practice-questions.json'", `const questions = ${questions}`)
  }
  const compiled = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext } }).outputText
  return import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`)
}
const { normalizeProgress, mergeProgress, isPending, readPracticeProgress, savePracticeProgress, PRACTICE_STORAGE_KEY } = await loadModule('client/src/math/practice.ts')
const { practiceQuestions, demoQuestion } = await loadModule('client/src/math/practiceQuestions.ts')
const ids = new Set()
for (const q of practiceQuestions) {
  assert.match(q.id, /^[a-zA-Z0-9_-]{1,120}$/)
  assert.ok(!ids.has(q.id), `重复题目 ID：${q.id}`)
  ids.add(q.id)
  assert.ok(Number.isInteger(q.year) && q.year >= 1980 && q.year <= 2100, `年份无效：${q.id}`)
  for (const field of ['number', 'source', 'topic', 'stem', 'answer', 'explanation']) assert.ok(typeof q[field] === 'string' && q[field].trim(), `${q.id} 缺少 ${field}`)
  assert.ok(['choice', 'fill', 'solution'].includes(q.type))
  if (q.type === 'choice') {
    assert.ok(q.options?.length >= 2)
    assert.equal(new Set(q.options.map(o => o.key)).size, q.options.length)
    assert.ok(q.options.every(o => typeof o.text === 'string' && o.text.trim()))
    assert.ok(q.options.some(o => o.key === q.correctOption))
  }
}
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
globalThis.localStorage.setItem = () => { throw new Error('QuotaExceededError') }
assert.equal(savePracticeProgress(marked), false)
console.log(`错题回归通过：${practiceQuestions.length} 道正式题数据校验、示例隔离、状态收集与移出、保存与恢复、旧备份合并、损坏数据及保存失败处理`)
