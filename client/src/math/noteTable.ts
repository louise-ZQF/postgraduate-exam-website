import { protectMarkdownMath } from './markdownMath'

export function noteTableMarkdown(rows: string[][]): string {
  const width = Math.max(0, ...rows.map(row => row.length))
  if (!width) return ''
  const escapePipes = (text: string) => text.replace(/\\*\|/g, pipe => pipe.length % 2 ? '\\' + pipe : pipe)
  const cell = (value: string) => {
    const text = value.trim().replace(/[ \t]*\r?\n[ \t]*/g, ' ')
    const { ranges } = protectMarkdownMath(text)
    let result = ''
    let cursor = 0
    for (const range of ranges) {
      result += escapePipes(text.slice(cursor, range.start)) + text.slice(range.start, range.end)
      cursor = range.end
    }
    return result + escapePipes(text.slice(cursor))
  }
  const line = (row: string[]) => '| ' + Array.from({ length: width }, (_, i) => cell(row[i] ?? '')).join(' | ') + ' |'
  return [line(rows[0]), line(Array<string>(width).fill('---')), ...rows.slice(1).map(line)].join('\n')
}

export function repairPastedTables(source: string): string {
  const cells = [...source.matchAll(/^[ \t]*\|[ \t]*\|[ \t]*\r?\n[ \t]*\|[ \t]*:?-+:?[ \t]*\|[ \t]*\r?\n(?:[ \t]*\r?\n)*[ \t]*(\S[^\r\n]*)$/gm)]
  if (cells.length < 6) return source
  const { ranges } = protectMarkdownMath(source)
  const groups: RegExpExecArray[][] = []
  for (const match of cells) {
    const group = groups.at(-1)
    const previous = group?.at(-1)
    if (group && previous && !source.slice(previous.index + previous[0].length, match.index).trim()) group.push(match)
    else groups.push([match])
  }
  const cellKind = (cell: string) => /^(?:\\\(|\\\[|\$)/.test(cell) ? 'math'
    : /^[-+]?\d+(?:\.\d+)?%?$/.test(cell) ? 'number' : 'text'
  let result = source
  for (const group of groups.reverse()) {
    const start = group[0].index
    const last = group.at(-1)!
    const end = last.index + last[0].length
    if (ranges.some(range => range.block && start < range.end && range.start < end)) continue
    const values = group.map(match => match[1].trim())
    const kinds = values.map(cellKind)
    // 纯文本已丢失行界，只在表头之后至少有两行相同列结构时恢复。
    const width = kinds.findIndex(kind => kind !== 'text')
    if (width < 2 || values.length < width * 3 || values.length % width !== 0) continue
    if (kinds.slice(width).some((kind, index) => kind !== kinds[width + index % width])) continue
    const rows = Array.from({ length: values.length / width }, (_, i) => values.slice(i * width, (i + 1) * width))
    result = result.slice(0, start) + noteTableMarkdown(rows) + result.slice(end)
  }
  return result
}
