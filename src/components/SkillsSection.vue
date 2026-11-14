<template>
  <section id="projects" class="section projects-section">
    <div class="container">
      <div class="split-heading">
        <div>
          <p class="eyebrow">Projetos que unem interface, desenvolvimento, dados e pesquisa aplicada.</p>
          <h2>Projetos de TI</h2>
        </div>
        <p>
          
        </p>
      </div>

      <div class="project-showcase" aria-label="Projetos de TI">
        <div
          ref="track"
          class="project-showcase-frame"
          @scroll="updateScrollProgress"
          @wheel="handleProjectWheel"
        >
          <article v-for="project in categories" :key="project.name" class="project-mon-card">
            <header class="project-mon-top">
              <h3>{{ project.name }}</h3>
            </header>

            <p class="project-mon-tag">{{ project.type }}</p>

            <div class="project-mon-image">
              <img
                v-if="project.image"
                :src="project.image"
                :alt="`Imagem do projeto ${project.name}`"
              />
              <div v-else class="project-image-placeholder" aria-hidden="true">
                <img src="/a8973100-1174-11ee-9e14-23aa8edbd820.svg" alt="" />
              </div>
            </div>

            <div class="project-mon-body">
              <p>{{ project.level }}</p>
              <div class="project-mon-moves">
                <div v-for="item in project.items" :key="item">
                  <strong>{{ item }}</strong>
                </div>
              </div>
            </div>

            <a
              v-if="project.link"
              class="project-card-link"
              :href="project.link"
              target="_blank"
              rel="noreferrer"
            >
              Ver projeto
            </a>
            <span v-else class="project-card-link is-disabled">Link em breve</span>
          </article>
        </div>

        <div class="project-scroll-indicator" aria-hidden="true">
          <span :style="{ transform: `scaleX(${scrollProgress})` }"></span>
        </div>
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
  data() {
    return {
      scrollProgress: 0.25,
    }
  },
  mounted() {
    this.$nextTick(this.updateScrollProgress)
    window.addEventListener('resize', this.updateScrollProgress)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateScrollProgress)
  },
  methods: {
    updateScrollProgress() {
      const track = this.$refs.track
      if (!track) return
      const maxScroll = track.scrollWidth - track.clientWidth
      const visibleRatio = track.clientWidth / track.scrollWidth
      if (maxScroll <= 0) {
        this.scrollProgress = 1
        return
      }
      this.scrollProgress = Math.max(visibleRatio, 0.22) + (track.scrollLeft / maxScroll) * (1 - Math.max(visibleRatio, 0.22))
    },
    handleProjectWheel(event) {
      const track = this.$refs.track
      if (!track || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return
      event.preventDefault()
      track.scrollBy({
        left: event.deltaY,
        behavior: 'smooth',
      })
    },
  },
}
</script>
