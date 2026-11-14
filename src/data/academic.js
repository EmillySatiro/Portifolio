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

// Publicações do Google Acadêmico (autores como aparecem lá; "et al." onde a lista é cortada).
export const publications = [
  {
    title: 'Detecção de Amastigotas de Leishmaniose Visceral em Imagens Microscópicas utilizando Redes Neurais Convolucionais',
    authors: 'LBM Souza, KS Dias, AL Borges, VBL Dias, ES Sátiro, CA Gonçalves et al.',
    venue: 'Revista de Sistemas e Computação (RSC), v. 15, n. 2',
    year: '2025',
    type: 'Periódico',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=e_URIYQAAAAJ&citation_for_view=e_URIYQAAAAJ:qjMakFHDy7sC',
  },
  {
    title: 'Sistema web para diagnóstico automatizado por imagem com suporte a diferentes modelos de classificação microscópica',
    authors: 'LBM de Souza, KS Dias, AL Borges, VBL Dias, CA Gonçalves, RL Araújo et al.',
    venue: 'Simpósio Brasileiro de Computação Aplicada à Saúde (SBCAS), p. 955–966',
    year: '2025',
    type: 'Congresso',
    citations: 1,
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=e_URIYQAAAAJ&citation_for_view=e_URIYQAAAAJ:2osOgNQ5qMEC',
  },
  {
    title: 'Detecção automática de macrófagos em esfregaço de medula óssea canina com deep learning',
    authors: 'RL Araújo, VBL Dias, AL Borges, LBM de Souza, KS Dias, CES Sátiro et al.',
    venue: 'Simpósio Brasileiro de Computação Aplicada à Saúde (SBCAS), p. 581–592',
    year: '2025',
    type: 'Congresso',
    citations: 1,
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=e_URIYQAAAAJ&citation_for_view=e_URIYQAAAAJ:9yKSN-GCB0IC',
  },
  {
    title: 'Machine Learning no Diagnóstico Parasitológico Direto de Leishmaniose Visceral: Uma Revisão',
    authors: 'VBL Dias, CES Sátiro, AL Borges, KS Dias, RL Araújo, LBM de Souza et al.',
    venue: 'Simpósio Brasileiro de Computação Aplicada à Saúde (SBCAS), p. 641–652',
    year: '2025',
    type: 'Congresso',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=e_URIYQAAAAJ&citation_for_view=e_URIYQAAAAJ:d1gkVwhDpl0C',
  },
  {
    title: 'Macrophage Classification in Bone Marrow Aspirate Smears from Canine Visceral Leishmaniasis',
    authors: 'VBL Dias, CES Sátiro, AL Borges, KS Dias, C de A Gonçalves, RL Araújo et al.',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=e_URIYQAAAAJ&citation_for_view=e_URIYQAAAAJ:UeHWp8X0CEIC',
  },
]

// Trecho destacado nos autores
export const authorHighlight = /C?ES Sátiro/

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
