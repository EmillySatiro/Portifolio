import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navItems, profile } from '../../data/portfolio'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useTheme } from '../../hooks/useTheme'
import BatLogo from '../ui/BatLogo'
import Icon from '../ui/Icon'
import ThemeToggle from '../ui/ThemeToggle'
import './Topbar.css'

const HOME_SECTIONS = ['home', 'about', 'skills', 'curriculum', 'contact']
// "Tecnologias" faz parte de "Sobre" no menu
const SECTION_TO_NAV = { skills: 'about' }

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

export default function Topbar() {
  const { pathname, hash } = useLocation()
  const { theme, toggleTheme } = useTheme()
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)
  const section = useActiveSection(HOME_SECTIONS, pathname === '/')
  const activeHomeId = SECTION_TO_NAV[section] || section

  // Fecha o menu do celular ao navegar
  useEffect(() => setMenuOpen(false), [pathname, hash])

  const isActive = (item) => {
    const [path] = item.to.split('#')
    if (pathname !== '/') return item.to === pathname
    return (path || '/') === '/' && item.id === activeHomeId
  }

  return (
    <header className={`topbar${scrolled || menuOpen ? ' is-scrolled' : ''}`}>
      <div className="container topbar__inner">
        <Link to="/#home" className="topbar__brand">
          <BatLogo size={34} className="topbar__logo" />
          {profile.name}
        </Link>

        <nav id="topbar-nav" className={`topbar__nav${menuOpen ? ' is-open' : ''}`} aria-label="Navegação principal">
          <ul>
            {navItems.map((item, index) => (
              <li key={item.id} style={{ '--i': index }}>
                <Link
                  to={item.to}
                  className={`topbar__link${isActive(item) ? ' is-active' : ''}`}
                  aria-current={isActive(item) ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="topbar__actions">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            type="button"
            className="topbar__burger"
            aria-expanded={menuOpen}
            aria-controls="topbar-nav"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
