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

function TechCard({ tech, index, order = 0, static: isStatic = false }) {
  const type = tech.categories[0]
  const Tag = isStatic ? 'span' : 'li'
  return (
    <Tag
      className={`tcard${isStatic ? ' is-static' : ''}`}
      data-cat={type}
      style={{ '--i': order }}
      onPointerMove={isStatic ? undefined : handleMove}
      onPointerLeave={isStatic ? undefined : handleLeave}
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
    </Tag>
  )
}

// Algumas cartas de cada tipo para o monte que fica embaralhando.
const DECK_PREVIEW = techCategories
  .flatMap((cat) => technologies.filter((tech) => tech.categories[0] === cat.id).slice(0, 2))
  .slice(0, 8)

function ShuffleDeck({ onOpen }) {
  return (
    <div className="deck">
      <div
        className="deck__pile"
        role="button"
        tabIndex={0}
        aria-label="Abrir o baralho com todas as cartas"
        onClick={onOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onOpen()
          }
        }}
      >
        {DECK_PREVIEW.map((tech, k) => (
          <span key={tech.name} className={`deck__card deck__card--${k % 2 ? 'right' : 'left'}`} style={{ '--k': k }}>
            <TechCard tech={tech} index={technologies.indexOf(tech)} static />
          </span>
        ))}
      </div>
      <div className="deck__info">
        <p className="deck__count">
          <strong>{TOTAL}</strong> cartas no baralho
        </p>
        <p className="deck__hint">Escolha um tipo acima para abrir as cartas, ou clique no baralho para ver todas.</p>
      </div>
    </div>
  )
}

export default function Skills() {
  // null = baralho fechado embaralhando; senão, id da categoria (ou 'all')
  const [active, setActive] = useState(null)
  const visible = active ? technologies.filter((tech) => active === ALL || tech.categories.includes(active)) : []
  const filters = [{ id: ALL, name: 'Todas' }, ...techCategories]
  const countFor = (id) => (id === ALL ? technologies.length : technologies.filter((t) => t.categories.includes(id)).length)

  return (
    <section id="skills" className="section skills pixel-edge">

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
          <div className="tabs tabs--on-dark skills__tabs" role="group" aria-label="Escolher tipo de carta">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className="tab"
                data-cat={filter.id}
                aria-pressed={active === filter.id}
                onClick={() => setActive(filter.id)}
              >
                {filter.name}
                <sup>{countFor(filter.id)}</sup>
              </button>
            ))}
          </div>
          {active && (
            <button type="button" className="skills__shuffle" onClick={() => setActive(null)}>
              Recolher o baralho
            </button>
          )}
        </div>

        <div data-reveal style={{ '--delay': '0.16s' }}>
          {active ? (
            // key: ao trocar de filtro a lista remonta e as cartas são "distribuídas" de novo
            <ul key={active} className="skills__grid" aria-live="polite">
              {visible.map((tech, i) => (
                <TechCard key={tech.name} tech={tech} index={technologies.indexOf(tech)} order={i} />
              ))}
            </ul>
          ) : (
            <ShuffleDeck onOpen={() => setActive(ALL)} />
          )}
        </div>
      </div>
    </section>
  )
}
