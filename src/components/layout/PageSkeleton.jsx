import { useLocation } from 'react-router-dom'
import { usePageTheme } from '../../hooks/usePageTheme'
import './PageSkeleton.css'

// Páginas de tema claro: o esqueleto já aparece claro, sem piscar escuro antes
const LIGHT_PAGES = ['/projetos', '/academico']

// Esqueleto mostrado enquanto o código de uma página ainda está chegando:
// título, linhas de texto e blocos no formato das páginas, com um brilho passando.
export default function PageSkeleton() {
  const { pathname } = useLocation()
  usePageTheme(LIGHT_PAGES.includes(pathname) ? 'light' : 'dark')

  return (
    <main className="skel" aria-busy="true" aria-label="Carregando a página">
      <div className="container skel__inner">
        <span className="skel__block skel__title" />
        <span className="skel__block skel__line" style={{ width: '46%' }} />
        <span className="skel__block skel__line" style={{ width: '38%' }} />
        <div className="skel__chips">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="skel__block skel__chip" />
          ))}
        </div>
        <div className="skel__grid">
          <span className="skel__block skel__card skel__card--big" />
          <span className="skel__block skel__card" />
          <span className="skel__block skel__card" />
        </div>
      </div>
    </main>
  )
}
