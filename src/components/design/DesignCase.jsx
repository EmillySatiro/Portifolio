import { useCallback, useRef, useState } from 'react'
import Icon from '../ui/Icon'
import './DesignCase.css'

// Janela de navegador com a tela do protótipo. Telas longas rolam sozinhas no hover/foco.
function BrowserFrame({ screen, host }) {
  const frameRef = useRef(null)
  const [shift, setShift] = useState(0)

  // Mede quanto a imagem passa da janela para saber quanto rolar
  const measure = useCallback((e) => {
    const frame = frameRef.current
    if (!frame) return
    setShift(Math.max(0, e.currentTarget.clientHeight - frame.clientHeight))
  }, [])

  return (
    <figure className="dcase__frame">
      <div className="dcase__bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>{host}</span>
      </div>
      <div
        ref={frameRef}
        className={`dcase__screen${shift > 0 ? ' is-long' : ''}`}
        tabIndex={shift > 0 ? 0 : undefined}
        style={{ '--shift': `-${shift}px`, '--scroll-dur': `${Math.min(14, 2 + shift / 450)}s` }}
      >
        <img key={screen.src} src={screen.src} alt={screen.label} onLoad={measure} loading="lazy" decoding="async" />
        {shift > 0 && (
          <span className="dcase__hint">
            <span className="dcase__hint--mouse">Passe o mouse para rolar a página</span>
            <span className="dcase__hint--touch">Toque para rolar a página</span>
          </span>
        )}
      </div>
    </figure>
  )
}

// Um projeto de design: manchete e texto em cima, a janela larga embaixo e as telas como abas.
export default function DesignCase({ project }) {
  const [current, setCurrent] = useState(0)
  // Endereço real quando o site está no ar; senão, só o nome do protótipo
  const host = project.liveUrl ? new URL(project.liveUrl).host.replace(/^www\./, '') : `Protótipo · ${project.title}`

  return (
    <article id={project.id} className="dcase">
      <header className="dcase__head">
        <h2 className="dcase__title display">{project.title}</h2>
        <div className="dcase__intro">
          <p className="dcase__type">{project.type}</p>
          <p className="dcase__desc">{project.description}</p>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="dcase__live">
              Ver site no ar <Icon name="external" size={16} />
            </a>
          )}
        </div>
      </header>

      <div className="tabs dcase__tabs" role="group" aria-label={`Telas de ${project.title}`}>
        {project.screens.map((screen, i) => (
          <button
            key={screen.src}
            type="button"
            className="tab"
            aria-pressed={i === current}
            onClick={() => setCurrent(i)}
          >
            {screen.label}
          </button>
        ))}
      </div>

      <BrowserFrame screen={project.screens[current]} host={host} />
    </article>
  )
}
