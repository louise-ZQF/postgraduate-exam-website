const symbols: Record<string, string> = {
  '∫': '\\int ', '∬': '\\iint ', '∭': '\\iiint ', '∑': '\\sum ', '∏': '\\prod ',
  '∞': '\\infty ', '∣': '\\vert ', '‖': '\\Vert ', '≤': '\\leq ', '≥': '\\geq ',
  '≠': '\\neq ', '≈': '\\approx ', '→': '\\to ', '∈': '\\in ', '∂': '\\partial ',
  '⋅': '\\cdot ', '×': '\\times ', '±': '\\pm ', '−': '-',
}

// 某些浏览器只复制 KaTeX 的展示层；根据结构和基线位置恢复上下标，不能用 textContent 拼平分数。
export function katexHtmlToLatex(root: Element): string | undefined {
  function read(node: Node): string | undefined {
    if (node.nodeType === Node.TEXT_NODE) return (node.textContent ?? '').replace(/[\u200b\u2061-\u2064]/g, '').replace(/[{}%$#&_]/g, char => `\\${char}`).replace(/[∫∬∭∑∏∞∣‖≤≥≠≈→∈∂⋅×±−]/g, char => symbols[char])
    if (!(node instanceof Element)) return ''
    const has = (name: string) => node.classList.contains(name)
    const children = () => {
      const parts = [...node.childNodes].map(read)
      return parts.includes(undefined) ? undefined : parts.join('')
    }
    const layers = () => [...(node.querySelector(':scope > .vlist-t > .vlist-r > .vlist')?.children ?? [])]
    const em = (element: Element, property: string) => {
      const match = element.getAttribute('style')?.match(new RegExp(`(?:^|;)\\s*${property}:\\s*(-?[\\d.]+)em(?:;|$)`))
      return match ? Number(match[1]) : NaN
    }
    if (['pstrut', 'strut', 'katex-strut', 'vlist-s', 'nulldelimiter', 'frac-line'].some(has) || ['svg', 'path', 'annotation'].includes(node.localName)) return ''
    if (has('mspace')) return '\\, '
    if (has('mfrac')) {
      if (!layers().some(layer => layer.querySelector('.frac-line'))) return
      const parts = layers().filter(layer => !layer.querySelector('.frac-line'))
      if (parts.length !== 2) return
      parts.sort((a, b) => em(a, 'top') - em(b, 'top'))
      const numerator = read(parts[0]), denominator = read(parts[1])
      if (numerator === undefined || denominator === undefined || parts.some(part => !Number.isFinite(em(part, 'top')))) return
      return `\\frac{${numerator}}{${denominator}}`
    }
    if (has('msupsub')) {
      const parts = layers()
      if (!parts.length || parts.length > 2) return
      const seen = new Set<string>()
      let result = ''
      for (const layer of parts) {
        const strut = layer.querySelector(':scope > .pstrut')
        const baseline = em(layer, 'top') + (strut ? em(strut, 'height') : NaN)
        const value = read(layer)
        const marker = baseline < 0 ? '^' : '_'
        if (!Number.isFinite(baseline) || baseline === 0 || value === undefined || !value || seen.has(marker)) return
        seen.add(marker)
        result += `${marker}{${value}}`
      }
      return result
    }
    if (has('sqrt')) {
      const body = node.querySelector(':scope > .vlist-t > .vlist-r > .vlist > .svg-align')
      const index = node.querySelector(':scope > .root')
      const value = body ? read(body) : undefined
      const degree = index ? read(index) : ''
      if (value === undefined || degree === undefined) return
      return `\\sqrt${degree ? `[${degree}]` : ''}{${value}}`
    }
    // 未支持的二维结构保留原内容，避免把矩阵、极限或重音误当作普通文本。
    if (has('vlist') || has('vlist-t') || has('mtable') || has('accent') || has('op-limits') || has('stretchy') || has('enclosing')) return
    if (node.localName === 'sup' || node.localName === 'sub') {
      const value = children()
      return value === undefined ? undefined : `${node.localName === 'sup' ? '^' : '_'}{${value}}`
    }
    const value = children()
    if (value === undefined) return
    if (has('text')) return `\\text{${value}}`
    if (has('mop') && /^[A-Za-z]{2,}$/.test(value)) return `\\operatorname{${value}}`
    return value
  }
  return read(root)?.trim() || undefined
}
