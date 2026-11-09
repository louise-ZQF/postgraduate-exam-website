export type MarkdownMathToken = { latex: string; display: boolean }
type ProtectedRange = { start: number; end: number; block: boolean }

export function repairFragmentedMath(source: string, includeMathFences = false): string {
  const lines = source.replace(/\r\n?/g, '\n').split('\n')
  const result: string[] = []
  let fence = ''
  let mathFence = false
  const fragment = (line: string) => {
    const value = line.trim()
    return /^[A-Za-z0-9α-ωΑ-Ω\u{1d400}-\u{1d7ff}⁰¹²³⁴⁵⁶⁷⁸⁹ᵀ₀-₉()[\]{}|∣‖=+−×÷<>≤≥≠^_.,;:/-]{1,6}$/u.test(value) && !/\S\s*[=<>≤≥≠]\s*\S/.test(value)
  }
  const comparable = (text: string) => text.normalize('NFKC').replace(/\s/g, '')
  for (let i = 0; i < lines.length;) {
    const marker = lines[i].match(/^\s*(`{3,}|~{3,})/)
    if (marker) {
      if (!fence) { fence = marker[1]; mathFence = includeMathFences && /^\s*(?:`{3,}|~{3,})(?:math|latex|tex)\s*$/i.test(lines[i]) }
      else if (marker[1][0] === fence[0] && marker[1].length >= fence.length && lines[i].trim() === marker[1]) { fence = ''; mathFence = false }
      result.push(lines[i++]); continue
    }
    if ((!fence || mathFence) && fragment(lines[i])) {
      let end = i + 1
      while (end < lines.length) {
        if (fragment(lines[end])) { end++; continue }
        if (lines[end].trim()) break
        let next = end + 1
        while (next < lines.length && !lines[next].trim()) next++
        if (next >= lines.length || !fragment(lines[next])) break
        end = next
      }
      const run = lines.slice(i, end).map(line => line.trim()).filter(Boolean)
      const joined = run.join('')
      if (run.length >= 3 && /[=+^_α-ωΑ-Ω]/.test(joined) && /[=()\d]/.test(joined) && /[A-Za-zα-ωΑ-Ω\u{1d400}-\u{1d7ff}]/u.test(joined)) {
        let next = end
        while (next < lines.length && !lines[next].trim()) next++
        if (next < lines.length) {
          // 复制网页常同时包含 MathML 的逐字版本和展示层的整行版本，后者还可能紧接中文。
          let length = 0
          const target = comparable(joined)
          for (const char of lines[next]) {
            length += char.length
            const prefix = comparable(lines[next].slice(0, length))
            if (prefix === target && !/^[A-Za-z0-9α-ωΑ-Ω]/.test(lines[next].slice(length))) {
              result.push(joined + lines[next].slice(length)); i = next + 1; break
            }
            if (prefix.length > target.length) break
          }
          if (i === next + 1) continue
        }
        result.push(joined); i = end; continue
      }
      result.push(...lines.slice(i, end)); i = end; continue
    }
    result.push(lines[i++])
  }
  return result.join('\n')
}

export function normalizeNoteMath(value: string, context = ''): string {
  let latex = repairFragmentedMath(value).trim().replace(/[\u{1d400}-\u{1d7ff}]/gu, char => char.normalize('NFKC'))
  // 只有正文明确说明转置、平方，且公式没有 LaTeX 标记时，才恢复复制丢失的上标。
  if (!/[\\^_]/.test(latex)) {
    if (/转置|transpose/i.test(context)) latex = latex.replace(/([A-Za-zα-ωΑ-Ω)\]}])T(?=[A-Za-zα-ωΑ-Ω()\s=+.,-]|$)/g, '$1^{T}')
    if (/平方|squared?/i.test(context)) latex = latex.replace(/\)\s*2(?=[)\s=+.,-]|$)/g, ')^{2}')
  }
  const superscripts: Record<string, string> = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁺': '+', '⁻': '-', '⁼': '=', '⁽': '(', '⁾': ')', 'ⁿ': 'n', 'ⁱ': 'i', 'ᵀ': 'T' }
  const subscripts: Record<string, string> = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9', '₊': '+', '₋': '-', '₌': '=', '₍': '(', '₎': ')', 'ᵢ': 'i', 'ⱼ': 'j', 'ₖ': 'k', 'ₙ': 'n', 'ₓ': 'x' }
  return latex.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿⁱᵀ]+/g, text => `^{${Array.from(text).map(char => superscripts[char]).join('')}}`)
    .replace(/[₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎ᵢⱼₖₙₓ]+/g, text => `_{${Array.from(text).map(char => subscripts[char]).join('')}}`)
    .replace(/′/g, "'").replace(/″/g, "''").replace(/−/g, '-')
}

