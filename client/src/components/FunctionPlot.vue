<script setup lang="ts">
import { computed } from 'vue'
import type { FunctionGraph } from '@/math/functionGraphs'

const props = defineProps<{ graph: FunctionGraph }>()

const width = 520
const height = 300
const padding = 28
const left = computed(() => props.graph.detail ? 54 : padding)
const right = computed(() => width - (props.graph.detail ? 16 : padding))
const top = computed(() => props.graph.detail ? 14 : padding)
const bottom = computed(() => height - (props.graph.detail ? 34 : padding))
const plotWidth = computed(() => right.value - left.value)
const plotHeight = computed(() => bottom.value - top.value)
const scale = computed(() => Math.min(plotWidth.value / (props.graph.xRange[1] - props.graph.xRange[0]), plotHeight.value / (props.graph.yRange[1] - props.graph.yRange[0])))

function sx(x: number) {
  const [min, max] = props.graph.xRange
  return props.graph.equalScale ? (left.value + right.value) / 2 + (x - (min + max) / 2) * scale.value : left.value + ((x - min) / (max - min)) * plotWidth.value
}

function sy(y: number) {
  const [min, max] = props.graph.yRange
  return props.graph.equalScale ? (top.value + bottom.value) / 2 - (y - (min + max) / 2) * scale.value : bottom.value - ((y - min) / (max - min)) * plotHeight.value
}

const curvePaths = computed(() => props.graph.segments.map((item) => {
  const steps = 220
  let path = ''
  let drawing = false
  const [yMin, yMax] = props.graph.yRange
  for (let index = 0; index <= steps; index += 1) {
    const x = item.from + ((item.to - item.from) * index) / steps
    const y = item.fn(x)
    if (!Number.isFinite(y) || y < yMin || y > yMax) {
      drawing = false
      continue
    }
    path += `${drawing ? 'L' : 'M'}${sx(x).toFixed(2)},${sy(y).toFixed(2)} `
    drawing = true
  }
  return path
}))

const gridRatios = [0.2, 0.4, 0.6, 0.8]
const verticalGrid = computed(() => props.graph.detail
  ? props.graph.detail.xTicks.map(tick => sx(tick.value))
  : gridRatios.map(ratio => left.value + plotWidth.value * ratio))
const horizontalGrid = computed(() => props.graph.detail
  ? props.graph.detail.yTicks.map(tick => sy(tick.value))
  : gridRatios.map(ratio => top.value + plotHeight.value * ratio))
const curveStroke = computed(() => props.graph.detail || props.graph.diagram ? 'currentColor' : `url(#curve-${props.graph.id})`)
const parametricPaths = computed(() => (props.graph.parametricSegments ?? []).map((item) => {
  const points = Array.from({ length: 721 }, (_, index) => {
    const t = item.from + (item.to - item.from) * index / 720
    return `${index ? 'L' : 'M'}${sx(item.x(t)).toFixed(2)},${sy(item.y(t)).toFixed(2)}`
  })
  return { path: points.join(' ') + (item.closed ? ' Z' : ''), closed: item.closed }
}))
const xAxis = computed(() => props.graph.yRange[0] <= 0 && props.graph.yRange[1] >= 0 ? sy(0) : null)
const yAxis = computed(() => props.graph.xRange[0] <= 0 && props.graph.xRange[1] >= 0 ? sx(0) : null)

const pointLabels = {
  left: { dx: -10, dy: 5, anchor: 'end' },
  right: { dx: 9, dy: -8, anchor: 'start' },
  above: { dx: 0, dy: -12, anchor: 'middle' },
  below: { dx: 0, dy: 22, anchor: 'middle' },
} as const
const plotPoints = computed(() => (props.graph.points ?? []).map((point) => ({
  ...point,
  cx: sx(point.x),
  cy: sy(point.y),
  ...pointLabels[point.labelPosition ?? 'right'],
})))
const description = computed(() => {
  const { title, diagram, points } = props.graph
  const labels = points?.flatMap(({ label }) => label ? [label] : []).join('、')
  if (props.graph.detail) return `${title}的图像。标注点为 ${labels}。`
  if (!diagram) return `${title}的函数图像`
  return `${title}的图像。围成面积为 ${diagram.area}。图中标注 ${labels}。`
})
</script>

