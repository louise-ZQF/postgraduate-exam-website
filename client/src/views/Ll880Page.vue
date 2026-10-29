<script setup lang="ts">
import PracticePage from './PracticePage.vue'
import questions from '@/content/ll880-questions.json'
import type { PracticeQuestion } from '@/math/practice'
</script>

<template>
  <PracticePage collection="ll880" :source="questions as PracticeQuestion[]" />
</template>
