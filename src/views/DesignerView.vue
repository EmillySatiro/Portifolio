<template>
  <main class="route-page designer-under-construction-page">
    <div class="container">
      <div class="construction-content-box">
        <!-- Large Bat Mascot Image -->
        <div class="large-bat-wrapper">
          <img
            src="/a8973100-1174-11ee-9e14-23aa8edbd820.svg"
            alt="Mascote Morcego"
            class="large-bat-img"
          />
        </div>

        <span class="construction-badge">UI/UX & DESIGN</span>
        <h1 class="construction-title">PÁGINA EM CONSTRUÇÃO</h1>
        <p class="construction-subtitle">
          Esta página está sendo preparada com novos estudos de caso de interface, protótipos interativos no Figma e design systems em breve.
        </p>

        <router-link to="/" class="back-home-btn">
          <ArrowLeft :size="18" />
          <span>Voltar ao Início</span>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
import { ArrowLeft } from '@lucide/vue'

export default {
  name: 'DesignerView',
  components: {
    ArrowLeft,
  },
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>

<style scoped>
.designer-under-construction-page {
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 0 6rem 0;
  background: #0b0a0c;
  color: var(--alabaster, #f0ebe5);
  text-align: center;
}

.construction-content-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 650px;
  margin: 0 auto;
}

.large-bat-wrapper {
  width: 220px;
  height: 220px;
  margin-bottom: 2rem;
  animation: batHover 3s ease-in-out infinite alternate;
  filter: drop-shadow(0 15px 35px rgba(151, 180, 222, 0.35));
}

.large-bat-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@keyframes batHover {
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-12px) scale(1.05); }
  100% { transform: translateY(6px) scale(0.97); }
}

.construction-badge {
  font-family: 'Cinzel', serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--sky, #97b4de);
  margin-bottom: 0.6rem;
}

.construction-title {
  font-family: var(--font-title, 'Cinzel', serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--alabaster, #f0ebe5);
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.construction-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: var(--pastel, #dcd0be);
  line-height: 1.6;
  margin: 0 0 2.5rem 0;
}

.back-home-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.6rem;
  background: var(--blue, #263a99);
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 8px !important;
  box-shadow: 0 4px 20px rgba(38, 58, 153, 0.4);
  transition: all 0.25s ease;
}

.back-home-btn:hover {
  background: #1d2d7c;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(38, 58, 153, 0.6);
}
</style>
