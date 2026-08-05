export const navItems = [
  { name: 'Início', to: { path: '/', hash: '#home' } },
  { name: 'Sobre', to: { path: '/', hash: '#about' } },
  { name: 'Currículo', to: { path: '/', hash: '#curriculum' } },
  { name: 'Projetos de TI', to: '/projetos' },
  { name: 'Designer', to: '/designer' },
  { name: 'Pesquisa', to: '/pesquisa' },
  { name: 'Contato', to: { path: '/', hash: '#contact' } },
]

export const stats = [
  { number: '4+', label: 'Anos de experiência', subtext: 'Desenvolvimento e Pesquisa' },
  { number: '20+', label: 'Projetos concluídos', subtext: 'Web, Mobile, IA e Design' },
  { number: '25+', label: 'Tecnologias aplicadas', subtext: 'Front-end, Back-end & ML' },
  { number: '3+', label: 'Publicações acadêmicas', subtext: 'CNPq, FAPEPI & Congressos' },
]

export const researchTimeline = [
  {
    period: '2024 — ATUAL',
    badge: 'CNPq / FAPEPI · Iniciação Científica',
    title: 'Classificação e Contagem Automática de Leishmaniose Visceral Canina',
    institution: 'Universidade Federal do Piauí (UFPI) · Campus Picos',
    narrative:
      'Pesquisa focada no desenvolvimento de um sistema computacional baseado em Deep Learning e Redes Neurais Convolucionais (CNNs) para automatizar a detecção, segmentação e contagem de parasitas em imagens microscópicas. O objetivo central é otimizar a precisão diagnóstica direta na saúde pública.',
    metrics: [
      { value: 'CNNs', label: 'Arquitetura de Deep Learning' },
      { value: 'CNPq/FAPEPI', label: 'Financiamento Científico' },
      { value: 'Microscopia', label: 'Processamento de Imagens' },
    ],
    techs: ['Python', 'PyTorch', 'OpenCV', 'Scikit-learn', 'Microscopia Digital'],
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=80',
  },
  {
    period: '2024',
    badge: 'Pesquisa Aplicada · IA no Agronegócio',
    title: 'Monitoramento de Ruminantes por Visão Computacional no Semiárido',
    institution: 'UFPI · Laboratório de Inteligência Artificial Aplicada',
    narrative:
      'Desenvolvimento de uma solução tecnológica voltada ao agronegócio inteligente para rastreamento, identificação e análise comportamental de pequenos ruminantes utilizando imagens bidimensionais de baixo custo no semiárido.',
    metrics: [
      { value: '2D Vision', label: 'Câmeras de Baixo Custo' },
      { value: 'IA no Agro', label: 'Monitoramento Sanitário' },
    ],
    techs: ['Python', 'OpenCV', 'YOLO', 'Rastreamento de Objetos'],
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=80',
  },
]

export const publicationsTimeline = [
  {
    year: '2024',
    venue: 'Anais do Congresso de Iniciação Científica',
    title: 'Detecção Computacional de Parasitas Leishmania em Imagens Microscópicas utilizando Redes Convolucionais',
    authors: 'SÁTIRO, C. E. S., et al.',
    link: 'https://scholar.google.com/citations?user=e_URIYQAAAAJ',
  },
  {
    year: '2024',
    venue: 'Simpósio de IA & Saúde no Semiárido',
    title: 'Visão Computacional Aplicada ao Monitoramento Comportamental Animal no Semiárido Piauiense',
    authors: 'SÁTIRO, C. E. S., et al.',
    link: 'https://scholar.google.com/citations?user=e_URIYQAAAAJ',
  },
]

