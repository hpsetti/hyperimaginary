<script setup lang="ts">
import type { CategoryKey } from '~/data/projects'

defineProps<{
  kind: CategoryKey
}>()
</script>

<template>
  <svg v-if="kind === 'ai'" class="drawing" viewBox="0 0 360 280" fill="none" aria-hidden="true">
    <path d="M70 70h80M190 70h80M70 210h80M190 210h80M110 88v104M250 88v104M150 70l40 70M210 140l-40 70" />
    <circle cx="70" cy="70" r="16" />
    <circle cx="190" cy="70" r="16" />
    <circle cx="270" cy="70" r="16" />
    <circle cx="70" cy="210" r="16" />
    <circle cx="190" cy="210" r="16" />
    <circle cx="270" cy="210" r="16" />
    <circle cx="180" cy="140" r="22" />
  </svg>

  <svg v-else-if="kind === 'cloud'" class="drawing" viewBox="0 0 360 280" fill="none" aria-hidden="true">
    <rect x="70" y="36" width="220" height="52" rx="26" />
    <rect x="48" y="112" width="220" height="52" rx="26" />
    <rect x="92" y="188" width="220" height="52" rx="26" />
    <path d="M180 88v24M158 164v24" />
  </svg>

  <svg v-else-if="kind === 'physics'" class="drawing" viewBox="0 0 360 280" fill="none" aria-hidden="true">
    <path d="M180 28v78" />
    <circle cx="180" cy="128" r="22" />
    <path d="M48 210h264" />
    <path d="M70 210c28-78 192-78 220 0" />
    <path d="M180 28h70" />
  </svg>

  <svg v-else-if="kind === 'math'" class="drawing" viewBox="0 0 360 280" fill="none" aria-hidden="true">
    <circle cx="180" cy="140" r="78" />
    <path d="M70 140h220M180 50v180" />
    <path d="M180 140l62-48" />
    <circle cx="242" cy="92" r="5" />
  </svg>

  <svg v-else-if="kind === 'space'" class="drawing radar" viewBox="0 0 300 380" fill="none" aria-hidden="true">
    <path class="arc" d="M28 352 A 260 260 0 0 1 272 78" />
    <path class="mark" d="M62 292 l16 7 -18 7 z" />
    <path class="mark" d="M108 236 l18 2 -12 14 z" />
    <circle class="ring" cx="158" cy="186" r="18" />
    <path class="mark" d="M152 176 l18 10 -18 10 z" />
    <path class="mark" d="M208 140 l16 -4 -4 16 z" />
    <path class="mark" d="M248 104 l14 -8 0 16 z" />
  </svg>

  <svg v-else class="drawing" viewBox="0 0 360 420" fill="none" aria-hidden="true">
    <path d="M70 40h40v250H70z" />
    <path d="M90 40v-18h8v18" />
    <path d="M78 80h24M78 120h24M78 160h24M78 200h24M78 240h24" />
    <path d="M110 150h70v20h-70z" />
    <path d="M180 70v200" />
    <path d="M160 90h40M160 130h40M160 170h40" />
    <path d="M150 270h80v16h-80z" />
    <path d="M40 300h280v70H40z" />
    <path d="M40 318h280M70 300v70M120 300v70M210 300v70M270 300v70" />
    <path d="M150 286v14M190 286v14" />
    <path d="M60 370h240" />
    <circle cx="180" cy="160" r="18" />
    <path d="M180 142v36M162 160h36" />
  </svg>
</template>

<style scoped>
.drawing {
  width: min(100%, 18rem);
  height: auto;
  stroke: currentColor;
  stroke-width: 1.6;
}

.radar {
  width: min(100%, 22rem);
}

.arc {
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-dasharray: 1.4 7.5;
  stroke-linecap: round;
}

.ring {
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
}

.mark {
  fill: currentColor;
  stroke: none;
}
</style>
