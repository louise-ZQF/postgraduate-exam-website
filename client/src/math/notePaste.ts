export function mathStructureToLatex(node: Node): string {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent?.trim() ?? ''
  if (!(node instanceof Element)) return ''
  const tag = node.localName.toLowerCase().replace(/^mjx-/, '')
  const elements = [...node.children]
  const part = (index: number) => elements[index] ? mathStructureToLatex(elements[index]) : ''
  const value = () => [...node.childNodes].map(mathStructureToLatex).join('')
  const group = (index: number) => `{${part(index)}}`
  if (['annotation', 'annotation-xml', 'mspace', 'mphantom'].includes(tag)) return ''
  if (tag === 'semantics') return part(0)
  if (tag === 'msup' || tag === 'msub') return `${group(0)}${tag === 'msup' ? '^' : '_'}${group(1)}`
  if (tag === 'msubsup') return `${group(0)}_${group(1)}^${group(2)}`
  if (tag === 'mfrac') return `\\frac${group(0)}${group(1)}`
  if (tag === 'msqrt') return `\\sqrt{${value()}}`
  if (tag === 'mroot') return `\\sqrt[${part(1)}]${group(0)}`
  if (tag === 'munder' || tag === 'munderover') return `${group(0)}_${group(1)}${tag === 'munderover' ? '^' + group(2) : ''}`
  if (tag === 'mover') {
    const accent: Record<string, string> = { '→': 'vec', '¯': 'bar', '‾': 'bar', '^': 'hat', 'ˆ': 'hat', '~': 'tilde', '˜': 'tilde' }
    return accent[part(1)] ? `\\${accent[part(1)]}${group(0)}` : `\\overset${group(1)}${group(0)}`
  }
  if (tag === 'mfenced') {
    const delimiter = (text: string) => text === '{' || text === '}' ? `\\${text}` : text || '.'
    return `\\left${delimiter(node.getAttribute('open') ?? '(')}${elements.map(mathStructureToLatex).join(node.getAttribute('separators') ?? ',')}\\right${delimiter(node.getAttribute('close') ?? ')')}`
  }
  if (tag === 'mtable') return `\\begin{matrix}${elements.map(mathStructureToLatex).join('\\\\')}\\end{matrix}`
  if (tag === 'mtr' || tag === 'mlabeledtr') return elements.map(mathStructureToLatex).join('&')
  if (tag === 'mtext') return `\\text{${(node.textContent ?? '').replace(/[{}%$#&_]/g, char => `\\${char}`)}}`
  if (tag === 'c') {
    const hex = node.getAttribute('data-c') ?? node.getAttribute('class')?.match(/(?:^|\s)mjx-c([0-9a-f]+)(?:\s|$)/i)?.[1]
    if (hex && /^[0-9a-f]{1,6}$/i.test(hex) && parseInt(hex, 16) <= 0x10ffff) return String.fromCodePoint(parseInt(hex, 16))
  }
  if (tag === 'mo') return value().replace(/[\u2061-\u2064]/g, '').replace(/([{}&])/g, '\\$1')
  return value()
}

