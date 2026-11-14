import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navItems, profile, roles, socials } from '../../data/portfolio'
import Photo from '../ui/Photo'
import Scribble from '../ui/Scribble'
import './Hero.css'

const ROLE_INTERVAL = 3600

// Troca o texto de atuação em loop; a animação de entrada fica no CSS (key nova = anima de novo).
function useRotatingIndex(length, interval) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const id = setInterval(() => setIndex((i) => (i + 1) % length), interval)
    return () => clearInterval(id)
  }, [length, interval])
  return index
}

export default function Hero() {
  const roleIndex = useRotatingIndex(roles.length, ROLE_INTERVAL)

  return (
    <section id="home" className="hero">
      <div className="container">
        {/* Linha fina do topo, como a de uma revista */}
        <div className="hero__meta">
          <span>Portfólio</span>
          <span>Nº 01 — {profile.year}</span>
          <span>UFPI · {profile.location}</span>
        </div>

        {/* Masthead: nome em tinta preta sobre o sobrenome gigante borrado em azul */}
        <div className="hero__masthead">
          <span className="blur-word hero__blur" aria-hidden="true">
            {profile.lastName}
          </span>
          <h1 className="hero__name">
            <span className="hero__first">{profile.firstName.toLowerCase()}</span>
            <span className="hero__last">{profile.lastName.toLowerCase()}</span>
          </h1>
          <ul className="hero__tags" aria-label="Áreas">
            <li>designer</li>
            <li>full stack</li>
            <li>pesquisa em IA</li>
          </ul>
          <Scribble shape="scrawl" className="hero__scrawl is-drawn" strokeWidth={3} />
        </div>

        {/* Navegação no estilo das seções de revista */}
        <nav className="hero__nav" aria-label="Seções">
          {navItems.map((item) => (
            <Link key={item.id} to={item.to} className={`hero__nav-link${item.id === 'home' ? ' is-current' : ''}`}>
              {item.name}
              <Scribble shape="circle" className="hero__nav-circle" strokeWidth={2.5} />
            </Link>
          ))}
        </nav>

        {/* Destaque: recorte do olhar + palavra gigante */}
        <div className="hero__feature">
          <div className="hero__crop" data-reveal="clip">
            <Photo className="hero__crop-img" alt="Recorte do rosto de Emílly Sátiro" priority sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <p className="hero__word display" data-reveal style={{ '--delay': '0.15s' }}>
            Portfólio
          </p>
          <Scribble shape="loop" className="hero__loop is-drawn" strokeWidth={2} />
        </div>

        <div className="hero__bottom">
          <p className="hero__role">
            <span className="hero__role-static">Atuação —</span>{' '}
            <span key={roleIndex} className="hero__role-text">
              {roles[roleIndex]}
            </span>
          </p>

          <div className="hero__actions">
            <Link to="/projetos" className="cta-link spaced">
              Ver projetos <span className="arrow">→</span>
            </Link>
            <div className="hero__links">
              <a href="#contact" className="text-link">
                Contato
              </a>
              {socials.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-link">
                  {social.name} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
