# Portfólio Premium | Emílly Sátiro

Portfólio profissional de alta performance e experiência visual imersiva, desenvolvido com **React**, **Vite** e **Lucide Icons**. Apresenta a trajetória, projetos de engenharia de software, estudos de caso de UI/UX, pesquisas em Inteligência Artificial (CNPq/FAPEPI) e canais de contato de Emílly Sátiro.

---

## 🌟 Destaques da Interface

- **Hero Section:** iluminação ambiente com efeito radial glow e ticker animado de atuação profissional.
- **Background Animado (`BackgroundCanvas.jsx`):** canvas interativo com partículas flutuantes reativas ao movimento do cursor e textura de ruído sutil.
- **Cursor Customizado (`CustomCursor.jsx`):** anel seguidor fluido e expansão do cursor em elementos clicáveis.
- **Mascote Animado (`FlyingBat.jsx`):** morcego em SVG voando pela tela.
- **Sobre (`AboutSection.jsx`):** foto, apresentação e letreiro de tecnologias com filtros por categoria.
- **Currículo (`CurriculumSection.jsx`):** baralho de cartas com as experiências e download do currículo em PT/EN.
- **Contato (`ContactSection.jsx`):** formulário integrado ao Formspree e botões para copiar os contatos.
- **Projetos, Designer e Pesquisa:** páginas próprias, por enquanto no modo "Página em construção" (`UnderConstruction.jsx`).

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

- **`react` / `react-dom`:** biblioteca para a construção da interface.
- **`react-router-dom`:** navegação SPA entre Início, Projetos, Designer e Pesquisa.
- **`lucide-react`:** ícones vetoriais usados nos botões e formulários.
- **`vite` + `@vitejs/plugin-react`:** servidor de desenvolvimento e build.

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
├── public/
│   ├── bat.svg                      # Mascote morcego (também usado como favicon)
│   ├── foto perfil.png              # Foto de perfil
│   ├── Curriculo_formatado_PT.pdf   # Currículo em português
│   └── Curriculo_formatado_ingles.pdf # Currículo em inglês
├── src/
│   ├── components/                  # Componentes (cada um com seu .css)
│   │   ├── AboutSection.jsx         # Seção Sobre com foto e tecnologias
│   │   ├── BackgroundCanvas.jsx     # Canvas de partículas e iluminação
│   │   ├── BrandIcon.jsx            # Ícones das tecnologias e redes sociais
│   │   ├── ContactSection.jsx       # Formulário Formspree e contatos com cópia
│   │   ├── CurriculumSection.jsx    # Experiências e download do currículo
│   │   ├── CustomCursor.jsx         # Cursor customizado
│   │   ├── FlyingBat.jsx            # Mascote morcego animado
│   │   ├── HeroSection.jsx          # Hero com ticker de atuação
│   │   ├── SiteFooter.jsx           # Rodapé com redes sociais e botão de topo
│   │   ├── SiteNavbar.jsx           # Navbar com barra de progresso
│   │   └── UnderConstruction.jsx    # Layout de "Página em construção"
│   ├── data/
│   │   └── portfolio.js             # Links de navegação e contatos
│   ├── pages/                       # Páginas (rotas)
│   │   ├── DesignerPage.jsx         # /designer
│   │   ├── HomePage.jsx             # /
│   │   ├── ProjectsPage.jsx         # /projetos
│   │   └── ResearchPage.jsx         # /pesquisa
│   ├── App.jsx                      # Layout raiz e rotas
│   ├── main.jsx                     # Ponto de entrada do React
│   └── style.css                    # Design system e estilos globais
├── Dockerfile                       # Build Docker multi-stage
├── docker-compose.yml               # Orquestração de containers Docker
├── index.html                       # HTML base com fontes Cinzel, Cormorant e Inter
├── package.json                     # Dependências e scripts npm
├── vercel.json                      # Configuração para deploy na Vercel
└── vite.config.js                   # Configuração do Vite
```

---

## 📄 Licença e Direitos

© 2026 Emílly Sátiro. Todos os direitos reservados.
