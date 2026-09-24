<script setup lang="ts">
import { computed } from 'vue'
import type { FunctionGraph } from '@/math/functionGraphs'

const props = defineProps<{ graph: FunctionGraph }>()

const width = 520
const height = 300
const padding = 28
const plotWidth = width - padding * 2
const plotHeight = height - padding * 2

function sx(x: number) {
  const [min, max] = props.graph.xRange
  return padding + ((x - min) / (max - min)) * plotWidth
}

function sy(y: number) {
  const [min, max] = props.graph.yRange
  return height - padding - ((y - min) / (max - min)) * plotHeight
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

const verticalGrid = [0.2, 0.4, 0.6, 0.8].map((ratio) => padding + plotWidth * ratio)
const horizontalGrid = [0.2, 0.4, 0.6, 0.8].map((ratio) => padding + plotHeight * ratio)
const xAxis = computed(() => props.graph.yRange[0] <= 0 && props.graph.yRange[1] >= 0 ? sy(0) : null)
const yAxis = computed(() => props.graph.xRange[0] <= 0 && props.graph.xRange[1] >= 0 ? sx(0) : null)
</script>

<template>
  <svg class="function-plot" :viewBox="`0 0 ${width} ${height}`" role="img" :aria-label="`${graph.formula} 的函数图像`">
    <defs>
      <linearGradient :id="`curve-${graph.id}`" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#b9792f" />
        <stop offset="1" stop-color="#1f684a" />
      </linearGradient>
    </defs>

    <rect class="plot-paper" :x="padding" :y="padding" :width="plotWidth" :height="plotHeight" rx="12" />
    <line v-for="value in verticalGrid" :key="`vx-${value}`" class="grid-line" :x1="value" :x2="value" :y1="padding" :y2="height-padding" />
    <line v-for="value in horizontalGrid" :key="`hy-${value}`" class="grid-line" :x1="padding" :x2="width-padding" :y1="value" :y2="value" />

    <line v-if="xAxis !== null" class="axis-line" :x1="padding" :x2="width-padding" :y1="xAxis" :y2="xAxis" />
    <line v-if="yAxis !== null" class="axis-line" :x1="yAxis" :x2="yAxis" :y1="padding" :y2="height-padding" />
    <text v-if="xAxis !== null" class="axis-label" :x="width-padding-10" :y="Math.max(padding+15, xAxis-8)">x</text>
    <text v-if="yAxis !== null" class="axis-label" :x="Math.min(width-padding-12, yAxis+9)" :y="padding+15">y</text>

    <line
      v-for="value in graph.verticalAsymptotes ?? []"
      :key="`va-${value}`"
      class="asymptote"
      :x1="sx(value)"
      :x2="sx(value)"
      :y1="padding"
      :y2="height-padding"
    />
    <line
      v-for="value in graph.horizontalAsymptotes ?? []"
      :key="`ha-${value}`"
      class="asymptote"
      :x1="padding"
      :x2="width-padding"
      :y1="sy(value)"
      :y2="sy(value)"
    />

    <path
      v-for="(path, index) in curvePaths"
      :key="index"
      class="curve"
      :d="path"
      :stroke="`url(#curve-${graph.id})`"
    />

    <g v-for="point in graph.points ?? []" :key="`${point.x}-${point.y}`">
      <circle class="key-point" :cx="sx(point.x)" :cy="sy(point.y)" r="4.5" />
      <text v-if="point.label" class="point-label" :x="sx(point.x)+8" :y="sy(point.y)-8">{{ point.label }}</text>
    </g>
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
.key-point { fill: #fff; stroke: #1f684a; stroke-width: 2; vector-effect: non-scaling-stroke; }
.point-label { fill: #5a6e63; font-size: 11px; paint-order: stroke; stroke: #f8fbf9; stroke-width: 4px; stroke-linejoin: round; }
</style>
