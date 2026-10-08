<script setup lang="ts">
defineProps<{ name: 'book' | 'repeat' | 'eye' | 'check' | 'unknown' | 'unfamiliar' | 'arrow' | 'note' | 'search' | 'download' | 'upload' }>()
const paths = {
  book: 'M4 4h6a3 3 0 0 1 3 3v14a4 4 0 0 0-4-3H4V4Zm16 0h-4a3 3 0 0 0-3 3v14a4 4 0 0 1 4-3h3V4Z',
  repeat: 'M20 7v5h-5M4 17v-5h5M6 7a7 7 0 0 1 12-1l2 3M4 15l2 3a7 7 0 0 0 12-1',
  eye: 'M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12Zm13 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  check: 'M9 12l2 2 4-4M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z',
  unknown: 'M9 9l6 6m0-6-6 6M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z',
  unfamiliar: 'M8 15a5 5 0 0 1 8-6m-4 4 5-5M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z',
  arrow: 'M5 12h14m-5-5 5 5-5 5',
  note: 'M5 3h14v18H5V3Zm4 5h6m-6 4h6m-6 4h4',
  search: 'M16 16l5 5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z',
  download: 'M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5',
  upload: 'M12 16V4m-5 5 5-5 5 5M4 16v5h16v-5',
}
</script>
<template><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="paths[name]" /></svg></template>
