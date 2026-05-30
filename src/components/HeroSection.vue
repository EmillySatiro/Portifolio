<template>
  <section id="home" class="hero section-offset">
    <div class="hero-frame">
      <div class="hero-noise" aria-hidden="true"></div>
      <p class="hero-kicker">Portfolio / Fullstack / IA</p>
      <strong class="hero-word" aria-hidden="true">EMILLY</strong>

      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">Desenvolvedora Fullstack & Especialista em IA</p>
          <h1>Interfaces, sistemas e inteligência artificial com identidade.</h1>
          <p class="hero-description">
            Eu projeto e desenvolvo experiências digitais que unem tecnologia,
            clareza visual e soluções práticas para problemas reais.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#projects">Ver projetos</a>
            <a class="button button-secondary" href="#contact">Contato</a>
          </div>
        </div>

        <div class="hero-collage" aria-label="Retrato e áreas de atuação">
          <img src="/foto.jpg" alt="Foto de Emilly Sátiro" />
          <div class="hero-stamp">Emilly Sátiro</div>
          <article v-for="skill in skills" :key="skill.title" class="floating-card">
            <strong>{{ skill.title }}</strong>
            <span>{{ skill.techs.join(' / ') }}</span>
          </article>
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
