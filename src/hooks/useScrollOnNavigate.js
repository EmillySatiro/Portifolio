import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Ao navegar: rola até a âncora (#secao) ou volta para o topo.
export function useScrollOnNavigate() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash, key])
}