export const academicWorkshops = [
  {
    title: 'Minicurso: Prototipação de Alta Fidelidade no Figma & UI/UX',
    event: 'Semana de Tecnologia UFPI · Picos PI',
    period: '2024',
    description: 'Instrução prática sobre criação de design systems, componentes reutilizáveis, auto-layout e prototipação navegável para estudantes de tecnologia.',
    tags: ['Figma', 'UI/UX', 'Design Systems'],
  },
  {
    title: 'Minicursos e Palestras em Visão Computacional',
    event: 'UFPI · Saúde, Biotecnologia & Tecnologia',
    period: '2024',
    description: 'Atuação acadêmica com minicursos e palestras sobre visão computacional aplicada à saúde, biotecnologia e inteligência artificial.',
    tags: ['Python', 'OpenCV', 'Machine Learning', 'Jupyter'],
  },
]

export const categorizedTechnologies = [
  {
    category: 'Front-end & UI',
    description: 'Criação de interfaces modernas, reativas e responsivas.',
    skills: [
      { name: 'Vue.js', level: 'Avançado', icon: 'Code2' },
      { name: 'JavaScript (ES6+)', level: 'Avançado', icon: 'FileCode' },
      { name: 'TypeScript', level: 'Intermediário', icon: 'Code' },
      { name: 'HTML5 / CSS3', level: 'Avançado', icon: 'Layout' },
      { name: 'TailwindCSS', level: 'Avançado', icon: 'Palette' },
      { name: 'React', level: 'Intermediário', icon: 'Atom' },
      { name: 'Quasar Framework', level: 'Intermediário', icon: 'Layers' },
    ],
  },
  {
    category: 'Back-end & Banco de Dados',
    description: 'Construção de APIs escaláveis, regras de negócio e persistência.',
    skills: [
      { name: 'Node.js', level: 'Avançado', icon: 'Server' },
      { name: 'Express.js', level: 'Avançado', icon: 'Cpu' },
      { name: 'Python', level: 'Avançado', icon: 'Terminal' },
      { name: 'FastAPI', level: 'Intermediário', icon: 'Zap' },
      { name: 'PostgreSQL', level: 'Intermediário', icon: 'Database' },
      { name: 'SQLite', level: 'Avançado', icon: 'Database' },
      { name: 'Firebase', level: 'Intermediário', icon: 'Flame' },
    ],
  },
  {
    category: 'IA & Visão Computacional',
    description: 'Pesquisa acadêmica e aplicação prática de Machine Learning.',
    skills: [
      { name: 'PyTorch', level: 'Pesquisadora', icon: 'Brain' },
      { name: 'OpenCV', level: 'Avançado', icon: 'Eye' },
      { name: 'Scikit-learn', level: 'Avançado', icon: 'Binary' },
      { name: 'Deep Learning', level: 'Pesquisadora', icon: 'Sparkles' },
      { name: 'Jupyter Notebook', level: 'Avançado', icon: 'BookOpen' },
    ],
  },
  {
    category: 'DevOps & Ferramentas',
    description: 'Containerização, controle de versão e deploy.',
    skills: [
      { name: 'Git & GitHub', level: 'Avançado', icon: 'GitBranch' },
      { name: 'Docker', level: 'Intermediário', icon: 'Box' },
      { name: 'Vercel', level: 'Avançado', icon: 'Cloud' },
      { name: 'VPS / Linux', level: 'Intermediário', icon: 'HardDrive' },
    ],
  },
  {
    category: 'UI/UX & Design',
    description: 'Arquitetura de informação, prototipação e identidade visual.',
    skills: [
      { name: 'Figma', level: 'Avançado', icon: 'Figma' },
      { name: 'Prototipação Interativa', level: 'Avançado', icon: 'PenTool' },
      { name: 'Análise de Requisitos', level: 'Avançado', icon: 'FileText' },
      { name: 'Design Systems', level: 'Intermediário', icon: 'Grid' },
      { name: 'Canva', level: 'Avançado', icon: 'Image' },
    ],
  },
]

