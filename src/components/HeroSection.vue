<template>
  <section id="home" class="hero section-offset">
    <div class="hero-frame">
      <div class="smoke-layer smoke-layer-one" aria-hidden="true"></div>
      <div class="smoke-layer smoke-layer-two" aria-hidden="true"></div>
      <div class="smoke-layer smoke-layer-three" aria-hidden="true"></div>
      <strong class="hero-word" aria-hidden="true">PORTFÓLIO</strong>

      <div class="container hero-intro">
        <div class="hero-copy">
          <h1>Portfólio</h1>
          <p class="hero-role">Designer · Desenvolvedora Full Stack · Pesquisadora em IA</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    skills: {
      type: Array,
      required: true,
    },
  },
}
</script>
