import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { profile, roles, socials } from '../../data/portfolio'
import Icon from '../ui/Icon'
import PixelAvatar from '../ui/PixelAvatar'
import './Hero.css'

const ROLE_INTERVAL = 3200

// Cruzinhas de pixel espalhadas pelo fundo (posição, cor, tamanho e ritmo)
const PIXELS = [
  { left: '8%', top: '24%', '--c': '#8ad7eb', '--s': '8px', '--d': '0s' },
  { left: '22%', top: '62%', '--c': '#b597f0', '--s': '6px', '--d': '1.2s' },
  { left: '31%', top: '16%', '--c': '#414575', '--s': '5px', '--d': '2.1s' },
  { left: '69%', top: '18%', '--c': '#ffb89a', '--s': '7px', '--d': '0.6s' },
  { left: '84%', top: '38%', '--c': '#8ad7eb', '--s': '9px', '--d': '1.7s' },
  { left: '91%', top: '14%', '--c': '#b597f0', '--s': '5px', '--d': '2.6s' },
  { left: '76%', top: '58%', '--c': '#414575', '--s': '6px', '--d': '0.9s' },
  { left: '13%', top: '44%', '--c': '#ffb89a', '--s': '5px', '--d': '3s' },
]

// Troca o texto de atuação em loop; a key nova faz a animação de entrada rodar de novo.
function useRotatingIndex(length, interval) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const id = setInterval(() => setIndex((i) => (i + 1) % length), interval)
    return () => clearInterval(id)
  }, [length, interval])
  return index
}

// O nome em letras gigantes; cada palavra sobe de dentro de uma "janela" ao carregar
function Name() {
  return (
    <p className="hero__name" aria-hidden="true">
      <span className="hero__word">
        <span>{profile.firstName}</span>
      </span>{' '}
      <span className="hero__word hero__word--accent">
        <span>{profile.lastName}</span>
      </span>
    </p>
  )
}

// Topo da home como capa de revista: fundo claro de estúdio, a ilustração recortada no centro
// (montada por pixels que voam de toda a área do topo) e o nome enorme na frente do corpo.
export default function Hero() {
  const roleIndex = useRotatingIndex(roles.length, ROLE_INTERVAL)
  const heroRef = useRef(null)

  return (
    <section id="home" className="hero" ref={heroRef}>
      <h1 className="sr-only">{profile.name}</h1>

      {/* Fundo: manchas de cor que passeiam devagar + grade e cruzinhas de pixel */}
      <div className="hero__bg" aria-hidden="true">
        {PIXELS.map((px, i) => (
          <span key={i} className="hero__px" style={px} />
        ))}
      </div>

      <div className="hero__art">
        <PixelAvatar fieldRef={heroRef} />
      </div>

      <Name />

      <p className="hero__role" aria-live="polite">
        <span key={roleIndex} className="hero__role-text">
          {roles[roleIndex]}
        </span>
      </p>

      <p className="hero__tagline">Desenvolvimento, design de interfaces e pesquisa em visão computacional.</p>

      {/* Ações juntas no canto direito: projetos, contato e redes */}
      <div className="hero__cta">
        <Link to="/projetos" className="hero__btn hero__btn--main">
          <span>Ver projetos</span> <Icon name="arrowRight" className="icon-arrow" />
        </Link>
        <Link to="/#contact" className="hero__btn hero__btn--glass">
          Contato <Icon name="mail" />
        </Link>
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`hero__btn hero__btn--icon hero__btn--${social.icon}`}
            aria-label={social.name}
            title={social.name}
          >
            <Icon name={social.icon} />
          </a>
        ))}
      </div>
    </section>
  )
}
