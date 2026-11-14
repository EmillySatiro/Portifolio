import { useEffect, useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import BrandIcon from './BrandIcon'
import './HeroSection.css'

const ROLES = [
  'Pesquisadora em Visão Computacional',
  'Desenvolvedora Front-end',
  'Desenvolvedora Full Stack',
  'UI/UX Designer',
  'UI/UX & Prototipação',
]

const SLIDE_MS = 350

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  // idle → leave (texto sai) → enter (novo texto entra) → idle
  const [phase, setPhase] = useState('idle')

  useEffect(() => {
    const timers = []
    const ticker = setInterval(() => {
      setPhase('leave')
      timers.push(
        setTimeout(() => {
          setRoleIndex((i) => (i + 1) % ROLES.length)
          setPhase('enter')
          timers.push(setTimeout(() => setPhase('active'), 20))
          timers.push(setTimeout(() => setPhase('idle'), 20 + SLIDE_MS))
        }, SLIDE_MS),
      )
    }, 3600)

    return () => {
      clearInterval(ticker)
      timers.forEach(clearTimeout)
    }
  }, [])

  const slideClass = {
    idle: '',
    leave: 'role-slide-leave-active role-slide-leave-to',
    enter: 'role-slide-enter-active role-slide-enter-from',
    active: 'role-slide-enter-active',
  }[phase]

  return (
    <section id="home" className="hero-section">
      <div className="hero-ambient-glow" aria-hidden="true"></div>

      <div className="container hero-container">
        <div className="hero-center-block">
          <h1 className="hero-main-title" data-text="EMÍLLY SÁTIRO">
            EMÍLLY SÁTIRO
          </h1>
        </div>

        <div className="hero-bottom-block">
          <div className="hero-role-ticker">
            <span className="role-static">Atuação —</span>
            <span className="role-dynamic-wrapper">
              <span className={`role-dynamic-text ${slideClass}`.trim()}>{ROLES[roleIndex]}</span>
            </span>
          </div>

          <div className="hero-cta-group">
            <Link to="/projetos" className="hero-btn primary-btn">
              <span>Ver Projetos</span>
              <ArrowRight size={16} />
            </Link>
            <a href="#contact" className="hero-btn secondary-btn">
              <span>Contato</span>
              <Mail size={16} />
            </a>
            <a
              href="https://github.com/EmillySatiro"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn icon-btn"
              title="GitHub"
            >
              <BrandIcon name="Github" size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/emilly-s%C3%A1tiro-94912a369/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn icon-btn"
              title="LinkedIn"
            >
              <BrandIcon name="Linkedin" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
