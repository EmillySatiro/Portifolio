import { useEffect, useRef, useState } from 'react'
import Icon from '../ui/Icon'
import './DesignViewer.css'

// Visualizador das telas de um projeto (dialog nativo): abas no topo, a tela inteira rolando embaixo.
export default function DesignViewer({ project, onClose }) {
  const ref = useRef(null)
  const bodyRef = useRef(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const dialog = ref.current
    if (project && !dialog.open) {
      setCurrent(project.startAt ?? 0)
      dialog.showModal()
    }
    if (!project && dialog.open) dialog.close()
  }, [project])

  // Ao trocar de tela, volta para o topo dela
  useEffect(() => {
    bodyRef.current?.scrollTo({ top: 0 })
  }, [current])

  const screen = project?.screens[current]

  return (
    <dialog
      ref={ref}
      className="dviewer"
      aria-label={project ? `Telas de ${project.title}` : undefined}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      {project && (
        <div className="dviewer__panel">
          <header className="dviewer__bar">
            <p className="dviewer__name">{project.title}</p>
            <div className="dviewer__tabs" role="group" aria-label="Escolher tela">
              {project.screens.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  className="dviewer__tab"
                  aria-pressed={i === current}
                  onClick={() => setCurrent(i)}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <button type="button" className="dviewer__close" onClick={onClose} aria-label="Fechar">
              <Icon name="close" size={20} />
            </button>
          </header>
          <div ref={bodyRef} className="dviewer__body">
            <img key={screen.src} src={screen.src} alt={`${project.title}: ${screen.label}`} decoding="async" />
          </div>
        </div>
      )}
    </dialog>
  )
}
