// Projetos de design (base: a antiga página Designer do portfólio, sem os arquivos .fig).
// Imagens em public/images/design/.
// spread: como o projeto aparece como página da revista (uma por tela)
//   layout: cover | stage | stage-r | collage | collage-r | figure | spine
//   color: cor do papel, tirada do próprio projeto (o texto fica claro ou escuro sozinho)
//   images: telas impressas na página; crop 'tall' = cartaz em pé (4:5), senão recorte 16:10

const img = (name) => `/images/design/${name}.webp`

export const designProjects = [
  {
    id: 'sinfo',
    spread: { layout: 'cover', color: '#0f2f6b', images: [{ i: 0, crop: 'tall' }, { i: 1 }] },
    title: 'SINFO 2026',
    type: 'Identidade visual · Site',
    description:
      'Identidade visual do SINFO 2026, inspirada na estética da web e dos sistemas dos anos 1990 e 2000. O projeto combina elementos nostálgicos, como janelas, ícones, pixels e interfaces clássicas, com uma abordagem contemporânea voltada à tecnologia e à inovação.',
    liveUrl: 'https://sinfo-ufpi.com.br/',
    screens: [
      { src: img('sinfo-inicio'), label: 'Início' },
      { src: img('sinfo-imagem2'), label: 'Tela 2' },
      { src: img('sinfo-imagem3'), label: 'Tela 3' },
      { src: img('sinfo-sobre-picos'), label: 'Sobre Picos' },
    ],
  },
  {
    id: 'jua',
    spread: { layout: 'stage', color: '#3f4636', images: [{ i: 0 }, { i: 3 }] },
    title: 'Juá 2025',
    type: 'Site institucional',
    description:
      'Design do site da Juá para ajudar empresas e pessoas a se conectarem com a tecnologia de forma intuitiva: uma interface moderna e responsiva, que transmite inovação, facilita a navegação e destaca as soluções da empresa de maneira clara e profissional.',
    liveUrl: 'https://www.juasolucoes.com.br/',
    screens: [
      { src: img('jua-inicio'), label: 'Início' },
      { src: img('jua-sobre'), label: 'Sobre' },
      { src: img('jua-servicos'), label: 'Serviços' },
      { src: img('jua-diferenciais'), label: 'Diferenciais' },
      { src: img('jua-duvidas'), label: 'Dúvidas' },
      { src: img('jua-contato'), label: 'Contato' },
    ],
  },
  {
    id: 'premaut',
    spread: { layout: 'collage', color: '#d4e6e3', images: [{ i: 0 }, { i: 1 }] },
    title: 'PREMAUT',
    type: 'UI/UX · Sistema web',
    description:
      'Protótipos das telas do sistema do PREMAUT, projeto de extensão de atividades motoras para pessoas com autismo da UFPI: acesso ao sistema, página inicial e cadastro de participantes.',
    liveUrl: 'https://premaut.ufpi.br/',
    screens: [
      { src: img('premaut-home-login'), label: 'Página inicial' },
      { src: img('premaut-login'), label: 'Login' },
      { src: img('premaut-cadastro-paciente'), label: 'Cadastro' },
    ],
  },
  {
    id: 'cronometrai',
    spread: { layout: 'figure', color: '#1f3a52', images: [{ i: 0, crop: 'tall' }] },
    title: 'Cronometraí',
    type: 'UI/UX · Plataforma',
    description:
      'Plataforma de divulgação e organização de eventos esportivos, conectando atletas e organizadores em modalidades como corrida, triatlo e natação. Participantes encontram e se inscrevem em competições; organizadores cadastram e gerenciam os próprios eventos.',
    screens: [
      { src: img('cronometrai-home'), label: 'Início' },
      { src: img('cronometrai-login-atleta'), label: 'Login do atleta' },
      { src: img('cronometrai-cadastrar-evento'), label: 'Cadastrar evento' },
    ],
  },
  {
    id: 'ecomadeira',
    spread: { layout: 'stage-r', color: '#2a2723', images: [{ i: 0 }, { i: 1 }] },
    title: 'EcoMadeira',
    type: 'UI/UX · Ferramenta',
    liveUrl: 'https://ecomadeiraweb.com/',
    description:
      'Planilha para engenheiros, arquitetos e projetistas calcularem e dimensionarem elementos estruturais de madeira com segurança e precisão, eliminando processos manuais demorados e gerando relatórios completos de forma fácil e intuitiva.',
    screens: [
      { src: img('ecomadeira-page'), label: 'Página' },
      { src: img('ecomadeira-login'), label: 'Login' },
    ],
  },
  {
    id: 'plantando-ideias',
    spread: { layout: 'collage-r', color: '#dfe2d6', images: [{ i: 0 }, { i: 1 }] },
    title: 'Plantando Ideias',
    type: 'UI/UX · Plataforma',
    description:
      'Plataforma colaborativa para trabalhadores rurais e produtores compartilharem ideias, conhecimentos práticos, cursos e conteúdos técnicos sobre agricultura e sustentabilidade no campo.',
    screens: [
      { src: img('plantando-ideias-home'), label: 'Início' },
      { src: img('plantando-ideias-conteudos'), label: 'Conteúdos' },
      { src: img('plantando-ideias-cursos'), label: 'Cursos' },
      { src: img('plantando-ideias-login'), label: 'Login' },
    ],
  },
  {
    id: 'geek-day',
    spread: { layout: 'spine', color: '#2f4530', images: [{ i: 0, crop: 'tall' }] },
    title: 'Geek Day Workshop',
    type: 'Minicurso · Design web',
    description:
      'Minicurso introdutório sobre os fundamentos do Design Web, com conceitos essenciais para criar interfaces mais funcionais, intuitivas e atrativas. A atividade combinou teoria e demonstração prática, com boas práticas e dicas para aprimorar projetos web.',
    screens: [
      { src: img('geek-day-home'), label: 'Início' },
      { src: img('geek-day-catalogo'), label: 'Catálogo' },
      { src: img('geek-day-pocoes'), label: 'Poções' },
      { src: img('geek-day-ingredientes'), label: 'Ingredientes' },
    ],
  },
]
