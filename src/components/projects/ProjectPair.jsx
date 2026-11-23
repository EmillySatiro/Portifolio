import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import TechLogo from '../ui/TechLogo'
import { isLight, tint } from '../../utils/color'
import './ProjectPair.css'

const LINK_LABELS = { github: 'Código', video: 'Vídeo', report: 'Relatório', research: 'Pesquisa' }

// Metade de página: faixa vertical com o nome (como a lombada do SimulNet) + o projeto em texto.
// O fundo é um tom claro da cor do projeto; a cor forte fica na faixa e nos detalhes.
function Half({ project, page, meta }) {
  const chars = Math.max(...project.name.split(/\s+/).map((word) => word.length))
  return (
    <article
      className={`ppage${isLight(project.color) ? ' has-light-accent' : ''}`}
      style={{ '--paper': tint(project.color), '--accent': project.color, '--chars': chars }}
    >
      <span className="ppage__spine" aria-hidden="true">
        {project.name}
      </span>

      <div className="ppage__body">
        <header className="ppage__head">
          <p className="ppage__meta">{meta}</p>
          <h2 className="ppage__title">{project.name}</h2>
          <p className="ppage__pitch">{project.pitch}</p>
        </header>

        <ul className="ppage__did">
          {project.did.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <footer className="ppage__foot">
          <ul className="ppage__stack" aria-label="Tecnologias">
            {project.logos.map((logo) => (
              <li key={logo}>
                <TechLogo name={logo} size={20} />
              </li>
            ))}
          </ul>
          <p className="ppage__links">
            {project.links.map((link) =>
              link.url.startsWith('/') ? (
                <Link key={link.url} to={link.url} className="ppage__link">
                  {LINK_LABELS[link.type]} <Icon name="arrowRight" size={12} />
                </Link>
              ) : (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="ppage__link">
                  {LINK_LABELS[link.type]} <Icon name="external" size={12} />
                </a>
              ),
            )}
          </p>
        </footer>

        <span className="ppage__num" aria-hidden="true">
          {String(page).padStart(2, '0')}
        </span>
      </div>
    </article>
  )
}

// Dois projetos sem imagem lado a lado, cada um numa metade da tela (uma página dupla de revista).
export default function ProjectPair({ items, firstPage, metaOf }) {
  return (
    <section className={`ppair${items.length === 1 ? ' is-single' : ''}`}>
      {items.map((project, i) => (
        <Half key={project.name} project={project} page={firstPage + i} meta={metaOf(project)} />
      ))}
    </section>
  )
}
