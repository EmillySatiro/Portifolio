<template>
  <main class="designer-page-view">
    
    <!-- Top Project Selector Tabs (Switch between Design Projects) -->
    <header class="project-selector-bar">
      <div class="selector-inner">
        <span class="selector-heading">
          PROJETOS:
        </span>
        <nav class="project-tabs-nav" aria-label="Selecione o projeto">
          <button
            v-for="(proj, pIdx) in projects"
            :key="proj.id"
            class="project-tab-btn"
            :class="{ active: currentProjectIndex === pIdx }"
            @click="switchProject(pIdx)"
          >
            <span class="tab-index">0{{ pIdx + 1 }}.</span>
            <span class="tab-title">{{ proj.title }}</span>
          </button>
        </nav>
      </div>
    </header>

    <!-- Ambient Atmospheric Fullscreen Backdrop with Active Project Image -->
    <div class="cinematic-backdrop">
      <Transition name="fade-bg" mode="out-in">
        <div
          :key="currentProject.id + '-' + activeSlideIndex"
          class="backdrop-image"
          :style="{
            backgroundImage: `url(${currentSlide.image})`
          }"
        ></div>
      </Transition>
      <div class="backdrop-grain"></div>
      <div class="backdrop-vignette"></div>
      <div class="backdrop-gradient-left"></div>
    </div>

    <!-- Editorial Vertical Side Labels -->
    <div class="side-editorial-label left">
      <span class="label-text">TREATMENT TITLE // {{ currentProject.title }}</span>
    </div>

    <div class="side-editorial-label right">
      <span class="label-text">EMÍLLY SÁTIRO // CREATIVE DIRECTION</span>
    </div>

    <!-- Main Layout Container (Grid: Timeline + Overlaid Info + Stacked Carousel) -->
    <div class="designer-main-container">
      
      <!-- 1. LEFT: Vertical Step Timeline Tracker -->
      <aside class="vertical-timeline-tracker" aria-label="Navegação por protótipos do projeto">
        <div class="timeline-line">
          <div
            class="timeline-progress-fill"
            :style="{
              height: currentProject.slides.length > 1
                ? `${(activeSlideIndex / (currentProject.slides.length - 1)) * 100}%`
                : '100%'
            }"
          ></div>
        </div>

        <div class="timeline-steps">
          <button
            v-for="(slide, sIdx) in currentProject.slides"
            :key="sIdx"
            class="timeline-step-btn"
            :class="{ active: activeSlideIndex === sIdx }"
            :aria-label="`Ver protótipo ${sIdx + 1}`"
            @click="selectSlide(sIdx)"
          >
            <span class="step-number-circle">
              <span class="step-num">{{ sIdx + 1 }}</span>
            </span>
            <span class="step-hover-label">Protótipo {{ sIdx + 1 }}</span>
          </button>
        </div>
      </aside>

      <!-- 2. CENTER-LEFT: Active Project Overlaid Information (Clean, Direct & Elegant) -->
      <section class="active-project-showcase">
        <div class="showcase-content-box">

          <!-- Main Display Title (Cinzel Font) -->
          <h1 class="hero-project-title">
            {{ currentProject.title }}
          </h1>

          <!-- Clean Single Narrative Description -->
          <p class="project-description">
            {{ currentProject.description }}
          </p>

          <!-- Action Buttons (Featuring Prominent Amplify Button) -->
          <div class="showcase-actions-row">
            
            <!-- High-Impact Amplify Prototype Button -->
            <button
              type="button"
              class="highlight-amplify-btn"
              title="Ampliar protótipo em tela cheia"
              @click="openLightbox"
            >
              <Maximize2 :size="17" class="btn-icon" />
              <span class="btn-text">Ampliar Protótipo</span>
            </button>

            <!-- Live Website Link (When available) -->
            <a
              v-if="currentProject.liveUrl"
              :href="currentProject.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="primary-blue-btn"
            >
              <span class="btn-text">Ver Website</span>
              <ExternalLink :size="16" class="btn-icon" />
            </a>

            <!-- Figma Link (Public) -->
            <a
              v-if="currentProject.figmaUrl"
              :href="currentProject.figmaUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="secondary-outline-btn"
            >
              <span class="btn-text">Figma Prototype</span>
              <ArrowUpRight :size="16" class="btn-icon" />
            </a>

            <!-- Figma Private Badge -->
            <div
              v-else-if="currentProject.figmaPrivate"
              class="private-badge"
              title="Acesso privado"
            >
              <span class="private-dot"></span>
              <span class="badge-text">Figma Privado</span>
            </div>

          </div>

        </div>
      </section>

      <!-- 3. RIGHT: 3D Stacked Cascading Carousel -->
      <section class="floating-carousel-deck" :aria-label="`Carrossel de protótipos de ${currentProject.title}`">
        
        <!-- Deck Top Bar (Minimal Counter) -->
        <div class="deck-top-bar">
          <div class="deck-title-group">
            <span class="deck-heading">PROTÓTIPOS</span>
          </div>
          <div class="deck-counter">
            <span class="counter-curr">0{{ activeSlideIndex + 1 }}</span>
            <span class="counter-sep">/</span>
            <span class="counter-total">0{{ currentProject.slides.length }}</span>
          </div>
        </div>

        <!-- 3D Overlapping Stack Stage -->
        <div class="stacked-carousel-stage">
          <article
            v-for="(slide, sIdx) in currentProject.slides"
            :key="slide.image + '-' + sIdx"
            class="stacked-card"
            :class="{
              'is-front-card': activeSlideIndex === sIdx,
              'is-clickable-card': activeSlideIndex !== sIdx
            }"
            :style="getCardStyle(sIdx)"
            :title="activeSlideIndex === sIdx ? 'Clique para ampliar o protótipo' : 'Clique para selecionar'"
            @click="activeSlideIndex === sIdx ? openLightbox() : selectSlide(sIdx)"
          >
            <!-- Card Pure Full Image -->
            <div class="stacked-image-wrapper">
              <img
                :src="slide.image"
                :alt="`${currentProject.title} - Protótipo ${sIdx + 1}`"
                class="stacked-img"
                loading="lazy"
              />
              <div class="stacked-gradient-overlay"></div>

              <!-- Front Active Badge with Click Hint -->
              <div v-if="activeSlideIndex === sIdx" class="stacked-active-badge">
                <span class="active-dot"></span>
                <span>PROTÓTIPO 0{{ sIdx + 1 }}</span>
              </div>
            </div>
          </article>
        </div>

        <!-- Bottom Deck Navigation Controls -->
        <div class="deck-controls-row">
          <button
            class="deck-nav-arrow prev"
            aria-label="Protótipo anterior"
            title="Protótipo anterior"
            @click="prevSlide"
          >
            <ChevronLeft :size="20" />
            <span class="arrow-text">ANTERIOR</span>
          </button>

          <div class="deck-counter-indicator">
            <span>{{ activeSlideIndex + 1 }} de {{ currentProject.slides.length }}</span>
          </div>

          <button
            class="deck-nav-arrow next"
            aria-label="Próximo protótipo"
            title="Próximo protótipo"
            @click="nextSlide"
          >
            <span class="arrow-text">PRÓXIMO</span>
            <ChevronRight :size="20" />
          </button>
        </div>

      </section>

    </div>

    <!-- Lightbox Modal for Full Image View -->
    <Transition name="fade-lightbox">
      <div
        v-if="lightboxOpen"
        class="lightbox-overlay"
        @click.self="closeLightbox"
      >
        <div class="lightbox-dialog">
          <button
            class="lightbox-close-btn"
            aria-label="Fechar ampliação"
            @click="closeLightbox"
          >
            ✕
          </button>

          <img
            :src="currentSlide.image"
            :alt="`${currentProject.title} - Protótipo ${activeSlideIndex + 1}`"
            class="lightbox-main-img"
          />

          <div class="lightbox-caption">
            <strong>{{ currentProject.title }}</strong>
            <span>—</span>
            <span>Protótipo {{ activeSlideIndex + 1 }} de {{ currentProject.slides.length }}</span>
          </div>
        </div>
      </div>
    </Transition>

  </main>
