<template>
  <section id="projects" ref="projectsSection" class="section projects-section">
    <!-- Static Bat Mascot in Background -->
    <div class="static-bat-mascot-bg" aria-hidden="true">
      <img
        src="/a8973100-1174-11ee-9e14-23aa8edbd820.svg"
        alt="Morcego Estático Design"
        class="static-bat-img"
      />
    </div>

    <div class="container wide-container relative-z">
      <!-- Section Header -->
      <div class="projects-header">
        <h2 class="projects-title">PROJETOS</h2>
        <p class="projects-subtitle">
          Projetos em destaque, aplicações full stack e trajetórias
        </p>
        <div class="projects-header-line" aria-hidden="true"></div>
      </div>

      <!-- 2-Column Unified Stage: Pokémon Cards Left, Actions Right -->
      <div class="projects-2col-layout">
        <!-- Left Column: Interactive Colored Pokémon Card Stack Deck -->
        <div class="deck-left-column">
          <div
            class="pokemon-card-deck"
            :class="{ 'is-shuffling-deck': isShuffling }"
            @click="nextCard"
            title="Clique para passar para o próximo projeto"
          >
            <div
              v-for="(item, index) in getVisibleDeck"
              :key="item.id"
              class="pokemon-card-item"
              :class="[
                `card-theme-${item.color}`,
                { 'top-active': index === 0, 'is-flipping': isFlipping && index === 0 }
              ]"
              :style="getCardStyle(index)"
            >
              <!-- Pokémon Card Inner Frame -->
              <div class="card-inner-frame">
                <!-- Top Card Bar -->
                <div class="card-top-bar">
                  <div class="code-window-dots">
                    <span class="dot dot-red"></span>
                    <span class="dot dot-yellow"></span>
                    <span class="dot dot-green"></span>
                    <span class="code-file-name">
                      {{ item.isSpecial ? 'hello_world.js' : `project_${item.id}.js` }}
                    </span>
                  </div>
                  <span class="card-period-tag">{{ item.period }}</span>
                </div>

                <!-- Code Block Content Area -->
                <div class="card-code-block">
                  <pre v-if="!item.isSpecial" class="code-pre"><code><span class="code-kw">const</span> <span class="code-var">project</span> = {
  <span class="code-key">name</span>: <span class="code-str">"{{ item.company }}"</span>,
  <span class="code-key">role</span>: <span class="code-str">"{{ item.title }}"</span>
};</code></pre>

                  <!-- Final Special Hello World Card -->
                  <pre v-else class="code-pre"><code><span class="code-fn">console</span>.<span class="code-log">log</span>(<span class="code-str">"Hello, World! 👋"</span>);
<span class="code-kw">const</span> <span class="code-var">hireMe</span> = {
  <span class="code-key">status</span>: <span class="code-str">"Disponível para contratação!"</span>,
  <span class="code-key">contact</span>: <span class="code-str">"Vamos criar algo incrível juntos? ✨"</span>
};</code></pre>
                </div>
              </div>
            </div>
          </div>

          <!-- Deck Indicators -->
          <div class="deck-dots-bar">
            <span
              v-for="(item, idx) in experiences"
              :key="idx"
              class="deck-dot"
              :class="{ active: idx === currentIndex }"
              @click.stop="currentIndex = idx"
              :title="`Ir para projeto ${idx + 1}`"
            ></span>
          </div>
        </div>

        <!-- Right Column: Interactive Download CV Dropdown + View All Projects Link -->
        <div class="projects-right-actions">
          <!-- Single Interactive CV Download Button with Dropdown -->
          <div class="cv-download-dropdown-wrapper">
            <button
              class="cv-main-dropdown-btn"
              @click="toggleCvDropdown"
            >
              <Download :size="18" />
              <span>Baixar Currículo</span>
              <ChevronDown :size="16" :class="{ 'rotate-icon': isCvDropdownOpen }" />
            </button>

            <!-- Dropdown Options Menu -->
            <div v-if="isCvDropdownOpen" class="cv-options-popover">
              <a
                href="/Curriculo_formatado_PT.pdf"
                download="Curriculo_Emilly_Satiro_PT.pdf"
                class="cv-option-item"
                @click="isCvDropdownOpen = false"
              >
                <div class="option-flag">🇧🇷</div>
                <div class="option-info">
                  <span class="option-title">Versão em Português</span>
                  <span class="option-sub">Formato PDF · PT-BR</span>
                </div>
              </a>

              <a
                href="/Curriculo_formatado_ingles.pdf"
                download="Resume_Emilly_Satiro_EN.pdf"
                class="cv-option-item"
                @click="isCvDropdownOpen = false"
              >
                <div class="option-flag">🇺🇸</div>
                <div class="option-info">
                  <span class="option-title">English Version</span>
                  <span class="option-sub">Format PDF · EN-US</span>
                </div>
              </a>
            </div>
          </div>

          <!-- Link to Full Projects Page -->
          <router-link to="/projetos" class="view-all-projects-primary-btn">
            <span>Ver Todos os Projetos</span>
            <ArrowRight :size="18" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Download, ChevronDown, ArrowRight } from '@lucide/vue'

