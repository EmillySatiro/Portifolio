import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronDown, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import './CurriculumSection.css'

const EXPERIENCES = [
  { id: 1, title: 'Desenvolvedora Front-end', company: 'IAtrain · Estágio Remoto', period: 'mar. 2026 — jun. 2026', color: 'cyan' },
  { id: 2, title: 'Coautora & Dev Full Stack', company: 'Sistema PREMAUT (UFPI)', period: 'mar. 2026 — atual', color: 'purple' },
  { id: 3, title: 'UI/UX Designer', company: 'Projeto SINFO 2026 (UFPI)', period: 'mar. 2026 — jun. 2026', color: 'blue' },
  { id: 4, title: 'Diretora de Marketing & Front-end', company: 'Juá Soluções em Tecnologia', period: 'mai. 2025 — atual', color: 'rose' },
  { id: 5, title: 'UI/UX Designer', company: 'Site Institucional Juá', period: 'mar. 2025 — ago. 2025', color: 'cyan' },
  { id: 6, title: 'Diretora de Ensino', company: 'Liga Acadêmica de SI (LADS)', period: 'abr. 2025 — mai. 2026', color: 'amber' },
  { id: 7, title: 'Desenvolvedora Full Stack', company: 'Projeto Patocast (UFPI)', period: 'jun. 2024', color: 'purple' },
  {
    id: 8,
    title: 'Desenvolvedora Full Stack & UI/UX',
    company: 'Emilly Sátiro · Open for Hire',
    period: '2026 — ∞',
    color: 'rose',
    isSpecial: true,
  },
]

const SHUFFLE_TRANSITION = 'transform 1.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 1.6s ease'
const REST_TRANSITION = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease'

const SHUFFLE_STYLES = [
  { zIndex: 10, transform: 'translate3d(-110px, -30px, 0) rotate(-18deg) scale(0.94)', opacity: 1 },
  { zIndex: 9, transform: 'translate3d(115px, -40px, 0) rotate(20deg) scale(0.92)', opacity: 0.95 },
  { zIndex: 8, transform: 'translate3d(0px, 55px, 0) rotate(-10deg) scale(0.88)', opacity: 0.85 },
]

const REST_STYLES = [
  { zIndex: 10, transform: 'translate3d(0, 0, 0) scale(1) rotate(0deg)', opacity: 1 },
  { zIndex: 9, transform: 'translate3d(16px, 16px, 0) scale(0.96) rotate(3.5deg)', opacity: 0.9 },
  { zIndex: 8, transform: 'translate3d(32px, 32px, 0) scale(0.92) rotate(-3.5deg)', opacity: 0.78 },
]

function getCardStyle(index, isShuffling) {
  if (isShuffling) return { ...SHUFFLE_STYLES[index], transition: SHUFFLE_TRANSITION }
  return { ...REST_STYLES[index], transition: REST_TRANSITION }
}

function CardCode({ item }) {
  if (item.isSpecial) {
    return (
      <pre className="code-pre">
        <code>
          <span className="code-fn">console</span>.<span className="code-log">log</span>(
          <span className="code-str">"Hello, World! 👋"</span>);{'\n'}
          <span className="code-kw">const</span> <span className="code-var">hireMe</span> = {'{'}
          {'\n  '}
          <span className="code-key">status</span>: <span className="code-str">"Disponível para contratação!"</span>,
          {'\n  '}
          <span className="code-key">contact</span>:{' '}
          <span className="code-str">"Vamos criar algo incrível juntos? ✨"</span>
          {'\n};'}
        </code>
      </pre>
    )
  }

  return (
    <pre className="code-pre">
      <code>
        <span className="code-kw">const</span> <span className="code-var">experience</span> = {'{'}
        {'\n  '}
        <span className="code-key">company</span>: <span className="code-str">"{item.company}"</span>,
        {'\n  '}
        <span className="code-key">role</span>: <span className="code-str">"{item.title}"</span>
        {'\n};'}
      </code>
    </pre>
  )
}

