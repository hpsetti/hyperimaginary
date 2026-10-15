<script setup lang="ts">
import { categoryKey, categorySlug, findProject } from '~/data/projects'

const route = useRoute()
const slug = computed(() => {
  const value = route.params.slug
  return Array.isArray(value) ? value[0] : value
})
const project = computed(() => findProject(slug.value ?? ''))
const kind = computed(() => project.value ? categoryKey(project.value.category) : 'arch')
const designation = computed(() => {
  const letters = (project.value?.name ?? 'SP').replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase()
  return `${letters}-01`
})
const profileRows = computed(() => {
  const item = project.value
  if (!item) return []
  return [
    { label: 'Code', value: designation.value },
    { label: 'Name', value: item.name },
    { label: 'Field', value: item.category },
    { label: 'Year', value: item.year },
    ...item.services.map((service, index) => ({
      label: service.title,
      value: item.points[index] ?? service.body
    })),
    { label: 'Funds', value: item.funds },
    { label: 'Growth', value: item.growth },
    { label: 'Yield', value: item.roi },
    { label: 'Partners', value: item.partners }
  ]
})

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
}

useHead(computed(() => ({
  title: project.value ? `${project.value.name} · Hyper Imaginary` : 'Hyper Imaginary'
})))
</script>

<template>
  <article v-if="project" class="project" :class="`is-${kind}`">
    <SiteHeader />

    <div v-if="kind !== 'space'" class="intro">
      <p class="crumb">
        <NuxtLink to="/">Home</NuxtLink>
        <span aria-hidden="true">›</span>
        <NuxtLink to="/#work">Portfolio</NuxtLink>
        <span aria-hidden="true">›</span>
        <NuxtLink :to="`/categories/${categorySlug(project.category)}`">{{ project.category }}</NuxtLink>
        <span aria-hidden="true">›</span>
        <span>{{ project.name }}</span>
      </p>

      <p class="kicker">{{ project.category }}</p>
      <h1>{{ project.name }}</h1>
      <p class="lede">{{ project.lede }}</p>

      <div v-if="kind === 'ai'" class="log">
        <section v-for="(service, index) in project.services" :key="service.title">
          <span class="idx">{{ String(index + 1).padStart(2, '0') }}</span>
          <div>
            <h2>{{ service.title }}</h2>
            <p>{{ service.body }}</p>
          </div>
        </section>
      </div>

      <div v-else-if="kind === 'cloud'" class="layers">
        <section v-for="service in project.services" :key="service.title">
          <h2>{{ service.title }}</h2>
          <p>{{ service.body }}</p>
        </section>
      </div>

      <div v-else-if="kind === 'physics'" class="bench">
        <section v-for="(service, index) in project.services" :key="service.title">
          <span class="idx">{{ String(index + 1).padStart(2, '0') }}</span>
          <div>
            <h2>{{ service.title }}</h2>
            <p>{{ service.body }}</p>
          </div>
        </section>
      </div>

      <div v-else-if="kind === 'math'" class="proof">
        <section v-for="(service, index) in project.services" :key="service.title">
          <span class="idx">{{ String(index + 1).padStart(2, '0') }}</span>
          <div>
            <h2>{{ service.title }}</h2>
            <p>{{ service.body }}</p>
          </div>
        </section>
      </div>

      <div v-else class="services">
        <section v-for="service in project.services" :key="service.title">
          <h2><span class="dot" aria-hidden="true"></span>{{ service.title }}</h2>
          <p>{{ service.body }}</p>
        </section>
      </div>
    </div>

    <section v-if="kind === 'ai'" class="band" :aria-label="`${project.name} notes`">
      <div class="frame">
        <ProjectDrawing kind="ai" />
      </div>
      <div class="notes">
        <ol>
          <li v-for="(point, index) in project.points" :key="point">
            <span class="num">{{ String(index + 1).padStart(2, '0') }}</span>
            <span>{{ point }}</span>
          </li>
        </ol>
        <p class="tagline">{{ project.tagline }}</p>
        <p class="statement">{{ project.statement }}</p>
        <footer>
          <span>Hyper Imaginary</span>
          <span>{{ project.year }}</span>
        </footer>
      </div>
    </section>

    <section v-else-if="kind === 'cloud'" class="stack" :aria-label="`${project.name} notes`">
      <div class="frame">
        <ProjectDrawing kind="cloud" />
      </div>
      <div class="notes">
        <ul class="pills">
          <li v-for="point in project.points" :key="point">{{ point }}</li>
        </ul>
        <p class="tagline">{{ project.tagline }}</p>
        <p class="statement">{{ project.statement }}</p>
        <footer>
          <span>Hyper Imaginary</span>
          <span>{{ project.year }}</span>
        </footer>
      </div>
    </section>

    <section v-else-if="kind === 'physics'" class="lab" :aria-label="`${project.name} notes`">
      <div class="frame">
        <ProjectDrawing kind="physics" />
      </div>
      <div class="notes">
        <ol>
          <li v-for="(point, index) in project.points" :key="point">
            <span class="num">{{ String(index + 1).padStart(2, '0') }}</span>
            <span>{{ point }}</span>
          </li>
        </ol>
        <p class="tagline">{{ project.tagline }}</p>
        <p class="statement">{{ project.statement }}</p>
        <footer>
          <span>Hyper Imaginary</span>
          <span>{{ project.year }}</span>
        </footer>
      </div>
    </section>

    <section v-else-if="kind === 'math'" class="board" :aria-label="`${project.name} notes`">
      <div class="frame">
        <ProjectDrawing kind="math" />
      </div>
      <div class="notes">
        <ol>
          <li v-for="(point, index) in project.points" :key="point">
            <span class="num">{{ String(index + 1).padStart(2, '0') }}</span>
            <span>{{ point }}</span>
          </li>
        </ol>
        <p class="tagline">{{ project.tagline }}</p>
        <p class="statement">{{ project.statement }}</p>
        <footer>
          <span>Hyper Imaginary</span>
          <span>{{ project.year }}</span>
        </footer>
      </div>
    </section>

    <div v-else-if="kind === 'space' && project" class="spec">
      <div class="code-clip">
        <p class="code">{{ designation }}</p>
      </div>

      <header class="mast">
        <h1>{{ project.name }}</h1>
        <span class="badge" aria-hidden="true">R</span>
      </header>

      <p class="ribbon"><NuxtLink :to="`/categories/${categorySlug(project.category)}`">{{ project.category }}</NuxtLink> ///// {{ project.tagline }}</p>

      <div class="brief">
        <h2>{{ project.services[0].title }}</h2>
        <p>{{ project.lede }}</p>
      </div>

      <div class="profile">
        <ProjectDrawing kind="space" />
        <div>
          <h2>Capability Profile</h2>
          <ol>
            <li v-for="(row, index) in profileRows" :key="row.label">
              <span>{{ String(index + 1).padStart(2, '0') }}</span>
              <span>{{ row.label }}</span>
              <span>{{ row.value }}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>

    <section v-else class="sheet" :aria-label="`${project.name} notes`">
      <div class="frame">
        <ProjectDrawing kind="arch" />
      </div>
      <div class="notes">
        <ol>
          <li v-for="(point, index) in project.points" :key="point">
            <span class="num">{{ String(index + 1).padStart(2, '0') }}</span>
            <span>{{ point }}</span>
          </li>
          <li class="blank" aria-hidden="true"></li>
          <li class="blank" aria-hidden="true"></li>
        </ol>
        <p class="tagline">{{ project.tagline }}</p>
        <p class="statement">{{ project.statement }}</p>
        <footer>
          <span>Hyper Imaginary</span>
          <span>{{ project.year }}</span>
        </footer>
      </div>
    </section>

    <SiteFootBar />
  </article>
