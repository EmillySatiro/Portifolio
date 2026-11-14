// Conteúdo do portfólio. Edite aqui para atualizar textos, links e experiências.

export const profile = {
  name: 'Emílly Sátiro',
  firstName: 'Emílly',
  lastName: 'Sátiro',
  fullName: 'Clara Emílly Sousa Sátiro',
  year: '2026',
}

// Arte em pixel art usada no topo da página (fundo transparente).
export const avatar = {
  src: '/images/avatar-900.webp',
  srcSet: '/images/avatar-480.webp 480w, /images/avatar-900.webp 900w',
  width: 900,
  height: 1051,
  alt: 'Ilustração em pixel art de Emílly Sátiro, de óculos e cabelo azul',
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

export const aboutFacts = [
  { icon: 'user', label: 'Nome', value: 'Clara Emílly Sousa Sátiro' },
  { icon: 'graduation', label: 'Formação', value: 'Sistemas de Informação · UFPI' },
  { icon: 'pin', label: 'Local', value: 'Picos · PI' },
]

export const socials = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com/EmillySatiro' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/emilly-s%C3%A1tiro-94912a369/' },
]

export const contactMethods = [
  {
    title: 'Email',
    icon: 'mail',
    detail: 'sousasatiroclaraemilly@gmail.com',
    link: 'mailto:sousasatiroclaraemilly@gmail.com',
  },
  {
    title: 'LinkedIn',
    icon: 'linkedin',
    detail: 'linkedin.com/in/emilly-sátiro',
    link: 'https://www.linkedin.com/in/emilly-s%C3%A1tiro-94912a369/',
  },
  {
    title: 'GitHub',
    icon: 'github',
    detail: 'github.com/EmillySatiro',
    link: 'https://github.com/EmillySatiro',
  },
]

export const formspreeEndpoint = 'https://formspree.io/f/mpwjkpen'

// Categorias de tecnologias (os filtros da seção "Tecnologias").
export const techCategories = [
  { id: 'front', name: 'Front-end & UI' },
  { id: 'back', name: 'Back-end & DB' },
  { id: 'ai', name: 'IA & Visão Computacional' },
  { id: 'tools', name: 'Ferramentas & DevOps' },
]

// Cada tecnologia vira um "elemento" da tabela: símbolo de 2 letras + categorias.
export const technologies = [
  { name: 'React', symbol: 'Re', categories: ['front'] },
  { name: 'Vue.js', symbol: 'Vu', categories: ['front'] },
  { name: 'TypeScript', symbol: 'Ts', categories: ['front'] },
  { name: 'JavaScript', symbol: 'Js', categories: ['front'] },
  { name: 'TailwindCSS', symbol: 'Tw', categories: ['front'] },
  { name: 'Quasar Framework', symbol: 'Qs', categories: ['front'] },
  { name: 'HTML5 / CSS3', symbol: 'Hc', categories: ['front'] },
  { name: 'Figma', symbol: 'Fg', categories: ['front', 'tools'] },
  { name: 'Python', symbol: 'Py', categories: ['back'] },
  { name: 'Node.js', symbol: 'No', categories: ['back'] },
  { name: 'FastAPI', symbol: 'Fa', categories: ['back'] },
  { name: 'Flask', symbol: 'Fl', categories: ['back'] },
  { name: 'PostgreSQL', symbol: 'Pg', categories: ['back'] },
  { name: 'Docker', symbol: 'Dk', categories: ['back', 'tools'] },
  { name: 'OpenCV', symbol: 'Cv', categories: ['ai'] },
  { name: 'PyTorch', symbol: 'Pt', categories: ['ai'] },
  { name: 'Deep Learning (CNNs)', symbol: 'Dl', categories: ['ai'] },
  { name: 'Processamento de Imagens', symbol: 'Pi', categories: ['ai'] },
  { name: 'Git & GitHub', symbol: 'Gh', categories: ['tools'] },
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
    label: 'Português',
    detail: 'PDF · PT-BR',
    flag: '🇧🇷',
    href: '/Curriculo_formatado_PT.pdf',
    download: 'Curriculo_Emilly_Satiro_PT.pdf',
  },
  {
    label: 'English',
    detail: 'PDF · EN-US',
    flag: '🇺🇸',
    href: '/Curriculo_formatado_ingles.pdf',
    download: 'Resume_Emilly_Satiro_EN.pdf',
  },
]

export const researchLinks = [
  { name: 'Google Acadêmico', url: 'https://scholar.google.com/citations?user=e_URIYQAAAAJ' },
  { name: 'Currículo Lattes (CNPq)', url: 'http://lattes.cnpq.br' },
]