const inlineMathCode = (value: string) => !/[\n$`\u3400-\u9fff]/.test(value) && (/^[A-Za-zα-ωΑ-Ω]$/.test(value) || /[α-ωΑ-Ω⁰¹²³⁴⁵⁶⁷⁸⁹ᵀ₀-₉]|[\w)]\s*[_^]|\\(?:frac|int|sum|alpha|beta|theta|sqrt)(?![a-zA-Z])/.test(value))
const wrapBoldLines = (text: string) => text.replace(/^([ \t]*(?:(?:#{1,6}|[-+*]|\d+[.)]|>)[ \t]+)*)(\S[^\n]*?)([ \t]*)$/gm, '$1<strong>$2</strong>$3')

function repairBoldAcrossMath(text: string, prefix: string, tokens: MarkdownMathToken[]): string {
  if (!tokens.some(token => token.display)) return text
  const mathPlaceholder = new RegExp(`${prefix}(\\d+)END`, 'g')
  return text.replace(/(?<![\\*])\*\*(?!\*)([^*]+?)(?<!\\)\*\*(?!\*)/g, (match, body: string) => {
    if (!/\n[ \t]*\n/.test(body) || /`|^ {0,3}~{3,}|<\/?(?:code|pre)\b/im.test(body)) return match
    const containsDisplay = [...body.matchAll(mathPlaceholder)].some(token => tokens[Number(token[1])]?.display)
    return containsDisplay ? wrapBoldLines(body) : match
  })
}

