import type { FunctionGraph, GraphPoint, IntegralDiagram, ParametricSegment } from './functionGraphs'

const pi = Math.PI
const math = (s: string) => `\\(${s}\\)`
const polar = (r: (t: number) => number, from: number, to: number): ParametricSegment => ({
  from, to, closed: true, x: (t) => r(t) * Math.cos(t), y: (t) => r(t) * Math.sin(t),
})

const origin: GraphPoint = { x: 0, y: 0, label: 'O' }
const point = (x: number, y: number, label?: string, labelPosition?: GraphPoint['labelPosition']): GraphPoint => ({ x, y, label, labelPosition })
const axisLabel = (x: number, y: number, label: string, labelPosition: GraphPoint['labelPosition']): GraphPoint => ({
  x, y, label, labelPosition, marker: false,
})

function curve(
  id: string, title: string, formulas: string[], domain: string, area: string, conclusion: string, region: string,
  paths: ParametricSegment[], points: GraphPoint[], diagram: IntegralDiagram,
  xRange: [number, number] = [-1.2, 1.2], yRange: [number, number] = [-1.2, 1.2],
): FunctionGraph {
  return {
    id, title, formula: formulas.map(math).join('  \n'), category: '二重积分曲线',
    aliases: `${title} 特殊曲线 极坐标 积分区域`, domain: math(domain), range: math(area),
    conclusion: conclusion + ' 图中取 a=1。', region: math(region), segments: [],
    parametricSegments: paths, equalScale: true, xRange, yRange, points: [origin, ...points], diagram,
  }
}

export const integralCurves: FunctionGraph[] = [
  curve('astroid', '星形线', [String.raw`x=a\cos^3t,\quad y=a\sin^3t`, String.raw`x^{\frac{2}{3}}+y^{\frac{2}{3}}=a^{\frac{2}{3}}`], String.raw`a>0,\ 0\le t\le2\pi`, String.raw`\frac{3\pi a^2}{8}`,
    '关于两坐标轴对称，围成区域可按四个象限分开积分。',
    String.raw`D_1:\ 0\le x\le a,\quad 0\le y\le(a^{\frac{2}{3}}-x^{\frac{2}{3}})^{\frac{3}{2}}`,
    [{ from: 0, to: 2*pi, x: (t) => Math.cos(t)**3, y: (t) => Math.sin(t)**3, closed: true }],
    [point(-1, 0, '−a', 'below'), point(1, 0, 'a', 'below'), point(0, 1, 'a'), point(0, -1, '−a')],
    { area: '3πa²/8', arcLength: math('6a') }),
  curve('cycloid', '摆线（一拱）', [String.raw`x=a(t-\sin t)`, String.raw`y=a(1-\cos t)`], String.raw`a>0,\ 0\le t\le2\pi`, String.raw`3\pi a^2`,
    '一拱与 x 轴围成区域。最高点为 ' + math(String.raw`(\pi a,2a)`) + '。',
    String.raw`S=\int_0^{2\pi}a^2(1-\cos t)^2\,dt,\quad dx=a(1-\cos t)\,dt`,
    [{ from: 0, to: 2*pi, x: (t) => t-Math.sin(t), y: (t) => 1-Math.cos(t), closed: true }],
    [point(pi, 2, '(πa, 2a)', 'above'), point(2*pi, 0, '2πa', 'below'), axisLabel(pi, 0, 'πa', 'below'), axisLabel(0, 2, '2a', 'left')],
    { area: '3πa²', arcLength: math('8a'), guides: [[0, 2, pi, 2], [pi, 0, pi, 2]] }, [-0.65, 6.85], [-0.4, 2.4]),
  curve('lemniscate-cos', '双纽线（横向）', [String.raw`r^2=a^2\cos2\theta`, String.raw`(x^2+y^2)^2=a^2(x^2-y^2)`], String.raw`a>0,\ \cos2\theta\ge0`, String.raw`a^2`,
    '左右两瓣各占一半面积，虚线标出右瓣的角度范围。',
    String.raw`D_{\text{右}}:\ -\frac\pi4\le\theta\le\frac\pi4,\quad0\le r\le a\sqrt{\cos2\theta}`,
    [polar((t) => Math.sqrt(Math.max(0,Math.cos(2*t))), -pi/4, pi/4), polar((t) => Math.sqrt(Math.max(0,Math.cos(2*t))), 3*pi/4, 5*pi/4)],
    [point(-1, 0, '−a', 'below'), point(1, 0, 'a', 'below'), axisLabel(1, 1, 'π/4', 'right'), axisLabel(1, -1, '−π/4', 'right')],
    { area: 'a²', guides: [[-1, -1, 1, 1], [-1, 1, 1, -1]] }),
  curve('lemniscate-sin', '双纽线（斜向）', [String.raw`r^2=a^2\sin2\theta`, String.raw`(x^2+y^2)^2=2a^2xy`], String.raw`a>0,\ \sin2\theta\ge0`, String.raw`a^2`,
    '横向双纽线逆时针旋转 π/4，两瓣尖端到原点的距离都是 a。',
    String.raw`D_1:\ 0\le\theta\le\frac\pi2,\quad0\le r\le a\sqrt{\sin2\theta}`,
    [polar((t) => Math.sqrt(Math.max(0,Math.sin(2*t))), 0, pi/2), polar((t) => Math.sqrt(Math.max(0,Math.sin(2*t))), pi, 3*pi/2)],
    [point(-Math.SQRT1_2, -Math.SQRT1_2, 'r = a', 'left'), point(Math.SQRT1_2, Math.SQRT1_2, 'r = a'), axisLabel(1, 1, 'π/4', 'right')],
    { area: 'a²', guides: [[-1, -1, 1, 1]] }),
]

