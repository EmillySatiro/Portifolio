<template>
  <main class="route-page magazine-projects-page">
    <!-- Top Header Bar -->
    <header class="projects-top-header">
      <div class="container">
        <div class="header-flex-row">
          <div class="header-title-group">
            <h1 class="header-page-title">Projetos Desenvolvidos</h1>
          </div>

          <div class="header-meta-group">
            <span class="header-author-tag">EMÍLLY SÁTIRO</span>
          </div>
        </div>
        <div class="header-divider-strong"></div>
      </div>
    </header>

    <!-- Projects List Showcase -->
    <div class="projects-feed-flow">
      <section
        v-for="(project, index) in projects"
        :key="project.id"
        class="project-section-block"
        :class="[`bg-tone-${index % 2}`, { 'is-reversed': index % 2 === 1 }]"
      >
        <div class="container">
          <article class="project-window-card">
            <!-- Card Window Top Header Bar -->
            <div class="card-window-header">
              <div class="code-window-dots">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
                <span class="window-file-name">{{ project.id }}.app</span>
              </div>

              <div class="project-role-badge">
                <span class="role-label">Função:</span>
                <span class="role-value">{{ project.role }}</span>
              </div>
            </div>

            <!-- Card Window Main Body (Unified 2-Column Grid) -->
            <div class="card-window-body">
              <!-- Left Column: Visual Frame + Technologies + Links underneath -->
              <div class="project-visual-and-meta-col">
                
                <!-- Live Embedded Website Frame for PREMAUT -->
                <div v-if="project.isLiveWebsite" class="live-website-browser-box">
                  <div class="browser-address-bar">
                    <div class="address-url-box">
                      <span class="address-url-text">
                        {{ project.projectUrl }}
                      </span>
                    </div>
                  </div>

                  <div class="browser-iframe-container">
                    <iframe
                      :src="project.projectUrl"
                      title="Website Ao Vivo PREMAUT"
                      class="live-website-iframe"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>

                <!-- Live Original Figma Embed Iframe for Patocast -->
                <div v-else-if="project.isFigmaEmbed" class="live-website-browser-box figma-embed-box">
                  <div class="browser-address-bar figma-bar">
                    <div class="address-url-box">
                      <a :href="project.figmaUrl" target="_blank" rel="noopener" class="address-url-text">
                        Figma Canvas — node-id=74-173
                      </a>
                    </div>
                  </div>

                  <div class="browser-iframe-container figma-iframe-wrap">
                    <iframe
                      :src="getFigmaEmbedUrl(project.figmaUrl)"
                      title="Protótipo Figma Ao Vivo"
                      class="live-website-iframe"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>

                <!-- Standard Carousel for other projects -->
                <div v-else class="project-carousel-wrapper">
                  <div class="carousel-medium-frame">
                    <Transition name="fade-slide" mode="out-in">
                      <img
                        :key="getActiveImageIndex(project.id)"
                        :src="getActiveImage(project).url"
                        :alt="`Imagem do projeto ${project.title}`"
                        class="carousel-medium-img"
                      />
                    </Transition>

                    <!-- Controls Overlay -->
                    <button
                      class="carousel-nav-arrow prev"
                      aria-label="Imagem anterior"
                      @click="prevSlide(project.id, project.images.length)"
                    >
                      <ChevronLeft :size="20" />
                    </button>

                    <button
                      class="carousel-nav-arrow next"
                      aria-label="Próxima imagem"
                      @click="nextSlide(project.id, project.images.length)"
                    >
                      <ChevronRight :size="20" />
                    </button>

                    <!-- Counter Tag -->
                    <div class="carousel-counter-tag">
                      {{ getActiveImageIndex(project.id) + 1 }} / {{ project.images.length }}
                    </div>
                  </div>

                  <!-- Carousel Dots Indicator -->
                  <div class="carousel-dots-row">
                    <button
                      v-for="(_, imgIdx) in project.images"
                      :key="imgIdx"
                      class="dot-indicator"
                      :class="{ active: getActiveImageIndex(project.id) === imgIdx }"
                      :aria-label="`Slide ${imgIdx + 1}`"
                      @click="setSlide(project.id, imgIdx)"
                    ></button>
                  </div>
                </div>

                <!-- Technologies List Underneath Visual Frame -->
                <div class="project-tech-block">
                  <span class="tech-header-title">TECNOLOGIAS UTILIZADAS</span>
                  <div class="tech-badges-wrap">
                    <span
                      v-for="tech in project.technologies"
                      :key="tech"
                      class="tech-pill-badge"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <!-- Links Row Underneath Visual Frame -->
                <div class="project-links-row">
                  <a
                    v-if="project.projectUrl"
                    :href="project.projectUrl"
                    target="_blank"
                    rel="noopener"
                    class="project-text-link"
                  >
                    <span>Website</span>
                    <ArrowUpRight :size="15" />
                  </a>
                  <span v-else-if="project.deployNote" class="deploy-inactive-tag">
                    <span class="status-dot"></span>
                    <span>{{ project.deployNote }}</span>
                  </span>

                  <a
                    v-if="project.figmaUrl"
                    :href="project.figmaUrl"
                    target="_blank"
                    rel="noopener"
                    class="project-text-link"
                  >
                    <span>Figma</span>
                    <ArrowUpRight :size="15" />
                  </a>
                  <a
                    v-if="project.githubUrl"
                    :href="project.githubUrl"
                    target="_blank"
                    rel="noopener"
                    class="project-text-link"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight :size="15" />
                  </a>
                  <a
                    v-if="project.docsUrl"
                    :href="project.docsUrl"
                    target="_blank"
                    rel="noopener"
                    class="project-text-link"
                  >
                    <span>Documentação</span>
                    <ArrowUpRight :size="15" />
                  </a>
                </div>
              </div>

              <!-- Right Column: Title & Text Description -->
              <div class="project-content-col">
                <h2 class="project-title">{{ project.title }}</h2>

                <div class="project-description-block">
                  <p class="project-description-p">
                    {{ project.descriptionParagraph1 }}
                  </p>
                  <p v-if="project.descriptionParagraph2" class="project-description-p">
                    {{ project.descriptionParagraph2 }}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>

    <!-- Mascot Bat Section (Designed following DesignerView model) -->
    <div class="projects-mascot-footer-block">
      <div class="container">
        <div class="construction-content-box">
          <div class="large-bat-wrapper">
            <img
              src="/a8973100-1174-11ee-9e14-23aa8edbd820.svg"
              alt="Mascote Morcego"
              class="large-bat-img"
            />
          </div>

          <span class="construction-badge">EM BREVE</span>
          <h2 class="construction-title">Mais projetos sendo preparados...</h2>
          <p class="construction-subtitle">
            Estou organizando novas documentações e subindo mais projetos. Fique atento às próximas atualizações!
          </p>

          <router-link to="/" class="back-home-btn">
            <ArrowLeft :size="18" />
            <span>Voltar ao Início</span>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight } from '@lucide/vue'

