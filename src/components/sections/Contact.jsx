import { useState } from 'react'
import { contactMethods, formspreeEndpoint } from '../../data/portfolio'
import Scribble from '../ui/Scribble'
import SentModal from './SentModal'
import './Contact.css'

const EMPTY_FORM = { name: '', email: '', message: '' }

const FIELDS = [
  { name: 'name', label: 'Seu nome', type: 'text', placeholder: 'Ex: Maria Silva' },
  { name: 'email', label: 'Endereço de e-mail', type: 'email', placeholder: 'seu@email.com' },
]

// Copia sem o "mailto:" no caso do e-mail.
const copyValue = (link) => link.replace(/^mailto:/, '')

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState('')
  const [copied, setCopied] = useState('')

  const updateField = (e) => setForm((data) => ({ ...data, [e.target.name]: e.target.value }))

  const copy = async (method) => {
    try {
      await navigator.clipboard.writeText(copyValue(method.link))
      setCopied(method.title)
      setTimeout(() => setCopied((current) => (current === method.title ? '' : current)), 2500)
    } catch {
      /* sem permissão de área de transferência: ignora */
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) throw new Error('send-failed')
      setForm(EMPTY_FORM)
      setStatus('sent')
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err.message === 'send-failed'
          ? 'Ops! Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente ou envie por e-mail.'
          : 'Ops! Ocorreu um erro de conexão. Por favor, tente novamente.',
      )
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <header className="contact__head" data-reveal="fade">
          <span className="blur-word contact__blur" aria-hidden="true">
            Contato
          </span>
          <h2 className="contact__title display" data-reveal>
            contato
          </h2>
          <p className="contact__subtitle" data-reveal style={{ '--delay': '0.1s' }}>
            Vamos conversar sobre o seu próximo projeto?
          </p>
          <Scribble shape="underline" className="contact__underline" strokeWidth={3} />
        </header>

        <div className="contact__grid">
          <ul className="contact__channels" data-reveal>
            {contactMethods.map((method) => (
              <li key={method.title} className="contact__channel">
                <span className="contact__channel-name">{method.title}</span>
                <a href={method.link} target="_blank" rel="noopener noreferrer" className="contact__channel-detail">
                  {method.detail}
                </a>
                <button
                  type="button"
                  className="contact__copy"
                  onClick={() => copy(method)}
                  aria-label={`Copiar ${method.title}`}
                >
                  {copied === method.title ? 'Copiado ✓' : 'Copiar'}
                </button>
              </li>
            ))}
          </ul>

          <form className="contact__form" onSubmit={handleSubmit} data-reveal style={{ '--delay': '0.15s' }}>
            {status === 'error' && (
              <p className="contact__error" role="alert">
                {errorMessage}
              </p>
            )}

            <div className="contact__row">
              {FIELDS.map((field) => (
                <label key={field.name} className="contact__field">
                  <span>{field.label}</span>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={updateField}
                    placeholder={field.placeholder}
                    required
                  />
                </label>
              ))}
            </div>

            <label className="contact__field">
              <span>Sua mensagem</span>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={updateField}
                placeholder="Descreva a sua ideia, projeto ou dúvida..."
                required
              />
            </label>

            <button type="submit" className="cta-link spaced contact__submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'} <span className="arrow">→</span>
            </button>
          </form>
        </div>
      </div>

      {status === 'sent' && <SentModal onClose={() => setStatus('idle')} />}
    </section>
  )
}
