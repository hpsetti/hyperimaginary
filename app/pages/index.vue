<script setup lang="ts">
import { categoryLandings, projects } from '~/data/projects'

const total = String(projects.length).padStart(2, '0')
const sections = categoryLandings.map((item) => {
  const works = projects.filter((project) => project.category === item.name)
  return { ...item, works, count: works.length }
})
</script>

<template>
  <div class="home">
    <SiteHeader />

    <section class="hero">
      <h1 class="display">Portfolio</h1>
      <aside class="rail">
        <p class="intro"><span class="dot" aria-hidden="true"></span> Recent work from <a href="https://github.com/hpsetti" target="_blank" rel="noopener noreferrer">hpsetti</a></p>
        <div>
          <p class="count-label">Projects</p>
          <p class="count">{{ total }}</p>
        </div>
      </aside>
    </section>

    <section id="work" class="poster" aria-label="Categories">
      <span class="cross tl" aria-hidden="true"></span>
      <span class="cross tr" aria-hidden="true"></span>
      <span class="cross bl" aria-hidden="true"></span>
      <span class="cross br" aria-hidden="true"></span>

      <p class="spine">Hyper Imaginary</p>

      <div class="strips">
        <NuxtLink
          v-for="section in sections"
          :key="section.slug"
          class="strip"
          :class="`is-${section.key}`"
          :to="`/categories/${section.slug}`"
        >
          <header>
            <p class="name">{{ section.name }}</p>
            <p class="log">{{ section.kicker }}</p>
          </header>

          <svg v-if="section.key === 'ai'" class="chart" viewBox="0 0 120 120" aria-hidden="true">
            <path d="M60 62 L24 30 M60 62 L98 34 M60 62 L30 98 M60 62 L96 88" />
            <circle class="node" cx="24" cy="30" r="4" />
            <circle class="node" cx="98" cy="34" r="4" />
            <circle class="node" cx="30" cy="98" r="3.5" />
            <circle class="node" cx="96" cy="88" r="3.5" />
            <circle class="mark pulse" cx="60" cy="62" r="7" />
          </svg>
          <svg v-else-if="section.key === 'cloud'" class="chart" viewBox="0 0 120 120" aria-hidden="true">
            <g class="drift">
              <ellipse class="puff" cx="40" cy="40" rx="22" ry="10" />
              <ellipse class="puff" cx="62" cy="34" rx="14" ry="8" />
            </g>
            <g class="drift slow">
              <ellipse class="puff" cx="72" cy="68" rx="24" ry="10" />
              <ellipse class="puff" cx="94" cy="62" rx="12" ry="7" />
            </g>
            <path class="route" d="M10 98 C 36 78, 72 112, 112 84" />
            <circle class="mark packet" cx="0" cy="0" r="3.5" />
          </svg>
          <svg v-else-if="section.key === 'arch'" class="chart" viewBox="0 0 120 120" aria-hidden="true">
            <rect x="14" y="28" width="28" height="20" />
            <rect x="46" y="28" width="28" height="20" />
            <rect x="78" y="28" width="28" height="20" />
            <path d="M8 74 H112" />
            <path d="M28 64 v20 M60 64 v20 M92 64 v20" />
            <circle class="mark token" cx="16" cy="74" r="4" />
          </svg>
          <svg v-else-if="section.key === 'physics'" class="chart" viewBox="0 0 120 120" aria-hidden="true">
            <path d="M28 24 H86" />
            <path class="arc" d="M22 86 A 34 34 0 0 1 90 86" />
            <g class="arm">
              <path d="M46 24 V78" />
              <circle class="mark" cx="46" cy="86" r="8" />
            </g>
          </svg>
          <svg v-else-if="section.key === 'math'" class="chart" viewBox="0 0 120 120" aria-hidden="true">
            <circle cx="60" cy="60" r="36" />
            <path d="M16 60 H104 M60 16 V104" />
            <g class="radius">
              <path d="M60 60 L90 42" />
              <circle class="mark" cx="90" cy="42" r="4" />
            </g>
          </svg>
          <svg v-else class="chart" viewBox="0 0 120 120" aria-hidden="true">
            <circle cx="60" cy="60" r="18" />
            <circle cx="60" cy="60" r="32" />
            <circle class="orbit" cx="60" cy="60" r="46" />
            <circle class="sun" cx="60" cy="60" r="8" />
            <g class="planet">
              <circle class="mark" cx="106" cy="60" r="3.5" />
            </g>
          </svg>

          <p class="tally">{{ String(section.count).padStart(2, '0') }} works</p>

          <ul class="index">
            <li v-for="project in section.works" :key="project.slug">{{ project.name }}</li>
          </ul>

          <p class="word">{{ section.name }}</p>
        </NuxtLink>
      </div>

      <p class="spine end">Portfolio</p>
    </section>

    <SiteFootBar />
  </div>
