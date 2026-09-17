#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const inputPath = resolve(projectRoot, '..', '考研数学题型总结_合订版.md')
const outputPath = resolve(projectRoot, 'content', '数学二三资料精编.md')

const source = readFileSync(inputPath, 'utf8').replace(/\r\n/g, '\n')
const lines = source.split('\n')

const droppedSubsections = /^(题目条件|数学翻译|选法依据|经典例题(?:[：:].*)?|验证结果与易错点)$/
const droppedTopics = /(题的识别顺序|最容易混淆的条件)$|^先看条件选方法/

const chapterFormulaOverviews = {
  '第一章　极限': String.raw`#### 极限与连续公式总览

##### 基本极限与等价无穷小

\[
\lim_{x\to0}\frac{\sin x}{x}=1,
\qquad
\lim_{x\to\infty}\left(1+\frac1x\right)^x=e.
\]

当 \(x\to0\) 时，

\[
\sin x\sim x,\quad \tan x\sim x,\quad \arcsin x\sim x,\quad \arctan x\sim x,
\]

\[
e^x-1\sim x,\quad \ln(1+x)\sim x,\quad (1+x)^\alpha-1\sim\alpha x,
\]

\[
1-\cos x\sim\frac{x^2}{2},
\qquad a^x-1\sim x\ln a.
\]

##### 常用麦克劳林展开公式

\[
e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots,
\]

\[
\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots,
\qquad
\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots,
\]

\[
\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots,
\]

\[
(1+x)^\alpha=1+\alpha x+\frac{\alpha(\alpha-1)}{2!}x^2+\cdots.
\]

##### 连续判定

\[
f\text{ 在 }x_0\text{ 连续}
\Longleftrightarrow
\lim_{x\to x_0}f(x)=f(x_0).
\]
`,
  '第二章　一元微分': String.raw`#### 一元函数求导公式一览

##### 基本初等函数求导公式

\[
(x^\alpha)'=\alpha x^{\alpha-1},
\qquad (e^x)'=e^x,
\qquad (a^x)'=a^x\ln a,
\]

\[
(\ln x)'=\frac1x,
\qquad (\log_a x)'=\frac1{x\ln a},
\]

\[
(\sin x)'=\cos x,
\quad (\cos x)'=-\sin x,
\quad (\tan x)'=\sec^2x,
\quad (\cot x)'=-\csc^2x,
\]

\[
(\arcsin x)'=\frac1{\sqrt{1-x^2}},
\quad (\arccos x)'=-\frac1{\sqrt{1-x^2}},
\quad (\arctan x)'=\frac1{1+x^2}.
\]

##### 运算法则与复合函数求导公式

\[
(u\pm v)'=u'\pm v',
\qquad (uv)'=u'v+uv',
\qquad \left(\frac uv\right)'=\frac{u'v-uv'}{v^2},
\]

\[
\frac{d}{dx}f(g(x))=f'(g(x))g'(x).
\]

##### 隐函数、参数方程与反函数求导公式

若 \(F(x,y)=0\)，则

\[
y'=-\frac{F_x}{F_y}.
\]

若 \(x=x(t),y=y(t)\)，则

\[
\frac{dy}{dx}=\frac{dy/dt}{dx/dt},
\qquad
\frac{d^2y}{dx^2}=\frac{d}{dt}(dy/dx)\Big/\frac{dx}{dt}.
\]

\[
(f^{-1})'(y_0)=\frac1{f'(x_0)},\qquad y_0=f(x_0).
\]

##### 高阶导数公式

\[
(uv)^{(n)}=\sum_{k=0}^n\binom nk u^{(k)}v^{(n-k)}.
\]
`,
  '第三章　一元积分': String.raw`#### 一元积分公式一览

##### 基本不定积分公式

\[
\int x^\alpha\,dx=\frac{x^{\alpha+1}}{\alpha+1}+C\quad(\alpha\ne-1),
\qquad
\int\frac{dx}{x}=\ln|x|+C,
\]

\[
\int e^x\,dx=e^x+C,
\qquad
\int a^x\,dx=\frac{a^x}{\ln a}+C,
\]

\[
\int\sin x\,dx=-\cos x+C,
\qquad
\int\cos x\,dx=\sin x+C,
\]

\[
\int\frac{dx}{1+x^2}=\arctan x+C,
\qquad
\int\frac{dx}{\sqrt{1-x^2}}=\arcsin x+C.
\]

##### 换元、分部积分与牛顿-莱布尼茨公式

\[
\int f(\varphi(x))\varphi'(x)\,dx=\int f(u)\,du,
\]

\[
\int u\,dv=uv-\int v\,du,
\]

\[
\int_a^b f(x)\,dx=F(b)-F(a),\qquad F'(x)=f(x).
\]

##### 变上限积分求导公式

\[
\frac{d}{dx}\int_a^{\varphi(x)}f(t)\,dt=f(\varphi(x))\varphi'(x).
\]
`,
  '第四章　微分方程': String.raw`#### 常微分方程公式一览

##### 一阶微分方程

可分离变量方程

\[
\frac{dy}{dx}=f(x)g(y)
\quad\Longrightarrow\quad
\int\frac{dy}{g(y)}=\int f(x)\,dx+C.
\]

一阶线性微分方程

\[
y'+P(x)y=Q(x)
\]

的通解为

\[
y=e^{-\int P(x)dx}\left[\int Q(x)e^{\int P(x)dx}dx+C\right].
\]

伯努利微分方程

\[
y'+P(x)y=Q(x)y^n
\]

令 \(z=y^{1-n}\) 后化为一阶线性方程。

##### 二阶常系数齐次线性微分方程

\[
y''+py'+qy=0,
\qquad r^2+pr+q=0.
\]

- 两个不同实根 \(r_1,r_2\)：\(y=C_1e^{r_1x}+C_2e^{r_2x}\)；
- 二重实根 \(r\)：\(y=(C_1+C_2x)e^{rx}\)；
- 共轭复根 \(\alpha\pm i\beta\)：\(y=e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)\)。
`,
  '第五章　多元微分': String.raw`#### 多元函数微分公式一览

##### 全微分与复合函数链式法则

\[
dz=f_x(x,y)\,dx+f_y(x,y)\,dy.
\]

若 \(z=f(u,v)\)，\(u=u(x,y),v=v(x,y)\)，则

\[
z_x=f_u u_x+f_v v_x,
\qquad
z_y=f_u u_y+f_v v_y.
\]

##### 隐函数求导公式

若 \(F(x,y)=0\)，则

\[
\frac{dy}{dx}=-\frac{F_x}{F_y}.
\]

若 \(F(x,y,z)=0\) 确定 \(z=z(x,y)\)，则

\[
z_x=-\frac{F_x}{F_z},
\qquad
z_y=-\frac{F_y}{F_z}.
\]

##### 二元函数极值判别公式

在驻点记

\[
A=f_{xx},\qquad B=f_{xy},\qquad C=f_{yy},\qquad D=AC-B^2.
\]

- \(D>0,A>0\)：极小值；
- \(D>0,A<0\)：极大值；
- \(D<0\)：不是极值；
- \(D=0\)：判别法失效，需另行判断。
`,
  '第六章　二重积分': String.raw`#### 二重积分公式一览

##### 直角坐标计算公式

若区域 \(D=\{(x,y)\mid a\le x\le b,\ \varphi_1(x)\le y\le\varphi_2(x)\}\)，则

\[
\iint_D f(x,y)\,dA
=\int_a^b\!\int_{\varphi_1(x)}^{\varphi_2(x)}f(x,y)\,dy\,dx.
\]

若区域写成 \(c\le y\le d,\ \psi_1(y)\le x\le\psi_2(y)\)，则

\[
\iint_D f(x,y)\,dA
=\int_c^d\!\int_{\psi_1(y)}^{\psi_2(y)}f(x,y)\,dx\,dy.
\]

##### 极坐标计算公式

\[
x=r\cos\theta,
\qquad y=r\sin\theta,
\qquad dA=r\,dr\,d\theta.
\]

若 \(\alpha\le\theta\le\beta\)，\(r_1(\theta)\le r\le r_2(\theta)\)，则

\[
\iint_D f(x,y)\,dA
=\int_\alpha^\beta\!\int_{r_1(\theta)}^{r_2(\theta)}
f(r\cos\theta,r\sin\theta)r\,dr\,d\theta.
\]

##### 几何应用

\[
S(D)=\iint_D1\,dA,
\qquad
V=\iint_D f(x,y)\,dA\quad(f\ge0).
\]
`,
  '第一章　行列式': String.raw`#### 行列式公式总览

##### 定义与基本性质

\[
|A|=\sum_{j_1\cdots j_n}(-1)^{\tau(j_1\cdots j_n)}a_{1j_1}\cdots a_{nj_n},
\qquad |A^T|=|A|.
\]

交换两行（列），行列式变号；某行（列）乘 \(k\)，行列式乘 \(k\)；某行（列）的 \(k\) 倍加到另一行（列），行列式不变。

##### 常用计算公式

\[
|kA|=k^n|A|,\qquad |AB|=|A||B|,
\]

\[
|A^{-1}|=|A|^{-1},\qquad |A^*|=|A|^{n-1},
\qquad |A|=\prod_{i=1}^n\lambda_i.
\]

若 \(A,B\) 分别为 \(m,n\) 阶方阵，则分块三角行列式满足

\[
\left|\begin{matrix}A&O\\ *&B\end{matrix}\right|=|A||B|,
\]

若 \(A,B\) 均为 \(n\) 阶方阵，则分块反对角行列式满足

\[
\left|\begin{matrix}O&A\\ B&O\end{matrix}\right|=(-1)^n|A||B|.
\]

##### 行列式为零与非零的等价关系

对 \(n\) 阶方阵 \(A\)：

\[
|A|\ne0\Longleftrightarrow r(A)=n\Longleftrightarrow A\text{ 可逆}
\Longleftrightarrow Ax=0\text{ 只有零解}.
\]

\[
|A|=0\Longleftrightarrow r(A)<n\Longleftrightarrow A\text{ 不可逆}
\Longleftrightarrow Ax=0\text{ 有非零解}.
\]
`,
  '第二章　矩阵': String.raw`#### 矩阵公式总览

##### 逆矩阵与伴随矩阵

\[
AA^{-1}=A^{-1}A=E,\qquad A^{-1}=\frac{A^*}{|A|}\quad(|A|\ne0),
\]

\[
AA^*=A^*A=|A|E,
\qquad (AB)^{-1}=B^{-1}A^{-1},
\qquad (AB)^T=B^TA^T.
\]

伴随矩阵的秩为

\[
r(A^*)=
\begin{cases}
n,&r(A)=n,\\
1,&r(A)=n-1,\\
0,&r(A)\le n-2.
\end{cases}
\]

##### 秩的常用公式

\[
r(A)=r(A^T)=r(A^TA)=r(AA^T),
\]

\[
r(AB)\le\min\{r(A),r(B)\},
\qquad r(A+B)\le r(A)+r(B),
\]

\[
r(A)+r(B)-n\le r(AB).
\]

若 \(P,Q\) 可逆，则

\[
r(PA)=r(AQ)=r(PAQ)=r(A).
\]

##### 分块矩阵与矩阵方程

\[
\begin{pmatrix}A&O\\O&B\end{pmatrix}^{-1}
=\begin{pmatrix}A^{-1}&O\\O&B^{-1}\end{pmatrix},
\]

\[
AX=B\Rightarrow X=A^{-1}B,
\quad XA=B\Rightarrow X=BA^{-1},
\quad AXB=C\Rightarrow X=A^{-1}CB^{-1}.
\]
`,
  '第三章　向量': String.raw`#### 向量公式与判定总览

##### 线性相关与线性无关

令 \(A=(\alpha_1,\ldots,\alpha_s)\)。则

\[
\alpha_1,\ldots,\alpha_s\text{ 线性相关}
\Longleftrightarrow Ax=0\text{ 有非零解}
\Longleftrightarrow r(A)<s,
\]

\[
\alpha_1,\ldots,\alpha_s\text{ 线性无关}
\Longleftrightarrow Ax=0\text{ 只有零解}
\Longleftrightarrow r(A)=s.
\]

若向量个数 \(s\) 大于向量维数 \(n\)，则向量组必线性相关。方阵列向量组满足

\[
|A|\ne0\Longleftrightarrow\text{列向量组线性无关}.
\]

##### 线性表示与秩

\[
\beta\text{ 可由 }\alpha_1,\ldots,\alpha_s\text{ 线性表示}
\Longleftrightarrow r(A)=r(A,\beta).
\]

若向量组Ⅰ可由向量组Ⅱ线性表示，则

\[
r(\text{Ⅰ})\le r(\text{Ⅱ}).
\]

若 \((\beta_1,\ldots,\beta_s)=(\alpha_1,\ldots,\alpha_s)C\)，且 \(\alpha_1,\ldots,\alpha_s\) 线性无关，则

\[
\beta_1,\ldots,\beta_s\text{ 线性无关}\Longleftrightarrow C\text{ 可逆}.
\]
`,
  '第四章　线性方程组': String.raw`#### 线性方程组公式总览

##### 解的判定

对 \(A_{m\times n}x=0\)：

\[
\text{只有零解}\Longleftrightarrow r(A)=n,
\qquad
\text{有非零解}\Longleftrightarrow r(A)<n.
\]

对 \(Ax=b\)，记增广矩阵为 \(\bar A=(A\mid b)\)：

\[
\begin{aligned}
&\text{无解}&&\Longleftrightarrow r(A)\ne r(\bar A),\\
&\text{唯一解}&&\Longleftrightarrow r(A)=r(\bar A)=n,\\
&\text{无穷多解}&&\Longleftrightarrow r(A)=r(\bar A)<n.
\end{aligned}
\]

##### 通解结构

若 \(\eta_1,\ldots,\eta_{n-r(A)}\) 是 \(Ax=0\) 的基础解系，\(\eta_0\) 是 \(Ax=b\) 的一个特解，则

\[
x=k_1\eta_1+\cdots+k_{n-r(A)}\eta_{n-r(A)}+\eta_0.
\]

非齐次解之差是齐次解；非齐次解与齐次解之和仍是非齐次解。

##### 公共解与同解

两个齐次方程组的公共解由

\[
\begin{pmatrix}A\\B\end{pmatrix}x=0
\]

给出。两个齐次方程组同解，指全部解完全相同；可分别化为行最简形比较，不能把该问题误写成与“生成空间”有关的题目。
`,
  '第五章　特征值与特征向量（相似矩阵）': String.raw`#### 特征值与相似公式总览

##### 特征值公式

\[
|\lambda E-A|=0,
\qquad A\alpha=\lambda\alpha\quad(\alpha\ne0),
\]

\[
\sum_{i=1}^n\lambda_i=\operatorname{tr}(A),
\qquad \prod_{i=1}^n\lambda_i=|A|.
\]

若 \(\lambda\) 是 \(A\) 的特征值，则 \(f(\lambda)\) 是 \(f(A)\) 的特征值；当 \(A\) 可逆时，\(\lambda^{-1}\) 是 \(A^{-1}\) 的特征值。

##### 相似与相似对角化

\[
B=P^{-1}AP\Longleftrightarrow A\sim B.
\]

相似矩阵具有相同的特征多项式、特征值、迹、行列式和秩。矩阵 \(A\) 可相似对角化的充要条件是

\[
\boxed{A\text{ 有 }n\text{ 个线性无关的特征向量}}.
\]

对每个 \(k\) 重特征值 \(\lambda\)，等价条件为

\[
n-r(A-\lambda E)=k.
\]

若 \(P=(\alpha_1,\ldots,\alpha_n)\)，且 \(A\alpha_i=\lambda_i\alpha_i\)，则

\[
P^{-1}AP=\operatorname{diag}(\lambda_1,\ldots,\lambda_n).
\]

实对称矩阵一定可由正交矩阵正交对角化：

\[
Q^TAQ=\Lambda,\qquad Q^{-1}=Q^T.
\]
`,
  '第六章　二次型': String.raw`#### 二次型公式总览

##### 矩阵表示与变量替换

\[
f(x)=x^TAx,
\]

其中 \(A\) 取实对称矩阵；交叉项 \(x_ix_j\) 的系数等于 \(2a_{ij}\)。作可逆线性变换 \(x=Cy\) 后，

\[
f(x)=y^T(C^TAC)y.
\]

因此 \(A\) 与 \(C^TAC\) 合同。

##### 标准形、惯性指数与秩

\[
f=d_1y_1^2+\cdots+d_ny_n^2.
\]

正惯性指数 \(p\) 是正系数项数，负惯性指数 \(q\) 是负系数项数，并且

\[
r(A)=p+q.
\]

合同变换保持秩、正惯性指数和负惯性指数。

##### 正定判定

实对称矩阵 \(A\) 正定的等价条件包括：

\[
x^TAx>0\quad(x\ne0),
\]

\[
A\text{ 的全部特征值大于 }0,
\]

\[
\Delta_1>0,\ \Delta_2>0,\ \ldots,\ \Delta_n>0,
\]

其中 \(\Delta_k\) 是第 \(k\) 阶顺序主子式。
`,
}

