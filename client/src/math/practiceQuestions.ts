import type { PracticeQuestion } from './practice'

// 正式错题按原题年份录入，稳定 ID 保证更新题目后仍保留复习进度。
export const practiceQuestions: PracticeQuestion[] = []

// 用户提供的界面截图，仅用于交互预览，不混入正式题库或复习统计。
export const demoQuestion: PracticeQuestion = {
  id: 'demo-odd-function',
  year: 0,
  number: '示例',
  source: '界面预览 · 年份待确认',
  topic: '高等数学 / 一元微分 / 奇偶性与凹凸性',
  type: 'choice',
  stem: String.raw`若 $f(x)=-f(-x)$，在 $(0,+\infty)$ 内 $f'(x)>0$，$f''(x)>0$，则 $f(x)$ 在 $(-\infty,0)$ 内（　）。`,
  options: [
    { key: 'A', text: String.raw`$f'(x)<0,\ f''(x)<0$` },
    { key: 'B', text: String.raw`$f'(x)<0,\ f''(x)>0$` },
    { key: 'C', text: String.raw`$f'(x)>0,\ f''(x)<0$` },
    { key: 'D', text: String.raw`$f'(x)>0,\ f''(x)>0$` },
  ],
  correctOption: 'C',
  answer: String.raw`**C**，即 $f'(x)>0$，$f''(x)<0$。`,
  explanation: String.raw`由 $f(x)=-f(-x)$，两边对 $x$ 求导得 $f'(x)=f'(-x)$，再求导得 $f''(x)=-f''(-x)$。因此一阶导数是偶函数，二阶导数是奇函数。当 $x<0$ 时，$-x>0$，所以 $f'(x)=f'(-x)>0$，而 $f''(x)=-f''(-x)<0$。

**易错点：** 对 $f(-x)$ 求导时必须乘上内层函数的导数 $-1$。`,
}
