import { useEffect, useRef, useState } from 'react'
import { avatar } from '../../data/portfolio'
import './PixelAvatar.css'

const BLOCK = 5 // tamanho de cada "pixel" que voa, em px de tela
const FLY_MS = 950 // tempo de voo de cada pixel
const SPREAD_MS = 900 // quanto os pixels demoram para começar a sair (de cima para baixo, com sorteio)

// Pontos de brilho na arte (em % da imagem): lentes dos óculos e a pedra do anel
const GLINTS = [
  { x: 27, y: 42.5, size: 1 },
  { x: 49, y: 45, size: 0.7 },
  { x: 28.2, y: 80.6, size: 0.85 },
]

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const easeOutCubic = (t) => 1 - (1 - t) ** 3

// Monta a ilustração com pixels espalhados por toda a área (fieldRef, ex.: a seção do topo) que voam
// até o lugar certo; no fim, a imagem nítida assume e aparecem brilhos nos óculos e no anel.
export default function PixelAvatar({ fieldRef }) {
  const stageRef = useRef(null)
  const imgRef = useRef(null)
  const canvasRef = useRef(null)
  const [phase, setPhase] = useState('loading') // loading | flying | done

  useEffect(() => {
    const img = imgRef.current
    let frame = 0
    let cancelled = false

    const run = () => {
      if (cancelled) return
      const stage = stageRef.current
      const canvas = canvasRef.current
      if (!img.naturalWidth || !stage || !canvas || prefersReducedMotion()) {
        setPhase('done')
        return
      }

      const w = stage.clientWidth
      const h = stage.clientHeight
      // O canvas cobre o campo inteiro (ou só a arte, se não houver campo); 1 px de canvas = 1 px de tela
      const field = fieldRef?.current ?? stage
      const fr = field.getBoundingClientRect()
      const sr = stage.getBoundingClientRect()
      const cw = Math.round(fr.width)
      const ch = Math.round(fr.height)
      const offX = sr.left - fr.left
      const offY = sr.top - fr.top
      canvas.width = cw
      canvas.height = ch
      Object.assign(canvas.style, { left: `${-offX}px`, top: `${-offY}px`, width: `${cw}px`, height: `${ch}px` })

      // Amostra a arte numa grade de BLOCK px: cada célula opaca vira uma partícula
      const cols = Math.ceil(w / BLOCK)
      const rows = Math.ceil(h / BLOCK)
      const sample = document.createElement('canvas')
      sample.width = cols
      sample.height = rows
      const sctx = sample.getContext('2d', { willReadFrequently: true })
      sctx.drawImage(img, 0, 0, cols, rows)
      const data = new Uint32Array(sctx.getImageData(0, 0, cols, rows).data.buffer)

      const size = BLOCK
      const parts = []
      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          const color = data[r * cols + c]
          if (color >>> 24 < 140) continue // pula o transparente
          const tx = Math.round(offX + c * BLOCK)
          const ty = Math.round(offY + r * BLOCK)
          parts.push({
            tx,
            ty,
            // Saem de qualquer ponto do campo (e um pouco além das bordas)
            sx: (Math.random() * 1.2 - 0.1) * cw,
            sy: (Math.random() * 1.2 - 0.1) * ch,
            delay: (r / rows) * SPREAD_MS * 0.55 + Math.random() * SPREAD_MS * 0.45,
            color: color | 0xff000000,
          })
        }
      }

      const ctx = canvas.getContext('2d')
      const out = ctx.createImageData(cw, ch)
      const buf = new Uint32Array(out.data.buffer)
      const total = SPREAD_MS + FLY_MS
      const start = performance.now()
      setPhase('flying')

      const draw = (now) => {
        const elapsed = now - start
        buf.fill(0)
        for (const p of parts) {
          const t = Math.min(1, Math.max(0, (elapsed - p.delay) / FLY_MS))
          if (t <= 0) continue
          const e = easeOutCubic(t)
          const x = Math.round(p.sx + (p.tx - p.sx) * e)
          const y = Math.round(p.sy + (p.ty - p.sy) * e)
          // Pinta o bloquinho direto no buffer (bem mais rápido que fillRect por partícula)
          const x0 = Math.max(0, x)
          const x1 = Math.min(cw, x + size)
          const y0 = Math.max(0, y)
          const y1 = Math.min(ch, y + size)
          for (let yy = y0; yy < y1; yy += 1) buf.fill(p.color, yy * cw + x0, yy * cw + x1)
        }
        ctx.putImageData(out, 0, 0)
        if (elapsed < total) frame = requestAnimationFrame(draw)
        else setPhase('done')
      }
      frame = requestAnimationFrame(draw)
    }

    if (img.complete && img.naturalWidth) run()
    else img.addEventListener('load', run, { once: true })

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      img.removeEventListener('load', run)
    }
  }, [fieldRef])

  return (
    <div className={`avatar is-${phase}`}>
      <div ref={stageRef} className="avatar__stage">
        <div className="avatar__float">
          <img
            ref={imgRef}
            className="avatar__img"
            src={avatar.src}
            srcSet={avatar.srcSet}
            sizes="(max-width: 760px) 94vw, 720px"
            width={avatar.width}
            height={avatar.height}
            alt={avatar.alt}
            fetchPriority="high"
            decoding="async"
          />
          {GLINTS.map((g) => (
            <span
              key={`${g.x}-${g.y}`}
              className="avatar__glint"
              style={{ left: `${g.x}%`, top: `${g.y}%`, '--s': g.size }}
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 0c.7 6.6 5.4 11.3 12 12-6.6.7-11.3 5.4-12 12-.7-6.6-5.4-11.3-12-12C6.6 11.3 11.3 6.6 12 0Z" />
              </svg>
            </span>
          ))}
        </div>
        <canvas ref={canvasRef} className="avatar__canvas" aria-hidden="true" />
      </div>
    </div>
  )
}
