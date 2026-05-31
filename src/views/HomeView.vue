<template>
  <main>
    <HeroSection :skills="floatingSkills" />
    <AboutSection />
    <SkillsSection :categories="skills" />
    <ContactSection :methods="contactMethods" />
  </main>
</template>

<script>
import AboutSection from '../components/AboutSection.vue'
import ContactSection from '../components/ContactSection.vue'
import HeroSection from '../components/HeroSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import { contactMethods, floatingSkills, skills } from '../data/portfolio'

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
      floatingSkills,
      skills,
    }
  },
}
</script>