</template>

<script>
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, Maximize2 } from '@lucide/vue'

export default {
  name: 'DesignerView',
  components: {
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    Maximize2,
  },
  data() {
    return {
      currentProjectIndex: 0,
      activeSlideIndex: 0,
      lightboxOpen: false,
      projects: [
        {
          id: 'sinfo',
          title: 'SINFO 2026',
          description:
            'Desenvolvimento da identidade visual do SINFO 2026, inspirada na estética da web e dos sistemas dos anos 1990 e 2000. O projeto combina elementos nostálgicos, como janelas, ícones, pixels e interfaces clássicas, com uma abordagem contemporânea voltada à tecnologia e à inovação.',
          liveUrl: 'https://sinfo-ufpi.com.br/',
          figmaUrl: '',
          figmaPrivate: true,
          slides: [
            { image: '/designer/sinfo/inicio.png' },
            { image: '/designer/sinfo/imagem%202_sinfo.png' },
            { image: '/designer/sinfo/imagem3_sinfo.png' },
            { image: '/designer/sinfo/Sobre%20picos.png' },
          ],
        },
        {
          id: 'ecomadeira',
          title: 'EcoMadeira',
          description:
            'O EcoMadeira é uma planilha feita para engenheiros, arquitetos e projetistas que desejam calcular e dimensionar elementos estruturais de madeira com total segurança e precisão, eliminando processos manuais demorados e gerando relatórios completos de maneira fácil e intuitiva.',
          liveUrl: '',
          figmaUrl: '',
          figmaPrivate: true,
          slides: [
            { image: '/designer/ecomadeira/page.png' },
            { image: '/designer/ecomadeira/login.png' },
          ],
        },
        {
          id: 'cronometrai',
          title: 'Cronometraí',
          description:
            'Plataforma voltada à divulgação e organização de eventos esportivos, conectando atletas e organizadores em modalidades como corrida, triatlo e natação. O sistema permite que participantes encontrem e se inscrevam em competições, enquanto criadores podem cadastrar e gerenciar seus próprios eventos.',
          liveUrl: '',
          figmaUrl: '',
          figmaPrivate: true,
          slides: [
            { image: '/designer/cronometrai/Home%20(1).png' },
            { image: '/designer/cronometrai/Login_Atleta.png' },
            { image: '/designer/cronometrai/Cadastrar%20evento.png' },
          ],
        },
        {
          id: 'geek-day',
          title: 'Geek Day Workshop',
          description:
            'Minicurso introdutório sobre os principais fundamentos do Design Web, abordando conceitos essenciais para a criação de interfaces visuais mais funcionais, intuitivas e atrativas. A atividade combina teoria e demonstração prática, apresentando boas práticas de design e dicas para aprimorar projetos web.',
          liveUrl: '',
          figmaUrl: '',
          figmaPrivate: true,
          slides: [
            { image: '/designer/MIni%20curo%20Geek%20day/Home.png' },
            { image: '/designer/MIni%20curo%20Geek%20day/Catalogo.png' },
            { image: '/designer/MIni%20curo%20Geek%20day/Po%C3%A7%C3%B5es.png' },
            { image: '/designer/MIni%20curo%20Geek%20day/Ingredientes.png' },
          ],
        },
      ],
    }
  },
  computed: {
    currentProject() {
      return this.projects[this.currentProjectIndex] || this.projects[0]
    },
    currentSlide() {
      const slides = this.currentProject.slides || []
      const idx = Math.min(this.activeSlideIndex, slides.length - 1)
      return slides[idx] || slides[0] || { image: '' }
    },
  },
  mounted() {
    window.scrollTo(0, 0)
    window.addEventListener('keydown', this.handleKeyDown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  },
  methods: {
    switchProject(projectIdx) {
      if (projectIdx >= 0 && projectIdx < this.projects.length) {
        this.currentProjectIndex = projectIdx
        this.activeSlideIndex = 0
      }
    },
    selectSlide(slideIdx) {
      if (slideIdx >= 0 && slideIdx < this.currentProject.slides.length) {
        this.activeSlideIndex = slideIdx
      }
    },
    nextSlide() {
      const total = this.currentProject.slides.length
      this.activeSlideIndex = (this.activeSlideIndex + 1) % total
    },
    prevSlide() {
      const total = this.currentProject.slides.length
      this.activeSlideIndex = (this.activeSlideIndex - 1 + total) % total
    },
    /**
     * Calculates 3D cascading offset, scale, z-index and brightness
     * for cards stacked behind in sequence to the right.
     */
    getCardStyle(sIdx) {
      const total = this.currentProject.slides.length
      if (total === 0) return {}

      const diff = (sIdx - this.activeSlideIndex + total) % total

      if (diff === 0) {
        return {
          transform: 'translateX(0px) scale(1) translateY(0px)',
          zIndex: 10,
          opacity: 1,
          filter: 'brightness(1)',
          pointerEvents: 'auto',
        }
      } else if (diff === 1) {
        return {
          transform: 'translateX(720px) scale(0.92) translateY(14px)',
          zIndex: 8,
          opacity: 0.85,
          filter: 'brightness(0.55)',
          pointerEvents: 'auto',
        }
      } else if (diff === 2) {
        return {
          transform: 'translateX(920px) scale(0.83) translateY(26px)',
          zIndex: 6,
          opacity: 0.5,
          filter: 'brightness(0.38)',
          pointerEvents: 'auto',
        }
      } else if (diff === 3) {
        return {
          transform: 'translateX(1080px) scale(0.74) translateY(36px)',
          zIndex: 4,
          opacity: 0.25,
          filter: 'brightness(0.25)',
          pointerEvents: 'auto',
        }
      } else {
        return {
          transform: 'translateX(1200px) scale(0.65) translateY(45px)',
          zIndex: 1,
          opacity: 0,
          filter: 'brightness(0.2)',
          pointerEvents: 'none',
        }
      }
    },
    handleKeyDown(e) {
      if (this.lightboxOpen) {
        if (e.key === 'Escape') this.closeLightbox()
        if (e.key === 'ArrowRight') this.nextSlide()
        if (e.key === 'ArrowLeft') this.prevSlide()
        return
      }

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        this.nextSlide()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        this.prevSlide()
      }
    },
    openLightbox() {
      this.lightboxOpen = true
    },
    closeLightbox() {
      this.lightboxOpen = false
    },
  },
}
</script>