</template>

<style scoped>
.home {
  --ink: var(--color-iron-core);
  --line: color-mix(in srgb, var(--color-iron-core) 18%, transparent);
  min-height: 100vh;
  overflow-x: clip;
  background: color-mix(in srgb, var(--color-iron-core) 8%, var(--color-architectural-cream));
  color: var(--ink);
  color-scheme: light;
}

.hero {
  padding: 0 1rem 1.25rem;
}

.display {
  margin: 0;
  color: var(--ink);
  font-size: clamp(4.4rem, 13vw, 10.5rem);
  font-weight: 800;
  letter-spacing: -0.055em;
  line-height: 0.78;
  text-transform: uppercase;
  white-space: nowrap;
}

.rail {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem;
  padding-top: 1.25rem;
}

.intro,
.count-label,
.count {
  margin: 0;
}

.intro {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  max-width: 16rem;
  font-size: 0.95rem;
  line-height: 1.35;
}

.intro a {
  color: var(--color-rust-signal);
  font-weight: 700;
}

.intro a:hover {
  color: var(--color-heat-marker);
}

.dot {
  flex: 0 0 auto;
  width: 0.45rem;
  height: 0.45rem;
  background: var(--color-rust-signal);
}

.count-label {
  color: color-mix(in srgb, var(--ink) 70%, var(--color-architectural-cream));
  font-size: 0.92rem;
  text-align: right;
}

.count {
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.06em;
  line-height: 0.9;
  text-align: right;
}

.poster {
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.7rem;
  align-items: stretch;
  min-height: 36rem;
  margin: 0 0.75rem 1rem;
  padding: 1.1rem 0.7rem;
  border: 1px solid rgb(239 234 224 / 28%);
  background: #111110;
  color: #efeae0;
}

.cross {
  position: absolute;
  width: 0.7rem;
  height: 0.7rem;
}

.cross::before,
.cross::after {
  content: "";
  position: absolute;
  background: rgb(239 234 224 / 70%);
}

.cross::before {
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
}

.cross::after {
  top: 0;
  left: 50%;
  width: 1px;
  height: 100%;
}

.tl { top: 0.35rem; left: 0.35rem; }
.tr { top: 0.35rem; right: 0.35rem; }
.bl { bottom: 0.35rem; left: 0.35rem; }
.br { bottom: 0.35rem; right: 0.35rem; }

