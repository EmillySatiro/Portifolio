# Portfólio Premium | Emílly Sátiro

Portfólio profissional de alta performance e experiência visual imersiva, desenvolvido com **React** e **Vite**, em estilo editorial de revista. Apresenta a trajetória, projetos de engenharia de software, estudos de caso de UI/UX, pesquisas em Inteligência Artificial (CNPq/FAPEPI) e canais de contato de Emílly Sátiro.

---

## 🌟 Visual

- **Ilustração em pixel art** no topo, com efeitos: aparece "pixelando" ao carregar (e de novo ao passar o mouse),
  inclina em 3D seguindo o ponteiro, flutua e tem brilhos em pixel piscando.
- **Barra superior fixa** com o logo de morcego em pixel art, o nome, os links (com indicador da seção atual) e o botão de tema; no celular vira um menu.
- **Temas claro e escuro**, salvos no navegador (na primeira visita segue o tema do sistema).
- **Seções com fundos diferentes** e bordas "pixeladas" entre elas; palavras gigantes desfocadas ao fundo com parallax na rolagem.
- **Tecnologias** como cartas colecionáveis (logo, tipo e descrição) com brilho holográfico, **currículo** com destaque para download e linha do tempo,
  e **contato** com canais copiáveis e formulário (Formspree).
- Animações feitas com CSS e IntersectionObserver, sem bibliotecas. Respeitam `prefers-reduced-motion`.

## 🎨 Identidade

- **Fontes:** `Anton` (títulos) e `Inter` (textos), via Google Fonts.
- **Cores:** azul índigo do cabelo da ilustração (`#414575`), violeta (`#7b3fc4`) e azul-claro (`#8ad7eb`) como apoio.
  Todas em `src/styles/tokens.css`.

## ⚡ Desempenho

- Dependências só `react`, `react-dom`, `react-router-dom` e `simple-icons` (logos das tecnologias; só os usados entram no build). Ícones em SVG embutido.
- Ilustração em WebP com fundo transparente, em duas larguras (480 px e 900 px).
- Páginas Projetos, Designer e Pesquisa carregam sob demanda (`React.lazy`).

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
│   ├── bat.svg                        # Favicon: morcego em pixel art
│   ├── images/avatar-480.webp         # Ilustração (celular)
│   ├── images/avatar-900.webp         # Ilustração (desktop)
│   ├── images/og.jpg                  # Imagem de compartilhamento (WhatsApp, LinkedIn…)
│   └── Curriculo_formatado_*.pdf      # Currículos PT e EN
├── src/
│   ├── components/
│   │   ├── layout/                    # Topbar, Footer, UnderConstruction
│   │   ├── sections/                  # Hero, About, Skills, Curriculum, Contact, SentModal
│   │   └── ui/                        # PixelAvatar, BatLogo, TechLogo, Icon, ThemeToggle
│   ├── data/portfolio.js              # Todo o conteúdo: textos, links, experiências, tecnologias
│   ├── hooks/                         # useTheme, useReveal, useActiveSection, useScrollOnNavigate
│   ├── pages/                         # HomePage, ProjectsPage, DesignerPage, ResearchPage
│   ├── styles/                        # tokens.css (cores/temas), base.css, utilities.css
│   ├── App.jsx                        # Layout raiz e rotas
│   └── main.jsx                       # Ponto de entrada
├── index.html                         # HTML base, fontes e script que aplica o tema sem piscar
├── Dockerfile / docker-compose.yml    # Build e servidor Nginx
├── vercel.json                        # Deploy na Vercel
└── vite.config.js                     # Configuração do Vite
```

Cada componente tem o seu `.css` ao lado do `.jsx`.

Cada componente tem o seu `.css` ao lado do `.jsx`.

---

## 📄 Licença e Direitos

© 2026 Emílly Sátiro. Todos os direitos reservados.
