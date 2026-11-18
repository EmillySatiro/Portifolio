import { useEffect, useRef, useState } from 'react'
import { cvFiles, experiences } from '../../data/portfolio'
import Icon from '../ui/Icon'
import PastelBackdrop from '../ui/PastelBackdrop'
import TechStrip from './TechStrip'
import './Curriculum.css'

const SWIPE = 50 // px de arrasto para trocar de experiência
const pad = (n) => String(n).padStart(2, '0')
// Ano de início de cada experiência, para a linha do tempo ("mar. 2026 — jun. 2026" → 2026)
const yearOf = (period) => period.match(/\d{4}/)?.[0] ?? ''

// Trajetória no estilo da capa: o cargo em letras enormes troca com animação (sobe saindo de uma
// "janela"), os detalhes ficam em colunas embaixo e uma linha do tempo com marcadores de pixel navega.
export default function Curriculum() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)
  const drag = useRef(null)
  const sectionRef = useRef(null)
  const total = experiences.length
  const item = experiences[current]

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
    <section id="curriculum" className="curriculum pixel-edge" ref={sectionRef}>
      <PastelBackdrop />

      <div className="container cv-top">
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
      </div>

      {/* Experiência atual: a key nova faz as animações de entrada rodarem a cada troca */}
      <div
        className="container cv-stage"
        style={{ '--dir': dir }}
        aria-live="polite"
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
        <div key={current} className="cv-item">
          <p className="cv-item__meta">
            <span className="cv-item__index">
              {pad(current + 1)}
              <small>/{pad(total)}</small>
            </span>
            <span className="cv-item__period">{item.period}</span>
          </p>

          <h3 className="cv-item__role">
            {item.title.split(' ').map((word, w) => (
              <span key={w} className="cv-word">
                <span style={{ '--w': w }}>{word}</span>
              </span>
            ))}
          </h3>

          <div className="cv-item__details">
            <p className="cv-item__company">{item.company}</p>
            <p className="cv-item__desc">{item.description}</p>
          </div>
        </div>
      </div>

      {/* Linha do tempo: um marcador de pixel por experiência, a barra enche até a atual */}
      <nav className="container cv-timeline" aria-label="Experiências">
        <button
          type="button"
          className="pbtn pbtn--glass pbtn--icon"
          onClick={() => go(current - 1)}
          disabled={current === 0}
          aria-label="Experiência anterior"
        >
          <Icon name="arrowLeft" />
        </button>

        <ol className="cv-rail" style={{ '--progress': total > 1 ? current / (total - 1) : 0 }}>
          {experiences.map((exp, i) => (
            <li key={`${exp.company}-${exp.title}`}>
              <button
                type="button"
                className={`cv-stop${i === current ? ' is-active' : ''}${i < current ? ' is-past' : ''}`}
                onClick={() => go(i)}
                aria-current={i === current ? 'step' : undefined}
                aria-label={`${exp.title} · ${exp.company}`}
              >
                <span className="cv-stop__dot" />
                <span className="cv-stop__year">{yearOf(exp.period)}</span>
              </button>
            </li>
          ))}
        </ol>

        <button
          type="button"
          className="pbtn pbtn--main pbtn--icon"
          onClick={() => go(current + 1)}
          disabled={current === total - 1}
          aria-label="Próxima experiência"
        >
          <Icon name="arrowRight" />
        </button>
      </nav>

      <div className="cv-stack">
        <TechStrip />
      </div>
    </section>
  )
}
