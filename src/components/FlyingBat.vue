<template>
  <div
    v-if="$route.path === '/'"
    ref="batRef"
    class="flying-bat-wrapper"
    :class="{ 'in-shadow': isInShadow }"
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
      batX: window.innerWidth * 0.85,
      batY: 100,
      targetX: window.innerWidth * 0.85,
      targetY: 100,
      mouseX: window.innerWidth * 0.85,
      mouseY: 100,
      batAngle: 0,
      batScale: 1,
      isInShadow: false,
      animId: null,
      shadowTimer: null,
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
    this.batX = window.innerWidth * 0.85
    this.batY = 100

    this.onMouseMove = (e) => {
      this.mouseX = e.clientX
      this.mouseY = e.clientY
    }

    window.addEventListener('mousemove', this.onMouseMove, { passive: true })
    this.loop()
  },
  beforeUnmount() {
    if (this.animId) cancelAnimationFrame(this.animId)
    if (this.shadowTimer) clearTimeout(this.shadowTimer)
    window.removeEventListener('mousemove', this.onMouseMove)
  },
  methods: {
    loop() {
      const isHomePage = this.$route.path === '/'
      const isHeroArea = isHomePage && window.scrollY < window.innerHeight * 0.85

      if (isHeroArea) {
        // Follow cursor ONLY on the Home Hero section where the title is
        this.targetX = this.mouseX - 45
        this.targetY = this.mouseY - 45
        this.batScale = 1
      } else {
        // Park statically in top-right margin without tracking cursor
        this.targetX = window.innerWidth * 0.88
        this.targetY = 90
        this.batScale = 0.85
      }

      const dx = this.targetX - this.batX
      const dy = this.targetY - this.batY

      this.batX += dx * 0.075
      this.batY += dy * 0.075

      const targetAngle = isHeroArea ? Math.max(-20, Math.min(20, dx * 0.15)) : 0
      this.batAngle += (targetAngle - this.batAngle) * 0.1

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
  width: 105px;
  height: 105px;
  pointer-events: none;
  z-index: 9999;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.4));
  will-change: transform, opacity;
  transition: opacity 0.6s ease, filter 0.4s ease;
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
