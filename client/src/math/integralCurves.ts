import type { FunctionGraph, ParametricSegment } from './functionGraphs'
const pi = Math.PI
const math = (s: string) => `\\(${s}\\)`
const polar = (r: (t: number) => number, from: number, to: number, closed = true): ParametricSegment => ({ from, to, closed, x: (t) => r(t) * Math.cos(t), y: (t) => r(t) * Math.sin(t) })
const curve = (id: string, title: string, formula: string, domain: string, area: string, conclusion: string, region: string, paths: ParametricSegment[], xRange: [number, number] = [-1.2, 1.2], yRange: [number, number] = [-1.2, 1.2]): FunctionGraph => ({
  id, title, formula: math(formula), category: '二重积分曲线', aliases: `${title} 特殊曲线 极坐标 积分区域`, domain: math(domain), range: math(area), conclusion: conclusion + ' 图中取 a=1。', region: math(region), segments: [], parametricSegments: paths, equalScale: true, xRange, yRange, points: [{ x: 0, y: 0, label: 'O' }],
})
export const integralCurves: FunctionGraph[] = [
  curve('astroid', '星形线', String.raw`x^{\frac{2}{3}}+y^{\frac{2}{3}}=a^{\frac{2}{3}}`, String.raw`a>0,\ 0\le t\le2\pi`, String.raw`\frac{3\pi a^2}{8}`,
    math(String.raw`x=a\cos^3t,\ y=a\sin^3t`) + '；关于两坐标轴对称。',
    String.raw`D_1:\ 0\le x\le a,\quad 0\le y\le(a^{\frac{2}{3}}-x^{\frac{2}{3}})^{\frac{3}{2}}`,
    [{ from: 0, to: 2*pi, x: (t) => Math.cos(t)**3, y: (t) => Math.sin(t)**3, closed: true }]),
  curve('cycloid', '摆线（一拱）', String.raw`x=a(t-\sin t),\ y=a(1-\cos t)`, String.raw`a>0,\ 0\le t\le2\pi`, String.raw`3\pi a^2`,
    '一拱与 x 轴围成区域；最高点为 ' + math(String.raw`(\pi a,2a)`) + '。',
    String.raw`S=\int_0^{2\pi}a^2(1-\cos t)^2\,dt,\quad dx=a(1-\cos t)\,dt`,
    [{ from: 0, to: 2*pi, x: (t) => t-Math.sin(t), y: (t) => 1-Math.cos(t), closed: true }], [-0.5, 6.8], [-0.4, 2.4]),
  curve('lemniscate-cos', '双纽线（横向）', String.raw`r^2=a^2\cos2\theta`, String.raw`a>0,\ \cos2\theta\ge0`, String.raw`a^2`,
    math(String.raw`(x^2+y^2)^2=a^2(x^2-y^2)`) + '；左右两瓣各占一半面积。',
    String.raw`D_{\text{右}}:\ -\frac\pi4\le\theta\le\frac\pi4,\quad0\le r\le a\sqrt{\cos2\theta}`,
    [polar((t) => Math.sqrt(Math.max(0,Math.cos(2*t))), -pi/4, pi/4), polar((t) => Math.sqrt(Math.max(0,Math.cos(2*t))), 3*pi/4, 5*pi/4)]),
  curve('lemniscate-sin', '双纽线（斜向）', String.raw`r^2=a^2\sin2\theta`, String.raw`a>0,\ \sin2\theta\ge0`, String.raw`a^2`,
    math(String.raw`(x^2+y^2)^2=2a^2xy`) + '；横向双纽线逆时针旋转 π/4。',
    String.raw`D_1:\ 0\le\theta\le\frac\pi2,\quad0\le r\le a\sqrt{\sin2\theta}`,
    [polar((t) => Math.sqrt(Math.max(0,Math.sin(2*t))), 0, pi/2), polar((t) => Math.sqrt(Math.max(0,Math.sin(2*t))), pi, 3*pi/2)]),
]
for (const [id, direction, trig, sign, fn] of [
  ['cardioid-right','向右','cos','+',(t: number) => 1+Math.cos(t)],
  ['cardioid-left','向左','cos','-',(t: number) => 1-Math.cos(t)],
  ['cardioid-up','向上','sin','+',(t: number) => 1+Math.sin(t)],
  ['cardioid-down','向下','sin','-',(t: number) => 1-Math.sin(t)],
] as const) {
  const boundary = `a(1${sign}\\${trig}\\theta)`
  integralCurves.push(curve(id,`心形线（${direction}）`,`r=${boundary}`,String.raw`a>0,\ 0\le\theta\le2\pi`,String.raw`\frac{3\pi a^2}{2}`,
    '尖点在原点；最远点到原点的距离为 2a。',`D:\ 0\\le\\theta\\le2\\pi,\\quad0\\le r\\le ${boundary}`,[polar(fn,0,2*pi)],[-2.3,2.3],[-2.3,2.3]))
}
for (const [id, petals, trig, fn, upper, lower] of [
  ['rose-three-cos',3,'cos',(t: number) => Math.cos(3*t),'\\frac\\pi6','-\\frac\\pi6'],
  ['rose-three-sin',3,'sin',(t: number) => Math.sin(3*t),'\\frac\\pi3','0'],
  ['rose-four-cos',4,'cos',(t: number) => Math.cos(2*t),'\\frac\\pi4','-\\frac\\pi4'],
  ['rose-four-sin',4,'sin',(t: number) => Math.sin(2*t),'\\frac\\pi2','0'],
] as const) {
  const k = petals === 3 ? 3 : 2
  integralCurves.push(curve(id,`${petals === 3 ? '三叶' : '四叶'}玫瑰线（${trig === 'cos' ? '余弦型' : '正弦型'}）`,`r=a\\${trig}${k}\\theta`,
    `a>0,\\ 0\\le\\theta\\le${petals === 3 ? '\\pi' : '2\\pi'}`,petals === 3 ? String.raw`\frac{\pi a^2}{4}` : String.raw`\frac{\pi a^2}{2}`,
    `单瓣面积为 ${math(petals === 3 ? String.raw`\frac{\pi a^2}{12}` : String.raw`\frac{\pi a^2}{8}`)}；求总面积乘 ${petals}。`,
    `D_{\\text{一瓣}}:\ ${lower}\\le\\theta\\le${upper},\\quad0\\le r\\le a\\${trig}${k}\\theta`,[polar(fn,0,petals === 3 ? pi : 2*pi)]))
}
integralCurves.push(curve('archimedean-spiral','阿基米德螺线（一圈）',String.raw`r=a\theta`,String.raw`a>0,\ 0\le\theta\le2\pi`,String.raw`\frac{4\pi^3a^2}{3}`,
  '一圈螺线与正 x 轴围成区域；θ 增大时半径线性增大。',String.raw`D:\ 0\le\theta\le2\pi,\quad0\le r\le a\theta`,[polar((t) => t,0,2*pi,false)],[-7,7],[-7,7]))