for (const [id, direction, trig, sign, tip] of [
  ['cardioid-right', '向右', 'cos', '+', point(2, 0, '2a', 'below')],
  ['cardioid-left', '向左', 'cos', '-', point(-2, 0, '−2a', 'below')],
  ['cardioid-up', '向上', 'sin', '+', point(0, 2, '2a')],
  ['cardioid-down', '向下', 'sin', '-', point(0, -2, '−2a')],
] as const) {
  const boundary = `a(1${sign}\\${trig}\\theta)`
  const cartesian = `x^2+y^2${sign === '+' ? '-' : '+'}a${trig === 'cos' ? 'x' : 'y'}=a\\sqrt{x^2+y^2}`
  const radius = (t: number) => 1 + (sign === '+' ? 1 : -1) * Math[trig](t)
  integralCurves.push(curve(id, `心形线（${direction}）`, [`r=${boundary}`, cartesian], String.raw`a>0,\ 0\le\theta\le2\pi`, String.raw`\frac{3\pi a^2}{2}`,
    '尖点在原点，最远点到原点的距离为 2a。', `D:\\ 0\\le\\theta\\le2\\pi,\\quad0\\le r\\le ${boundary}`,
    [polar(radius, 0, 2*pi)], [tip], { area: '3πa²/2', arcLength: math('8a') }, [-2.3, 2.3], [-2.3, 2.3]))
}

for (const [id, petals, trig, upper, lower, directions] of [
  ['rose-three-cos', 3, 'cos', '\\frac\\pi6', '-\\frac\\pi6', [[0, '0'], [2*pi/3, '2π/3'], [4*pi/3, '4π/3']]],
  ['rose-three-sin', 3, 'sin', '\\frac\\pi3', '0', [[pi/6, 'π/6'], [5*pi/6, '5π/6'], [3*pi/2, '3π/2']]],
  ['rose-four-cos', 4, 'cos', '\\frac\\pi4', '-\\frac\\pi4', [[0, '0'], [pi/2, 'π/2'], [pi, 'π'], [3*pi/2, '3π/2']]],
  ['rose-four-sin', 4, 'sin', '\\frac\\pi2', '0', [[pi/4, 'π/4'], [3*pi/4, '3π/4'], [5*pi/4, '5π/4'], [7*pi/4, '7π/4']]],
] as const) {
  const k = petals === 3 ? 3 : 2
  const tips = directions.map(([theta, label]) => {
    const x = Math.cos(theta)
    return point(x, Math.sin(theta), `θ = ${label}`, x < -0.1 ? 'left' : 'right')
  })
  integralCurves.push(curve(id, `${petals === 3 ? '三叶' : '四叶'}玫瑰线（${trig === 'cos' ? '余弦型' : '正弦型'}）`, [`r=a\\${trig}${k}\\theta`],
    `a>0,\\ 0\\le\\theta\\le${petals === 3 ? '\\pi' : '2\\pi'}`, petals === 3 ? String.raw`\frac{\pi a^2}{4}` : String.raw`\frac{\pi a^2}{2}`,
    `各瓣尖端到原点的距离都是 a。单瓣面积为 ${math(petals === 3 ? String.raw`\frac{\pi a^2}{12}` : String.raw`\frac{\pi a^2}{8}`)}，乘 ${petals} 得总面积。`,
    `D_{\\text{一瓣}}:\\ ${lower}\\le\\theta\\le${upper},\\quad0\\le r\\le a\\${trig}${k}\\theta`,
    [polar((t) => Math[trig](k*t), 0, petals === 3 ? pi : 2*pi)], tips, { area: petals === 3 ? 'πa²/4' : 'πa²/2' }))
}

integralCurves.push(curve('archimedean-spiral', '阿基米德螺线（一圈）', [String.raw`r=a\theta`], String.raw`a>0,\ 0\le\theta\le2\pi`, String.raw`\frac{4\pi^3a^2}{3}`,
  '一圈螺线与正 x 轴围成区域，θ 增大时半径线性增大。', String.raw`D:\ 0\le\theta\le2\pi,\quad0\le r\le a\theta`,
  [polar((t) => t, 0, 2*pi)], [point(2*pi, 0, '2πa', 'below')], { area: '4π³a²/3' }, [-7, 7], [-6, 4]))
