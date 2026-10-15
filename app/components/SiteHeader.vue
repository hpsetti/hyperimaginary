<template>
  <header class="bar">
    <a class="brand" href="/">
      <span class="mark" aria-hidden="true">H</span>
      <span>
        <span class="brand-name">Hyper</span>
        <span class="brand-sub">Imaginary</span>
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
  display: grid;
  place-items: center;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 0.4rem;
  background: var(--color-heat-marker);
  color: var(--color-iron-core);
  font-weight: 800;
  line-height: 1;
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
</style>
