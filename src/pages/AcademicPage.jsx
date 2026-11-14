import { Link } from 'react-router-dom'
import PageHero from '../components/layout/PageHero'
import Icon from '../components/ui/Icon'
import TechLogo from '../components/ui/TechLogo'
import { academicLinks, authorHighlight, certificates, education, publications, research, talks, teaching } from '../data/academic'
import './AcademicPage.css'

function SectionTitle({ eyebrow, title }) {
  return (
    <header className="section-head">
      <p className="eyebrow" data-reveal>
        {eyebrow}
      </p>
      <h2 className="section-title display" data-reveal style={{ '--delay': '0.08s' }}>
        {title}
      </h2>
    </header>
  )
}

// Destaca o meu nome na lista de autores
function Authors({ text }) {
  const match = text.match(authorHighlight)
  if (!match) return text
  const start = match.index
  return (
    <>
      {text.slice(0, start)}
      <strong>{match[0]}</strong>
      {text.slice(start + match[0].length)}
    </>
  )
}

function Publications() {
  if (!publications.length) {
    // Enquanto a lista não é preenchida, aponta para os perfis acadêmicos
    return (
      <div className="ac-empty" data-reveal>
        <Icon name="book" size={28} />
        <div>
          <h3>Publicações e produção científica</h3>
          <p>A lista completa de artigos e trabalhos está no Google Acadêmico e no Currículo Lattes.</p>
        </div>
        <div className="ac-empty__links">
          {academicLinks.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
              {link.name} <Icon name="external" size={16} />
            </a>
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      <ol className="ac-pubs">
        {publications.map((pub, index) => (
          <li key={pub.title} data-reveal style={{ '--delay': `${index * 0.05}s` }}>
            <a href={pub.url} target="_blank" rel="noopener noreferrer" className="ac-pub">
              <span className="ac-pub__year">{pub.year ?? '—'}</span>
              <span className="ac-pub__body">
                {pub.type && <span className="ac-pub__type">{pub.type}</span>}
                <span className="ac-pub__title">{pub.title}</span>
                <span className="ac-pub__meta">
                  <Authors text={pub.authors} />
                </span>
                {pub.venue && <em className="ac-pub__venue">{pub.venue}</em>}
                {pub.citations > 0 && (
                  <span className="ac-pub__cites">
                    {pub.citations} {pub.citations === 1 ? 'citação' : 'citações'}
                  </span>
                )}
              </span>
              <Icon name="external" size={16} className="ac-pub__arrow" />
            </a>
          </li>
        ))}
      </ol>
      <div className="ac-pubs__more" data-reveal>
        {academicLinks.map((link) => (
          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
            <Icon name={link.icon} size={16} /> Ver no {link.name}
          </a>
        ))}
      </div>
    </>
  )
}

export default function AcademicPage() {
  return (
    <main className="academic-page">
      <PageHero title="Vida Acadêmica" word="Acadêmico">
        {academicLinks.map((link) => (
          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
            <Icon name={link.icon} size={16} /> {link.name}
          </a>
        ))}
      </PageHero>

      {/* ---------- Pesquisa ---------- */}
      <section className="section ac-research pixel-edge">
        <div className="container ac-research__grid">
          <article className="ac-research__card" data-reveal>
            <span className="chip ac-research__badge">{research.badge}</span>
            <h2 className="ac-research__title display">{research.title}</h2>
            <p className="ac-research__meta">
              <strong>{research.group}</strong> · {research.period}
            </p>
            <ul className="ac-research__list">
              {research.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="ac-research__footer">
              <span className="ac-research__logos">
                {research.logos.map((logo) => (
                  <TechLogo key={logo} name={logo} size={20} />
                ))}
              </span>
              <Link to="/projetos" className="btn btn--light">
                Ver nos projetos <Icon name="arrowRight" className="icon-arrow" />
              </Link>
            </div>
          </article>

          <aside className="ac-education">
            <p className="eyebrow" data-reveal>
              Formação
            </p>
            {education.map((item, index) => (
              <div key={item.title} className="ac-education__item" data-reveal style={{ '--delay': `${0.1 + index * 0.08}s` }}>
                <span className="ac-education__icon">
                  <Icon name={index === 0 ? 'graduation' : 'book'} size={20} />
                </span>
                <span>
                  <strong>{item.title}</strong>
                  <span>{item.place}</span>
                  <em>{item.period}</em>
                </span>
              </div>
            ))}
          </aside>
        </div>
      </section>

      {/* ---------- Publicações ---------- */}
      <section className="section ac-section pixel-edge">
        <div className="container">
          <SectionTitle eyebrow="Produção científica" title="Publicações" />
          <Publications />
        </div>
      </section>

      {/* ---------- Palestras e minicursos ---------- */}
      <section className="section ac-talks pixel-edge">
        <div className="container">
          <SectionTitle eyebrow="Eventos" title="Palestras e minicursos" />
          <ol className="ac-talks__list">
            {talks.map((talk, index) => (
              <li key={`${talk.title}-${talk.date}`} className="ac-talk" data-reveal style={{ '--delay': `${index * 0.07}s` }}>
                {talk.image && (
                  <img className="ac-talk__img" src={talk.image} alt={talk.title} loading="lazy" decoding="async" />
                )}
                <span className="ac-talk__date">{talk.date}</span>
                <h3 className="ac-talk__title">{talk.title}</h3>
                <p className="ac-talk__event">{talk.event}</p>
                {talk.description && <p className="ac-talk__desc">{talk.description}</p>}
                <span className="ac-talk__role">{talk.role}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Ensino e certificados ---------- */}
      <section className="section ac-section pixel-edge">
        <div className="container ac-split">
          <div>
            <SectionTitle eyebrow="Ensino" title="Ensino e liderança" />
            <ul className="ac-cards">
              {teaching.map((item) => (
                <li key={item.title} className="ac-card" data-reveal>
                  <span className="ac-card__period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p className="ac-card__place">{item.place}</p>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle eyebrow="Cursos" title="Certificados" />
            <ul className="ac-cards">
              {certificates.map((item) => (
                <li key={item.title} className="ac-card ac-card--cert" data-reveal>
                  <span className="ac-card__period">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p className="ac-card__place">Emitido por {item.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
