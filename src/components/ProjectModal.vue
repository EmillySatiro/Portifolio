<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="project" class="modal-backdrop" @click.self="$emit('close')">
        <div class="modal-container" role="dialog" aria-modal="true" :aria-labelledby="`modal-title-${project.id}`">
          <button class="modal-close-btn" aria-label="Fechar modal" @click="$emit('close')">
            ✕
          </button>

          <div class="modal-header">
            <div class="modal-badge-row">
              <span class="modal-type-badge">{{ project.type || project.category }}</span>
              <span v-for="b in project.badges || project.highlights" :key="b" class="modal-sub-badge">
                {{ b }}
              </span>
            </div>
            <h2 :id="`modal-title-${project.id}`" class="modal-title">
              {{ project.name || project.title }}
            </h2>
            <p v-if="project.subtitle" class="modal-subtitle">{{ project.subtitle }}</p>
          </div>

          <div class="modal-body">
            <!-- Media Preview -->
            <div class="modal-media-frame">
              <img
                v-if="project.image"
                :src="project.image"
                :alt="`Preview de ${project.name || project.title}`"
                class="modal-image"
              />
              <div v-else class="modal-image-placeholder">
                <img src="/a8973100-1174-11ee-9e14-23aa8edbd820.svg" alt="Morcego animado" class="placeholder-bat" />
                <span>Projeto em desenvolvimento</span>
              </div>
            </div>

            <!-- Detailed description -->
            <div class="modal-description-block">
              <h3>Visão Geral do Projeto</h3>
              <p>{{ project.longDescription || project.description }}</p>
            </div>

            <!-- Technologies & Tools -->
            <div v-if="project.technologies || project.tools" class="modal-tech-block">
              <h3>Tecnologias & Ferramentas Utilizadas</h3>
              <div class="modal-tech-list">
                <span
                  v-for="tech in project.technologies || project.tools"
                  :key="tech"
                  class="modal-tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Action buttons / Links -->
            <div class="modal-actions">
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="modal-btn primary"
              >
                <span>Ver Demonstração Ao Vivo</span> ↗
              </a>
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="modal-btn secondary"
              >
                <span>Repositório no GitHub</span> ↗
              </a>
              <a
                v-if="project.figma || project.figmaUrl"
                :href="project.figma || project.figmaUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="modal-btn figma"
              >
                <span>Protótipo no Figma</span> ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
export default {
  name: 'ProjectModal',
  props: {
    project: {
      type: Object,
      default: null,
    },
  },
  emits: ['close'],
  mounted() {
    window.addEventListener('keydown', this.handleKeyDown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  },
  methods: {
    handleKeyDown(e) {
      if (e.key === 'Escape' && this.project) {
        this.$emit('close')
      }
    },
  },
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9990;
  background-color: rgba(10, 10, 12, 0.85);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  overflow-y: auto;
}

.modal-container {
  position: relative;
  width: min(840px, 100%);
  max-height: 90vh;
  background: var(--charleston, #2a2829);
  border: 1px solid var(--line, rgba(240, 235, 229, 0.2));
  border-radius: 0 !important;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(151, 180, 222, 0.15);
  overflow-y: auto;
  padding: 2.5rem;
  color: var(--text, #f0ebe5);
}

.modal-close-btn {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 40px;
  height: 40px;
  border-radius: 0 !important;
  border: 1px solid var(--line, rgba(240, 235, 229, 0.2));
  background: rgba(255, 255, 255, 0.05);
  color: var(--text, #f0ebe5);
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.modal-close-btn:hover {
  background: rgba(151, 180, 222, 0.2);
  border-color: var(--sky, #97b4de);
  transform: rotate(90deg);
}

.modal-badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.modal-type-badge {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.35rem 0.85rem;
  background: rgba(151, 180, 222, 0.15);
  color: var(--sky, #97b4de);
  border: 1px solid rgba(151, 180, 222, 0.3);
  border-radius: 0 !important;
}

.modal-sub-badge {
  font-size: 0.75rem;
  padding: 0.35rem 0.85rem;
  background: rgba(255, 255, 255, 0.05);
  color: var(--muted, #d0c6b8);
  border: 1px solid var(--line, rgba(240, 235, 229, 0.15));
  border-radius: 0 !important;
}

.modal-title {
  font-family: 'Cinzel', serif;
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: var(--alabaster, #f0ebe5);
  letter-spacing: -0.02em;
}

.modal-subtitle {
  font-size: 1.1rem;
  color: var(--sky, #97b4de);
  margin-bottom: 1.5rem;
}

.modal-media-frame {
  width: 100%;
  max-height: 380px;
  border-radius: 0 !important;
  overflow: hidden;
  border: 1px solid var(--line, rgba(240, 235, 229, 0.15));
  margin-bottom: 1.75rem;
  background: #171516;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-image-placeholder {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: var(--muted, #d0c6b8);
}

.placeholder-bat {
  width: 90px;
  opacity: 0.8;
}

.modal-description-block h3,
.modal-tech-block h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--sky, #97b4de);
  margin: 1.25rem 0 0.5rem 0;
}

.modal-description-block p {
  line-height: 1.7;
  color: var(--paper-soft, #dcd0be);
}

.modal-tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.75rem;
}

.modal-tech-tag {
  font-size: 0.85rem;
  padding: 0.4rem 0.9rem;
  background: rgba(38, 58, 153, 0.25);
  border: 1px solid rgba(151, 180, 222, 0.25);
  color: var(--alabaster, #f0ebe5);
  border-radius: 0 !important;
  font-weight: 500;
}

.modal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--line, rgba(240, 235, 229, 0.15));
}

.modal-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.6rem;
  border-radius: 0 !important;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.25s ease;
}

.modal-btn.primary {
  background: linear-gradient(135deg, var(--blue, #263a99), #1e2f7f);
  color: var(--alabaster, #f0ebe5);
  box-shadow: 0 4px 15px rgba(38, 58, 153, 0.4);
}

.modal-btn.primary:hover {
  box-shadow: 0 6px 20px rgba(38, 58, 153, 0.6);
  transform: translateY(-2px);
}

.modal-btn.secondary {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--line, rgba(240, 235, 229, 0.25));
  color: var(--alabaster, #f0ebe5);
}

.modal-btn.secondary:hover {
  background: rgba(151, 180, 222, 0.15);
  border-color: var(--sky, #97b4de);
  transform: translateY(-2px);
}

.modal-btn.figma {
  background: rgba(242, 78, 30, 0.12);
  border: 1px solid rgba(242, 78, 30, 0.3);
  color: #ff9d87;
}

.modal-btn.figma:hover {
  background: rgba(242, 78, 30, 0.25);
  transform: translateY(-2px);
}

/* Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
