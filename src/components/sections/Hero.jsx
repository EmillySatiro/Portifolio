import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { profile, roles, socials } from '../../data/portfolio'
import Icon from '../ui/Icon'
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
function Name({ outline = false }) {
  return (
    <p className={`hero__name${outline ? ' hero__name--outline' : ''}`} aria-hidden={outline || undefined}>
      <span className="hero__word">
        <span>{profile.firstName}</span>
      </span>{' '}
      <span className="hero__word hero__word--accent">
        <span>{profile.lastName}</span>
      </span>
    </p>
  )
}

// Topo da home em camadas (referência: capa de revista):
// nome enorme atrás da ilustração → ilustração com os pixels → o mesmo nome só em contorno por cima,
// para as letras continuarem legíveis onde passam pela arte.
export default function Hero() {
  const roleIndex = useRotatingIndex(roles.length, ROLE_INTERVAL)

  return (
    <section id="home" className="hero">
      <h1 className="sr-only">{profile.name}</h1>

      <p className="hero__corner hero__corner--left">Portfólio — {profile.year}</p>
      <p className="hero__corner hero__corner--right">Picos, PI · Brasil</p>

      <Name />

      <div className="hero__art">
        <svg className="hero__orbit" viewBox="0 0 600 300" aria-hidden="true" preserveAspectRatio="none">
          <ellipse cx="300" cy="150" rx="290" ry="120" pathLength="1" />
        </svg>
        <PixelAvatar />
      </div>

      <Name outline />

      <p className="hero__role" aria-live="polite">
        <span key={roleIndex} className="hero__role-text">
          {roles[roleIndex]}
        </span>
      </p>

      <div className="hero__foot">
        <p className="hero__tagline">Desenvolvimento, design de interfaces e pesquisa em visão computacional.</p>
        <div className="hero__actions">
          <Link to="/projetos" className="btn btn--primary">
            Ver projetos <Icon name="arrowRight" className="icon-arrow" />
          </Link>
          <Link to="/#contact" className="btn btn--outline">
            Contato <Icon name="mail" />
          </Link>
        </div>
      </div>

      <div className="hero__socials">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--icon"
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
