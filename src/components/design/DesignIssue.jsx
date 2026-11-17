import Icon from '../ui/Icon'
import './DesignIssue.css'

// Fundo claro pede texto escuro na etiqueta e na sombra da capa
const isLight = (hex) => {
  const n = parseInt(hex.slice(1), 16)
  return 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255) > 160
}

// Um projeto como edição de revista: capa sobre a cor do projeto + uma segunda tela ao lado,
// e embaixo a linha de dados. Clicar em qualquer imagem abre o visualizador naquela tela.
export default function DesignIssue({ project, number, isNew, onOpen }) {
  const [cover, second = cover] = project.screens

  return (
    <article id={project.id} className="dissue">
      <div className="dissue__pair">
        <button
          type="button"
          className={`dissue__tile dissue__tile--cover${isLight(project.tint) ? ' is-light' : ''}`}
          style={{ '--tint': project.tint }}
          onClick={() => onOpen(0)}
          aria-label={`Ver telas de ${project.title}`}
        >
          {isNew && <span className="dissue__tag">Novo</span>}
          <span className="dissue__cover">
            <img src={cover.src} alt="" loading="lazy" decoding="async" />
          </span>
        </button>

        <button
          type="button"
          className="dissue__tile dissue__tile--photo"
          onClick={() => onOpen(project.screens.length > 1 ? 1 : 0)}
          aria-label={`Ver a tela ${second.label} de ${project.title}`}
        >
          <img
            src={second.src}
            alt=""
            loading="lazy"
            decoding="async"
            style={second.focus ? { objectPosition: second.focus } : undefined}
          />
        </button>
      </div>

      <div className="dissue__data">
        <h2 className="dissue__title">{project.title}</h2>
        <span>{project.type}</span>
        <span>Nº {String(number).padStart(2, '0')}</span>
        <span>{project.screens.length} telas</span>
        <span className="dissue__actions">
          <button type="button" className="dissue__link" onClick={() => onOpen(0)}>
            Ver telas
          </button>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="dissue__link">
              Site <Icon name="external" size={12} />
            </a>
          )}
        </span>
      </div>

      <p className="dissue__desc">{project.description}</p>
    </article>
  )
}
