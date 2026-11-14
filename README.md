# Portfólio Premium | Emílly Sátiro

Portfólio profissional de alta performance e experiência visual imersiva, desenvolvido com **React** e **Vite**, em estilo editorial de revista. Apresenta a trajetória, projetos de engenharia de software, estudos de caso de UI/UX, pesquisas em Inteligência Artificial (CNPq/FAPEPI) e canais de contato de Emílly Sátiro.

---

## 🌟 Visual

Estilo editorial inspirado em revistas: papel texturizado, títulos condensados enormes,
palavras gigantes desfocadas em azul, colagens de fotos e rabiscos "à mão" que se desenham na tela.

- **Temas claro e escuro**, com o tema salvo no navegador (ou o do sistema na primeira visita).
- **Masthead** no topo da home com o nome, as áreas e a navegação por seções.
- **Barra mínima** que aparece ao rolar (monograma, seção atual, tema e botão MENU) e se esconde ao descer.
- **Menu em tela cheia** com os links grandes.
- **Animações leves**, só com CSS e um IntersectionObserver (sem bibliotecas de animação). Respeitam `prefers-reduced-motion`.

## 🎨 Identidade

- **Fontes:** `Anton` (títulos condensados) e `Inter` (textos), via Google Fonts.
- **Cores:** papel `#efede8` / tinta `#0c0c0e` e azul `#1f3dff` no tema claro; `#0e0e11` / `#f1efe9` e azul `#4d6bff` no escuro.
  Todas definidas em `src/styles/tokens.css`.

## ⚡ Desempenho

- Dependências só `react`, `react-dom` e `react-router-dom`.
- Foto em WebP com duas larguras (640 px e 1200 px); os recortes do layout reutilizam o mesmo arquivo.
- Páginas Projetos, Designer e Pesquisa carregam sob demanda (`React.lazy`).
- Textura de papel feita com um SVG minúsculo embutido no CSS.

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
│   ├── bat.svg                        # Mascote morcego (favicon, confirmação de envio, páginas em construção)
│   ├── images/foto-640.webp           # Foto de perfil (celular)
│   ├── images/foto-1200.webp          # Foto de perfil (desktop)
│   ├── images/foto-og.jpg             # Imagem de compartilhamento (WhatsApp, LinkedIn…)
│   └── Curriculo_formatado_*.pdf      # Currículos PT e EN
├── src/
│   ├── components/
│   │   ├── layout/                    # Topbar, MenuOverlay, Footer, UnderConstruction
│   │   ├── sections/                  # Hero, About, TechMarquee, Curriculum, Contact, SentModal
│   │   └── ui/                        # Scribble (rabiscos), ThemeToggle, Photo
│   ├── data/portfolio.js              # Todo o conteúdo: textos, links, experiências, tecnologias
│   ├── hooks/                         # useTheme, useReveal, useActiveSection, useScrollState, useScrollOnNavigate
│   ├── pages/                         # HomePage, ProjectsPage, DesignerPage, ResearchPage
│   ├── styles/                        # tokens.css (temas), base.css, utilities.css
│   ├── App.jsx                        # Layout raiz e rotas
│   └── main.jsx                       # Ponto de entrada
├── index.html                         # HTML base, fontes e script que aplica o tema sem piscar
├── Dockerfile / docker-compose.yml    # Build e servidor Nginx
├── vercel.json                        # Deploy na Vercel
└── vite.config.js                     # Configuração do Vite
```

Cada componente tem o seu `.css` ao lado do `.jsx`.

---

## 📄 Licença e Direitos

© 2026 Emílly Sátiro. Todos os direitos reservados.
