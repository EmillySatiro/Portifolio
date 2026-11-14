import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Rola até a âncora (#secao) ou para o topo ao trocar de rota.
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash, key])

  return null
}
