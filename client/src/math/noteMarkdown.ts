import { Marked } from 'marked'

export const noteMarkdown = new Marked({
  tokenizer: {
    emStrong(source) {
      // 中文没有词间空格，句末标点紧跟后文时 Markdown 可能不识别成对星号。
      const match = source.match(/^\*\*(?!\*)([^*\n]+?)(?<!\\)\*\*(?!\*)/u)
      const text = match?.[1].trim()
      if (!match || !text || !/\p{Script=Han}/u.test(text)) return false
      return { type: 'strong', raw: match[0], text, tokens: this.lexer.inlineTokens(text) }
    },
  },
})
