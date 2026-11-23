import { Suspense, useCallback, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import PageSkeleton from './components/layout/PageSkeleton'
import Preloader from './components/layout/Preloader'
import Topbar from './components/layout/Topbar'
import { useReveal } from './hooks/useReveal'
import { useScrollOnNavigate } from './hooks/useScrollOnNavigate'
import HomePage from './pages/HomePage'
import { AcademicPage, DesignerPage, ProjectsPage, VitrinePage } from './pages/routes'

// Primeiro a tela de entrada baixa tudo (páginas, fontes e imagens); só então o site aparece,
// já com tudo em cache: a navegação entre as páginas fica instantânea.
export default function App() {
  const [ready, setReady] = useState(false)
  const onDone = useCallback(() => setReady(true), [])
  return ready ? <Site /> : <Preloader onDone={onDone} />
}

function Site() {
  useScrollOnNavigate()
  useReveal()

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only"
        onClick={(e) => {
          // Rola sem mexer na URL (a âncora confundiria o roteador)
          e.preventDefault()
          document.getElementById('conteudo')?.focus()
        }}
      >
        Pular para o conteúdo
      </a>
      <Topbar />
      <div id="conteudo" tabIndex={-1}>
        <Suspense fallback={<PageSkeleton />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projetos" element={<ProjectsPage />} />
            <Route path="/designer" element={<DesignerPage />} />
            <Route path="/academico" element={<AcademicPage />} />
            <Route path="/vitrine" element={<VitrinePage />} />
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
