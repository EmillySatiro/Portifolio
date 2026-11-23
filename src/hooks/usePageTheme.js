import { useLayoutEffect } from 'react'

// O site é escuro; algumas páginas (Projetos, Vida Acadêmica) usam o tema claro enquanto estão abertas.
export function usePageTheme(theme) {
  useLayoutEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    // Ao sair da página, volta ao tema padrão do site
    return () => {
      root.dataset.theme = 'dark'
    }
  }, [theme])
}
