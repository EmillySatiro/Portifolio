export default function RoutePage({ eyebrow, title, children }) {
  return (
    <main className="route-page">
      <section className="route-hero">
        <div className="container route-content">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{children}</p>
        </div>
      </section>
    </main>
  )
}
