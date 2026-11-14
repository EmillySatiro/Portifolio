import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import './UnderConstruction.css'

// Página "em construção" usada por Pesquisa, Projetos e Designer.
export default function UnderConstruction({ badge, description, actions }) {
  return (
    <main className="route-page under-construction-page">
      <div className="container">
        {actions && <div className="top-action-bar">{actions}</div>}

        <div className="construction-content-box">
          <div className="large-bat-wrapper">
            <img
              src="/bat.svg"
              alt="Mascote Morcego"
              className="large-bat-img"
              loading="lazy"
              decoding="async"
              width="260"
              height="200"
            />
          </div>

          <span className="construction-badge">{badge}</span>
          <h1 className="construction-title">PÁGINA EM CONSTRUÇÃO</h1>
          <p className="construction-subtitle">{description}</p>

          <Link to="/" className="back-home-btn">
            <ArrowLeft size={18} />
            <span>Voltar ao Início</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
