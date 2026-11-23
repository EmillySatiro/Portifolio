import { useState } from 'react'
import DesignSpread from '../components/design/DesignSpread'
import DesignViewer from '../components/design/DesignViewer'
import PageHero from '../components/layout/PageHero'
import { usePageTheme } from '../hooks/usePageTheme'
import { tint } from '../utils/color'
import ProjectArchive from '../components/projects/ProjectArchive'
import ProjectPair from '../components/projects/ProjectPair'
import Icon from '../components/ui/Icon'
import { archive, featuredProject, githubProfile, projectCategories, projects } from '../data/projects'
import './ProjectsPage.css'

const ALL = 'all'
const CATEGORY_NAMES = Object.fromEntries(projectCategories.map((cat) => [cat.id, cat.name]))
const LINK_LABELS = { github: 'Código', video: 'Vídeo', report: 'Relatório', research: 'Pesquisa' }

// O PREMAUT em destaque, com as duas telas do site
const featured = {
  id: 'premaut',
  title: featuredProject.name,
  type: `${featuredProject.role.split(',')[0]} · ${featuredProject.badges.join(' · ')}`,
  description: featuredProject.description,
  liveUrl: featuredProject.site,
  screens: featuredProject.images.map((img) => ({ src: img.src, label: img.label })),
  spread: { layout: 'collage', color: tint('#1f4f56') /* verde-azulado do site do PREMAUT */, images: [{ i: 0 }, { i: 1 }] },
  category: 'web',
}

const metaOf = (project) =>
  [CATEGORY_NAMES[project.category], project.year, project.owner ? `com @${project.owner}` : project.role]
    .filter(Boolean)
    .join(' · ')

// Projeto com imagem de destaque vira página de revista inteira (mesmo formato do Designer)
const toSpread = (project) => ({
  id: project.name.toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/g, '-'),
  title: project.name,
  type: metaOf(project),
  description: project.description,
  screens: [{ src: project.image, label: project.name }],
  links: project.links.map((link) => ({ label: LINK_LABELS[link.type], url: link.url })),
  spread: { layout: 'stage', color: tint(project.color), images: [{ i: 0 }] },
  category: project.category,
})

// Ganham página inteira com imagem só os projetos até o Patocast; os outros vão em duplas, sem imagem
const WITH_IMAGE = ['Patocast']

// Projetos como páginas de revista (mesmo modelo do Designer): uma por tela, cada uma com sua cor.
export default function ProjectsPage() {
  usePageTheme('light')
  const [active, setActive] = useState(ALL)
  const [viewer, setViewer] = useState(null)
  const inFilter = (p) => active === ALL || p.category === active
  const spreads = [featured, ...projects.filter((p) => WITH_IMAGE.includes(p.name)).map(toSpread)].filter(inFilter)
  const rest = projects.filter((p) => !WITH_IMAGE.includes(p.name)).filter(inFilter)
  // Duplas: dois projetos por página
  const pairs = []
  for (let i = 0; i < rest.length; i += 2) pairs.push(rest.slice(i, i + 2))
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
        {spreads.map((project, i) => (
          <DesignSpread
            key={project.id}
            project={project}
            index={i}
            onOpen={(startAt) => setViewer({ ...project, startAt })}
          />
        ))}
        {pairs.map((pair, i) => (
          <ProjectPair
            key={pair[0].name}
            items={pair}
            firstPage={(spreads.length + i) * 2 + 1}
            metaOf={metaOf}
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
