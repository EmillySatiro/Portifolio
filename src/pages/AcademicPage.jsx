import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/layout/PageHero'
import Icon from '../components/ui/Icon'
import { academicLinks, authorHighlight, news, publications } from '../data/academic'
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

// Visualizador de fotos (dialog nativo), com navegação entre as fotos da notícia
function Lightbox({ photos, index, onChange, onClose }) {
  const ref = useRef(null)
  const photo = index === null ? null : photos[index]

  useEffect(() => {
    const dialog = ref.current
    if (photo && !dialog.open) dialog.showModal()
    if (!photo && dialog.open) dialog.close()
  }, [photo])

  useEffect(() => {
    if (!photo) return undefined
    const onKey = (e) => {
      if (e.key === 'ArrowRight') onChange((index + 1) % photos.length)
      if (e.key === 'ArrowLeft') onChange((index - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [photo, index, photos.length, onChange])

  return (
    <dialog ref={ref} className="ac-lightbox" onClose={onClose} onClick={(e) => e.target === ref.current && onClose()}>
      {photo && (
        <figure>
          <img src={photo.src} alt={photo.alt} />
          <figcaption>
            {photo.alt}{' '}
            <span>
              {index + 1} / {photos.length}
            </span>
          </figcaption>
        </figure>
      )}
      {photos.length > 1 && (
        <>
          <button
            type="button"
            className="ac-lightbox__nav is-prev"
            onClick={() => onChange((index - 1 + photos.length) % photos.length)}
            aria-label="Foto anterior"
          >
            <Icon name="arrowLeft" size={20} />
          </button>
          <button
            type="button"
            className="ac-lightbox__nav is-next"
            onClick={() => onChange((index + 1) % photos.length)}
            aria-label="Próxima foto"
          >
            <Icon name="arrowRight" size={20} />
          </button>
        </>
      )}
      <button type="button" className="ac-lightbox__close" onClick={onClose} aria-label="Fechar">
        <Icon name="close" size={20} />
      </button>
    </dialog>
  )
}

// A notícia aberta: manchete, foto de destaque, texto e galeria
function Article({ item, onOpenPhoto }) {
  const [cover, ...gallery] = item.photos
  return (
    <article className="ac-article" key={item.slug}>
      <h2 className="ac-article__headline display">{item.headline}</h2>
      <p className="ac-article__lead">{item.lead}</p>
      <p className="ac-article__byline">
        <strong>{item.section}</strong>
        {[item.date, item.location].filter(Boolean).map((part) => (
          <span key={part}>{part}</span>
        ))}
      </p>

      {cover && (
        <figure className="ac-article__cover">
          <button
            type="button"
            className="ac-article__cover-btn"
            onClick={() => onOpenPhoto(0)}
            aria-label={`Ampliar: ${cover.alt}`}
          >
            <img className="ac-article__cover-bg" src={cover.src} alt="" aria-hidden="true" />
            <img className="ac-article__cover-img" src={cover.src} alt={cover.alt} />
          </button>
        </figure>
      )}

      <div className="ac-article__body">
        {item.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>

      {item.links && (
        <div className="ac-article__links">
          {item.links.map((link) =>
            link.url ? (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                {link.label} <Icon name="external" size={14} />
              </a>
            ) : (
              <button
                key={link.label}
                type="button"
                className="btn btn--outline"
                onClick={() => scrollToId(link.target)}
              >
                {link.label} <Icon name="arrowRight" size={14} />
              </button>
            ),
          )}
        </div>
      )}

      {gallery.length > 0 && (
        <section className="ac-gallery" aria-label="Galeria de fotos">
          <div className="ac-gallery__grid">
            {gallery.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                className="ac-gallery__item"
                onClick={() => onOpenPhoto(i + 1)}
                aria-label={`Ampliar: ${photo.alt}`}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}

function Newsroom() {
  const [params, setParams] = useSearchParams()
  const [photoIndex, setPhotoIndex] = useState(null)
  const topRef = useRef(null)

  const current = Math.max(
    0,
    news.findIndex((n) => n.slug === params.get('noticia')),
  )
  const item = news[current]
  const prev = news[current - 1]
  const next = news[current + 1]

  const open = (slug) => {
    setParams({ noticia: slug }, { replace: true, preventScrollReset: true })
    setPhotoIndex(null)
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="ac-news" ref={topRef}>
      <div className="container ac-news__grid">
        <div className="ac-news__main">
          <Article item={item} onOpenPhoto={setPhotoIndex} />

          <nav className="ac-pager" aria-label="Outras notícias">
            {prev ? (
              <button type="button" className="ac-pager__link" onClick={() => open(prev.slug)}>
                <span className="ac-pager__label">
                  <Icon name="arrowLeft" size={14} /> Mais recente
                </span>
                <span className="ac-pager__title">{prev.headline}</span>
              </button>
            ) : (
              <span />
            )}
            {next && (
              <button type="button" className="ac-pager__link is-next" onClick={() => open(next.slug)}>
                <span className="ac-pager__label">
                  Anterior <Icon name="arrowRight" size={14} />
                </span>
                <span className="ac-pager__title">{next.headline}</span>
              </button>
            )}
          </nav>
        </div>

        <aside className="ac-news__aside" aria-label="Todas as notícias">
          <h2 className="ac-news__aside-title">Últimas notícias</h2>
          <ol className="ac-headlines">
            {news.map((n, i) => (
              <li key={n.slug}>
                <button
                  type="button"
                  className={`ac-headline ${i === current ? 'is-active' : ''}`}
                  onClick={() => open(n.slug)}
                  aria-current={i === current ? 'true' : undefined}
                >
                  {n.photos[0] && <img src={n.photos[0].src} alt="" loading="lazy" decoding="async" />}
                  <span>
                    <span className="ac-headline__title">{n.headline}</span>
                    <span className="ac-headline__meta">
                      {n.section} · {n.date}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </aside>
      </div>

      <Lightbox photos={item.photos} index={photoIndex} onChange={setPhotoIndex} onClose={() => setPhotoIndex(null)} />
    </section>
  )
}

function Publications() {
  return (
    <section id="publicacoes" className="ac-pubs-section pixel-edge">
      <div className="container">
        <header className="ac-pubs__head">
          <h2 className="section-title display">Publicações</h2>
          <div className="ac-pubs__links">
            {academicLinks.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                <Icon name={link.icon} size={16} /> {link.name}
              </a>
            ))}
          </div>
        </header>

        <ol className="ac-refs">
          {publications.map((pub) => (
            <li key={pub.title} className="ac-ref">
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
                    {[
                      pub.type,
                      pub.venue,
                      pub.citations ? `${pub.citations} ${pub.citations === 1 ? 'citação' : 'citações'}` : null,
                    ]
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
      <PageHero
        title="Vida Acadêmica"
        lead="Iniciação científica, eventos e publicações: o lado da pesquisa que corre junto com o desenvolvimento."
      >
        {academicLinks.map((link) => (
          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
            <Icon name={link.icon} size={16} /> {link.name}
          </a>
        ))}
      </PageHero>
      <Newsroom />
      <Publications />
    </main>
  )
}
