<template>
  <footer class="site-footer">
    <div class="container footer-container">
      <!-- Left: Brand with Bat logo -->
      <div class="footer-left">
        <span class="brand-bat">
          <img
            src="/a8973100-1174-11ee-9e14-23aa8edbd820.svg"
            alt="Morcego"
            width="20"
            height="16"
          />
        </span>
        <span class="brand-name">EMÍLLY SÁTIRO</span>
      </div>

      <!-- Center: Copyright -->
      <div class="footer-center">
        <p class="footer-copy">© 2026 Todos os direitos reservados.</p>
      </div>

      <!-- Right: Social Links + Scroll Top Button -->
      <div class="footer-right">
        <div class="footer-socials">
          <a
            href="https://github.com/EmillySatiro"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-social-link"
            title="GitHub"
            style="border-radius: 50% !important;"
          >
            <BrandIcon name="Github" :size="16" />
          </a>
          <a
            href="https://www.linkedin.com/in/emilly-s%C3%A1tiro-94912a369/"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-social-link"
            title="LinkedIn"
            style="border-radius: 50% !important;"
          >
            <BrandIcon name="Linkedin" :size="16" />
          </a>
        </div>

        <button
          class="scroll-top-btn"
          title="Voltar ao topo"
          style="border-radius: 50% !important;"
          @click="scrollToTop"
        >
          <ArrowUp :size="18" />
        </button>
      </div>
    </div>
  </footer>
</template>

<script>
import { ArrowUp } from '@lucide/vue'
import BrandIcon from './BrandIcon.vue'

export default {
  name: 'SiteFooter',
  components: {
    ArrowUp,
    BrandIcon,
  },
  computed: {
    isLightThemePage() {
      return this.$route.path === '/projetos' || this.$route.path === '/designer'
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>

<style scoped>
.site-footer {
  position: relative;
  padding: 1.6rem 0;
  border-top: 1px solid var(--line, rgba(240, 235, 229, 0.08));
  background: #151314;
  z-index: 1;
}

.light-theme-footer {
  background: #ffffff !important;
  border-top: 1px solid rgba(0, 0, 0, 0.08) !important;
}

.light-theme-footer .brand-name {
  color: #171516 !important;
}

.light-theme-footer .footer-copy {
  color: #64748b !important;
}

.light-theme-footer .footer-social-link {
  background: rgba(0, 0, 0, 0.03) !important;
  border-color: rgba(0, 0, 0, 0.12) !important;
  color: #4a5568 !important;
}

.light-theme-footer .footer-social-link:hover {
  background: rgba(38, 58, 153, 0.1) !important;
  border-color: #263a99 !important;
  color: #263a99 !important;
}

.light-theme-footer .scroll-top-btn {
  background: #263a99 !important;
  color: #ffffff !important;
  border-color: #263a99 !important;
}

.footer-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 0.55rem;
}

.brand-bat {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.85;
}

.brand-name {
  font-family: 'Cinzel', Georgia, serif;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--alabaster, #f0ebe5);
  text-transform: uppercase;
}

.footer-center {
  display: flex;
  align-items: center;
}

.footer-copy {
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  color: var(--muted, #d0c6b8);
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 1.1rem;
}

.footer-socials {
  display: flex;
  align-items: center;
  gap: 0.55rem;
}

.footer-social-link {
  width: 36px;
  height: 36px;
  border-radius: 50% !important;
  border: 1px solid var(--line, rgba(240, 235, 229, 0.15));
  background: rgba(255, 255, 255, 0.03);
  color: var(--muted, #d0c6b8);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.25s ease;
}

.footer-social-link:hover {
  background: rgba(151, 180, 222, 0.15);
  border-color: var(--sky, #97b4de);
  color: var(--sky, #97b4de);
  transform: translateY(-2px);
}

.scroll-top-btn {
  width: 38px;
  height: 38px;
  border-radius: 50% !important;
  border: 1px solid rgba(151, 180, 222, 0.35);
  background: rgba(38, 58, 153, 0.45);
  color: var(--sky, #97b4de);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
}

.scroll-top-btn:hover {
  background: var(--blue, #263a99);
  color: var(--alabaster, #f0ebe5);
  border-color: var(--sky, #97b4de);
  transform: translateY(-3px);
  box-shadow: 0 0 16px rgba(151, 180, 222, 0.4);
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
    text-align: center;
  }
}
</style>
