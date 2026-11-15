import { Link } from 'react-router-dom'
import { cvFiles, experiences, openForHire } from '../../data/portfolio'
import Icon from '../ui/Icon'
import './Curriculum.css'

// Currículo como lista editorial: uma linha por experiência; a descrição abre no hover/foco.
export default function Curriculum() {
  return (
    <section id="curriculum" className="section curriculum pixel-edge">
      <div className="container">
        <header className="cv-head">
          <div className="cv-head__title">
            <p className="eyebrow" data-reveal>
              Currículo
            </p>
            <h2 className="section-title display" data-reveal style={{ '--delay': '0.08s' }}>
              Trajetória
            </h2>
          </div>

          {/* Download em destaque, ao lado do título */}
          <div className="cv-download" data-reveal style={{ '--delay': '0.12s' }}>
            <p className="cv-download__label">Currículo completo em PDF</p>
            <div className="cv-download__actions">
              {cvFiles.map((file, i) => (
                <a
                  key={file.href}
                  href={file.href}
                  download={file.download}
                  className={`btn ${i === 0 ? 'btn--primary' : 'btn--outline'}`}
                >
                  <Icon name="download" size={17} /> {file.label}
                </a>
              ))}
            </div>
          </div>
        </header>

        <ol className="cv-list">
          {experiences.map((item, index) => (
            <li key={`${item.company}-${item.title}`} className="cv-row" tabIndex={0} data-reveal>
              <span className="cv-row__num">{String(index + 1).padStart(2, '0')}</span>
              <span className="cv-row__period">{item.period}</span>
              <div className="cv-row__main">
                <h3 className="cv-row__role display">{item.title}</h3>
                <p className="cv-row__company">{item.company}</p>
                <div className="cv-row__more">
                  <p>{item.description}</p>
                </div>
              </div>
              <span className="cv-row__toggle" aria-hidden="true" />
            </li>
          ))}
        </ol>

        {/* Fechamento: frase grande + chamadas, sem caixa */}
        <div className="cv-close" data-reveal>
          <p className="cv-close__status">
            <span className="cv-close__pixel" aria-hidden="true" />
            {openForHire.status.replace('!', '')}
          </p>
          <p className="cv-close__line display">{openForHire.message}</p>
          <div className="cv-close__links">
            <Link to="/#contact" className="cv-close__link">
              Falar comigo <Icon name="arrowRight" size={18} />
            </Link>
            <Link to="/projetos" className="cv-close__link">
              Ver projetos <Icon name="arrowRight" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
