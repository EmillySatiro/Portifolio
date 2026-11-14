import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { contactMethods, navItems, socials } from '../../data/portfolio'
import './MenuOverlay.css'

// Menu em tela cheia com links gigantes, aberto pelo botão MENU.
export default function MenuOverlay({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const email = contactMethods[0]

  return (
    <div id="site-menu" className={`menu-overlay${open ? ' is-open' : ''}`} aria-hidden={!open} inert={!open}>
      <span className="blur-word menu-overlay__blur" aria-hidden="true">
        Menu
      </span>

      <nav className="container menu-overlay__inner" aria-label="Navegação principal">
        <ol className="menu-overlay__list">
          {navItems.map((item, index) => (
            <li key={item.id} style={{ '--i': index }}>
              <Link to={item.to} className="menu-overlay__link" onClick={onClose}>
                <span className="menu-overlay__num">{String(index + 1).padStart(2, '0')}</span>
                <span className="menu-overlay__name">{item.name}</span>
              </Link>
            </li>
          ))}
        </ol>

        <div className="menu-overlay__footer">
          <a href={email.link} className="text-link">
            {email.detail}
          </a>
          <div className="menu-overlay__socials">
            {socials.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-link">
                {social.name} ↗
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}
