import { Link } from 'react-router-dom'
import { cvFiles, experiences, openForHire } from '../../data/portfolio'
import Scribble from '../ui/Scribble'
import './Curriculum.css'

export default function Curriculum() {
  return (
    <section id="curriculum" className="section curriculum">
      <div className="container curriculum__grid">
        <aside className="curriculum__side">
          <h2 className="curriculum__title display" data-reveal>
            Currículo:
          </h2>
          <p className="curriculum__subtitle" data-reveal style={{ '--delay': '0.1s' }}>
            Trajetória profissional, atuação acadêmica e experiências
          </p>

          <div className="curriculum__downloads" data-reveal style={{ '--delay': '0.2s' }}>
            <p className="eyebrow">Baixar currículo</p>
            {cvFiles.map((file) => (
              <a key={file.href} href={file.href} download={file.download} className="curriculum__file">
                <span className="curriculum__file-label">{file.label}</span>
                <span className="curriculum__file-detail">{file.detail} ↓</span>
              </a>
            ))}
          </div>

          <Link to="/projetos" className="cta-link spaced" data-reveal style={{ '--delay': '0.3s' }}>
            Ver meus projetos <span className="arrow">→</span>
          </Link>
        </aside>

        <ol className="curriculum__list">
          {experiences.map((item, index) => (
            <li key={`${item.company}-${item.title}`} className="curriculum__item" data-reveal style={{ '--delay': `${index * 0.05}s` }}>
              <span className="curriculum__num">{String(index + 1).padStart(2, '0')}</span>
              <div className="curriculum__info">
                <h3 className="curriculum__role">{item.title}</h3>
                <p className="curriculum__company">{item.company}</p>
              </div>
              <span className="curriculum__period">{item.period}</span>
            </li>
          ))}

          <li className="curriculum__item curriculum__item--hire" data-reveal>
            <span className="curriculum__num">{String(experiences.length + 1).padStart(2, '0')}</span>
            <div className="curriculum__info">
              <h3 className="curriculum__role">{openForHire.title}</h3>
              <p className="curriculum__company">{openForHire.company}</p>
              <p className="curriculum__hire-msg">
                <strong>{openForHire.status}</strong> {openForHire.message}
              </p>
            </div>
            <span className="curriculum__period">{openForHire.period}</span>
            <Scribble shape="heart" className="curriculum__heart" strokeWidth={4} />
          </li>
        </ol>
      </div>
    </section>
  )
}
