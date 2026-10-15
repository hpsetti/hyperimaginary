<script setup lang="ts">
const props = defineProps<{
  variant?: "top" | "bottom";
}>();

const morse: Record<string, string> = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

const phrases = {
  top: "Move fast, fail faster",
  bottom: "You create, hence you are alive",
} as const;

const unit = 4;
const tones = ["heat", "aqua", "lilac", "mint"] as const;

function encode(text: string) {
  const marks: {
    kind: "dot" | "dash";
    x: number;
    w: number;
    tone: (typeof tones)[number];
  }[] = [];
  let x = unit * 2;
  const words = text
    .toUpperCase()
    .replace(/[^A-Z ]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  words.forEach((word, wordIndex) => {
    [...word].forEach((letter, letterIndex) => {
      const code = morse[letter] ?? "";
      [...code].forEach((symbol, symbolIndex) => {
        const w = symbol === "." ? unit : unit * 3;
        marks.push({
          kind: symbol === "." ? "dot" : "dash",
          x,
          w,
          tone: tones[marks.length % tones.length],
        });
        x += w;
        if (symbolIndex < code.length - 1) x += unit;
      });
      if (letterIndex < word.length - 1) x += unit * 3;
    });
    if (wordIndex < words.length - 1) x += unit * 7;
  });

  return { marks, width: x + unit * 2 };
}

const phrase = computed(() =>
  props.variant === "bottom" ? phrases.bottom : phrases.top,
);
const signal = computed(() => encode(phrase.value));
const captionScale = computed(() => 420 / signal.value.width);
</script>

<template>
  <svg
    v-if="variant !== 'bottom'"
    class="graphic graphic-top"
    viewBox="0 0 420 52"
    preserveAspectRatio="xMaxYMid meet"
    role="img"
    :aria-label="phrase"
  >
    <title>{{ phrase }}</title>
    <path class="line" d="M8 18h404" />
    <circle class="heat mark" cx="36" cy="18" r="6" />
    <circle class="node mark" cx="92" cy="18" r="3.5" />
    <rect class="aqua mark" x="132" y="10" width="16" height="16" />
    <path class="stroke" d="M168 8v20M188 8v20M168 18h20" />
    <circle class="lilac mark" cx="248" cy="18" r="8" />
    <path class="mint stroke" d="M276 18h88" />
    <circle class="mint mark" cx="380" cy="18" r="5" />
    <g class="caption" :transform="`translate(0 34) scale(${captionScale})`">
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
    </g>
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

.graphic-top {
  height: 2.55rem;
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

.graphic-top:hover .line {
  stroke-dasharray: 22 14;
  animation:
    travel 2.8s linear infinite,
    pulse 2.5s ease-in-out infinite;
}

.graphic-top:hover .stroke {
  stroke-dasharray: 10 8;
  animation: travel 2.2s linear infinite;
}

.graphic-top:hover .mark.heat,
.graphic-top:hover .mark.lilac {
  animation: drift 2.6s ease-in-out infinite;
}

.graphic-top:hover .mark.aqua,
.graphic-top:hover circle.mark.mint,
.graphic-top:hover .mark.node {
  animation: drift-alt 2.6s ease-in-out infinite;
}

.graphic-top:hover .mark.aqua {
  animation-delay: 0.35s;
}

.graphic-top:hover .mark.lilac {
  animation-delay: 0.7s;
}

.graphic-top:hover circle.mark.mint {
  animation-delay: 1s;
}

.graphic-top:hover .mark.node {
  animation-delay: 0.22s;
}

.graphic-top:hover .morse,
.graphic-bottom:hover .morse {
  animation: wave 2.5s ease-in-out infinite;
  animation-delay: calc(var(--i) * 64ms);
}

.graphic-top:hover .morse.flip,
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

@keyframes drift {
  0%,
  100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }

  50% {
    transform: translate(4px, -3px) scale(1.06) rotate(4deg);
  }
}

@keyframes drift-alt {
  0%,
  100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }

  50% {
    transform: translate(-4px, 3px) scale(0.96) rotate(-4deg);
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
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(-2.5px) scale(1.08);
  }
}

@keyframes wave-flip {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(2.5px) scale(0.94);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.62;
  }
}

@media (prefers-reduced-motion: reduce) {
  .graphic-top:hover .line,
  .graphic-top:hover .stroke,
  .graphic-top:hover .mark,
  .graphic-top:hover .morse,
  .graphic-bottom:hover .morse {
    animation: none;
  }
}
</style>
