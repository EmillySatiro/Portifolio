// Projetos (levantados dos repositórios do GitHub: os seus e os de colegas em que você contribuiu).
// Logos: chaves de src/components/ui/TechLogo.jsx. Imagens: public/images/projects/.

const gh = (path) => `https://github.com/${path}`

export const projectCategories = [
  { id: 'web', name: 'Web & Full Stack' },
  { id: 'ai', name: 'IA & Dados' },
  { id: 'systems', name: 'Sistemas Distribuídos' },
  { id: 'mobile', name: 'Mobile' },
]

// Projeto em destaque
export const featuredProject = {
  name: 'PREMAUT',
  subtitle: 'Projeto de Extensão de Atividades Motoras para Pessoas com Autismo · UFPI',
  badges: ['Produto patenteado', 'Coautora'],
  role: 'Líder de Projeto, Desenvolvedora Full Stack e UI/UX Designer',
  period: 'mar. 2026 — atual',
  site: 'https://premaut.ufpi.br/',
  description:
    'Plataforma que informatiza a gestão do projeto: organiza os dados dos alunos, centraliza relatórios e facilita a comunicação entre monitores, professores e familiares.',
  highlights: [
    'Do levantamento de requisitos à implantação em servidor privado, atuando como ponte entre o cliente e a equipe.',
    'Front-end em React e TypeScript e API REST em FastAPI com PostgreSQL, em ambientes Docker de desenvolvimento e produção.',
    'Protótipos e fluxos de navegação no Figma antes da implementação das telas.',
    'Usuários, participantes, relatórios, feedbacks, publicações, eventos, documentos e vínculo de monitores.',
  ],
  images: [
    { src: '/images/projects/premaut-site.webp', label: 'Site', alt: 'Página inicial do site do PREMAUT' },
    { src: '/images/projects/premaut-painel.webp', label: 'Painel', alt: 'Painel de gestão de participantes do PREMAUT' },
  ],
  phases: [
    {
      name: 'Primeira versão',
      detail: 'Next.js no front-end, Express e Supabase no back-end.',
      logos: ['next', 'express', 'supabase'],
    },
    {
      name: 'Versão atual',
      detail: 'React + Vite no front-end, FastAPI no back-end, PostgreSQL e Docker.',
      logos: ['react', 'typescript', 'fastapi', 'postgres', 'docker'],
    },
  ],
}

