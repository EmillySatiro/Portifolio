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
        {shift > 0 && <span className="dcase__hint">Passe o mouse para rolar a página</span>}
      </div>
    </figure>
  )
}

export default function DesignCase({ project, index }) {
  const [current, setCurrent] = useState(0)
  // Endereço real quando o site está no ar; senão, só o nome do protótipo
  const host = project.liveUrl ? new URL(project.liveUrl).host.replace(/^www\./, '') : `Protótipo · ${project.title}`

  return (
    <article id={project.id} className={`dcase${index % 2 ? ' is-flipped' : ''}`}>
      <div className="dcase__text" data-reveal>
        <span className="dcase__num display">{String(index + 1).padStart(2, '0')}</span>
        <p className="dcase__type">{project.type}</p>
        <h2 className="dcase__title display">{project.title}</h2>
        <p className="dcase__desc">{project.description}</p>

        {/* Lista das telas: escolhe qual aparece na janela */}
        <ol className="dcase__screens" aria-label={`Telas de ${project.title}`}>
          {project.screens.map((screen, i) => (
            <li key={screen.src}>
              <button
                type="button"
                className="dcase__screen-btn"
                aria-pressed={i === current}
                onClick={() => setCurrent(i)}
              >
                <span>{String(i + 1).padStart(2, '0')}</span> {screen.label}
              </button>
            </li>
          ))}
        </ol>

        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="dcase__live">
            Ver site no ar <Icon name="external" size={16} />
          </a>
        )}
      </div>

      <div className="dcase__visual" data-reveal style={{ '--delay': '0.1s' }}>
        <BrowserFrame screen={project.screens[current]} host={host} />
      </div>
    </article>
  )
}
