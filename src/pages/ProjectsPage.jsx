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
      <PageHero
        title="Projetos"
        lead="O que construí, como fiz e com quais tecnologias: sistemas web, distribuídos, mobile e inteligência artificial."
      />

      {/* ---------- Destaque ---------- */}
      <section className="section pj-featured">
        <div className="container">
          <FeaturedProject project={featuredProject} />
        </div>
      </section>

      {/* ---------- Índice com filtros ---------- */}
      <section className="section pj-grid-section pixel-edge">
        <div className="container">
          <header className="section-head">
            <h2 className="section-title display">Selecionados</h2>
          </header>

          <div className="tabs pj-tabs" role="group" aria-label="Filtrar projetos">
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

          <ProjectIndex key={active} projects={visible} categoryNames={CATEGORY_NAMES} />
        </div>
      </section>

      {/* ---------- Arquivo ---------- */}
      <section className="section pj-archive pixel-edge">
        <div className="container">
          <header className="section-head pj-archive__head">
            <h2 className="section-title display">Mais projetos</h2>
            <a href={githubProfile} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              <Icon name="github" /> Ver tudo no GitHub
            </a>
          </header>
          <ProjectArchive items={archive} />
        </div>
      </section>
    </main>
  )
}
