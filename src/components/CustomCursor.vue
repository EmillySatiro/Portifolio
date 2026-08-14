<template>
  <div v-if="isEnabled" class="custom-cursor-wrapper" aria-hidden="true">
    <div
      ref="dotRef"
      class="cursor-dot"
      :class="{ 'is-hovered': isHovered, 'is-active': isActive }"
    ></div>
    <div
      ref="ringRef"
      class="cursor-ring"
      :class="{ 'is-hovered': isHovered, 'is-active': isActive }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'CustomCursor',
  data() {
    return {
      isEnabled: true,
      isHovered: false,
      isActive: false,
      mouseX: -100,
      mouseY: -100,
      ringX: -100,
      ringY: -100,
      animId: null,
    }
  },
  mounted() {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isCoarse || prefersReduce) {
      this.isEnabled = false
      return
    }

    window.addEventListener('pointermove', this.onPointerMove, { passive: true })
    window.addEventListener('pointerdown', this.onPointerDown, { passive: true })
    window.addEventListener('pointerup', this.onPointerUp, { passive: true })
    document.addEventListener('mouseover', this.onMouseOver, { passive: true })
    document.addEventListener('mouseout', this.onMouseOut, { passive: true })
    document.addEventListener('visibilitychange', this.onVisibilityChange)

    this.render()
  },
  beforeUnmount() {
    if (this.animId) cancelAnimationFrame(this.animId)
    window.removeEventListener('pointermove', this.onPointerMove)
    window.removeEventListener('pointerdown', this.onPointerDown)
    window.removeEventListener('pointerup', this.onPointerUp)
    document.removeEventListener('mouseover', this.onMouseOver)
    document.removeEventListener('mouseout', this.onMouseOut)
    document.removeEventListener('visibilitychange', this.onVisibilityChange)
  },
  methods: {
    onVisibilityChange() {
      if (document.hidden) {
        if (this.animId) cancelAnimationFrame(this.animId)
      } else if (this.isEnabled) {
        this.render()
      }
    },
    onPointerMove(e) {
      this.mouseX = e.clientX
      this.mouseY = e.clientY
    },
    onPointerDown() {
      this.isActive = true
    },
    onPointerUp() {
      this.isActive = false
    },
    onMouseOver(e) {
      const target = e.target.closest('a, button, input, textarea, .project-card, .clickable, [role="button"]')
      if (target) {
        this.isHovered = true
      }
    },
    onMouseOut(e) {
      const target = e.target.closest('a, button, input, textarea, .project-card, .clickable, [role="button"]')
      if (target) {
        this.isHovered = false
      }
    },
    render() {
      if (!this.isEnabled) return

      // Smooth lerp for ring
      this.ringX += (this.mouseX - this.ringX) * 0.18
      this.ringY += (this.mouseY - this.ringY) * 0.18

      if (this.$refs.dotRef) {
        this.$refs.dotRef.style.transform = `translate3d(${this.mouseX}px, ${this.mouseY}px, 0)`
      }
      if (this.$refs.ringRef) {
        this.$refs.ringRef.style.transform = `translate3d(${this.ringX}px, ${this.ringY}px, 0)`
      }

      this.animId = requestAnimationFrame(this.render)
    },
  },
}
</script>

<style scoped>
.custom-cursor-wrapper {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
}

.cursor-dot {
  position: fixed;
  top: -4px;
  left: -4px;
  width: 8px;
  height: 8px;
  border-radius: 0 !important;
  background-color: var(--sky, #97b4de);
  box-shadow: 0 0 10px rgba(151, 180, 222, 0.8);
  transition: width 0.2s, height 0.2s, background-color 0.2s, opacity 0.2s;
  pointer-events: none;
  will-change: transform;
}

.cursor-ring {
  position: fixed;
  top: -20px;
  left: -20px;
  width: 40px;
  height: 40px;
  border-radius: 0 !important;
  border: 1.5px solid rgba(151, 180, 222, 0.45);
  transition: width 0.25s ease-out, height 0.25s ease-out, border-color 0.25s, background-color 0.25s;
  pointer-events: none;
  will-change: transform;
}

.cursor-ring.is-hovered {
  width: 54px;
  height: 54px;
  top: -27px;
  left: -27px;
  border-color: rgba(151, 180, 222, 0.85);
  background-color: rgba(151, 180, 222, 0.08);
}

.cursor-dot.is-hovered {
  width: 12px;
  height: 12px;
  top: -6px;
  left: -6px;
  background-color: var(--alabaster, #f0ebe5);
}

.cursor-ring.is-active {
  transform: scale(0.85);
  border-color: var(--blue, #263a99);
}
</style>
