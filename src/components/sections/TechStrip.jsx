import { useState } from 'react'
import { techCategories, technologies } from '../../data/portfolio'
import TechLogo from '../ui/TechLogo'
import './TechStrip.css'

const ALL = 'all'
const MIN_ITEMS = 18 // com poucos itens, repete até encher a faixa

// Faixa de tecnologias em movimento, com filtros pequenos por área.
// Passar o mouse pausa a faixa e mostra o nome da tecnologia.
export default function TechStrip() {
  const [active, setActive] = useState(ALL)
  const filters = [{ id: ALL, name: 'Todas' }, ...techCategories]
  const visible = active === ALL ? technologies : technologies.filter((tech) => tech.categories.includes(active))

  // Repete a lista até ter itens suficientes; depois duplica para o loop não ter emenda
  let row = visible
  while (row.length < MIN_ITEMS) row = [...row, ...visible]
  const loop = [...row, ...row]

  return (
    <div className="tstrip">
      <div className="tstrip__filters" role="group" aria-label="Filtrar tecnologias por área">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className="tstrip__chip"
            aria-pressed={active === filter.id}
            onClick={() => setActive(filter.id)}
          >
            {filter.name}
          </button>
        ))}
      </div>

      {/* Lista acessível (leitores de tela); a faixa visual é decorativa */}
      <p className="sr-only">{visible.map((tech) => tech.name).join(', ')}</p>

      <div className="tstrip__viewport" aria-hidden="true">
        <div key={active} className="tstrip__track" style={{ '--dur': `${Math.max(24, row.length * 1.6)}s` }}>
          {loop.map((tech, i) => (
            <span key={`${tech.name}-${i}`} className="tstrip__item" data-name={tech.name}>
              {tech.logos.map((logo) => (
                <TechLogo key={logo} name={logo} size={tech.logos.length > 1 ? 22 : 30} />
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
