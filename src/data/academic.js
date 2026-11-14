// Conteúdo da página "Vida Acadêmica" (tirado do currículo em PDF).
// Publicações: preencher `publications` com os dados do Google Acadêmico.

export const academicLinks = [
  { name: 'Google Acadêmico', icon: 'book', url: 'https://scholar.google.com/citations?user=e_URIYQAAAAJ' },
  { name: 'Currículo Lattes', icon: 'file', url: 'http://lattes.cnpq.br' },
]

export const research = {
  title: 'Pesquisa Aplicada em Visão Computacional e Deep Learning',
  group: 'PAVIV · UFPI',
  period: 'out. 2024 — atual',
  badge: 'Iniciação Científica · PIBIC',
  highlights: [
    'Pesquisa em Inteligência Artificial e Deep Learning aplicada a problemas de saúde pública e agronegócio, com Python, PyTorch, TensorFlow e processamento de imagens.',
    'Treinamento e validação de modelos em infraestrutura de alto desempenho com servidores NVIDIA, contribuindo para a produção de trabalhos científicos.',
    'No diagnóstico biomédico, investigação de Redes Neurais Convolucionais e pipelines de pré-processamento para classificar macrófagos infectados e não infectados por Leishmania Visceral Canina em imagens de medula óssea.',
    'Pesquisa voltada ao apoio de análises parasitológicas e ao suporte de especialistas, sem substituir a avaliação profissional ou constituir um produto comercial de diagnóstico.',
  ],
  logos: ['python', 'pytorch', 'opencv'],
}

// Lista vazia até receber os dados do Google Acadêmico.
// Formato: { title, authors, venue, year, url }
export const publications = []

export const education = [
  {
    title: 'Bacharelado em Sistemas de Informação',
    place: 'Universidade Federal do Piauí (UFPI) · Picos - PI',
    period: 'mai. 2023 — nov. 2026 (previsão)',
  },
  {
    title: 'Mestrado em Ciência da Computação · Aluna especial',
    place: 'Universidade Federal do Piauí (UFPI)',
    period: 'atual',
  },
]

// Palestras e minicursos. Campos opcionais: image ('/images/academic/arquivo.webp') e description.
export const talks = [
  {
    title: 'Minicurso de robótica e modelagem 3D',
    event: 'SINFO · UFPI',
    role: 'Palestrante / ministrante',
    date: 'nov. 2025',
  },
  {
    title: 'Visão computacional na saúde',
    event: 'Evento de Medicina · UFPI',
    role: 'Palestrante',
    date: 'mar. 2025',
  },
  {
    title: 'Visão computacional',
    event: 'Evento de Biotecnologia · IFPI Valença',
    role: 'Palestrante',
    date: 'fev. 2025',
  },
  {
    title: 'Minicurso de visão computacional',
    event: 'SINFO · UFPI',
    role: 'Palestrante / ministrante',
    date: 'nov. 2024',
  },
]

// Ensino e organização acadêmica
export const teaching = [
  {
    title: 'Monitoria de Banco de Dados II',
    place: 'UFPI',
    period: 'mai. — ago. 2025',
    description: 'Apoio a estudantes em atividades práticas e teóricas.',
  },
  {
    title: 'Diretora de Ensino',
    place: 'Liga Acadêmica de Sistemas de Informação (LADS)',
    period: 'abr. 2025 — mai. 2026',
    description:
      'Coordenação de palestras, minicursos, oficinas e encontros voltados ao desenvolvimento técnico dos membros.',
  },
]

export const certificates = [
  { title: 'Introduction to Packet Tracer', issuer: 'Cisco', date: 'jan. 2025' },
  { title: 'AWS Academy Graduate · Cloud Foundations', issuer: 'Amazon Web Services', date: 'nov. 2025' },
]
