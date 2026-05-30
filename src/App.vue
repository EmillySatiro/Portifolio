<template>
  <SiteNavbar :items="navItems" />
  <main>
    <HeroSection :skills="floatingSkills" />
    <AboutSection :stats="stats" :technologies="technologies" />
    <ProjectsSection :projects="projects" />
    <SkillsSection :categories="skills" />
    <ContactSection :methods="contactMethods" />
  </main>
  <SiteFooter />
</template>

<script>
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteNavbar from './components/SiteNavbar.vue'
import SkillsSection from './components/SkillsSection.vue'
import {
  contactMethods,
  floatingSkills,
  navItems,
  projects,
  skills,
  stats,
  technologies,
} from './data/portfolio'

export default {
  name: 'App',
  components: {
    AboutSection,
    ContactSection,
    HeroSection,
    ProjectsSection,
    SiteFooter,
    SiteNavbar,
    SkillsSection,
  },
  data() {
    return {
      contactMethods,
      floatingSkills,
      navItems,
      projects,
      skills,
      stats,
      technologies,
    }
  },
}
</script>
