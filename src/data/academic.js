// Conteúdo da página "Vida Acadêmica": notícias com fotos (posts do LinkedIn) e publicações (Google Acadêmico).

export const academicLinks = [
  { name: 'Google Acadêmico', icon: 'book', url: 'https://scholar.google.com/citations?user=e_URIYQAAAAJ' },
  { name: 'Currículo Lattes', icon: 'file', url: 'http://lattes.cnpq.br/7487358511532218' },
]

// Notícias, da mais recente para a mais antiga.
// slug: usado na URL (?noticia=slug). Fotos em public/images/academic/ (WebP); a primeira é a de destaque.
export const news = [
  {
    slug: 'siupi-2026',
    section: 'Pesquisa',
    date: 'nov. 2026',
    location: 'UFPI',
    headline: 'Pesquisa sobre leishmaniose visceral canina encerra ciclo de dois anos no SIUPI 2026',
    lead: 'A apresentação do banner no seminário de iniciação científica da UFPI marcou o fim da minha Iniciação Científica e foi a última apresentação de banner da graduação.',
    paragraphs: [
      'No SIUPI 2026, apresentei os resultados da pesquisa “Classificação e contagem automática de leishmaniose visceral canina utilizando algoritmos de aprendizado profundo”, desenvolvida no PAVIV, grupo de pesquisa da UFPI, como bolsista PIBIC desde outubro de 2024.',
      'Foram dois anos de desafios, descobertas, dúvidas, experimentos e muito aprendizado. A pesquisa busca apoiar o trabalho dos especialistas nas análises parasitológicas da doença, sem substituir a avaliação profissional.',
      'Ao longo do projeto, a equipe publicou trabalhos no Simpósio Brasileiro de Computação Aplicada à Saúde (SBCAS 2025) e na Revista de Sistemas e Computação. A pesquisa também deu origem à startup PathoVision, da qual faço parte.',
    ],
    links: [
      { label: 'Ver publicações', target: 'publicacoes' },
      { label: 'PathoVision no Instagram', url: 'https://www.instagram.com/pathovision_/' },
    ],
    photos: [
      { src: '/images/academic/siupi-1.webp', alt: 'Emilly ao lado do banner da pesquisa no SIUPI 2026' },
      { src: '/images/academic/siupi-2.webp', alt: 'Banner da pesquisa sobre leishmaniose visceral canina no SIUPI 2026' },
    ],
  },
  {
    slug: 'solenidade-startufpi',
    section: 'Inovação',
    date: '26 out. 2026',
    location: 'Teresina, PI',
    headline: 'Equipe 3º lugar participa da Solenidade do Desafio StartUFPI',
    lead: 'As equipes do Desafio StartUFPI se reuniram com a Reitoria da UFPI para conhecer os próximos passos do programa.',
    paragraphs: [
      'No dia 26 de outubro, participei da Solenidade do Desafio StartUFPI, em Teresina, depois da conquista do 3º lugar com a minha equipe.',
      'O encontro reuniu as equipes participantes e a Reitoria da Universidade Federal do Piauí para compartilhar os próximos passos do Programa StartUFPI e celebrar os projetos que se destacaram no Desafio.',
    ],
    photos: [
      { src: '/images/academic/solenidade-1.webp', alt: 'Foto oficial das equipes do Desafio StartUFPI com a Reitoria da UFPI' },
      { src: '/images/academic/solenidade-2.webp', alt: 'Emilly com integrantes da Reitoria na solenidade' },
      { src: '/images/academic/solenidade-3.webp', alt: 'Auditório durante a solenidade do Desafio StartUFPI' },
    ],
  },
  {
    slug: 'sinfo-2026',
    section: 'Evento',
    date: 'set. 2026',
    location: 'UFPI',
    headline: 'SINFO 2026: dos bastidores da organização à identidade visual do evento',
    lead: 'No Simpósio de Sistemas de Informação da UFPI, fiz parte da equipe organizadora e liderei o design do evento.',
    paragraphs: [
      'O SINFO é um evento tradicional, realizado há muitos anos. Pela Juá - Soluções em Tecnologia, atuei na equipe organizadora e como líder de design: da identidade visual e do conceito do evento até cada tela do site, com um visual nostálgico, inspirado na estética da web de outras épocas, que remete à trajetória do simpósio.',
      'O primeiro dia foi de muito trabalho nos bastidores e de ver as peças criadas saindo do papel e fazendo parte da experiência do público. No segundo, acompanhei apresentações de artigos, palestras e a Maratona de Programação.',
    ],
    photos: [
      { src: '/images/academic/sinfo-1.webp', alt: 'Equipe organizadora do SINFO 2026 no palco' },
      { src: '/images/academic/sinfo-2.webp', alt: 'Painel quadriculado com a identidade visual do SINFO 2026' },
      { src: '/images/academic/sinfo-site.webp', alt: 'Página inicial do site do SINFO 2026' },
      { src: '/images/academic/sinfo-3.webp', alt: 'Auditório do SINFO 2026 com a identidade visual no telão' },
      { src: '/images/academic/sinfo-4.webp', alt: 'Palestra durante o SINFO 2026' },
      { src: '/images/academic/sinfo-5.webp', alt: 'Participantes da Maratona de Programação' },
      { src: '/images/academic/sinfo-6.webp', alt: 'Cartaz do Simpósio de Sistemas de Informação' },
    ],
  },
  {
    slug: 'genius-hackathon-2026',
    section: 'Palestra',
    date: 'set. 2026',
    location: 'UFPI',
    headline: 'Palestra no GENIUS Hackathon 2026 aproxima universidade e desafios do SUS',
    lead: 'Fui uma das palestrantes do Health Hack Lab, hackathon realizado pela UFPI com parceiros da saúde pública.',
    paragraphs: [
      'O GENIUS Hackathon 2026 – Health Hack Lab foi realizado pela UFPI em parceria com o GENIUS, a FAPEPI, o PET-Saúde/I&SD e a Secretaria Municipal de Saúde, conectando universidade e sociedade na busca por soluções para desafios reais do SUS.',
      'Na palestra “Prototipação de Interfaces e Integração de Soluções”, falei sobre como transformar necessidades reais em protótipos e compartilhei um pouco da minha experiência com projetos voltados à saúde.',
    ],
    photos: [
      { src: '/images/academic/genius-1.webp', alt: 'Emilly palestrando no GENIUS Hackathon 2026' },
      { src: '/images/academic/genius-2.webp', alt: 'Palco do Health Hack Lab durante a palestra' },
      { src: '/images/academic/genius-3.webp', alt: 'Emilly no palco com o microfone' },
      { src: '/images/academic/genius-4.webp', alt: 'Certificado de palestrante do evento' },
    ],
  },
  {
    slug: 'startufpi-2026',
    section: 'Evento',
    date: 'set. 2026',
    location: 'UFPI',
    headline: 'StartUFPI 2026 reúne inovação, empreendedorismo e pesquisa',
    lead: 'O encontro movimentou o ecossistema de inovação da universidade com discussões, novas ideias e troca de experiências.',
    paragraphs: [
      'Participei do StartUFPI 2026, evento que reúne estudantes, pesquisadores e empreendedores em torno de inovação, empreendedorismo e pesquisa.',
      'Foi um dia de muitas conversas, novas ideias e troca de experiências com quem constrói o ecossistema de inovação da UFPI.',
    ],
    photos: [
      { src: '/images/academic/startufpi-1.webp', alt: 'Participantes reunidos em frente ao painel do StartUFPI 2026' },
      { src: '/images/academic/startufpi-2.webp', alt: 'Painel de entrada do StartUFPI 2026' },
      { src: '/images/academic/startufpi-3.webp', alt: 'Público no auditório do StartUFPI 2026' },
      { src: '/images/academic/startufpi-4.webp', alt: 'Credencial e materiais do StartUFPI 2026' },
    ],
  },
  {
    slug: 'lads',
    section: 'Extensão',
    date: 'ago. 2026',
    location: 'LADS · UFPI',
    headline: 'Depois de dois anos como Diretora de Ensino, encerro meu ciclo na LADS',
    lead: 'Na Liga Acadêmica de Data Science vivi experiências que marcaram minha formação, também como líder.',
    paragraphs: [
      'Entre 2024 e 2026 fui Diretora de Ensino da LADS. Junto com a Cristina Sousa, criei o projeto 404 Not Found, que deu origem a workshops e programas de compartilhamento de conhecimento, criatividade e inovação.',
      'Também participei da organização de eventos como o 1º Hackathon da LADS, além de outras ações com estudantes e a comunidade acadêmica. Encerrei o ciclo para dedicar mais tempo a novos projetos, pesquisas e desafios.',
    ],
    photos: [
      { src: '/images/academic/lads-1.webp', alt: 'Integrantes da LADS reunidos em sala de aula' },
      { src: '/images/academic/lads-2.webp', alt: 'Apresentação de workshop da LADS' },
      { src: '/images/academic/lads-3.webp', alt: 'Crachás da LADS' },
      { src: '/images/academic/lads-4.webp', alt: 'Emilly e Cristina Sousa' },
    ],
  },
  {
    slug: 'premaut-inpi',
    section: 'Conquista',
    date: 'ago. 2026',
    location: 'UFPI',
    headline: 'PREMAUT recebe registro oficial no INPI',
    lead: 'A plataforma, desenvolvida para o projeto PREMAUT da UFPI, agora é um software registrado, com a universidade como titular.',
    paragraphs: [
      'O PREMAUT foi registrado no Instituto Nacional da Propriedade Industrial (INPI) pelo processo BR512026005043-0, tendo a Universidade Federal do Piauí como titular. Faço parte da equipe autora do projeto.',
      'A ferramenta foi criada para apoiar o Projeto PREMAUT, do campus de Teresina, reunindo em um só lugar o acompanhamento de alunos, monitores e professores, relatórios, materiais de apoio e a comunicação da equipe.',
    ],
    photos: [
      { src: '/images/academic/premaut-1.webp', alt: 'Certificado de registro de programa de computador do PREMAUT no INPI' },
    ],
  },
]

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
