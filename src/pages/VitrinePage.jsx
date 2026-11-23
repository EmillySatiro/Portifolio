import { Link } from 'react-router-dom'
import PastelBackdrop from '../components/ui/PastelBackdrop'
import Icon from '../components/ui/Icon'
import './VitrinePage.css'

// Loja em pixel art (16 × 14). Cada letra é uma cor; "." é vazio.
const STORE = [
  '................',
  '..AAAAAAAAAAAA..',
  '.AAAAAAAAAAAAAA.',
  '.ABBABBABBABBAB.',
  '.BWWBWWBWWBWWBW.',
  '..WWWWWWWWWWWW..',
  '..WGGGGWWDDDDW..',
  '..WGSSGWWDNNDW..',
  '..WGSSGWWDNNDW..',
  '..WGGGGWWDNHDW..',
  '..WWWWWWWDNNDW..',
  '..WWWWWWWDNNDW..',
  'FFFFFFFFFFFFFFFF',
  '.FFFFFFFFFFFFFF.',
]
const COLORS = {
  A: '#414575', // telhado índigo
  B: '#7b3fc4', // listras do toldo
  W: '#f4f1ea', // parede
  G: '#23264d', // moldura da vitrine
  S: '#8ad7eb', // vidro da vitrine
  D: '#23264d', // batente da porta
  N: '#b597f0', // porta
  H: '#ffb89a', // maçaneta
  F: '#2a2c45', // calçada
}

// Monta a lista de pixels de baixo para cima (a loja "sobe" do chão)
const PIXELS = STORE.flatMap((row, y) =>
  [...row].map((ch, x) => (ch === '.' ? null : { x, y, color: COLORS[ch] })),
)
  .filter(Boolean)
  .sort((a, b) => b.y - a.y || a.x - b.x)

const SOON = ['Sites institucionais', 'Portfólios', 'Landing pages', 'Automações', 'Sistemas web', 'Lojas virtuais']

// Vitrine (catálogo de serviços) ainda em construção: a loja se monta em pixels, em loop.
export default function VitrinePage() {
  return (
    <main className="vitrine">
      <PastelBackdrop />

      <div className="vitrine__inner">
        <svg className="vitrine__store" viewBox="0 0 16 14" shapeRendering="crispEdges" aria-hidden="true">
          {PIXELS.map((px, i) => (
            <rect
              key={`${px.x}-${px.y}`}
              x={px.x}
              y={px.y}
              width="1"
              height="1"
              fill={px.color}
              style={{ '--i': i, '--n': PIXELS.length }}
            />
          ))}
        </svg>

        <p className="vitrine__status">
          <span className="vitrine__dot" aria-hidden="true" />
          Em construção
        </p>

        <h1 className="vitrine__title">Vitrine</h1>
        <p className="vitrine__lead">
          Em breve, um catálogo de projetos que você pode contratar: escolha o tipo de site ou sistema e a gente
          começa.
        </p>

        <ul className="vitrine__soon" aria-label="O que vai ter na vitrine">
          {SOON.map((item, i) => (
            <li key={item} style={{ '--i': i }}>
              {item}
            </li>
          ))}
        </ul>

        <Link to="/#contact" className="pbtn pbtn--main">
          Quero um projeto agora <Icon name="arrowRight" className="icon-arrow" />
        </Link>
      </div>
    </main>
  )
}
