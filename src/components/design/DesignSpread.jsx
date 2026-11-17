import { useState } from 'react'
import Icon from '../ui/Icon'
import './DesignSpread.css'

// Recortes gerados ao lado da imagem original: -view (16:10 do topo) e -tall (cartaz 4:5)
const cropOf = (src, crop) => src.replace(/\.webp$/, crop === 'tall' ? '-tall.webp' : '-view.webp')

// Papel claro pede texto escuro, e vice-versa
const isLight = (hex) => {
  const n = parseInt(hex.slice(1), 16)
  return 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255) > 150
}

// Tela "impressa": aparece suavemente sobre a cor do papel quando termina de carregar
function Print({ src, slot, crop, eager, label, onClick }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <button
      type="button"
      className={`spread__img spread__img--${slot}${crop === 'tall' ? ' is-tall' : ''}${loaded ? ' is-loaded' : ''}`}
      onClick={onClick}
      aria-label={label}
    >
      <img
        src={src}
        alt=""
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        decoding="async"
        ref={(el) => el?.complete && el.naturalWidth && !loaded && setLoaded(true)}
        onLoad={() => setLoaded(true)}
      />
    </button>
  )
}

// Um projeto como página de revista ocupando a tela: papel na cor do projeto, telas impressas,
// título enorme e texto curto. Clicar numa tela abre o visualizador.
export default function DesignSpread({ project, index, onOpen }) {
  const { layout, color, images } = project.spread
  const page = index * 2 + 1
  // Palavra mais longa do título: o tamanho da fonte se ajusta para ela caber na página
  const chars = Math.max(...project.title.split(/\s+/).map((word) => word.length))
  const host = project.liveUrl ? new URL(project.liveUrl).host.replace(/^www\./, '') : null

  return (
    <article id={project.id} className="spread-wrap">
      <div
        className={`spread spread--${layout} ${isLight(color) ? 'is-light' : 'is-dark'}`}
        style={{ '--chars': chars, '--paper': color }}
      >
        {images.map(({ i, crop }, slot) => {
          const screen = project.screens[i]
          return (
            <Print
              key={`${screen.src}-${crop}`}
              src={cropOf(screen.src, crop)}
              slot={slot}
              crop={crop}
              eager={index === 0}
              label={`Ver a tela ${screen.label} de ${project.title}`}
              onClick={() => onOpen(i)}
            />
          )
        })}

        <header className="spread__head">
          <p className="spread__type">{project.type}</p>
          <h2 className="spread__title">{project.title}</h2>
        </header>

        <div className="spread__text">
          <p>{project.description}</p>
          <p className="spread__actions">
            <button type="button" className="spread__link" onClick={() => onOpen(0)}>
              Ver as {project.screens.length} telas
            </button>
            {host && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="spread__link">
                {host} <Icon name="external" size={12} />
              </a>
            )}
          </p>
        </div>

        {layout === 'spine' && (
          <span className="spread__spine" aria-hidden="true">
            {project.title}
          </span>
        )}

        <p className="spread__pages" aria-hidden="true">
          <span>{String(page).padStart(2, '0')}</span>
          <span>{String(page + 1).padStart(2, '0')}</span>
        </p>
      </div>
    </article>
  )
}
