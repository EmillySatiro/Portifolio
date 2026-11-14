import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

// O tema inicial já é aplicado por um script no index.html (evita piscar);
// aqui só lemos o valor atual e permitimos alternar.
export function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0e0e11' : '#efede8')
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* navegação privada: segue sem salvar */
      }
      return next
    })
  }, [])

  return { theme, toggleTheme }
}

