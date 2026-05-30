<template>
  <section id="skills" class="section skills">
    <div class="container">
      <div class="split-heading">
        <div>
          <p class="eyebrow">Habilidades</p>
          <h2>Competências técnicas</h2>
        </div>
        <p>Áreas de atuação organizadas por tipo de entrega.</p>
      </div>

      <div class="skills-grid">
        <article v-for="category in categories" :key="category.name" class="skill-card">
          <span class="skill-mark">✦</span>
          <h3>{{ category.name }}</h3>
          <p>{{ category.description }}</p>
          <div class="tag-list">
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
