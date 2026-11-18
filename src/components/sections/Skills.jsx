import { techCategories, technologies } from '../../data/portfolio'
import TechLogo from '../ui/TechLogo'
import './Skills.css'

// Cada tecnologia aparece uma vez só, na sua área principal
const byCategory = techCategories.map((cat) => ({
  ...cat,
  items: technologies.filter((tech) => tech.categories[0] === cat.id),
}))

// Faixa em movimento com todos os logos (duplicada para o loop não ter emenda)
const STRIP = technologies.flatMap((tech) => tech.logos.map((logo) => ({ logo, key: `${tech.name}-${logo}` })))

// Stack organizada por área em blocos (bento): compacta, sem rolar muito.
export default function Skills() {
  return (
    <section id="skills" className="section skills pixel-edge">
      <div className="container">
        <header className="skills__head">
          <h2 className="skills__title">Minha stack</h2>
          <p className="skills__lead">
            {technologies.length} tecnologias que uso no dia a dia, organizadas por área. Passe o mouse para ver o que
            cada uma faz.
          </p>
        </header>
      </div>

      <div className="skills__strip" aria-hidden="true">
        <div className="skills__strip-track">
          {[...STRIP, ...STRIP].map(({ logo, key }, i) => (
            <span key={`${key}-${i}`} className="skills__strip-item">
              <TechLogo name={logo} size={26} />
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="stack">
          {byCategory.map((cat) => (
            <article key={cat.id} className={`stack__area stack__area--${cat.id}`} data-cat={cat.id}>
              <header className="stack__head">
                <h3 className="stack__name">{cat.name}</h3>
                <span className="stack__count">{String(cat.items.length).padStart(2, '0')}</span>
              </header>
              <ul className="stack__list">
                {cat.items.map((tech) => (
                  <li key={tech.name}>
                    <span className="stack__item" tabIndex={0} data-desc={tech.description}>
                      <span className="stack__logos">
                        {tech.logos.map((logo) => (
                          <TechLogo key={logo} name={logo} size={18} />
                        ))}
                      </span>
                      {tech.name}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