<style scoped>
/* ==========================================================================
   CLEAN EDITORIAL DESIGN SHOWCASE
   Brand Palette: Navy Blue (#263a99), Sky Blue (#97b4de), Pure White (#ffffff)
   Typography: Cinzel (Headings), Inter (Body)
   ========================================================================== */

.designer-page-view {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #171516;
  color: #ffffff;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 72px;
  padding-bottom: 2rem;
  box-sizing: border-box;
  font-family: var(--font-body, 'Inter', sans-serif);
}

/* --------------------------------------------------------------------------
   TOP PROJECT SELECTOR TABS (Glassmorphism & Brand Blue)
   -------------------------------------------------------------------------- */
.project-selector-bar {
  position: relative;
  z-index: 5;
  width: 100%;
  max-width: 1920px;
  margin: 0.5rem auto 0 auto;
  padding: 0.5rem 3rem;
  box-sizing: border-box;
}

.selector-inner {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(23, 21, 22, 0.4);
  border: 1px solid rgba(151, 180, 222, 0.2);
  padding: 0.6rem 1.25rem;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  overflow-x: auto;
}

.selector-heading {
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  font-weight: 700;
  color: var(--sky, #97b4de);
  white-space: nowrap;
}

.project-tabs-nav {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: nowrap;
}

.project-tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: transparent;
  border: 1px solid transparent;
  color: rgba(255, 255, 255, 0.65);
  padding: 0.35rem 0.85rem;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.25s ease;
}

