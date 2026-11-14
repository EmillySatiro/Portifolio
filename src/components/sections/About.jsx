import { aboutFacts } from '../../data/portfolio'
import Icon from '../ui/Icon'
import './About.css'

function FactCard({ fact }) {
  const content = (
    <>
      <span className="about__fact-icon">
        <Icon name={fact.icon} size={20} />
      </span>
      <span className="about__fact-text">
        <span className="about__fact-label">{fact.label}</span>
        <span className="about__fact-value">{fact.value}</span>
        <span className="about__fact-detail">{fact.detail}</span>
      </span>
      {fact.url && <Icon name="external" size={16} className="about__fact-link" />}
    </>
  )

  return fact.url ? (
    <a href={fact.url} target="_blank" rel="noopener noreferrer" className="about__fact is-link">
      {content}
    </a>
  ) : (
    <div className="about__fact">{content}</div>
  )
}

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <header className="about__head">
          <p className="eyebrow" data-reveal>
            Sobre
          </p>
          <h2 className="section-title display about__title" data-reveal style={{ '--delay': '0.08s' }}>
            Entre Desenvolvimento e Pesquisa Científica
          </h2>
        </header>

        <div className="about__grid">
          <p className="about__lead" data-reveal style={{ '--delay': '0.12s' }}>
            Sou <strong>Emilly Sátiro</strong>, estudante de Sistemas de Informação na{' '}
            <strong>Universidade Federal do Piauí (UFPI)</strong> em Picos - PI, com experiência em Desenvolvimento Full
            Stack, Desenvolvimento Front-end, prototipação de interfaces (UI/UX) e integração de soluções tecnológicas.
          </p>

          <div className="about__columns" data-reveal style={{ '--delay': '0.18s' }}>
            <div className="about__block">
              <h3 className="about__block-title">Desenvolvimento</h3>
              <p>
                Atuo no desenvolvimento de aplicações utilizando React, TypeScript, JavaScript, Python, FastAPI, Flask,
                Node.js, HTML, CSS, Tailwind CSS, PostgreSQL, Git e Docker, além de possuir experiência em modelagem de
                bancos de dados, APIs REST e desenvolvimento de sistemas web.
              </p>
            </div>
            <div className="about__block">
              <h3 className="about__block-title">Pesquisa científica</h3>
              <p>
                Na área de pesquisa, trabalho com Inteligência Artificial, Visão Computacional, Deep Learning e
                Processamento de Imagens aplicados à saúde, com foco na análise de imagens biomédicas utilizando Redes
                Neurais Convolucionais (CNNs), pré-processamento de imagens e classificação de dados.
              </p>
            </div>
          </div>

          <p className="about__interests" data-reveal style={{ '--delay': '0.22s' }}>
            Tenho interesse em oportunidades nas áreas de Desenvolvimento de Software, Desenvolvimento Full Stack,
            Front-end, Back-end, Engenharia de Software, Inteligência Artificial, Machine Learning e Visão Computacional.
          </p>
        </div>

        <ul className="about__facts">
          {aboutFacts.map((fact, index) => (
            <li key={fact.label} data-reveal style={{ '--delay': `${0.1 + index * 0.08}s` }}>
              <FactCard fact={fact} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