export const itProjects = [
  {
    id: 'premaut',
    name: 'Projeto PREMAUT',
    subtitle: 'Plataforma Integrada de Gestão e Monitoramento Autônomo',
    type: 'Full Stack & UI/UX',
    category: 'Full Stack',
    featured: true,
    symbol: '⚡',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    description:
      'Gestão principal do projeto, contato direto com cliente, prototipação no Figma, engenharia de requisitos, arquitetura de sistemas e desenvolvimento full stack.',
    longDescription:
      'O PREMAUT é uma solução completa desenvolvida para automatizar processos de gestão. Contempla desde a concepção de telas no Figma com alta fidelidade até a implementação da API REST e interface web responsiva.',
    technologies: ['Vue.js', 'Node.js', 'Express', 'PostgreSQL', 'Figma', 'Docker'],
    github: 'https://github.com/EmillySatiro',
    demo: '',
    figma: 'https://figma.com',
    video: '',
    badges: ['Destaque', 'Gestão Principal', 'Full Stack'],
    items: ['Full stack', 'UI/UX', 'Requisitos', 'Arquitetura'],
  },
  {
    id: 'jua',
    name: 'Site da Juá',
    subtitle: 'Redesign e Prototipação para Empresa Júnior',
    type: 'UI/UX & Front-end',
    category: 'Front-end',
    featured: true,
    symbol: '🌿',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    description:
      'Participação ativa na equipe de design do site da empresa júnior, da análise de requisitos ao protótipo final e sistema de componentes.',
    longDescription:
      'Projeto focado em alinhar a proposta de valor da empresa júnior a uma experiência visual fluida e moderna. Envolveu pesquisa de usuários, mapa do site, wireframes e handoff para os desenvolvedores.',
    technologies: ['Figma', 'UI/UX', 'HTML/CSS', 'JavaScript', 'Identidade Visual'],
    github: 'https://github.com/EmillySatiro',
    demo: '',
    figma: 'https://figma.com',
    video: '',
    badges: ['Empresa Júnior', 'UI/UX Design'],
    items: ['Figma', 'Fluxos', 'Identidade visual', 'Prototipação'],
  },
  {
    id: 'patocast',
    name: 'Patocast',
    subtitle: 'Plataforma Web de Gestão Financeira Pessoal',
    type: 'Web App Full Stack',
    category: 'Full Stack',
    featured: true,
    symbol: '🦆',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Aplicação web acadêmica para gerenciamento financeiro pessoal, com interface, back-end, banco de dados e ambiente Docker.',
    longDescription:
      'Desenvolvido para simplificar o planejamento orçamentário diário. Conta com gráficos interativos de despesas, categorização automática de contas e suporte a múltiplos usuários.',
    technologies: ['Vue.js', 'Node.js', 'SQLite', 'Docker', 'TailwindCSS'],
    github: 'https://github.com/EmillySatiro',
    demo: '',
    figma: '',
    video: '',
    badges: ['Acadêmico', 'Docker', 'Financeiro'],
    items: ['Front-end', 'Back-end', 'Banco de dados', 'Docker'],
  },
  {
    id: 'leishmaniose-ia',
    name: 'Visão Computacional & IA na Saúde',
    subtitle: 'Detecção e Classificação de Leishmaniose Canina',
    type: 'Pesquisa em IA & Visão Computacional',
    category: 'IA & Pesquisa',
    featured: true,
    symbol: '🔬',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=80',
    description:
      'Atuação acadêmica com minicursos, palestras e pesquisas sobre visão computacional aplicada à saúde, biotecnologia e tecnologia (CNPq/FAPEPI).',
    longDescription:
      'Iniciativa acadêmica de ponta voltada à saúde pública. Utiliza bibliotecas Python como PyTorch e OpenCV para segmentar e contar parasitas em lâminas microscópicas com alta precisão.',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'Deep Learning', 'Jupyter Notebook'],
    github: 'https://github.com/EmillySatiro',
    demo: '',
    figma: '',
    video: '',
    badges: ['CNPq', 'FAPEPI', 'Deep Learning'],
    items: ['Python', 'OpenCV', 'Machine Learning', 'Jupyter'],
  },
  {
    id: 'template-projetos-futuros',
    name: 'Template de Projeto Futuro (TI)',
    subtitle: 'Modelo pronto para inclusão de novos sistemas e aplicações',
    type: 'Full Stack / API / Mobile',
    category: 'Full Stack',
    featured: false,
    symbol: '🚀',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    description:
      'Template pré-configurado contendo estrutura para imagens, descrições detalhadas, stack de tecnologias, repositório GitHub, protótipo Figma e suporte a vídeos.',
    longDescription:
      'Este card serve como modelo padrão reutilizável. Basta preencher as propriedades do objeto em src/data/portfolio.js para publicar um novo projeto com selos, badges e modal interativo.',
    technologies: ['Vue 3', 'TypeScript', 'Node.js', 'Docker', 'FastAPI'],
    github: 'https://github.com/EmillySatiro',
    demo: 'https://example.com',
    figma: 'https://figma.com',
    video: 'https://youtube.com',
    badges: ['Template Ready', 'Novo Projeto'],
    items: ['Tecnologias', 'GitHub', 'Figma', 'Demo Live'],
  },
]

