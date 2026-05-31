<template>
  <SiteNavbar :items="navItems" />
  <RouterView />
  <SiteFooter />
</template>

<script>
import { RouterView } from 'vue-router'
import SiteFooter from './components/SiteFooter.vue'
import SiteNavbar from './components/SiteNavbar.vue'
import { navItems } from './data/portfolio'

export default {
  name: 'App',
  components: {
    RouterView,
    SiteFooter,
    SiteNavbar,
  },
  data() {
    return {
      navItems,
    }
  },
}
</script>
