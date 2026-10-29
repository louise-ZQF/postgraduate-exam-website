export type MarkdownMathToken = { latex: string; display: boolean }

export function protectMarkdownMath(source: string, automatic = false) {
  const tokens: MarkdownMathToken[] = []
  let prefix = 'RENDEREDMATHTOKEN'
  while (source.includes(prefix)) prefix += 'X'
  let text = ''
  const escaped = (at: number) => {
    let count = 0
    while (at > 0 && source[--at] === '\\') count++
    return count % 2 === 1
  }
  const add = (latex: string, display: boolean) => `${prefix}${tokens.push({ latex: latex.trim(), display }) - 1}END`
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
        && (/\\(?:frac|dfrac|tfrac|int|sum|prod|lim|sqrt|partial|infty)(?![a-zA-Z])/.test(line) || /[a-zA-Z][_^].*(?:=|<|>|\\)/.test(line) || /[a-zA-Z]'*\([^\n)]*\)\s*=/.test(line))) {
        text += add(line, true); i += line.length; continue
      }
    }
    if (source[i] === '`') {
      const run = rest.match(/^`+/)![0]
      let end = source.indexOf(run, i + run.length)
      while (end >= 0 && (source[end - 1] === '`' || source[end + run.length] === '`')) end = source.indexOf(run, end + run.length)
      if (end >= 0) { text += source.slice(i, end + run.length); i = end + run.length; continue }
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
