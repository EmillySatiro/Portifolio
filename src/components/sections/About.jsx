import { aboutFacts, interests } from '../../data/portfolio'
import Icon from '../ui/Icon'
import './About.css'

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

          <div className="about__interests" data-reveal style={{ '--delay': '0.22s' }}>
            <p className="eyebrow">Interesses</p>
            <p className="about__interests-list">
              {interests.map((item, i) => (
                <span key={item}>
                  {item}
                  {i < interests.length - 1 && <i aria-hidden="true"> / </i>}
                </span>
              ))}
            </p>
          </div>        </div>

        {/* Ficha: rótulo em cima, informação embaixo, colunas separadas por fios */}
        <dl className="about__facts">
          {aboutFacts.map((fact, index) => (
            <div key={fact.label} className="about__fact" data-reveal style={{ '--delay': `${0.1 + index * 0.08}s` }}>
              <dt className="about__fact-label">{fact.label}</dt>
              <dd className="about__fact-value">
                {fact.url ? (
                  <a href={fact.url} target="_blank" rel="noopener noreferrer">
                    {fact.value} <Icon name="arrowRight" size={18} className="about__fact-arrow" />
                  </a>
                ) : (
                  fact.value
                )}
              </dd>
              <dd className="about__fact-detail">{fact.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
