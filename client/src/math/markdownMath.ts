export type MarkdownMathToken = { latex: string; display: boolean }

export function repairFragmentedMath(source: string, includeMathFences = false): string {
  const lines = source.replace(/\r\n?/g, '\n').split('\n')
  const result: string[] = []
  let fence = ''
  let mathFence = false
  const glyph = (line: string) => Array.from(line.trim()).length === 1 && !/[`\\#]/.test(line.trim())
  for (let i = 0; i < lines.length;) {
    const marker = lines[i].match(/^\s*(`{3,}|~{3,})/)
    if (marker) {
      if (!fence) { fence = marker[1]; mathFence = includeMathFences && /^\s*(?:`{3,}|~{3,})(?:math|latex|tex)\s*$/i.test(lines[i]) }
      else if (marker[1][0] === fence[0] && marker[1].length >= fence.length && lines[i].trim() === marker[1]) { fence = ''; mathFence = false }
      result.push(lines[i++]); continue
    }
    if ((!fence || mathFence) && glyph(lines[i])) {
      let end = i + 1
      while (end < lines.length) {
        if (glyph(lines[end])) { end++; continue }
        if (lines[end].trim()) break
        let next = end + 1
        while (next < lines.length && !lines[next].trim()) next++
        if (next >= lines.length || !glyph(lines[next])) break
        end = next
      }
      const run = lines.slice(i, end).map(line => line.trim()).filter(Boolean)
      const joined = run.join('')
      if (run.length >= 6 && /[=+^_α-ωΑ-Ω]/.test(joined) && /[=()\d]/.test(joined)) {
        let next = end
        while (next < lines.length && !lines[next].trim()) next++
        const comparable = (text: string) => text.normalize('NFKC').replace(/\s/g, '')
        if (next < lines.length && comparable(lines[next]) === comparable(joined)) end = next + 1
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

export function protectMarkdownMath(source: string, automatic = false) {
  if (automatic) source = repairFragmentedMath(source, true)
  const tokens: MarkdownMathToken[] = []
  let prefix = 'RENDEREDMATHTOKEN'
  while (source.includes(prefix)) prefix += 'X'
  let text = ''
  const escaped = (at: number) => {
    let count = 0
    while (at > 0 && source[--at] === '\\') count++
    return count % 2 === 1
  }
  const add = (latex: string, display: boolean) => `${prefix}${tokens.push({ latex: automatic ? normalizeNoteMath(latex, source) : latex.trim(), display }) - 1}END`
  for (let i = 0; i < source.length;) {
    const rest = source.slice(i)
    const lineStart = i === 0 || source[i - 1] === '\n'
    if (lineStart) {
      const fence = rest.match(/^ {0,3}(`{3,}|~{3,})([^\n]*)\n/)
      if (fence) {
        const closing = new RegExp(`^ {0,3}${fence[1][0]}{${fence[1].length},}[ \\t]*$`, 'm').exec(rest.slice(fence[0].length))
        const end = closing ? fence[0].length + closing.index + closing[0].length : rest.length
        text += automatic && closing && /^(math|latex|tex)$/i.test(fence[2].trim())
          ? add(rest.slice(fence[0].length, fence[0].length + closing.index), true)
          : rest.slice(0, end)
        i += end
        continue
      }
      const line = rest.split('\n', 1)[0]
      const mathLine = line.replace(/\\(?:text|operatorname)\{[^}]*\}/g, '')
      if (automatic && line.trim() && !/[\u3400-\u9fff`$]/.test(mathLine) && !/\\[([]|\\begin\{/.test(line)
        && (/\\(?:frac|dfrac|tfrac|int|sum|prod|lim|sqrt|partial|infty)(?![a-zA-Z])/.test(line) || /[a-zA-Z][_^].*(?:=|<|>|\\)/.test(line) || /[a-zA-Z]'*\([^\n)]*\)\s*=/.test(line) || (/[α-ωΑ-Ω]/.test(line) && /[=^_²ᵀ]/.test(line)))) {
        text += add(line, true); i += line.length; continue
      }
    }
    if (source[i] === '`') {
      const run = rest.match(/^`+/)![0]
      let end = source.indexOf(run, i + run.length)
      while (end >= 0 && (source[end - 1] === '`' || source[end + run.length] === '`')) end = source.indexOf(run, end + run.length)
      if (end >= 0) {
        const content = source.slice(i + run.length, end)
        text += automatic && inlineMathCode(content) ? add(content, false) : source.slice(i, end + run.length)
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
        text += add(source.slice(i + open.length, end), display); i = end + close.length; continue
      }
    }
    if (automatic && rest.startsWith('\\begin{') && !escaped(i)) {
      const env = rest.match(/^\\begin\{(align(?:ed)?|alignat|gather(?:ed)?|equation|cases|[pbBvV]?matrix|smallmatrix|array|split)\*?\}/)
      if (env) {
        const name = env[0].slice(7, -1)
        const closing = `\\end{${name}}`
        const end = source.indexOf(closing, i + env[0].length)
        if (end >= 0) { text += add(source.slice(i, end + closing.length), true); i = end + closing.length; continue }
      }
    }
    text += source[i++]
  }
  return { text, tokens, prefix }
}

export const escapeMathHtml = (value: string) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!)