.project-tab-btn:hover {
  color: #ffffff;
  background: rgba(151, 180, 222, 0.1);
  border-color: rgba(151, 180, 222, 0.3);
}

.project-tab-btn.active {
  background: rgba(38, 58, 153, 0.4);
  border-color: var(--sky, #97b4de);
  color: #ffffff;
  font-weight: 700;
  box-shadow: 0 0 15px rgba(151, 180, 222, 0.25);
}

.tab-index {
  color: var(--sky, #97b4de);
  font-weight: 600;
}

/* --------------------------------------------------------------------------
   BACKDROP & ATMOSPHERE (Full-Bleed Presentation)
   -------------------------------------------------------------------------- */
.cinematic-backdrop {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.backdrop-image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: top center;
  filter: brightness(0.92) contrast(1.04);
  transform: scale(1.0);
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease;
}

.backdrop-grain {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 0);
  background-size: 24px 24px;
  opacity: 0.4;
}

.backdrop-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 75% 50%,
    transparent 50%,
    rgba(23, 21, 22, 0.4) 85%,
    rgba(23, 21, 22, 0.75) 100%
  );
  pointer-events: none;
}

.backdrop-gradient-left {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(23, 21, 22, 0.96) 0%,
    rgba(23, 21, 22, 0.88) 28%,
    rgba(23, 21, 22, 0.55) 50%,
    rgba(23, 21, 22, 0.15) 70%,
    transparent 100%
  );
  pointer-events: none;
}