</template>

<style scoped>
.project {
  --ink: var(--color-iron-core);
  --line: color-mix(in srgb, var(--color-iron-core) 18%, transparent);
  --rule: color-mix(in srgb, var(--color-iron-core) 42%, transparent);
  --draw: var(--color-iron-core);
  min-height: 100vh;
  overflow-x: clip;
  background: color-mix(in srgb, var(--color-iron-core) 8%, var(--color-architectural-cream));
  color: var(--ink);
  color-scheme: light;
}

.project.is-ai {
  --ink: var(--color-ai-paper);
  --line: color-mix(in srgb, var(--color-ai-paper) 22%, transparent);
  --rule: color-mix(in srgb, var(--color-ai-lilac) 55%, transparent);
  --draw: var(--color-ai-mint);
  background: var(--color-ai-field);
  color: var(--ink);
  color-scheme: dark;
}

.project.is-cloud {
  --rule: color-mix(in srgb, var(--color-iron-core) 28%, transparent);
  --draw: var(--color-iron-core);
  background: color-mix(in srgb, var(--color-industrial-aqua) 10%, var(--color-architectural-cream));
}

.project.is-physics {
  --ink: var(--color-physics-field);
  --line: color-mix(in srgb, var(--color-physics-sky) 35%, transparent);
  --rule: color-mix(in srgb, var(--color-physics-amber) 55%, transparent);
  --draw: var(--color-physics-amber);
  background: var(--color-physics-paper);
  color: var(--ink);
}

