import { profile, socials } from '../../data/portfolio'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__blur blur-word" aria-hidden="true">
        {profile.firstName} {profile.lastName}
      </div>

      <div className="container footer__row">
        <p className="footer__brand display">
          {profile.firstName} {profile.lastName}
        </p>
        <p className="footer__copy">© {profile.year} Todos os direitos reservados.</p>
        <div className="footer__links">
          {socials.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-link">
              {social.name} ↗
            </a>
          ))}
          <button
            type="button"
            className="text-link"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Topo ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
