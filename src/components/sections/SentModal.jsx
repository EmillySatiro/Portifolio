import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './SentModal.css'

// Confirmação de envio: o morcego "entrega" o cartão. Fecha ao clicar fora ou com Esc.
export default function SentModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return createPortal(
    <div className="sent-modal" onClick={onClose}>
      <div
        className="sent-modal__card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sent-title"
        onClick={(e) => e.stopPropagation()}
      >
        <img src="/bat.svg" alt="" className="sent-modal__bat" width="160" height="120" />
        <div className="sent-modal__head">
          <span className="eyebrow">Mensagem entregue</span>
          <button type="button" className="sent-modal__close" onClick={onClose} aria-label="Fechar">
            ✕
          </button>
        </div>
        <h3 id="sent-title" className="sent-modal__title display">
          O morcego entregou seu e-mail! 🦇
        </h3>
        <p>
          Sua mensagem foi entregue com sucesso na caixa de entrada de <strong>Emilly Sátiro</strong>. Muito
          obrigada pelo contato, responderei em breve!
        </p>
        <p className="sent-modal__hint">Clique fora para fechar esta janela</p>
      </div>
    </div>,
    document.body,
  )
}
