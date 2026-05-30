<template>
  <section id="about" class="section about">
    <div class="container">
      <div class="split-heading">
        <div>
          <p class="eyebrow">Sobre</p>
          <h2>Perfil profissional</h2>
        </div>
        <p>Formação, experiência e tecnologias que sustentam meus projetos.</p>
      </div>

      <div class="about-grid">
        <div class="about-copy">
          <span class="section-number">01</span>
          <p>
            Sou estudante de Sistemas de Informação, com foco em desenvolvimento
            fullstack, inteligência artificial e criação de soluções digitais.
          </p>
          <p>
            Tenho interesse em produtos escaláveis, interfaces responsivas,
            documentação clara e aplicações que resolvem problemas reais para
            empresas, equipes e usuários.
          </p>

          <div class="stats-grid">
            <article v-for="stat in stats" :key="stat.label" class="stat-card">
              <strong>{{ stat.number }}</strong>
              <span>{{ stat.label }}</span>
            </article>
          </div>
        </div>

        <div class="profile-card">
          <img src="/foto.jpg" alt="Foto de Emilly Sátiro" />
          <strong>Fullstack + IA</strong>
        </div>
      </div>

      <div class="tech-list" aria-label="Tecnologias">
        <span v-for="technology in technologies" :key="technology">{{ technology }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  props: {
    stats: {
      type: Array,
      required: true,
    },
    technologies: {
      type: Array,
      required: true,
    },
  },
}
</script>
