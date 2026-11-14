import { useState } from 'react'
import FeaturedProject from '../components/projects/FeaturedProject'
import ProjectArchive from '../components/projects/ProjectArchive'
import ProjectCard from '../components/projects/ProjectCard'
import Icon from '../components/ui/Icon'
import { archive, featuredProject, githubProfile, projectCategories, projects } from '../data/projects'
import './ProjectsPage.css'

const ALL = 'all'
const CATEGORY_NAMES = Object.fromEntries(projectCategories.map((cat) => [cat.id, cat.name]))

// Números do topo, calculados a partir dos dados
const collaborations = [...projects, ...archive].filter((item) => item.owner).length + 1 // +1: PREMAUT
const STATS = [
  { value: projects.length + 1, label: 'projetos em destaque' },
  { value: collaborations, label: 'projetos em equipe' },
  { value: archive.length, label: 'trabalhos acadêmicos' },
]

export default function ProjectsPage() {
  const [active, setActive] = useState(ALL)
  const visible = active === ALL ? projects : projects.filter((project) => project.category === active)
  const filters = [{ id: ALL, name: 'Todos' }, ...projectCategories]
  const countFor = (id) => (id === ALL ? projects.length : projects.filter((p) => p.category === id).length)

  return (
    <main className="projects-page">
      {/* ---------- Topo ---------- */}
      <section className="pj-hero">
        <span className="blur-word pj-hero__blur parallax" aria-hidden="true">
          Projetos
        </span>
        <div className="container pj-hero__inner">
          <p className="eyebrow pj-hero__eyebrow">Projetos</p>
          <h1 className="pj-hero__title display">
            Do código <span>à pesquisa</span>
          </h1>
          <p className="pj-hero__lead">
            Uma seleção dos meus repositórios e dos projetos em equipe em que contribuí: sistemas web completos, sistemas
            distribuídos, apps e pesquisa em visão computacional.
          </p>
          <ul className="pj-hero__stats">
            {STATS.map((stat) => (
              <li key={stat.label}>
                <strong>{String(stat.value).padStart(2, '0')}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Destaque ---------- */}
      <section className="section pj-featured pixel-edge">
        <div className="container">
          <FeaturedProject project={featuredProject} />
        </div>
      </section>

      {/* ---------- Grade com filtros ---------- */}
      <section className="section pj-grid-section pixel-edge">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow" data-reveal>
              Selecionados
            </p>
            <h2 className="section-title display" data-reveal style={{ '--delay': '0.08s' }}>
              Mais projetos
            </h2>
          </header>

          <div className="pj-filters" role="group" aria-label="Filtrar projetos" data-reveal>
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                data-cat={filter.id}
                aria-pressed={active === filter.id}
                className={`pj-filter${active === filter.id ? ' is-active' : ''}`}
                onClick={() => setActive(filter.id)}
              >
                {filter.name}
                <span>{countFor(filter.id)}</span>
              </button>
            ))}
          </div>

          {/* key: ao trocar o filtro, os cartões entram de novo em sequência */}
          <div key={active} className="pj-grid">
            {visible.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                categoryName={CATEGORY_NAMES[project.category]}
                order={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Arquivo ---------- */}
      <section className="section pj-archive pixel-edge">
        <div className="container">
          <header className="section-head pj-archive__head">
            <div>
              <p className="eyebrow" data-reveal>
                Arquivo
              </p>
              <h2 className="section-title display" data-reveal style={{ '--delay': '0.08s' }}>
                Trabalhos acadêmicos
              </h2>
            </div>
            <a href={githubProfile} target="_blank" rel="noopener noreferrer" className="btn btn--primary" data-reveal>
              <Icon name="github" /> Ver tudo no GitHub
            </a>
          </header>
          <ProjectArchive items={archive} />
        </div>
      </section>
    </main>
  )
}
