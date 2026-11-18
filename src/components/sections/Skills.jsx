import { useState } from 'react'
import { techCategories, technologies } from '../../data/portfolio'
import TechLogo from '../ui/TechLogo'
import './Skills.css'

const ALL = 'all'
const SHORT_NAMES = { front: 'Front-end', back: 'Back-end', ai: 'IA & Dados', mobile: 'Mobile', tools: 'Ferramentas' }
const TOTAL = String(technologies.length).padStart(2, '0')
const FAN_SPREAD = 54 // abertura máxima do leque, em graus
const FAN_STEP = 9 // abertura entre duas cartas quando são poucas

// Brilho holográfico seguindo o mouse (escreve direto no estilo, sem re-render)
function handleMove(e) {
  if (e.pointerType !== 'mouse') return
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--mx', `${(((e.clientX - rect.left) / rect.width) * 100).toFixed(1)}%`)
  card.style.setProperty('--my', `${(((e.clientY - rect.top) / rect.height) * 100).toFixed(1)}%`)
}

function Card({ tech, number, angle, order, active, onSelect }) {
  const type = tech.categories[0]
  return (
    <li className="hand__slot" style={{ '--a': `${angle}deg`, '--i': order }}>
      <button
        type="button"
        className={`tcard${active ? ' is-active' : ''}`}
        data-cat={type}
        onPointerMove={handleMove}
        onPointerEnter={onSelect}
        onFocus={onSelect}
        onClick={onSelect}
        aria-label={`${tech.name}: ${tech.description}`}
      >
        <span className="tcard__top">
          <span className="tcard__type">{SHORT_NAMES[type]}</span>
          <span className="tcard__num">
            {String(number).padStart(2, '0')}/{TOTAL}
          </span>
        </span>
        <span className="tcard__art">
          {tech.logos.map((logo) => (
            <TechLogo key={logo} name={logo} size={tech.logos.length > 1 ? 34 : 46} />
          ))}
        </span>
        <span className="tcard__name">{tech.name}</span>
        <span className="tcard__foil" aria-hidden="true" />
      </button>
    </li>
  )
}

// Tecnologias como uma mão de cartas: o filtro escolhe o tipo, as cartas são distribuídas em leque
// e a carta apontada sobe do leque, com a descrição embaixo.
export default function Skills() {
  const [active, setActive] = useState(ALL)
  const [selected, setSelected] = useState(null)
  const visible = active === ALL ? technologies : technologies.filter((tech) => tech.categories.includes(active))
  const filters = [{ id: ALL, name: 'Todas' }, ...techCategories]
  const countFor = (id) => (id === ALL ? technologies.length : technologies.filter((t) => t.categories.includes(id)).length)

  const step = visible.length > 1 ? Math.min(FAN_STEP, FAN_SPREAD / (visible.length - 1)) : 0
  const current = selected && visible.includes(selected) ? selected : null

  return (
    <section id="skills" className="section skills pixel-edge">
      <div className="container">
        <header className="skills__head">
          <h2 className="skills__title">Minha coleção de cartas</h2>
          <p className="skills__lead">
            {technologies.length} tecnologias que uso no dia a dia. Escolha um tipo e passe o mouse nas cartas.
          </p>
        </header>

        <div className="skills__filters" role="group" aria-label="Escolher tipo de carta">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className="skills__chip"
              data-cat={filter.id}
              aria-pressed={active === filter.id}
              onClick={() => {
                setActive(filter.id)
                setSelected(null)
              }}
            >
              {filter.name} <span>{countFor(filter.id)}</span>
            </button>
          ))}
        </div>

        {/* key: ao trocar o filtro o leque remonta e as cartas são distribuídas de novo */}
        <ul key={active} className="hand" onPointerLeave={() => setSelected(null)}>
          {visible.map((tech, i) => (
            <Card
              key={tech.name}
              tech={tech}
              number={technologies.indexOf(tech) + 1}
              angle={(i - (visible.length - 1) / 2) * step}
              order={i}
              active={current === tech}
              onSelect={() => setSelected(tech)}
            />
          ))}
        </ul>

        <p className="skills__caption" aria-live="polite">
          {current ? (
            <>
              <strong>{current.name}</strong>
              <span>{current.description}</span>
              <em>{current.categories.map((cat) => SHORT_NAMES[cat]).join(' · ')}</em>
            </>
          ) : (
            <span className="skills__hint">Passe o mouse ou toque numa carta para ver o que ela faz.</span>
          )}
        </p>
      </div>
    </section>
  )
}
