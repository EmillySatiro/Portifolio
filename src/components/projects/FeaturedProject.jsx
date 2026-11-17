import { useState } from 'react'
import Icon from '../ui/Icon'
import TechLogo from '../ui/TechLogo'
import './FeaturedProject.css'

// Projeto em destaque: galeria em "janela de navegador" + informações e fases do projeto.
export default function FeaturedProject({ project }) {
  const [current, setCurrent] = useState(0)
  const image = project.images[current]

  return (
    <article className="featured">
      <div className="featured__gallery" data-reveal>
        <div className="featured__window">
          <div className="featured__bar" aria-hidden="true">
            <i />
            <i />
            <i />
            <span>{project.site.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
          </div>
          <img
            key={image.src}
            className="featured__img"
            src={image.src}
            alt={image.alt}
            width="1100"
            height="593"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="featured__tabs" role="tablist" aria-label="Imagens do projeto">
          {project.images.map((img, index) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={index === current}
              className={`featured__tab${index === current ? ' is-active' : ''}`}
              onClick={() => setCurrent(index)}
            >
              <img src={img.src} alt="" width="110" height="60" loading="lazy" decoding="async" />
              <span>{img.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="featured__info">
        <div className="featured__badges" data-reveal>
          <span className="chip featured__chip">★ Projeto em destaque</span>
          {project.badges.map((badge) => (
            <span key={badge} className="chip">
              {badge}
            </span>
          ))}
        </div>

        <h2 className="featured__title display" data-reveal style={{ '--delay': '0.06s' }}>
          {project.name}
        </h2>
        <p className="featured__subtitle" data-reveal style={{ '--delay': '0.1s' }}>
          {project.subtitle}
        </p>
        <p className="featured__role" data-reveal style={{ '--delay': '0.12s' }}>
          <strong>{project.role}</strong> · {project.period}
        </p>
        <p className="featured__desc" data-reveal style={{ '--delay': '0.14s' }}>
          {project.description}
        </p>

        <ul className="featured__highlights" data-reveal style={{ '--delay': '0.18s' }}>
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <a
          href={project.site}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary featured__site"
          data-reveal
          style={{ '--delay': '0.2s' }}
        >
          Acessar o site <Icon name="external" size={16} />
        </a>

        <div className="featured__phases">
          {project.phases.map((phase, index) => (
            <div key={phase.name} className="phase" data-reveal style={{ '--delay': `${0.24 + index * 0.08}s` }}>
              <span className="phase__step">0{index + 1}</span>
              <span className="phase__body">
                <span className="phase__name">{phase.name}</span>
                <span className="phase__detail">{phase.detail}</span>
                <span className="phase__logos">
                  {phase.logos.map((logo) => (
                    <TechLogo key={logo} name={logo} size={18} />
                  ))}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
