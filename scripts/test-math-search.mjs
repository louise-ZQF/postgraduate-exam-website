import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import ts from 'typescript'

const root = resolve(import.meta.dirname, '..')
const generatedPath = resolve(root, 'client/src/generated/math2-content.ts')
const searchPath = resolve(root, 'client/src/math/search.ts')

async function importTranspiled(source) {
  const compiled = ts.transpileModule(source, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
  }).outputText
  return import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`)
}

const content = await importTranspiled(readFileSync(generatedPath, 'utf8'))
globalThis.__mathSearchTestData = content
const searchSource = readFileSync(searchPath, 'utf8').replace(
  "import { mathFormulas, mathTopics } from '@/generated/math2-content'",
  'const { mathFormulas, mathTopics } = globalThis.__mathSearchTestData',
)
const { searchMathWithCount, normalizeFormulaQuery } = await importTranspiled(searchSource)
delete globalThis.__mathSearchTestData

const checks = [
  ['变力做功', 'calculus-1depk2'],
  ['弹簧做功', 'calculus-39sc7s'],
  ['抽水做功', 'calculus-4qs95x-1'],
  ['提水做功', 'calculus-4qs95x-1'],
  ['液体静压力', 'calculus-1djpxhg-1'],
  ['形心x坐标', 'calculus-2z1adl-2'],
  ['椭圆面积', 'calculus-5ysdno'],
  ['球的表面积', 'calculus-sse8ka'],
  ['二重积分换元', 'calculus-wkbq2e'],
  ['幂函数求导', 'calculus-12isv29-1'],
  ['sin x积分', 'calculus-nadlj1-1'],
  ['积分中值定理', 'calculus-sx9q78'],
  ['推广的中值定理', 'calculus-zbrhd0'],
  ['推广的积分中值定理', 'calculus-zbrhd0'],
  ['广义积分中值定理', 'calculus-zbrhd0'],
  ['积分中值定理的推广', 'calculus-zbrhd0'],
  ['牛顿莱布尼茨公式', 'calculus-1dh4te7-1'],
  ['链式法则', 'calculus-1qzsugn-3'],
  ['泰勒公式', 'calculus-1cqcqda'],
  ['相似矩阵怎么判断', 'linear-1ordvlf'],
  ['矩阵能否对角化', 'linear-m6scbb'],
  ['可对角化条件', 'linear-m6scbb'],
  ['特征根', 'linear-12k0arn-1'],
  ['特征向量怎么求', 'linear-143ie5'],
  ['正定判定', 'linear-cht9e0-1'],
  ['表出秩不增', 'linear-sk4b4h'],
  ['被表秩不大', 'linear-sk4b4h'],
  ['向量组线性表示的秩关系', 'linear-sk4b4h'],
  ['二阶导数大于零', 'calculus-convex-up'],
  ['中心对称二重积分', 'calculus-double-integral-origin-odd-zero'],
  ["f''(x)>0", 'calculus-convex-up'],
  ["f''(x)<0", 'calculus-convex-down'],
  ['P^-1AP', 'linear-1ordvlf'],
]

for (const [query, expected] of checks) {
  const outcome = searchMathWithCount(query, 8)
  assert.equal(outcome.results[0]?.resultId, expected,
    `“${query}”首条应为 ${expected}，实际为 ${outcome.results[0]?.resultId ?? '无结果'}`)
  assert.equal(outcome.results[0]?.targetId, expected, `“${query}”应精确跳到该公式`)
  assert.ok(outcome.total >= outcome.results.length)
}

assert.equal(searchMathWithCount("f''(x)>0").results.some((item) => item.resultId === 'calculus-convex-down'), false)
assert.equal(searchMathWithCount("f''(x)<0").results.some((item) => item.resultId === 'calculus-convex-up'), false)
assert.equal(searchMathWithCount('形心x坐标').results.some((item) => item.resultId === 'calculus-2z1adl-3'), false)
assert.equal(searchMathWithCount('二阶导数大于零').results.some((item) => item.resultId === 'calculus-convex-down'), false)
assert.equal(searchMathWithCount('推广的积分中值定理').results.some((item) => item.resultId === 'calculus-1dh4te7-1'), false)
assert.equal(searchMathWithCount('量子场论').total, 0)
assert.equal(normalizeFormulaQuery("f″(x)＞0"), normalizeFormulaQuery("f''(x)>0"))

const ids = content.mathFormulas.map((formula) => formula.id)
assert.equal(new Set(ids).size, ids.length, '公式 ID 必须唯一，旧收藏依赖这些 ID')
console.log(`搜索回归通过：${checks.length} 组首条命中、反向条件、无结果与 ID 检查`)
