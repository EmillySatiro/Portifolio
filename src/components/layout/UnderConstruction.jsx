import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import './UnderConstruction.css'

// Página "em construção" usada por Projetos, Designer e Pesquisa.
export default function UnderConstruction({ word, badge, description, links = [] }) {
  return (
    <main className="building">
      <span className="blur-word building__blur" aria-hidden="true">
        {word}
      </span>

      <div className="container building__inner">
        <div className="building__copy">
          <p className="eyebrow">{badge}</p>
          <h1 className="building__title display">Página em construção</h1>
          <p className="building__text">{description}</p>

          <div className="building__actions">
            <Link to="/" className="btn btn--primary">
              <Icon name="arrowLeft" /> Voltar ao início
            </Link>
            {links.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                {link.name} <Icon name="external" size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Barra de progresso em pixels */}
        <div className="building__progress" aria-hidden="true">
          {Array.from({ length: 12 }, (_, i) => (
            <span key={i} style={{ '--i': i }} />
          ))}
        </div>

        <img src="/bat.svg" alt="" className="building__bat" width="200" height="150" loading="lazy" />
      </div>
    </main>
  )
}
