import Icon from '../ui/Icon'
import './DesignSpread.css'

// Um projeto como página dupla de revista: título enorme, telas em colagem e texto em colunas.
// O layout e o papel (claro/escuro) vêm de project.spread; clicar numa tela abre o visualizador.
export default function DesignSpread({ project, index, onOpen }) {
  const { layout, paper, images } = project.spread
  const page = index * 2 + 1
  // Palavra mais longa do título: o tamanho da fonte se ajusta para ela caber na página
  const chars = Math.max(...project.title.split(/\s+/).map((word) => word.length))
  const host = project.liveUrl ? new URL(project.liveUrl).host.replace(/^www\./, '') : null

  return (
    <article id={project.id} className="spread-wrap">
      <div className={`spread spread--${layout} is-${paper}`} style={{ '--chars': chars }}>
        {images.map((screenIndex, slot) => {
          const screen = project.screens[screenIndex]
          return (
            <button
              key={screen.src}
              type="button"
              className={`spread__img spread__img--${slot}`}
              onClick={() => onOpen(screenIndex)}
              aria-label={`Ver a tela ${screen.label} de ${project.title}`}
            >
              <img src={screen.src} alt="" loading="lazy" decoding="async" />
            </button>
          )
        })}

        <h2 className="spread__title">{project.title}</h2>
        <p className="spread__type">{project.type}</p>

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
        {layout === 'cover' && <p className="spread__credit">por Emilly Sátiro</p>}
      </div>

      <p className="spread__pages" aria-hidden="true">
        <span>{String(page).padStart(2, '0')}</span>
        <span>{String(page + 1).padStart(2, '0')}</span>
      </p>
    </article>
  )
}
