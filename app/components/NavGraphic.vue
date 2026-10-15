<script setup lang="ts">
defineProps<{
  variant?: 'top' | 'bottom'
}>()

const morse: Record<string, string> = {
  A: '.-',
  B: '-...',
  C: '-.-.',
  D: '-..',
  E: '.',
  F: '..-.',
  G: '--.',
  H: '....',
  I: '..',
  J: '.---',
  K: '-.-',
  L: '.-..',
  M: '--',
  N: '-.',
  O: '---',
  P: '.--.',
  Q: '--.-',
  R: '.-.',
  S: '...',
  T: '-',
  U: '..-',
  V: '...-',
  W: '.--',
  X: '-..-',
  Y: '-.--',
  Z: '--..'
}

const phrase = 'You create, hence you are alive'
const unit = 4
const tones = ['heat', 'aqua', 'lilac', 'mint'] as const

const signal = computed(() => {
  const marks: { kind: 'dot' | 'dash'; x: number; w: number; tone: (typeof tones)[number] }[] = []
  let x = unit * 2
  const words = phrase.toUpperCase().replace(/[^A-Z ]/g, '').split(/\s+/).filter(Boolean)

  words.forEach((word, wordIndex) => {
    ;[...word].forEach((letter, letterIndex) => {
      const code = morse[letter] ?? ''
      ;[...code].forEach((symbol, symbolIndex) => {
        const w = symbol === '.' ? unit : unit * 3
        marks.push({
          kind: symbol === '.' ? 'dot' : 'dash',
          x,
          w,
          tone: tones[marks.length % tones.length]
        })
        x += w
        if (symbolIndex < code.length - 1) x += unit
      })
      if (letterIndex < word.length - 1) x += unit * 3
    })
    if (wordIndex < words.length - 1) x += unit * 7
  })

  return { marks, width: x + unit * 2 }
})
</script>

<template>
  <svg v-if="variant !== 'bottom'" class="graphic" viewBox="0 0 420 36" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">
    <path class="line" d="M8 18h404" />
    <circle class="heat mark" cx="36" cy="18" r="6" />
    <circle class="node mark" cx="92" cy="18" r="3.5" />
    <rect class="aqua mark" x="132" y="10" width="16" height="16" />
    <path class="stroke" d="M168 8v20M188 8v20M168 18h20" />
    <circle class="lilac mark" cx="248" cy="18" r="8" />
    <path class="mint stroke" d="M276 18h88" />
    <circle class="mint" cx="380" cy="18" r="5" />
  </svg>

  <svg
    v-else
    class="graphic graphic-bottom"
    :viewBox="`0 0 ${signal.width} 36`"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    :aria-label="phrase"
  >
    <title>{{ phrase }}</title>
    <template v-for="(mark, index) in signal.marks" :key="index">
      <circle
        v-if="mark.kind === 'dot'"
        class="morse"
        :class="[mark.tone, { flip: index % 2 === 1 }]"
        :cx="mark.x + mark.w / 2"
        cy="18"
        :r="mark.w / 2"
        :style="{ '--i': index }"
      />
      <rect
        v-else
        class="morse"
        :class="[mark.tone, { flip: index % 2 === 1 }]"
        :x="mark.x"
        y="15.8"
        :width="mark.w"
        height="4.4"
        rx="2.2"
        :style="{ '--i': index }"
      />
    </template>
    <line class="strike" x1="0" y1="18" :x2="signal.width" y2="18" />
  </svg>
</template>

<style scoped>
.graphic {
  display: block;
  width: 100%;
  height: 2rem;
  stroke: currentColor;
  stroke-width: 1.6;
  fill: none;
}

.graphic-bottom {
  height: 2.75rem;
}

.strike {
  stroke: rgb(0 0 0 / 35%);
  stroke-width: 1;
  fill: none;
}

.morse {
  stroke: none;
  transform-box: fill-box;
  transform-origin: center;
}

.morse.heat {
  fill: var(--color-heat-marker);
}

.morse.aqua {
  fill: var(--color-industrial-aqua);
}

.morse.lilac {
  fill: var(--color-ai-lilac);
}

.morse.mint {
  fill: var(--color-ai-mint);
}

.mark {
  transform-box: fill-box;
  transform-origin: center;
}

.graphic:hover .line {
  stroke-dasharray: 22 14;
  animation: travel 0.7s linear infinite, pulse 1.1s ease-in-out infinite;
}

.graphic:hover .stroke {
  stroke-dasharray: 10 8;
  animation: travel 0.45s linear infinite;
}

.graphic:hover .heat,
.graphic:hover .lilac {
  animation: bounce 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
}

.graphic:hover .aqua,
.graphic:hover circle.mint,
.graphic:hover .node {
  animation: bounce-alt 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
}

.graphic:hover .aqua {
  animation-delay: 0.12s;
}

.graphic:hover .lilac {
  animation-delay: 0.22s;
}

.graphic:hover circle.mint {
  animation-delay: 0.34s;
}

.graphic:hover .node {
  animation-delay: 0.08s;
}

.graphic-bottom:hover .morse {
  animation: wave 0.9s cubic-bezier(0.34, 1.45, 0.64, 1) infinite;
  animation-delay: calc(var(--i) * 28ms);
}

.graphic-bottom:hover .morse.flip {
  animation-name: wave-flip;
}

.heat {
  fill: var(--color-heat-marker);
  stroke: none;
}

.aqua {
  fill: var(--color-industrial-aqua);
  stroke: none;
}

.lilac {
  fill: var(--color-ai-lilac);
  stroke: none;
}

.mint {
  stroke: var(--color-ai-mint);
}

circle.mint {
  fill: var(--color-ai-mint);
  stroke: none;
}

@keyframes bounce {
  0%,
  100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }

  25% {
    transform: translate(14px, -8px) scale(1.28) rotate(16deg);
  }

  50% {
    transform: translate(-8px, 8px) scale(0.82) rotate(-12deg);
  }

  75% {
    transform: translate(8px, -4px) scale(1.14) rotate(8deg);
  }
}

@keyframes bounce-alt {
  0%,
  100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }

  25% {
    transform: translate(-14px, 8px) scale(0.8) rotate(-16deg);
  }

  50% {
    transform: translate(8px, -8px) scale(1.3) rotate(12deg);
  }

  75% {
    transform: translate(-6px, 4px) scale(0.9) rotate(-8deg);
  }
}

@keyframes travel {
  to {
    stroke-dashoffset: -80;
  }
}

@keyframes wave {
  0%,
  100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }

  30% {
    transform: translate(2px, -6px) scale(1.35) rotate(14deg);
  }

  65% {
    transform: translate(-2px, 4px) scale(0.82) rotate(-10deg);
  }
}

@keyframes wave-flip {
  0%,
  100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }

  30% {
    transform: translate(-2px, 6px) scale(0.82) rotate(-14deg);
  }

  65% {
    transform: translate(2px, -5px) scale(1.35) rotate(10deg);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.45;
  }
}

@media (prefers-reduced-motion: reduce) {
  .graphic:hover .line,
  .graphic:hover .stroke,
  .graphic:hover .mark,
  .graphic-bottom:hover .morse {
    animation: none;
  }
}
</style>
