import { Link } from 'react-router-dom'
import PastelBackdrop from '../components/ui/PastelBackdrop'
import PixelShooter from '../components/ui/PixelShooter'
import './VitrinePage.css'

// Vitrine (catálogo de serviços) ainda em construção: o joguinho de pixel é o fundo da tela inteira,
// e no centro fica só o recado para entrar em contato.
export default function VitrinePage() {
  return (
    <main className="vitrine">
      <PastelBackdrop />
      <PixelShooter />

      <div className="vitrine__card">
        <h1 className="vitrine__title">Vitrine · em breve</h1>
        <p className="vitrine__lead">Por enquanto, entre em contato.</p>
        <Link to="/#contact" className="vitrine__cta">
          Falar comigo
        </Link>
      </div>
    </main>
  )
}
