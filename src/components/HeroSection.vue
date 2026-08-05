<template>
  <section id="home" class="hero-section">
    <!-- Ambient Backdrop Light Glow -->
    <div class="hero-ambient-glow" aria-hidden="true"></div>

    <div class="container hero-container">
      <!-- CENTER BLOCK: Exactly in the middle of the screen (50% top, 50% left) -->
      <div class="hero-center-block">
        <!-- Emílly Sátiro slightly ABOVE PORTFÓLIO with smaller font size -->
        <div class="hero-author-name">
          Emílly Sátiro
        </div>
        <!-- Huge Main Title PORTFÓLIO -->
        <h1 class="hero-main-title">
          PORTFÓLIO
        </h1>
      </div>

      <!-- BOTTOM BLOCK: Positioned near the bottom of the section -->
      <div class="hero-bottom-block">
        <!-- Dynamic Role Ticker -->
        <div class="hero-role-ticker">
          <span class="role-static">Atuação —</span>
          <span class="role-dynamic-wrapper">
            <Transition name="role-slide" mode="out-in">
              <span :key="currentRoleIndex" class="role-dynamic-text">
                {{ roles[currentRoleIndex] }}
              </span>
            </Transition>
          </span>
        </div>

        <!-- Action Buttons -->
        <div class="hero-cta-group">
          <a href="#projects" class="hero-btn primary-btn">
            <span>Ver Projetos</span>
            <ArrowRight :size="16" />
          </a>
          <a href="#contact" class="hero-btn secondary-btn">
            <span>Contato</span>
            <Mail :size="16" />
          </a>
          <a
            href="https://github.com/EmillySatiro"
            target="_blank"
            rel="noopener noreferrer"
            class="hero-btn icon-btn"
            title="GitHub"
          >
            <BrandIcon name="Github" :size="18" />
          </a>
          <a
            href="https://www.linkedin.com/in/emilly-s%C3%A1tiro-94912a369/"
            target="_blank"
            rel="noopener noreferrer"
            class="hero-btn icon-btn"
            title="LinkedIn"
          >
            <BrandIcon name="Linkedin" :size="18" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ArrowRight, Mail } from '@lucide/vue'
import BrandIcon from './BrandIcon.vue'

export default {
  name: 'HeroSection',
  components: {
    ArrowRight,
    Mail,
    BrandIcon,
  },
  data() {
    return {
      roles: [
        'Pesquisadora em Visão Computacional',
        'Desenvolvedora Front-end',
        'Desenvolvedora Full Stack',
        'UI/UX Designer',
        'UI/UX & Prototipação',
      ],
      currentRoleIndex: 0,
      tickerTimer: null,
    }
  },
  mounted() {
    this.tickerTimer = setInterval(() => {
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length
    }, 3600)
  },
  beforeUnmount() {
    if (this.tickerTimer) clearInterval(this.tickerTimer)
  },
}
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 580px;
  max-height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-ambient-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(750px, 90vw);
  height: 380px;
  background: radial-gradient(
    ellipse at center,
    rgba(38, 58, 153, 0.28) 0%,
    rgba(151, 180, 222, 0.08) 55%,
    transparent 80%
  );
  filter: blur(85px);
  pointer-events: none;
  z-index: 0;
}

.hero-container {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}

/* CENTER BLOCK: EXACTLY IN THE MIDDLE OF THE SCREEN */
.hero-center-block {
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 0 1rem;
}

/* Emílly Sátiro directly ABOVE PORTFÓLIO with smaller, elegant size */
.hero-author-name {
  font-family: 'Cinzel', Georgia, serif;
  font-size: clamp(1.15rem, 2.2vw, 1.5rem);
  font-weight: 900; /* font-black */
  line-height: 1.1;
  color: var(--alabaster, #f0ebe5);
  margin-bottom: 0.35rem;
  letter-spacing: 0.02em;
}

/* Huge PORTFÓLIO title */
.hero-main-title {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: clamp(3rem, 7.5vw, 5.2rem); /* text-6xl */
  font-weight: 700; /* font-bold */
  line-height: 1;
  letter-spacing: 0.22em; /* tracking-[13.09px] */
  color: var(--sky, #97b4de);
  margin: 0;
  text-transform: uppercase;
  text-shadow: 0 0 35px rgba(151, 180, 222, 0.22);
}

/* BOTTOM BLOCK: POSITIONED NEAR THE BOTTOM OF THE HERO SECTION */
.hero-bottom-block {
  position: absolute;
  bottom: 2.25rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 0 1rem;
}

.hero-role-ticker {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(1.1rem, 2vw, 1.4rem); /* text-2xl */
  font-weight: 600; /* font-semibold */
  line-height: 1.4;
  margin-bottom: 1.15rem;
}

.role-static {
  opacity: 0.75;
  color: var(--paper-soft, #dcd0be);
}

.role-dynamic-wrapper {
  display: inline-block;
  color: var(--sky, #97b4de);
  border-bottom: 0.75px solid var(--sky, #97b4de);
  padding-bottom: 1px;
}

.role-dynamic-text {
  display: inline-block;
}

.hero-cta-group {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.875rem; /* gap-3.5 */
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0 !important;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
  line-height: 1.5;
  text-decoration: none;
  transition: all 0.25s ease;
  cursor: pointer;
}

.primary-btn {
  padding: 0.75rem 1.5rem; /* px-6 py-3 */
  background: linear-gradient(135deg, var(--blue, #263a99), #1c2b75);
  color: var(--alabaster, #f0ebe5);
  box-shadow: 0px 4px 18px 0px rgba(38, 58, 153, 0.35);
  outline: 1px solid rgba(151, 180, 222, 0.25);
  border: none;
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0px 8px 25px 0px rgba(38, 58, 153, 0.5);
}

.secondary-btn {
  padding: 0.75rem 1.5rem; /* px-6 py-3 */
  background: rgba(255, 255, 255, 0.05); /* bg-white/5 */
  outline: 1px solid rgba(240, 235, 229, 0.1);
  color: var(--alabaster, #f0ebe5);
  backdrop-filter: blur(5px);
  border: none;
}

.secondary-btn:hover {
  background: rgba(151, 180, 222, 0.12);
  outline-color: var(--sky, #97b4de);
  color: var(--sky, #97b4de);
  transform: translateY(-2px);
}

.icon-btn {
  padding: 0.75rem; /* p-3 */
  background: rgba(255, 255, 255, 0.05); /* bg-white/5 */
  outline: 1px solid rgba(240, 235, 229, 0.1);
  color: var(--alabaster, #f0ebe5);
  border: none;
}

.icon-btn:hover {
  background: rgba(151, 180, 222, 0.12);
  outline-color: var(--sky, #97b4de);
  color: var(--sky, #97b4de);
  transform: translateY(-2px);
}

.role-slide-enter-active,
.role-slide-leave-active {
  transition: all 0.35s ease;
}

.role-slide-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.role-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
