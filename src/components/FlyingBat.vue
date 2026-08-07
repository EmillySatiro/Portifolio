<template>
  <div
    v-if="$route.path === '/' || $route.path === '/projetos'"
    ref="batRef"
    class="flying-bat-wrapper"
    :style="batStyle"
    aria-hidden="true"
  >
    <img
      src="/a8973100-1174-11ee-9e14-23aa8edbd820.svg"
      alt="Mascote Morcego Animado"
      class="bat-svg-img"
    />
  </div>
</template>

<script>
export default {
  name: 'FlyingBat',
  data() {
    return {
      batX: window.innerWidth * 0.7,
      batY: 120,
      targetX: window.innerWidth * 0.5,
      targetY: 160,
      batAngle: 0,
      batScale: 1,
      animId: null,
      wanderInterval: null,
      wobbleTime: 0,
    }
  },
  computed: {
    batStyle() {
      return {
        transform: `translate3d(${this.batX}px, ${this.batY}px, 0) rotate(${this.batAngle}deg) scale(${this.batScale})`,
      }
    },
  },
  mounted() {
    this.batX = window.innerWidth * 0.7
    this.batY = 120
    this.pickNewDestination()
    this.startWandering()
    this.loop()
  },
  beforeUnmount() {
    if (this.animId) cancelAnimationFrame(this.animId)
    if (this.wanderInterval) clearInterval(this.wanderInterval)
  },
  methods: {
    pickNewDestination() {
      const marginX = 80
      const marginY = 80
      const maxX = Math.max(200, window.innerWidth - marginX * 2)
      const maxY = Math.max(200, window.innerHeight * 0.75 - marginY)

      this.targetX = marginX + Math.random() * maxX
      this.targetY = marginY + Math.random() * maxY
    },
    startWandering() {
      // Pick a new random target destination every 2.5 to 4 seconds
      this.wanderInterval = setInterval(() => {
        this.pickNewDestination()
      }, 3000 + Math.random() * 1500)
    },
    loop() {
      this.wobbleTime += 0.04
      const verticalWobble = Math.sin(this.wobbleTime) * 1.8

      const dx = this.targetX - this.batX
      const dy = (this.targetY + verticalWobble) - this.batY

      // Smooth unguided lerp movement
      this.batX += dx * 0.025
      this.batY += dy * 0.025

      // Natural flight tilt angle
      const targetAngle = Math.max(-25, Math.min(25, dx * 0.12))
      this.batAngle += (targetAngle - this.batAngle) * 0.08

      this.animId = requestAnimationFrame(this.loop)
    },
  },
}
</script>

<style scoped>
.flying-bat-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 95px;
  height: 95px;
  pointer-events: none;
  z-index: 9999;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.35));
  will-change: transform;
  transition: opacity 0.6s ease;
}

.bat-svg-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (max-width: 768px) {
  .flying-bat-wrapper {
    display: none;
  }
}
</style>
