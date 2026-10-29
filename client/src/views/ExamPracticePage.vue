<script setup lang="ts">
import PracticePage from './PracticePage.vue'
import questions from '@/content/practice-questions.json'
import type { PracticeQuestion } from '@/math/practice'
</script>

<template><PracticePage collection="exams" :source="questions as PracticeQuestion[]" /></template>
