import { aboutFacts, interests } from '../../data/portfolio'
import VoxelBat from '../ui/VoxelBat'
import './About.css'

const [graduation, masters, startup] = aboutFacts

// Blocos em volta do morcego: três à esquerda, três à direita
const LEFT = [
  {
    title: 'Quem sou',
    text: 'Estudante de Sistemas de Informação na Universidade Federal do Piauí (UFPI), em Picos - PI, com experiência em desenvolvimento full stack, front-end, prototipação de interfaces (UI/UX) e integração de soluções tecnológicas.',
  },
  {
    title: 'Desenvolvimento',
    text: 'Aplicações com React, TypeScript, JavaScript, Python, FastAPI, Flask, Node.js, Tailwind CSS, PostgreSQL, Git e Docker, além de modelagem de bancos de dados, APIs REST e sistemas web.',
  },
  {
    title: 'Pesquisa científica',
    text: 'Inteligência Artificial, Visão Computacional, Deep Learning e Processamento de Imagens aplicados à saúde, com foco em imagens biomédicas, redes neurais convolucionais (CNNs) e classificação de dados.',
  },
]

// Layout de "objeto central": título no alto, o morcego em 3D no meio e as informações em volta.
export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="about__title">Sobre mim</h2>

        <div className="about__stage">
          <div className="about__col about__col--left">
            {LEFT.map((block) => (
              <article key={block.title} className="about__block" data-reveal>
                <h3 className="about__block-title">{block.title}</h3>
                <p>{block.text}</p>
              </article>
            ))}
          </div>

          <div className="about__center">
            <VoxelBat />
          </div>

          <div className="about__col about__col--right">
            <article className="about__block" data-reveal>
              <h3 className="about__block-title">Formação</h3>
              <p>
                {graduation.value} · {graduation.detail}
                <br />
                Aluna especial do mestrado em {masters.value} · UFPI
              </p>
            </article>

            <article className="about__block" data-reveal>
              <h3 className="about__block-title">Startup</h3>
              <p>
                Membro da{' '}
                <a href={startup.url} target="_blank" rel="noopener noreferrer">
                  {startup.value}
                </a>
                , startup nascida da minha pesquisa de iniciação científica.
              </p>
            </article>

            <article className="about__block" data-reveal>
              <h3 className="about__block-title">Interesses</h3>
              <p>{interests.join(' · ')}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
