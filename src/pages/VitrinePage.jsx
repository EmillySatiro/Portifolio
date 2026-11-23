import { Link } from 'react-router-dom'
import PastelBackdrop from '../components/ui/PastelBackdrop'
import PixelShooter from '../components/ui/PixelShooter'
import './VitrinePage.css'

// Vitrine (catálogo de serviços) ainda em construção: um joguinho de pixel e o recado para entrar em contato.
export default function VitrinePage() {
  return (
    <main className="vitrine">
      <PastelBackdrop />

      <div className="vitrine__inner">
        <PixelShooter />
        <h1 className="vitrine__title">Vitrine · em breve</h1>
        <p className="vitrine__lead">Por enquanto, entre em contato.</p>
        <Link to="/#contact" className="vitrine__cta">
          Falar comigo
        </Link>
      </div>
    </main>
  )
}
