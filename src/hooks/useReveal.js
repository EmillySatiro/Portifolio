import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Adiciona .is-visible aos elementos [data-reveal] quando entram na tela.
// Roda de novo a cada troca de página.
export function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]:not(.is-visible)')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])
}
