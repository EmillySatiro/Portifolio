import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Topbar from './components/layout/Topbar'
import { useReveal } from './hooks/useReveal'
import { useScrollOnNavigate } from './hooks/useScrollOnNavigate'
import HomePage from './pages/HomePage'

// Páginas secundárias carregam só quando acessadas.
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const DesignerPage = lazy(() => import('./pages/DesignerPage'))
const AcademicPage = lazy(() => import('./pages/AcademicPage'))

export default function App() {
  useScrollOnNavigate()
  useReveal()

  return (
    <>
      <a href="#conteudo" className="sr-only">
        Pular para o conteúdo
      </a>
      <Topbar />
      <div id="conteudo">
        <Suspense fallback={<main className="building" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projetos" element={<ProjectsPage />} />
            <Route path="/designer" element={<DesignerPage />} />
            <Route path="/academico" element={<AcademicPage />} />
            <Route path="/pesquisa" element={<Navigate to="/academico" replace />} />
            <Route path="/programacao" element={<Navigate to="/projetos" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  )
}
