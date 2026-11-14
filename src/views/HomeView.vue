<template>
  <main class="home-view-page">
    <HeroSection />
    <AboutSection />
    <CurriculumSection />
    <ContactSection />
  </main>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import CurriculumSection from '../components/CurriculumSection.vue'
import ContactSection from '../components/ContactSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    AboutSection,
    CurriculumSection,
    ContactSection,
  },
}
</script>

<style scoped>
.home-view-page {
  position: relative;
  width: 100%;
}
</style>
