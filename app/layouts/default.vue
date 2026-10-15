<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  background: color-mix(in srgb, var(--color-iron-core) 8%, var(--color-architectural-cream));
  color: var(--color-iron-core);
  color-scheme: light;
}
</style>
