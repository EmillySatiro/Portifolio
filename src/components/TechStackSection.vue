<template>
  <section id="skills" class="section tech-section">
    <div class="container">
      <!-- Section Header (matching SOBRE section size & style) -->
      <div class="tech-header">
        <h2 class="tech-title">HABILIDADES & TECNOLOGIAS</h2>
        <p class="tech-subtitle">
          TECNOLOGIAS QUE UTILIZO NO DIA A DIA PARA PROJETAR, DESENVOLVER E PESQUISAR
        </p>
        <div class="tech-header-line" aria-hidden="true"></div>
      </div>

      <!-- Top Tools Floating Stage (Ferramentas em Cima) -->
      <div class="skills-tools-top-stage">
        <TransitionGroup name="tool-float" tag="div" class="skills-floating-flex">
          <div
            v-for="(tech, i) in activeCategoryTechs"
            :key="tech.name"
            class="tech-item-free"
            :style="{
              '--delay': `${(i % 5) * 0.35}s`,
            }"
          >
            <div class="tech-icon-halo">
              <BrandIcon :name="tech.name" :size="38" class="tech-brand-logo" />
            </div>
            <span class="tech-label-name">{{ tech.name }}</span>
          </div>
        </TransitionGroup>
      </div>

      <!-- Bottom Category Title Navigation (Linha Única sem Quebra de Palavras) -->
      <div class="skills-scroll-bottom-nav">
        <div
          v-for="(cat, index) in categories"
          :key="cat.name"
          class="category-scroll-item"
          :class="{ active: activeCategoryIndex === index }"
          @click="selectCategory(index)"
        >
          <span class="cat-title-text">{{ cat.name }}</span>
          <span class="cat-underline-glow" aria-hidden="true"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BrandIcon from './BrandIcon.vue'

export default {
  name: 'TechStackSection',
  components: {
    BrandIcon,
  },
  data() {
    return {
      activeCategoryIndex: 0,
      categories: [
        {
          name: 'Front-end & UI',
          techs: [
            { name: 'TailwindCSS' },
            { name: 'React' },
            { name: 'Quasar Framework' },
            { name: 'Vue.js' },
            { name: 'JavaScript (ES6+)' },
            { name: 'TypeScript' },
            { name: 'HTML5 / CSS3' },
            { name: 'Figma' },
          ],
        },
        {
          name: 'Back-end & Banco de Dados',
          techs: [
            { name: 'Node.js' },
            { name: 'Python' },
            { name: 'FastAPI' },
            { name: 'Flask' },
            { name: 'PostgreSQL' },
            { name: 'MySQL' },
            { name: 'APIs REST' },
            { name: 'Docker' },
          ],
        },
        {
          name: 'IA & Visão Computacional',
          techs: [
            { name: 'OpenCV' },
            { name: 'PyTorch' },
            { name: 'Deep Learning (CNNs)' },
            { name: 'TensorFlow' },
            { name: 'Processamento de Imagens' },
            { name: 'Visão Computacional' },
          ],
        },
        {
          name: 'Ferramentas & DevOps',
          techs: [
            { name: 'Git & GitHub' },
            { name: 'Docker' },
            { name: 'Postman' },
            { name: 'VS Code' },
            { name: 'Linux' },
            { name: 'Figma' },
          ],
        },
      ],
    }
  },
  computed: {
    activeCategoryTechs() {
      return this.categories[this.activeCategoryIndex].techs
    },
  },
  methods: {
    selectCategory(index) {
      this.activeCategoryIndex = index
    },
  },
}
</script>

<style scoped>
.tech-section {
  position: relative;
  padding: 6rem 0;
  z-index: 1;
}

/* Header matching SOBRE section size & style */
.tech-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 3.5rem;
  width: 100%;
}

