import { useEffect, useState } from 'react'
import siteImages from 'virtual:site-images'
import { BODY, EYES } from '../ui/BatLogo'
import { loaders } from '../../pages/routes'
import './Preloader.css'

const MAX_WAIT = 12000 // nunca segura a entrada mais que isso (internet ruim)
const MIN_SHOW = 1400 // tempo mínimo para a animação de entrada aparecer
const PARALLEL = 6 // imagens baixando ao mesmo tempo

// Células do morcego do logo (grade 15 × 8), na ordem em que vão acendendo
const cellsOf = (path) =>
  [...path.matchAll(/M(\d+) (\d+)h(\d+)/g)].flatMap(([, x, y, w]) =>
    Array.from({ length: +w }, (_, i) => ({ x: +x + i, y: +y })),
  )
const EYE = new Set(cellsOf(EYES).map((c) => `${c.x}-${c.y}`))
const CELLS = [...cellsOf(BODY), ...cellsOf(EYES)]
  .map((c) => ({ ...c, eye: EYE.has(`${c.x}-${c.y}`) }))
  .sort((a, b) => a.x - b.x || a.y - b.y) // acende da esquerda para a direita

// Baixa uma imagem e já decodifica (fica pronta para aparecer sem atraso)
const loadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image()
    img.onload = () => (img.decode ? img.decode().catch(() => {}).then(resolve) : resolve())
    img.onerror = resolve
    img.src = src
  })

// Tela de entrada: baixa as páginas, as fontes e todas as imagens do site; o morcego se monta
// em pixels conforme o progresso. Quando termina, a tela sobe e o site aparece.
export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    let done = 0
    let finished = false
    const tasks = [
      ...Object.values(loaders).map((load) => () => load().catch(() => {})),
      () => document.fonts?.ready ?? Promise.resolve(),
      ...siteImages.map((src) => () => loadImage(src)),
    ]
    const total = tasks.length
    const started = performance.now()

    const finish = () => {
      if (finished) return
      finished = true
      const wait = Math.max(0, MIN_SHOW - (performance.now() - started))
      setTimeout(() => {
        setProgress(1)
        setLeaving(true)
        setTimeout(onDone, 700) // tempo da tela subindo
      }, wait)
    }

    // Fila com algumas tarefas em paralelo
    let next = 0
    const runNext = () => {
      if (next >= total) return
      const task = tasks[next]
      next += 1
      Promise.resolve(task()).finally(() => {
        done += 1
        setProgress(done / total)
        if (done === total) finish()
        else runNext()
      })
    }
    for (let i = 0; i < PARALLEL; i += 1) runNext()
    const timer = setTimeout(finish, MAX_WAIT)
    return () => clearTimeout(timer)
  }, [onDone])

  const lit = Math.round(progress * CELLS.length)

  return (
    <div className={`preloader${leaving ? ' is-leaving' : ''}`} role="status" aria-live="polite">
      <svg className="preloader__bat" viewBox="0 0 15 8" shapeRendering="crispEdges" aria-hidden="true">
        {CELLS.map((c, i) => (
          <rect
            key={`${c.x}-${c.y}`}
            x={c.x}
            y={c.y}
            width="1"
            height="1"
            className={`${i < lit ? 'is-on' : ''}${c.eye ? ' is-eye' : ''}`}
          />
        ))}
      </svg>
      <p className="preloader__name">Emílly Sátiro</p>
      <div className="preloader__bar" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
      <p className="preloader__count">
        {Math.round(progress * 100)}%<span className="sr-only"> carregado</span>
      </p>
    </div>
  )
}
