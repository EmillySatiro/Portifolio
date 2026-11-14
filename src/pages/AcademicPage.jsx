import PageHero from '../components/layout/PageHero'
import Icon from '../components/ui/Icon'
import { academicLinks, authorHighlight, news, publications, research, startup, timeline } from '../data/academic'
import './AcademicPage.css'

// Rola até uma seção da página sem mexer na URL (âncoras confundem o roteador)
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

// Agrupa a linha do tempo por ano
const years = timeline.reduce((acc, item) => {
  const group = acc.find((g) => g.year === item.year)
  if (group) group.items.push(item)
  else acc.push({ year: item.year, items: [item] })
  return acc
}, [])

function Intro() {
  return (
    <section className="ac-intro">
      <div className="container ac-intro__grid">
        <div>
          <p className="eyebrow" data-reveal>
            {research.meta.join(' · ')}
          </p>
          <h2 className="ac-intro__title display" data-reveal style={{ '--delay': '0.08s' }}>
            {research.title}
          </h2>
        </div>
        <div className="ac-intro__text" data-reveal style={{ '--delay': '0.14s' }}>
          {research.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <p className="ac-intro__startup">
            <Icon name="rocket" size={20} />
            <span>
              {startup.text}{' '}
              <a href={startup.url} target="_blank" rel="noopener noreferrer">
                {startup.handle}
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

function Timeline() {
  return (
    <section className="ac-journey pixel-edge">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow ac-journey__eyebrow" data-reveal>
            Trajetória
          </p>
          <h2 className="section-title display" data-reveal style={{ '--delay': '0.08s' }}>
            Da pesquisa aos eventos
          </h2>
        </header>

        <div className="ac-line">
          {years.map((group) => (
            <div key={group.year} className="ac-line__year">
              <p className="ac-line__label display" data-reveal>
                {group.year}
              </p>
              {group.items.map((item) => (
                <div key={item.title} className={`ac-line__item is-${item.kind}`} data-reveal>
                  <span className="ac-line__dot" aria-hidden="true" />
                  <p className="ac-line__date">
                    {[item.date, item.location].filter(Boolean).join(' · ')}
                    <span className="ac-line__tag">{item.kind === 'research' ? 'Pesquisa' : item.role}</span>
                  </p>
                  <h3 className="ac-line__title">{item.title}</h3>
                  <p className="ac-line__text">{item.text}</p>
                  {item.photos?.length > 0 && (
                    <div className="ac-line__photos">
                      {item.photos.map((photo) => (
                        <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
                      ))}
                    </div>
                  )}
                  {item.link && (
                    <button type="button" className="ac-line__link" onClick={() => scrollToId(item.link.target)}>
                      {item.link.label} <Icon name="arrowRight" size={16} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function News() {
  return (
    <section className="ac-news-section pixel-edge">
      <div className="container">
        <article className="ac-clip" data-reveal>
          <header className="ac-clip__masthead">
            <span>{news.kicker}</span>
            <span>{news.date}</span>
          </header>
          <h2 className="ac-clip__headline display">{news.headline}</h2>
          <p className="ac-clip__lead">{news.lead}</p>
          <div className="ac-clip__body">
            {news.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

function Publications() {
  return (
    <section id="publicacoes" className="ac-pubs-section pixel-edge">
      <div className="container">
        <header className="ac-pubs__head">
          <div>
            <p className="eyebrow" data-reveal>
              Produção científica
            </p>
            <h2 className="section-title display" data-reveal style={{ '--delay': '0.08s' }}>
              Publicações
            </h2>
          </div>
          <div className="ac-pubs__links" data-reveal>
            {academicLinks.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                <Icon name={link.icon} size={16} /> {link.name}
              </a>
            ))}
          </div>
        </header>

        <ol className="ac-refs">
          {publications.map((pub) => (
            <li key={pub.title} className="ac-ref" data-reveal>
              <span className="ac-ref__year">{pub.year ?? 's.d.'}</span>
              <div>
                <a href={pub.url} target="_blank" rel="noopener noreferrer" className="ac-ref__title">
                  {pub.title} <Icon name="external" size={14} />
                </a>
                <p className="ac-ref__authors">
                  <Authors text={pub.authors} />
                </p>
                {(pub.venue || pub.citations) && (
                  <p className="ac-ref__venue">
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
      <PageHero title="Vida Acadêmica" word="Acadêmico">
        {academicLinks.map((link) => (
          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
            <Icon name={link.icon} size={16} /> {link.name}
          </a>
        ))}
      </PageHero>
      <Intro />
      <Timeline />
      <News />
      <Publications />
    </main>
  )
}
