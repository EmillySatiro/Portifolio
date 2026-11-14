import { useEffect } from 'react'

const SELECTOR = '[data-reveal]:not(.is-visible)'

// Adiciona .is-visible aos elementos [data-reveal] quando entram na tela.
// Um MutationObserver acompanha elementos que aparecem depois (ex.: páginas carregadas sob demanda).
export function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll(SELECTOR).forEach((el) => el.classList.add('is-visible'))
      return undefined
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    const observeWithin = (root) => {
      if (root.matches?.(SELECTOR)) io.observe(root)
      root.querySelectorAll?.(SELECTOR).forEach((el) => io.observe(el))
    }

    observeWithin(document.body)

    const mo = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => node.nodeType === 1 && observeWithin(node)))
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
