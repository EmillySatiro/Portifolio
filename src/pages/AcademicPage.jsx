import Icon from '../components/ui/Icon'
import { academicLinks, authorHighlight, news, publications, research, startup, stories } from '../data/academic'
import './AcademicPage.css'

// Rola até uma seção sem mexer na URL (âncoras confundem o roteador)
const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

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

function Dateline({ items }) {
  const parts = items.filter(Boolean)
  return parts.length ? <p className="np-dateline">{parts.join(' · ')}</p> : null
}

/* ---------- Cabeçalho do jornal ---------- */
function Masthead() {
  return (
    <header className="np-masthead">
      <div className="container">
        <div className="np-masthead__bar">
          <span>Edição acadêmica</span>
          <span className="np-masthead__links">
            {academicLinks.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name} <Icon name="external" size={13} />
              </a>
            ))}
          </span>
        </div>
        <h1 className="np-masthead__title display">Vida Acadêmica</h1>
        <p className="np-masthead__sub">
          <span>Pesquisa</span>
          <span>Eventos</span>
          <span>Artigos</span>
        </p>
      </div>
    </header>
  )
}

/* ---------- Matéria principal + coluna lateral ---------- */
function LeadStory() {
  return (
    <section className="container np-front">
      <article className="np-lead" data-reveal>
        <p className="np-kicker">{news.kicker}</p>
        <h2 className="np-lead__headline display">{news.headline}</h2>
        <Dateline items={[news.date, 'SIUPI 2026']} />
        <p className="np-lead__deck">{news.lead}</p>
        <div className="np-lead__body">
          {news.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </article>

      <aside className="np-side" data-reveal style={{ '--delay': '0.12s' }}>
        <p className="np-kicker">Sobre a pesquisa</p>
        <h3 className="np-side__title">{research.title}</h3>
        <Dateline items={research.meta} />
        {research.paragraphs.map((text) => (
          <p key={text} className="np-side__text">
            {text}
          </p>
        ))}
        <a href={startup.url} target="_blank" rel="noopener noreferrer" className="np-side__startup">
          <Icon name="rocket" size={18} />
          <span>
            Startup <strong>{startup.name}</strong>
          </span>
          <Icon name="external" size={14} />
        </a>
      </aside>
    </section>
  )
}

/* ---------- Notícias secundárias em colunas ---------- */
function Stories() {
  return (
    <section className="container np-stories" aria-label="Mais notícias">
      <p className="np-section-label">Mais notícias</p>
      <div className="np-grid">
        {stories.map((story, index) => (
          <article key={story.headline} className="np-story" data-reveal style={{ '--delay': `${(index % 3) * 0.08}s` }}>
            {story.photos.length > 0 && (
              <img className="np-story__photo" src={story.photos[0].src} alt={story.photos[0].alt} loading="lazy" decoding="async" />
            )}
            <p className="np-kicker">{story.kicker}</p>
            <h3 className="np-story__headline display">{story.headline}</h3>
            <Dateline items={[story.date, story.place]} />
            <p className="np-story__text">{story.text}</p>
            {story.link?.url && (
              <a href={story.link.url} target="_blank" rel="noopener noreferrer" className="np-more">
                {story.link.label} <Icon name="external" size={14} />
              </a>
            )}
            {story.link?.target && (
              <button type="button" className="np-more" onClick={() => scrollToId(story.link.target)}>
                {story.link.label} <Icon name="arrowRight" size={15} />
              </button>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

/* ---------- Artigos publicados ---------- */
function Articles() {
  return (
    <section id="artigos" className="np-articles pixel-edge">
      <div className="container">
        <header className="np-articles__head">
          <div>
            <p className="eyebrow" data-reveal>
              Produção científica
            </p>
            <h2 className="section-title display" data-reveal style={{ '--delay': '0.08s' }}>
              Artigos publicados
            </h2>
          </div>
          <div className="np-articles__links" data-reveal>
            {academicLinks.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                <Icon name={link.icon} size={16} /> {link.name}
              </a>
            ))}
          </div>
        </header>

        <ol className="np-refs">
          {publications.map((pub) => (
            <li key={pub.title} className="np-ref" data-reveal>
              <span className="np-ref__year">{pub.year ?? 's.d.'}</span>
              <div>
                <a href={pub.url} target="_blank" rel="noopener noreferrer" className="np-ref__title">
                  {pub.title} <Icon name="external" size={14} />
                </a>
                <p className="np-ref__authors">
                  <Authors text={pub.authors} />
                </p>
                {(pub.venue || pub.citations) && (
                  <p className="np-ref__venue">
                    {[pub.type, pub.venue, pub.citations ? `${pub.citations} ${pub.citations === 1 ? 'citação' : 'citações'}` : null]
                      .filter(Boolean)
                      .join(' · ')}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default function AcademicPage() {
  return (
    <main className="academic-page">
      <Masthead />
      <LeadStory />
      <Stories />
      <Articles />
    </main>
  )
}
