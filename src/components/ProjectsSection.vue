<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="split-heading">
        <div>
          <p class="eyebrow">Projetos</p>
          <h2>Trabalhos em destaque</h2>
        </div>
        <p>Uma seleção de projetos acadêmicos, pessoais e aplicações práticas.</p>
      </div>

      <div class="project-grid">
        <article v-for="project in projects" :key="project.title" class="project-card">
          <span class="project-index">selected work</span>
          <img :src="project.image" :alt="`Imagem do projeto ${project.title}`" />
          <div class="project-body">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="tag-list">
              <span v-for="tech in project.tech" :key="tech">{{ tech }}</span>
            </div>
            <a :href="project.link" target="_blank" rel="noreferrer">Ver projeto</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
}
</script>