.spine {
  margin: 0;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  align-self: center;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.strips {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.55rem;
  min-width: 0;
}

.strip {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 0;
  min-height: 100%;
  padding: 0.75rem 0.6rem 0.85rem;
  color: inherit;
  text-decoration: none;
}

.strip header,
.count,
.word,
.name,
.log {
  margin: 0;
}

.name,
.word,
.tally {
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.name {
  font-size: 0.78rem;
  line-height: 1.1;
}

.log {
  margin-top: 0.35rem;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.72;
}

.chart {
  width: 100%;
  height: auto;
  margin-top: 0.4rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.4;
}

.node,
.mark,
.sun {
  fill: currentColor;
  stroke: none;
}

.puff {
  fill: currentColor;
  fill-opacity: 0.28;
  stroke: currentColor;
}

.route,
.orbit {
  stroke-dasharray: 1.6 4;
  stroke-linecap: round;
}

.drift {
  animation: drift 7s ease-in-out infinite alternate;
}

.drift.slow {
  animation-duration: 9s;
}

.packet {
  offset-path: path('M 10 98 C 36 78, 72 112, 112 84');
  offset-rotate: 0deg;
  animation: glide 8s linear infinite;
}

.token {
  animation: run 4.5s linear infinite;
}

.arm {
  transform-box: view-box;
  transform-origin: 46px 24px;
  animation: swing 2.6s ease-in-out infinite alternate;
}

.radius,
.planet {
  transform-box: view-box;
  transform-origin: 60px 60px;
  animation: turn 12s linear infinite;
}

.planet {
  animation-duration: 16s;
}

.pulse {
  animation: pulse 2.4s ease-in-out infinite;
}

@keyframes drift {
  to { transform: translateX(6px); }
}

@keyframes glide {
  to { offset-distance: 100%; }
}

@keyframes run {
  to { transform: translateX(88px); }
}

@keyframes swing {
  from { transform: rotate(-22deg); }
  to { transform: rotate(22deg); }
}

@keyframes turn {
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  50% { opacity: 0.45; }
}

.tally {
  margin: 0;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
}

.index {
  margin: 0;
  padding: 0.55rem 0 0;
  border-top: 1px solid color-mix(in srgb, currentColor 35%, transparent);
  list-style: none;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1.35;
  text-transform: uppercase;
}

.index li + li {
  margin-top: 0.35rem;
}

.word {
  margin-top: auto;
  font-size: clamp(1.15rem, 1.6vw, 1.7rem);
  line-height: 0.9;
}

.strip.is-arch .name {
  font-size: 0.72rem;
}

.strip.is-arch .word {
  font-size: 1.05rem;
  letter-spacing: 0;
}

.strip.is-ai {
  background: var(--color-ai-field);
  color: var(--color-ai-paper);
}

.strip.is-cloud {
  background: color-mix(in srgb, var(--color-industrial-aqua) 18%, var(--color-architectural-cream));
  color: var(--color-iron-core);
}

.strip.is-arch {
  background: var(--color-heat-marker);
  color: var(--color-iron-core);
}

.strip.is-physics {
  background: var(--color-physics-paper);
  color: var(--color-physics-field);
}

.strip.is-math {
  background: var(--color-math-board);
  color: var(--color-math-chalk);
}

.strip.is-space {
  background: #141210;
  color: var(--color-space-paper);
}

.strip.is-ai .mark { color: var(--color-ai-mint); }
.strip.is-cloud .mark { color: var(--color-iron-core); }
.strip.is-arch .mark { color: var(--color-rust-signal); }
.strip.is-physics .mark { color: var(--color-physics-amber); }
.strip.is-math .mark { color: var(--color-math-gold); }
.strip.is-space .sun,
.strip.is-space .mark { color: var(--color-heat-marker); }

@media (prefers-reduced-motion: reduce) {
  .drift,
  .packet,
  .token,
  .arm,
  .radius,
  .planet,
  .pulse {
    animation: none;
  }
}

@media (max-width: 1100px) {
  .poster {
    grid-template-columns: minmax(0, 1fr);
  }

  .spine {
    writing-mode: horizontal-tb;
    transform: none;
    letter-spacing: 0.16em;
  }

  .display {
    font-size: clamp(2.15rem, 10.4vw, 4.75rem);
    letter-spacing: -0.04em;
    white-space: normal;
  }

  .spine.end {
    text-align: right;
  }

  .strips {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 0.4rem;
  }

  .strip {
    flex: 0 0 13.5rem;
    min-height: 34rem;
    scroll-snap-align: start;
  }
}
</style>
