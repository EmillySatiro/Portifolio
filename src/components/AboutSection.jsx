import { useState } from 'react'
import BrandIcon from './BrandIcon'
import './AboutSection.css'

const CATEGORIES = [
  {
    name: 'Todas',
    techs: [
      'React',
      'Vue.js',
      'TypeScript',
      'JavaScript',
      'Python',
      'Node.js',
      'FastAPI',
      'Flask',
      'PostgreSQL',
      'TailwindCSS',
      'Docker',
      'OpenCV',
      'PyTorch',
      'Git & GitHub',
      'Quasar Framework',
      'HTML5 / CSS3',
      'Figma',
    ],
  },
  {
    name: 'Front-end & UI',
    techs: ['React', 'Vue.js', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Quasar Framework', 'HTML5 / CSS3', 'Figma'],
  },
  {
    name: 'Back-end & DB',
    techs: ['Node.js', 'Python', 'FastAPI', 'Flask', 'PostgreSQL', 'Docker'],
  },
  {
    name: 'IA & Visão Computacional',
    techs: ['OpenCV', 'PyTorch', 'Deep Learning (CNNs)', 'Processamento de Imagens'],
  },
  {
    name: 'Ferramentas & DevOps',
    techs: ['Git & GitHub', 'Docker', 'Figma'],
  },
]

function TechChips({ techs, prefix }) {
  return techs.map((tech, index) => (
    <div key={`${prefix}-${index}`} className="tech-chip-item">
      <BrandIcon name={tech} size={20} className="chip-icon" />
      <span className="chip-label">{tech}</span>
    </div>
  ))
}

export default function AboutSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  const list = CATEGORIES[activeCategory].techs
  // Listas curtas são duplicadas para preencher o letreiro.
  const activeTechs = list.length < 10 ? [...list, ...list] : list

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-header">
          <h2 className="about-title">SOBRE</h2>
          <p className="about-subtitle">
            Full Stack Development | Computer Vision | Machine Learning | Software Developerk
          </p>
          <div className="about-header-line" aria-hidden="true"></div>
        </div>

        <div className="about-main-grid">
          <div className="about-photo-col">
            <div className="photo-wrapper-stage">
              <div className="photo-backdrop-glow" aria-hidden="true"></div>
              <div className="photo-offset-frame" aria-hidden="true"></div>

              <div className="about-photo-card">
                <div className="about-photo-frame">
                  <img
                    src="/foto perfil.png"
                    alt="Clara Emílly Sousa Sátiro"
                    className="about-photo-img"
                    loading="lazy"
                    decoding="async"
                    width="480"
                    height="600"
                  />

                  <div className="photo-note-tag">
                    <span className="note-sparkle">✦</span>
                    <span className="note-name">Clara Emílly Sousa Sátiro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-text-content">
            <p>
              Sou <strong>Emilly Sátiro</strong>, estudante de Sistemas de Informação na{' '}
              <strong>Universidade Federal do Piauí (UFPI)</strong> em Picos - PI, com experiência em
              Desenvolvimento Full Stack, Desenvolvimento Front-end, prototipação de interfaces (UI/UX) e
              integração de soluções tecnológicas. Atuo no desenvolvimento de aplicações utilizando React,
              TypeScript, JavaScript, Python, FastAPI, Flask, Node.js, HTML, CSS, Tailwind CSS, PostgreSQL,
              Git e Docker, além de possuir experiência em modelagem de bancos de dados, APIs REST e
              desenvolvimento de sistemas web.
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
        </div>

        <div className="about-tech-footer">
          <div className="tech-filter-bar">
            {CATEGORIES.map((cat, index) => (
              <button
                key={cat.name}
                className={`tech-filter-btn${activeCategory === index ? ' active' : ''}`}
                onClick={() => setActiveCategory(index)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* A key reinicia a animação do letreiro ao trocar de categoria */}
          <div className="tech-marquee-track" key={activeCategory}>
            <div className="tech-marquee-content">
              <TechChips techs={activeTechs} prefix="a" />
            </div>
            <div className="tech-marquee-content" aria-hidden="true">
              <TechChips techs={activeTechs} prefix="b" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
