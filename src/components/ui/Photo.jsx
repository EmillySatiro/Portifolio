import { photo } from '../../data/portfolio'

// Foto de perfil responsiva. O mesmo arquivo é reaproveitado em vários recortes
// (via object-position no CSS), então só é baixado uma vez.
export default function Photo({ className = '', alt = '', sizes = '(max-width: 768px) 100vw, 50vw', priority = false }) {
  return (
    <img
      className={className}
      src={photo.src}
      srcSet={photo.srcSet}
      sizes={sizes}
      width={photo.width}
      height={photo.height}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  )
}
