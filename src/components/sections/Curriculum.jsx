import { Link } from 'react-router-dom'
import { cvFiles, experiences, openForHire } from '../../data/portfolio'
import Icon from '../ui/Icon'
import './Curriculum.css'

export default function Curriculum() {
  return (
    <section id="curriculum" className="section curriculum pixel-edge">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow" data-reveal>
            Currículo
          </p>
          <h2 className="section-title display" data-reveal style={{ '--delay': '0.08s' }}>
            Trajetória e experiências
          </h2>
          <p className="section-lead" data-reveal style={{ '--delay': '0.12s' }}>
            Trajetória profissional, atuação acadêmica e experiências
          </p>
        </header>

        {/* Destaque para baixar o currículo */}
        <div className="cv-banner" data-reveal>
          <div className="cv-banner__text">
            <span className="cv-banner__icon" aria-hidden="true">
              <Icon name="file" size={28} />
            </span>
            <div>
              <h3 className="cv-banner__title display">Baixar currículo</h3>
              <p>Versão completa em PDF, disponível em português e inglês.</p>
            </div>
          </div>
          <div className="cv-banner__actions">
            {cvFiles.map((file) => (
              <a key={file.href} href={file.href} download={file.download} className="cv-file">
                <span className="cv-file__flag" aria-hidden="true">
                  {file.flag}
                </span>
                <span className="cv-file__info">
                  <span className="cv-file__label">{file.label}</span>
                  <span className="cv-file__detail">{file.detail}</span>
                </span>
                <Icon name="download" size={20} className="cv-file__icon" />
              </a>
            ))}
          </div>
        </div>

        {/* Linha do tempo */}
        <ol className="timeline">
          {experiences.map((item, index) => (
            <li
              key={`${item.company}-${item.title}`}
              className="timeline__item"
              data-reveal
              style={{ '--delay': `${(index % 2) * 0.08}s` }}
            >
              <span className="timeline__dot" aria-hidden="true" />
              <article className="timeline__card">
                <span className="timeline__period">{item.period}</span>
                <h3 className="timeline__role">{item.title}</h3>
                <p className="timeline__company">{item.company}</p>
              </article>
            </li>
          ))}

          <li className="timeline__item timeline__item--hire" data-reveal>
            <span className="timeline__dot" aria-hidden="true" />
            <article className="timeline__card">
              <span className="timeline__period">{openForHire.period}</span>
              <h3 className="timeline__role">{openForHire.title}</h3>
              <p className="timeline__company">{openForHire.company}</p>
              <p className="timeline__hire">
                <strong>{openForHire.status}</strong> {openForHire.message}
              </p>
              <div className="timeline__actions">
                <Link to="/projetos" className="btn btn--light">
                  Ver meus projetos <Icon name="arrowRight" className="icon-arrow" />
                </Link>
                <a href="#contact" className="btn timeline__contact">
                  Falar comigo <Icon name="mail" />
                </a>
              </div>
            </article>
          </li>
        </ol>
      </div>
    </section>
  )
}