export default {
  name: 'ProjectsView',
  components: {
    ArrowLeft,
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
  },
  data() {
    return {
      activeImageIndexes: {
        'premaut': 0,
        'patocast': 0,
      },
      projects: [
        {
          id: 'premaut',
          isLiveWebsite: true,
          title: 'Sistema de Gestão PREMAUT',
          role: 'Líder de Projeto, Desenvolvedora Full Stack e UI/UX Designer',
          descriptionParagraph1:
            'Desenvolvido em equipe em parceria com a Universidade Federal do Piauí (UFPI, Campus Ministro Petrônio Portella em Teresina), o sistema é a solução tecnológica oficial do PREMAUT (Projeto de Extensão de Atividades Motoras para Pessoas com Autismo). Com mais de 7 anos de atuação, o projeto promove o desenvolvimento psicomotor, coordenação, autonomia funcional e inclusão social de crianças e jovens com autismo através de acompanhamento especializado.',
          descriptionParagraph2:
            'Atuando na liderança do desenvolvimento em equipe, o projeto abrange desde a concepção de protótipos e fluxos de navegação no Figma (UI/UX) até o desenvolvimento da interface web responsiva em React e TypeScript, API REST escalável com FastAPI, banco de dados PostgreSQL e ambiente conteinerizado com Docker. A aplicação automatiza a gestão de participantes, emissão de relatórios, acompanhamento de monitores acadêmicos e registros de eventos.',
          technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker', 'Figma', 'Python', 'UI/UX Design'],
          projectUrl: 'https://premaut.ufpi.br/',
          figmaUrl: 'https://www.figma.com/design/jtm4pjRayg0puYHufNKFZz/PREMAUT0.2?node-id=11-12&t=X2qrJWR43z8gXmaF-1',
          githubUrl: '',
          images: [],
        },
        {
          id: 'patocast',
          isFigmaEmbed: true,
          title: 'Patocast',
          role: 'Desenvolvedora Full Stack',
          deployNote: 'Deploy inativo (Projeto acadêmico)',
          descriptionParagraph1:
            'Aplicação web completa para gerenciamento financeiro pessoal desenvolvida sob uma arquitetura de microsserviços. O sistema auxilia os usuários a controlar transações diárias, estipular metas financeiras, acompanhar indicadores e exportar relatórios detalhados.',
          descriptionParagraph2:
            'A arquitetura é dividida em três camadas principais: front-end dinâmico em Node.js com Express e Nunjucks (com visualização de dados usando Chart.js e geração automática de relatórios em PDF com Playwright), back-end com API RESTful em Python com Flask para regras de negócio e autenticação, e banco de dados relacional PostgreSQL totalmente padronizado com scripts SQL e ambiente conteinerizado via Docker. Por se tratar de um projeto desenvolvido para fins acadêmicos, seu ambiente de deploy público encontra-se atualmente inativo.',
          technologies: ['Node.js', 'Express', 'Python', 'Flask', 'PostgreSQL', 'Docker', 'Chart.js', 'Playwright', 'Nunjucks', 'Figma'],
          projectUrl: '',
          figmaUrl: 'https://www.figma.com/design/prmO5vjIsCS7wOuSDpyxbo/Patocast?node-id=74-173&t=iGn5u6UX3NwtDAbm-1',
          githubUrl: 'https://github.com/EmillySatiro/PATOCAST_DESENVOLVIMENTO_WEB',
          images: [],
        },
      ],
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    getFigmaEmbedUrl(figmaUrl) {
      if (!figmaUrl) return ''
      return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`
    },
    getActiveImageIndex(projId) {
      return this.activeImageIndexes[projId] ?? 0
    },
    getActiveImage(project) {
      const idx = this.getActiveImageIndex(project.id)
      return project.images && project.images[idx]
        ? project.images[idx]
        : { url: '' }
    },
    nextSlide(projId, totalImages) {
      const current = this.getActiveImageIndex(projId)
      this.activeImageIndexes[projId] = (current + 1) % totalImages
    },
    prevSlide(projId, totalImages) {
      const current = this.getActiveImageIndex(projId)
      this.activeImageIndexes[projId] = (current - 1 + totalImages) % totalImages
    },
    setSlide(projId, index) {
      this.activeImageIndexes[projId] = index
    },
  },
}
</script>

<style scoped>
.magazine-projects-page {
  min-height: 100vh;
  background-color: #ffffff;
  color: #0f172a;
  padding-top: 6rem;
  padding-bottom: 6rem;
  font-family: var(--font-body, 'Inter', sans-serif);
}

/* Top Header Bar */
.projects-top-header {
  padding-top: 2rem;
  margin-bottom: 3.5rem;
}

.header-flex-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
}

.header-title-group {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.header-page-title {
  font-family: var(--font-title, 'Cinzel', serif);
  font-size: clamp(1.8rem, 3.8vw, 2.4rem);
  font-weight: 700;
  color: #0f172a;
  margin: 0;
  letter-spacing: -0.01em;
}

.header-meta-group {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.88rem;
}

.header-author-tag {
  font-family: var(--font-title, 'Cinzel', serif);
  font-size: 0.82rem;
  font-weight: 700;
  color: #263a99;
  letter-spacing: 0.12em;
}

.header-divider-strong {
  height: 2px;
  background: linear-gradient(90deg, #263a99 0%, #0f172a 30%, #e2e8f0 100%);
  width: 100%;
}

/* Section Divisions & Background Flow */
.projects-feed-flow {
  display: flex;
  flex-direction: column;
}

.project-section-block {
  padding: 5rem 0;
  position: relative;
  transition: background-color 0.3s ease;
}

.bg-tone-0 {
  background-color: #ffffff;
}

.bg-tone-1 {
  background-color: #f8fafc;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
}

/* Project Window Card Component with Home-Page Glowing Border Effects */
.project-window-card {
  background: #ffffff;
  border: 2px solid rgba(151, 180, 222, 0.4);
  border-radius: 12px !important;
  box-shadow: 0 16px 40px rgba(38, 58, 153, 0.08), 0 0 25px rgba(151, 180, 222, 0.12);
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-window-card:hover {
  transform: translateY(-4px);
  border-color: #263a99;
  box-shadow: 0 24px 50px rgba(38, 58, 153, 0.18), 0 0 35px rgba(151, 180, 222, 0.3);
}

.card-window-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 1.4rem;
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
  border-bottom: 1px solid #cbd5e1;
  flex-wrap: wrap;
  gap: 0.75rem;
  transition: background 0.3s ease;
}

.project-window-card:hover .card-window-header {
  background: linear-gradient(180deg, #f0f4ff 0%, #e2e8f0 100%);
}

.code-window-dots {
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50% !important;
}

.dot-red { background: #ff5f56; }
.dot-yellow { background: #ffbd2e; }
.dot-green { background: #27c93f; }

.window-file-name {
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.78rem;
  font-weight: 600;
  color: #64748b;
  margin-left: 0.5rem;
}

.project-role-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.3rem 0.75rem;
  background: #ffffff;
  border: 1px solid #bfdbfe;
  border-radius: 6px !important;
  font-size: 0.84rem;
  flex-wrap: wrap;
}

.role-label {
  font-family: var(--font-title, 'Cinzel', serif);
  font-size: 0.72rem;
  font-weight: 700;
  color: #1e3a8a;
  text-transform: uppercase;
}

.role-value {
  font-weight: 700;
  color: #0f172a;
}

/* Card Body (2-Column Layout with Technologies & Links Underneath Visual Column) */
.card-window-body {
  display: grid;
  grid-template-columns: 460px 1fr;
  gap: 3.5rem;
  padding: 2.25rem;
  align-items: flex-start;
}

@media (min-width: 960px) {
  .project-section-block.is-reversed .card-window-body {
    grid-template-columns: 1fr 460px;
  }
  .project-section-block.is-reversed .project-visual-and-meta-col {
    order: 2;
  }
  .project-section-block.is-reversed .project-content-col {
    order: 1;
  }
}

@media (max-width: 959px) {
  .card-window-body {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1.5rem;
  }
  .magazine-projects-page {
    padding-top: 5rem;
    padding-bottom: 4rem;
  }
  .project-section-block {
    padding: 3rem 0;
  }
}

@media (max-width: 600px) {
  .card-window-body {
    padding: 1.15rem;
    gap: 1.5rem;
  }
  .browser-iframe-container {
    height: 230px;
  }
  .project-title {
    font-size: 1.5rem;
  }
  .project-links-row {
    gap: 1rem;
  }
  .large-bat-wrapper {
    width: 140px;
    height: 140px;
  }
}

/* Visual & Meta Left Column */
.project-visual-and-meta-col {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

/* Live Browser Box for PREMAUT & Figma */
.live-website-browser-box {
  width: 100%;
  border-radius: 8px !important;
  overflow: hidden;
  border: 1px solid #cbd5e1;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
  background: #ffffff;
}

.browser-address-bar {
  padding: 0.4rem 0.75rem;
  background: #e2e8f0;
  border-bottom: 1px solid #cbd5e1;
  display: flex;
  align-items: center;
}

.address-url-box {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  width: 100%;
  background: #ffffff;
  padding: 0.25rem 0.65rem;
  border-radius: 4px !important;
  border: 1px solid #cbd5e1;
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.75rem;
}

.address-url-text {
  color: #1e3a8a;
  text-decoration: none;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.address-url-text:hover {
  text-decoration: underline;
}

.browser-iframe-container {
  position: relative;
  width: 100%;
  height: 290px;
  background: #f8fafc;
}

.live-website-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

/* Standard Image Carousel */
.project-carousel-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  width: 100%;
}

.carousel-medium-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 8px !important;
  overflow: hidden;
  background-color: #e2e8f0;
  border: 1px solid #cbd5e1;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
}

.carousel-medium-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  border-radius: 50% !important;
  background: #ffffff;
  border: 1px solid #64748b;
  color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
  z-index: 10;
}

.carousel-nav-arrow.prev { left: 0.75rem; }
.carousel-nav-arrow.next { right: 0.75rem; }

.carousel-nav-arrow:hover {
  background: #263a99;
  color: #ffffff;
  border-color: #263a99;
}

.carousel-counter-tag {
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  padding: 0.3rem 0.7rem;
  background: #0f172a;
  color: #ffffff;
  font-family: var(--font-body, 'Inter', sans-serif);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  border-radius: 4px !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  z-index: 10;
}

.carousel-dots-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
}

.dot-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50% !important;
  background: #94a3b8;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.2s ease;
}

.dot-indicator.active {
  background: #263a99;
  width: 22px;
  border-radius: 4px !important;
}

/* Technologies Section Underneath Visual Frame */
.project-tech-block {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding-top: 0.5rem;
}

.tech-header-title {
  font-family: var(--font-title, 'Cinzel', serif);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #263a99;
  text-transform: uppercase;
}

.tech-badges-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.tech-pill-badge {
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.3rem 0.75rem;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  color: #0f172a;
  border-radius: 4px !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
  transition: all 0.2s ease;
}

.tech-pill-badge:hover {
  border-color: #263a99;
  color: #263a99;
  background: #f8fafc;
}

/* Links Row Underneath Visual Frame */
.project-links-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.project-text-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.92rem;
  font-weight: 700;
  color: #263a99;
  text-decoration: none;
  padding-bottom: 0.2rem;
  border-bottom: 2px solid rgba(38, 58, 153, 0.3);
  transition: all 0.2s ease;
}

.project-text-link:hover {
  color: #1d2d7c;
  border-bottom-color: #1d2d7c;
  transform: translateY(-1px);
}

.deploy-inactive-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.84rem;
  font-weight: 600;
  color: #64748b;
  background: #f1f5f9;
  padding: 0.25rem 0.65rem;
  border-radius: 4px !important;
  border: 1px solid #cbd5e1;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50% !important;
  background: #94a3b8;
}

/* Content Details Right Column */
.project-content-col {
  display: flex;
  flex-direction: column;
}

.project-title {
  font-family: var(--font-editorial, 'Cormorant Garamond', Georgia, serif);
  font-size: clamp(1.65rem, 3vw, 2.2rem);
  font-weight: 700;
  color: #0f172a;
  line-height: 1.25;
  margin: 0 0 1rem 0;
}

.project-description-block {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.project-description-p {
  font-size: 0.98rem;
  color: #334155;
  line-height: 1.74;
  margin: 0;
  font-weight: 450;
}

/* Mascot Bat Footer Section (Matches DesignerView Model) */
.projects-mascot-footer-block {
  padding: 6rem 0 3rem 0;
  background: #ffffff;
  text-align: center;
}

.construction-content-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 650px;
  margin: 0 auto;
}

.large-bat-wrapper {
  width: 180px;
  height: 180px;
  margin-bottom: 1.75rem;
  animation: batHover 3s ease-in-out infinite alternate;
  filter: drop-shadow(0 15px 35px rgba(38, 58, 153, 0.15));
}

.large-bat-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@keyframes batHover {
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-12px) scale(1.05); }
  100% { transform: translateY(6px) scale(0.97); }
}

.construction-badge {
  font-family: 'Cinzel', serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #263a99;
  margin-bottom: 0.6rem;
}

.construction-title {
  font-family: var(--font-title, 'Cinzel', serif);
  font-size: clamp(1.6rem, 3.2vw, 2.2rem);
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.85rem 0;
  line-height: 1.25;
}

.construction-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 0.98rem;
  color: #475569;
  line-height: 1.65;
  margin: 0 0 2.25rem 0;
}

.back-home-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.6rem;
  background: #263a99;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 8px !important;
  box-shadow: 0 4px 20px rgba(38, 58, 153, 0.25);
  transition: all 0.25s ease;
}

.back-home-btn:hover {
  background: #1d2d7c;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(38, 58, 153, 0.4);
}

/* Bottom Nav */
.projects-bottom-nav {
  padding: 2rem 0;
  text-align: center;
  background-color: #ffffff;
}

/* Fade slide transition */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.25s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
}
</style>
