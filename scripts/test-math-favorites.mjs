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
const { readFavorites, toggleFavorite } = await importTranspiled(favoritesSource)
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
console.log('收藏回归通过：旧公式名称与数学说明更新、旧版整组收藏迁移、独立公式共存')
