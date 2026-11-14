import { focusAreas, profile } from '../../data/portfolio'
import Photo from '../ui/Photo'
import Scribble from '../ui/Scribble'
import TechMarquee from './TechMarquee'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        {/* Colagem: recorte pequeno + retrato */}
        <div className="about__collage" data-reveal>
          <figure className="about__thumb">
            <Photo className="about__thumb-img" alt="" sizes="200px" />
            <Scribble shape="x" className="about__x" strokeWidth={5} />
          </figure>
          <figure className="about__portrait">
            <Photo className="about__portrait-img" alt={`Foto de ${profile.fullName}`} sizes="(max-width: 860px) 70vw, 34vw" />
            <figcaption className="about__caption">✦ {profile.fullName}</figcaption>
          </figure>
          <Scribble shape="loop" className="about__loop" strokeWidth={2} />
        </div>

        <div className="about__text">
          <p className="eyebrow" data-reveal>
            Sobre
          </p>
          <h2 className="about__title display" data-reveal style={{ '--delay': '0.1s' }}>
            Entre design, código e pesquisa
          </h2>
          <p className="about__areas" data-reveal style={{ '--delay': '0.2s' }}>
            {focusAreas.join(' | ')}
          </p>

          <div className="about__body" data-reveal style={{ '--delay': '0.3s' }}>
            <p>
              Sou <strong>Emilly Sátiro</strong>, estudante de Sistemas de Informação na{' '}
              <strong>Universidade Federal do Piauí (UFPI)</strong> em Picos - PI, com experiência em
              Desenvolvimento Full Stack, Desenvolvimento Front-end, prototipação de interfaces (UI/UX) e
              integração de soluções tecnológicas. Atuo no desenvolvimento de aplicações utilizando React,
              TypeScript, JavaScript, Python, FastAPI, Flask, Node.js, HTML, CSS, Tailwind CSS, PostgreSQL, Git
              e Docker, além de possuir experiência em modelagem de bancos de dados, APIs REST e desenvolvimento
              de sistemas web.
            </p>
            <p>
              Na área de pesquisa, trabalho com Inteligência Artificial, Visão Computacional, Deep Learning e
              Processamento de Imagens aplicados à saúde, com foco na análise de imagens biomédicas utilizando
              Redes Neurais Convolucionais (CNNs), pré-processamento de imagens e classificação de dados. Tenho
              interesse em oportunidades nas áreas de Desenvolvimento de Software, Desenvolvimento Full Stack,
              Front-end, Back-end, Engenharia de Software, Inteligência Artificial, Machine Learning e Visão
              Computacional.
            </p>
          </div>

          <a href="#curriculum" className="cta-link spaced about__cta" data-reveal style={{ '--delay': '0.4s' }}>
            Ver currículo <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <TechMarquee />
    </section>
  )
}
