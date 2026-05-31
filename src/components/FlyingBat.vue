<template>
  <div ref="bat" class="flying-bat" aria-hidden="true">
    <img src="/a8973100-1174-11ee-9e14-23aa8edbd820.svg" alt="" />
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'FlyingBat',
  mounted() {
    const bat = this.$refs.bat
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches

    gsap.set(bat, { x: '72vw', y: '18vh', rotate: -8, scale: 1 })

    this.moveX = gsap.quickTo(bat, 'x', { duration: 0.7, ease: 'power3.out' })
    this.moveY = gsap.quickTo(bat, 'y', { duration: 0.7, ease: 'power3.out' })
    this.rotate = gsap.quickTo(bat, 'rotate', { duration: 0.45, ease: 'power2.out' })

    this.floatTween = gsap.to(bat, {
      y: '+=14',
      repeat: -1,
      yoyo: true,
      duration: 1.9,
      ease: 'sine.inOut',
    })

    if (prefersReducedMotion || isCoarsePointer) return

    this.handlePointerMove = (event) => {
      const side = event.clientX > window.innerWidth * 0.68 ? -1 : 1
      const offsetX = side * Math.min(150, window.innerWidth * 0.12)
      const offsetY = event.clientY > window.innerHeight * 0.5 ? -92 : 76
      const nextX = Math.max(18, Math.min(window.innerWidth - 170, event.clientX + offsetX))
      const nextY = Math.max(86, Math.min(window.innerHeight - 120, event.clientY + offsetY))

      this.moveX(nextX)
      this.moveY(nextY)
      this.rotate(side > 0 ? 8 : -8)
    }

    window.addEventListener('pointermove', this.handlePointerMove, { passive: true })
  },
  beforeUnmount() {
    if (this.handlePointerMove) {
      window.removeEventListener('pointermove', this.handlePointerMove)
    }

    this.floatTween?.kill()
  },
}
</script>
