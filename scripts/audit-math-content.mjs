#!/usr/bin/env node

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import katex from '../client/node_modules/katex/dist/katex.mjs'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)))
const names = ['高等数学', '线性代数']
const generated = readFileSync(resolve(root, 'client/src/generated/math2-content.ts'), 'utf8')
const json = generated.match(/export const mathChapters: MathChapter\[\] = ([\s\S]*?)\n\nexport const mathTopics/)?.[1]
if (!json) throw new Error('无法读取生成的知识库')
const chapters = JSON.parse(json)
const errors = []
const sourceIds = []
let displayCount = 0

for (const name of names) {
  const lines = readFileSync(resolve(root, `content/approved/${name}.md`), 'utf8').split('\n')
  let heading = ''
  for (let index = 0; index < lines.length; index++) {
    if (lines[index].startsWith('##### ')) heading = lines[index].slice(6)
    if (lines[index] === '\\[') {
      displayCount++
      if (!/^<!--\s*formula\s+/.test(lines[index - 1] ?? '')) {
        errors.push(`${name}:${index + 1} 展示公式没有独立标注（${heading}）`)
      }
    }
    for (const match of lines[index].matchAll(/<!--\s*formula\s+([^\n]*?)\s*-->/g)) {
      try {
        const metadata = JSON.parse(match[1])
        for (const item of metadata.items ?? [metadata]) {
          sourceIds.push(item.id)
          if (!item.id || !item.title || !item.context || !Array.isArray(item.aliases)) {
            errors.push(`${name}:${index + 1} 元数据缺字段`)
          }
          if (/公式\d/.test(item.title)) errors.push(`${name}:${index + 1} 未命名的公式：${item.id}`)
        }
      } catch (error) {
        errors.push(`${name}:${index + 1} 标注 JSON 错误：${error.message}`)
      }
    }
  }
}

if (new Set(sourceIds).size !== sourceIds.length) errors.push('源文件中有重复公式 ID')
const generatedIds = []
for (const chapter of chapters) {
  for (const topic of chapter.topics) {
    const mathTokens = [...topic.body.replace(/<!--[\s\S]*?-->/g, '').matchAll(/\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$[^$\n]+?\$|\\\([^\n]*?\\\)/g)]
    for (const formula of topic.formulas) {
      generatedIds.push(formula.id)
      const token = mathTokens[formula.sourceBlockIndex]?.[0]
      if (!token) errors.push(`${formula.id} 不能定位到正文中的公式`)
      try {
        katex.renderToString(formula.latex, { throwOnError: true, trust: false, strict: 'ignore' })
      } catch (error) {
        errors.push(`${formula.id} KaTeX 渲染失败：${error.message}`)
      }
    }
  }
}
if (generatedIds.length !== sourceIds.length) errors.push(`源文件 ${sourceIds.length} 条，生成文件 ${generatedIds.length} 条，数量不符`)
if (new Set(generatedIds).size !== generatedIds.length) errors.push('生成文件中有重复公式 ID')
for (const id of sourceIds) if (!generatedIds.includes(id)) errors.push(`源文件公式未进入索引：${id}`)

console.log(`覆盖检查：${displayCount} 个展示公式块，${generatedIds.length} 条独立公式。`)
if (errors.length) {
  errors.forEach((error) => console.error(error))
  process.exitCode = 1
} else {
  console.log('公式标注、ID、索引定位和 KaTeX 渲染均通过。')
}