export function noteFromClipboard(html: string, plain: string): string | undefined {
  // GPT 的“复制”提供完整 Markdown 时，避免再从展示层反推，损坏原有公式和代码块。
  if (/^\s*```(?:math|latex|tex)?\s*$|\\\(|\\\[|\$\$|^#{1,6} /m.test(plain)) return
  if (!html) return
  const doc = new DOMParser().parseFromString(html, 'text/html')
  const mathNodes = [...doc.querySelectorAll('.katex-display, .katex, math, mjx-container, .MathJax, [data-latex], [data-tex], script[type^="math/tex"]')]
  let recoveredMath = false
  for (const node of mathNodes) {
    if (!node.isConnected) continue
    const annotation = node.querySelector('annotation[encoding="application/x-tex"], annotation[encoding="application/tex"], annotation[encoding="text/x-tex"]')
    const structure = node.localName === 'math' ? node : node.querySelector('math, mjx-math')
    const latex = (annotation?.textContent ?? node.getAttribute('data-latex') ?? node.getAttribute('data-tex') ?? (node.localName === 'script' ? node.textContent : structure ? mathStructureToLatex(structure) : ''))?.trim()
    if (!latex) continue
    const display = node.classList.contains('katex-display') || node.getAttribute('display') === 'block' || node.getAttribute('display') === 'true' || structure?.getAttribute('display') === 'block' || node.getAttribute('type')?.includes('mode=display')
    node.replaceWith(doc.createTextNode(display ? `\n\n$$\n${latex}\n$$\n\n` : `\\(${latex}\\)`))
    recoveredMath = true
  }
  if (!recoveredMath && /\$|\\[([]|\\(?:frac|int|begin)\b|^#{1,6} |^```/m.test(plain)) return
  if (!recoveredMath && !doc.querySelector('h1,h2,h3,strong,b,em,i,ul,ol,blockquote,pre,code,sup,sub,table,img')) return
  function children(node: Node): string { return [...node.childNodes].map(render).join('') }
  function render(node: Node): string {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent ?? ''
    if (!(node instanceof Element) || ['SCRIPT', 'STYLE', 'BUTTON'].includes(node.tagName) || node.getAttribute('aria-hidden') === 'true') return ''
    const tag = node.tagName.toLowerCase()
    if (tag === 'pre') {
      const code = node.querySelector('code') ?? node
      const language = code.getAttribute('class')?.match(/(?:^|\s)language-([\w-]+)/)?.[1] ?? ''
      return `\n\n\`\`\`${language}\n${code.textContent?.trimEnd() ?? ''}\n\`\`\`\n\n`
    }
    if (tag === 'table') {
      const rows = [...node.querySelectorAll('tr')].map(row => [...row.querySelectorAll('th,td')].map(cell => children(cell).trim().replace(/\|/g, '\\|').replace(/\n/g, ' ')))
      if (!rows.length) return ''
      const width = Math.max(...rows.map(row => row.length))
      const line = (row: string[]) => `| ${Array.from({ length: width }, (_, i) => row[i] ?? '').join(' | ')} |`
      return `\n\n${[line(rows[0]), line(Array(width).fill('---')), ...rows.slice(1).map(line)].join('\n')}\n\n`
    }
    if (tag === 'ul' || tag === 'ol') return `\n${[...node.children].map((item, index) => `${tag === 'ol' ? `${index + 1}.` : '-'} ${children(item).trim()}`).join('\n')}\n`
    if (tag === 'img') {
      const src = node.getAttribute('src') ?? ''
      return /^https?:\/\//i.test(src) ? `![${(node.getAttribute('alt') ?? '图片').replace(/[\[\]]/g, '')}](<${src.replace(/[<>\r\n]/g, '')}>)` : node.getAttribute('alt') ?? ''
    }
    const value = children(node)
    if (/^h[1-6]$/.test(tag)) return `\n\n${'#'.repeat(Number(tag[1]))} ${value.trim()}\n\n`
    if (tag === 'strong' || tag === 'b') return `**${value}**`
    if (tag === 'em' || tag === 'i') return `*${value}*`
    if (tag === 'code') return `\`${value}\``
    if (tag === 'sup') return `^{${value}}`
    if (tag === 'sub') return `_{${value}}`
    if (tag === 'br') return '\n'
    if (tag === 'blockquote') return `\n\n${value.trim().split('\n').map(line => `> ${line}`).join('\n')}\n\n`
    if (tag === 'a' && /^https?:\/\//i.test(node.getAttribute('href') ?? '')) return `[${value}](<${node.getAttribute('href')!.replace(/[<>\r\n]/g, '')}>)`
    return ['p', 'div', 'section', 'article'].includes(tag) ? `\n${value}\n` : value
  }
  const result = children(doc.body).replace(/\n{3,}/g, '\n\n').trim()
  return result || undefined
}
