#!/usr/bin/env node

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourcePath = resolve(projectRoot, 'content/数学二三资料精编.md')
const outputPath = resolve(projectRoot, 'client/src/generated/math2-content.ts')

const source = readFileSync(sourcePath, 'utf8').replace(/\r\n/g, '\n')
const lines = source.split('\n')

const partIds = {
  '第一部分　高等数学': 'calculus',
  '第二部分　线性代数': 'linear-algebra',
}

function compactText(markdown) {
  return markdown
    .replace(/\$\$[\s\S]*?\$\$/g, ' 公式 ')
    .replace(/\\\[[\s\S]*?\\\]/g, ' 公式 ')
    .replace(/\$([^$\n]+)\$/g, '$1')
    .replace(/\\\((.*?)\\\)/g, '$1')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^[-*+]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    .replace(/[|>*_`~]/g, ' ')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[{}]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function makeSummary(markdown) {
  const clean = compactText(markdown).replace(/^(?:方法步骤|适用条件与易错点)\s*/, '')
  return clean.length > 128 ? `${clean.slice(0, 128)}…` : clean
}

const chapters = []
let currentPart = null
let currentChapter = null
let currentTopic = null

function finishTopic() {
  if (!currentTopic || !currentChapter) return
  currentTopic.body = currentTopic.bodyLines.join('\n').trim()
  currentTopic.searchText = compactText(`${currentTopic.title}\n${currentTopic.body}`)
  currentTopic.summary = makeSummary(currentTopic.body)
  delete currentTopic.bodyLines
  currentChapter.topics.push(currentTopic)
  currentTopic = null
}

for (const line of lines) {
  const h2 = line.match(/^##\s+(.+)$/)
  if (h2) {
    const maybePart = h2[1].trim()
    if (partIds[maybePart]) {
      finishTopic()
      currentPart = { id: partIds[maybePart], title: maybePart.replace(/^\u7b2c[\u4e00\u4e8c]\u90e8\u5206\u3000/, '') }
      currentChapter = null
    }
    continue
  }

  const h3 = line.match(/^###\s+(.+)$/)
  if (h3 && currentPart) {
    finishTopic()
    const ordinal = chapters.filter((chapter) => chapter.partId === currentPart.id).length + 1
    currentChapter = {
      id: `${currentPart.id}-${String(ordinal).padStart(2, '0')}`,
      partId: currentPart.id,
      partTitle: currentPart.title,
      title: h3[1].trim(),
      topics: [],
    }
    chapters.push(currentChapter)
    continue
  }

  const h4 = line.match(/^####\s+(.+)$/)
  if (h4 && currentChapter) {
    finishTopic()
    const topicOrdinal = currentChapter.topics.length + 1
    currentTopic = {
      id: `${currentChapter.id}-${String(topicOrdinal).padStart(3, '0')}`,
      title: h4[1].trim(),
      bodyLines: [],
    }
    continue
  }

  if (currentTopic) currentTopic.bodyLines.push(line)
}
finishTopic()

if (chapters.length !== 12) {
  throw new Error(`应生成 12 章，实际生成 ${chapters.length} 章`)
}

const topicCount = chapters.reduce((total, chapter) => total + chapter.topics.length, 0)
if (topicCount < 180) {
  throw new Error(`知识点数量异常：${topicCount}`)
}

const banner = `/* 此文件由 scripts/build-math-content.mjs 根据 content/数学二三资料精编.md 自动生成，请勿手工修改。 */\n`
const output = `${banner}import type { MathChapter } from '@/math/types'\n\nexport const mathChapters: MathChapter[] = ${JSON.stringify(chapters, null, 2)}\n\nexport const mathTopics = mathChapters.flatMap((chapter) => chapter.topics.map((topic) => ({ ...topic, chapterId: chapter.id, chapterTitle: chapter.title, partId: chapter.partId, partTitle: chapter.partTitle })))\n\nexport const mathContentStats = { chapters: mathChapters.length, topics: mathTopics.length }\n`

mkdirSync(dirname(outputPath), { recursive: true })
writeFileSync(outputPath, output)
console.log(`[数学二内容] 已生成 ${chapters.length} 章、${topicCount} 个可搜索知识点`)
