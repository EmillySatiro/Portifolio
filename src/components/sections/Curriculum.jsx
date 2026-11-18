import { useEffect, useRef, useState } from 'react'
import { cvFiles, experiences } from '../../data/portfolio'
import Icon from '../ui/Icon'
import PastelBackdrop from '../ui/PastelBackdrop'
import TechStrip from './TechStrip'
import './Curriculum.css'

// Fundo de cada cartão, nas cores da capa (repete em ciclo)
const TINTS = [
  ['#23264d', '#7b3fc4'],
  ['#1d3557', '#5cc6e3'],
  ['#3b1f4f', '#e0559c'],
  ['#2a2c45', '#f2a65a'],
]

const SWIPE = 50 // px de arrasto para trocar de cartão

// Trajetória como carrossel: um cartão em destaque no centro e os vizinhos menores dos lados.
// Passa com as setas, o teclado, arrastando ou clicando num cartão do lado.
export default function Curriculum() {
  const [current, setCurrent] = useState(0)
  const drag = useRef(null)
  const total = experiences.length
  const go = (i) => setCurrent(Math.max(0, Math.min(total - 1, i)))

  // Setas do teclado quando o carrossel está em foco
  const stageRef = useRef(null)
  useEffect(() => {
    const stage = stageRef.current
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setCurrent((c) => Math.min(total - 1, c + 1))
      if (e.key === 'ArrowLeft') setCurrent((c) => Math.max(0, c - 1))
    }
    stage.addEventListener('keydown', onKey)
    return () => stage.removeEventListener('keydown', onKey)
  }, [total])

  return (
    <section id="curriculum" className="curriculum pixel-edge">
      <PastelBackdrop />

      <header className="cv-head">
        <h2 className="cv-title">Minha trajetória</h2>
        <div className="cv-download">
          {cvFiles.map((file, i) => (
            <a
              key={file.href}
              href={file.href}
              download={file.download}
              className={`pbtn ${i === 0 ? 'pbtn--main' : 'pbtn--glass'}`}
            >
              <Icon name="download" size={17} /> <span>Currículo · {file.label}</span>
            </a>
          ))}
        </div>
      </header>

      <div
        ref={stageRef}
        className="cv-stage"
        tabIndex={0}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Experiências"
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
        {experiences.map((item, i) => {
          const d = i - current
          const [from, to] = TINTS[i % TINTS.length]
          return (
            <article
              key={`${item.company}-${item.title}`}
              className={`cv-card${d === 0 ? ' is-active' : ''}`}
              style={{ '--d': d, '--abs': Math.abs(d), '--from': from, '--to': to }}
              aria-hidden={d !== 0}
              onClick={() => d !== 0 && go(i)}
            >
              <span className="cv-card__glow" aria-hidden="true" />
              <span className="cv-card__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="cv-card__period">{item.period}</p>
              <div className="cv-card__body">
                <h3 className="cv-card__role">{item.title}</h3>
                <p className="cv-card__company">{item.company}</p>
                <p className="cv-card__desc">{item.description}</p>
              </div>
            </article>
          )
        })}
      </div>

      <div className="cv-controls">
        <button
          type="button"
          className="pbtn pbtn--glass pbtn--icon"
          onClick={() => go(current - 1)}
          disabled={current === 0}
          aria-label="Experiência anterior"
        >
          <Icon name="arrowLeft" />
        </button>
        <p className="cv-count" aria-live="polite">
          <strong>{String(current + 1).padStart(2, '0')}</strong> / {String(total).padStart(2, '0')}
        </p>
        <div className="cv-progress" aria-hidden="true">
          <span style={{ width: `${((current + 1) / total) * 100}%` }} />
        </div>
        <button
          type="button"
          className="pbtn pbtn--main pbtn--icon"
          onClick={() => go(current + 1)}
          disabled={current === total - 1}
          aria-label="Próxima experiência"
        >
          <Icon name="arrowRight" />
        </button>
      </div>

      <div className="cv-stack">
        <TechStrip />
      </div>
    </section>
  )
}
