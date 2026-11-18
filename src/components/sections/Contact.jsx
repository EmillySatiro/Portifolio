import { useState } from 'react'
import { contactMethods, formspreeEndpoint } from '../../data/portfolio'
import Icon from '../ui/Icon'
import SentModal from './SentModal'
import './Contact.css'

const EMPTY_FORM = { name: '', email: '', message: '' }

// Copia o endereço sem o "mailto:" no caso do e-mail.
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
      /* sem permissão para a área de transferência: ignora */
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
    <section id="contact" className="section contact pixel-edge">
      <div className="container contact__inner">
        <header className="contact__head">
          <h2 className="contact__title">Vamos conversar?</h2>
          <p className="contact__lead">
            Tem um projeto, uma vaga ou uma ideia de pesquisa? Mande uma mensagem pelo formulário ou fale direto por
            um dos canais.
          </p>
        </header>

        {/* Canais: pílulas de vidro com botão de copiar */}
        <ul className="contact__channels">
          {contactMethods.map((method) => (
            <li key={method.title} className="contact__channel">
              <a href={method.link} target="_blank" rel="noopener noreferrer" className="contact__channel-link">
                <span className="contact__channel-icon">
                  <Icon name={method.icon} size={18} />
                </span>
                <span className="contact__channel-text">
                  <span className="contact__channel-name">{method.title}</span>
                  <span className="contact__channel-detail">{method.detail}</span>
                </span>
              </a>
              <button
                type="button"
                className={`contact__copy${copied === method.title ? ' is-copied' : ''}`}
                onClick={() => copy(method)}
                aria-label={`Copiar ${method.title}`}
                title={copied === method.title ? 'Copiado!' : 'Copiar'}
              >
                <Icon name={copied === method.title ? 'check' : 'copy'} size={15} />
              </button>
            </li>
          ))}
        </ul>

        {/* Formulário numa placa de vidro */}
        <form className="contact__form" onSubmit={handleSubmit}>
          {status === 'error' && (
            <p className="contact__error" role="alert">
              <Icon name="alert" size={18} /> {errorMessage}
            </p>
          )}

          <div className="contact__row">
            <div className="field">
              <label htmlFor="contact-name">Seu nome</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Ex: Maria Silva"
                value={form.name}
                onChange={updateField}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="contact-email">Seu e-mail</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={updateField}
                required
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="contact-message">Sua mensagem</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Conte a sua ideia, projeto ou dúvida"
              value={form.message}
              onChange={updateField}
              required
            />
          </div>

          <button type="submit" className="pbtn pbtn--main contact__submit" disabled={status === 'sending'}>
            <span>{status === 'sending' ? 'Enviando mensagem...' : 'Enviar mensagem'}</span>
            <Icon name="send" className="icon-arrow" />
          </button>
        </form>
      </div>

      {status === 'sent' && <SentModal onClose={() => setStatus('idle')} />}
    </section>
  )
}
