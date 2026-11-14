<template>
  <main class="route-page under-construction-page">
    <div class="container">
      <!-- Top Action Bar with Academic Links -->
      <div class="top-action-bar">
        <a
          href="https://scholar.google.com/citations?user=e_URIYQAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          class="action-pill-btn primary"
        >
          <span>Google Acadêmico</span>
          <ExternalLink :size="14" />
        </a>
        <a
          href="http://lattes.cnpq.br"
          target="_blank"
          rel="noopener noreferrer"
          class="action-pill-btn secondary"
        >
          <span>Currículo Lattes (CNPq)</span>
          <ExternalLink :size="14" />
        </a>
      </div>

      <!-- Construction Card Box -->
      <div class="construction-content-box">
        <!-- Large Bat Mascot Image -->
        <div class="large-bat-wrapper">
          <img
            src="/a8973100-1174-11ee-9e14-23aa8edbd820.svg"
            alt="Mascote Morcego"
            class="large-bat-img"
            loading="lazy"
            decoding="async"
            width="260"
            height="200"
          />
        </div>

        <span class="construction-badge">PESQUISA CIENTÍFICA & IA</span>
        <h1 class="construction-title">PÁGINA EM CONSTRUÇÃO</h1>
        <p class="construction-subtitle">
          Esta página está sendo preparada com novidades, artigos acadêmicos e pesquisas em visão computacional e inteligência artificial em breve.
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
import { ArrowLeft, ExternalLink } from '@lucide/vue'

export default {
  name: 'ResearchView',
  components: {
    ArrowLeft,
    ExternalLink,
  },
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>

<style scoped>
.under-construction-page {
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem 0 6rem 0;
  background: #0b0a0c;
  color: var(--alabaster, #f0ebe5);
  text-align: center;
}

.top-action-bar {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.action-pill-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.65rem 1.35rem;
  border-radius: 9999px !important;
  font-family: 'Inter', sans-serif;
  font-size: 0.86rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
}

.action-pill-btn.primary {
  background: var(--blue, #263a99);
  color: #ffffff;
  box-shadow: 0 4px 18px rgba(38, 58, 153, 0.4);
}

.action-pill-btn.primary:hover {
  background: #1d2d7c;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(38, 58, 153, 0.55);
}

.action-pill-btn.secondary {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line, rgba(240, 235, 229, 0.15));
  color: var(--alabaster, #f0ebe5);
}

.action-pill-btn.secondary:hover {
  background: rgba(151, 180, 222, 0.15);
  border-color: var(--sky, #97b4de);
  color: var(--sky, #97b4de);
  transform: translateY(-2px);
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
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--line, rgba(240, 235, 229, 0.18));
  color: var(--alabaster, #f0ebe5);
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 8px !important;
  transition: all 0.25s ease;
}

.back-home-btn:hover {
  background: rgba(151, 180, 222, 0.15);
  border-color: var(--sky, #97b4de);
  color: var(--sky, #97b4de);
  transform: translateY(-3px);
}
</style>
