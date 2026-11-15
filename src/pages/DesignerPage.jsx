import DesignCase from '../components/design/DesignCase'
import PageHero from '../components/layout/PageHero'
import { designProjects } from '../data/design'
import './DesignerPage.css'

// Rola até o estudo de caso sem mexer na URL (âncoras confundem o roteador)
const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

export default function DesignerPage() {
  return (
    <main className="designer-page">
      <PageHero title="Designer" word="Design" />

      {/* Índice dos projetos */}
      <section className="container dz-index" aria-label="Projetos de design">
        <p className="dz-index__lead" data-reveal>
          Interfaces, identidades visuais e protótipos. Escolha um projeto ou role a página.
        </p>
        <ol className="dz-index__list">
          {designProjects.map((project, i) => (
            <li key={project.id} data-reveal style={{ '--delay': `${i * 0.04}s` }}>
              <button type="button" className="dz-index__item" onClick={() => scrollToId(project.id)}>
                <span className="dz-index__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="dz-index__name">{project.title}</span>
                <span className="dz-index__type">{project.type}</span>
              </button>
            </li>
          ))}
        </ol>
      </section>

      <div className="container">
        {designProjects.map((project, i) => (
          <DesignCase key={project.id} project={project} index={i} />
        ))}
      </div>
    </main>
  )
}
