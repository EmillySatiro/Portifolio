<template>
  <div class="bg-canvas-container" aria-hidden="true">
    <canvas ref="canvasRef" class="bg-canvas"></canvas>
    <div class="bg-glow-orb orb-1"></div>
    <div class="bg-glow-orb orb-2"></div>
    <div class="bg-glow-orb orb-3"></div>
    <div class="bg-grid-overlay"></div>
    <div class="bg-noise-overlay"></div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundCanvas',
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      targetMouseX: 0,
      targetMouseY: 0,
      particles: [],
      animFrameId: null,
    }
  },
  mounted() {
    this.initCanvas()
    window.addEventListener('resize', this.handleResize, { passive: true })
    window.addEventListener('pointermove', this.handlePointerMove, { passive: true })
    document.addEventListener('visibilitychange', this.handleVisibilityChange)
  },
  beforeUnmount() {
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId)
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('pointermove', this.handlePointerMove)
    document.removeEventListener('visibilitychange', this.handleVisibilityChange)
  },
  methods: {
    handleVisibilityChange() {
      if (document.hidden) {
        if (this.animFrameId) cancelAnimationFrame(this.animFrameId)
      } else {
        this.animate()
      }
    },
    initCanvas() {
      const canvas = this.$refs.canvasRef
      if (!canvas) return
      this.ctx = canvas.getContext('2d')
      this.resizeCanvas()
      this.createParticles()
      this.animate()
    },
    resizeCanvas() {
      const canvas = this.$refs.canvasRef
      if (!canvas) return
      this.width = canvas.width = window.innerWidth
      this.height = canvas.height = window.innerHeight
    },
    handleResize() {
      this.resizeCanvas()
      this.createParticles()
    },
    handlePointerMove(e) {
      this.targetMouseX = e.clientX
      this.targetMouseY = e.clientY
    },
    createParticles() {
      const count = Math.min(Math.floor((this.width * this.height) / 18000), 55)
      this.particles = []
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          radius: Math.random() * 1.8 + 0.6,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          alpha: Math.random() * 0.5 + 0.15,
          color: Math.random() > 0.4 ? '151, 180, 222' : '38, 58, 153',
        })
      }
    },
    animate() {
      if (!this.ctx) return

      this.mouseX += (this.targetMouseX - this.mouseX) * 0.04
      this.mouseY += (this.targetMouseY - this.mouseY) * 0.04

      this.ctx.clearRect(0, 0, this.width, this.height)

      // Draw subtle connecting lines
      const len = this.particles.length
      for (let i = 0; i < len; i++) {
        const p1 = this.particles[i]
        p1.x += p1.vx
        p1.y += p1.vy

        if (p1.x < 0) p1.x = this.width
        if (p1.x > this.width) p1.x = 0
        if (p1.y < 0) p1.y = this.height
        if (p1.y > this.height) p1.y = 0

        // Draw particle
        this.ctx.beginPath()
        this.ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2)
        this.ctx.fillStyle = `rgba(${p1.color}, ${p1.alpha})`
        this.ctx.fill()

        // Mouse influence
        const dxMouse = this.mouseX - p1.x
        const dyMouse = this.mouseY - p1.y
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)
        if (distMouse < 140) {
          const force = (1 - distMouse / 140) * 0.3
          this.ctx.beginPath()
          this.ctx.moveTo(p1.x, p1.y)
          this.ctx.lineTo(this.mouseX, this.mouseY)
          this.ctx.strokeStyle = `rgba(151, 180, 222, ${force * 0.4})`
          this.ctx.lineWidth = 0.8
          this.ctx.stroke()
        }

        // Particle lines
        for (let j = i + 1; j < len; j++) {
          const p2 = this.particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.18
            this.ctx.beginPath()
            this.ctx.moveTo(p1.x, p1.y)
            this.ctx.lineTo(p2.x, p2.y)
            this.ctx.strokeStyle = `rgba(151, 180, 222, ${alpha})`
            this.ctx.lineWidth = 0.6
            this.ctx.stroke()
          }
        }
      }

      this.animFrameId = requestAnimationFrame(this.animate)
    },
  },
}
</script>

<style scoped>
.bg-canvas-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.bg-canvas {
  width: 100%;
  height: 100%;
  display: block;
}

.bg-glow-orb {
  position: absolute;
  border-radius: 0 !important;
  filter: blur(100px);
  opacity: 0.35;
  pointer-events: none;
  animation: floatGlow 14s ease-in-out infinite alternate;
}

.orb-1 {
  width: 480px;
  height: 480px;
  top: -100px;
  left: 20%;
  background: radial-gradient(circle, rgba(38, 58, 153, 0.5) 0%, rgba(151, 180, 222, 0.15) 70%, transparent 100%);
}

.orb-2 {
  width: 550px;
  height: 550px;
  top: 40%;
  right: -150px;
  background: radial-gradient(circle, rgba(151, 180, 222, 0.35) 0%, rgba(38, 58, 153, 0.2) 70%, transparent 100%);
  animation-delay: -5s;
}

.orb-3 {
  width: 400px;
  height: 400px;
  bottom: 5%;
  left: -100px;
  background: radial-gradient(circle, rgba(38, 58, 153, 0.4) 0%, transparent 80%);
  animation-delay: -9s;
}

.bg-grid-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(to right, rgba(240, 235, 229, 0.02) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(240, 235, 229, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 90%);
}

.bg-noise-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

@keyframes floatGlow {
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(30px, 40px) scale(1.1);
  }
  100% {
    transform: translate(-20px, 20px) scale(0.95);
  }
}
</style>