export function protectMarkdownMath(source: string, automatic = false) {
  if (automatic) source = repairFragmentedMath(source, true)
  const tokens: MarkdownMathToken[] = []
  const ranges: ProtectedRange[] = []
  let prefix = 'RENDEREDMATHTOKEN'
  while (source.includes(prefix)) prefix += 'X'
  let text = ''
  const escaped = (at: number) => {
    let count = 0
    while (at > 0 && source[--at] === '\\') count++
    return count % 2 === 1
  }
  const add = (latex: string, display: boolean, start: number, end: number) => {
    ranges.push({ start, end, block: display })
    return `${prefix}${tokens.push({ latex: automatic ? normalizeNoteMath(latex, source) : latex.trim(), display }) - 1}END`
  }
  function addDelimited(latex: string, display: boolean, start: number, end: number) {
    if (!automatic) return add(latex, display, start, end)
    let math = latex.trim()
    const leading = math.match(/^\*\*(?!\*)\s*/)
    if (leading) math = math.slice(leading[0].length)
    const trailing = math.match(/(?<![\\*])\*\*$/)
    if (!trailing) return (leading ? '**' : '') + add(math, display, start, end)
    math = math.slice(0, -2)
    let depth = 0
    let tail = ''
    // 旧编辑器可能把加粗结束符和相邻的中文说明一起留在公式定界符内。
    for (let i = 0; i < math.length; i++) {
      if (math[i] === '\\') { i++; continue }
      if (math[i] === '{') depth++
      if (math[i] === '}') depth--
      if (i > 0 && depth === 0 && /[\u3400-\u9fff]/.test(math[i])) {
        tail = math.slice(i)
        math = math.slice(0, i)
        break
      }
    }
    return (leading ? '**' : '') + add(math, display, start, end) + tail + '**'
  }
  for (let i = 0; i < source.length;) {
    const rest = source.slice(i)
    const lineStart = i === 0 || source[i - 1] === '\n'
    if (lineStart) {
      const fence = rest.match(/^ {0,3}(`{3,}|~{3,})([^\n]*)\n/)
      if (fence) {
        const closing = new RegExp(`^ {0,3}${fence[1][0]}{${fence[1].length},}[ \\t]*$`, 'm').exec(rest.slice(fence[0].length))
        const end = closing ? fence[0].length + closing.index + closing[0].length : rest.length
        if (automatic && closing && /^(math|latex|tex)$/i.test(fence[2].trim())) {
          text += addDelimited(rest.slice(fence[0].length, fence[0].length + closing.index), true, i, i + end)
        } else {
          ranges.push({ start: i, end: i + end, block: true })
          text += rest.slice(0, end)
        }
        i += end
        continue
      }
      const line = rest.split('\n', 1)[0]
      const emphasized = line.match(/^\s*<strong>(.*?)<\/strong>\s*$/)
      const formulaLine = emphasized?.[1] ?? line
      const mathLine = formulaLine.replace(/\\(?:text|operatorname)\{[^}]*\}/g, '')
      if (automatic && line.trim() && !/[\u3400-\u9fff`$]/.test(mathLine) && !/\\[([]|\\begin\{/.test(line)
        && (/\\(?:frac|dfrac|tfrac|int|sum|prod|lim|sqrt|partial|infty)(?![a-zA-Z])/.test(formulaLine) || /[a-zA-Z][_^].*(?:=|<|>|\\)/.test(formulaLine) || /^\s*[A-Za-zα-ωΑ-Ω]\s*[=<>≤≥≠]\s*[-+\dA-Za-zα-ωΑ-Ω]/.test(formulaLine) || /[a-zA-Z]'*\([^\n)]*\)\s*=/.test(formulaLine) || (/[α-ωΑ-Ω]/.test(formulaLine) && /[=^_²ᵀ]/.test(formulaLine)))) {
        const token = addDelimited(formulaLine, true, i, i + line.length)
        text += emphasized ? `<strong>${token}</strong>` : token
        i += line.length; continue
      }
    }
    if (source[i] === '`') {
      const run = rest.match(/^`+/)![0]
      let end = source.indexOf(run, i + run.length)
      while (end >= 0 && (source[end - 1] === '`' || source[end + run.length] === '`')) end = source.indexOf(run, end + run.length)
      if (end >= 0) {
        const content = source.slice(i + run.length, end)
        text += automatic && inlineMathCode(content) ? add(content, false, i, end + run.length) : source.slice(i, end + run.length)
        i = end + run.length; continue
      }
    }
    if (source[i] === '<') {
      const html = rest.match(/^<!--[^]*?-->|^<(pre|code|script|style)\b[^>]*>[^]*?<\/\1\s*>|^<\/?[a-zA-Z][^>]*>/i)
      if (html) { text += html[0]; i += html[0].length; continue }
    }
    let open = '', close = '', display = false
    if (!escaped(i)) {
      if (rest.startsWith('$$')) { open = close = '$$'; display = true }
      else if (rest.startsWith('\\[')) { open = '\\['; close = '\\]'; display = true }
      else if (rest.startsWith('\\(')) { open = '\\('; close = '\\)' }
      else if (rest.startsWith('$')) { open = close = '$' }
    }
    if (open) {
      let end = source.indexOf(close, i + open.length)
      while (end >= 0 && (escaped(end) || (close === '$' && source[end + 1] === '$'))) end = source.indexOf(close, end + close.length)
      if (end >= 0 && (open !== '$' || !source.slice(i, end).includes('\n'))) {
        text += addDelimited(source.slice(i + open.length, end), display, i, end + close.length); i = end + close.length; continue
      }
    }
    if (automatic && rest.startsWith('\\begin{') && !escaped(i)) {
      const env = rest.match(/^\\begin\{(align(?:ed)?|alignat|gather(?:ed)?|equation|cases|[pbBvV]?matrix|smallmatrix|array|split)\*?\}/)
      if (env) {
        const name = env[0].slice(7, -1)
        const closing = `\\end{${name}}`
        const end = source.indexOf(closing, i + env[0].length)
        if (end >= 0) { text += add(source.slice(i, end + closing.length), true, i, end + closing.length); i = end + closing.length; continue }
      }
    }
    text += source[i++]
  }
  return { text: automatic ? repairBoldAcrossMath(text, prefix, tokens) : text, tokens, prefix, ranges }
}

export function formatNoteBold(source: string, start: number, end: number) {
  const { ranges } = protectMarkdownMath(source)
  for (const range of ranges) {
    if (range.start < start && start < range.end) start = range.start
    if (range.start < end && end < range.end) end = range.end
  }
  let value = ''
  let cursor = start
  for (const range of ranges) {
    if (!range.block || range.start < start || range.end > end) continue
    value += wrapBoldLines(source.slice(cursor, range.start)) + source.slice(range.start, range.end)
    cursor = range.end
  }
  value += wrapBoldLines(source.slice(cursor, end))
  return { start, end, value }
}

export const escapeMathHtml = (value: string) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!)
