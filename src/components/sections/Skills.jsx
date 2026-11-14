import { useState } from 'react'
import { techCategories, technologies } from '../../data/portfolio'
import './Skills.css'

const ALL = 'all'

// Tecnologias como uma "tabela periódica": o filtro destaca os elementos da categoria.
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
        <header className="section-head skills__head">
          <p className="eyebrow skills__eyebrow" data-reveal>
            Tecnologias
          </p>
          <h2 className="section-title display" data-reveal style={{ '--delay': '0.08s' }}>
            Tabela periódica da minha stack
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
            <strong key={count}>{String(count).padStart(2, '0')}</strong> tecnologias
          </p>
        </div>

        <ol className="skills__table" data-reveal style={{ '--delay': '0.18s' }}>
          {technologies.map((tech, index) => (
            <li
              key={tech.name}
              className={`tile${matches(tech) ? '' : ' is-dim'}`}
              data-cat={tech.categories[0]}
              style={{ '--i': index }}
            >
              <span className="tile__num">{String(index + 1).padStart(2, '0')}</span>
              <span className="tile__symbol">{tech.symbol}</span>
              <span className="tile__name">{tech.name}</span>
              <span className="tile__cats" aria-hidden="true">
                {tech.categories.map((cat) => (
                  <i key={cat} data-cat={cat} />
                ))}
              </span>
            </li>
          ))}
        </ol>

        <ul className="skills__legend" aria-label="Legenda">
          {techCategories.map((cat) => (
            <li key={cat.id} data-cat={cat.id}>
              {cat.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
