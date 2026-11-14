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

export const aboutFacts = [
  {
    icon: 'graduation',
    label: 'Formação',
    value: 'Sistemas de Informação',
    detail: 'Universidade Federal do Piauí (UFPI)',
  },
  {
    icon: 'book',
    label: 'Mestrado · Aluna especial',
    value: 'Ciência da Computação',
    detail: 'Universidade Federal do Piauí (UFPI)',
  },
  {
    icon: 'rocket',
    label: 'Startup',
    value: 'Membro da PathoVision',
    detail: '@pathovision_',
    url: 'https://www.instagram.com/pathovision_/',
  },
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
  { id: 'ai', name: 'IA, Visão & Dados' },
  { id: 'mobile', name: 'Mobile & Desktop' },
  { id: 'tools', name: 'Ferramentas & DevOps' },
]

// Cada tecnologia vira uma carta: logo(s) em src/components/ui/TechLogo.jsx + descrição.
export const technologies = [
  { name: 'React', logos: ['react'], categories: ['front'], description: 'Biblioteca JavaScript para criar interfaces com componentes.' },
  { name: 'Vue.js', logos: ['vue'], categories: ['front'], description: 'Framework progressivo para construir interfaces web reativas.' },
  { name: 'TypeScript', logos: ['typescript'], categories: ['front'], description: 'JavaScript com tipagem estática para um código mais seguro.' },
  { name: 'JavaScript', logos: ['javascript'], categories: ['front'], description: 'A linguagem da web: roda no navegador e no servidor.' },
  { name: 'TailwindCSS', logos: ['tailwind'], categories: ['front'], description: 'Framework CSS de classes utilitárias para estilizar rápido.' },
  { name: 'Quasar', logos: ['quasar'], categories: ['front'], description: 'Framework Vue para apps web, mobile e desktop.' },
  { name: 'HTML5 / CSS3', logos: ['html', 'css'], categories: ['front'], description: 'A estrutura e o estilo de toda página da web.' },
  { name: 'Next.js', logos: ['next'], categories: ['front'], description: 'Framework React com renderização no servidor e rotas.' },
  { name: 'Sass', logos: ['sass'], categories: ['front'], description: 'CSS com variáveis, aninhamento e funções.' },
  { name: 'Radix UI', logos: ['radix'], categories: ['front'], description: 'Componentes acessíveis e sem estilo para React.' },
  { name: 'React Query', logos: ['reactquery'], categories: ['front'], description: 'Busca, cache e sincronização de dados no React.' },
  { name: 'Axios', logos: ['axios'], categories: ['front'], description: 'Cliente HTTP para consumir APIs.' },
  { name: 'Chart.js', logos: ['chartjs'], categories: ['front'], description: 'Gráficos interativos e responsivos para a web.' },
  { name: 'Figma', logos: ['figma'], categories: ['front', 'tools'], description: 'Design colaborativo de interfaces, protótipos e design systems.' },
  { name: 'Python', logos: ['python'], categories: ['back'], description: 'Linguagem versátil para back-end, dados e inteligência artificial.' },
  { name: 'Node.js', logos: ['node'], categories: ['back'], description: 'Ambiente para executar JavaScript no servidor.' },
  { name: 'FastAPI', logos: ['fastapi'], categories: ['back'], description: 'Framework Python moderno e rápido para criar APIs.' },
  { name: 'Flask', logos: ['flask'], categories: ['back'], description: 'Microframework Python leve para aplicações web e APIs.' },
  { name: 'PostgreSQL', logos: ['postgres'], categories: ['back'], description: 'Banco de dados relacional robusto e open source.' },
  { name: 'Docker', logos: ['docker'], categories: ['back', 'tools'], description: 'Empacota aplicações em contêineres que rodam em qualquer lugar.' },
  { name: 'Express', logos: ['express'], categories: ['back'], description: 'Framework minimalista para criar APIs em Node.js.' },
  { name: 'Supabase', logos: ['supabase'], categories: ['back'], description: 'Back-end pronto com Postgres, autenticação e storage.' },
  { name: 'SQLAlchemy', logos: ['sqlalchemy'], categories: ['back'], description: 'ORM Python para trabalhar com bancos SQL.' },
  { name: 'JWT', logos: ['jwt'], categories: ['back'], description: 'Tokens para autenticação segura em APIs.' },
  { name: 'Zod', logos: ['zod'], categories: ['back'], description: 'Validação de dados com tipagem em TypeScript.' },
  { name: 'C', logos: ['c'], categories: ['back'], description: 'Linguagem de baixo nível para estruturas de dados e algoritmos.' },
  { name: 'OpenCV', logos: ['opencv'], categories: ['ai'], description: 'Biblioteca de visão computacional e análise de imagens.' },
  { name: 'PyTorch', logos: ['pytorch'], categories: ['ai'], description: 'Framework de deep learning para treinar redes neurais.' },
  { name: 'Deep Learning', logos: ['neural'], categories: ['ai'], description: 'Redes neurais (CNNs) que aprendem padrões em imagens.' },
  { name: 'Proc. de Imagens', logos: ['image'], categories: ['ai'], description: 'Técnicas para tratar, filtrar e analisar imagens digitais.' },
  { name: 'Scikit-learn', logos: ['sklearn'], categories: ['ai'], description: 'Machine learning: classificação, regressão e mais.' },
  { name: 'Pandas', logos: ['pandas'], categories: ['ai'], description: 'Manipulação e análise de dados em tabelas.' },
  { name: 'NumPy', logos: ['numpy'], categories: ['ai'], description: 'Computação numérica com arrays em Python.' },
  { name: 'Matplotlib', logos: ['charts'], categories: ['ai'], description: 'Gráficos e visualização de dados, junto com Seaborn.' },
  { name: 'Jupyter', logos: ['jupyter'], categories: ['ai', 'tools'], description: 'Notebooks para análises e pesquisa.' },
  { name: 'Kotlin + Android', logos: ['kotlin', 'android'], categories: ['mobile'], description: 'Apps Android nativos com Kotlin e Jetpack Compose.' },
  { name: 'PyQt5', logos: ['qt'], categories: ['mobile'], description: 'Interfaces desktop em Python com o framework Qt.' },
  { name: 'Git & GitHub', logos: ['git', 'github'], categories: ['tools'], description: 'Controle de versão e colaboração em código.' },
  { name: 'Vite', logos: ['vite'], categories: ['tools'], description: 'Build e servidor de desenvolvimento ultrarrápidos.' },
  { name: 'Testes', logos: ['jest', 'vitest', 'pytest'], categories: ['tools'], description: 'Testes automatizados com Jest, Vitest e Pytest.' },
  { name: 'Locust', logos: ['locust'], categories: ['tools'], description: 'Testes de carga para medir o desempenho de sistemas.' },
]

export const experiences = [
  { title: 'Gerente de Projeto', company: 'IAtrain', period: 'out. 2026 — atual' },
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
