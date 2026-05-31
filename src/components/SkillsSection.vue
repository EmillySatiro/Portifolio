<template>
  <section id="skills" class="section skills">
    <div class="container">
      <div class="split-heading">
        <div>
          <p class="eyebrow">Habilidades</p>
          <h2>Cartas de competência</h2>
        </div>
        <p>
          Um mapa visual das áreas em que atuo, combinando desenvolvimento,
          design, pesquisa e organização técnica.
        </p>
      </div>

      <div class="skills-grid">
        <article v-for="category in categories" :key="category.name" class="skill-card">
          <header class="skill-card-header">
            <span>{{ category.type }}</span>
            <strong>{{ category.level }}</strong>
          </header>
          <div class="skill-card-art">
            <span>{{ category.symbol }}</span>
            <i></i>
            <b></b>
          </div>
          <h3>{{ category.name }}</h3>
          <p>{{ category.description }}</p>
          <div class="skill-tags">
            <span v-for="item in category.items" :key="item">{{ item }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
}
</script>
