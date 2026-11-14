// Conteúdo da página "Vida Acadêmica": iniciação científica (currículo em PDF), publicações (Google Acadêmico) e eventos (LinkedIn).

export const academicLinks = [
  { name: 'Google Acadêmico', icon: 'book', url: 'https://scholar.google.com/citations?user=e_URIYQAAAAJ' },
  { name: 'Currículo Lattes', icon: 'file', url: 'http://lattes.cnpq.br/7487358511532218' },
]

// Iniciação científica, em texto corrido (fatos do currículo em PDF)
export const research = {
  title: 'Pesquisa Aplicada em Visão Computacional e Deep Learning',
  meta: ['PIBIC', 'PAVIV · UFPI', 'out. 2024 — atual'],
  paragraphs: [
    'Desde outubro de 2024 faço Iniciação Científica (PIBIC) no PAVIV, o grupo de Pesquisa Aplicada em Visão Computacional e Deep Learning da UFPI. A pesquisa aplica Inteligência Artificial e Deep Learning a problemas de saúde pública e do agronegócio, com Python, PyTorch, TensorFlow e processamento de imagens.',
    'No diagnóstico biomédico, investigo Redes Neurais Convolucionais e pipelines de pré-processamento para classificar macrófagos infectados e não infectados por Leishmania Visceral Canina em imagens de medula óssea. Os modelos são treinados e validados em infraestrutura de alto desempenho, com servidores NVIDIA, e contribuem para a produção de trabalhos científicos.',
    'O objetivo é apoiar as análises parasitológicas e o trabalho dos especialistas, sem substituir a avaliação profissional nem constituir um produto comercial de diagnóstico.',
  ],
}

// Startup que nasceu da pesquisa
export const startup = {
  name: 'PathoVision',
  handle: '@pathovision_',
  url: 'https://www.instagram.com/pathovision_/',
  text: 'Dessa pesquisa surgiu a startup PathoVision, da qual faço parte.',
}

// "Notícia" da pesquisa (fatos do SIUPI, das publicações e da startup)
export const news = {
  kicker: 'Notícia',
  date: 'nov. 2026',
  headline: 'Pesquisa sobre leishmaniose visceral canina encerra ciclo de dois anos na UFPI',
  lead: 'No SIUPI 2026, Emilly Sátiro apresentou os resultados da sua pesquisa de Iniciação Científica sobre classificação e contagem automática de leishmaniose visceral canina com aprendizado profundo. Foi a última apresentação de banner da sua graduação, encerrando dois anos de trabalho no PAVIV.',
  paragraphs: [
    'Ao longo do projeto, a equipe publicou trabalhos no Simpósio Brasileiro de Computação Aplicada à Saúde (SBCAS 2025) e na Revista de Sistemas e Computação, sobre a detecção de amastigotas e de macrófagos em imagens microscópicas e sobre o uso de machine learning no diagnóstico parasitológico.',
    'A pesquisa também deu origem à startup PathoVision, da qual Emilly faz parte.',
  ],
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

// Eventos acadêmicos (posts do LinkedIn), do mais recente para o mais antigo.
// Fotos: arquivos WebP em public/images/academic/ -> photos: [{ src: '/images/academic/arquivo.webp', alt: '...' }]
export const events = [
  {
    title: 'SIUPI 2026',
    date: 'nov. 2026',
    location: null,
    role: 'Apresentação de banner',
    description:
      'Apresentei os resultados da pesquisa de Iniciação Científica sobre classificação e contagem automática de leishmaniose visceral canina com aprendizado profundo, encerrando dois anos de pesquisa e a minha última apresentação de banner na graduação.',
    photos: [],
  },
  {
    title: 'Solenidade do Desafio StartUFPI',
    date: '26 out. 2026',
    location: 'Teresina, PI',
    role: 'Participante · equipe 3º lugar',
    description:
      'Encontro das equipes do Desafio com a Reitoria da UFPI para apresentar os próximos passos do Programa StartUFPI, após a conquista do 3º lugar com a minha equipe.',
    photos: [],
  },
  {
    title: 'SINFO 2026',
    date: 'set. 2026',
    location: 'UFPI',
    role: 'Organização e design · participante',
    description:
      'Simpósio de Sistemas de Informação da UFPI. Atuei na equipe organizadora (Juá - Soluções em Tecnologia) e como designer dos elementos visuais, além de acompanhar apresentações de artigos, palestras e a Maratona de Programação.',
    photos: [],
  },
  {
    title: 'StartUFPI 2026',
    date: 'set. 2026',
    location: 'UFPI',
    role: 'Participante',
    description:
      'Encontro que reúne inovação, empreendedorismo, tecnologia e pesquisa, com discussões, novas ideias e troca de experiências no ecossistema de inovação.',
    photos: [],
  },
  {
    title: 'GENIUS Hackathon 2026 · Health Hack Lab',
    date: 'set. 2026',
    location: 'UFPI',
    role: 'Palestrante',
    description:
      'Palestra "Prototipação de Interfaces e Integração de Soluções Tecnológicas", sobre transformar requisitos e necessidades reais em interfaces e protótipos para soluções digitais em saúde e desafios do SUS.',
    photos: [],
  },
]

// Linha do tempo da trajetória acadêmica (marcos da pesquisa + eventos), em ordem cronológica.
// kind: 'research' (marco da pesquisa) | 'event' (evento)
export const timeline = [
  {
    year: '2024',
    date: 'out. 2024',
    kind: 'research',
    title: 'Início da Iniciação Científica no PAVIV',
    text: 'Começo da pesquisa em visão computacional e deep learning na UFPI, com foco na classificação de macrófagos infectados por Leishmania Visceral Canina em imagens de medula óssea.',
  },
  {
    year: '2025',
    date: '2025',
    kind: 'research',
    title: 'Primeiras publicações',
    text: 'Três trabalhos no Simpósio Brasileiro de Computação Aplicada à Saúde (SBCAS 2025) e um artigo na Revista de Sistemas e Computação.',
    link: { label: 'Ver publicações', target: 'publicacoes' },
  },
  ...[...events].reverse().map((event) => ({
    year: event.date.slice(-4),
    date: event.date,
    kind: 'event',
    title: event.title,
    role: event.role,
    location: event.location,
    text: event.description,
    photos: event.photos,
  })),
]

// Trecho destacado nos autores
export const authorHighlight = /C?ES Sátiro/
