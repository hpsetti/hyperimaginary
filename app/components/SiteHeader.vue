<template>
  <header class="bar">
    <a class="brand" href="/">
      <svg class="mark" viewBox="0 0 64 64" aria-hidden="true">
        <ellipse class="orbit" cx="32" cy="32" rx="22" ry="9" fill="none" stroke="#4FBBBC" stroke-width="3.5"/>
        <circle cx="32" cy="32" r="8" fill="#F39120"/>
      </svg>
      <span>
        <span class="brand-name"><span class="h">H</span>yper</span>
        <span class="brand-sub"><span class="i">I</span>maginary</span>
      </span>
    </a>
    <NavGraphic />
  </header>
</template>

<style scoped>
.bar {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  min-height: 4.25rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--line);
}

.bar :deep(.graphic) {
  flex: 1 1 auto;
  min-width: 0;
}

.brand {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 0.6rem;
  color: inherit;
  text-decoration: none;
}

.mark {
  display: block;
  width: 2.15rem;
  height: 2.15rem;
  flex: 0 0 auto;
}

.orbit {
  transform-box: view-box;
  transform-origin: 32px 32px;
  transform: rotate(-32deg);
  animation: orbit 12s linear infinite;
}

@keyframes orbit {
  from { transform: rotate(-32deg); }
  to { transform: rotate(328deg); }
}

@media (prefers-reduced-motion: reduce) {
  .orbit {
    animation: none;
  }
}

.brand-name {
  display: block;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
}

.brand-sub {
  display: block;
  margin-top: 0.15rem;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  line-height: 1;
  text-transform: uppercase;
}

.h {
  color: var(--color-heat-marker);
}

.i {
  color: var(--color-industrial-aqua);
}
</style>
