<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <!-- Centered Monolithic Glassmorphic Contact Card -->
      <div class="contact-card-premium">
        <!-- Standardized Header -->
        <div class="contact-header">
          <h2 class="contact-title">CONTATO</h2>
          <p class="contact-subtitle">Vamos conversar sobre o seu próximo projeto?</p>
          <div class="contact-header-line" aria-hidden="true"></div>
        </div>

        <!-- Social Channels Pill Grid -->
        <div class="social-channels-bar">
          <div
            v-for="method in contactMethods"
            :key="method.title"
            class="channel-pill-item"
          >
            <a
              :href="method.link"
              target="_blank"
              rel="noopener noreferrer"
              class="channel-main-btn"
            >
              <Mail v-if="method.icon === 'Mail'" :size="16" />
              <BrandIcon v-else :name="method.icon" :size="16" />
              <span>{{ method.title }}</span>
            </a>

            <button
              class="channel-copy-btn"
              :title="copiedTitle === method.title ? 'Copiado!' : 'Copiar endereço'"
              @click="copyToClipboard(method.link, method.title)"
            >
              <Check v-if="copiedTitle === method.title" :size="14" />
              <Copy v-else :size="14" />
            </button>
          </div>
        </div>

        <!-- Error Notification Banner (if any error occurs) -->
        <div
          v-if="submitStatus === 'error'"
          class="feedback-toast-banner error"
        >
          <AlertCircle :size="20" class="toast-icon" />
          <span>{{ statusMessage }}</span>
        </div>

        <!-- AJAX Formspree Glass Form -->
        <form class="contact-form-glass" @submit.prevent="handleSubmit">
          <div class="form-row-two">
            <div class="form-group">
              <label for="contact-name">Seu Nome</label>
              <input
                id="contact-name"
                v-model="formData.name"
                type="text"
                name="name"
                placeholder="Ex: Maria Silva"
                required
                class="form-input"
              />
            </div>

            <div class="form-group">
              <label for="contact-email">Endereço de E-mail</label>
              <input
                id="contact-email"
                v-model="formData.email"
                type="email"
                name="email"
                placeholder="seu@email.com"
                required
                class="form-input"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="contact-message">Sua Mensagem</label>
            <textarea
              id="contact-message"
              v-model="formData.message"
              name="message"
              rows="4"
              placeholder="Descreva a sua ideia, projeto ou dúvida..."
              required
              class="form-textarea"
            ></textarea>
          </div>

          <div class="form-submit-row">
            <button class="form-submit-btn" type="submit" :disabled="isSubmitting">
              <Send :size="16" />
              <span>{{ isSubmitting ? 'Enviando Mensagem...' : 'Enviar Mensagem Direta' }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Animated Bat Drop Confirmation Card Overlay -->
    <Teleport to="body">
      <div
        v-if="showBatDropAnimation"
        class="bat-drop-modal-overlay"
        @click="closeBatDrop"
      >
        <div class="bat-drop-stage" @click.stop>
          <!-- Flying Bat Carrying Card Graphic -->
          <div class="flying-carrier-bat">
            <img
              src="/a8973100-1174-11ee-9e14-23aa8edbd820.svg"
              alt="Mascote Morcego Entregador"
              class="carrier-bat-svg"
            />
          </div>

          <!-- Falling Confirmation Card -->
          <div class="falling-letter-card">
            <div class="letter-card-header">
              <span class="letter-tag">MENSAGEM ENTREGUE</span>
              <button class="card-close-btn" @click="closeBatDrop" title="Fechar">✕</button>
            </div>

            <h3 class="letter-card-title">O Morcego Entregou Seu E-mail! 🦇</h3>
            <p class="letter-card-text">
              Sua mensagem foi entregue com sucesso na caixa de entrada de <strong>Emilly Sátiro</strong>. Muito obrigada pelo contato, responderei em breve!
            </p>

            <div class="letter-card-footer">
              <span class="auto-dismiss-text">Clique fora para fechar esta janela</span>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script>
import { Mail, Copy, Check, Send, AlertCircle } from '@lucide/vue'
import { contactMethods } from '../data/portfolio'
import BrandIcon from './BrandIcon.vue'

export default {
  name: 'ContactSection',
  components: {
    Mail,
    Copy,
    Check,
    Send,
    AlertCircle,
    BrandIcon,
  },
  data() {
    return {
      contactMethods,
      copiedTitle: '',
      isSubmitting: false,
      submitStatus: null,
      statusMessage: '',
      showBatDropAnimation: false,
      formData: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    copyToClipboard(text, title) {
      navigator.clipboard.writeText(text)
      this.copiedTitle = title
      setTimeout(() => {
        if (this.copiedTitle === title) this.copiedTitle = ''
      }, 2500)
    },
    async handleSubmit() {
      this.isSubmitting = true
      this.submitStatus = null

      try {
        const response = await fetch('https://formspree.io/f/mpwjkpen', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(this.formData),
        })

        if (response.ok) {
          this.submitStatus = 'success'
          this.formData = { name: '', email: '', message: '' }
          
          // Trigger Bat Drop Card Animation (stays until user clicks outside)
          this.showBatDropAnimation = true
        } else {
          this.submitStatus = 'error'
          this.statusMessage =
            'Ops! Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente ou envie por e-mail.'
        }
      } catch (err) {
        this.submitStatus = 'error'
        this.statusMessage =
          'Ops! Ocorreu um erro de conexão. Por favor, tente novamente.'
      } finally {
        this.isSubmitting = false
      }
    },
    closeBatDrop() {
      this.showBatDropAnimation = false
    },
  },
}
</script>

<style scoped>
.contact-section {
  position: relative;
  padding: 5.5rem 0 6.5rem 0;
  z-index: 1;
  background: linear-gradient(
    180deg,
    #171516 0%,
    #1f1c24 50%,
    #171516 100%
  );
  border-top: 1px solid rgba(240, 235, 229, 0.1);
}

.contact-card-premium {
  max-width: 860px;
  margin: 0 auto;
  background: rgba(35, 33, 34, 0.65);
  border: 1px solid var(--line, rgba(240, 235, 229, 0.14));
  border-radius: 0 !important;
  padding: 3rem 2.5rem;
  backdrop-filter: blur(16px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
}

.contact-card-premium::before {
  content: '';
  position: absolute;
  top: 0;
  left: 20%;
  right: 20%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--sky, #97b4de), transparent);
}

/* Standardized Section Header */
.contact-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 3rem;
}

.contact-title {
  font-family: var(--font-title, 'Cinzel', serif);
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  line-height: 1.25;
  color: var(--alabaster, #f0ebe5);
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: -0.01em;
}

.contact-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: var(--muted, #d0c6b8);
  margin: 0 0 0.75rem 0;
}

.contact-header-line {
  width: 70px;
  height: 2px;
  background: var(--sky, #97b4de);
  margin: 0.25rem auto 0 auto;
  opacity: 0.85;
}

.social-channels-bar {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.channel-pill-item {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(240, 235, 229, 0.12);
  border-radius: 9999px !important;
  overflow: hidden;
  transition: all 0.25s ease;
}

.channel-pill-item:hover {
  background: rgba(151, 180, 222, 0.15);
  border-color: var(--sky, #97b4de);
}

.channel-main-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.9rem;
  color: var(--alabaster, #f0ebe5);
  font-family: 'Inter', sans-serif;
  font-size: 0.84rem;
  font-weight: 600;
  text-decoration: none;
}

.channel-copy-btn {
  background: transparent;
  border: none;
  border-left: 1px solid rgba(240, 235, 229, 0.12);
  color: var(--sky, #97b4de);
  padding: 0.55rem 0.75rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color 0.25s ease;
}

.channel-copy-btn:hover {
  color: #ffffff;
}

/* Feedback Toast Notification Banner (for errors) */
.feedback-toast-banner.error {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 1.25rem;
  border-radius: 6px !important;
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  margin-bottom: 1.75rem;
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.35);
  color: #f87171;
}

.toast-icon {
  flex-shrink: 0;
}

.contact-form-glass {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-row-two {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group label {
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--sky, #97b4de);
}

.form-input,
.form-textarea {
  width: 100%;
  background: rgba(23, 21, 22, 0.75);
  border: 1px solid rgba(240, 235, 229, 0.14);
  border-radius: 0 !important;
  color: var(--alabaster, #f0ebe5);
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  padding: 0.75rem 1rem;
  outline: none;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.form-input:focus,
.form-textarea:focus {
  border-color: var(--sky, #97b4de);
  box-shadow: 0 0 15px rgba(151, 180, 222, 0.2);
}

.form-submit-row {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
}

.form-submit-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.6rem;
  background: var(--blue, #263a99);
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  border: none;
  border-radius: 0 !important;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(38, 58, 153, 0.4);
  transition: all 0.25s ease;
}

.form-submit-btn:hover:not(:disabled) {
  background: #1d2d7c;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(38, 58, 153, 0.6);
}

.form-submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Bat Confirmation Card Drop Overlay */
.bat-drop-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(11, 10, 12, 0.85);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  cursor: pointer;
}

.bat-drop-stage {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 520px;
  width: 100%;
  animation: batDropCardIn 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes batDropCardIn {
  0% {
    transform: translateY(-300px) scale(0.7);
    opacity: 0;
  }
  60% {
    transform: translateY(20px) scale(1.03);
    opacity: 1;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

.flying-carrier-bat {
  width: 110px;
  height: 110px;
  margin-bottom: -30px;
  z-index: 2;
  filter: drop-shadow(0 15px 30px rgba(151, 180, 222, 0.4));
  animation: batHoverFloat 2.5s ease-in-out infinite alternate;
}

.carrier-bat-svg {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@keyframes batHoverFloat {
  0% { transform: translateY(0) rotate(-3deg); }
  100% { transform: translateY(-8px) rotate(3deg); }
}

.falling-letter-card {
  position: relative;
  z-index: 1;
  width: 100%;
  background: linear-gradient(135deg, #1e1c26 0%, #17151e 100%);
  border: 2px solid var(--sky, #97b4de);
  border-radius: 14px !important;
  padding: 2.2rem 2rem 1.8rem 2rem;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.95), 0 0 40px rgba(151, 180, 222, 0.3);
  text-align: center;
  color: var(--alabaster, #f0ebe5);
}

.letter-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.letter-tag {
  font-family: 'Cinzel', serif;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--sky, #97b4de);
}

.card-close-btn {
  background: transparent;
  border: none;
  color: var(--muted, #d0c6b8);
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  transition: color 0.2s ease;
}

.card-close-btn:hover {
  color: #ffffff;
}

.letter-card-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.85rem 0;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.letter-card-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: var(--pastel, #dcd0be);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
}

.letter-card-footer {
  border-top: 1px solid rgba(240, 235, 229, 0.1);
  padding-top: 0.85rem;
}

.auto-dismiss-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.76rem;
  color: var(--muted, #d0c6b8);
  opacity: 0.8;
}

@media (max-width: 640px) {
  .form-row-two {
    grid-template-columns: 1fr;
  }
}
</style>
