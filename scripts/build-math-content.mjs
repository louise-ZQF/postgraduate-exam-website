#!/usr/bin/env node

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourcePath = resolve(projectRoot, 'content/数学二三资料精编.md')
const outputPath = resolve(projectRoot, 'client/src/generated/math2-content.ts')
const daguanyuanPath = resolve(projectRoot, 'content/daguanyuan-math2-types.json')

const source = readFileSync(sourcePath, 'utf8').replace(/\r\n/g, '\n')
const lines = source.split('\n')
const daguanyuanTypes = JSON.parse(readFileSync(daguanyuanPath, 'utf8'))

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
    .replace(/<[^>]+>/g, ' ')
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

function conciseBody(markdown) {
  return markdown
    .replace(/##### (?:简要方法|数学翻译|选法依据)\n[\s\S]*?(?=\n##### )/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
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

function daguanyuanGroup(chapterTitle, title) {
  if (chapterTitle.includes('极限')) {
    if (/函数的定义域|复合函数|函数方程|奇偶性|周期性|单调性与有界性/.test(title)) return '函数'
    if (/连续|间断点|闭区间连续/.test(title)) return '连续'
    return '极限'
  }
  if (chapterTitle.includes('一元微分')) {
    if (/罗尔|拉格朗日|柯西|中值|辅助函数|介值性|泰勒公式/.test(title)) return '微分中值定理'
    if (/求导公式|求极限或导数|复合函数|对数求导|幂指函数求导|隐函数求导|参数方程求导|反函数求导|高阶导数/.test(title)) return '导数计算'
    if (/可导|连续与微分|单侧导数|绝对值函数|导函数连续|不可导点|最高阶数/.test(title)) return '导数概念'
    return '导数应用'
  }
  if (chapterTitle.includes('一元积分')) {
    if (/反常积分/.test(title)) return '反常积分'
    if (/面积|体积|弧长|曲面|平均值|物理应用|坐标轴平行线|斜线旋转/.test(title)) return '积分应用'
    if (/中值定理|恒等式|零点存在|不等式|估值|几何意义|三大定理|已知积分等式|正负/.test(title)) return '其他积分题型'
    return '积分计算'
  }
  if (chapterTitle.includes('微分方程')) {
    if (/性质与结构|判断微分方程的阶|解与初始条件|线性微分方程解的结构/.test(title)) return '微分方程解的性质与结构'
    if (/反求微分方程|由解族反求/.test(title)) return '已知解反求微分方程（逆问题）'
    if (/处理微分方程解/.test(title)) return '处理微分方程解'
    if (/建立微分方程|以各种形式/.test(title)) return '以各种形式给出微分方程'
    return '解微分方程'
  }
  if (chapterTitle.includes('多元微分')) {
    if (/重极限|二重极限/.test(title)) return '重极限'
    if (/极值|最值|单调性/.test(title)) return '多元微分应用'
    if (/定义域|连续性|可微、连续|概念/.test(title)) return '概念题'
    return '偏导数'
  }
  if (chapterTitle.includes('二重积分')) {
    if (/交换|比大小|定正负|给出的函数|求函数表达式|抽象函数|二重变限|概念|性质|几何意义|中值|估值|应用|面积|体积|形心|质心|定义型/.test(title)) return '其他'
    return '计算'
  }
  if (chapterTitle.includes('行列式')) {
    if (/余子式/.test(title)) return '(代数)余子式相关问题'
    if (/多项式|参数因子|次数|f\(x\)/.test(title)) return '多项式 $f(x)$ 以行列式形式给出'
    if (/克拉默/.test(title)) return 'Cramer法则'
    if (/抽象|矩阵乘积|转置|逆矩阵|伴随矩阵|秩一|特征值|可逆性|证明行列式/.test(title)) return '抽象行列式计算'
    return '具体行列式计算'
  }
  if (chapterTitle.includes('第二章　矩阵')) {
    if (/求逆|逆矩阵/.test(title)) return '逆'
    if (/伴随矩阵/.test(title)) return '伴随矩阵'
    if (/秩/.test(title)) return '秩'
    if (/高次幂|矩阵多项式|降幂/.test(title)) return '高次幂'
    if (/初等变换|初等矩阵/.test(title)) return '初等变换与初等矩阵'
    if (/分块/.test(title)) return '分块矩阵'
    if (/AB=|矩阵方程/.test(title)) return '$AB$ 关系'
    if (/分解/.test(title)) return '矩阵分解'
    return '其他题型'
  }
  if (chapterTitle.includes('第三章　向量')) {
    if (/极大|秩/.test(title)) return '极大无关组'
    if (/等价|公共向量/.test(title)) return '向量组等价'
    if (/相关|无关|增加一个|构造新向量|矩阵作用|特征值|递推/.test(title)) return '线性相关与无关'
    if (/线性表示|少表多/.test(title)) return '线性表示'
    return '向量有关计算'
  }
  if (chapterTitle.includes('线性方程组')) {
    if (/解的判定|齐次方程组解的判定|非齐次方程组解的判定/.test(title)) return '解的判定'
    if (/矩阵方程/.test(title)) return '矩阵方程'
    if (/公共解|同解|解集|解的关系/.test(title)) return '解的关系'
    if (/求解|通解|基础解系|高斯消元|含参数|非齐次解|解向量|线性组合/.test(title)) return '方程组求解'
    return '已知方程组的解推导其他'
  }
  if (chapterTitle.includes('特征值与特征向量')) {
    if (/实对称|正交对角化|正交补/.test(title)) return '实对称矩阵'
    if (/相似对角化|对角化|重特征值|公共特征向量|同时对角化|含参数矩阵/.test(title)) return '相似对角化'
    if (/相似/.test(title)) return '相似'
    return '特征值与特征向量'
  }
  if (chapterTitle.includes('二次型')) {
    if (/惯性指数相同/.test(title)) return '求可逆矩阵 $\\mathbf{P}$，使得 $\\mathbf{A} = \\mathbf{P}^\\top \\mathbf{E} \\mathbf{P}$'
    if (/正定|负定|半正定|不定|矩阵不等式/.test(title)) return '正定'
    if (/合同/.test(title)) return '合同'
    if (/规范形/.test(title)) return '规范形'
    if (/惯性指数/.test(title)) return '正负惯性指数'
    if (/标准形|正交变换|配方法/.test(title)) return '标准型'
    if (/一个二次型|之间的.*变换|目标形式/.test(title)) return '一个二次型变成另一个二次型，求变换矩阵'
    if (/最值|最佳常数/.test(title)) return '求二次型最值'
    if (/解集/.test(title)) return '求二次型的解'
    return '二次型的秩或矩阵'
  }
  return title
}

function daguanyuanChapterKey(chapterTitle) {
  return chapterTitle
    .replace(/^第[一二三四五六七八九十]+章[　 ]*/, '')
    .replace(/（.*?）/g, '')
}

function typeDirectory(chapterTitle, groupTitle) {
  const chapterKey = daguanyuanChapterKey(chapterTitle)
  const rows = daguanyuanTypes[chapterKey]?.[groupTitle] ?? []
  if (!rows.length) return ''
  const names = [...new Set(rows.map((row) => row.name))]
  return `<details class="type-directory">\n<summary>大观园细分题型（${names.length}）</summary>\n<ul>\n${names.map((name) => `<li>${name}</li>`).join('\n')}\n</ul>\n</details>`
}

for (const chapter of chapters) {
  const grouped = new Map()
  for (const topic of chapter.topics) {
    if (/求两个生成空间的公共向量/.test(topic.title)) continue
    const title = daguanyuanGroup(chapter.title, topic.title)
    const chapterKey = daguanyuanChapterKey(chapter.title)
    if (!daguanyuanTypes[chapterKey]?.[title]) {
      throw new Error(`题型名称不在大观园分类中：${chapterKey} > ${title}（原题型：${topic.title}）`)
    }
    if (!grouped.has(title)) grouped.set(title, [])
    grouped.get(title).push(topic)
  }
  const chapterKey = daguanyuanChapterKey(chapter.title)
  const groupOrder = Object.keys(daguanyuanTypes[chapterKey] ?? {})
  const missingGroups = groupOrder.filter((title) => !grouped.has(title))
  if (missingGroups.length) {
    throw new Error(`大观园题型组缺失：${chapterKey} > ${missingGroups.join('、')}`)
  }
  chapter.topics = [...grouped.entries()]
    .sort(([left], [right]) => groupOrder.indexOf(left) - groupOrder.indexOf(right))
    .map(([title, topics], index) => {
    const directory = typeDirectory(chapter.title, title)
    const bodies = [...new Set(topics.map((topic) => conciseBody(topic.body)).filter(Boolean))]
    const body = [directory, ...bodies].filter(Boolean).join('\n\n---\n\n')
    return {
      id: `${chapter.id}-${String(index + 1).padStart(3, '0')}`,
      title,
      body,
      searchText: compactText(`${title}\n${directory}\n${topics.map((topic) => `${topic.title}\n${topic.searchText}`).join('\n')}`),
      summary: makeSummary(body),
    }
    })
}

if (chapters.length !== 12) {
  throw new Error(`应生成 12 章，实际生成 ${chapters.length} 章`)
}

const topicCount = chapters.reduce((total, chapter) => total + chapter.topics.length, 0)
if (topicCount < 45) {
  throw new Error(`知识点数量异常：${topicCount}`)
}

const banner = `/* 此文件由 scripts/build-math-content.mjs 根据大观园数学二分类与精编公式内容自动生成，请勿手工修改。 */\n`
const output = `${banner}import type { MathChapter } from '@/math/types'\n\nexport const mathChapters: MathChapter[] = ${JSON.stringify(chapters, null, 2)}\n\nexport const mathTopics = mathChapters.flatMap((chapter) => chapter.topics.map((topic) => ({ ...topic, chapterId: chapter.id, chapterTitle: chapter.title, partId: chapter.partId, partTitle: chapter.partTitle })))\n\nexport const mathContentStats = { chapters: mathChapters.length, topics: mathTopics.length }\n`

mkdirSync(dirname(outputPath), { recursive: true })
writeFileSync(outputPath, output)
console.log(`[数学二内容] 已生成 ${chapters.length} 章、${topicCount} 个可搜索知识点`)
