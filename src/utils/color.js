// Ferramentas de cor para as páginas de projetos.

const toRgb = (hex) => {
  const n = parseInt(hex.slice(1), 16)
  return [n >> 16, (n >> 8) & 255, n & 255]
}

// Cor clara (fundo) ou escura? Pela luminância percebida.
export const isLight = (hex) => {
  const [r, g, b] = toRgb(hex)
  return 0.299 * r + 0.587 * g + 0.114 * b > 150
}

// Tom claro da cor do projeto: mistura com um branco quente. amount = quanto de branco (0 a 1).
export const tint = (hex, amount = 0.86) => {
  const white = [247, 245, 240]
  const mixed = toRgb(hex).map((c, i) => Math.round(c + (white[i] - c) * amount))
  return `#${mixed.map((c) => c.toString(16).padStart(2, '0')).join('')}`
}