/* Fade Transition for Background */
.fade-bg-enter-active,
.fade-bg-leave-active {
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-bg-enter-from,
.fade-bg-leave-to {
  opacity: 0;
}

/* --------------------------------------------------------------------------
   SIDE EDITORIAL VERTICAL LABELS
   -------------------------------------------------------------------------- */
.side-editorial-label {
  position: fixed;
  top: 55%;
  transform: translateY(-50%);
  z-index: 4;
  display: flex;
  align-items: center;
  font-size: 0.65rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: rgba(151, 180, 222, 0.4);
  pointer-events: none;
  user-select: none;
  font-weight: 500;
}

.side-editorial-label.left {
  left: 1.25rem;
  writing-mode: vertical-rl;
  transform: translateY(-50%) rotate(180deg);
}

.side-editorial-label.right {
  right: 1.25rem;
  writing-mode: vertical-rl;
}

/* --------------------------------------------------------------------------
   MAIN LAYOUT GRID (Timeline + Overlaid Content + Stacked Carousel)
   -------------------------------------------------------------------------- */
.designer-main-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 1.5rem 3rem 2rem 3rem;
  display: grid;
  grid-template-columns: 50px 420px 1fr;
  align-items: center;
  gap: 3.5rem;
  min-height: calc(100vh - 160px);
  box-sizing: border-box;
}

/* --------------------------------------------------------------------------
   1. LEFT: VERTICAL STEP TIMELINE TRACKER
   -------------------------------------------------------------------------- */
.vertical-timeline-tracker {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 380px;
}

.timeline-line {
  position: absolute;
  top: 15px;
  bottom: 15px;
  left: 50%;
  width: 1px;
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(-50%);
  z-index: 1;
}

.timeline-progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(180deg, var(--sky, #97b4de), var(--blue, #263a99));
  transition: height 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 0 10px rgba(151, 180, 222, 0.6);
}

.timeline-steps {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0;
  margin: 0;
}

.timeline-step-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  position: relative;
  outline: none;
}

