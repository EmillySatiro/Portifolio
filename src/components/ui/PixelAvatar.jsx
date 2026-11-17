import { useCallback, useEffect, useRef, useState } from 'react'
import { avatar } from '../../data/portfolio'
import './PixelAvatar.css'

const PIXEL_STEPS = [42, 28, 18, 11, 6, 3] // tamanho do "pixel" em cada quadro
const STEP_MS = 85
const REPLAY_COOLDOWN = 2500

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Ilustração com efeitos: aparece "pixelando" ao carregar (e de novo no hover) e flutua levemente.
export default function PixelAvatar() {
  const imgRef = useRef(null)
  const canvasRef = useRef(null)
  const lastRun = useRef(0)
  const [pixelating, setPixelating] = useState(true)

  const pixelate = useCallback(() => {
    const img = imgRef.current
    const canvas = canvasRef.current
    if (!img?.naturalWidth || !canvas || prefersReducedMotion()) {
      setPixelating(false)
      return () => {}
    }

    lastRun.current = Date.now()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.round(img.clientWidth * dpr)
    canvas.height = Math.round(img.clientHeight * dpr)
    const ctx = canvas.getContext('2d')
    const tiny = document.createElement('canvas')
    const tinyCtx = tiny.getContext('2d')
    ctx.imageSmoothingEnabled = false

    let step = 0
    let timer
    const draw = () => {
      if (step >= PIXEL_STEPS.length) {
        setPixelating(false)
        return
      }
      const block = PIXEL_STEPS[step] * dpr
      tiny.width = Math.max(1, Math.ceil(canvas.width / block))
      tiny.height = Math.max(1, Math.ceil(canvas.height / block))
      tinyCtx.drawImage(img, 0, 0, tiny.width, tiny.height)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(tiny, 0, 0, tiny.width, tiny.height, 0, 0, canvas.width, canvas.height)
      step += 1
      timer = setTimeout(draw, STEP_MS)
    }

    setPixelating(true)
    draw()
    return () => clearTimeout(timer)
  }, [])

  // Primeira revelação quando a imagem termina de carregar
  useEffect(() => {
    const img = imgRef.current
    let cancel = () => {}
    const start = () => {
      cancel = pixelate()
    }
    if (img.complete) start()
    else img.addEventListener('load', start, { once: true })
    return () => {
      img.removeEventListener('load', start)
      cancel()
    }
  }, [pixelate])

  const replay = () => {
    if (!pixelating && Date.now() - lastRun.current > REPLAY_COOLDOWN) pixelate()
  }

  return (
    <div className="avatar" onPointerEnter={(e) => e.pointerType === 'mouse' && replay()}>
      <div className="avatar__stage">
        <div className="avatar__card" aria-hidden="true">
          <span className="avatar__grid" />
        </div>

        <div className="avatar__float">
          <img
            ref={imgRef}
            className={`avatar__img${pixelating ? ' is-hidden' : ''}`}
            src={avatar.src}
            srcSet={avatar.srcSet}
            sizes="(max-width: 860px) 80vw, 460px"
            width={avatar.width}
            height={avatar.height}
            alt={avatar.alt}
            fetchPriority="high"
            decoding="async"
          />
          <canvas ref={canvasRef} className={`avatar__canvas${pixelating ? '' : ' is-hidden'}`} aria-hidden="true" />
        </div>

        <span className="avatar__sticker" aria-hidden="true">
          Hello, World!
        </span>
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className={`avatar__spark avatar__spark--${i}`} aria-hidden="true" />
        ))}
      </div>
    </div>
  )
}
