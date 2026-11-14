import './PageHero.css'

// Topo das páginas internas: título grande, palavra desfocada ao fundo e ações opcionais.
export default function PageHero({ title, word = title, children }) {
  return (
    <section className="page-hero">
      <span className="blur-word page-hero__blur parallax" aria-hidden="true">
        {word}
      </span>
      <div className="container page-hero__inner">
        <h1 className="page-hero__title display">{title}</h1>
        {children && <div className="page-hero__extra">{children}</div>}
      </div>
    </section>
  )
}
