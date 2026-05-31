<template>
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection :categories="itProjects" />
    <ContactSection :methods="contactMethods" />
  </main>
</template>

<script>
import AboutSection from '../components/AboutSection.vue'
import ContactSection from '../components/ContactSection.vue'
import HeroSection from '../components/HeroSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import { contactMethods, itProjects } from '../data/portfolio'

export default {
  name: 'HomeView',
  components: {
    AboutSection,
    ContactSection,
    HeroSection,
    SkillsSection,
  },
  data() {
    return {
      contactMethods,
      itProjects,
    }
  },
}
</script>
