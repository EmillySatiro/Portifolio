import { aboutFacts, focusAreas } from '../../data/portfolio'
import Icon from '../ui/Icon'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__intro">
          <p className="eyebrow" data-reveal>
            Sobre
          </p>
          <h2 className="section-title display" data-reveal style={{ '--delay': '0.08s' }}>
            Entre design, código e pesquisa
          </h2>

          <ul className="about__areas" data-reveal style={{ '--delay': '0.16s' }}>
            {focusAreas.map((area) => (
              <li key={area} className="chip">
                {area}
              </li>
            ))}
          </ul>

          <ul className="about__facts">
            {aboutFacts.map((fact, index) => (
              <li key={fact.label} className="about__fact" data-reveal style={{ '--delay': `${0.2 + index * 0.08}s` }}>
                <span className="about__fact-icon">
                  <Icon name={fact.icon} size={20} />
                </span>
                <span>
                  <span className="about__fact-label">{fact.label}</span>
                  <span className="about__fact-value">{fact.value}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="about__text" data-reveal style={{ '--delay': '0.15s' }}>
          <p className="about__lead">
            Sou <strong>Emilly Sátiro</strong>, estudante de Sistemas de Informação na{' '}
            <strong>Universidade Federal do Piauí (UFPI)</strong> em Picos - PI, com experiência em Desenvolvimento Full
            Stack, Desenvolvimento Front-end, prototipação de interfaces (UI/UX) e integração de soluções tecnológicas.
          </p>
          <p>
            Atuo no desenvolvimento de aplicações utilizando React, TypeScript, JavaScript, Python, FastAPI, Flask,
            Node.js, HTML, CSS, Tailwind CSS, PostgreSQL, Git e Docker, além de possuir experiência em modelagem de
            bancos de dados, APIs REST e desenvolvimento de sistemas web.
          </p>
          <p>
            Na área de pesquisa, trabalho com Inteligência Artificial, Visão Computacional, Deep Learning e
            Processamento de Imagens aplicados à saúde, com foco na análise de imagens biomédicas utilizando Redes
            Neurais Convolucionais (CNNs), pré-processamento de imagens e classificação de dados.
          </p>
          <p>
            Tenho interesse em oportunidades nas áreas de Desenvolvimento de Software, Desenvolvimento Full Stack,
            Front-end, Back-end, Engenharia de Software, Inteligência Artificial, Machine Learning e Visão
            Computacional.
          </p>
        </div>
      </div>
    </section>
  )
}
