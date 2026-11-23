// Estilos globais primeiro; os de cada componente vêm depois e têm prioridade.
import './styles/tokens.css'
import './styles/base.css'
import './styles/utilities.css'
import './styles/buttons.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { startImageSkeletons } from './utils/imageSkeleton'

startImageSkeletons()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
