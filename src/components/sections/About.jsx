import { aboutFacts, interests } from '../../data/portfolio'
import Icon from '../ui/Icon'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__spread">
          <h2 className="section-title display about__title">Entre Desenvolvimento e Pesquisa Científica</h2>

          <div className="about__grid">
            <p className="about__lead">
              Sou <strong>Emilly Sátiro</strong>, estudante de Sistemas de Informação na{' '}
              <strong>Universidade Federal do Piauí (UFPI)</strong> em Picos - PI, com experiência em Desenvolvimento
              Full Stack, Desenvolvimento Front-end, prototipação de interfaces (UI/UX) e integração de soluções
              tecnológicas.
            </p>

            <div className="about__columns">
              <div className="about__block">
                <h3 className="about__block-title">Desenvolvimento</h3>
                <p>
                  Atuo no desenvolvimento de aplicações utilizando React, TypeScript, JavaScript, Python, FastAPI,
                  Flask, Node.js, HTML, CSS, Tailwind CSS, PostgreSQL, Git e Docker, além de possuir experiência em
                  modelagem de bancos de dados, APIs REST e desenvolvimento de sistemas web.
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

            <div className="about__interests">
              <h3 className="about__sub">Interesses</h3>
              <p className="about__interests-list">
                {interests.map((item, i) => (
                  <span key={item}>
                    {item}
                    {i < interests.length - 1 && <i aria-hidden="true"> / </i>}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>

        {/* Ficha: a informação primeiro, o rótulo depois, colunas separadas por fios */}
        <dl className="about__facts">
          {aboutFacts.map((fact) => (
            <div key={fact.label} className="about__fact">
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