export default {
  name: 'ProjectsSection',
  components: {
    Download,
    ChevronDown,
    ArrowRight,
  },
  data() {
    return {
      currentIndex: 0,
      isFlipping: false,
      isShuffling: false,
      hasAutoShuffled: false,
      isCvDropdownOpen: false,
      observer: null,
      experiences: [
        {
          id: 1,
          title: 'Desenvolvedora Front-end',
          company: 'IAtrain · Estágio Remoto',
          period: 'mar. 2026 — jun. 2026',
          color: 'cyan',
        },
        {
          id: 2,
          title: 'Coautora & Dev Full Stack',
          company: 'Sistema PREMAUT (UFPI)',
          period: 'mar. 2026 — atual',
          color: 'purple',
        },
        {
          id: 3,
          title: 'UI/UX Designer',
          company: 'Projeto SINFO 2026 (UFPI)',
          period: 'mar. 2026 — jun. 2026',
          color: 'blue',
        },
        {
          id: 4,
          title: 'Diretora de Marketing & Front-end',
          company: 'Juá Soluções em Tecnologia',
          period: 'mai. 2025 — atual',
          color: 'rose',
        },
        {
          id: 5,
          title: 'UI/UX Designer',
          company: 'Site Institucional Juá',
          period: 'mar. 2025 — ago. 2025',
          color: 'cyan',
        },
        {
          id: 6,
          title: 'Diretora de Ensino',
          company: 'Liga Acadêmica de SI (LADS)',
          period: 'abr. 2025 — mai. 2026',
          color: 'amber',
        },
        {
          id: 7,
          title: 'Desenvolvedora Full Stack',
          company: 'Projeto Patocast (UFPI)',
          period: 'jun. 2024',
          color: 'purple',
        },
        {
          id: 8,
          title: 'Desenvolvedora Full Stack & UI/UX',
          company: 'Emilly Sátiro · Open for Hire',
          period: '2026 — ∞',
          color: 'rose',
          isSpecial: true,
        },
      ],
    }
  },
  computed: {
    getVisibleDeck() {
      const len = this.experiences.length
      const deck = []
      for (let i = 0; i < Math.min(3, len); i++) {
        const index = (this.currentIndex + i) % len
        deck.push(this.experiences[index])
      }
      return deck
    },
  },
  mounted() {
    this.initScrollObserver()
    document.addEventListener('click', this.handleOutsideClick)
  },
  beforeUnmount() {
    if (this.observer) this.observer.disconnect()
    document.removeEventListener('click', this.handleOutsideClick)
  },
  methods: {
    initScrollObserver() {
      if (!('IntersectionObserver' in window)) return
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.hasAutoShuffled) {
              this.hasAutoShuffled = true
              this.triggerShuffle()
            }
          })
        },
        { threshold: 0.35 }
      )
      if (this.$refs.projectsSection) {
        this.observer.observe(this.$refs.projectsSection)
      }
    },
    triggerShuffle() {
      if (this.isShuffling) return
      this.isShuffling = true
      setTimeout(() => {
        this.isShuffling = false
      }, 1600)
    },
    nextCard() {
      if (this.isFlipping || this.isShuffling) return
      this.isFlipping = true
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.experiences.length
        this.isFlipping = false
      }, 250)
    },
    toggleCvDropdown(e) {
      e.stopPropagation()
      this.isCvDropdownOpen = !this.isCvDropdownOpen
    },
    handleOutsideClick(e) {
      if (!e.target.closest('.cv-download-dropdown-wrapper')) {
        this.isCvDropdownOpen = false
      }
    },
    getCardStyle(index) {
      if (this.isShuffling) {
        if (index === 0) {
          return {
            zIndex: 10,
            transform: 'translate3d(-110px, -30px, 0) rotate(-18deg) scale(0.94)',
            opacity: 1,
            transition: 'transform 1.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 1.6s ease',
          }
        } else if (index === 1) {
          return {
            zIndex: 9,
            transform: 'translate3d(115px, -40px, 0) rotate(20deg) scale(0.92)',
            opacity: 0.95,
            transition: 'transform 1.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 1.6s ease',
          }
        } else if (index === 2) {
          return {
            zIndex: 8,
            transform: 'translate3d(0px, 55px, 0) rotate(-10deg) scale(0.88)',
            opacity: 0.85,
            transition: 'transform 1.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 1.6s ease',
          }
        }
      }

      if (index === 0) {
        return {
          zIndex: 10,
          transform: 'translate3d(0, 0, 0) scale(1) rotate(0deg)',
          opacity: 1,
          transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease',
        }
      } else if (index === 1) {
        return {
          zIndex: 9,
          transform: 'translate3d(16px, 16px, 0) scale(0.96) rotate(3.5deg)',
          opacity: 0.9,
          transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease',
        }
      } else if (index === 2) {
        return {
          zIndex: 8,
          transform: 'translate3d(32px, 32px, 0) scale(0.92) rotate(-3.5deg)',
          opacity: 0.78,
          transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease',
        }
      }
      return {}
    },
  },
}
</script>

