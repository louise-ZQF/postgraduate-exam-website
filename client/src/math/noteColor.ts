import { protectMarkdownMath } from './markdownMath'

export const noteTextColors = [
  { id: 'default', label: '默认文字色' },
  { id: 'red', label: '红色' },
  { id: 'blue', label: '蓝色' },
  { id: 'green', label: '绿色' },
  { id: 'purple', label: '紫色' },
] as const

export type NoteTextColor = typeof noteTextColors[number]['id']
const closeColor = '</span>'
const colorRunPattern = /<span class="note-text-color note-color-(red|blue|green|purple)">([\s\S]*?)<\/span>/g

function openColor(color: NoteTextColor): string {
  return `<span class="note-text-color note-color-${color}">`
}

function colorRuns(source: string) {
  return [...source.matchAll(colorRunPattern)].map(match => {
    const start = match.index
    const end = start + match[0].length
    const color = match[1] as NoteTextColor
    return { start, end, color, textStart: start + openColor(color).length, textEnd: end - closeColor.length }
  })
}

export function noteColorAt(source: string, start: number, end = start): NoteTextColor {
  return colorRuns(source).find(run => run.textStart <= start && end <= run.textEnd)?.color ?? 'default'
}

export function removeEmptyNoteColors(source: string): string {
  return source.replace(colorRunPattern, (match, _color: string, body: string) => body.trim() ? match : body)
}

export function noteColorLineBreak(source: string, cursor: number): string | undefined {
  const color = noteColorAt(source, cursor)
  if (color === 'default' || protectMarkdownMath(source).ranges.some(range => range.start < cursor && cursor < range.end)) return
  return closeColor + '\n' + openColor(color)
}

function wrapColor(text: string, color: NoteTextColor): string {
  return text && color !== 'default' ? openColor(color) + text + closeColor : text
}

function colorText(text: string, color: NoteTextColor, startsLine: boolean): string {
  if (color === 'default') return text
  const { ranges } = protectMarkdownMath(text)
  const wrapLines = (part: string, atLineStart: boolean) => part.split('\n').map((line, index) => {
    // 保留行首 Markdown 结构，让标题、列表和引用继续按块解析。
    const prefix = index || atLineStart ? line.match(/^(?:[ \t]*(?:#{1,6}|[-+*]|\d+[.)]|>)[ \t]+)+/)?.[0] ?? '' : ''
    const content = line.slice(prefix.length)
    return content.trim() ? prefix + wrapColor(content, color) : line
  }).join('\n')
  let result = ''
  let cursor = 0
  for (const range of ranges) {
    if (!range.block) continue
    result += wrapLines(text.slice(cursor, range.start), cursor === 0 ? startsLine : text[cursor - 1] === '\n')
    result += text.slice(range.start, range.end)
    cursor = range.end
  }
  return result + wrapLines(text.slice(cursor), cursor === 0 ? startsLine : text[cursor - 1] === '\n')
}

export function formatNoteColor(source: string, start: number, end: number, color: NoteTextColor) {
  const collapsed = start === end
  const runs = colorRuns(source)
  const { ranges } = protectMarkdownMath(source)
  for (const range of ranges) {
    if (range.start < start && start < range.end) {
      if (collapsed) return
      start = range.start
    }
    if (range.start < end && end < range.end) end = range.end
  }
  if (collapsed && noteColorAt(source, start) === color) return

  const first = runs.find(run => run.start < start && start < run.end)
  const last = runs.find(run => run.start < end && end < run.end)
  const left = first ? wrapColor(source.slice(first.textStart, Math.min(start, first.textEnd)), first.color) : ''
  const right = last ? wrapColor(source.slice(Math.max(end, last.textStart), last.textEnd), last.color) : ''
  let selected = ''
  let cursor = start
  for (const run of runs) {
    if (run.end <= start || run.start >= end) continue
    selected += source.slice(cursor, Math.max(cursor, run.start))
    selected += source.slice(Math.max(start, run.textStart), Math.min(end, run.textEnd))
    cursor = Math.min(end, run.end)
  }
  selected += source.slice(cursor, end)
  const body = collapsed && color !== 'default'
    ? openColor(color) + closeColor
    : colorText(selected, color, start === 0 || source[start - 1] === '\n')
  const hasOneRun = body === openColor(color) + selected + closeColor
  return {
    start: first?.start ?? start,
    end: last?.end ?? end,
    value: left + body + right,
    selectStart: left.length + (hasOneRun ? openColor(color).length : 0),
    selectEnd: left.length + (hasOneRun ? openColor(color).length + selected.length : body.length),
  }
}