.step-number-circle {
  width: 32px;
  height: 32px;
  background: #1f1d1e;
  border: 1px solid rgba(151, 180, 222, 0.3);
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  position: relative;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.timeline-step-btn:hover .step-number-circle {
  border-color: var(--sky, #97b4de);
  color: #ffffff;
  transform: scale(1.15);
  box-shadow: 0 0 12px rgba(151, 180, 222, 0.4);
}

.timeline-step-btn.active .step-number-circle {
  background: #ffffff;
  color: #171516;
  border-color: #ffffff;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.7), 0 0 35px rgba(151, 180, 222, 0.4);
  transform: scale(1.22);
}

.step-hover-label {
  position: absolute;
  left: 44px;
  white-space: nowrap;
  background: rgba(23, 21, 22, 0.95);
  border: 1px solid rgba(151, 180, 222, 0.3);
  padding: 0.3rem 0.75rem;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0;
  transform: translateX(-8px);
  pointer-events: none;
  transition: all 0.25s ease;
  backdrop-filter: blur(8px);
}

.timeline-step-btn:hover .step-hover-label {
  opacity: 1;
  transform: translateX(0);
}

/* --------------------------------------------------------------------------
   2. CENTER-LEFT: ACTIVE PROJECT OVERLAID INFORMATION
   -------------------------------------------------------------------------- */
.active-project-showcase {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0;
}

.showcase-content-box {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 420px;
}

/* Main Display Title in Cinzel Font */
.hero-project-title {
  font-family: var(--font-title, 'Cinzel', Georgia, serif);
  font-size: clamp(2.4rem, 4vw, 3.8rem);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: 0.04em;
  color: #ffffff;
  margin: 0;
  text-shadow: 0 4px 25px rgba(0, 0, 0, 0.9), 0 0 35px rgba(151, 180, 222, 0.2);
}

/* Direct Project Description (Clean typography) */
.project-description {
  font-size: 0.95rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.88);
  margin: 0;
  text-align: justify;
}

/* Action Buttons */
.showcase-actions-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 0.5rem;
}

/* High-Impact Highlight Amplify Button */
.highlight-amplify-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  background: linear-gradient(135deg, rgba(38, 58, 153, 0.8) 0%, rgba(151, 180, 222, 0.35) 100%);
  color: #ffffff;
  border: 1px solid var(--sky, #97b4de);
  padding: 0.85rem 1.65rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 0 25px rgba(151, 180, 222, 0.4), inset 0 0 12px rgba(151, 180, 222, 0.2);
  position: relative;
}

.highlight-amplify-btn:hover {
  background: #ffffff;
  border-color: #ffffff;
  color: #171516;
  transform: translateY(-2px);
  box-shadow: 0 0 35px rgba(151, 180, 222, 0.8);
}

.highlight-amplify-btn .btn-icon {
  color: var(--sky, #97b4de);
  transition: transform 0.3s ease, color 0.3s ease;
}

.highlight-amplify-btn:hover .btn-icon {
  color: #171516;
  transform: scale(1.15);
}

.primary-blue-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  background: var(--blue, #263a99);
  color: #ffffff;
  border: 1px solid var(--sky, #97b4de);
  padding: 0.85rem 1.65rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(38, 58, 153, 0.4);
}

.primary-blue-btn:hover {
  background: #ffffff;
  border-color: #ffffff;
  color: #171516;
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(151, 180, 222, 0.5);
}

.secondary-outline-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  background: rgba(23, 21, 22, 0.7);
  color: #ffffff;
  border: 1px solid rgba(151, 180, 222, 0.35);
  padding: 0.85rem 1.5rem;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.secondary-outline-btn:hover {
  background: rgba(151, 180, 222, 0.15);
  border-color: var(--sky, #97b4de);
  color: #ffffff;
  transform: translateY(-2px);
}

.private-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px dashed rgba(151, 180, 222, 0.3);
  padding: 0.85rem 1.25rem;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  user-select: none;
}

.private-dot {
  width: 6px;
  height: 6px;
  background: var(--sky, #97b4de);
}

/* --------------------------------------------------------------------------
   3. RIGHT: 3D STACKED CASCADING CAROUSEL
   -------------------------------------------------------------------------- */
.floating-carousel-deck {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  max-width: 100%;
  justify-self: stretch;
}

/* Deck Top Bar */
.deck-top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(151, 180, 222, 0.2);
}

.deck-title-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.deck-heading {
  font-size: 0.75rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--sky, #97b4de);
  font-weight: 700;
}

.deck-counter {
  font-family: var(--font-title, 'Cinzel', Georgia, serif);
  font-size: 1rem;
  letter-spacing: 0.1em;
  color: #ffffff;
}

.counter-curr {
  color: var(--sky, #97b4de);
  font-weight: 700;
}

.counter-sep {
  opacity: 0.4;
  margin: 0 0.25rem;
}

.counter-total {
  opacity: 0.6;
}

/* 3D Stack Stage */
.stacked-carousel-stage {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: visible;
  perspective: 1200px;
}

/* Stacked Card (Pure Cinematic Image) */
.stacked-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 880px;
  height: 480px;
  background: rgba(23, 21, 22, 0.6);
  border: 1px solid rgba(151, 180, 222, 0.25);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform-origin: left center;
  transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.65s ease,
              filter 0.65s ease,
              box-shadow 0.65s ease;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.65);
  cursor: pointer;
}

.stacked-card.is-clickable-card:hover {
  filter: brightness(0.85) !important;
  border-color: var(--sky, #97b4de);
}

.stacked-card.is-front-card {
  border-color: var(--sky, #97b4de);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.8), 0 0 30px rgba(151, 180, 222, 0.35);
  cursor: zoom-in;
}

/* Card Image Wrapper */
.stacked-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #100e0f;
}

.stacked-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.6s ease;
}

.stacked-card:hover .stacked-img {
  transform: scale(1.03);
}

.stacked-gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 60%, rgba(23, 21, 22, 0.8) 100%);
}

