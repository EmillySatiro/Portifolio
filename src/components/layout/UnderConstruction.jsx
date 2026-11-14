import { Link } from 'react-router-dom'
import Scribble from '../ui/Scribble'
import './UnderConstruction.css'

// Página "em construção" usada por Projetos, Designer e Pesquisa.
export default function UnderConstruction({ word, badge, description, links = [] }) {
  return (
    <main className="building">
      <div className="container building__inner">
        <span className="blur-word building__blur" aria-hidden="true">
          {word}
        </span>

        <p className="eyebrow building__badge">{badge}</p>
        <div className="building__heading">
          <h1 className="building__title display">
            Página em
            <br />
            construção
          </h1>
          <Scribble shape="x" className="building__x is-drawn" strokeWidth={6} />
        </div>

        <p className="building__text">{description}</p>

        <div className="building__actions">
          <Link to="/" className="cta-link spaced">
            <span className="arrow">←</span> Voltar ao início
          </Link>
          {links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="text-link">
              {link.name} ↗
            </a>
          ))}
        </div>

        <img src="/bat.svg" alt="" className="building__bat" width="200" height="150" loading="lazy" />
      </div>
    </main>
  )
}
