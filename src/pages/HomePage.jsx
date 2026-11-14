import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import HeroSection from '../components/HeroSection'
import { contactMethods } from '../data/portfolio'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ContactSection methods={contactMethods} />
    </main>
  )
}
