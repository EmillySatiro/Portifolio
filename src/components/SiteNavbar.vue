<template>
  <header class="site-header">
    <nav class="nav container" aria-label="Navegação principal">
      <div class="nav-actions">
        <ul class="nav-list" :class="{ 'is-open': isMenuOpen }">
          <li v-for="item in items" :key="item.name">
            <a
              :href="item.href"
              :class="{ active: activeHref === item.href }"
              @click="setActive(item.href)"
            >
              {{ item.name }}
            </a>
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
export default {
  name: 'SiteNavbar',
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
      activeHref: '#home',
    }
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme')
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
    this.theme = savedTheme || (prefersLight ? 'light' : 'dark')
    this.activeHref = window.location.hash || '#home'
    this.applyTheme()
    window.addEventListener('hashchange', this.syncActiveFromHash)
  },
  beforeUnmount() {
    window.removeEventListener('hashchange', this.syncActiveFromHash)
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    setActive(href) {
      this.activeHref = href
      this.closeMenu()
    },
    syncActiveFromHash() {
      this.activeHref = window.location.hash || '#home'
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
