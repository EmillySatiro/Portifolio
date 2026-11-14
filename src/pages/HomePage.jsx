import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import CurriculumSection from '../components/CurriculumSection'
import HeroSection from '../components/HeroSection'

export default function HomePage() {
  return (
    <main className="home-view-page" style={{ position: 'relative', width: '100%' }}>
      <HeroSection />
      <AboutSection />
      <CurriculumSection />
      <ContactSection />
    </main>
  )
}
