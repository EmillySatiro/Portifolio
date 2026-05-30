<template>
  <header class="site-header">
    <nav class="nav container" aria-label="Navegação principal">
      <a class="brand" href="#home" @click="closeMenu">Emilly Sátiro</a>

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

      <ul class="nav-list" :class="{ 'is-open': isMenuOpen }">
        <li v-for="item in items" :key="item.name">
          <a :href="item.href" @click="closeMenu">{{ item.name }}</a>
        </li>
      </ul>
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
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
  },
}
</script>
