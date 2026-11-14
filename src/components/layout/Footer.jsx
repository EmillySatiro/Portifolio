import { profile, socials } from '../../data/portfolio'
import Icon from '../ui/Icon'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer pixel-edge">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__pixel" aria-hidden="true" />
          <span className="display">{profile.name}</span>
        </div>

        <p className="footer__copy">© {profile.year} Todos os direitos reservados.</p>

        <div className="footer__links">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__icon"
              aria-label={social.name}
              title={social.name}
            >
              <Icon name={social.icon} />
            </a>
          ))}
          <button
            type="button"
            className="footer__icon footer__top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Voltar ao topo"
            title="Voltar ao topo"
          >
            <Icon name="arrowUp" />
          </button>
        </div>
      </div>
    </footer>
  )
}
