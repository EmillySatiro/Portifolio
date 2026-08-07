<template>
  <section id="home" class="hero-section">
    <!-- Ambient Backdrop Light Glow -->
    <div class="hero-ambient-glow" aria-hidden="true"></div>

    <div class="container hero-container">
      <!-- CENTER BLOCK: Exactly in the middle of the screen (50% top, 50% left) -->
      <div class="hero-center-block">
        <!-- Huge Main Title EMÍLLY SÁTIRO -->
        <h1 class="hero-main-title" data-text="EMÍLLY SÁTIRO">
          EMÍLLY SÁTIRO
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

/* Huge EMÍLLY SÁTIRO title - Letreiro Elétrico High-Tech Neon Sign */
.hero-main-title {
  font-family: 'Cinzel', Georgia, serif;
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: 0.12em;
  color: #ffffff;
  margin: 0;
  text-transform: uppercase;
  white-space: nowrap;
  animation: neonLetreiroPulse 10s infinite ease-in-out;
  will-change: text-shadow, color, transform;
}

@keyframes neonLetreiroPulse {
  0% {
    color: #ffffff;
    transform: scale(1);
    text-shadow: 0 0 20px #ffffff, 0 0 40px #97b4de, 0 0 70px #263a99, 0 0 100px rgba(38, 58, 153, 0.5);
  }
  
  /* 3s: Electric Power Spark Burst */
  12% {
    color: #ffffff;
    text-shadow: 0 0 25px #ffffff, 0 0 50px #97b4de, 0 0 85px #263a99;
  }
  13% {
    color: #38bdf8;
    transform: scale(1.015);
    text-shadow: 0 0 35px #38bdf8, 0 0 75px #38bdf8, 0 0 120px #263a99, 0 0 150px #97b4de;
  }
  14% {
    color: #ffffff;
    transform: scale(0.995);
    text-shadow: 0 0 15px #ffffff, 0 0 35px #97b4de;
  }
  15.5% {
    color: #ffffff;
    transform: scale(1.01);
    text-shadow: 0 0 40px #ffffff, 0 0 80px #38bdf8, 0 0 130px #263a99;
  }
  17% {
    color: #ffffff;
    transform: scale(1);
    text-shadow: 0 0 25px #ffffff, 0 0 45px #97b4de, 0 0 75px #263a99;
  }

  /* 9s: Soft Ambient Breathing Glow */
  36% {
    color: #f8fafc;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.95), 0 0 60px rgba(151, 180, 222, 0.75), 0 0 95px rgba(38, 58, 153, 0.45);
  }

  /* 13s: Electric Power Surge #2 */
  52% {
    color: #ffffff;
    text-shadow: 0 0 20px #ffffff, 0 0 40px #97b4de;
  }
  53% {
    color: #38bdf8;
    transform: scale(1.02);
    text-shadow: 0 0 40px #38bdf8, 0 0 85px #38bdf8, 0 0 135px #263a99;
  }
  54% {
    color: #ffffff;
    transform: scale(0.99);
    text-shadow: 0 0 20px #ffffff, 0 0 40px #97b4de;
  }
  55.5% {
    color: #ffffff;
    transform: scale(1.01);
    text-shadow: 0 0 45px #ffffff, 0 0 90px #97b4de, 0 0 140px #263a99;
  }
  57% {
    color: #ffffff;
    transform: scale(1);
    text-shadow: 0 0 25px #ffffff, 0 0 50px #97b4de, 0 0 80px #263a99;
  }

  /* 19s: Soft Ambient Breathing Glow */
  76% {
    color: #f8fafc;
    text-shadow: 0 0 35px rgba(255, 255, 255, 0.9), 0 0 65px rgba(151, 180, 222, 0.7);
  }

  /* 22s: Electric Power Surge #3 */
  88% {
    color: #38bdf8;
    transform: scale(1.015);
    text-shadow: 0 0 35px #38bdf8, 0 0 80px #38bdf8, 0 0 125px #263a99;
  }
  89.5% {
    color: #ffffff;
    transform: scale(1);
    text-shadow: 0 0 30px #ffffff, 0 0 60px #97b4de;
  }

  100% {
    color: #ffffff;
    transform: scale(1);
    text-shadow: 0 0 20px #ffffff, 0 0 40px #97b4de, 0 0 70px #263a99, 0 0 100px rgba(38, 58, 153, 0.5);
  }
}

@media (max-width: 640px) {
  .hero-main-title {
    white-space: normal;
    letter-spacing: 0.08em;
  }
}

@media (max-width: 640px) {
  .hero-main-title {
    white-space: normal;
    letter-spacing: 0.08em;
  }
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
  opacity: 1;
  color: #ffffff;
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