.project.is-math {
  --ink: var(--color-math-chalk);
  --line: color-mix(in srgb, var(--color-math-chalk) 28%, transparent);
  --rule: color-mix(in srgb, var(--color-math-gold) 55%, transparent);
  --draw: var(--color-math-gold);
  background: var(--color-math-board);
  color: var(--ink);
  color-scheme: dark;
}

.project.is-space {
  --ink: var(--color-space-paper);
  --line: color-mix(in srgb, var(--color-space-paper) 22%, transparent);
  --rule: color-mix(in srgb, var(--color-space-paper) 32%, transparent);
  --draw: var(--color-space-paper);
  background: var(--color-space-night);
  color: var(--ink);
  color-scheme: dark;
}

.intro {
  padding: 1.5rem 1.5rem 2.5rem;
}

.crumb,
.kicker {
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.crumb {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0 0 1.5rem;
  color: var(--color-rust-signal);
  font-size: 0.78rem;
}

.crumb a {
  color: inherit;
  text-decoration: none;
}

.kicker {
  margin: 0 0 0.7rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
}

.is-ai .crumb,
.is-ai .kicker,
.is-ai .crumb a {
  color: var(--color-ai-lilac);
}

.is-cloud .crumb,
.is-cloud .kicker {
  color: color-mix(in srgb, var(--color-industrial-aqua) 25%, var(--color-iron-core));
}

.is-arch .kicker {
  color: var(--color-rust-signal);
}

.is-physics .crumb,
.is-physics .kicker,
.is-physics .crumb a {
  color: var(--color-physics-amber);
}

.is-space .crumb,
.is-space .kicker,
.is-space .crumb a {
  color: var(--color-space-comet);
}

.crumb a:hover {
  color: var(--color-heat-marker);
}

.is-ai .crumb a:hover {
  color: var(--color-ai-mint);
}

.is-physics .crumb a:hover {
  color: var(--color-physics-field);
}

.is-math .crumb,
.is-math .kicker,
.is-math .crumb a {
  color: var(--color-math-gold);
}

.is-math .crumb a:hover {
  color: var(--color-math-chalk);
}

.is-space .crumb a:hover {
  color: var(--color-space-paper);
}

h1 {
  max-width: 16ch;
  margin: 0 0 1.25rem;
  color: var(--ink);
  font-size: clamp(2.4rem, 6vw, 4.2rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 0.92;
  text-transform: uppercase;
  overflow-wrap: break-word;
}

.is-cloud h1 {
  letter-spacing: -0.03em;
  line-height: 0.98;
  text-transform: none;
}

.lede {
  max-width: 40rem;
  margin: 0 0 2.5rem;
  font-size: 1.05rem;
  line-height: 1.5;
  overflow-wrap: break-word;
}

.log section,
.layers section,
.services section {
  min-width: 0;
}

.log {
  display: grid;
  border-top: 1px solid var(--rule);
}

.log section {
  display: grid;
  grid-template-columns: 3.2rem minmax(0, 1fr);
  gap: 1rem;
  padding: 1.1rem 0;
  border-bottom: 1px solid var(--rule);
}

.idx,
.num {
  color: var(--color-ai-mint);
  font-family: var(--font-mono);
  font-weight: 700;
}

h2 {
  margin: 0 0 0.35rem;
  color: var(--ink);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.3;
  text-transform: none;
}

.log p,
.layers p,
.services p {
  margin: 0;
  max-width: 42rem;
  font-size: 0.95rem;
  line-height: 1.45;
}

.layers {
  display: grid;
  gap: 0.8rem;
}

.layers section {
  max-width: 40rem;
  padding: 1.1rem 1.25rem;
  border: 1px solid color-mix(in srgb, var(--color-industrial-aqua) 45%, transparent);
  border-radius: 1.1rem;
  background: color-mix(in srgb, var(--color-industrial-aqua) 18%, var(--color-architectural-cream));
}

.layers section:nth-child(2) {
  margin-left: 1.75rem;
}

.layers section:nth-child(3) {
  margin-left: 3.5rem;
}

.services {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem 2.5rem;
}

.services h2 {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.7rem;
}

.dot {
  flex: 0 0 auto;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background: var(--color-heat-marker);
}

.services p {
  max-width: 28ch;
}

.band,
.stack,
.sheet {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 1.5rem;
  min-width: 0;
}

.band {
  border-top: 1px solid var(--color-ai-lilac);
  background: color-mix(in srgb, var(--color-ai-field) 78%, var(--color-ai-lilac));
}

.stack,
.sheet {
  margin: 0 1rem 1rem;
  padding: 1.25rem;
}

.stack {
  border-radius: 1.75rem;
  background: var(--color-industrial-aqua);
  color: var(--color-iron-core);
}

.sheet {
  border-radius: 1.25rem;
  background: var(--color-heat-marker);
  color: var(--ink);
}

.bench section,
.proof section {
  display: grid;
  grid-template-columns: 3.2rem minmax(0, 1fr);
  gap: 1rem;
  max-width: 40rem;
  padding: 0.9rem 0;
  border-bottom: 1px solid color-mix(in srgb, var(--color-physics-sky) 45%, transparent);
}

.proof section {
  border-bottom-color: var(--line);
}

.lab {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 1.5rem;
  min-width: 0;
  margin: 0 1rem 1rem;
  padding: 1.25rem;
}

.lab {
  border-radius: 0.4rem;
  background: var(--color-physics-field);
  color: var(--color-physics-paper);
}

.lab .notes,
.board .notes {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.board {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: 1.5rem;
  min-width: 0;
  margin: 0 1.5rem 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--line);
}

.lab li,
.board li {
  display: grid;
  grid-template-columns: 4.5rem minmax(0, 1fr);
  align-items: center;
  min-height: 3.1rem;
  padding: 0 1rem;
  border-bottom: 1px solid var(--rule);
}

.frame,
.sheet .notes,
.band .notes {
  min-width: 0;
}

.sheet .frame,
.sheet .notes {
  border: 1px solid var(--rule);
}

.frame {
  display: grid;
  place-items: center;
  min-height: 16rem;
  padding: 1.5rem;
  color: var(--draw);
}

.band .notes,
.stack .notes,
.sheet .notes {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

ol,
.pills {
  margin: 0;
  padding: 0;
  list-style: none;
}

.band li,
.sheet li {
  display: grid;
  grid-template-columns: 4.5rem minmax(0, 1fr);
  align-items: center;
  min-height: 3.1rem;
  padding: 0 1rem;
  border-bottom: 1px solid var(--rule);
}

.sheet li {
  font-style: italic;
}

.blank {
  min-height: 3.4rem;
}

.sheet .num {
  color: inherit;
  font-family: inherit;
  font-style: normal;
}

.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.pills li {
  padding: 0.45rem 0.8rem;
  border: 1px solid var(--color-iron-core);
  border-radius: 999px;
  background: color-mix(in srgb, var(--color-architectural-cream) 28%, transparent);
}

.tagline,
.statement,
footer {
  margin: 0;
  overflow-wrap: break-word;
}

.tagline {
  padding: 1rem 1rem 0.4rem;
  font-size: 0.95rem;
}

.sheet .tagline {
  border-top: 1px solid var(--rule);
}

.statement {
  padding: 0.2rem 1rem 1.25rem;
  font-size: clamp(1.45rem, 2.5vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.05;
  text-transform: uppercase;
}

.is-ai .statement {
  color: var(--color-ai-mint);
}

.is-physics .idx,
.is-physics .num,
.is-physics .statement {
  color: var(--color-physics-amber);
}

.is-math .idx,
.is-math .num,
.is-math .statement {
  color: var(--color-math-gold);
}

.is-space .idx,
.is-space .num,
.is-space .statement {
  color: var(--color-space-comet);
}

.is-cloud .statement {
  padding-left: 0;
  text-transform: none;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.is-cloud .tagline {
  padding-left: 0;
}

footer {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  margin-top: auto;
  border-top: 1px solid var(--rule);
  font-size: 0.92rem;
}

.is-cloud footer {
  border-top-color: color-mix(in srgb, var(--color-iron-core) 35%, transparent);
}

footer span {
  padding: 0.8rem 1rem;
}

.is-cloud footer span {
  padding-left: 0;
}

footer span + span {
  border-left: 1px solid var(--rule);
  padding-right: 0;
}

.code-clip {
  overflow: hidden;
  height: clamp(2.6rem, 7vw, 4.4rem);
  margin: 0.4rem 1.25rem 0;
}

.code {
  margin: 0;
  color: var(--color-space-mark);
  font-size: clamp(7rem, 18vw, 12rem);
  font-weight: 800;
  letter-spacing: -0.055em;
  line-height: 0.8;
  text-transform: uppercase;
  transform: translateY(-58%);
}

.mast {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.5rem 1.5rem 1.1rem;
}

.spec h1,
.spec h2 {
  color: var(--color-space-paper);
  font-weight: 600;
  letter-spacing: -0.045em;
  text-transform: none;
}

.spec h1 {
  max-width: 10ch;
  margin: 0;
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  line-height: 0.92;
}

.badge {
  display: grid;
  flex: none;
  place-items: center;
  width: clamp(4rem, 8vw, 5.2rem);
  height: clamp(4rem, 8vw, 5.2rem);
  border: 3px solid var(--color-space-paper);
  border-radius: 50%;
  color: var(--color-space-paper);
  font-size: clamp(1.7rem, 3vw, 2.3rem);
  font-weight: 700;
  line-height: 1;
}

.ribbon a {
  color: inherit;
  text-decoration: none;
}

.ribbon a:hover {
  color: var(--color-space-paper);
}

.ribbon {
  margin: 0 1.5rem;
  padding: 0.75rem 0;
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.brief {
  display: grid;
  grid-template-columns: minmax(8rem, 0.7fr) minmax(0, 1.35fr);
  margin: 0 1.5rem;
  border-bottom: 1px solid var(--rule);
}

.brief h2 {
  margin: 0;
  padding: 1.35rem 1.25rem 1.35rem 0;
  border-right: 1px solid var(--rule);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1;
}

.brief p {
  margin: 0;
  padding: 1.35rem 0 1.35rem 1.4rem;
  font-size: 1.05rem;
  line-height: 1.45;
}

.profile {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: 1.25rem;
  align-items: center;
  padding: 1.4rem 1.5rem 1.5rem;
}

.profile :deep(.drawing) {
  width: 100%;
  max-width: 34rem;
  color: var(--color-space-paper);
}

.profile h2 {
  margin: 0 0 0.35rem;
  font-size: clamp(2rem, 4vw, 2.7rem);
  line-height: 1;
}

.spec li + li {
  margin-top: 0;
}

.spec li {
  display: grid;
  grid-template-columns: 2.2rem minmax(5.5rem, 0.85fr) minmax(0, 1.15fr);
  gap: 0.6rem;
  align-items: baseline;
  min-height: 0;
  padding: 0.48rem 0;
  border-bottom: 1px solid var(--rule);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.spec li span:last-child {
  text-align: right;
}

@media (max-width: 860px) {
  .layers section:nth-child(2),
  .layers section:nth-child(3) {
    margin-left: 0;
  }

  .services,
  .band,
  .stack,
  .sheet,
  .lab,
  .board,
  .spec .brief,
  .spec .profile {
    grid-template-columns: minmax(0, 1fr);
  }

  .spec .brief h2 {
    padding-right: 0;
    border-right: 0;
    border-bottom: 1px solid var(--rule);
  }

  .spec .brief p {
    padding-left: 0;
  }

  .frame {
    min-height: 12rem;
  }
}
</style>
