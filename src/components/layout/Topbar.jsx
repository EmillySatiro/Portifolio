import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navItems } from '../../data/portfolio'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrollState } from '../../hooks/useScrollState'
import { useTheme } from '../../hooks/useTheme'
import ThemeToggle from '../ui/ThemeToggle'
import MenuOverlay from './MenuOverlay'
import './Topbar.css'

const HOME_SECTIONS = ['home', 'about', 'curriculum', 'contact']

// Nome da seção/página atual mostrado no centro da barra ("Nº 02 — Sobre").
function useCurrentLabel(pathname, activeSection) {
  const item =
    pathname === '/'
      ? navItems.find((nav) => nav.id === activeSection)
      : navItems.find((nav) => nav.to === pathname)
  if (!item) return null
  const number = String(navItems.indexOf(item) + 1).padStart(2, '0')
  return `Nº ${number} — ${item.name}`
}

export default function Topbar() {
  const { pathname } = useLocation()
  const { theme, toggleTheme } = useTheme()
  const { scrolled, goingDown } = useScrollState()
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(HOME_SECTIONS, pathname === '/')
  const label = useCurrentLabel(pathname, activeSection)

  // Fecha o menu ao trocar de página
  useEffect(() => setMenuOpen(false), [pathname])

  const classes = ['topbar']
  if (scrolled || pathname !== '/') classes.push('is-solid')
  if (goingDown && !menuOpen) classes.push('is-hidden')
  if (menuOpen) classes.push('is-menu-open')

  return (
    <>
      <header className={classes.join(' ')}>
        <div className="container topbar__inner">
          <Link to="/#home" className="topbar__mark" aria-label="Emílly Sátiro — início">
            E<span>/</span>S
          </Link>

          {label && (
            <span className="topbar__label" aria-live="polite">
              {label}
            </span>
          )}

          <div className="topbar__actions">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              type="button"
              className="topbar__menu-btn"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span>{menuOpen ? 'Fechar' : 'Menu'}</span>
              <span className="topbar__burger" aria-hidden="true">
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