export const projects = [
  {
    name: 'Patocast',
    category: 'web',
    year: '2024',
    role: 'Full Stack',
    description:
      'Gestão financeira pessoal com transações, metas e relatórios. Front-end em Node.js, Express e Nunjucks com gráficos em Chart.js; API em Flask com PostgreSQL, tudo em Docker.',
    logos: ['node', 'express', 'flask', 'postgres', 'chartjs', 'docker'],
    image: '/images/projects/patocast.webp',
    links: [{ type: 'github', url: gh('EmillySatiro/PATOCAST_DESENVOLVIMENTO_WEB') }],
  },
  {
    name: 'BibSys',
    category: 'web',
    year: '2025',
    role: 'Full Stack',
    description:
      'Sistema de gerenciamento de livros com login, cadastro, listagem e edição. Vue 3 + Vite no front-end e Node.js com Express e Supabase no back-end.',
    logos: ['vue', 'vite', 'express', 'supabase', 'axios'],
    image: '/images/projects/bibsys.webp',
    links: [
      { type: 'github', url: gh('EmillySatiro/BibSys') },
      { type: 'video', url: 'https://youtu.be/mx-tETQuVcU' },
    ],
  },
  {
    name: 'Beiramar',
    category: 'systems',
    year: '2025',
    role: 'Colaboração',
    owner: 'JonasCGN',
    description:
      'Automação das vendas de um restaurante em Python orientado a objetos, com sincronização cliente–servidor, envio de e-mails e PostgreSQL. Projeto final de POO II.',
    logos: ['python', 'postgres', 'docker'],
    image: '/images/projects/beiramar.webp',
    imagePosition: 'left top',
    links: [{ type: 'github', url: gh('JonasCGN/Projeto-Final-POO-II') }],
  },
  {
    name: 'SimulNet',
    category: 'systems',
    year: '2025',
    role: 'Autora',
    description:
      'Simulação de topologias de rede com Docker: roteadores trocam pacotes Hello e LSA e mantêm tabelas de roteamento com o algoritmo de Dijkstra.',
    logos: ['docker', 'python', 'bash'],
    image: '/images/projects/simulnet.webp',
    links: [{ type: 'github', url: gh('EmillySatiro/SimulNet_Docker') }],
  },
  {
    name: 'PetClinic sob carga',
    category: 'systems',
    year: '2025',
    role: 'Autora',
    description:
      'Testes de carga automatizados com Locust nos microsserviços do Spring PetClinic, simulando diferentes níveis de usuários e salvando os resultados.',
    logos: ['locust', 'python', 'docker'],
    image: '/images/projects/petclinic.webp',
    links: [
      { type: 'github', url: gh('EmillySatiro/PetclinicSYS') },
      { type: 'video', url: 'https://youtu.be/MbJSzSjjFMI' },
      { type: 'report', url: 'https://www.overleaf.com/read/zydvxzhqfcmd#2b7684' },
    ],
  },
  {
    name: 'IASys',
    category: 'systems',
    year: '2025',
    role: 'Colaboração',
    owner: 'Malujoro',
    description:
      'Sistema distribuído em containers: um gerador de mensagens publica no RabbitMQ e dois consumidores com IA (Smile) analisam rostos e brasões de times.',
    logos: ['java', 'rabbitmq', 'docker'],
    // Sem imagens no repositório: mostra uma "foto" do próprio repositório (arquivos reais)
    repoPreview: {
      repo: 'Malujoro/IASys',
      files: ['Dataset_aliens/', 'Dataset_times/', 'consumerFace/', 'consumerTeam/', 'messageGenerator/', 'docker-compose.yml', 'README.md'],
      language: { name: 'Java', color: '#b07219' },
    },
    links: [
      { type: 'github', url: gh('Malujoro/IASys') },
      { type: 'video', url: 'https://youtu.be/6OCJDhu0gUk' },
    ],
  },
  {
    name: 'VideoSys',
    category: 'systems',
    year: '2025',
    role: 'Colaboração',
    owner: 'alefCauan',
    description:
      'Cliente em Tkinter e servidor para processar vídeos com filtros (cinza, bordas e pixel), com prévia e histórico dos processamentos.',
    logos: ['python', 'sqlite'],
    image: '/images/projects/videosys.webp',
    links: [{ type: 'github', url: gh('alefCauan/VideoSys') }],
  },
  {
    name: 'TextSys',
    category: 'systems',
    year: '2025',
    role: 'Colaboração',
    owner: 'alefCauan',
    description:
      'Arquitetura mestre–escravo em C++17 com threads e containers: o mestre distribui a contagem de letras e números entre dois servidores escravos.',
    logos: ['cpp', 'docker'],
    image: '/images/projects/textsys.webp',
    links: [{ type: 'github', url: gh('alefCauan/TextSys') }],
  },
  {
    name: 'Foto Android',
    category: 'mobile',
    year: '2025',
    role: 'Autora',
    description:
      'App Android em Kotlin com Jetpack Compose que tira fotos e envia para um servidor TCP em Python, que salva as imagens recebidas.',
    logos: ['kotlin', 'android', 'python'],
    image: '/images/projects/foto-android.webp',
    links: [{ type: 'github', url: gh('EmillySatiro/Foto-android') }],
  },
  {
    name: 'CNNs para Leishmaniose',
    category: 'ai',
    year: '2024 — atual',
    role: 'Pesquisa · PIBIC',
    description:
      'Redes Neurais Convolucionais e pipelines de pré-processamento para classificar macrófagos infectados por Leishmania Visceral Canina em imagens de medula óssea.',
    logos: ['python', 'pytorch', 'opencv'],
    links: [{ type: 'research', url: '/pesquisa' }],
  },
  {
    name: 'ID3 · Câncer de mama',
    category: 'ai',
    year: '2025',
    role: 'Autora',
    description:
      'Árvore de decisão ID3 (entropia) que classifica tumores de mama do dataset Wisconsin como benignos ou malignos, com validação de desempenho.',
    logos: ['python', 'sklearn', 'pandas', 'jupyter'],
    image: '/images/projects/id3.webp',
    links: [{ type: 'github', url: gh('EmillySatiro/id3breastcancer') }],
  },
  {
    name: 'MLP × SVM',
    category: 'ai',
    year: '2025',
    role: 'Autora',
    description: 'Comparação entre MLP e SVM no dataset Sonar, com e sem redução de dimensionalidade por PCA.',
    logos: ['python', 'sklearn', 'jupyter'],
    image: '/images/projects/mlp-svm.webp',
    links: [{ type: 'github', url: gh('EmillySatiro/avaliacao-mlp-svm-sonar') }],
  },
  {
    name: 'Random Forest · Madelon',
    category: 'ai',
    year: '2025',
    role: 'Autora',
    description:
      'Random Forest e técnicas de ensemble no dataset Madelon: 500 atributos, dos quais só 20 são informativos.',
    logos: ['python', 'sklearn', 'pandas', 'jupyter'],
    repoPreview: {
      repo: 'EmillySatiro/Madelon-RandomForest-Classification',
      files: ['dataset/', 'madelon.zip', 'main.ipynb', 'README.md'],
      language: { name: 'Jupyter Notebook', color: '#DA5B0B' },
    },
    links: [{ type: 'github', url: gh('EmillySatiro/Madelon-RandomForest-Classification') }],
  },
]

