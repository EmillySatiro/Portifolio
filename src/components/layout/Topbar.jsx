import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navItems, profile } from '../../data/portfolio'
import { useActiveSection } from '../../hooks/useActiveSection'
import BatLogo from '../ui/BatLogo'
import Icon from '../ui/Icon'
import './Topbar.css'

const HOME_SECTIONS = ['home', 'about', 'curriculum', 'contact']
// "Contato" sai da lista e vira o botão de destaque à direita
const LINKS = navItems.filter((item) => item.id !== 'contact')
const CONTACT = navItems.find((item) => item.id === 'contact')

// Seções de fundo claro dentro do site escuro: quando uma delas passa por baixo da barra,
// a barra vira vidro claro
const LIGHT_SECTIONS = '.hero, .curriculum, .vitrine'

function useOverLight(pathname) {
  const [overLight, setOverLight] = useState(false)
  useEffect(() => {
    let frame = 0
    const check = () => {
      frame = 0
      const y = 34 // meio da barra
      const under = document.elementsFromPoint(window.innerWidth / 2, y).find((el) => !el.closest('.topbar'))
      setOverLight(Boolean(under?.closest(LIGHT_SECTIONS)))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check)
    }
    check()
    // Páginas carregadas sob demanda chegam depois: confere de novo quando o conteúdo muda
    const content = document.getElementById('conteudo')
    const mo = new MutationObserver(onScroll)
    if (content) mo.observe(content, { childList: true, subtree: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      mo.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pathname])
  return overLight
}

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

// Barra de vidro flutuante: marca à esquerda, links no meio com um destaque que desliza até o
// item ativo, e o botão de contato à direita. No celular, os links abrem num painel de vidro.
export default function Topbar() {
  const { pathname, hash } = useLocation()
  const scrolled = useScrolled()
  const overLight = useOverLight(pathname)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeHomeId = useActiveSection(HOME_SECTIONS, pathname === '/')
  const listRef = useRef(null)
  const [pill, setPill] = useState(null)

  // Fecha o menu do celular ao navegar
  useEffect(() => setMenuOpen(false), [pathname, hash])

  const isActive = (item) => {
    const [path] = item.to.split('#')
    if (pathname !== '/') return item.to === pathname
    return (path || '/') === '/' && item.id === activeHomeId
  }
  const activeId = LINKS.find(isActive)?.id

  // Mede o link ativo para o destaque deslizar até ele
  useLayoutEffect(() => {
    const measure = () => {
      const el = listRef.current?.querySelector(`[data-id="${activeId}"]`)
      setPill(el ? { x: el.offsetLeft, w: el.offsetWidth } : null)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [activeId])

  return (
    <header className={`topbar${scrolled || menuOpen ? ' is-scrolled' : ''}${overLight ? ' is-on-light' : ''}`}>
      <div className="topbar__bar">
        <Link to="/#home" className="topbar__brand" aria-label={`${profile.name}, início`}>
          <BatLogo size={30} className="topbar__logo" />
          <span className="topbar__name">{profile.name}</span>
        </Link>

        <nav id="topbar-nav" className={`topbar__nav${menuOpen ? ' is-open' : ''}`} aria-label="Navegação principal">
          <ul ref={listRef} style={pill ? { '--pill-x': `${pill.x}px`, '--pill-w': `${pill.w}px` } : undefined}>
            {pill && <li className="topbar__pill" aria-hidden="true" />}
            {LINKS.map((item, index) => (
              <li key={item.id} style={{ '--i': index }}>
                <Link
                  to={item.to}
                  data-id={item.id}
                  className={`topbar__link${isActive(item) ? ' is-active' : ''}`}
                  aria-current={isActive(item) ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="topbar__nav-contact" style={{ '--i': LINKS.length }}>
              <Link to={CONTACT.to} className="topbar__link" onClick={() => setMenuOpen(false)}>
                {CONTACT.name}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="topbar__actions">
          <Link to={CONTACT.to} className="topbar__cta">
            Fale comigo <Icon name="arrowRight" size={15} />
          </Link>
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
