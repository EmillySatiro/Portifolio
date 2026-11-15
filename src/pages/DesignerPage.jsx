import DesignCase from '../components/design/DesignCase'
import PageHero from '../components/layout/PageHero'
import { designProjects } from '../data/design'
import './DesignerPage.css'

export default function DesignerPage() {
  return (
    <main className="designer-page">
      <PageHero title="Designer" word="Design">
        <p className="dz-lead">
          Interfaces, identidades visuais e protótipos que desenhei para sites, sistemas e eventos.
        </p>
      </PageHero>

      <div className="container">
        {designProjects.map((project, i) => (
          <DesignCase key={project.id} project={project} index={i} />
        ))}
      </div>
    </main>
  )
}