<template>
  <svg class="function-plot" :class="{ 'integral-plot': graph.diagram, 'detailed-plot': graph.detail }" :viewBox="`0 0 ${width} ${height}`" role="img" :aria-label="description">
    <defs v-if="!graph.detail && !graph.diagram">
      <linearGradient :id="`curve-${graph.id}`" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#b9792f" />
        <stop offset="1" stop-color="#1f684a" />
      </linearGradient>
    </defs>

    <rect class="plot-paper" :x="left" :y="top" :width="plotWidth" :height="plotHeight" rx="12" />
    <template v-if="!graph.diagram">
      <line v-for="value in verticalGrid" :key="`vx-${value}`" class="grid-line" :x1="value" :x2="value" :y1="top" :y2="bottom" />
      <line v-for="value in horizontalGrid" :key="`hy-${value}`" class="grid-line" :x1="left" :x2="right" :y1="value" :y2="value" />
    </template>

    <line v-if="xAxis !== null && !(graph.detail && graph.horizontalAsymptotes?.includes(0))" class="axis-line" :x1="left" :x2="right" :y1="xAxis" :y2="xAxis" />
    <line v-if="yAxis !== null" class="axis-line" :x1="yAxis" :x2="yAxis" :y1="top" :y2="bottom" />
    <text v-if="xAxis !== null" class="axis-label" :x="right-12" :y="Math.max(top+15, xAxis-8)">x</text>
    <text v-if="yAxis !== null" class="axis-label" :x="graph.diagram ? yAxis-9 : Math.min(right-12, yAxis+9)" :text-anchor="graph.diagram ? 'end' : 'start'" :y="top+17">y</text>
    <template v-if="graph.detail">
      <text v-for="tick in graph.detail.xTicks" :key="`xt-${tick.value}`" class="tick-label" :x="sx(tick.value)" :y="bottom+24" text-anchor="middle">{{ tick.label }}</text>
      <text v-for="tick in graph.detail.yTicks" :key="`yt-${tick.value}`" class="tick-label" :x="left-8" :y="sy(tick.value)" text-anchor="end" dominant-baseline="central">{{ tick.label }}</text>
    </template>

    <line
      v-for="value in graph.verticalAsymptotes ?? []"
      :key="`va-${value}`"
      class="asymptote"
      :x1="sx(value)"
      :x2="sx(value)"
      :y1="top"
      :y2="bottom"
    />
    <line
      v-for="value in graph.horizontalAsymptotes ?? []"
      :key="`ha-${value}`"
      class="asymptote"
      :x1="left"
      :x2="right"
      :y1="sy(value)"
      :y2="sy(value)"
    />

    <path
      v-for="(item, index) in parametricPaths"
      :key="`parametric-${index}`"
      class="curve"
      :class="{ 'closed-region': item.closed }"
      :d="item.path"
      :stroke="curveStroke"
    />

    <path
      v-for="(path, index) in curvePaths"
      :key="index"
      class="curve"
      :d="path"
      :stroke="curveStroke"
    />

    <line
      v-for="([x1, y1, x2, y2], index) in graph.diagram?.guides ?? []"
      :key="`guide-${index}`"
      class="plot-guide"
      :x1="sx(x1)"
      :y1="sy(y1)"
      :x2="sx(x2)"
      :y2="sy(y2)"
    />
    <g v-for="point in plotPoints" :key="`${point.x}-${point.y}`">
      <circle v-if="point.marker !== false" class="key-point" :cx="point.cx" :cy="point.cy" :r="point.endpoint ? 5.5 : graph.diagram ? 3.5 : 4.5" />
      <text v-if="point.label" class="point-label" :x="point.cx + point.dx" :y="point.cy + point.dy" :text-anchor="point.anchor">{{ point.label }}</text>
    </g>
    <text v-if="graph.diagram" class="area-label" :x="width-padding-14" :y="padding+25" text-anchor="end">S = {{ graph.diagram.area }}</text>
  </svg>
</template>

<style scoped>
.function-plot { display: block; width: 100%; height: auto; overflow: visible; }
.plot-paper { fill: rgba(248,251,249,.88); stroke: #dbe6df; stroke-width: 1; }
.grid-line { stroke: #dfe8e3; stroke-width: 1; stroke-dasharray: 2 5; }
.axis-line { stroke: #7d9186; stroke-width: 1.25; }
.axis-label { fill: #65796e; font-family: Georgia, serif; font-size: 14px; font-style: italic; }
.asymptote { stroke: #c38a48; stroke-width: 1.25; stroke-dasharray: 7 6; opacity: .78; }
.curve { fill: none; stroke-width: 3.5; stroke-linecap: round; stroke-linejoin: round; vector-effect: non-scaling-stroke; }
.curve.closed-region { fill: rgba(31,104,74,.08); fill-rule: evenodd; }
.key-point { fill: #fff; stroke: #1f684a; stroke-width: 2; vector-effect: non-scaling-stroke; }
.point-label { fill: #5a6e63; font-size: 11px; paint-order: stroke; stroke: #f8fbf9; stroke-width: 4px; stroke-linejoin: round; }
.detailed-plot { color: var(--accent-dark); }
.detailed-plot .plot-paper { fill: var(--paper); stroke: var(--line); }
.detailed-plot .grid-line { stroke: var(--line-strong); stroke-dasharray: 3 5; }
.detailed-plot .axis-line { stroke: var(--ink-600); }
.detailed-plot .asymptote { stroke: var(--ink-600); stroke-width: 1.5; }
.detailed-plot .curve { stroke-width: 2.6; }
.detailed-plot .key-point { stroke: currentColor; fill: currentColor; }
.detailed-plot .axis-label, .tick-label, .detailed-plot .point-label { fill: var(--ink-800); font-family: Georgia, serif; font-size: 18px; }
.detailed-plot .point-label { stroke: var(--paper); stroke-width: 5px; }
.detailed-plot .tick-label { font-variant-numeric: lining-nums; }
.integral-plot { color: var(--ink-800); }
.integral-plot .plot-paper { fill: var(--paper); stroke: var(--line); }
.integral-plot .axis-line { stroke: var(--ink-600); }
.integral-plot .axis-label { fill: var(--ink-800); font-size: 17px; }
.integral-plot .curve { stroke-width: 2; }
.integral-plot .closed-region { fill: var(--accent-tint); }
.plot-guide { stroke: var(--ink-400); stroke-width: 1.35; stroke-dasharray: 5 5; }
.integral-plot .key-point { stroke: #a0352e; fill: var(--paper); stroke-width: 1.5; }
.integral-plot .point-label, .area-label { fill: #a0352e; font-family: Georgia, serif; font-size: 18px; font-weight: 600; paint-order: stroke; stroke: var(--paper); stroke-width: 3px; stroke-linejoin: round; }
</style>