.tech-title {
  font-family: 'Cinzel', Georgia, serif;
  font-size: clamp(1.6rem, 3vw, 1.875rem); /* text-3xl */
  font-weight: 700;
  line-height: 1.2;
  color: var(--alabaster, #f0ebe5);
  margin: 0 0 0.4rem 0;
  text-transform: uppercase;
  text-align: center;
}

.tech-subtitle {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: clamp(0.78rem, 1.2vw, 0.875rem); /* text-sm */
  font-weight: 700;
  line-height: 1.3;
  color: var(--sky, #97b4de);
  letter-spacing: 0.16em; /* tracking-[2.62px] */
  text-transform: uppercase;
  margin: 0 0 0.85rem 0;
  text-align: center;
  max-width: 900px;
}

.tech-header-line {
  width: 64px; /* w-16 */
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--sky, #97b4de), transparent);
  margin: 0 auto;
  box-shadow: 0 0 10px var(--sky, #97b4de);
}

/* Top Tools Floating Stage (Ferramentas em Cima) */
.skills-tools-top-stage {
  width: 100%;
  max-width: 1150px;
  margin: 0 auto 3.5rem auto;
  min-height: 240px;
}

.skills-floating-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem 3.5rem;
  width: 100%;
  padding: 1rem;
}

/* Free Tool Element: NO BORDER, NO SQUARE, NO BOX */
.tech-item-free {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.65rem;
  cursor: pointer;
  user-select: none;
  animation: floatFree 3.8s ease-in-out infinite alternate;
  animation-delay: var(--delay);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
}

.tech-item-free:hover {
  transform: translateY(-10px) scale(1.18);
}

.tech-icon-halo {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  transition: transform 0.3s ease;
}

.tech-icon-halo::before {
  content: '';
  position: absolute;
  inset: -6px;
  background: radial-gradient(circle, rgba(151, 180, 222, 0.25) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.35s ease, transform 0.35s ease;
  transform: scale(0.6);
  pointer-events: none;
}

.tech-item-free:hover .tech-icon-halo::before {
  opacity: 1;
  transform: scale(1.2);
}

.tech-brand-logo {
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5));
  transition: filter 0.3s ease;
}

.tech-item-free:hover .tech-brand-logo {
  filter: drop-shadow(0 8px 20px rgba(151, 180, 222, 0.45));
}

.tech-label-name {
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--paper-soft, #dcd0be);
  letter-spacing: 0.02em;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.tech-item-free:hover .tech-label-name {
  color: var(--alabaster, #f0ebe5);
}

/* Bottom Category Title Navigation Driven by Click (Single Horizontal Line, Full Width) */
.skills-scroll-bottom-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(1rem, 3.5vw, 3.5rem);
  flex-wrap: nowrap;
  width: 100%;
  max-width: 100%;
  margin: 1.5rem auto 0 auto;
  overflow-x: auto;
  scrollbar-width: none;
}

.skills-scroll-bottom-nav::-webkit-scrollbar {
  display: none;
}

.category-scroll-item {
  position: relative;
  padding: 0.6rem 0.5rem;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.cat-title-text {
  font-family: 'Cinzel', Georgia, serif;
  font-size: clamp(0.85rem, 1.4vw, 1.05rem);
  font-weight: 700;
  color: var(--muted, #d0c6b8);
  letter-spacing: 0.03em;
  transition: color 0.35s ease;
  white-space: nowrap;
}

.category-scroll-item:hover .cat-title-text,
.category-scroll-item.active .cat-title-text {
  color: var(--alabaster, #f0ebe5);
}

.cat-underline-glow {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 100%;
  height: 2px;
  background: var(--sky, #97b4de);
  box-shadow: 0 0 10px var(--sky, #97b4de);
  transition: transform 0.35s ease;
}

.category-scroll-item.active .cat-underline-glow {
  transform: translateX(-50%) scaleX(1);
}

/* Floating animation */
@keyframes floatFree {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(4px);
  }
}

/* Tool Float Category Transition */
.tool-float-enter-active {
  transition: all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.tool-float-leave-active {
  transition: all 0.25s ease;
  position: absolute;
}

.tool-float-enter-from {
  opacity: 0;
  transform: translateY(24px) scale(0.8);
}

.tool-float-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.8);
}

@media (max-width: 900px) {
  .skills-scroll-bottom-nav {
    gap: 1.2rem;
    justify-content: flex-start;
    padding: 0 1rem;
  }
  .skills-floating-flex {
    gap: 2rem 1.8rem;
  }
  .tech-icon-halo {
    width: 52px;
    height: 52px;
  }
  .tech-label-name {
    font-size: 0.8rem;
  }
}
</style>