<style scoped>
.projects-section {
  position: relative;
  padding: 6.5rem 0 7.5rem 0;
  z-index: 1;
  background: #0b0a0c;
  overflow: hidden;
}

.wide-container {
  width: min(1200px, calc(100% - 3.5rem));
  margin: 0 auto;
}

.static-bat-mascot-bg {
  position: absolute;
  top: 10%;
  right: -2%;
  width: 480px;
  height: 480px;
  pointer-events: none;
  z-index: 0;
  opacity: 0.12;
  transform: rotate(-12deg);
  filter: drop-shadow(0 0 25px rgba(151, 180, 222, 0.3));
}

.static-bat-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.relative-z {
  position: relative;
  z-index: 3;
}

.projects-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 4rem;
}

.projects-title {
  font-family: var(--font-title, 'Cinzel', serif);
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  line-height: 1.25;
  color: var(--alabaster, #f0ebe5);
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: -0.01em;
}

.projects-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: var(--muted, #d0c6b8);
  margin: 0 0 0.75rem 0;
}

.projects-header-line {
  width: 70px;
  height: 2px;
  background: var(--sky, #97b4de);
  margin: 0.25rem auto 0 auto;
  opacity: 0.85;
}

/* 2-Column Layout: Cards Left, Actions Right */
.projects-2col-layout {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 4rem;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
}

.deck-left-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

/* Pokémon Card Deck Stage */
.pokemon-card-deck {
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 280px;
  margin: 0 auto;
  cursor: pointer;
  perspective: 1000px;
}

/* Vibrant Colored Pokémon Trading Cards */
.pokemon-card-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 8px;
  border-radius: 14px !important;
  border: 2px solid rgba(255, 255, 255, 0.4);
  user-select: none;
}

.pokemon-card-item.card-theme-cyan {
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(6, 182, 212, 0.4);
}

.pokemon-card-item.card-theme-purple {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #6d28d9 100%);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(139, 92, 246, 0.4);
}

.pokemon-card-item.card-theme-blue {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(59, 130, 246, 0.4);
}

.pokemon-card-item.card-theme-rose {
  background: linear-gradient(135deg, #f43f5e 0%, #e11d48 50%, #be123c 100%);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(244, 63, 94, 0.4);
}

.pokemon-card-item.card-theme-amber {
  background: linear-gradient(135deg, #d97706 0%, #b45309 50%, #78350f 100%);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(217, 119, 6, 0.4);
}

.pokemon-card-item:hover.top-active {
  transform: translateY(-8px) scale(1.03) !important;
  border-color: #ffffff !important;
  box-shadow: 0 30px 75px rgba(0, 0, 0, 0.98), 0 0 45px rgba(255, 255, 255, 0.5) !important;
}

.pokemon-card-item.is-flipping {
  transform: translate3d(-150px, -60px, 0) rotate(-20deg) scale(0.85) !important;
  opacity: 0 !important;
}

/* Inner Frame of the Card */
.card-inner-frame {
  width: 100%;
  height: 100%;
  border-radius: 10px !important;
  background: rgba(15, 14, 18, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 1.1rem 1.35rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.code-window-dots {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.dot-red { background: #ff5f56; }
.dot-yellow { background: #ffbd2e; }
.dot-green { background: #27c93f; }

.code-file-name {
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.74rem;
  color: #a0aec0;
  margin-left: 0.45rem;
}

.card-period-tag {
  font-family: 'Inter', sans-serif;
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--sky, #97b4de);
  letter-spacing: 0.05em;
}

/* Code Block Formatted Body */
.card-code-block {
  background: #0d0c0f;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px !important;
  padding: 0.9rem 1.15rem;
  margin: 0.4rem 0;
  overflow: hidden;
}

.code-pre {
  margin: 0;
  font-family: 'Fira Code', 'JetBrains Mono', 'Consolas', monospace;
  font-size: 0.85rem;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
}

.code-kw { color: #f43f5e; font-weight: 700; }
.code-var { color: #60a5fa; }
.code-key { color: #38bdf8; }
.code-str { color: #4ade80; }
.code-fn { color: #f59e0b; font-weight: 700; }
.code-log { color: #60a5fa; }

.deck-dots-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1.75rem;
}

.deck-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(240, 235, 229, 0.2);
  cursor: pointer;
  transition: all 0.25s ease;
}

.deck-dot.active {
  background: var(--sky, #97b4de);
  transform: scale(1.3);
  box-shadow: 0 0 10px var(--sky, #97b4de);
}

/* Right Column: CV Download Dropdown & Full Projects Page Button */
.projects-right-actions {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
}

.cv-download-dropdown-wrapper {
  position: relative;
  width: 100%;
}

.cv-main-dropdown-btn {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.85rem 1.2rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(240, 235, 229, 0.18);
  color: var(--alabaster, #f0ebe5);
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  border-radius: 0 !important;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cv-main-dropdown-btn:hover {
  background: rgba(151, 180, 222, 0.15);
  border-color: var(--sky, #97b4de);
  color: var(--sky, #97b4de);
}

.rotate-icon {
  transform: rotate(180deg);
  transition: transform 0.25s ease;
}

.cv-options-popover {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: #17151a;
  border: 1px solid rgba(240, 235, 229, 0.2);
  border-radius: 0 !important;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.8);
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  z-index: 20;
  animation: popIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes popIn {
  0% { opacity: 0; transform: translateY(-8px); }
  100% { opacity: 1; transform: translateY(0); }
}

.cv-option-item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.65rem 0.85rem;
  border-radius: 0 !important;
  color: var(--alabaster, #f0ebe5);
  text-decoration: none;
  transition: background 0.25s ease;
}

.cv-option-item:hover {
  background: rgba(151, 180, 222, 0.15);
}

.option-flag {
  font-size: 1.25rem;
}

.option-info {
  display: flex;
  flex-direction: column;
}

.option-title {
  font-family: 'Inter', sans-serif;
  font-size: 0.84rem;
  font-weight: 700;
  color: var(--alabaster, #f0ebe5);
}

.option-sub {
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  color: var(--muted, #d0c6b8);
}

.view-all-projects-primary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.85rem 1.2rem;
  background: var(--blue, #263a99);
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 0 !important;
  box-shadow: 0 4px 18px rgba(38, 58, 153, 0.35);
  transition: all 0.3s ease;
}

.view-all-projects-primary-btn:hover {
  background: #1d2d7c;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(38, 58, 153, 0.5);
}

@media (max-width: 860px) {
  .projects-2col-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .pokemon-card-deck {
    max-width: 100%;
  }

  .projects-right-actions {
    max-width: 320px;
    margin: 0 auto;
  }
}
</style>
