import { useState } from 'react'
import DesignSpread from '../components/design/DesignSpread'
import DesignViewer from '../components/design/DesignViewer'
import PageHero from '../components/layout/PageHero'
import { designProjects } from '../data/design'
import './DesignerPage.css'

// Cada projeto é uma página dupla de revista, com layouts diferentes; as telas abrem no visualizador.
export default function DesignerPage() {
  const [viewer, setViewer] = useState(null)

  return (
    <main className="designer-page">
      <PageHero title="Designer" word="Design">
        <p className="dz-lead">
          Interfaces, identidades visuais e protótipos que desenhei para sites, sistemas e eventos.
        </p>
      </PageHero>

      <section className="dz-board">
        <div className="dz-board__list">
          {designProjects.map((project, i) => (
            <DesignSpread
              key={project.id}
              project={project}
              index={i}
              onOpen={(startAt) => setViewer({ ...project, startAt })}
            />
          ))}
        </div>
      </section>

      <DesignViewer project={viewer} onClose={() => setViewer(null)} />
    </main>
  )
}
