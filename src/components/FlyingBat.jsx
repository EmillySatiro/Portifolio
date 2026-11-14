import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function FlyingBat() {
  const batRef = useRef(null)

  useEffect(() => {
    const bat = batRef.current
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
    let freeFlight = false

    gsap.set(bat, { x: '72vw', y: '18vh', rotate: -8, scale: 1 })

    const moveX = gsap.quickTo(bat, 'x', { duration: 0.7, ease: 'power3.out' })
    const moveY = gsap.quickTo(bat, 'y', { duration: 0.7, ease: 'power3.out' })
    const rotate = gsap.quickTo(bat, 'rotate', { duration: 0.45, ease: 'power2.out' })

    const floatTween = gsap.to(bat, {
      y: '+=14',
      repeat: -1,
      yoyo: true,
      duration: 1.9,
      ease: 'sine.inOut',
    })

    const flightTween = gsap.to(bat, {
      x: 'random(8vw, 78vw)',
      y: 'random(14vh, 72vh)',
      rotate: 'random(-18, 18)',
      duration: 4.2,
      repeat: -1,
      repeatRefresh: true,
      ease: 'sine.inOut',
      paused: true,
      onRepeat: () => {
        if (!freeFlight) flightTween.pause()
      },
    })

    const updateMode = () => {
      const about = document.getElementById('about')
      freeFlight = about ? window.scrollY >= about.offsetTop - 120 : false
      if (freeFlight) flightTween.play()
      else flightTween.pause()
    }

    const handlePointerMove = (event) => {
      if (freeFlight) {
        flightTween.play()
        return
      }

      flightTween.pause()
      const side = event.clientX > window.innerWidth * 0.68 ? -1 : 1
      const offsetX = side * Math.min(150, window.innerWidth * 0.12)
      const offsetY = event.clientY > window.innerHeight * 0.5 ? -92 : 76
      const nextX = Math.max(18, Math.min(window.innerWidth - 170, event.clientX + offsetX))
      const nextY = Math.max(86, Math.min(window.innerHeight - 120, event.clientY + offsetY))

      moveX(nextX)
      moveY(nextY)
      rotate(side > 0 ? 8 : -8)
    }

    window.addEventListener('scroll', updateMode, { passive: true })
    updateMode()

    if (prefersReducedMotion || isCoarsePointer) {
      flightTween.play()
    } else {
      window.addEventListener('pointermove', handlePointerMove, { passive: true })
    }

    return () => {
      window.removeEventListener('scroll', updateMode)
      window.removeEventListener('pointermove', handlePointerMove)
      floatTween.kill()
      flightTween.kill()
    }
  }, [])

  return (
    <div ref={batRef} className="flying-bat" aria-hidden="true">
      <img src="/bat.svg" alt="" />
    </div>
  )
}
