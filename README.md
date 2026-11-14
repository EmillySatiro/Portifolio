# Portfólio | Emilly Sátiro

Portfólio profissional desenvolvido com React e Vite para apresentar perfil, habilidades técnicas, projetos e canais de contato de Emilly Sátiro.

## Visão geral

Este projeto é uma aplicação web responsiva com React Router, organizada em páginas e seções:

- **Início:** apresentação profissional e principais áreas de atuação.
- **Sobre:** resumo de formação, experiência e indicadores do perfil.
- **Designer** (`/designer`), **Pesquisa** (`/pesquisa`) e **Projetos de TI** (`/projetos`): páginas próprias, ainda sem conteúdo.
- **Contato:** links profissionais e formulário integrado ao Formspree.

## Tecnologias

- React 19
- React Router
- GSAP
- Vite
- JavaScript
- CSS responsivo
- Formspree
- Vercel

## Estrutura do projeto

```text
.
├── public/                  # Imagens e arquivos públicos
├── src/
│   ├── components/          # Seções e componentes da interface
│   ├── pages/               # Páginas (rotas)
│   ├── data/                # Conteúdo centralizado do portfólio
│   ├── App.jsx              # Layout e rotas
│   ├── main.jsx             # Inicialização do React
│   └── style.css            # Estilos globais
├── index.html               # HTML base da aplicação
├── package.json             # Scripts e dependências
├── vite.config.js           # Configuração do Vite
└── vercel.json              # Configuração de deploy
```

## Como executar localmente

Pré-requisitos:

- Node.js instalado
- npm instalado

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Gere a versão de produção:

```bash
npm run build
```

Visualize a build localmente:

```bash
npm run preview
```

## Personalização de conteúdo

O conteúdo principal do portfólio fica centralizado em:

```text
src/data/portfolio.js
```

Nesse arquivo é possível atualizar:

- Links de navegação
- Estatísticas
- Contatos profissionais

As imagens públicas ficam em:

```text
public/
```

Para trocar foto, logo ou imagens de projetos, adicione os arquivos nessa pasta e atualize os caminhos em `src/data/portfolio.js` ou nos componentes correspondentes (`src/components` e `src/pages`).

## Deploy

O projeto está preparado para deploy na Vercel. A configuração atual usa:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

Após conectar o repositório na Vercel, o build será gerado com Vite e publicado a partir da pasta `dist`.

## Contato

- Email: <sousasatiroclaraemilly@gmail.com>
- LinkedIn: <https://www.linkedin.com/in/emilly-s%C3%A1tiro-94912a369/>
- GitHub: <https://github.com/EmillySatiro>
- Instagram: <https://www.instagram.com/__urano___/>
