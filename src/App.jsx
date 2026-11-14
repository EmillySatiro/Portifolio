import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import BackgroundCanvas from './components/BackgroundCanvas'
import CustomCursor from './components/CustomCursor'
import FlyingBat from './components/FlyingBat'
import SiteFooter from './components/SiteFooter'
import SiteNavbar from './components/SiteNavbar'
import { navItems } from './data/portfolio'
import DesignerPage from './pages/DesignerPage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ResearchPage from './pages/ResearchPage'

// Rola até a âncora (#secao) ou para o topo ao trocar de rota.
function useScrollOnNavigate() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, key])
}

// Adiciona .is-visible às seções quando entram na tela (animação de entrada).
function useScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.12 },
    )

    document
      .querySelectorAll('.section-reveal, .section, main > section')
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [pathname])
}

export default function App() {
  useScrollOnNavigate()
  useScrollReveal()

  return (
    <>
      <BackgroundCanvas />
      <CustomCursor />
      <SiteNavbar items={navItems} />
      <FlyingBat />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/designer" element={<DesignerPage />} />
        <Route path="/pesquisa" element={<ResearchPage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/programacao" element={<Navigate to="/projetos" replace />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <SiteFooter />
    </>
  )
}
