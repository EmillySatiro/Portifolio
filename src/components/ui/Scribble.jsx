import './Scribble.css'

// Rabiscos "à mão" em SVG. Cada traço se desenha quando o elemento (ou um
// ancestral com data-reveal) recebe .is-visible.
const SHAPES = {
  x: {
    viewBox: '0 0 100 100',
    paths: ['M14 18 C 36 40, 60 66, 88 90', 'M86 12 C 62 36, 40 60, 10 86', 'M20 30 C 44 50, 66 70, 82 80'],
  },
  loop: {
    viewBox: '0 0 400 140',
    paths: [
      'M4 120 C 60 120, 90 40, 150 46 C 205 52, 190 118, 160 112 C 128 106, 150 30, 220 22 C 290 14, 330 70, 396 60',
    ],
  },
  circle: {
    viewBox: '0 0 200 80',
    paths: ['M150 10 C 190 18, 202 52, 150 68 C 100 82, 22 76, 10 46 C 0 18, 70 4, 130 8 C 160 10, 178 20, 184 30'],
  },
  underline: {
    viewBox: '0 0 300 30',
    paths: ['M4 20 C 60 8, 120 26, 180 14 C 220 6, 260 12, 296 18'],
  },
  heart: {
    viewBox: '0 0 120 110',
    paths: [
      'M60 100 C 20 70, 4 46, 14 26 C 24 6, 52 8, 60 34 C 66 10, 96 4, 108 24 C 120 46, 98 74, 62 102 C 58 96, 54 92, 50 90',
    ],
  },
  scrawl: {
    viewBox: '0 0 120 80',
    paths: [
      'M10 40 C 30 10, 40 70, 60 36 C 76 8, 84 66, 100 30 C 108 14, 116 26, 112 40 C 104 58, 30 60, 18 50 C 8 42, 40 20, 70 24',
    ],
  },
}

export default function Scribble({ shape = 'x', className = '', strokeWidth = 6 }) {
  const { viewBox, paths } = SHAPES[shape]
  return (
    <svg className={`scribble scribble--${shape} ${className}`.trim()} viewBox={viewBox} fill="none" aria-hidden="true">
      {paths.map((d, i) => (
        <path
          key={d}
          d={d}
          pathLength="1"
          strokeWidth={strokeWidth}
          style={{ '--i': i }}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  )
}
