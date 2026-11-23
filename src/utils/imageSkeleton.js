// Esqueleto das imagens: toda <img> mostra um brilho (CSS em base.css) até carregar.
// Aqui marcamos com data-loaded as que já carregaram (ou falharam), inclusive as que entram
// depois na página (páginas sob demanda, trocas de imagem).
const mark = (img) => {
  if (img.complete && img.naturalWidth) img.dataset.loaded = ''
}

export function startImageSkeletons() {
  const onDone = (e) => {
    if (e.target instanceof HTMLImageElement) e.target.dataset.loaded = ''
  }
  // load e error não sobem pela árvore: escuta na fase de captura
  document.addEventListener('load', onDone, true)
  document.addEventListener('error', onDone, true)

  const scan = (root) => {
    if (root instanceof HTMLImageElement) mark(root)
    root.querySelectorAll?.('img').forEach(mark)
  }
  scan(document)
  new MutationObserver((mutations) =>
    mutations.forEach((m) => {
      m.addedNodes.forEach((node) => node.nodeType === 1 && scan(node))
      if (m.type === 'attributes' && m.target instanceof HTMLImageElement) {
        delete m.target.dataset.loaded
        mark(m.target)
      }
    }),
  ).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] })
}
