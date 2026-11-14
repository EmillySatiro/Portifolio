import { useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const HOME_SECTIONS = ['home', 'about', 'contact']

function getInitialTheme() {
  const saved = localStorage.getItem('theme')
  if (saved) return saved
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function splitTarget(to) {
  const [path, hash = ''] = to.split('#')
  return { path: path || '/', hash: hash ? `#${hash}` : '' }
}

export default function SiteNavbar({ items }) {
  const { pathname } = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const updateActiveSection = useCallback(() => {
    if (pathname !== '/') {
      setActiveHash('')
      return
    }

    const offset = window.innerHeight * 0.38
    const sections = HOME_SECTIONS.map((id) => document.getElementById(id)).filter(Boolean)

    let current = sections[0]
    sections.forEach((section) => {
      if (section.offsetTop <= window.scrollY + offset) current = section
    })

    setActiveHash(current ? `#${current.id}` : '#home')
  }, [pathname])

  useEffect(() => {
    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [updateActiveSection])

  const isActive = (to) => {
    const target = splitTarget(to)
    if (target.path !== pathname) return false
    if (!target.hash) return !activeHash
    if (target.hash === '#home') return activeHash === '' || activeHash === '#home'
    return activeHash === target.hash
  }

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Navegação principal">
        <div className="nav-actions">
          <ul className={`nav-list${isMenuOpen ? ' is-open' : ''}`}>
            {items.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className={isActive(item.to) ? 'active' : undefined}
                  data-section={splitTarget(item.to).hash.replace('#', '')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="theme-toggle"
            type="button"
            aria-label={`Ativar modo ${theme === 'dark' ? 'claro' : 'escuro'}`}
            onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span>
          </button>

          <button
            className="menu-button"
            type="button"
            aria-expanded={isMenuOpen}
            aria-label="Abrir menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  )
}
