// Conteúdo do portfólio. Edite aqui para atualizar textos, links e experiências.

export const profile = {
  firstName: 'Emílly',
  lastName: 'Sátiro',
  fullName: 'Clara Emílly Sousa Sátiro',
  location: 'Picos · PI',
  year: '2026',
}

export const photo = {
  src: '/images/foto-1200.webp',
  srcSet: '/images/foto-640.webp 640w, /images/foto-1200.webp 1200w',
  width: 1200,
  height: 882,
}

export const navItems = [
  { id: 'home', name: 'Início', to: '/#home' },
  { id: 'about', name: 'Sobre', to: '/#about' },
  { id: 'curriculum', name: 'Currículo', to: '/#curriculum' },
  { id: 'projects', name: 'Projetos', to: '/projetos' },
  { id: 'designer', name: 'Designer', to: '/designer' },
  { id: 'research', name: 'Pesquisa', to: '/pesquisa' },
  { id: 'contact', name: 'Contato', to: '/#contact' },
]

export const roles = [
  'Pesquisadora em Visão Computacional',
  'Desenvolvedora Front-end',
  'Desenvolvedora Full Stack',
  'UI/UX Designer',
  'UI/UX & Prototipação',
]

export const focusAreas = ['Full Stack Development', 'Computer Vision', 'Machine Learning', 'Software Developer']

export const socials = [
  { name: 'GitHub', url: 'https://github.com/EmillySatiro' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/emilly-s%C3%A1tiro-94912a369/' },
]

export const contactMethods = [
  {
    title: 'Email',
    detail: 'sousasatiroclaraemilly@gmail.com',
    link: 'mailto:sousasatiroclaraemilly@gmail.com',
  },
  {
    title: 'LinkedIn',
    detail: 'linkedin.com/in/emilly-sátiro',
    link: 'https://www.linkedin.com/in/emilly-s%C3%A1tiro-94912a369/',
  },
  {
    title: 'GitHub',
    detail: 'github.com/EmillySatiro',
    link: 'https://github.com/EmillySatiro',
  },
]

export const formspreeEndpoint = 'https://formspree.io/f/mpwjkpen'

export const techCategories = [
  {
    name: 'Todas',
    techs: [
      'React',
      'Vue.js',
      'TypeScript',
      'JavaScript',
      'Python',
      'Node.js',
      'FastAPI',
      'Flask',
      'PostgreSQL',
      'TailwindCSS',
      'Docker',
      'OpenCV',
      'PyTorch',
      'Git & GitHub',
      'Quasar Framework',
      'HTML5 / CSS3',
      'Figma',
    ],
  },
  {
    name: 'Front-end & UI',
    techs: ['React', 'Vue.js', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Quasar Framework', 'HTML5 / CSS3', 'Figma'],
  },
  {
    name: 'Back-end & DB',
    techs: ['Node.js', 'Python', 'FastAPI', 'Flask', 'PostgreSQL', 'Docker'],
  },
  {
    name: 'IA & Visão Computacional',
    techs: ['OpenCV', 'PyTorch', 'Deep Learning (CNNs)', 'Processamento de Imagens'],
  },
  {
    name: 'Ferramentas & DevOps',
    techs: ['Git & GitHub', 'Docker', 'Figma'],
  },
]

export const experiences = [
  { title: 'Desenvolvedora Front-end', company: 'IAtrain · Estágio Remoto', period: 'mar. 2026 — jun. 2026' },
  { title: 'Coautora & Dev Full Stack', company: 'Sistema PREMAUT (UFPI)', period: 'mar. 2026 — atual' },
  { title: 'UI/UX Designer', company: 'Projeto SINFO 2026 (UFPI)', period: 'mar. 2026 — jun. 2026' },
  { title: 'Diretora de Marketing & Front-end', company: 'Juá Soluções em Tecnologia', period: 'mai. 2025 — atual' },
  { title: 'UI/UX Designer', company: 'Site Institucional Juá', period: 'mar. 2025 — ago. 2025' },
  { title: 'Diretora de Ensino', company: 'Liga Acadêmica de SI (LADS)', period: 'abr. 2025 — mai. 2026' },
  { title: 'Desenvolvedora Full Stack', company: 'Projeto Patocast (UFPI)', period: 'jun. 2024' },
]

export const openForHire = {
  title: 'Desenvolvedora Full Stack & UI/UX',
  company: 'Emilly Sátiro · Open for Hire',
  period: '2026 — ∞',
  status: 'Disponível para contratação!',
  message: 'Vamos criar algo incrível juntos? ✨',
}

export const cvFiles = [
  {
    label: 'Versão em Português',
    detail: 'PDF · PT-BR',
    href: '/Curriculo_formatado_PT.pdf',
    download: 'Curriculo_Emilly_Satiro_PT.pdf',
  },
  {
    label: 'English Version',
    detail: 'PDF · EN-US',
    href: '/Curriculo_formatado_ingles.pdf',
    download: 'Resume_Emilly_Satiro_EN.pdf',
  },
]

export const researchLinks = [
  { name: 'Google Acadêmico', url: 'https://scholar.google.com/citations?user=e_URIYQAAAAJ' },
  { name: 'Currículo Lattes (CNPq)', url: 'http://lattes.cnpq.br' },
]
