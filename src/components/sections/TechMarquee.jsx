import { useState } from 'react'
import { techCategories } from '../../data/portfolio'
import './TechMarquee.css'

// Faixa com as tecnologias correndo na horizontal + filtros por categoria.
export default function TechMarquee() {
  const [active, setActive] = useState(0)
  const list = techCategories[active].techs
  // Listas curtas são repetidas para preencher a faixa.
  const techs = list.length < 10 ? [...list, ...list] : list

  return (
    <div className="tech" data-reveal>
      <div className="container tech__filters" role="tablist" aria-label="Categorias de tecnologias">
        {techCategories.map((cat, index) => (
          <button
            key={cat.name}
            type="button"
            role="tab"
            aria-selected={active === index}
            className={`tech__filter${active === index ? ' is-active' : ''}`}
            onClick={() => setActive(index)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* A key reinicia a animação ao trocar de categoria */}
      <div className="tech__band" key={active}>
        {[0, 1].map((copy) => (
          <ul key={copy} className="tech__track" aria-hidden={copy === 1 || undefined}>
            {techs.map((tech, i) => (
              <li key={`${tech}-${i}`} className={i % 2 ? 'is-outline' : undefined}>
                {tech}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
