<template>
  <BackgroundCanvas />
  <CustomCursor />
  <SiteNavbar :items="navItems" />
  <FlyingBat />
  <RouterView />
  <SiteFooter />
</template>

<script>
import { RouterView } from 'vue-router'
import BackgroundCanvas from './components/BackgroundCanvas.vue'
import CustomCursor from './components/CustomCursor.vue'
import FlyingBat from './components/FlyingBat.vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteNavbar from './components/SiteNavbar.vue'
import { navItems } from './data/portfolio'

export default {
  name: 'App',
  components: {
    BackgroundCanvas,
    CustomCursor,
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
  mounted() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
    this.initScrollReveal()
  },
  updated() {
    this.initScrollReveal()
  },
  methods: {
    initScrollReveal() {
      this.$nextTick(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible')
              }
            })
          },
          { threshold: 0.12 }
        )

        const targets = document.querySelectorAll('.section-reveal, .section, main > section')
        targets.forEach((el) => {
          observer.observe(el)
        })
      })
    },
  },
}
</script>
