import './PageHero.css'

// Topo das páginas internas: título grande sobre um fio, com linha fina e ações opcionais ao lado.
export default function PageHero({ title, lead, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero__inner">
          <h1 className="page-hero__title display">{title}</h1>
          {(lead || children) && (
            <div className="page-hero__side">
              {lead && <p className="page-hero__lead">{lead}</p>}
              {children && <div className="page-hero__extra">{children}</div>}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