// Trabalhos acadêmicos menores (lista compacta)
export const archive = [
  { name: 'Árvores 2-3 e Rubro-Negra', topic: 'Estruturas de Dados', lang: 'C', url: gh('EmillySatiro/Balanced_Trees-_2-3_-_Red-Black_Implementation') },
  { name: 'Árvore Binária × AVL', topic: 'Estruturas de Dados', lang: 'C', url: gh('EmillySatiro/Comparative_Study-_Binary-_Search_Trees_-_AVL_Trees') },
  { name: 'Insertion × Cocktail Shaker Sort', topic: 'Algoritmos', lang: 'C', url: gh('EmillySatiro/Analise-comparativa-algoritmos-de-ordenacao') },
  { name: 'Problema da Mochila', topic: 'Projeto e Análise de Algoritmos', lang: 'Python', url: gh('EmillySatiro/Problema-da-mochila-paa') },
  { name: 'Algoritmo de Kahn', topic: 'Projeto e Análise de Algoritmos', lang: 'Python', owner: 'gabreudev', url: gh('gabreudev/kahn-algorithm-paa') },
  { name: 'Edição de imagens com histórico', topic: 'Estruturas de Dados', lang: 'C', owner: 'JonasCGN', url: gh('JonasCGN/Trabalho_ED_Filtro') },
  { name: 'Redução de Dimensionalidade · UCI HAR', topic: 'Sistemas Inteligentes', lang: 'Jupyter', url: gh('EmillySatiro/Redu-o-de-Dimensionalidade-na-Base-UCI-HAR') },
  { name: 'Naive Bayes', topic: 'Sistemas Inteligentes', lang: 'Jupyter', url: gh('EmillySatiro/ATIVIDADE_SI_NAIVEBAYES') },
  { name: 'Interfaces em PyQt5', topic: 'Interfaces gráficas', lang: 'Python', url: gh('EmillySatiro/Interfaces-em-python') },
  { name: 'Criação de Personagens de RPG', topic: 'Programação Funcional', lang: 'Haskell', owner: 'JonasCGN', url: gh('JonasCGN/Sistema-de-Cria-o-de-Personagens-de-RPG-') },
]

export const githubProfile = gh('EmillySatiro')
