import { useEffect, useRef, useState } from 'react'
import { cvFiles, experiences, techCategories, technologies } from '../../data/portfolio'
import Icon from '../ui/Icon'
import PastelBackdrop from '../ui/PastelBackdrop'
import TechLogo from '../ui/TechLogo'
import './Curriculum.css'

const ALL = 'all'
const SWIPE = 50 // px de arrasto para trocar de experiência
const pad = (n) => String(n).padStart(2, '0')

// Trajetória + tecnologias (referência: anel de imagens em volta de um texto central).
// As tecnologias giram num anel de azulejos; no centro fica a experiência atual, com navegação
// e os downloads do currículo. Os filtros embaixo escolhem quais tecnologias ficam no anel.
export default function Curriculum() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)
  const [filter, setFilter] = useState(ALL)
  const drag = useRef(null)
  const sectionRef = useRef(null)
  const total = experiences.length
  const item = experiences[current]

  const filters = [{ id: ALL, name: 'Todas' }, ...techCategories]
  const ring = filter === ALL ? technologies : technologies.filter((tech) => tech.categories.includes(filter))

  const go = (i) => {
    const next = Math.max(0, Math.min(total - 1, i))
    if (next === current) return
    setDir(next > current ? 1 : -1)
    setCurrent(next)
  }

  // Setas do teclado enquanto a seção está em foco
  const goRef = useRef(go)
  goRef.current = go
  useEffect(() => {
    const el = sectionRef.current
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goRef.current(current + 1)
      if (e.key === 'ArrowLeft') goRef.current(current - 1)
    }
    el.addEventListener('keydown', onKey)
    return () => el.removeEventListener('keydown', onKey)
  }, [current])

  return (
    <section id="curriculum" className="curriculum pixel-edge" ref={sectionRef} style={{ '--n': ring.length }}>
      <PastelBackdrop />

      {/* Órbita: o anel fica centrado exatamente no texto do meio */}
      <div className="cv-orbit">
        {/* Anel de tecnologias: gira devagar; cada azulejo gira ao contrário para ficar de pé */}
        <div className="cv-ring" aria-hidden="true">
          <div key={filter} className="cv-ring__spin">
            {ring.map((tech, i) => (
              <span key={tech.name} className="cv-tile" style={{ '--i': i }} data-cat={tech.categories[0]}>
                <span className="cv-tile__face" data-name={tech.name}>
                  {tech.logos.map((logo) => (
                    <TechLogo key={logo} name={logo} size={tech.logos.length > 1 ? 22 : 30} />
                  ))}
                </span>
              </span>
            ))}
          </div>
        </div>
        <p className="sr-only">Tecnologias: {ring.map((tech) => tech.name).join(', ')}</p>

        {/* Centro: experiência atual (a key nova faz a entrada animar a cada troca) */}
        <div
          className="cv-center"
          style={{ '--dir': dir }}
          onPointerDown={(e) => {
            drag.current = e.clientX
          }}
          onPointerUp={(e) => {
            if (drag.current === null) return
            const dx = e.clientX - drag.current
            drag.current = null
            if (dx < -SWIPE) go(current + 1)
            if (dx > SWIPE) go(current - 1)
          }}
        >
          <h2 className="cv-title">Minha trajetória</h2>

          <div key={current} className="cv-item" aria-live="polite">
            <p className="cv-item__period">{item.period}</p>
            <h3 className="cv-item__role">{item.title}</h3>
            <p className="cv-item__company">{item.company}</p>
            <p className="cv-item__desc">{item.description}</p>
          </div>

          <div className="cv-nav" aria-label="Experiências">
            <button
              type="button"
              className="pbtn pbtn--glass pbtn--icon cv-nav__btn"
              onClick={() => go(current - 1)}
              disabled={current === 0}
              aria-label="Experiência anterior"
            >
              <Icon name="arrowLeft" size={18} />
            </button>
            <div className="cv-dots">
              {experiences.map((exp, i) => (
                <button
                  key={`${exp.company}-${exp.title}`}
                  type="button"
                  className={`cv-dot${i === current ? ' is-active' : ''}`}
                  onClick={() => go(i)}
                  aria-label={`${exp.title} · ${exp.company}`}
                  aria-current={i === current ? 'step' : undefined}
                />
              ))}
            </div>
            <span className="cv-nav__count">
              {pad(current + 1)} / {pad(total)}
            </span>
            <button
              type="button"
              className="pbtn pbtn--main pbtn--icon cv-nav__btn"
              onClick={() => go(current + 1)}
              disabled={current === total - 1}
              aria-label="Próxima experiência"
            >
              <Icon name="arrowRight" size={18} />
            </button>
          </div>

          <div className="cv-download">
            {cvFiles.map((file, i) => (
              <a
                key={file.href}
                href={file.href}
                download={file.download}
                className={`pbtn ${i === 0 ? 'pbtn--main' : 'pbtn--glass'}`}
              >
                <Icon name="download" size={16} /> Currículo · {file.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="cv-filters" role="group" aria-label="Filtrar tecnologias por área">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            className="cv-chip"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.name}
          </button>
        ))}
      </div>
    </section>
  )
}
