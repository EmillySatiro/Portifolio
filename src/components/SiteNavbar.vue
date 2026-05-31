<template>
  <header class="site-header">
    <nav class="nav container" aria-label="Navegação principal">
      <div class="nav-actions">
        <ul class="nav-list" :class="{ 'is-open': isMenuOpen }">
          <li v-for="item in items" :key="item.name">
            <RouterLink
              :to="item.to"
              :class="{ active: isActive(item.to) }"
              @click="closeMenu"
            >
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>

        <button
          class="theme-toggle"
          type="button"
          :aria-label="`Ativar modo ${theme === 'dark' ? 'claro' : 'escuro'}`"
          @click="toggleTheme"
        >
          <span aria-hidden="true">{{ theme === 'dark' ? '☼' : '☾' }}</span>
        </button>

        <button
          class="menu-button"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-label="Abrir menu"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'SiteNavbar',
  components: {
    RouterLink,
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
      theme: 'dark',
    }
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme')
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
    this.theme = savedTheme || (prefersLight ? 'light' : 'dark')
    this.applyTheme()
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    isActive(to) {
      const target = typeof to === 'string' ? { path: to, hash: '' } : to
      if (target.path !== this.$route.path) return false
      if (!target.hash) return true
      if (target.hash === '#home') return this.$route.hash === '' || this.$route.hash === '#home'
      return this.$route.hash === target.hash
    },
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', this.theme)
      this.applyTheme()
    },
    applyTheme() {
      document.documentElement.dataset.theme = this.theme
    },
  },
}
</script>
