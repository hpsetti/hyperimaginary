<script setup lang="ts">
import { categoryKey, type Project } from '~/data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <NuxtLink class="card" :class="`is-${categoryKey(project.category)}`" :to="`/projects/${project.slug}`">
    <p class="tag">{{ project.category }}</p>
    <h3>{{ project.name }}</h3>
    <span class="more" aria-hidden="true">→</span>
  </NuxtLink>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  border: 1px solid var(--line);
  background: var(--color-architectural-cream);
  color: var(--ink);
  text-decoration: none;
  transition:
    background-color 320ms var(--ease-out),
    color 320ms var(--ease-out),
    border-color 320ms var(--ease-out);
}

.card.is-ai {
  --ink: var(--color-ai-paper);
  --line: color-mix(in srgb, var(--color-ai-lilac) 48%, transparent);
  background: var(--color-ai-field);
  color: var(--ink);
}

.card.is-ai .tag {
  color: var(--color-ai-mint);
}

.card.is-cloud {
  --line: color-mix(in srgb, var(--color-industrial-aqua) 45%, transparent);
  border-radius: 1rem;
  background: color-mix(in srgb, var(--color-industrial-aqua) 16%, var(--color-architectural-cream));
}

.card.is-cloud .tag {
  color: color-mix(in srgb, var(--color-industrial-aqua) 30%, var(--color-iron-core));
}

.card.is-arch {
  --line: color-mix(in srgb, var(--color-heat-marker) 55%, transparent);
  border-top: 4px solid var(--color-heat-marker);
}

.card.is-arch .tag {
  color: var(--color-rust-signal);
}

.card.is-physics {
  --line: color-mix(in srgb, var(--color-physics-sky) 55%, transparent);
  border-top: 4px solid var(--color-physics-amber);
  background: var(--color-physics-paper);
}

.card.is-physics .tag {
  color: var(--color-physics-sky);
}

.card.is-math {
  --ink: var(--color-math-chalk);
  --line: color-mix(in srgb, var(--color-math-chalk) 28%, transparent);
  border-top: 4px solid var(--color-math-gold);
  background: var(--color-math-board);
  color: var(--ink);
}

.card.is-math .tag {
  color: var(--color-math-gold);
}

.card.is-space {
  --ink: var(--color-space-paper);
  --line: color-mix(in srgb, var(--color-space-paper) 22%, transparent);
  border-top: 4px solid var(--color-space-mark);
  background: var(--color-space-night);
  color: var(--ink);
}

.card.is-space .tag {
  color: var(--color-space-paper);
}

.card.is-ai:hover {
  --ink: var(--color-ai-field);
  --line: color-mix(in srgb, var(--color-ai-field) 18%, transparent);
  background: var(--color-ai-paper);
  border-color: var(--color-ai-field);
  color: var(--ink);
}

.card.is-ai:hover .tag {
  color: color-mix(in srgb, var(--color-ai-lilac) 35%, var(--color-ai-field));
}

.card.is-cloud:hover {
  --ink: var(--color-architectural-cream);
  --line: color-mix(in srgb, var(--color-industrial-aqua) 42%, transparent);
  background: var(--color-iron-core);
  border-color: var(--color-industrial-aqua);
  color: var(--ink);
}

.card.is-cloud:hover .tag {
  color: var(--color-industrial-aqua);
}

.card.is-arch:hover {
  --ink: var(--color-architectural-cream);
  --line: color-mix(in srgb, var(--color-heat-marker) 55%, transparent);
  background: var(--color-iron-core);
  border-color: var(--color-heat-marker);
  color: var(--ink);
}

.card.is-arch:hover .tag {
  color: var(--color-heat-marker);
}

.card.is-physics:hover {
  --ink: var(--color-physics-paper);
  --line: color-mix(in srgb, var(--color-physics-amber) 50%, transparent);
  background: var(--color-physics-field);
  border-color: var(--color-physics-amber);
  color: var(--ink);
}

.card.is-physics:hover .tag {
  color: var(--color-physics-amber);
}

.card.is-math:hover {
  --ink: var(--color-math-board);
  --line: color-mix(in srgb, var(--color-math-board) 18%, transparent);
  background: var(--color-math-chalk);
  border-color: var(--color-math-board);
  color: var(--ink);
}

.card.is-math:hover .tag {
  color: var(--color-math-gold);
}

.card.is-space:hover {
  --ink: var(--color-space-night);
  --line: color-mix(in srgb, var(--color-space-night) 18%, transparent);
  background: var(--color-space-paper);
  border-color: var(--color-space-night);
  color: var(--ink);
}

.card.is-space:hover .tag {
  color: var(--color-space-mark);
}

.tag {
  margin: 0;
  padding: 0.85rem 1rem 0;
  color: color-mix(in srgb, var(--ink) 62%, var(--color-architectural-cream));
  font-size: 0.75rem;
  transition: color 320ms var(--ease-out);
}

h3 {
  display: grid;
  flex: 1;
  place-items: center;
  min-height: 8.5rem;
  margin: 0;
  padding: 1rem;
  color: var(--ink);
  font-size: clamp(1.35rem, 2vw, 1.8rem);
  font-weight: 800;
  letter-spacing: 0.04em;
  line-height: 1.05;
  text-align: center;
  text-transform: uppercase;
  transition: color 320ms var(--ease-out);
}

.more {
  display: grid;
  justify-items: end;
  margin-top: auto;
  padding: 0.75rem 1rem;
  border-top: 1px solid var(--line);
  color: var(--ink);
  text-align: right;
  transition:
    color 320ms var(--ease-out),
    border-color 320ms var(--ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .card,
  .tag,
  h3,
  .more {
    transition: none;
  }
}
</style>
