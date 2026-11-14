import { stats } from '../data/portfolio'

export default function AboutSection() {
  return (
    <section id="about" className="section about">
      <div className="container about-editorial">
        <div className="about-text-block">
          <p className="eyebrow">Sobre mim</p>
          <h2>Entre design, código e pesquisa</h2>
          <div className="about-text-panel">
            <p>
              Sou Emilly Sátiro, graduanda em Sistemas de Informação pela Universidade
              Federal do Piauí, em Picos - PI. Minha atuação une desenvolvimento web,
              design de interfaces e pesquisa aplicada em inteligência artificial. Tenho
              experiência com criação de interfaces, prototipação, front-end,
              desenvolvimento full stack, comunicação visual, marketing digital e
              organização de projetos acadêmicos e tecnológicos.
            </p>
          </div>

          <div className="about-stats" aria-label="Resumo profissional">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-photo">
          <img src="/foto.jpg" alt="Foto de Emilly Sátiro" />
        </div>
      </div>
    </section>
  )
}
