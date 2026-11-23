import { useEffect, useRef } from 'react'
import './PixelShooter.css'

// Joguinho de tiro em pixel ocupando o elemento pai inteiro (vira o fundo da página), em tons
// para fundo claro. Roda sozinho: a nave mira no alvo mais baixo e atira; alvos atingidos explodem
// em pixels e outros aparecem. Com o mouse na página, a nave segue o cursor.
const PX = 6 // tamanho de um pixel do jogo, em px de tela
const SHIP_Y = 12 // distância da nave até a borda de baixo (fica acima da faixa de pixels do rodapé)

const SHIP = ['..#..', '.###.', '#####', '#.#.#'] // 5 × 4
const BUG = ['#...#', '.###.', '##.##', '#####', '.#.#.'] // 5 × 5 (alvo)
const COLORS = {
  ship: '#414575',
  shot: '#7b3fc4',
  bugs: ['#9a6be0', '#f08a5d', '#3aa7c9', '#e0559c'],
  star: 'rgba(65, 69, 117, 0.16)',
}

const rand = (a, b) => a + Math.random() * (b - a)

function drawSprite(ctx, sprite, x, y, color) {
  ctx.fillStyle = color
  sprite.forEach((row, r) => {
    for (let c = 0; c < row.length; c += 1) if (row[c] === '#') ctx.fillRect(Math.round(x) + c, Math.round(y) + r, 1, 1)
  })
}

export default function PixelShooter() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let W = 0
    let H = 0
    let stars = []
    let bugs = []
    let spawn = 0
    const ship = { x: 0 }
    let pointerX = null
    let shots = []
    let sparks = []
    let cooldown = 0

    const newBug = (initial = false) => {
      spawn += 1
      return {
        x: rand(2, W - 7),
        y: initial ? rand(H * 0.04, H * 0.55) : rand(-8, 0),
        vx: rand(-5, 5),
        color: COLORS.bugs[spawn % COLORS.bugs.length],
        phase: rand(0, Math.PI * 2),
      }
    }

    // O jogo acompanha o tamanho da tela: mais largura, mais alvos e estrelas
    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      W = Math.max(40, Math.round(rect.width / PX))
      H = Math.max(30, Math.round(rect.height / PX))
      canvas.width = W
      canvas.height = H
      ctx.imageSmoothingEnabled = false
      stars = Array.from({ length: Math.round((W * H) / 160) }, () => ({ x: rand(0, W), y: rand(0, H), s: rand(3, 10) }))
      bugs = Array.from({ length: Math.max(6, Math.round(W / 14)) }, () => newBug(true))
      ship.x = W / 2
    }
    resize()

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      pointerX = ((e.clientX - rect.left) / rect.width) * W - 2.5
    }
    const onLeave = () => {
      pointerX = null
    }
    window.addEventListener('pointermove', onMove)
    document.addEventListener('pointerleave', onLeave)
    window.addEventListener('resize', resize)

    let last = performance.now()
    let frame = 0
    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      ctx.clearRect(0, 0, W, H)

      // Estrelas descendo
      ctx.fillStyle = COLORS.star
      stars.forEach((s) => {
        s.y = (s.y + s.s * dt) % H
        ctx.fillRect(Math.round(s.x), Math.round(s.y), 1, 1)
      })

      // Alvos flutuando e descendo devagar
      bugs.forEach((b) => {
        b.phase += dt * 2
        b.x += (b.vx + Math.sin(b.phase) * 6) * dt
        b.y += 4 * dt
        if (b.x < 1 || b.x > W - 6) b.vx *= -1
        b.x = Math.max(1, Math.min(W - 6, b.x))
        if (b.y > H - 22) b.y = rand(-8, 0)
        drawSprite(ctx, BUG, b.x, b.y, b.color)
      })

      // Nave: segue o mouse ou mira sozinha no alvo mais baixo
      const lowest = bugs.reduce((a, b) => (b.y > (a?.y ?? -999) ? b : a), null)
      const target = pointerX ?? (lowest ? lowest.x : W / 2)
      ship.x += (target - ship.x) * Math.min(1, dt * 5)
      ship.x = Math.max(0, Math.min(W - 5, ship.x))
      drawSprite(ctx, SHIP, ship.x, H - SHIP_Y, COLORS.ship)

      // Atira de tempos em tempos
      cooldown -= dt
      if (cooldown <= 0) {
        shots.push({ x: ship.x + 2, y: H - SHIP_Y - 1 })
        cooldown = 0.28
      }
      ctx.fillStyle = COLORS.shot
      shots = shots.filter((s) => {
        s.y -= 60 * dt
        const hit = bugs.find((b) => s.x >= b.x - 0.5 && s.x <= b.x + 5.5 && s.y >= b.y && s.y <= b.y + 5)
        if (hit) {
          for (let k = 0; k < 12; k += 1) {
            sparks.push({
              x: hit.x + 2.5,
              y: hit.y + 2.5,
              vx: rand(-22, 22),
              vy: rand(-22, 14),
              life: rand(0.3, 0.7),
              color: hit.color,
            })
          }
          bugs = bugs.filter((b) => b !== hit)
          bugs.push(newBug())
          return false
        }
        ctx.fillRect(Math.round(s.x), Math.round(s.y), 1, 2)
        return s.y > -2
      })

      // Explosões em pixels
      sparks = sparks.filter((p) => {
        p.life -= dt
        p.x += p.vx * dt
        p.y += p.vy * dt
        ctx.fillStyle = p.color
        ctx.fillRect(Math.round(p.x), Math.round(p.y), 1, 1)
        return p.life > 0
      })

      if (!reduced) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="shooter" aria-hidden="true" />
}
