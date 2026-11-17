import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import TechLogo from '../ui/TechLogo'
import RepoPreview from './RepoPreview'
import './ProjectIndex.css'

const LINK_TYPES = {
  github: { label: 'Código', icon: 'github' },
  video: { label: 'Vídeo', icon: 'play' },
  report: { label: 'Relatório', icon: 'file' },
  research: { label: 'Pesquisa', icon: 'book' },
}

function ProjectLink({ link }) {
  const type = LINK_TYPES[link.type]
  const content = (
    <>
      <Icon name={type.icon} size={15} /> {type.label}
    </>
  )
  // Links internos (ex.: /academico) usam o roteador
  if (link.url.startsWith('/')) {
    return (
      <Link to={link.url} className="pcase__link">
        {content}
      </Link>
    )
  }
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer" className="pcase__link">
      {content}
    </a>
  )
}

// Capa do projeto: imagem real, prévia do repositório ou os logos da stack
export function ProjectCover({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Imagem do projeto ${project.name}`}
        style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
        loading="lazy"
        decoding="async"
      />
    )
  }
  if (project.repoPreview) return <RepoPreview {...project.repoPreview} />
  return (
    <div className="pcase__generated" aria-hidden="true">
      {project.logos.slice(0, 3).map((logo) => (
        <span key={logo}>
          <TechLogo name={logo} size={30} />
        </span>
      ))}
    </div>
  )
}

// Nomes das tecnologias (para a stack escrita por extenso)
const TECH_NAMES = {
  react: 'React',
  vue: 'Vue 3',
  vite: 'Vite',
  typescript: 'TypeScript',
  node: 'Node.js',
  express: 'Express',
  flask: 'Flask',
  fastapi: 'FastAPI',
  postgres: 'PostgreSQL',
  supabase: 'Supabase',
  sqlite: 'SQLite',
  chartjs: 'Chart.js',
  docker: 'Docker',
  axios: 'Axios',
  python: 'Python',
  bash: 'Shell',
  locust: 'Locust',
  java: 'Java',
  rabbitmq: 'RabbitMQ',
  cpp: 'C++',
  kotlin: 'Kotlin',
  android: 'Android',
  pytorch: 'PyTorch',
  opencv: 'OpenCV',
  sklearn: 'Scikit-learn',
  pandas: 'Pandas',
  jupyter: 'Jupyter',
  next: 'Next.js',
}

// Índice de estudos de caso: capa à esquerda, ficha do projeto à direita, cada um sob um fio.
export default function ProjectIndex({ projects, categoryNames }) {
  return (
    <ol className="pcase-list">
      {projects.map((project, index) => (
        <li key={project.name} className="pcase" data-cat={project.category} style={{ '--i': Math.min(index, 4) }}>
          <div className="pcase__cover">
            <ProjectCover project={project} />
          </div>

          <div className="pcase__body">
            <header className="pcase__head">
              <h3 className="pcase__name display">{project.name}</h3>
              <p className="pcase__meta">
                <span className="pcase__cat">{categoryNames[project.category]}</span>
                <time>{project.year}</time>
                <span className={project.owner ? 'is-collab' : undefined}>
                  {project.owner ? `Em equipe com @${project.owner}` : project.role}
                </span>
              </p>
            </header>

            <p className="pcase__pitch">{project.pitch}</p>

            <div className="pcase__details">
              <div>
                <h4 className="pcase__label">O que foi feito</h4>
                <ul className="pcase__did">
                  {project.did.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                  {project.stat && (
                    <li className="pcase__fact">
                      <strong className="num">{project.stat.value}</strong> {project.stat.label}
                    </li>
                  )}
                </ul>
              </div>

              <div>
                <h4 className="pcase__label">Stack</h4>
                <ul className="pcase__stack">
                  {project.logos.map((logo) => (
                    <li key={logo}>
                      <TechLogo name={logo} size={16} /> {TECH_NAMES[logo] ?? logo}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pcase__links">
              {project.links.map((link) => (
                <ProjectLink key={link.url} link={link} />
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
