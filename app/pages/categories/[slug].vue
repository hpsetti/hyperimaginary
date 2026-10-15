<script setup lang="ts">
import { findCategory, projects } from '~/data/projects'

const route = useRoute()
const slug = computed(() => {
  const value = route.params.slug
  return Array.isArray(value) ? value[0] : value
})
const category = computed(() => findCategory(slug.value ?? ''))
const listed = computed(() => {
  const item = category.value
  if (!item) return []
  return projects.filter((project) => project.category === item.name)
})

if (!category.value) {
  throw createError({ statusCode: 404, statusMessage: 'Category not found', fatal: true })
}

useHead(computed(() => ({
  title: category.value ? `${category.value.name} · Hyper Imaginary` : 'Hyper Imaginary'
})))
</script>

<template>
  <article v-if="category" class="landing" :class="`is-${category.key}`">
    <SiteHeader />

    <div v-if="category.key === 'ai'" class="field">
      <div class="system">
        <svg viewBox="0 0 720 520" role="img" aria-label="A signal field linking the AI projects">
          <path class="wire" d="M360 250 L150 140" />
          <path class="wire" d="M360 250 L570 130" />
          <path class="wire" d="M360 250 L210 400" />
          <path class="wire" d="M360 250 L530 390" />
          <path class="wire" d="M150 140 L360 80" />
          <path class="wire" d="M570 130 L530 390" />
          <circle class="node" cx="150" cy="140" r="9" />
          <circle class="node dim" cx="570" cy="130" r="9" />
          <circle class="node dim" cx="210" cy="400" r="6" />
          <circle class="node dim" cx="530" cy="390" r="6" />
          <circle class="node dim" cx="360" cy="80" r="5" />
          <circle class="core" cx="360" cy="250" r="20" />
          <text class="label" x="78" y="118">Signal Bench</text>
          <text class="label" x="500" y="108">Corpus</text>
          <text class="label" x="168" y="432">Margin</text>
        </svg>
      </div>
      <footer class="caption">
        <h1>{{ category.name }}</h1>
        <div class="rule"></div>
        <div class="caption-grid">
          <ul class="key">
            <li><span>RM</span> In the room</li>
            <li><span>PG</span> The page</li>
            <li><span>NT</span> The note</li>
            <li><span>ST</span> A clear stop</li>
          </ul>
          <div>
            <p class="intro">{{ category.intro }}</p>
          </div>
        </div>
      </footer>
    </div>

    <div v-else-if="category.key === 'cloud'" class="sky">
      <div class="system">
        <svg viewBox="0 0 720 460" role="img" aria-label="Clouds drifting above a route between the cloud projects">
          <g class="puff" style="animation-duration: 22s">
            <ellipse cx="170" cy="120" rx="78" ry="30" />
            <ellipse cx="230" cy="108" rx="48" ry="24" />
            <ellipse cx="124" cy="112" rx="36" ry="20" />
            <text class="label" x="118" y="78">Harbor</text>
          </g>
          <g class="puff slow" style="animation-duration: 30s; animation-delay: -8s">
            <ellipse cx="430" cy="180" rx="90" ry="32" />
            <ellipse cx="500" cy="164" rx="52" ry="24" />
            <ellipse cx="370" cy="168" rx="40" ry="20" />
            <text class="label" x="372" y="132">Northline</text>
          </g>
          <g class="puff" style="animation-duration: 18s; animation-delay: -4s">
            <ellipse cx="250" cy="270" rx="64" ry="24" />
            <ellipse cx="304" cy="258" rx="40" ry="18" />
            <text class="label" x="196" y="228">Low Orbit</text>
          </g>
          <path class="route" d="M40 340 C 180 250, 360 400, 680 220" />
          <circle class="packet" r="7" cx="0" cy="0" />
        </svg>
      </div>
      <footer class="caption">
        <h1>{{ category.name }}</h1>
        <div class="rule"></div>
        <div class="caption-grid">
          <ul class="key">
            <li><span>RM</span> A room</li>
            <li><span>RT</span> A route</li>
            <li><span>ST</span> What stays</li>
            <li><span>ED</span> The edge</li>
          </ul>
          <div>
            <p class="intro">{{ category.intro }}</p>
          </div>
        </div>
      </footer>
    </div>

    <div v-else-if="category.key === 'arch'" class="plate">
      <div class="system">
        <svg viewBox="0 0 760 380" role="img" aria-label="A hot path running through the architecture projects">
          <path class="bus" d="M36 196 H724" />
          <path class="tick" d="M120 176 v40 M220 176 v40 M340 176 v40 M440 176 v40 M560 176 v40 M660 176 v40" />
          <rect class="stage" x="70" y="78" width="170" height="92" />
          <rect class="stage" x="295" y="78" width="170" height="92" />
          <rect class="stage" x="520" y="78" width="170" height="92" />
          <text class="label" x="92" y="132">Kiln Works</text>
          <text class="label" x="312" y="132">Copper Index</text>
          <text class="label" x="548" y="132">Fieldglass</text>
          <circle class="token" cx="36" cy="196" r="8" />
          <g class="hand">
            <circle cx="660" cy="300" r="22" />
            <line x1="660" y1="300" x2="660" y2="284" />
          </g>
        </svg>
      </div>
      <footer class="caption">
        <h1>{{ category.name }}</h1>
        <div class="rule"></div>
        <div class="caption-grid">
          <ul class="key">
            <li><span>HP</span> Hot path</li>
            <li><span>BS</span> The bus</li>
            <li><span>SG</span> A stage</li>
            <li><span>CK</span> The clock</li>
          </ul>
          <div>
            <p class="intro">{{ category.intro }}</p>
          </div>
        </div>
      </footer>
    </div>

    <div v-else-if="category.key === 'physics'" class="yard">
      <div class="system">
        <svg viewBox="0 0 720 480" role="img" aria-label="A swinging pendulum beside a weight at rest">
          <path class="arc" d="M120 300 A 150 150 0 0 1 380 300" />
          <line class="stand" x1="250" y1="48" x2="390" y2="48" />
          <g class="arm">
            <line x1="250" y1="48" x2="250" y2="286" />
            <circle cx="250" cy="300" r="22" />
          </g>
          <line class="floor" x1="430" y1="320" x2="680" y2="320" />
          <rect class="mass" x="500" y="250" width="110" height="70" />
          <path class="push" d="M430 270 H488 M470 254 l18 16 l-18 16" />
          <text class="label" x="150" y="390">Pendulum Yard</text>
          <text class="label" x="500" y="390">Still Mass</text>
        </svg>
      </div>
      <footer class="caption">
        <h1>{{ category.name }}</h1>
        <div class="rule"></div>
        <div class="caption-grid">
          <ul class="key">
            <li><span>SW</span> The swing</li>
            <li><span>DR</span> The drag</li>
            <li><span>RS</span> At rest</li>
            <li><span>PS</span> The push</li>
          </ul>
          <div>
            <p class="intro">{{ category.intro }}</p>
          </div>
        </div>
      </footer>
    </div>

    <div v-else-if="category.key === 'math'" class="slate">
      <div class="system">
        <svg viewBox="0 0 720 520" role="img" aria-label="A unit circle with a radius that turns">
          <line class="axis" x1="80" y1="250" x2="640" y2="250" />
          <line class="axis" x1="360" y1="70" x2="360" y2="430" />
          <circle class="unit" cx="360" cy="250" r="150" />
          <g class="radius">
            <line x1="360" y1="250" x2="510" y2="250" />
            <circle cx="510" cy="250" r="6" />
          </g>
          <text class="label" x="80" y="470">Common Measure</text>
          <text class="label" x="430" y="470">Open Proof</text>
        </svg>
      </div>
      <footer class="caption">
        <h1>{{ category.name }}</h1>
        <div class="rule"></div>
        <div class="caption-grid">
          <ul class="key">
            <li><span>LN</span> A length</li>
            <li><span>RM</span> Remainder</li>
            <li><span>GV</span> The given</li>
            <li><span>ST</span> A step</li>
          </ul>
          <div>
            <p class="intro">{{ category.intro }}</p>
          </div>
        </div>
      </footer>
    </div>

    <div v-else class="space">
      <div class="system">
        <svg viewBox="0 0 720 720" role="img" aria-label="Orbits around a sun, with the space projects marked on the rings">
          <defs>
            <path id="arc-apogee" d="M 248 360 A 112 112 0 0 1 472 360" />
            <path id="arc-far" d="M 210 360 A 150 150 0 0 1 510 360" />
            <path id="arc-quiet" d="M 170 360 A 190 190 0 0 1 550 360" />
            <path id="arc-pass" d="M 128 360 A 232 232 0 0 1 592 360" />
            <path id="arc-return" d="M 86 360 A 274 274 0 0 1 634 360" />
          </defs>

          <circle class="ring faint" cx="360" cy="360" r="78" />
          <circle class="ring" cx="360" cy="360" r="112" />
          <circle class="ring dotted" cx="360" cy="360" r="150" />
          <circle class="ring" cx="360" cy="360" r="190" />
          <circle class="ring dotted" cx="360" cy="360" r="232" />
          <circle class="ring faint" cx="360" cy="360" r="274" />
          <path class="ring faint" d="M 120 250 A 300 300 0 0 1 600 230" />

          <text class="label gold"><textPath href="#arc-apogee" startOffset="58%">Apogee</textPath></text>
          <text class="label"><textPath href="#arc-far" startOffset="8%">The far point</textPath></text>
          <text class="label gold"><textPath href="#arc-quiet" startOffset="62%">Quiet Sky</textPath></text>
          <text class="label"><textPath href="#arc-pass" startOffset="6%">The pass</textPath></text>
          <text class="label"><textPath href="#arc-return" startOffset="64%">The return</textPath></text>

          <g class="spin" style="animation-duration: 16s">
            <circle cx="438" cy="360" r="5" fill="#e6c15a" />
          </g>
          <g class="spin" style="animation-duration: 24s; animation-delay: -8s">
            <circle cx="472" cy="360" r="4.5" fill="#f3921a" />
          </g>
          <g class="spin" style="animation-duration: 34s; animation-delay: -14s">
            <circle cx="510" cy="360" r="5.5" fill="#3ec6b6" />
          </g>
          <g class="spin belt" style="animation-duration: 48s; animation-delay: -6s">
            <circle cx="528" cy="360" r="2.2" />
            <circle cx="489" cy="468" r="1.8" />
            <circle cx="389" cy="526" r="2" />
            <circle cx="276" cy="506" r="1.6" />
            <circle cx="202" cy="418" r="2.1" />
            <circle cx="202" cy="302" r="1.7" />
            <circle cx="276" cy="214" r="2" />
            <circle cx="389" cy="194" r="1.6" />
            <circle cx="489" cy="252" r="1.9" />
          </g>
          <g class="spin" style="animation-duration: 42s; animation-delay: -20s">
            <circle cx="550" cy="360" r="7" fill="#6aa7d8" />
          </g>
          <g class="spin" style="animation-duration: 58s; animation-delay: -11s">
            <circle cx="592" cy="360" r="5" fill="#c4a6ff" />
          </g>
          <g class="spin" style="animation-duration: 76s; animation-delay: -30s">
            <circle cx="634" cy="360" r="4" fill="#7ddec4" />
          </g>
          <g class="spin outer" style="animation-duration: 96s; animation-delay: -18s">
            <circle cx="668" cy="330" r="2.4" />
            <circle cx="640" cy="250" r="2" />
            <circle cx="560" cy="180" r="1.8" />
            <circle cx="160" cy="190" r="2.2" />
            <circle cx="90" cy="280" r="1.7" />
          </g>

          <circle class="sun" cx="360" cy="360" r="26" />
        </svg>
      </div>

      <footer class="caption">
        <h1>{{ category.name }}</h1>
        <div class="rule"></div>
        <div class="caption-grid">
          <ul class="key">
            <li><span>FP</span> Far point</li>
            <li><span>TN</span> The turn</li>
            <li><span>RT</span> Return</li>
            <li><span>PS</span> The pass</li>
            <li><span>TR</span> The track</li>
          </ul>
          <div>
            <p class="intro">{{ category.intro }}</p>
          </div>
        </div>
      </footer>
    </div>

    <section v-if="listed.length" class="listed" aria-label="Projects">
      <ProjectCard v-for="project in listed" :key="project.slug" :project="project" />
    </section>

    <SiteFootBar />
  </article>
