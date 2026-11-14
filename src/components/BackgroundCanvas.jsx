import { useEffect, useRef } from 'react'
import './BackgroundCanvas.css'

// Fundo animado: partículas que se conectam entre si e com o ponteiro.
export default function BackgroundCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = 0
    let height = 0
    let particles = []
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0
    let animFrameId = null

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const count = Math.min(Math.floor((width * height) / 18000), 55)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        alpha: Math.random() * 0.5 + 0.15,
        color: Math.random() > 0.4 ? '151, 180, 222' : '38, 58, 153',
      }))
    }

    const animate = () => {
      mouseX += (targetMouseX - mouseX) * 0.04
      mouseY += (targetMouseY - mouseY) * 0.04

      ctx.clearRect(0, 0, width, height)

      const len = particles.length
      for (let i = 0; i < len; i++) {
        const p1 = particles[i]
        p1.x += p1.vx
        p1.y += p1.vy

        if (p1.x < 0) p1.x = width
        if (p1.x > width) p1.x = 0
        if (p1.y < 0) p1.y = height
        if (p1.y > height) p1.y = 0

        ctx.beginPath()
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p1.color}, ${p1.alpha})`
        ctx.fill()

        // Linha até o ponteiro
        const dxMouse = mouseX - p1.x
        const dyMouse = mouseY - p1.y
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)
        if (distMouse < 140) {
          const force = (1 - distMouse / 140) * 0.3
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(mouseX, mouseY)
          ctx.strokeStyle = `rgba(151, 180, 222, ${force * 0.4})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }

        // Linhas entre partículas próximas
        for (let j = i + 1; j < len; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.18
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(151, 180, 222, ${alpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      animFrameId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    const handlePointerMove = (e) => {
      targetMouseX = e.clientX
      targetMouseY = e.clientY
    }

    const handleVisibilityChange = () => {
      cancelAnimationFrame(animFrameId)
      if (!document.hidden) animate()
    }

    resizeCanvas()
    createParticles()
    animate()
    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      cancelAnimationFrame(animFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <div className="bg-canvas-container" aria-hidden="true">
      <canvas ref={canvasRef} className="bg-canvas"></canvas>
      <div className="bg-glow-orb orb-1"></div>
      <div className="bg-glow-orb orb-2"></div>
      <div className="bg-glow-orb orb-3"></div>
      <div className="bg-grid-overlay"></div>
      <div className="bg-noise-overlay"></div>
    </div>
  )
}
