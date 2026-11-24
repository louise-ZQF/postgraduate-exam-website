import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import ts from 'typescript'

const root = resolve(import.meta.dirname, '..')
const generatedPath = resolve(root, 'client/src/generated/math2-content.ts')
const favoritesPath = resolve(root, 'client/src/math/favorites.ts')

async function importTranspiled(source) {
  const compiled = ts.transpileModule(source, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
  }).outputText
  return import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`)
}

const content = await importTranspiled(readFileSync(generatedPath, 'utf8'))
globalThis.__mathFavoritesTestData = content
const favoritesSource = readFileSync(favoritesPath, 'utf8').replace(
  "import { legacyAnchorIds, mathFormulas, mathTopics } from '@/generated/math2-content'",
  'const { legacyAnchorIds, mathFormulas, mathTopics } = globalThis.__mathFavoritesTestData',
)
const { favoriteDisplayTitle, favoriteTopicContent, favoriteTopicPreview, readFavorites, toggleFavorite } = await importTranspiled(favoritesSource)
delete globalThis.__mathFavoritesTestData

const storage = new Map()
globalThis.window = {
  localStorage: {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
  },
  dispatchEvent: () => {},
}
globalThis.CustomEvent = class CustomEvent {
  constructor(type) { this.type = type }
}

const oldFavorite = {
  id: 'calculus-2z1adl-3', targetId: 'calculus-2z1adl-3', kind: 'formula',
  title: '定积分的几何应用（数学二）：形心与质心：bar y',
  summary: '旧摘要', context: 'a\\le x\\le b、\\(0\\le y\\le f(x)\\)',
  latex: '\\bar y=0', chapterId: 'calculus-03', chapterTitle: '旧章节',
  partTitle: '高等数学', addedAt: 123,
}
storage.set('math2-favorites-v2', JSON.stringify([oldFavorite]))
const [refreshed] = readFavorites()
assert.equal(refreshed.title, '形心与质心的纵坐标')
assert.match(refreshed.context, /\\\(a\\le x\\le b\\\)/)
assert.doesNotMatch(refreshed.context, /由 a\\le/)
assert.equal(refreshed.latex, content.mathFormulas.find((item) => item.id === oldFavorite.id).latex)
assert.equal(refreshed.addedAt, 123)

const curvatureFavorite = { ...oldFavorite, id: 'calculus-hemipr-2', targetId: 'calculus-hemipr-2', title: '曲率：Y' }
storage.set('math2-favorites-v2', JSON.stringify([curvatureFavorite]))
const [renamedCurvature] = readFavorites()
assert.equal(renamedCurvature.title, '曲率圆圆心的纵坐标')
assert.equal(renamedCurvature.targetId, curvatureFavorite.targetId)

storage.delete('math2-favorites-v2')
const anchor = content.mathTopics.flatMap((topic) => topic.anchors).find((item) => item.legacyId === 'calculus-03-002-anchor-011')
assert.ok(anchor)
storage.set('math2-favorites-v1', JSON.stringify([{
  id: anchor.legacyId, title: '旧标题', summary: '旧摘要',
  chapterId: 'calculus-03', chapterTitle: '旧章节', partTitle: '高等数学', addedAt: 456,
}]))
const [migrated] = readFavorites()
assert.equal(migrated.kind, 'topic')
assert.equal(migrated.id, anchor.id)
assert.equal(migrated.title, anchor.title)
assert.equal(migrated.summary, anchor.displaySummary)
assert.equal(migrated.addedAt, 456)

storage.set('math2-favorites-v2', JSON.stringify([{
  ...migrated, title: '过期标题', summary: '过期摘要', context: 'a\\le x\\le b',
}]))
const [refreshedTopic] = readFavorites()
assert.equal(refreshedTopic.title, anchor.title)
assert.equal(refreshedTopic.context, undefined)

const remaining = toggleFavorite({ ...refreshed, addedAt: undefined })
assert.equal(remaining.some((item) => item.id === refreshed.id), true)
assert.equal(remaining.some((item) => item.id === refreshedTopic.id), true)

for (const [id, name] of [['calculus-14nlaio-1', 'tan'], ['calculus-14nlaio-2', 'cot']]) {
  const formula = content.mathFormulas.find(item => item.id === id)
  assert.equal(favoriteDisplayTitle({ ...oldFavorite, ...formula }), '\\(\\' + name + '^2x\\) 的不定积分')
}

const tangent = favoriteTopicContent({ ...migrated, targetId: 'anchor-1ewqz1p' })
assert.match(favoriteTopicPreview(tangent.markdown), /y-y_0=f'\(x_0\)/)
assert.match(tangent.markdown, /法线斜率/)
assert.doesNotMatch(tangent.markdown, /两条可写成/)
const volume = favoriteTopicContent({ ...migrated, targetId: 'anchor-1x4bzwi' })
assert.match(favoriteTopicPreview(volume.markdown), /V_x=\\pi\\int/)
assert.match(volume.markdown, /V_y=2\\pi\\int/)
const inverse = favoriteTopicContent({ ...migrated, targetId: 'calculus-02-002-anchor-004' })
assert.equal(inverse.targetId, 'calculus-11k5gtx-1')
assert.match(favoriteTopicPreview(inverse.markdown), /f\^\{-1\}/)
assert.match(inverse.markdown, /\\frac\{d\^2x\}\{dy\^2\}/)
assert.doesNotMatch(inverse.markdown, /幂指函数/)
console.log('收藏回归通过：公式标题排版、旧收藏迁移、知识点正文与精确跳转')
