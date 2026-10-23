<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref } from 'vue'
import type { QuestionImage } from '@/math/practice'

const dialog = ref<HTMLDialogElement>()
const closeButton = ref<HTMLButtonElement>()
const image = ref<QuestionImage>()
let returnFocus: HTMLElement | undefined
let savedOverflow: string | undefined

async function open(picture: QuestionImage, trigger: HTMLElement) {
  returnFocus = trigger
  image.value = picture
  await nextTick()
  if (!dialog.value || dialog.value.open) return
  savedOverflow = document.documentElement.style.overflow
  document.documentElement.style.overflow = 'hidden'
  dialog.value.showModal()
}

function restorePage() {
  if (savedOverflow !== undefined) {
    document.documentElement.style.overflow = savedOverflow
    savedOverflow = undefined
  }
  if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true })
  returnFocus = undefined
  image.value = undefined
}

function close() { dialog.value?.close() }
function focusClose() { closeButton.value?.focus() }

onBeforeUnmount(() => {
  close()
  restorePage()
})
defineExpose({ open, close })
</script>

<template>
  <Teleport to="body">
    <dialog ref="dialog" class="image-preview" aria-label="图片放大预览" @click.self="close" @cancel.prevent="close" @keydown.tab.prevent="focusClose" @close="restorePage">
      <button ref="closeButton" type="button" class="preview-close" aria-label="关闭图片预览" autofocus @click="close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
      <img v-if="image" :src="image.src" :alt="image.alt" :width="image.width" :height="image.height" :draggable="false" />
      <p class="preview-hint">点击图片外的空白处关闭 · Esc 退出</p>
    </dialog>
  </Teleport>
</template>

<style scoped>
.image-preview { position: fixed; inset: 0; width: 100vw; height: 100dvh; max-width: none; max-height: none; margin: 0; border: 0; padding: 64px 24px 48px; background: transparent; overflow: auto; }
.image-preview[open] { display: grid; place-items: center; }
.image-preview::backdrop { background: #111827de; }
.image-preview > img { display: block; width: auto; height: auto; max-width: 100%; max-height: calc(100dvh - 112px); object-fit: contain; background: white; border-radius: 4px; }
.preview-close { position: fixed; top: max(12px, env(safe-area-inset-top)); right: max(16px, env(safe-area-inset-right)); display: grid; place-items: center; width: 44px; height: 44px; border: 1px solid #ffffff70; border-radius: 50%; background: #111827; color: white; cursor: pointer; }
.preview-close:hover { background: #374151; }.preview-close:focus-visible { outline: 3px solid white; outline-offset: 3px; }.preview-close svg { width: 22px; height: 22px; }
.preview-hint { position: fixed; bottom: max(12px, env(safe-area-inset-bottom)); left: 16px; right: 16px; margin: 0; color: white; font-size: 12px; line-height: 1.6; text-align: center; pointer-events: none; }
@media (max-width: 600px) { .image-preview { padding-left: 12px; padding-right: 12px; } }
@media print { .image-preview, .image-preview::backdrop { display: none !important; } }
</style>
