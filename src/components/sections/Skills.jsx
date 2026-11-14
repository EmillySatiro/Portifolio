import { useState } from 'react'
import { techCategories, technologies } from '../../data/portfolio'
import TechLogo from '../ui/TechLogo'
import './Skills.css'

const ALL = 'all'
const SHORT_NAMES = { front: 'Front-end', back: 'Back-end', ai: 'IA & Dados', mobile: 'Mobile', tools: 'Ferramentas' }
const LOGO_SIZES = { 1: 46, 2: 34, 3: 28 }
const TOTAL = String(technologies.length).padStart(2, '0')

// Inclinação + brilho holográfico seguindo o ponteiro (escreve direto no estilo, sem re-render).
function handleMove(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width
  const y = (e.clientY - rect.top) / rect.height
  card.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`)
  card.style.setProperty('--my', `${(y * 100).toFixed(1)}%`)
  card.style.setProperty('--ry', `${((x - 0.5) * 18).toFixed(2)}deg`)
  card.style.setProperty('--rx', `${((0.5 - y) * 18).toFixed(2)}deg`)
}

function handleLeave(e) {
  const card = e.currentTarget
  card.style.setProperty('--ry', '0deg')
  card.style.setProperty('--rx', '0deg')
}

function TechCard({ tech, index, dim }) {
  const type = tech.categories[0]
  return (
    <li
      className={`tcard${dim ? ' is-dim' : ''}`}
      data-cat={type}
      style={{ '--i': index }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <article className="tcard__body">
        <header className="tcard__top">
          <span className="tcard__stage">{SHORT_NAMES[type]}</span>
          <span className="tcard__title">
            <h3 className="tcard__name">{tech.name}</h3>
            <span className="tcard__energy" aria-hidden="true" />
          </span>
        </header>

        <div className="tcard__art">
          {tech.logos.map((logo) => (
            <TechLogo key={logo} name={logo} size={LOGO_SIZES[tech.logos.length] ?? 26} />
          ))}
        </div>

        <p className="tcard__strip">
          Tipo: {tech.categories.map((cat) => SHORT_NAMES[cat]).join(' / ')}
        </p>
        <p className="tcard__desc">{tech.description}</p>

        <footer className="tcard__foot">
          <span>
            {String(index + 1).padStart(2, '0')}/{TOTAL}
          </span>
          <span aria-hidden="true">✦</span>
        </footer>
      </article>
      <span className="tcard__holo" aria-hidden="true" />
      <span className="tcard__glare" aria-hidden="true" />
    </li>
  )
}

export default function Skills() {
  const [active, setActive] = useState(ALL)
  const matches = (tech) => active === ALL || tech.categories.includes(active)
  const count = technologies.filter(matches).length
  const filters = [{ id: ALL, name: 'Todas' }, ...techCategories]

  return (
    <section id="skills" className="section skills pixel-edge">
      <span className="blur-word skills__blur parallax" aria-hidden="true">
        Stack
      </span>

      <div className="container">
        <header className="section-head">
          <p className="eyebrow skills__eyebrow" data-reveal>
            Tecnologias
          </p>
          <h2 className="section-title display" data-reveal style={{ '--delay': '0.08s' }}>
            Minha coleção de cartas
          </h2>
        </header>

        <div className="skills__toolbar" data-reveal style={{ '--delay': '0.12s' }}>
          <div className="skills__filters" role="group" aria-label="Filtrar por categoria">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`skills__filter${active === filter.id ? ' is-active' : ''}`}
                data-cat={filter.id}
                aria-pressed={active === filter.id}
                onClick={() => setActive(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>
          <p className="skills__count" aria-live="polite">
            <strong key={count}>{String(count).padStart(2, '0')}</strong> cartas
          </p>
        </div>

        <ul className="skills__deck" data-reveal style={{ '--delay': '0.16s' }}>
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} dim={!matches(tech)} />
          ))}
        </ul>
      </div>
    </section>
  )
}
