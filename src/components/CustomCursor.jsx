import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

const INTERACTIVE = 'a, button, input, textarea, .project-card, .clickable, [role="button"]'

function cursorDisabled() {
  return (
    window.matchMedia('(pointer: coarse)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

// Cursor personalizado: ponto + anel que segue o ponteiro com atraso.
export default function CustomCursor() {
  const [isEnabled] = useState(() => !cursorDisabled())
  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (!isEnabled) return undefined

    let mouseX = -100
    let mouseY = -100
    let ringX = -100
    let ringY = -100
    let animId = null

    const render = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      animId = requestAnimationFrame(render)
    }

    const onPointerMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    const onPointerDown = () => setIsActive(true)
    const onPointerUp = () => setIsActive(false)
    const onMouseOver = (e) => {
      if (e.target.closest(INTERACTIVE)) setIsHovered(true)
    }
    const onMouseOut = (e) => {
      if (e.target.closest(INTERACTIVE)) setIsHovered(false)
    }
    const onVisibilityChange = () => {
      cancelAnimationFrame(animId)
      if (!document.hidden) render()
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerdown', onPointerDown, { passive: true })
    window.addEventListener('pointerup', onPointerUp, { passive: true })
    document.addEventListener('mouseover', onMouseOver, { passive: true })
    document.addEventListener('mouseout', onMouseOut, { passive: true })
    document.addEventListener('visibilitychange', onVisibilityChange)
    render()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointerup', onPointerUp)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [isEnabled])

  if (!isEnabled) return null

  const state = `${isHovered ? ' is-hovered' : ''}${isActive ? ' is-active' : ''}`
  return (
    <div className="custom-cursor-wrapper" aria-hidden="true">
      <div ref={dotRef} className={`cursor-dot${state}`}></div>
      <div ref={ringRef} className={`cursor-ring${state}`}></div>
    </div>
  )
}
