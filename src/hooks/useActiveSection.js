import { useEffect, useState } from 'react'

// Retorna o id da seção que ocupa o meio da tela (sem escutar o scroll a cada frame).
export function useActiveSection(ids, enabled = true) {
  const [active, setActive] = useState(ids[0])
  const key = ids.join('|')

  useEffect(() => {
    if (!enabled) return undefined
    const sections = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [key, enabled])

  return enabled ? active : null
}
