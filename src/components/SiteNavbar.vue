<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled }">
    <!-- Top Blue Scroll Progress Bar -->
    <div
      class="scroll-progress-bar"
      :style="{ width: scrollProgress + '%' }"
      aria-hidden="true"
    ></div>

    <nav class="nav container" aria-label="Navegação principal">
      <!-- Brand Logo -->
      <RouterLink to="/" class="nav-brand" @click="closeMenu">
        <span class="brand-bat-icon">
          <img src="/a8973100-1174-11ee-9e14-23aa8edbd820.svg" alt="Morcego logo" width="26" height="22" />
        </span>
        <span class="brand-text">Emílly Sátiro</span>
      </RouterLink>

      <!-- Desktop Nav Items (Pure text without rectangle wrapper) -->
      <ul class="nav-list" :class="{ 'is-open': isMenuOpen }">
        <li v-for="item in items" :key="item.name">
          <RouterLink
            :to="item.to"
            class="nav-link"
            :class="{ active: isActive(item.to) }"
            @click="closeMenu"
          >
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>

      <!-- Mobile Menu Toggle Button -->
      <div class="nav-actions">
        <button
          class="menu-button"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-label="Abrir menu de navegação"
          @click="toggleMenu"
        >
          <Menu v-if="!isMenuOpen" :size="20" />
          <X v-else :size="20" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'
import { Menu, X } from '@lucide/vue'

export default {
  name: 'SiteNavbar',
  components: {
    RouterLink,
    Menu,
    X,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false,
      activeHash: '',
      scrollProgress: 0,
    }
  },
  mounted() {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll, { passive: true })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      this.scrollProgress = height > 0 ? (winScroll / height) * 100 : 0

      this.isScrolled = winScroll > 25
      this.updateActiveSection()
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    isActive(to) {
      const target = typeof to === 'string' ? { path: to, hash: '' } : to
      if (target.path !== this.$route.path) return false
      if (!target.hash) return !this.activeHash
      if (target.hash === '#home') return this.activeHash === '' || this.activeHash === '#home'
      return this.activeHash === target.hash
    },
    updateActiveSection() {
      if (this.$route.path !== '/') {
        this.activeHash = ''
        return
      }

      const offset = window.innerHeight * 0.35
      const sections = ['home', 'about', 'curriculum', 'projects', 'contact']
        .map((id) => document.getElementById(id))
        .filter(Boolean)

      let current = sections[0]
      sections.forEach((section) => {
        if (section.offsetTop <= window.scrollY + offset) current = section
      })

      this.activeHash = current ? `#${current.id}` : '#home'
    },
  },
}
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 990;
  transition: all 0.3s ease;
  padding: 1.1rem 0 1.5rem 0;
  background: linear-gradient(
    to bottom,
    rgba(23, 21, 22, 0.96) 0%,
    rgba(23, 21, 22, 0.75) 60%,
    rgba(23, 21, 22, 0) 100%
  );
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: none;
  pointer-events: auto;
}

.scroll-progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  background: var(--sky, #97b4de);
  box-shadow: 0 0 12px var(--sky, #97b4de), 0 0 6px var(--blue, #263a99);
  z-index: 1000;
  transition: width 0.1s ease-out;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  text-decoration: none;
  color: var(--text, #f0ebe5);
  font-family: 'Cinzel', serif;
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.01em;
}

.brand-bat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease;
}

.nav-brand:hover .brand-bat-icon {
  transform: translateY(-2px) rotate(-5deg);
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
}

.nav-link {
  position: relative;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--muted, #d0c6b8);
  text-decoration: none;
  padding: 0.35rem 0.25rem;
  transition: color 0.25s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--sky, #97b4de);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--sky, #97b4de);
  box-shadow: 0 0 8px var(--sky, #97b4de);
}

.nav-actions {
  display: flex;
  align-items: center;
}

.menu-button {
  width: 38px;
  height: 38px;
  border-radius: 0 !important;
  border: 1px solid var(--line, rgba(240, 235, 229, 0.15));
  background: rgba(255, 255, 255, 0.04);
  color: var(--text, #f0ebe5);
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
}

.menu-button:hover {
  background: rgba(151, 180, 222, 0.15);
  border-color: var(--sky, #97b4de);
  color: var(--sky, #97b4de);
}

@media (max-width: 868px) {
  .menu-button {
    display: flex;
  }

  .nav-list {
    position: fixed;
    top: 58px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    background: var(--ink, #171516);
    border-bottom: 1px solid var(--line, rgba(240, 235, 229, 0.15));
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.9);
    opacity: 0;
    pointer-events: none;
    transform: translateY(-8px);
    transition: all 0.25s ease;
  }

  .nav-list.is-open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .nav-link {
    font-size: 1rem;
  }
}
</style>
