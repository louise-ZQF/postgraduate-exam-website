import arcDiagram from '@/assets/practice-figures/zy2026-set1-q5.svg?raw'

const arcDiagramUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(arcDiagram)}`

export function practiceImageUrl(src: string): string {
  return src === 'practice-figures/zy2026-set1-q5.svg' ? arcDiagramUrl : `${import.meta.env.BASE_URL}${src}`
}
