import { cvFiles, experiences } from '../../data/portfolio'
import Icon from '../ui/Icon'
import './Curriculum.css'

// Currículo como lista editorial: uma linha por experiência; a descrição abre no hover/foco.
export default function Curriculum() {
  return (
    <section id="curriculum" className="section curriculum pixel-edge">
      <div className="container">
        <header className="cv-head">
          <h2 className="section-title display">Trajetória</h2>

          {/* Download em destaque, ao lado do título */}
          <div className="cv-download">
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
          {experiences.map((item) => (
            <li key={`${item.company}-${item.title}`} className="cv-row" tabIndex={0}>
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
      </div>
    </section>
  )
}
