import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { profile, roles, socials } from '../../data/portfolio'
import Icon from '../ui/Icon'
import PastelBackdrop from '../ui/PastelBackdrop'
import PixelAvatar from '../ui/PixelAvatar'
import './Hero.css'

const ROLE_INTERVAL = 3200


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

      <PastelBackdrop />

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
        <Link to="/projetos" className="pbtn pbtn--main">
          <span>Ver projetos</span> <Icon name="arrowRight" className="icon-arrow" />
        </Link>
        <Link to="/#contact" className="pbtn pbtn--glass">
          Contato <Icon name="mail" />
        </Link>
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`pbtn pbtn--icon pbtn--${social.icon}`}
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