</template>

<style scoped>
.landing {
  --ink: var(--color-iron-core);
  --line: color-mix(in srgb, var(--color-iron-core) 18%, transparent);
  min-height: 100vh;
  overflow-x: clip;
  background: color-mix(in srgb, var(--color-iron-core) 8%, var(--color-architectural-cream));
  color: var(--ink);
  color-scheme: light;
}

.landing.is-ai {
  --ink: var(--color-ai-paper);
  --line: color-mix(in srgb, var(--color-ai-lilac) 40%, transparent);
  --mark: var(--color-ai-mint);
  background: var(--color-ai-field);
  color: var(--ink);
  color-scheme: dark;
}

.landing.is-cloud {
  --mark: color-mix(in srgb, var(--color-industrial-aqua) 28%, var(--color-iron-core));
  background: color-mix(in srgb, var(--color-industrial-aqua) 14%, var(--color-architectural-cream));
}

.landing.is-arch {
  --mark: var(--color-rust-signal);
}

.landing.is-math {
  --ink: var(--color-math-chalk);
  --line: rgb(243 239 226 / 35%);
  --mark: var(--color-math-gold);
  background: var(--color-math-board);
  color: var(--ink);
  color-scheme: dark;
}

.landing.is-physics {
  --ink: var(--color-physics-field);
  --line: color-mix(in srgb, var(--color-physics-sky) 40%, transparent);
  --mark: var(--color-physics-amber);
  background: var(--color-physics-paper);
  color: var(--ink);
}

