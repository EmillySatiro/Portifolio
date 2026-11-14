import { Link } from 'react-router-dom'
import PageHero from '../components/layout/PageHero'
import Icon from '../components/ui/Icon'
import TechLogo from '../components/ui/TechLogo'
import { academicLinks, authorHighlight, publications, research, startup } from '../data/academic'
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

      {/* ---------- Iniciação científica ---------- */}
      <section className="section ac-research pixel-edge">
        <div className="container">
          <SectionTitle eyebrow={research.badge} title="Iniciação Científica" />

          <div className="ac-research__grid">
            <article className="ac-research__card" data-reveal>
              <h3 className="ac-research__title display">{research.title}</h3>
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

            {/* Startup que surgiu da pesquisa */}
            <a
              href={startup.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ac-startup"
              data-reveal
              style={{ '--delay': '0.12s' }}
            >
              <span className="ac-startup__icon">
                <Icon name="rocket" size={26} />
              </span>
              <span className="ac-startup__label">Da pesquisa para uma startup</span>
              <span className="ac-startup__name display">{startup.name}</span>
              <span className="ac-startup__desc">{startup.description}</span>
              <span className="ac-startup__link">
                {startup.handle} <Icon name="external" size={15} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Publicações ---------- */}
      <section className="section ac-section pixel-edge">
        <div className="container">
          <SectionTitle eyebrow="Produção científica" title="Publicações" />
          <Publications />
        </div>
      </section>
    </main>
  )
}
