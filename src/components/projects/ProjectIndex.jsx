import { useEffect, useRef, useState } from 'react'
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
      <Link to={link.url} className="pidx__link">
        {content}
      </Link>
    )
  }
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer" className="pidx__link">
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
    <div className="pidx__generated" aria-hidden="true">
      {project.logos.slice(0, 3).map((logo) => (
        <span key={logo}>
          <TechLogo name={logo} size={30} />
        </span>
      ))}
    </div>
  )
}

const canHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches

// Índice de projetos: uma linha por projeto; no desktop, a capa segue o ponteiro.
export default function ProjectIndex({ projects, categoryNames }) {
  const previewRef = useRef(null)
  const [hovered, setHovered] = useState(null)

  // A prévia acompanha o ponteiro com um leve atraso (escrito direto no estilo, sem re-render)
  useEffect(() => {
    if (!canHover()) return undefined
    let x = 0
    let y = 0
    let tx = 0
    let ty = 0
    let frame
    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
    }
    const loop = () => {
      x += (tx - x) * 0.18
      y += (ty - y) * 0.18
      if (previewRef.current) previewRef.current.style.translate = `${x}px ${y}px`
      frame = requestAnimationFrame(loop)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    loop()
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <>
      <ol className="pidx" onPointerLeave={() => setHovered(null)}>
        {projects.map((project, index) => (
          <li
            key={project.name}
            className="pidx__row"
            data-cat={project.category}
            style={{ '--i': index }}
            onPointerEnter={() => setHovered(project)}
          >
            <span className="pidx__num">{String(index + 1).padStart(2, '0')}</span>

            {/* No celular a capa aparece dentro da linha */}
            <div className="pidx__thumb">
              <ProjectCover project={project} />
            </div>

            <div className="pidx__main">
              <h3 className="pidx__name display">{project.name}</h3>
              <p className="pidx__desc">{project.description}</p>
              <ul className="pidx__stack" aria-label="Tecnologias">
                {project.logos.map((logo) => (
                  <li key={logo}>
                    <TechLogo name={logo} size={16} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="pidx__meta">
              <span className="pidx__cat">{categoryNames[project.category]}</span>
              <span className="pidx__who">{project.owner ? `Com @${project.owner}` : project.role}</span>
              <span className="pidx__year">{project.year}</span>
            </div>

            <div className="pidx__links">
              {project.links.map((link) => (
                <ProjectLink key={link.url} link={link} />
              ))}
            </div>
          </li>
        ))}
      </ol>

      <div ref={previewRef} className={`pidx__preview${hovered ? ' is-visible' : ''}`} aria-hidden="true">
        {hovered && (
          <div key={hovered.name} className="pidx__preview-card" data-cat={hovered.category}>
            <ProjectCover project={hovered} />
          </div>
        )}
      </div>
    </>
  )
}
