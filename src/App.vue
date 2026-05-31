<template>
  <SiteNavbar :items="navItems" />
  <FlyingBat />
  <RouterView />
  <SiteFooter />
</template>

<script>
import { RouterView } from 'vue-router'
import FlyingBat from './components/FlyingBat.vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteNavbar from './components/SiteNavbar.vue'
import { navItems } from './data/portfolio'

export default {
  name: 'App',
  components: {
    FlyingBat,
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
