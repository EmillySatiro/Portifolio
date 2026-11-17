import { avatar } from '../../data/portfolio'
import BatLogo from './BatLogo'
import './PixelComputer.css'

// Linhas de código da cena 1: recuo e larguras (em "caracteres") de cada trecho colorido
const CODE = [
  [0, ['k', 5], ['f', 9], ['p', 3]],
  [1, ['k', 4], ['v', 7], ['p', 2], ['s', 10]],
  [1, ['k', 6], ['f', 6], ['p', 4]],
  [2, ['v', 8], ['p', 2], ['f', 11]],
  [1, ['p', 2]],
  [0, ['k', 6], ['v', 9]],
]

// Computador em pixel art; a tela alterna três cenas sobre o meu trabalho:
// código (desenvolvimento) → detecção na imagem (visão computacional) → interface montando (design).
export default function PixelComputer() {
  return (
    <div className="pc" aria-hidden="true">
      <div className="pc__float">
        <div className="pc__monitor">
          <div className="pc__screen">
            {/* Cena 1: código sendo digitado */}
            <div className="pc__scene pc__scene--code">
              {CODE.map(([indent, ...tokens], line) => (
                <div key={line} className="pc__line" style={{ '--line': line, paddingLeft: `${indent * 1.6}em` }}>
                  {tokens.map(([kind, len], i) => (
                    <span key={i} className={`pc__tok pc__tok--${kind}`} style={{ '--len': len }} />
                  ))}
                </div>
              ))}
              <span className="pc__cursor" />
            </div>

            {/* Cena 2: visão computacional encontrando o rosto na imagem */}
            <div className="pc__scene pc__scene--vision">
              <img src={avatar.src} alt="" loading="lazy" decoding="async" />
              <span className="pc__scan" />
              <span className="pc__box">
                <span className="pc__label">rosto · 0.98</span>
              </span>
            </div>

            {/* Cena 3: interface se montando */}
            <div className="pc__scene pc__scene--ui">
              <span className="pc__ui pc__ui--bar" />
              <span className="pc__ui pc__ui--title" />
              <span className="pc__ui pc__ui--text" />
              <span className="pc__ui pc__ui--card" />
              <span className="pc__ui pc__ui--card" />
              <span className="pc__ui pc__ui--btn" />
            </div>

            <span className="pc__glare" />
          </div>
          <div className="pc__chin">
            <BatLogo size={26} />
            <span className="pc__led" />
          </div>
        </div>
        <div className="pc__neck" />
        <div className="pc__base" />
      </div>
      <span className="pc__shadow" />
    </div>
  )
}