const output = [
  '# 考研数学二公式与章节精编',
  '',
  '> 内容优先依据：《考研数学题型总结_合订版》《线代知识点汇总》《线性代数联系记忆》。已删除例题、重复话术和冗余流程段落；保留公式、定义、定理、判定条件和必要方法。',
  '',
]

let inContent = false
let dropTopic = false
let dropSubsection = false

for (const rawLine of lines) {
  const line = rawLine.replace(/[ \t]+$/g, '')
  const h2 = line.match(/^##\s+(.+)$/)
  const h3 = line.match(/^###\s+(.+)$/)
  const h4 = line.match(/^####\s+(.+)$/)
  const h5 = line.match(/^#####\s+(.+)$/)

  if (h2) {
    const title = h2[1].trim()
    inContent = /^第[一二]部分/.test(title)
    dropTopic = false
    dropSubsection = false
    if (inContent) output.push(`## ${title}`, '')
    continue
  }

  if (!inContent) continue

  if (h3) {
    dropTopic = false
    dropSubsection = false
    output.push(`### ${h3[1].trim()}`, '')
    const overview = chapterFormulaOverviews[h3[1].trim()]
    if (overview) output.push(overview.trim(), '')
    continue
  }

  if (h4) {
    const rawTitle = h4[1].trim()
    dropTopic = droppedTopics.test(rawTitle)
    dropSubsection = false
    if (!dropTopic) {
      const title = rawTitle.replace(/^(?:题型[一二三四五六七八九十百零〇0-9]+|补充题型(?:[一二三四五六七八九十百零〇0-9]+)?)\s*[：:]\s*/, '')
      output.push(`#### ${title}`, '')
    }
    continue
  }

  if (dropTopic) continue

  if (h5) {
    const title = h5[1].trim()
    dropSubsection = droppedSubsections.test(title)
    if (!dropSubsection) {
      const normalizedTitle = title === '操作步骤' ? '简要方法' : title
      output.push(`##### ${normalizedTitle}`, '')
    }
    continue
  }

  if (dropSubsection) continue

  // 六级标题通常是公式或方法的细分项，保留。
  if (/^######\s+/.test(line)) {
    output.push(line, '')
    continue
  }

  // 删除原稿中的来源提示、空泛引导语和重复分隔线。
  if (/^>\s*来源[：:]/.test(line)) continue
  if (/^>\s*本章只整理考研中的\*\*题型\*\*/.test(line)) continue
  if (/^(这一题型|这类题|看到这类|本节主要|下面重点).{0,45}[。；：:]?$/.test(line.trim())) continue
  if (/^---+$/.test(line.trim())) continue

  output.push(line)
}

const compacted = output
  .join('\n')
  .replace(/##### Laplace展开/g, '##### 拉普拉斯展开')
  .replace(/##### 条件翻译补充/g, '##### 条件与结论')
  .replace(/##### 高频条件翻译/g, '##### 高频结论')
  .replace(/\n{3,}/g, '\n\n')
  .replace(/[ \t]+\n/g, '\n')
  .trimEnd() + '\n'

writeFileSync(outputPath, compacted)
console.log(`[三资料精编] 已生成 ${outputPath}`)
