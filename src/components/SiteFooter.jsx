import { ArrowUp } from 'lucide-react'
import BrandIcon from './BrandIcon'
import './SiteFooter.css'

const ROUND = { borderRadius: '50%' }

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-left">
          <span className="brand-bat">
            <img src="/bat.svg" alt="Morcego" width="20" height="16" />
          </span>
          <span className="brand-name">EMÍLLY SÁTIRO</span>
        </div>

        <div className="footer-center">
          <p className="footer-copy">© 2026 Todos os direitos reservados.</p>
        </div>

        <div className="footer-right">
          <div className="footer-socials">
            <a
              href="https://github.com/EmillySatiro"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title="GitHub"
              style={ROUND}
            >
              <BrandIcon name="Github" size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/emilly-s%C3%A1tiro-94912a369/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title="LinkedIn"
              style={ROUND}
            >
              <BrandIcon name="Linkedin" size={16} />
            </a>
          </div>

          <button
            className="scroll-top-btn"
            title="Voltar ao topo"
            style={ROUND}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
