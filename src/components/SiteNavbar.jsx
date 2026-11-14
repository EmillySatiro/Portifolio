import { useCallback, useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import './SiteNavbar.css'

const HOME_SECTIONS = ['home', 'about', 'curriculum', 'contact']

function splitTarget(to) {
  const [path, hash = ''] = to.split('#')
  return { path: path || '/', hash: hash ? `#${hash}` : '' }
}

export default function SiteNavbar({ items }) {
  const { pathname } = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeHash, setActiveHash] = useState('')

  const onScroll = useCallback(() => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    setScrollProgress(height > 0 ? (winScroll / height) * 100 : 0)
    setIsScrolled(winScroll > 25)

    if (pathname !== '/') {
      setActiveHash('')
      return
    }

    const offset = window.innerHeight * 0.35
    const sections = HOME_SECTIONS.map((id) => document.getElementById(id)).filter(Boolean)
    let current = sections[0]
    sections.forEach((section) => {
      if (section.offsetTop <= window.scrollY + offset) current = section
    })
    setActiveHash(current ? `#${current.id}` : '#home')
  }, [pathname])

  useEffect(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  const isActive = (to) => {
    const target = splitTarget(to)
    if (target.path !== pathname) return false
    if (!target.hash) return !activeHash
    if (target.hash === '#home') return activeHash === '' || activeHash === '#home'
    return activeHash === target.hash
  }

  const closeMenu = () => setIsMenuOpen(false)

  const headerClasses = ['site-header']
  if (isScrolled) headerClasses.push('is-scrolled')
  if (pathname === '/designer') headerClasses.push('is-solid-black')

  return (
    <header className={headerClasses.join(' ')}>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} aria-hidden="true"></div>

      <nav className="nav container" aria-label="Navegação principal">
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          <span className="brand-bat-icon">
            <img src="/bat.svg" alt="Morcego logo" width="26" height="22" />
          </span>
          <span className="brand-text">Emílly Sátiro</span>
        </Link>

        <ul className={`nav-list${isMenuOpen ? ' is-open' : ''}`}>
          {items.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                className={`nav-link${isActive(item.to) ? ' active' : ''}`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="menu-button"
            type="button"
            aria-expanded={isMenuOpen}
            aria-label="Abrir menu de navegação"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
