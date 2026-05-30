<template>
  <section id="home" class="hero section-offset">
    <div class="hero-frame">
      <div class="hero-grid-lines" aria-hidden="true"></div>
      <div class="hero-scan" aria-hidden="true"></div>
      <p class="hero-kicker">Portfolio / Design / Desenvolvimento / IA</p>
      <strong class="hero-word" aria-hidden="true">EMILLY</strong>

      <div class="container hero-intro">
        <div class="hero-copy">
          <p class="eyebrow">Designer · Desenvolvedora Full Stack · Pesquisadora em IA</p>
          <h1>Emilly Sátiro</h1>
          <p class="hero-description">
            Crio interfaces, sistemas e soluções com inteligência artificial combinando
            estética, código e pesquisa aplicada.
          </p>
        </div>

        <div class="hero-actions">
          <a class="button button-primary" href="#projects">Ver projetos</a>
          <a class="button button-secondary" href="#contact">Contato</a>
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
