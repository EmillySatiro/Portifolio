<template>
  <section id="about" class="section about-section">
    <div class="container">
      <!-- Section Header matching Figma specs -->
      <div class="about-header">
        <h2 class="about-title">SOBRE</h2>
        <p class="about-subtitle">
          Full Stack Development | Computer Vision | Machine Learning | Software Developerk
        </p>
        <div class="about-header-line" aria-hidden="true"></div>
      </div>

      <!-- Main Composition Grid -->
      <div class="about-main-grid">
        <!-- Photo Column with Dynamic Backdrop & Floating Note Tag -->
        <div class="about-photo-col">
          <div class="photo-wrapper-stage">
            <!-- Dynamic Back-layer Visual Effects -->
            <div class="photo-backdrop-glow" aria-hidden="true"></div>
            <div class="photo-offset-frame" aria-hidden="true"></div>

            <!-- Photo Card -->
            <div class="about-photo-card">
              <div class="about-photo-frame">
                <img
                  src="/foto perfil.png"
                  alt="Clara Emílly Sousa Sátiro"
                  class="about-photo-img"
                  loading="lazy"
                  decoding="async"
                  width="480"
                  height="600"
                />

                <!-- Floating Note Overlay Tag (Replacing bottom bar) -->
                <div class="photo-note-tag">
                  <span class="note-sparkle">✦</span>
                  <span class="note-name">Clara Emílly Sousa Sátiro</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Text Narrative Column -->
        <div class="about-text-content">
          <p>
            Sou <strong>Emilly Sátiro</strong>, estudante de Sistemas de Informação na
            <strong>Universidade Federal do Piauí (UFPI)</strong> em Picos - PI, com experiência em Desenvolvimento Full Stack, Desenvolvimento Front-end, prototipação de interfaces (UI/UX) e integração de soluções tecnológicas. Atuo no desenvolvimento de aplicações utilizando React, TypeScript, JavaScript, Python, FastAPI, Flask, Node.js, HTML, CSS, Tailwind CSS, PostgreSQL, Git e Docker, além de possuir experiência em modelagem de bancos de dados, APIs REST e desenvolvimento de sistemas web.
          </p>

          <p>
            Na área de pesquisa, trabalho com Inteligência Artificial, Visão Computacional, Deep Learning e Processamento de Imagens aplicados à saúde, com foco na análise de imagens biomédicas utilizando Redes Neurais Convolucionais (CNNs), pré-processamento de imagens e classificação de dados. Tenho interesse em oportunidades nas áreas de Desenvolvimento de Software, Desenvolvimento Full Stack, Front-end, Back-end, Engenharia de Software, Inteligência Artificial, Machine Learning e Visão Computacional.
          </p>
        </div>
      </div>

      <!-- Tech Stack Footer Marquee com Filtros por Categoria -->
      <div class="about-tech-footer">
        <!-- Compact Category Filters Bar -->
        <div class="tech-filter-bar">
          <button
            v-for="(cat, index) in categories"
            :key="cat.name"
            class="tech-filter-btn"
            :class="{ active: activeCategoryIndex === index }"
            @click="selectCategory(index)"
          >
            {{ cat.name }}
          </button>
        </div>

        <!-- Dynamic Marquee Track -->
        <div class="tech-marquee-track" :key="activeCategoryIndex">
          <!-- First Loop -->
          <div class="tech-marquee-content">
            <div
              v-for="(tech, index) in activeTechs"
              :key="'a-' + index"
              class="tech-chip-item"
            >
              <BrandIcon :name="tech.name" :size="20" class="chip-icon" />
              <span class="chip-label">{{ tech.name }}</span>
            </div>
          </div>
          <!-- Duplicate Loop for Seamless Infinite Scroll -->
          <div class="tech-marquee-content" aria-hidden="true">
            <div
              v-for="(tech, index) in activeTechs"
              :key="'b-' + index"
              class="tech-chip-item"
            >
              <BrandIcon :name="tech.name" :size="20" class="chip-icon" />
              <span class="chip-label">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BrandIcon from './BrandIcon.vue'

