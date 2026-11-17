import DesignCase from '../components/design/DesignCase'
import PageHero from '../components/layout/PageHero'
import { designProjects } from '../data/design'
import './DesignerPage.css'

export default function DesignerPage() {
  return (
    <main className="designer-page">
      <PageHero
        title="Designer"
        lead="Interfaces, identidades visuais e protótipos que desenhei para sites, sistemas e eventos."
      />

      <div className="container">
        {designProjects.map((project) => (
          <DesignCase key={project.id} project={project} />
        ))}
      </div>
    </main>
  )
}
