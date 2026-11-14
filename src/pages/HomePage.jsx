import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Curriculum from '../components/sections/Curriculum'
import Hero from '../components/sections/Hero'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Curriculum />
      <Contact />
    </main>
  )
}