.stacked-active-badge {
  position: absolute;
  top: 14px;
  right: 14px;
  background: rgba(23, 21, 22, 0.9);
  border: 1px solid var(--sky, #97b4de);
  color: var(--sky, #97b4de);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  padding: 0.3rem 0.75rem;
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.active-dot {
  width: 6px;
  height: 6px;
  background: var(--sky, #97b4de);
}

/* Deck Controls Row */
.deck-controls-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.25rem;
}

.deck-nav-arrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(151, 180, 222, 0.08);
  border: 1px solid rgba(151, 180, 222, 0.25);
  color: #ffffff;
  padding: 0.65rem 1.15rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

.deck-nav-arrow:hover {
  background: #ffffff;
  border-color: #ffffff;
  color: #171516;
}

.deck-counter-indicator {
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
}

/* --------------------------------------------------------------------------
   LIGHTBOX OVERLAY
   -------------------------------------------------------------------------- */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(15, 14, 15, 0.95);
  backdrop-filter: blur(14px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.lightbox-dialog {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(151, 180, 222, 0.4);
  background: #171516;
  padding: 1.5rem;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.9);
}

.lightbox-close-btn {
  position: absolute;
  top: -16px;
  right: -16px;
  width: 36px;
  height: 36px;
  background: var(--sky, #97b4de);
  color: #171516;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.lightbox-close-btn:hover {
  transform: scale(1.1);
}

.lightbox-main-img {
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
  object-position: top center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.lightbox-caption {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--sky, #97b4de);
}

.fade-lightbox-enter-active,
.fade-lightbox-leave-active {
  transition: opacity 0.3s ease;
}
.fade-lightbox-enter-from,
.fade-lightbox-leave-to {
  opacity: 0;
}

/* --------------------------------------------------------------------------
   RESPONSIVE BREAKPOINTS
   -------------------------------------------------------------------------- */
@media (max-width: 1280px) {
  .designer-main-container {
    grid-template-columns: 50px 360px 1.2fr;
    gap: 2rem;
    padding: 1rem 2rem;
  }
  .stacked-card {
    width: 600px;
    height: 420px;
  }
  .stacked-carousel-stage {
    height: 440px;
  }
}

@media (max-width: 980px) {
  .side-editorial-label {
    display: none;
  }
  .project-selector-bar {
    padding: 0.5rem 1.5rem;
  }
  .designer-main-container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 1rem 1.5rem;
  }
  .vertical-timeline-tracker {
    display: none;
  }
  .active-project-showcase {
    max-width: 100%;
  }
  .floating-carousel-deck {
    max-width: 100%;
    justify-self: stretch;
  }
  .stacked-card {
    width: 100%;
    max-width: 540px;
    height: 380px;
  }
  .stacked-carousel-stage {
    height: 400px;
  }
}

@media (max-width: 640px) {
  .designer-page-view {
    padding-top: 60px;
  }
  .hero-project-title {
    font-size: 2.2rem;
  }
  .stacked-card {
    width: 100%;
    height: 320px;
  }
  .stacked-carousel-stage {
    height: 340px;
  }
  .deck-controls-row {
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }
}
</style>
