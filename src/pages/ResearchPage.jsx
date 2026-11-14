import { ExternalLink } from 'lucide-react'
import UnderConstruction from '../components/UnderConstruction'

export default function ResearchPage() {
  return (
    <UnderConstruction
      badge="PESQUISA CIENTÍFICA & IA"
      description="Esta página está sendo preparada com novidades, artigos acadêmicos e pesquisas em visão computacional e inteligência artificial em breve."
      actions={
        <>
          <a
            href="https://scholar.google.com/citations?user=e_URIYQAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="action-pill-btn primary"
          >
            <span>Google Acadêmico</span>
            <ExternalLink size={14} />
          </a>
          <a
            href="http://lattes.cnpq.br"
            target="_blank"
            rel="noopener noreferrer"
            className="action-pill-btn secondary"
          >
            <span>Currículo Lattes (CNPq)</span>
            <ExternalLink size={14} />
          </a>
        </>
      }
    />
  )
}
