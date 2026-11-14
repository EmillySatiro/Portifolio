import { useEffect, useState } from 'react'

// Informa se a página já rolou e se o usuário está descendo (para esconder a barra).
export function useScrollState(threshold = 80) {
  const [state, setState] = useState({ scrolled: false, goingDown: false })

  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    const update = () => {
      const y = window.scrollY
      const goingDown = y > lastY && y > threshold * 2
      setState((prev) => {
        const scrolled = y > threshold
        return prev.scrolled === scrolled && prev.goingDown === goingDown ? prev : { scrolled, goingDown }
      })
      lastY = y
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return state
}
