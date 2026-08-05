<template>
  <section id="projects-teaser" class="section projects-teaser-section">
    <div class="container">
      <!-- Section Header -->
      <div class="editorial-header-row">
        <span class="editorial-number">03</span>
        <div class="editorial-header-text">
          <span class="editorial-tag">Portfólio & Demonstração</span>
          <h2 class="editorial-title">Engenharia de Software, Interfaces & Protótipos</h2>
        </div>
      </div>

      <!-- Asymmetric Teaser Composition -->
      <div class="teaser-composition-grid">
        <!-- Visual Teaser Showcase Banner -->
        <div class="teaser-visual-banner">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
            alt="Preview de Projetos de TI"
            class="teaser-img"
          />
          <div class="teaser-banner-overlay">
            <span class="teaser-badge">Projetos em Destaque</span>
            <h3 class="teaser-banner-title">Projeto PREMAUT & Site da Juá</h3>
            <p class="teaser-banner-desc">
              Sistemas web full stack desenvolvidos com Vue 3, Node.js, PostgreSQL e protótipos de alta fidelidade no Figma.
            </p>
          </div>
        </div>

        <!-- Teaser Content & CTA Deck -->
        <div class="teaser-content-deck">
          <div class="teaser-callout-box">
            <span class="callout-number">20+</span>
            <p class="callout-text">
              Aplicações web, APIs REST, bancos de dados e interfaces projetadas para alta performance e acessibilidade.
            </p>
          </div>

          <div class="teaser-cta-links">
            <RouterLink to="/designer" class="teaser-link-btn primary">
              <span>Explorar Trabalhos de UI/UX & Design</span>
              <ArrowRight :size="18" />
            </RouterLink>
            <RouterLink to="/pesquisa" class="teaser-link-btn secondary">
              <span>Ver Pesquisas Científicas em IA</span>
              <ArrowRight :size="18" />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { RouterLink } from 'vue-router'
import { ArrowRight } from '@lucide/vue'

export default {
  name: 'ProjectsTeaserSection',
  components: {
    RouterLink,
    ArrowRight,
  },
}
</script>

<style scoped>
.projects-teaser-section {
  position: relative;
  padding: 6rem 0;
  z-index: 1;
  border-top: 1px solid var(--line, rgba(240, 235, 229, 0.12));
}

.editorial-header-row {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 3.5rem;
}

.editorial-number {
  font-family: 'Cinzel', serif;
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--sky, #97b4de);
  opacity: 0.6;
  line-height: 1;
}

.editorial-tag {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--sky, #97b4de);
  display: block;
  margin-bottom: 0.35rem;
}

.editorial-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 700;
  color: var(--alabaster, #f0ebe5);
  margin: 0;
}

.teaser-composition-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 3rem;
  align-items: center;
}

.teaser-visual-banner {
  position: relative;
  width: 100%;
  height: 380px;
  border-radius: 0 !important;
  overflow: hidden;
  border: 1px solid var(--line, rgba(240, 235, 229, 0.15));
}

.teaser-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.65) contrast(110%);
  transition: transform 0.5s ease, filter 0.5s ease;
}

.teaser-visual-banner:hover .teaser-img {
  transform: scale(1.04);
  filter: brightness(0.8) contrast(100%);
}

.teaser-banner-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(15, 15, 18, 0.95) 0%, rgba(15, 15, 18, 0.4) 70%, transparent 100%);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.teaser-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--sky, #97b4de);
}

.teaser-banner-title {
  font-family: 'Cinzel', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--alabaster, #f0ebe5);
  margin: 0;
}

.teaser-banner-desc {
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--muted, #d0c6b8);
  margin: 0;
  max-width: 48ch;
}

.teaser-content-deck {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.teaser-callout-box {
  padding: 1.75rem;
  border-left: 2px solid var(--sky, #97b4de);
  background: rgba(255, 255, 255, 0.02);
}

.callout-number {
  font-family: 'Cinzel', serif;
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--sky, #97b4de);
  display: block;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.callout-text {
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--muted, #d0c6b8);
  margin: 0;
}

.teaser-cta-links {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.teaser-link-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 1.25rem;
  border-radius: 0 !important;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
}

.teaser-link-btn.primary {
  background: linear-gradient(135deg, var(--blue, #263a99), #1c2b75);
  color: var(--alabaster, #f0ebe5);
  border: 1px solid rgba(151, 180, 222, 0.25);
}

.teaser-link-btn.primary:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 18px rgba(38, 58, 153, 0.4);
}

.teaser-link-btn.secondary {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line, rgba(240, 235, 229, 0.15));
  color: var(--alabaster, #f0ebe5);
}

.teaser-link-btn.secondary:hover {
  background: rgba(151, 180, 222, 0.08);
  border-color: var(--sky, #97b4de);
  color: var(--sky, #97b4de);
  transform: translateX(4px);
}

@media (max-width: 900px) {
  .teaser-composition-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
</style>
