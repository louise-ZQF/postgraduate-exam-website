export function noteFromClipboard(html: string, plain: string): string | undefined {
  if (!html) return
  const doc = new DOMParser().parseFromString(html, 'text/html')
  const mathNodes = [...doc.querySelectorAll('.katex-display, .katex, math')]
  let recoveredMath = false
  for (const node of mathNodes) {
    if (!node.isConnected) continue
    const annotation = node.querySelector('annotation[encoding="application/x-tex"]')
    const latex = annotation?.textContent?.trim()
    if (!latex) continue
    const display = node.classList.contains('katex-display') || node.getAttribute('display') === 'block'
    node.replaceWith(doc.createTextNode(display ? `\n\n$$\n${latex}\n$$\n\n` : `\\(${latex}\\)`))
    recoveredMath = true
  }
  if (!recoveredMath && /\$|\\[([]|\\(?:frac|int|begin)\b|^#{1,6} |^```/m.test(plain)) return
  if (!recoveredMath && !doc.querySelector('h1,h2,h3,strong,b,em,i,ul,ol,blockquote,pre,table,img')) return
  function children(node: Node): string { return [...node.childNodes].map(render).join('') }
  function render(node: Node): string {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent ?? ''
    if (!(node instanceof Element) || ['SCRIPT', 'STYLE', 'BUTTON'].includes(node.tagName) || node.getAttribute('aria-hidden') === 'true') return ''
    const tag = node.tagName.toLowerCase()
    if (tag === 'pre') return `\n\n\`\`\`\n${node.textContent?.trimEnd() ?? ''}\n\`\`\`\n\n`
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
    if (tag === 'br') return '\n'
    if (tag === 'blockquote') return `\n\n${value.trim().split('\n').map(line => `> ${line}`).join('\n')}\n\n`
    if (tag === 'a' && /^https?:\/\//i.test(node.getAttribute('href') ?? '')) return `[${value}](<${node.getAttribute('href')!.replace(/[<>\r\n]/g, '')}>)`
    return ['p', 'div', 'section', 'article'].includes(tag) ? `\n${value}\n` : value
  }
  const result = children(doc.body).replace(/\n{3,}/g, '\n\n').trim()
  return result || undefined
}