export default {
  name: 'AboutSection',
  components: {
    BrandIcon,
  },
  data() {
    return {
      activeCategoryIndex: 0,
      categories: [
        {
          name: 'Todas',
          techs: [
            { name: 'React' },
            { name: 'Vue.js' },
            { name: 'TypeScript' },
            { name: 'JavaScript' },
            { name: 'Python' },
            { name: 'Node.js' },
            { name: 'FastAPI' },
            { name: 'Flask' },
            { name: 'PostgreSQL' },
            { name: 'TailwindCSS' },
            { name: 'Docker' },
            { name: 'OpenCV' },
            { name: 'PyTorch' },
            { name: 'Git & GitHub' },
            { name: 'Quasar Framework' },
            { name: 'HTML5 / CSS3' },
            { name: 'Figma' },
          ],
        },
        {
          name: 'Front-end & UI',
          techs: [
            { name: 'React' },
            { name: 'Vue.js' },
            { name: 'TypeScript' },
            { name: 'JavaScript' },
            { name: 'TailwindCSS' },
            { name: 'Quasar Framework' },
            { name: 'HTML5 / CSS3' },
            { name: 'Figma' },
          ],
        },
        {
          name: 'Back-end & DB',
          techs: [
            { name: 'Node.js' },
            { name: 'Python' },
            { name: 'FastAPI' },
            { name: 'Flask' },
            { name: 'PostgreSQL' },
            { name: 'Docker' },
          ],
        },
        {
          name: 'IA & Visão Computacional',
          techs: [
            { name: 'OpenCV' },
            { name: 'PyTorch' },
            { name: 'Deep Learning (CNNs)' },
            { name: 'Processamento de Imagens' },
          ],
        },
        {
          name: 'Ferramentas & DevOps',
          techs: [
            { name: 'Git & GitHub' },
            { name: 'Docker' },
            { name: 'Figma' },
          ],
        },
      ],
    }
  },
  computed: {
    activeTechs() {
      const list = this.categories[this.activeCategoryIndex].techs
      if (list.length < 10) {
        return [...list, ...list]
      }
      return list
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
.about-section {
  position: relative;
  padding: 6rem 0 7rem 0;
  z-index: 1;
  background: linear-gradient(
    180deg,
    var(--bg, #2a2829) 0%,
    rgba(38, 58, 153, 0.12) 45%,
    #171516 100%
  );
}

.about-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 3.5rem;
  width: 100%;
}

.about-title {
  font-family: 'Cinzel', Georgia, serif;
  font-size: clamp(1.6rem, 3vw, 1.875rem); /* text-3xl */
  font-weight: 700;
  line-height: 1.2;
  color: var(--alabaster, #f0ebe5);
  margin: 0 0 0.4rem 0;
  text-transform: uppercase;
  text-align: center;
}

.about-subtitle {
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

.about-header-line {
  width: 64px; /* w-16 */
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--sky, #97b4de), transparent);
  margin: 0 auto;
  box-shadow: 0 0 10px var(--sky, #97b4de);
}

.about-main-grid {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  gap: 3.5rem;
  align-items: start;
  margin-bottom: 5rem;
}

.about-text-content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.about-text-content p {
  font-size: 0.95rem;
  line-height: 1.72;
  color: var(--muted, #d0c6b8);
  margin: 0;
}

.about-text-content p strong {
  color: var(--alabaster, #f0ebe5);
  font-weight: 700;
}

.about-photo-col {
  display: flex;
  flex-direction: column;
}

.photo-wrapper-stage {
  position: relative;
  width: 100%;
  padding: 8px;
}

/* Back Layer 1: Ambient Blue Glow */
.photo-backdrop-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: radial-gradient(circle, rgba(151, 180, 222, 0.28) 0%, rgba(38, 58, 153, 0.14) 45%, transparent 70%);
  filter: blur(25px);
  z-index: 0;
  pointer-events: none;
  animation: pulseGlow 4s ease-in-out infinite alternate;
}

/* Back Layer 2: Offset Line Frame */
.photo-offset-frame {
  position: absolute;
  top: 22px;
  left: 22px;
  right: -4px;
  bottom: -4px;
  border: 1px solid var(--sky, #97b4de);
  opacity: 0.35;
  z-index: 1;
  pointer-events: none;
  transition: all 0.35s ease;
  box-shadow: 0 0 15px rgba(151, 180, 222, 0.2);
}

.photo-wrapper-stage:hover .photo-offset-frame {
  top: 16px;
  left: 16px;
  opacity: 0.65;
  border-color: var(--sky, #97b4de);
  box-shadow: 0 0 25px rgba(151, 180, 222, 0.4);
}

/* Main Photo Card */
.about-photo-card {
  position: relative;
  z-index: 2;
  background: rgba(35, 33, 34, 0.6);
  border: 1px solid var(--line, rgba(240, 235, 229, 0.16));
  border-radius: 0 !important;
  overflow: hidden;
  backdrop-filter: blur(12px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6);
  transition: border-color 0.3s ease, transform 0.3s ease;
}

.about-photo-card:hover {
  border-color: rgba(151, 180, 222, 0.4);
  transform: translateY(-4px);
}

.about-photo-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 4.8;
  overflow: hidden;
}

.about-photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  display: block;
  transition: transform 0.6s ease;
}

.about-photo-card:hover .about-photo-img {
  transform: scale(1.04);
}

/* Floating Note Overlay Badge (Replacing bottom bar) */
.photo-note-tag {
  position: absolute;
  bottom: 1.2rem;
  left: 1.2rem;
  padding: 0.55rem 1.1rem;
  background: rgba(20, 18, 19, 0.82);
  border: 1px solid rgba(151, 180, 222, 0.35);
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 5;
  transition: all 0.3s ease;
}

.about-photo-card:hover .photo-note-tag {
  background: rgba(20, 18, 19, 0.95);
  border-color: var(--sky, #97b4de);
  box-shadow: 0 0 15px rgba(151, 180, 222, 0.35);
}

.note-sparkle {
  color: var(--sky, #97b4de);
  font-size: 0.85rem;
}

.note-name {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--alabaster, #f0ebe5);
  letter-spacing: 0.02em;
}

@keyframes pulseGlow {
  0% {
    opacity: 0.6;
    transform: scale(0.98);
  }
  100% {
    opacity: 1;
    transform: scale(1.03);
  }
}

/* Compact Category Filters Bar */
.tech-filter-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.15rem;
  padding: 0 1rem;
}

.tech-filter-btn {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(240, 235, 229, 0.1);
  color: var(--muted, #d0c6b8);
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.3rem 0.75rem;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.25s ease;
  letter-spacing: 0.02em;
  outline: none;
}

.tech-filter-btn:hover {
  background: rgba(151, 180, 222, 0.12);
  border-color: rgba(151, 180, 222, 0.35);
  color: var(--alabaster, #f0ebe5);
}

.tech-filter-btn.active {
  background: rgba(151, 180, 222, 0.2);
  border-color: var(--sky, #97b4de);
  color: var(--sky, #97b4de);
  box-shadow: 0 0 12px rgba(151, 180, 222, 0.28);
}

/* Tech Stack Footer Marquee */
.about-tech-footer {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 2rem;
  padding: 1.15rem 0 0.85rem 0;
  border-top: 1px solid rgba(240, 235, 229, 0.08);
  border-bottom: 1px solid rgba(240, 235, 229, 0.08);
  background: rgba(255, 255, 255, 0.015);
  mask-image: linear-gradient(
    90deg,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );
}

.tech-marquee-track {
  display: flex;
  width: max-content;
  animation: infiniteScroll 30s linear infinite;
}

.tech-marquee-track:hover {
  animation-play-state: paused;
}

.tech-marquee-content {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding-right: 1.25rem;
}

.tech-chip-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.85rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(240, 235, 229, 0.1);
  border-radius: 9999px;
  backdrop-filter: blur(8px);
  white-space: nowrap;
  transition: all 0.25s ease;
  cursor: default;
}

.tech-chip-item:hover {
  background: rgba(151, 180, 222, 0.12);
  border-color: var(--sky, #97b4de);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(151, 180, 222, 0.15);
}

.chip-icon {
  flex-shrink: 0;
}

.chip-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--paper-soft, #dcd0be);
  letter-spacing: 0.02em;
  transition: color 0.25s ease;
}

.tech-chip-item:hover .chip-label {
  color: var(--alabaster, #f0ebe5);
}

@keyframes infiniteScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@media (max-width: 900px) {
  .about-main-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
</style>
