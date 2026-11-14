import { useState } from 'react'
import { createPortal } from 'react-dom'
import { AlertCircle, Check, Copy, Mail, Send } from 'lucide-react'
import { contactMethods } from '../data/portfolio'
import BrandIcon from './BrandIcon'
import './ContactSection.css'

const EMPTY_FORM = { name: '', email: '', message: '' }

export default function ContactSection() {
  const [copiedTitle, setCopiedTitle] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [showBatDrop, setShowBatDrop] = useState(false)
  const [formData, setFormData] = useState(EMPTY_FORM)

  const updateField = (e) => setFormData((data) => ({ ...data, [e.target.name]: e.target.value }))

  const copyToClipboard = (text, title) => {
    navigator.clipboard.writeText(text)
    setCopiedTitle(title)
    setTimeout(() => setCopiedTitle((current) => (current === title ? '' : current)), 2500)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const response = await fetch('https://formspree.io/f/mpwjkpen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData(EMPTY_FORM)
        // Mostra o morcego entregando a carta (fica até clicar fora).
        setShowBatDrop(true)
      } else {
        setErrorMessage(
          'Ops! Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente ou envie por e-mail.',
        )
      }
    } catch {
      setErrorMessage('Ops! Ocorreu um erro de conexão. Por favor, tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeBatDrop = () => setShowBatDrop(false)

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-card-premium">
          <div className="contact-header">
            <h2 className="contact-title">CONTATO</h2>
            <p className="contact-subtitle">Vamos conversar sobre o seu próximo projeto?</p>
            <div className="contact-header-line" aria-hidden="true"></div>
          </div>

          <div className="social-channels-bar">
            {contactMethods.map((method) => (
              <div key={method.title} className="channel-pill-item">
                <a href={method.link} target="_blank" rel="noopener noreferrer" className="channel-main-btn">
                  {method.icon === 'Mail' ? <Mail size={16} /> : <BrandIcon name={method.icon} size={16} />}
                  <span>{method.title}</span>
                </a>

                <button
                  className="channel-copy-btn"
                  title={copiedTitle === method.title ? 'Copiado!' : 'Copiar endereço'}
                  onClick={() => copyToClipboard(method.link, method.title)}
                >
                  {copiedTitle === method.title ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            ))}
          </div>

          {errorMessage && (
            <div className="feedback-toast-banner error">
              <AlertCircle size={20} className="toast-icon" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form className="contact-form-glass" onSubmit={handleSubmit}>
            <div className="form-row-two">
              <div className="form-group">
                <label htmlFor="contact-name">Seu Nome</label>
                <input
                  id="contact-name"
                  value={formData.name}
                  onChange={updateField}
                  type="text"
                  name="name"
                  placeholder="Ex: Maria Silva"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Endereço de E-mail</label>
                <input
                  id="contact-email"
                  value={formData.email}
                  onChange={updateField}
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Sua Mensagem</label>
              <textarea
                id="contact-message"
                value={formData.message}
                onChange={updateField}
                name="message"
                rows={4}
                placeholder="Descreva a sua ideia, projeto ou dúvida..."
                required
                className="form-textarea"
              ></textarea>
            </div>

            <div className="form-submit-row">
              <button className="form-submit-btn" type="submit" disabled={isSubmitting}>
                <Send size={16} />
                <span>{isSubmitting ? 'Enviando Mensagem...' : 'Enviar Mensagem Direta'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {showBatDrop &&
        createPortal(
          <div className="bat-drop-modal-overlay" onClick={closeBatDrop}>
            <div className="bat-drop-stage" onClick={(e) => e.stopPropagation()}>
              <div className="flying-carrier-bat">
                <img src="/bat.svg" alt="Mascote Morcego Entregador" className="carrier-bat-svg" />
              </div>

              <div className="falling-letter-card">
                <div className="letter-card-header">
                  <span className="letter-tag">MENSAGEM ENTREGUE</span>
                  <button className="card-close-btn" onClick={closeBatDrop} title="Fechar">
                    ✕
                  </button>
                </div>

                <h3 className="letter-card-title">O Morcego Entregou Seu E-mail! 🦇</h3>
                <p className="letter-card-text">
                  Sua mensagem foi entregue com sucesso na caixa de entrada de <strong>Emilly Sátiro</strong>.
                  Muito obrigada pelo contato, responderei em breve!
                </p>

                <div className="letter-card-footer">
                  <span className="auto-dismiss-text">Clique fora para fechar esta janela</span>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  )
}
