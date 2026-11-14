import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import './FlyingBat.css'

function FlyingBatSprite() {
  const batRef = useRef(null)

  useEffect(() => {
    let batX = window.innerWidth * 0.7
    let batY = 120
    let targetX = window.innerWidth * 0.5
    let targetY = 160
    let batAngle = 0
    let wobbleTime = 0
    let animId = null

    const pickNewDestination = () => {
      const marginX = 80
      const marginY = 80
      const maxX = Math.max(200, window.innerWidth - marginX * 2)
      const maxY = Math.max(200, window.innerHeight * 0.75 - marginY)
      targetX = marginX + Math.random() * maxX
      targetY = marginY + Math.random() * maxY
    }

    const loop = () => {
      wobbleTime += 0.04
      const verticalWobble = Math.sin(wobbleTime) * 1.8
      const dx = targetX - batX
      const dy = targetY + verticalWobble - batY

      batX += dx * 0.025
      batY += dy * 0.025

      const targetAngle = Math.max(-25, Math.min(25, dx * 0.12))
      batAngle += (targetAngle - batAngle) * 0.08

      if (batRef.current) {
        batRef.current.style.transform = `translate3d(${batX}px, ${batY}px, 0) rotate(${batAngle}deg) scale(1)`
      }
      animId = requestAnimationFrame(loop)
    }

    pickNewDestination()
    // Novo destino aleatório a cada ~3–4,5 segundos
    const wanderInterval = setInterval(pickNewDestination, 3000 + Math.random() * 1500)
    loop()

    return () => {
      cancelAnimationFrame(animId)
      clearInterval(wanderInterval)
    }
  }, [])

  return (
    <div ref={batRef} className="flying-bat-wrapper" aria-hidden="true">
      <img src="/bat.svg" alt="Mascote Morcego Animado" className="bat-svg-img" />
    </div>
  )
}

export default function FlyingBat() {
  const { pathname } = useLocation()
  if (pathname !== '/' && pathname !== '/projetos') return null
  return <FlyingBatSprite />
}
