import PageHero from '../components/layout/PageHero'
import Icon from '../components/ui/Icon'
import { academicLinks, authorHighlight, events, news, publications, research, startup } from '../data/academic'
import './AcademicPage.css'

const SECTIONS = [
  { id: 'iniciacao', label: 'Iniciação Científica' },
  { id: 'eventos', label: 'Eventos' },
  { id: 'noticia', label: 'Notícia da pesquisa' },
  { id: 'publicacoes', label: 'Publicações' },
]

// Destaca o meu nome na lista de autores
function Authors({ text }) {
  const match = text.match(authorHighlight)
  if (!match) return text
  return (
    <>
      {text.slice(0, match.index)}
      <strong>{match[0]}</strong>
      {text.slice(match.index + match[0].length)}
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

      <div className="container ac-layout">
        {/* Sumário fixo ao lado do texto */}
        <nav className="ac-toc" aria-label="Nesta página">
          <p className="ac-toc__title">Nesta página</p>
          <ol>
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="ac-article">
          {/* ---------- Iniciação científica ---------- */}
          <section id="iniciacao" className="ac-block">
            <h2 className="ac-h2 display" data-reveal>
              Iniciação Científica
            </h2>
            <h3 className="ac-h3" data-reveal>
              {research.title}
            </h3>
            <p className="ac-meta" data-reveal>
              {research.meta.join(' · ')}
            </p>
            {research.paragraphs.map((text) => (
              <p key={text} className="ac-p" data-reveal>
                {text}
              </p>
            ))}

            <h3 className="ac-h3" data-reveal>
              Da pesquisa para uma startup
            </h3>
            <p className="ac-p" data-reveal>
              {startup.text}{' '}
              <a href={startup.url} target="_blank" rel="noopener noreferrer" className="ac-link">
                {startup.handle}
              </a>
            </p>
          </section>

          {/* ---------- Eventos ---------- */}
          <section id="eventos" className="ac-block">
            <h2 className="ac-h2 display" data-reveal>
              Eventos
            </h2>
            {events.map((event) => (
              <div key={event.title} className="ac-event" data-reveal>
                <h3 className="ac-h3">{event.title}</h3>
                <p className="ac-meta">{[event.date, event.location, event.role].filter(Boolean).join(' · ')}</p>
                <p className="ac-p">{event.description}</p>
                {event.photos?.length > 0 && (
                  <div className="ac-photos">
                    {event.photos.map((photo) => (
                      <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* ---------- Notícia da pesquisa ---------- */}
          <section id="noticia" className="ac-block ac-news" data-reveal>
            <p className="ac-news__kicker">
              {news.kicker} · {news.date}
            </p>
            <h2 className="ac-news__headline display">{news.headline}</h2>
            <p className="ac-news__lead">{news.lead}</p>
            {news.paragraphs.map((text) => (
              <p key={text} className="ac-p">
                {text}
              </p>
            ))}
          </section>

          {/* ---------- Publicações ---------- */}
          <section id="publicacoes" className="ac-block">
            <h2 className="ac-h2 display" data-reveal>
              Publicações
            </h2>
            <ol className="ac-pubs">
              {publications.map((pub) => (
                <li key={pub.title} className="ac-pub" data-reveal>
                  <a href={pub.url} target="_blank" rel="noopener noreferrer" className="ac-pub__title">
                    {pub.title}
                  </a>
                  <p className="ac-pub__authors">
                    <Authors text={pub.authors} />
                  </p>
                  <p className="ac-meta">
                    {[pub.venue, pub.year, pub.citations ? `${pub.citations} ${pub.citations === 1 ? 'citação' : 'citações'}` : null]
                      .filter(Boolean)
                      .join(' · ')}
                  </p>
                </li>
              ))}
            </ol>
            <p className="ac-p ac-pubs__more" data-reveal>
              Lista completa no{' '}
              <a href={academicLinks[0].url} target="_blank" rel="noopener noreferrer" className="ac-link">
                Google Acadêmico
              </a>{' '}
              e no{' '}
              <a href={academicLinks[1].url} target="_blank" rel="noopener noreferrer" className="ac-link">
                Currículo Lattes
              </a>
              .
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
