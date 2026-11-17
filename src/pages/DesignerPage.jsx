import { useState } from 'react'
import DesignIssue from '../components/design/DesignIssue'
import DesignViewer from '../components/design/DesignViewer'
import PageHero from '../components/layout/PageHero'
import { designProjects } from '../data/design'
import { useActiveSection } from '../hooks/useActiveSection'
import './DesignerPage.css'

const IDS = designProjects.map((p) => p.id)

// Rola até o projeto sem mexer na URL (âncoras confundem o roteador)
const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

// Layout de "banca de revista": índice fixo à esquerda, edições empilhadas à direita.
export default function DesignerPage() {
  const active = useActiveSection(IDS)
  const [viewer, setViewer] = useState(null)

  return (
    <main className="designer-page">
      <PageHero title="Designer" word="Design">
        <p className="dz-lead">
          Interfaces, identidades visuais e protótipos que desenhei para sites, sistemas e eventos.
        </p>
      </PageHero>

      <div className="container dz-shelf">
        <aside className="dz-index" aria-label="Projetos de design">
          <ol className="dz-index__list">
            {designProjects.map((project) => (
              <li key={project.id}>
                <button
                  type="button"
                  className="dz-index__item"
                  aria-current={active === project.id ? 'true' : undefined}
                  onClick={() => scrollToId(project.id)}
                >
                  {project.title}
                </button>
              </li>
            ))}
          </ol>
          <p className="dz-index__total">Total {String(designProjects.length).padStart(2, '0')}</p>
        </aside>

        <div className="dz-issues">
          {designProjects.map((project, i) => (
            <DesignIssue
              key={project.id}
              project={project}
              number={designProjects.length - i}
              isNew={i === 0}
              onOpen={(startAt) => setViewer({ ...project, startAt })}
            />
          ))}
        </div>
      </div>

      <DesignViewer project={viewer} onClose={() => setViewer(null)} />
    </main>
  )
}