export default function CurriculumSection() {
  const sectionRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [isShuffling, setIsShuffling] = useState(false)
  const [isCvDropdownOpen, setIsCvDropdownOpen] = useState(false)

  // Embaralha as cartas uma vez, quando a seção aparece na tela.
  useEffect(() => {
    if (!('IntersectionObserver' in window) || !sectionRef.current) return undefined
    let timer
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect()
          setIsShuffling(true)
          timer = setTimeout(() => setIsShuffling(false), 1600)
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(sectionRef.current)
    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  // Fecha o menu de download ao clicar fora dele.
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.cv-download-dropdown-wrapper')) setIsCvDropdownOpen(false)
    }
    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [])

  const nextCard = () => {
    if (isFlipping || isShuffling) return
    setIsFlipping(true)
    setTimeout(() => {
      setCurrentIndex((i) => (i + 1) % EXPERIENCES.length)
      setIsFlipping(false)
    }, 250)
  }

  const visibleDeck = Array.from(
    { length: Math.min(3, EXPERIENCES.length) },
    (_, i) => EXPERIENCES[(currentIndex + i) % EXPERIENCES.length],
  )

  return (
    <section id="curriculum" ref={sectionRef} className="section curriculum-section">
      <div className="static-bat-mascot-bg" aria-hidden="true">
        <img src="/bat.svg" alt="Morcego Estático Design" className="static-bat-img" />
      </div>

      <div className="container wide-container relative-z">
        <div className="curriculum-header">
          <h2 className="curriculum-title">CURRÍCULO</h2>
          <p className="curriculum-subtitle">Trajetória profissional, atuação acadêmica e experiências</p>
          <div className="curriculum-header-line" aria-hidden="true"></div>
        </div>

        <div className="curriculum-2col-layout">
          <div className="deck-left-column">
            <div
              className={`pokemon-card-deck${isShuffling ? ' is-shuffling-deck' : ''}`}
              onClick={nextCard}
              title="Clique para passar para a próxima experiência"
            >
              {visibleDeck.map((item, index) => {
                const classes = ['pokemon-card-item', `card-theme-${item.color}`]
                if (index === 0) classes.push('top-active')
                if (isFlipping && index === 0) classes.push('is-flipping')
                return (
                  <div key={item.id} className={classes.join(' ')} style={getCardStyle(index, isShuffling)}>
                    <div className="card-inner-frame">
                      <div className="card-top-bar">
                        <div className="code-window-dots">
                          <span className="dot dot-red"></span>
                          <span className="dot dot-yellow"></span>
                          <span className="dot dot-green"></span>
                          <span className="code-file-name">
                            {item.isSpecial ? 'hello_world.js' : `experience_${item.id}.js`}
                          </span>
                        </div>
                        <span className="card-period-tag">{item.period}</span>
                      </div>

                      <div className="card-code-block">
                        <CardCode item={item} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="deck-dots-bar">
              {EXPERIENCES.map((item, idx) => (
                <span
                  key={item.id}
                  className={`deck-dot${idx === currentIndex ? ' active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentIndex(idx)
                  }}
                  title={`Ir para experiência ${idx + 1}`}
                ></span>
              ))}
            </div>
          </div>

          <div className="curriculum-right-actions">
            <div className="cv-download-dropdown-wrapper">
              <button
                className="cv-main-dropdown-btn"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsCvDropdownOpen((open) => !open)
                }}
              >
                <Download size={18} />
                <span>Baixar Currículo</span>
                <ChevronDown size={16} className={isCvDropdownOpen ? 'rotate-icon' : undefined} />
              </button>

              {isCvDropdownOpen && (
                <div className="cv-options-popover">
                  <a
                    href="/Curriculo_formatado_PT.pdf"
                    download="Curriculo_Emilly_Satiro_PT.pdf"
                    className="cv-option-item"
                    onClick={() => setIsCvDropdownOpen(false)}
                  >
                    <div className="option-flag">🇧🇷</div>
                    <div className="option-info">
                      <span className="option-title">Versão em Português</span>
                      <span className="option-sub">Formato PDF · PT-BR</span>
                    </div>
                  </a>

                  <a
                    href="/Curriculo_formatado_ingles.pdf"
                    download="Resume_Emilly_Satiro_EN.pdf"
                    className="cv-option-item"
                    onClick={() => setIsCvDropdownOpen(false)}
                  >
                    <div className="option-flag">🇺🇸</div>
                    <div className="option-info">
                      <span className="option-title">English Version</span>
                      <span className="option-sub">Format PDF · EN-US</span>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <Link to="/projetos" className="view-projects-secondary-btn">
              <span>Ver Meus Projetos</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
