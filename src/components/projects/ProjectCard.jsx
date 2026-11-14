import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import TechLogo from '../ui/TechLogo'
import './ProjectCard.css'

const LINK_TYPES = {
  github: { label: 'Código', icon: 'github' },
  video: { label: 'Vídeo', icon: 'play' },
  report: { label: 'Relatório', icon: 'file' },
  research: { label: 'Ver pesquisa', icon: 'book' },
}

function ProjectLink({ link }) {
  const type = LINK_TYPES[link.type]
  const content = (
    <>
      <Icon name={type.icon} size={15} /> {type.label}
    </>
  )
  // Links internos (ex.: /pesquisa) usam o roteador
  if (link.url.startsWith('/')) {
    return (
      <Link to={link.url} className="pcard__link">
        {content}
      </Link>
    )
  }
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer" className="pcard__link">
      {content}
    </a>
  )
}

export default function ProjectCard({ project, categoryName, order = 0 }) {
  return (
    <article className="pcard" data-cat={project.category} style={{ '--i': order }}>
      <div className="pcard__cover">
        {project.image ? (
          <img
            src={project.image}
            alt={`Imagem do projeto ${project.name}`}
            style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
            loading="lazy"
            decoding="async"
          />
        ) : (
          // Sem imagem: capa gerada com os logos da stack sobre uma grade de pixels
          <div className="pcard__generated" aria-hidden="true">
            {project.logos.slice(0, 3).map((logo) => (
              <span key={logo} className="pcard__bubble">
                <TechLogo name={logo} size={34} />
              </span>
            ))}
          </div>
        )}
        <span className="pcard__cat">{categoryName}</span>
        <span className="pcard__year">{project.year}</span>
      </div>

      <div className="pcard__body">
        <p className={`pcard__role${project.owner ? ' is-collab' : ''}`}>
          {project.owner ? `Colaboração · @${project.owner}` : project.role}
        </p>
        <h3 className="pcard__title display">{project.name}</h3>
        <p className="pcard__desc">{project.description}</p>

        <ul className="pcard__stack" aria-label="Tecnologias">
          {project.logos.map((logo) => (
            <li key={logo}>
              <TechLogo name={logo} size={18} />
            </li>
          ))}
        </ul>
      </div>

      <footer className="pcard__links">
        {project.links.map((link) => (
          <ProjectLink key={link.url} link={link} />
        ))}
      </footer>
    </article>
  )
}