export const designProjects = [
  {
    id: 'design-system-jua',
    title: 'Design System & UI Kit Juá',
    category: 'UI/UX Case Study',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
    description:
      'Criação do sistema de design abrangendo guias de estilo, biblioteca de componentes no Figma, tokens de cor e tipografia responsiva.',
    tools: ['Figma', 'UI/UX', 'Design System', 'Tokens'],
    figmaUrl: 'https://figma.com',
    behanceUrl: '',
    highlights: ['Componentes Reutilizáveis', 'Acessibilidade WCAG', 'Documentação de Handoff'],
  },
  {
    id: 'premaut-ui',
    title: 'Prototipação de Alta Fidelidade - PREMAUT',
    category: 'Protótipos Figma',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    description:
      'Desenvolvimento de fluxos complexos de navegação, dashboards analíticos e testes de usabilidade com usuários finais.',
    tools: ['Figma', 'User Research', 'Wireframing', 'Interactive Prototype'],
    figmaUrl: 'https://figma.com',
    behanceUrl: '',
    highlights: ['Dark & Light Mode', 'Dashboard Analítico', 'Wireframes de Baixa e Alta Fidelidade'],
  },
  {
    id: 'identidade-posters-academicos',
    title: 'Identidade Visual & Comunicação Científica',
    category: 'Comunicação Visual',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80',
    description:
      'Elaboração de peças visuais, flyers, materiais gráficos e apresentações para eventos acadêmicos, minicursos e divulgação tecnológica.',
    tools: ['Canva', 'Figma', 'Branding', 'Photoshop'],
    figmaUrl: 'https://figma.com',
    behanceUrl: '',
    highlights: ['Diagramação Editorial', 'Visualização de Dados', 'Posters Científicos'],
  },
  {
    id: 'template-design-futuro',
    title: 'Template de Projeto de Design (UI/UX)',
    category: 'Template UI/UX',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
    description:
      'Modelo reservado para futuros estudos de caso, wireframes, protótipos navegáveis no Figma e projetos de branding.',
    tools: ['Figma', 'Prototipação', 'UI/UX', 'Design Sprint'],
    figmaUrl: 'https://figma.com',
    behanceUrl: 'https://behance.net',
    highlights: ['Protótipo Navegável', 'Guia de Cores', 'Badges Customizadas'],
  },
]

export const contactMethods = [
  {
    title: 'Email',
    detail: 'sousasatiroclaraemilly@gmail.com',
    link: 'mailto:sousasatiroclaraemilly@gmail.com',
    icon: 'Mail',
  },
  {
    title: 'LinkedIn',
    detail: 'linkedin.com/in/emilly-sátiro',
    link: 'https://www.linkedin.com/in/emilly-s%C3%A1tiro-94912a369/',
    icon: 'Linkedin',
  },
  {
    title: 'GitHub',
    detail: 'github.com/EmillySatiro',
    link: 'https://github.com/EmillySatiro',
    icon: 'Github',
  },
]
