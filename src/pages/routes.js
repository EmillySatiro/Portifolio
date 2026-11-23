import { lazy } from 'react'

// Páginas secundárias: cada uma é um arquivo separado, baixado só quando precisa.
// Os "loaders" ficam expostos para o site poder baixá-las antes (no tempo livre ou no hover do menu).
export const loaders = {
  '/projetos': () => import('./ProjectsPage'),
  '/designer': () => import('./DesignerPage'),
  '/academico': () => import('./AcademicPage'),
  '/vitrine': () => import('./VitrinePage'),
}

export const ProjectsPage = lazy(loaders['/projetos'])
export const DesignerPage = lazy(loaders['/designer'])
export const AcademicPage = lazy(loaders['/academico'])
export const VitrinePage = lazy(loaders['/vitrine'])

const started = new Set()

// Baixa o código de uma página (uma vez só); o navegador guarda e a página abre na hora depois
export function preloadRoute(path) {
  const load = loaders[path]
  if (!load || started.has(path)) return
  started.add(path)
  load().catch(() => started.delete(path))
}