.landing.is-space {
  --ink: #f3efe6;
  --line: rgb(243 239 230 / 45%);
  --mark: #e3b15a;
  background: #2c2f33;
  color: var(--ink);
  color-scheme: dark;
}

.intro {
  max-width: 42rem;
  margin: 0 0 1.75rem;
  font-size: 1.05rem;
  line-height: 1.5;
}

ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

li + li {
  margin-top: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

.wire,
.route,
.bus,
.tick,
.stage,
.stand,
.floor,
.arc,
.arm,
.mass,
.push,
.hand {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
}

.wire {
  stroke: var(--color-ai-lilac);
  stroke-dasharray: 7 12;
  animation: dash 2.2s linear infinite;
}

.node {
  fill: var(--color-ai-mint);
  stroke: none;
}

.node.dim {
  fill: var(--color-ai-lilac);
}

.core {
  fill: var(--color-ai-mint);
  stroke: none;
  transform-box: fill-box;
  transform-origin: center;
  animation: pulse 2.6s ease-in-out infinite;
}

.field .label {
  fill: var(--color-ai-paper);
}

.field .caption h1 {
  letter-spacing: 0.16em;
}

.puff {
  fill: color-mix(in srgb, var(--color-industrial-aqua) 72%, white);
  stroke: none;
  animation: drift ease-in-out infinite alternate;
}

.puff.slow {
  fill: color-mix(in srgb, var(--color-industrial-aqua) 46%, var(--color-architectural-cream));
}

.sky .label {
  fill: var(--color-iron-core);
  font-size: 14px;
}

.route {
  stroke: color-mix(in srgb, var(--color-industrial-aqua) 40%, var(--color-iron-core));
  stroke-dasharray: 2 8;
  stroke-linecap: round;
}

.packet {
  fill: var(--color-iron-core);
  offset-path: path('M 40 340 C 180 250, 360 400, 680 220');
  offset-rotate: 0deg;
  animation: glide 11s linear infinite;
}

.stage {
  stroke: var(--color-iron-core);
}

.bus,
.tick {
  stroke: color-mix(in srgb, var(--color-iron-core) 55%, var(--color-architectural-cream));
}

.plate .label {
  fill: var(--color-iron-core);
  font-size: 15px;
}

.token {
  fill: var(--color-heat-marker);
  stroke: none;
  animation: run 6.5s linear infinite;
}

.hand {
  stroke: var(--color-rust-signal);
  transform-box: view-box;
  transform-origin: 660px 300px;
  animation: orbit 8s linear infinite;
}

.yard .label {
  fill: var(--color-physics-field);
  font-size: 15px;
}

.arc,
.stand,
.floor,
.arm,
.mass {
  stroke: var(--color-physics-field);
}

.arc {
  stroke-dasharray: 2 7;
  stroke-linecap: round;
}

.arm circle {
  fill: var(--color-physics-amber);
  stroke: var(--color-physics-field);
}

.mass {
  fill: color-mix(in srgb, var(--color-physics-sky) 18%, var(--color-physics-paper));
}

.arm {
  transform-box: view-box;
  transform-origin: 250px 48px;
  animation: swing 2.8s ease-in-out infinite alternate;
}

.axis,
.unit {
  fill: none;
  stroke: rgb(243 239 226 / 55%);
  stroke-width: 1.4;
}

.radius {
  fill: none;
  stroke: var(--color-math-gold);
  stroke-width: 2;
  transform-box: view-box;
  transform-origin: 360px 250px;
  animation: orbit 16s linear infinite;
}

.radius circle {
  fill: var(--color-math-green);
  stroke: none;
}

.slate .label {
  fill: var(--color-math-chalk);
  font-size: 15px;
}

.push {
  stroke: var(--color-physics-amber);
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: pulse 1.8s ease-in-out infinite;
}

@keyframes dash {
  to { stroke-dashoffset: -76; }
}

@keyframes pulse {
  50% { opacity: 0.45; }
}

@keyframes drift {
  from { transform: translateX(-22px); }
  to { transform: translateX(34px); }
}

@keyframes glide {
  to { offset-distance: 100%; }
}

@keyframes run {
  from { transform: translateX(0); }
  to { transform: translateX(688px); }
}

@keyframes swing {
  from { transform: rotate(-24deg); }
  to { transform: rotate(24deg); }
}

.system {
  display: grid;
  place-items: center;
  padding: 0.25rem 1rem 0;
}

.system svg {
  width: min(100%, 46rem);
  height: auto;
}

.ring {
  fill: none;
  stroke: rgb(243 239 230 / 42%);
  stroke-width: 1.1;
}

.ring.dotted {
  stroke-dasharray: 1.4 6;
  stroke-linecap: round;
}

.ring.faint {
  stroke: rgb(243 239 230 / 24%);
}

.sun {
  fill: #f3921a;
}

.spin {
  transform-box: view-box;
  transform-origin: 360px 360px;
  animation: orbit linear infinite;
}

.belt {
  fill: rgb(243 239 230 / 70%);
}

.outer {
  fill: rgb(243 239 230 / 55%);
}

.label {
  fill: #f3efe6;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.label.gold {
  fill: #e3b15a;
}

@keyframes orbit {
  to {
    transform: rotate(360deg);
  }
}

.caption {
  padding: 0 1.5rem 2.25rem;
}

.caption h1 {
  max-width: none;
  margin: 0 0 0.85rem;
  color: var(--ink);
  font-size: clamp(0.95rem, 2.4vw, 1.35rem);
  font-weight: 600;
  letter-spacing: 0.28em;
  line-height: 1.15;
  text-align: center;
  text-transform: uppercase;
}

.caption .rule {
  height: 1px;
  margin: 0 auto 1.15rem;
  background: var(--line);
}

.caption-grid {
  display: grid;
  grid-template-columns: minmax(9rem, 0.55fr) minmax(0, 1.45fr);
  gap: 1.25rem 2.5rem;
  max-width: 52rem;
  margin: 0 auto;
}

.key {
  display: grid;
  gap: 0.4rem;
  align-content: start;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.key span {
  display: inline-block;
  min-width: 1.8rem;
  color: var(--mark, var(--ink));
}

.caption .intro {
  margin: 0 0 1rem;
  font-size: 0.95rem;
}

.works {
  display: grid;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.works a {
  display: block;
  color: inherit;
  text-decoration: none;
}

.works a:hover {
  color: inherit;
}

.works strong {
  display: block;
  margin: 0 0 0.15rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.works a:hover strong {
  color: var(--mark, var(--ink));
}

@media (prefers-reduced-motion: reduce) {
  .spin,
  .wire,
  .core,
  .puff,
  .packet,
  .token,
  .hand,
  .arm,
  .push,
  .radius {
    animation: none;
  }
}

.listed {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 0.85rem;
  padding: 0 1.5rem 2rem;
}

@media (max-width: 860px) {
  .caption-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .caption h1 {
    letter-spacing: 0.12em;
  }
}
</style>
