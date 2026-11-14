# Portfólio Premium | Emílly Sátiro

Portfólio profissional de alta performance e experiência visual imersiva, desenvolvido com **Vue 3**, **Vite**, **GSAP** e **Lucide Icons**. Apresenta a trajetória, projetos de engenharia de software, estudos de caso de UI/UX, pesquisas em Inteligência Artificial (CNPq/FAPEPI) e canais de contato de Emílly Sátiro.

---

## 🌟 Destaques da Refatoração de Interface

- **Experiência Visual de Alto Impacto (Hero Section):** iluminação ambiente com efeito radial glow, status badge de disponibilidade em tempo real, ticker animado de atuação profissional e cards com estatísticas de impacto.
- **Background Animado & Texturas (`BackgroundCanvas.vue`):** canvas interativo com partículas flutuantes reativas ao movimento do cursor, mesh gradient em tons da paleta de cores e textura de ruído sutil.
- **Microinterações e Cursor Customizado (`CustomCursor.vue`):** anel seguidor fluido e expansão de cursor em elementos clicáveis.
- **Mascote Animado Preservado (`FlyingBat.vue`):** morcego animado em vetor/SVG integrado com física fluida GSAP e acompanhamento de navegação.
- **Bento Grid de Tecnologias (`TechStackSection.vue`):** ecossistema técnico categorizado (Front-end, Back-end, IA & Visão Computacional, DevOps & UI/UX) com filtros dinâmicos.
- **Showcase de Projetos com Modal Interativo (`ProjectsSection.vue` & `ProjectModal.vue`):** cards de projetos com filtros por categoria, badges, tags técnicas e janela modal completa para detalhes, links do GitHub, Figma e demonstrações.
- **Página Dedicada a Design (`DesignerView.vue`):** vitrine para estudos de caso de UI/UX, protótipos navegáveis no Figma, wireframes e guias de estilo.
- **Página de Pesquisa Científica (`ResearchView.vue`):** layout de bento grid acadêmico destacando pesquisas de IA na saúde (Leishmaniose Canina) e agronegócio, com links diretos para o Google Acadêmico e Currículo Lattes.

---

## 🎨 Identidade Visual Preservada

### Tipografia
- **Títulos e Destaques Elegantes:** `Cinzel` (`font-family: 'Cinzel', serif`)
- **Títulos Editoriais e Citações:** `Cormorant Garamond` (`font-family: 'Cormorant Garamond', serif`)
- **Corpo de Texto e Controles:** `Inter` (`font-family: 'Inter', sans-serif`)

### Paleta de Cores Oficial
- **Charleston (`#2a2829`):** Fundo principal escuro e cards glassmorphic.
- **Sky Blue (`#97b4de`):** Destaques visuais, ícones, badges e iluminação suave.
- **Deep Blue (`#263a99`):** Botões principais de CTA, gradientes e sombras.
- **Alabaster (`#f0ebe5`):** Textos principais e títulos de alto contraste.
- **Pastel Beige (`#dcd0be`):** Subtítulos editoriais e destaques secundários.
- **Ink (`#171516`):** Molduras internas e contrastes.

---

## 🛠️ Tecnologias e Dependências

### Dependências Principais
- **`vue` (`^3.5.18`):** Framework reativo progressivo para a construção da interface do usuário.
- **`vue-router` (`^4.6.4`):** Roteador oficial para a navegação SPA entre Início, Designer e Pesquisa.
- **`gsap` (`^3.15.0`):** Biblioteca de animação profissional utilizada para física de movimento, flutuação e interações.
- **`@lucide/vue` (`^1.0.0`):** Conjunto moderno de ícones vetoriais em alta resolução utilizados em toda a interface (código, figma, github, contatos, etc.).

#### Por que `@lucide/vue` foi adicionado?
Adicionado para fornecer ícones vetoriais consistentes, elegantes e acessíveis para categorias de tecnologias, botões de ação do GitHub, Figma, Google Acadêmico e formulários de contato.

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior recomendada)
- **npm** (instalado com o Node.js)

### Passo 1: Clonar e instalar dependências
```bash
npm install
```

### Passo 2: Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
O projeto estará acessível no navegador em `http://localhost:5173`.

### Passo 3: Gerar build de produção
```bash
npm run build
```

### Passo 4: Visualizar build localmente
```bash
npm run preview
```

---

## 🐳 Containerização com Docker

O repositório conta com configurações Docker otimizadas para deploy ou execução isolada.

### Arquivos Incluídos:
- **`Dockerfile`:** Build multi-stage que compila o projeto com Node.js/Vite e serve os arquivos estáticos via servidor Web Nginx Alpine.
- **`docker-compose.yml`:** Orquestrador para subir a aplicação em ambiente isolado na porta 8080.

### Como Buildar e Executar com Docker Compose:
```bash
docker-compose up -d --build
```
Acesse a aplicação em `http://localhost:8080`.

### Como Parar o Container:
```bash
docker-compose down
```

---

## 📁 Estrutura de Pastas

```text
.
├── public/                          # Imagens públicos e mascot SVG animado
│   ├── a8973100-1174-11ee-9e14-23aa8edbd820.svg # Morcego animado em vetor
│   ├── foto.jpg                     # Foto de perfil de Emílly Sátiro
│   └── logo_emilly_sátiro.png       # Favicon e logo oficial
├── src/
│   ├── components/                  # Componentes reutilizáveis
│   │   ├── AboutSection.vue         # Seção Sobre com pilares e foto
│   │   ├── BackgroundCanvas.vue     # Canvas de partículas e iluminação
│   │   ├── ContactSection.vue       # Formulário Formspree e contatos com cópia
│   │   ├── CustomCursor.vue         # Cursor customizado e microinterações
│   │   ├── FlyingBat.vue            # Mascote morcego com animação GSAP
│   │   ├── HeroSection.vue          # Hero de alto impacto visual e ticker
│   │   ├── ProjectModal.vue         # Modal interativo para detalhes dos projetos
│   │   ├── ProjectsSection.vue      # Showcase de projetos de TI com filtros
│   │   ├── SiteFooter.vue           # Rodapé com redes sociais e botão de topo
│   │   ├── SiteNavbar.vue           # Navbar flutuante em glassmorphism
│   │   └── TechStackSection.vue     # Bento grid de habilidades por área
│   ├── data/
│   │   └── portfolio.js             # Fonte centralizada de dados e projetos
│   ├── views/                       # Páginas da aplicação
│   │   ├── DesignerView.vue         # Vitrine de UI/UX e estudos no Figma
│   │   ├── HomeView.vue             # Página principal do portfólio
│   │   └── ResearchView.vue         # Página de pesquisa científica e IC
│   ├── App.vue                      # Layout raiz da aplicação
│   ├── main.js                      # Ponto de entrada do Vue
│   ├── router.js                    # Configuração de rotas da aplicação
│   └── style.css                    # Design system e estilos globais
├── Dockerfile                       # Instruções de build Docker multi-stage
├── docker-compose.yml               # Orquestração de containers Docker
├── index.html                       # HTML base com fontes Cinzel, Cormorant e Inter
├── package.json                     # Dependências e scripts npm
├── vercel.json                      # Configuração para deploy na Vercel
└── vite.config.js                   # Configuração do bundler Vite
```

---

## 📄 Licença e Direitos

© {{ year }} Emílly Sátiro. Todos os direitos reservados.
