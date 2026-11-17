// Logo: morcego em pixel art (gerado a partir de uma grade 15x8).
export const BODY = 'M5 0h1v1H5zM9 0h1v1H9zM0 1h1v1H0zM5 1h5v1H5zM14 1h1v1H14zM0 2h2v1H0zM4 2h7v1H4zM13 2h2v1H13zM0 3h6v1H0zM7 3h1v1H7zM9 3h6v1H9zM0 4h15v1H0zM1 5h3v1H1zM5 5h5v1H5zM11 5h3v1H11zM2 6h1v1H2zM6 6h3v1H6zM12 6h1v1H12zM7 7h1v1H7z'
export const EYES = 'M6 3h1v1H6zM8 3h1v1H8z'

export default function BatLogo({ size = 28, className, title }) {
  return (
    <svg
      className={className}
      width={size}
      height={(size * 8) / 15}
      viewBox="0 0 15 8"
      shapeRendering="crispEdges"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <path d={BODY} fill="currentColor" />
      <path d={EYES} fill="var(--bat-eyes, #8ad7eb)" />
    </svg>
  )
}
