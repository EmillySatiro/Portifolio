import { useState } from 'react'
import DesignSpread from '../components/design/DesignSpread'
import DesignViewer from '../components/design/DesignViewer'
import PageHero from '../components/layout/PageHero'
import ProjectArchive from '../components/projects/ProjectArchive'
import Icon from '../components/ui/Icon'
import { archive, featuredProject, githubProfile, projectCategories, projects } from '../data/projects'
import './ProjectsPage.css'

const ALL = 'all'
const CATEGORY_NAMES = Object.fromEntries(projectCategories.map((cat) => [cat.id, cat.name]))
const LINK_LABELS = { github: 'Código', video: 'Vídeo', report: 'Relatório', research: 'Pesquisa' }

// Papel de cada página, nas cores do site (repete em ciclo; o texto fica claro ou escuro sozinho)
const PAPERS = ['#23264d', '#d9e7ee', '#3b1f4f', '#efe6d8', '#1d3a46', '#e7defa', '#2a2c45']
// Layouts de uma imagem só (os projetos têm uma foto cada); sem foto, a página "capa" com os logos
const LAYOUTS = ['cover', 'figure', 'stage', 'spine', 'stage-r']

// O PREMAUT em destaque, com as duas telas do site
const featured = {
  id: 'premaut',
  title: featuredProject.name,
  type: `${featuredProject.role.split(',')[0]} · ${featuredProject.badges.join(' · ')}`,
  description: featuredProject.description,
  liveUrl: featuredProject.site,
  screens: featuredProject.images.map((img) => ({ src: img.src, label: img.label })),
  spread: { layout: 'collage', color: '#1f4f56', images: [{ i: 0 }, { i: 1 }] },
  category: 'web',
}

// Converte um projeto da lista para o formato das páginas de revista
const toSpread = (project, i) => {
  const hasImage = Boolean(project.image)
  const portrait = project.image?.includes('foto-android')
  return {
    id: project.name.toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/g, '-'),
    title: project.name,
    type: [CATEGORY_NAMES[project.category], project.year, project.owner ? `com @${project.owner}` : project.role]
      .filter(Boolean)
      .join(' · '),
    description: project.description,
    screens: hasImage ? [{ src: project.image, label: project.name }] : [],
    logos: project.logos,
    links: project.links.map((link) => ({ label: LINK_LABELS[link.type], url: link.url })),
    spread: {
      layout: hasImage ? (portrait ? 'figure' : LAYOUTS[i % LAYOUTS.length]) : 'cover',
      color: PAPERS[i % PAPERS.length],
      images: hasImage ? [{ i: 0, crop: portrait || LAYOUTS[i % LAYOUTS.length] === 'figure' ? 'tall' : undefined }] : [],
    },
    category: project.category,
  }
}

const ALL_SPREADS = [featured, ...projects.map(toSpread)]

// Projetos como páginas de revista (mesmo modelo do Designer): uma por tela, cada uma com sua cor.
export default function ProjectsPage() {
  const [active, setActive] = useState(ALL)
  const [viewer, setViewer] = useState(null)
  const visible = active === ALL ? ALL_SPREADS : ALL_SPREADS.filter((p) => p.category === active)
  const filters = [{ id: ALL, name: 'Todos' }, ...projectCategories]

  return (
    <main className="projects-page">
      <PageHero title="Projetos" word="Projetos">
        <p className="pj-lead">Sistemas web, sistemas distribuídos, mobile e inteligência artificial.</p>
      </PageHero>

      <div className="pj-filters" role="group" aria-label="Filtrar projetos por área">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            className="pj-chip"
            aria-pressed={active === f.id}
            onClick={() => setActive(f.id)}
          >
            {f.name}
          </button>
        ))}
      </div>

      <section className="pj-board" key={active}>
        {visible.map((project, i) => (
          <DesignSpread
            key={project.id}
            project={project}
            index={i}
            onOpen={(startAt) => setViewer({ ...project, startAt })}
          />
        ))}
      </section>

      {/* ---------- Arquivo ---------- */}
      <section className="section pj-archive">
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

      <DesignViewer project={viewer} onClose={() => setViewer(null)} />
    </main>
  )
}
