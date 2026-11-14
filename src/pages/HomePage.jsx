import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Curriculum from '../components/sections/Curriculum'
import Hero from '../components/sections/Hero'
import Skills from '../components/sections/Skills'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Curriculum />
      <Contact />
    </main>
  )
}
