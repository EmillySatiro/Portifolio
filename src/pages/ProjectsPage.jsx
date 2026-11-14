import { useState } from 'react'
import FeaturedProject from '../components/projects/FeaturedProject'
import ProjectArchive from '../components/projects/ProjectArchive'
import ProjectCard from '../components/projects/ProjectCard'
import Icon from '../components/ui/Icon'
import { archive, featuredProject, githubProfile, projectCategories, projects } from '../data/projects'
import './ProjectsPage.css'

const ALL = 'all'
const CATEGORY_NAMES = Object.fromEntries(projectCategories.map((cat) => [cat.id, cat.name]))

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
          <h1 className="pj-hero__title display">Projetos</h1>
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
            <h2 className="section-title display" data-reveal>
              Selecionados
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
            <h2 className="section-title display" data-reveal>
              Mais projetos
            </h2>
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
