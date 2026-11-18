import { cvFiles, experiences, openForHire } from '../../data/portfolio'
import Icon from '../ui/Icon'
import PastelBackdrop from '../ui/PastelBackdrop'
import TechStrip from './TechStrip'
import './Curriculum.css'

// Currículo sobre o fundo pastel da capa: título e download à esquerda, experiências em
// placas de vidro à direita (a descrição abre no hover/foco) e, embaixo, a faixa de tecnologias.
export default function Curriculum() {
  return (
    <section id="curriculum" className="section curriculum pixel-edge">
      <PastelBackdrop />

      <div className="container cv-layout">
        <header className="cv-head">
          <p className="cv-status">
            <span className="cv-status__dot" aria-hidden="true" />
            {openForHire.status.replace('!', '')}
          </p>
          <h2 className="cv-title">Trajetória</h2>
          <p className="cv-lead">Experiências em desenvolvimento, design, pesquisa e gestão.</p>

          <div className="cv-download">
            {cvFiles.map((file, i) => (
              <a
                key={file.href}
                href={file.href}
                download={file.download}
                className={`pbtn ${i === 0 ? 'pbtn--main' : 'pbtn--glass'}`}
              >
                <Icon name="download" size={17} /> <span>Currículo · {file.label}</span>
              </a>
            ))}
          </div>
        </header>

        <ol className="cv-list">
          {experiences.map((item) => (
            <li key={`${item.company}-${item.title}`} className="cv-row" tabIndex={0}>
              <div className="cv-row__top">
                <span className="cv-row__period">{item.period}</span>
                <span className="cv-row__toggle" aria-hidden="true" />
              </div>
              <h3 className="cv-row__role">{item.title}</h3>
              <p className="cv-row__company">{item.company}</p>
              <div className="cv-row__more">
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="cv-stack">
        <TechStrip />
      </div>
    </section>
  )
}
