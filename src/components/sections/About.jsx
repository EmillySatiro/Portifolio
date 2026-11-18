import { aboutFacts, interests } from '../../data/portfolio'
import Icon from '../ui/Icon'
import RetroComputer from '../ui/RetroComputer'
import './About.css'

// Layout de "objeto central": título no alto, o computador retrô no meio,
// dois textos de cada lado e, embaixo, a ficha (formação, mestrado, startup) e os interesses.
export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="about__title">Sobre mim</h2>
        <p className="about__subtitle">Entre desenvolvimento e pesquisa científica</p>

        <div className="about__stage">
          <div className="about__col about__col--left">
            <article className="about__block" data-reveal>
              <h3 className="about__block-title">Quem sou</h3>
              <p>
                Sou <strong>Emilly Sátiro</strong>, estudante de Sistemas de Informação na{' '}
                <strong>Universidade Federal do Piauí (UFPI)</strong> em Picos - PI, com experiência em Desenvolvimento
                Full Stack, Desenvolvimento Front-end, prototipação de interfaces (UI/UX) e integração de soluções
                tecnológicas.
              </p>
            </article>
            <article className="about__block" data-reveal>
              <h3 className="about__block-title">Desenvolvimento</h3>
              <p>
                Atuo no desenvolvimento de aplicações utilizando React, TypeScript, JavaScript, Python, FastAPI, Flask,
                Node.js, HTML, CSS, Tailwind CSS, PostgreSQL, Git e Docker, além de possuir experiência em modelagem de
                bancos de dados, APIs REST e desenvolvimento de sistemas web.
              </p>
            </article>
          </div>

          <div className="about__center">
            <RetroComputer />
          </div>

          <div className="about__col about__col--right">
            <article className="about__block" data-reveal>
              <h3 className="about__block-title">Pesquisa científica</h3>
              <p>
                Na área de pesquisa, trabalho com Inteligência Artificial, Visão Computacional, Deep Learning e
                Processamento de Imagens aplicados à saúde, com foco na análise de imagens biomédicas utilizando Redes
                Neurais Convolucionais (CNNs), pré-processamento de imagens e classificação de dados.
              </p>
            </article>
            <article className="about__block" data-reveal>
              <h3 className="about__block-title">Interesses</h3>
              <ul className="about__tags">
                {interests.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        {/* Ficha: formação, mestrado e startup */}
        <dl className="about__facts">
          {aboutFacts.map((fact) => (
            <div key={fact.label} className="about__fact" data-reveal>
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
