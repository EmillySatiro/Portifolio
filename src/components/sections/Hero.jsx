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

export default function Hero() {
  const roleIndex = useRotatingIndex(roles.length, ROLE_INTERVAL)

  return (
    <section id="home" className="hero">
      <span className="blur-word hero__blur parallax" aria-hidden="true">
        Portfólio
      </span>

      <div className="container hero__grid">
        <div className="hero__copy">

          <h1 className="hero__name display">
            <span className="hero__line">{profile.firstName}</span>
            <span className="hero__line hero__line--accent">{profile.lastName}</span>
          </h1>

          <p className="hero__role" aria-live="polite">
            <span key={roleIndex} className="hero__role-text">
              {roles[roleIndex]}
            </span>
          </p>

          <div className="hero__actions">
            <Link to="/projetos" className="btn btn--primary">
              Ver projetos <Icon name="arrowRight" className="icon-arrow" />
            </Link>
            <Link to="/#contact" className="btn btn--outline">
              Contato <Icon name="mail" />
            </Link>
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
        </div>

        <div className="hero__art">
          <PixelAvatar />
        </div>
      </div>
    </section>
  )
}
