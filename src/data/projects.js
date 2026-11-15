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
  period: 'mar. 2026 — jun. 2026 · encerrado',
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
    { src: '/images/projects/premaut-inicio.webp', label: 'Início', alt: 'Página inicial do site do PREMAUT' },
    { src: '/images/projects/premaut-sobre.webp', label: 'O que fazemos', alt: 'Seção "O que fazemos no PREMAUT?" do site' },
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
    pitch: "Um app web para organizar as finanças pessoais: transações, metas e relatórios em um só lugar.",
    did: ["Interface em Node.js, Express e Nunjucks, com gráficos interativos em Chart.js", "API REST em Flask com autenticação, regras de negócio e PostgreSQL", "Relatórios em PDF gerados com Playwright e ambiente completo em Docker"],
    stat: { value: '3', label: "serviços em Docker: interface, API e banco" },
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
    pitch: "Sistema para gerenciar um acervo de livros, do login ao cadastro e edição de cada título.",
    did: ["Front-end em Vue 3 + Vite consumindo a API com Axios", "Back-end em Node.js com Express e banco no Supabase, com migrações", "Telas de login, cadastro de usuário, listagem, cadastro e edição de livros"],
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
    pitch: "Automação das vendas de um restaurante, com clientes e funcionários sincronizados com o servidor.",
    did: ["Arquitetura orientada a objetos em Python", "Sincronização cliente–servidor e envio de e-mails", "Persistência em PostgreSQL e execução com Docker"],
    stat: { value: '53', label: "commits meus no projeto da equipe" },
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
    pitch: "Uma rede de computadores inteira simulada em containers, com roteadores que descobrem rotas sozinhos.",
    did: ["Roteadores e hosts como containers Docker, gerados por script Python", "Troca de pacotes Hello e LSA para descobrir vizinhos e o estado dos enlaces", "Tabela de roteamento atualizada em tempo real com o algoritmo de Dijkstra"],
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
    pitch: "Testes de carga que mostram como uma aplicação em microsserviços se comporta quando muita gente usa ao mesmo tempo.",
    did: ["Cenários de uso escritos com Locust para o Spring PetClinic", "Script que roda todos os níveis de carga e repete as execuções", "Resultados em CSV, relatório técnico e vídeo de demonstração"],
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
    pitch: "Sistema distribuído em que mensagens com imagens são roteadas e analisadas por IA em tempo real.",
    did: ["Gerador de mensagens publicando em um exchange do RabbitMQ", "Dois consumidores em Java com IA (Smile): sentimento em rostos e brasões de times", "Tudo orquestrado em containers Docker"],
    stat: { value: '4', label: "containers trabalhando juntos" },
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
    pitch: "Aplicação cliente–servidor para processar vídeos com filtros e acompanhar o histórico.",
    did: ["Cliente desktop em Python com Tkinter, com prévia das imagens", "Servidor com filtros de cinza, bordas e pixel", "Histórico e metadados dos processamentos em SQLite"],
    stat: { value: '3', label: "filtros de vídeo" },
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
    pitch: "Arquitetura mestre–escravo em C++ que divide o processamento de textos entre servidores.",
    did: ["Mestre que dispara tarefas em paralelo com std::async", "Escravos com endpoints REST (cpp-httplib) e checagem de disponibilidade", "Resultado consolidado em JSON, com cliente GTK e containers Docker"],
    stat: { value: '3', label: "containers: mestre e dois escravos" },
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
    pitch: "App Android que tira fotos e envia direto para um servidor.",
    did: ["App nativo em Kotlin com Jetpack Compose", "Envio das imagens por socket TCP", "Servidor em Python que recebe e salva as fotos"],
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
    pitch: "Pesquisa que usa visão computacional para apoiar o diagnóstico de leishmaniose visceral canina.",
    did: ["Redes Neurais Convolucionais para classificar macrófagos em imagens de medula óssea", "Pipelines de pré-processamento de imagens microscópicas", "Treinamento em servidores NVIDIA de alto desempenho"],
    stat: { value: '5', label: "publicações científicas" },
    category: 'ai',
    year: '2024 — atual',
    role: 'Pesquisa · PIBIC',
    description:
      'Redes Neurais Convolucionais e pipelines de pré-processamento para classificar macrófagos infectados por Leishmania Visceral Canina em imagens de medula óssea.',
    logos: ['python', 'pytorch', 'opencv'],
    links: [{ type: 'research', url: '/academico' }],
  },
  {
    name: 'ID3 · Câncer de mama',
    pitch: "Árvore de decisão que classifica tumores de mama como benignos ou malignos.",
    did: ["Algoritmo ID3 com critério de entropia", "Validação do desempenho do modelo", "Análise de correlação e visualização da árvore"],
    stat: { value: '569', label: "amostras analisadas" },
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
    pitch: "Comparação entre redes neurais e máquinas de vetor de suporte em um problema clássico de classificação.",
    did: ["Modelos MLP e SVM treinados no dataset Sonar", "Experimentos com e sem redução de dimensionalidade (PCA)", "Matrizes de confusão e métricas comparadas"],
    stat: { value: '2', label: "modelos comparados" },
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
    pitch: "Classificação em um dataset feito para confundir: muito ruído e poucos atributos úteis.",
    did: ["Random Forest e técnicas de ensemble", "Avaliação de diferentes configurações do modelo", "Análises e gráficos em notebook"],
    stat: { value: '500', label: "atributos, só 20 informativos" },
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
