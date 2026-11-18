import './PastelBackdrop.css'

// Cruzinhas de pixel espalhadas pelo fundo (posição, cor, tamanho e ritmo)
const PIXELS = [
  { left: '8%', top: '24%', '--c': '#8ad7eb', '--s': '8px', '--d': '0s' },
  { left: '22%', top: '62%', '--c': '#b597f0', '--s': '6px', '--d': '1.2s' },
  { left: '31%', top: '16%', '--c': '#414575', '--s': '5px', '--d': '2.1s' },
  { left: '69%', top: '18%', '--c': '#ffb89a', '--s': '7px', '--d': '0.6s' },
  { left: '84%', top: '38%', '--c': '#8ad7eb', '--s': '9px', '--d': '1.7s' },
  { left: '91%', top: '14%', '--c': '#b597f0', '--s': '5px', '--d': '2.6s' },
  { left: '76%', top: '58%', '--c': '#414575', '--s': '6px', '--d': '0.9s' },
  { left: '13%', top: '44%', '--c': '#ffb89a', '--s': '5px', '--d': '3s' },
]

// Fundo pastel da capa, reutilizável: manchas de cor, grade de pixel e cruzinhas piscando.
export default function PastelBackdrop() {
  return (
    <div className="pastel" aria-hidden="true">
      {PIXELS.map((px, i) => (
        <span key={i} className="pastel__px" style={px} />
      ))}
    </div>
  )
}
