import { useEffect, useRef } from 'react'
import './PixelShooter.css'

// Joguinho de tiro em pixel, sozinho: a nave anda embaixo, mira nos alvos e atira;
// alvos atingidos explodem em pixels e outros aparecem. Com o mouse em cima, a nave segue o cursor.
const W = 96 // largura em "pixels" do jogo
const H = 54
const SCALE = 4 // cada pixel do jogo vira 4 px no canvas

const SHIP = ['..#..', '.###.', '#####', '#.#.#'] // 5 × 4
const BUG = ['#...#', '.###.', '##.##', '#####', '.#.#.'] // 5 × 5 (alvo)
const COLORS = {
  ship: '#8ad7eb',
  shot: '#ffffff',
  bugs: ['#b597f0', '#ffb89a', '#8ad7eb', '#e0559c'],
  star: 'rgba(255,255,255,0.35)',
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
    canvas.width = W * SCALE
    canvas.height = H * SCALE
    ctx.scale(SCALE, SCALE)
    ctx.imageSmoothingEnabled = false

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const stars = Array.from({ length: 26 }, () => ({ x: rand(0, W), y: rand(0, H), s: rand(4, 12) }))
    const ship = { x: W / 2 - 2, target: W / 2 }
    let pointerX = null
    let shots = []
    let sparks = []
    let cooldown = 0
    const newBug = (i) => ({
      x: 8 + ((i * 17) % (W - 20)) + rand(-3, 3),
      y: rand(-20, 6),
      vx: rand(-6, 6),
      color: COLORS.bugs[i % COLORS.bugs.length],
      phase: rand(0, Math.PI * 2),
    })
    let bugs = Array.from({ length: 5 }, (_, i) => newBug(i))
    let spawn = 5

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      pointerX = ((e.clientX - rect.left) / rect.width) * W - 2.5
    }
    const onLeave = () => {
      pointerX = null
    }
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerleave', onLeave)

    let last = performance.now()
    let frame = 0
    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now

      // Fundo: estrelas descendo
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = COLORS.star
      stars.forEach((s) => {
        s.y = (s.y + s.s * dt) % H
        ctx.fillRect(Math.round(s.x), Math.round(s.y), 1, 1)
      })

      // Alvos flutuando e descendo devagar
      bugs.forEach((b) => {
        b.phase += dt * 2
        b.x += (b.vx + Math.sin(b.phase) * 8) * dt
        b.y += 4 * dt
        if (b.x < 1 || b.x > W - 6) b.vx *= -1
        b.x = Math.max(1, Math.min(W - 6, b.x))
        if (b.y > H - 14) b.y = rand(-12, 0)
        drawSprite(ctx, BUG, b.x, b.y, b.color)
      })

      // Nave: segue o mouse, ou mira sozinha no alvo mais baixo
      const lowest = bugs.reduce((a, b) => (b.y > (a?.y ?? -99) ? b : a), null)
      ship.target = pointerX ?? (lowest ? lowest.x : W / 2)
      ship.x += (ship.target - ship.x) * Math.min(1, dt * 6)
      ship.x = Math.max(0, Math.min(W - 5, ship.x))
      drawSprite(ctx, SHIP, ship.x, H - 5, COLORS.ship)

      // Atira de tempos em tempos
      cooldown -= dt
      if (cooldown <= 0) {
        shots.push({ x: ship.x + 2, y: H - 6 })
        cooldown = 0.32
      }
      ctx.fillStyle = COLORS.shot
      shots = shots.filter((s) => {
        s.y -= 70 * dt
        const hit = bugs.find((b) => s.x >= b.x - 0.5 && s.x <= b.x + 5.5 && s.y >= b.y && s.y <= b.y + 5)
        if (hit) {
          // Explosão: pixels voando na cor do alvo
          for (let k = 0; k < 10; k += 1) {
            sparks.push({
              x: hit.x + 2.5,
              y: hit.y + 2.5,
              vx: rand(-25, 25),
              vy: rand(-25, 15),
              life: rand(0.3, 0.6),
              color: hit.color,
            })
          }
          bugs = bugs.filter((b) => b !== hit)
          return false
        }
        ctx.fillRect(Math.round(s.x), Math.round(s.y), 1, 2)
        return s.y > -2
      })

      sparks = sparks.filter((p) => {
        p.life -= dt
        p.x += p.vx * dt
        p.y += p.vy * dt
        ctx.fillStyle = p.color
        ctx.fillRect(Math.round(p.x), Math.round(p.y), 1, 1)
        return p.life > 0
      })

      // Repõe os alvos
      while (bugs.length < 5) bugs.push(newBug((spawn += 1)))

      if (!reduced) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div className="shooter">
      <canvas
        ref={canvasRef}
        className="shooter__canvas"
        aria-label="Joguinho de tiro em pixel art rodando sozinho"
        role="img"
      />
    </div>
  )
}
