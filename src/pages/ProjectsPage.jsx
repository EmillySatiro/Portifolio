import { useState } from 'react'
import FeaturedProject from '../components/projects/FeaturedProject'
import ProjectArchive from '../components/projects/ProjectArchive'
import ProjectIndex from '../components/projects/ProjectIndex'
import PageHero from '../components/layout/PageHero'
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
      <PageHero title="Projetos" />

      {/* ---------- Destaque ---------- */}
      <section className="section pj-featured pixel-edge">
        <div className="container">
          <FeaturedProject project={featuredProject} />
        </div>
      </section>

      {/* ---------- Índice com filtros ---------- */}
      <section className="section pj-grid-section pixel-edge">
        <div className="container">
          <header className="section-head">
            <h2 className="section-title display" data-reveal>
              Selecionados
            </h2>
            <p className="section-lead" data-reveal style={{ '--delay': '0.08s' }}>
              Sistemas web, sistemas distribuídos, mobile e inteligência artificial: o que construí, como fiz e com
              quais tecnologias.
            </p>
          </header>

          <div className="tabs pj-tabs" role="group" aria-label="Filtrar projetos" data-reveal>
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className="tab"
                data-cat={filter.id}
                style={{ '--tab-color': 'var(--cat)' }}
                aria-pressed={active === filter.id}
                onClick={() => setActive(filter.id)}
              >
                {filter.name}
                <sup>{countFor(filter.id)}</sup>
              </button>
            ))}
          </div>

          {/* key: ao trocar o filtro, as linhas entram de novo em sequência */}
          <ProjectIndex key={active} projects={visible} categoryNames={CATEGORY_NAMES} />
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
