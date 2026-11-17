import { BODY, EYES } from './BatLogo'
import './VoxelBat.css'

// Converte o caminho SVG do logo ("Mx yhWv1H...z") em células da grade 15x8
const cellsOf = (path) =>
  [...path.matchAll(/M(\d+) (\d+)h(\d+)/g)].flatMap(([, x, y, w]) =>
    Array.from({ length: +w }, (_, i) => ({ x: +x + i, y: +y })),
  )

const EYE_KEYS = new Set(cellsOf(EYES).map(({ x, y }) => `${x}-${y}`))
const CELLS = [...cellsOf(BODY), ...cellsOf(EYES)].map((c) => ({ ...c, eye: EYE_KEYS.has(`${c.x}-${c.y}`) }))
const FACES = ['front', 'back', 'left', 'right', 'top', 'bottom']

// O morcego do logo em voxels (cubinhos em 3D), girando devagar e flutuando.
export default function VoxelBat() {
  return (
    <div className="voxel" aria-hidden="true">
      <div className="voxel__float">
        <div className="voxel__spin">
          {CELLS.map(({ x, y, eye }) => (
            <div
              key={`${x}-${y}`}
              className={`voxel__cube${eye ? ' is-eye' : ''}`}
              style={{ '--x': x - 7, '--y': y - 3.5 }}
            >
              {FACES.map((face) => (
                <span key={face} className={`voxel__face voxel__face--${face}`} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <span className="voxel__shadow" />
    </div>
  )
}
