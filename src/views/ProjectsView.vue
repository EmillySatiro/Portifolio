<template>
  <main class="route-page magazine-projects-page">
    <div class="container wide-projects-container">
      
      <!-- Top Page Header -->
      <header class="projects-top-header">
        <div class="header-flex-row">
          <div class="header-title-group">
            <span class="header-eyebrow">Aplicações back-end, front-end e full stack</span>
            <h1 class="header-page-title">Projetos</h1>
          </div>
          <div class="header-meta-group">
            <span class="header-author-tag">EMÍLLY SÁTIRO</span>
          </div>
        </div>
        <div class="header-divider-strong"></div>
      </header>

      <!-- Projects Showcase Feed (Alternating Layout) -->
      <div class="projects-showcase-feed">
        <article
          v-for="(project, index) in projects"
          :key="project.id"
          class="project-showcase-block"
          :id="`project-${project.id}`"
        >
          
          <!-- ===============================================================
               CASO A: PROJETOS ÍMPARES (Index 0, 2 -> PREMAUT, PetclinicSYS)
               VISUAL NA ESQUERDA | TEXTO NA DIREITA
               =============================================================== -->
          <div
            v-if="index % 2 === 0"
            class="project-showcase-grid layout-visual-left"
          >
            <!-- Lado Esquerdo: Visual + Tecnologias -->
            <div class="project-visual-col">
              <div class="project-visual-frame">
                <!-- PREMAUT: Site ao Vivo em Iframe -->
                <div v-if="project.isLiveWebsite" class="live-website-browser-box">
                  <div class="browser-address-bar">
                    <div class="address-url-box">
                      <span class="address-url-text">{{ project.projectUrl }}</span>
                    </div>
                  </div>
                  <div class="browser-iframe-container">
                    <iframe
                      :src="project.projectUrl"
                      :title="`Website Ao Vivo ${project.title}`"
                      class="live-website-iframe"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>

                <!-- Imagem Única (Sem Carrossel) -->
                <div v-else class="single-image-box">
                  <img
                    :src="project.image"
                    :alt="`Visual do projeto ${project.title}`"
                    class="project-single-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <!-- Tecnologias abaixo da imagem -->
              <div class="project-technologies-footer">
                <div class="technologies-chips-list">
                  <div
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="tech-chip-item"
                  >
                    <BrandIcon :name="tech" :size="16" icon-color="#ffffff" class="chip-icon" />
                    <span class="chip-label">{{ tech }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Lado Direito: Texto + Links -->
            <div class="project-info-col">
              <div class="project-title-section">
                <h2 class="project-main-title">{{ project.title }}</h2>
                <div class="project-role-tag">
                  <span class="role-label">Função:</span>
                  <span class="role-value">{{ project.role }}</span>
                </div>
              </div>

              <div class="project-description-section">
                <p class="description-paragraph">
                  {{ project.descriptionParagraph1 }}
                </p>
                <p v-if="project.descriptionParagraph2" class="description-paragraph">
                  {{ project.descriptionParagraph2 }}
                </p>
              </div>

              <div class="project-actions-section">
                <div class="actions-buttons-wrap">
                  <a
                    v-if="project.projectUrl"
                    :href="project.projectUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="home-styled-link-btn"
                  >
                    <span class="btn-text">Website</span>
                    <ExternalLink :size="15" />
                  </a>
                  <div v-else class="inactive-status-badge">
                    <span class="inactive-dot"></span>
                    <span class="inactive-text">Deploy inativo</span>
                  </div>

                  <a
                    v-if="project.githubUrl"
                    :href="project.githubUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="home-styled-link-btn"
                  >
                    <span class="btn-text">Repositório git</span>
                    <ArrowUpRight :size="15" />
                  </a>
                  <div v-else class="inactive-status-badge">
                    <span class="inactive-dot"></span>
                    <span class="inactive-text">Repositório privado</span>
                  </div>

                  <a
                    v-if="project.figmaUrl"
                    :href="project.figmaUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="home-styled-link-btn"
                  >
                    <span class="btn-text">Figma</span>
                    <ArrowUpRight :size="15" />
                  </a>

                  <a
                    v-if="project.scholarUrl"
                    :href="project.scholarUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="home-styled-link-btn"
                  >
                    <span class="btn-text">Google Acadêmico</span>
                    <ExternalLink :size="15" />
                  </a>
                </div>
              </div>
            </div>
          </div>


          <!-- ===============================================================
               CASO B: PROJETOS PARES (Index 1 -> Patocast)
               TEXTO NA ESQUERDA | VISUAL NA DIREITA
               =============================================================== -->
          <div
            v-else
            class="project-showcase-grid layout-visual-right"
          >
            <!-- Lado Esquerdo: Texto + Links -->
            <div class="project-info-col">
              <div class="project-title-section">
                <h2 class="project-main-title">{{ project.title }}</h2>
                <div class="project-role-tag">
                  <span class="role-label">Função:</span>
                  <span class="role-value">{{ project.role }}</span>
                </div>
              </div>

              <div class="project-description-section">
                <p class="description-paragraph">
                  {{ project.descriptionParagraph1 }}
                </p>
                <p v-if="project.descriptionParagraph2" class="description-paragraph">
                  {{ project.descriptionParagraph2 }}
                </p>
              </div>

              <div class="project-actions-section">
                <div class="actions-buttons-wrap">
                  <a
                    v-if="project.projectUrl"
                    :href="project.projectUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="home-styled-link-btn"
                  >
                    <span class="btn-text">Website</span>
                    <ExternalLink :size="15" />
                  </a>
                  <div v-else class="inactive-status-badge">
                    <span class="inactive-dot"></span>
                    <span class="inactive-text">Deploy inativo</span>
                  </div>

                  <a
                    v-if="project.githubUrl"
                    :href="project.githubUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="home-styled-link-btn"
                  >
                    <span class="btn-text">Repositório git</span>
                    <ArrowUpRight :size="15" />
                  </a>
                  <div v-else class="inactive-status-badge">
                    <span class="inactive-dot"></span>
                    <span class="inactive-text">Repositório privado</span>
                  </div>

                  <a
                    v-if="project.figmaUrl"
                    :href="project.figmaUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="home-styled-link-btn"
                  >
                    <span class="btn-text">Figma</span>
                    <ArrowUpRight :size="15" />
                  </a>

                  <a
                    v-if="project.scholarUrl"
                    :href="project.scholarUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="home-styled-link-btn"
                  >
                    <span class="btn-text">Google Acadêmico</span>
                    <ExternalLink :size="15" />
                  </a>
                </div>
              </div>
            </div>

            <!-- Lado Direito: Visual + Tecnologias -->
            <div class="project-visual-col">
              <div class="project-visual-frame">
                <!-- Imagem Única (Sem Carrossel) -->
                <div class="single-image-box">
                  <img
                    :src="project.image"
                    :alt="`Visual do projeto ${project.title}`"
                    class="project-single-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <!-- Tecnologias abaixo da imagem -->
              <div class="project-technologies-footer">
                <div class="technologies-chips-list">
                  <div
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="tech-chip-item"
                  >
                    <BrandIcon :name="tech" :size="16" icon-color="#ffffff" class="chip-icon" />
                    <span class="chip-label">{{ tech }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </article>
      </div>

      <!-- Mascot Bat Footer Section (Sharp Brutalist Model) -->
      <footer class="projects-mascot-footer-block">
        <div class="construction-content-box">
          <div class="large-bat-wrapper">
            <img
              src="/a8973100-1174-11ee-9e14-23aa8edbd820.svg"
              alt="Mascote Morcego"
              class="large-bat-img"
              loading="lazy"
              decoding="async"
              width="260"
              height="200"
            />
          </div>

          <span class="construction-badge">EXPANSÃO CONTÍNUA</span>
          <h2 class="construction-title">Mais projetos e sistemas em desenvolvimento...</h2>
          <p class="construction-subtitle">
            Estou estruturando novas arquiteturas, microsserviços e estudos de caso de interface no Figma. Fique atento às atualizações!
          </p>

          <router-link to="/" class="square-back-home-btn">
            <ArrowLeft :size="18" />
            <span>Voltar à Página Principal</span>
          </router-link>
        </div>
      </footer>

    </div>
  </main>
</template>

<script>
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
} from '@lucide/vue'
import BrandIcon from '../components/BrandIcon.vue'

export default {
  name: 'ProjectsView',
  components: {
    ArrowLeft,
    ArrowUpRight,
    ExternalLink,
    BrandIcon,
  },
  data() {
    return {
      projects: [
        {
          id: 'premaut',
          title: 'Sistema de Gestão PREMAUT',
          role: 'Líder de Projeto, Desenvolvedora Full Stack e UI/UX Designer',
          isLiveWebsite: true,
          descriptionParagraph1:
            'Desenvolvido em parceria com a Universidade Federal do Piauí (UFPI, Campus Ministro Petrônio Portella em Teresina), o sistema é a solução tecnológica oficial do PREMAUT (Projeto de Extensão de Atividades Motoras para Pessoas com Autismo). Com mais de 7 anos de atuação contínua, a plataforma otimiza a gestão de participantes, turmas, monitores acadêmicos e registros de acompanhamento psicomotor.',
          descriptionParagraph2:
            'Liderando a arquitetura técnica de ponta a ponta: concepção dos fluxos no Figma com Design System responsivo, implementação do front-end dinâmico em React e TypeScript, criação da API RESTful escalável em Python com FastAPI, banco relacional PostgreSQL e infraestrutura conteinerizada via Docker.',
          technologies: [
            'React',
            'TypeScript',
            'FastAPI',
            'Python',
            'PostgreSQL',
            'Docker',
            'Figma',
          ],
          projectUrl: 'https://premaut.ufpi.br/',
          figmaUrl:
            'https://www.figma.com/design/jtm4pjRayg0puYHufNKFZz/PREMAUT0.2?node-id=11-12&t=X2qrJWR43z8gXmaF-1',
          githubUrl: '',
          scholarUrl: '',
          image: '/images/premaut/home.jpg',
        },
        {
          id: 'patocast',
          title: 'Patocast — Gestão Financeira',
          role: 'Desenvolvedora Full Stack & Arquiteta de Software',
          isLiveWebsite: false,
          descriptionParagraph1:
            'Aplicação web completa para controle financeiro pessoal, metas orçamentárias e exportação de demonstrativos analíticos. Projetada sob uma arquitetura desacoplada e modular de microsserviços para garantir escalabilidade e separação de responsabilidades.',
          descriptionParagraph2:
            'Front-end reativo em Node.js com Express e Nunjucks (com renderização de gráficos em tempo real via Chart.js e compilação automática de relatórios em PDF com Playwright), back-end em Python com Flask para processamento de regras de negócio e autenticação segura, e banco relacional PostgreSQL conteinerizado.',
          technologies: [
            'Node.js',
            'Express',
            'Python',
            'PostgreSQL',
            'Docker',
            'Figma',
          ],
          projectUrl: '',
          figmaUrl:
            'https://www.figma.com/design/prmO5vjIsCS7wOuSDpyxbo/Patocast?node-id=74-173&t=iGn5u6UX3NwtDAbm-1',
          githubUrl:
            'https://github.com/EmillySatiro/PATOCAST_DESENVOLVIMENTO_WEB',
          scholarUrl: '',
          image: '/images/patocast/patocast_login.jpg',
        },
        {
          id: 'petclinicsys',
          title: 'PetclinicSYS — Testes de Carga em Microsserviços',
          role: 'Desenvolvedora Full Stack',
          isLiveWebsite: false,
          descriptionParagraph1:
            'Avaliação de desempenho e estabilidade do sistema Spring PetClinic sob arquitetura de microsserviços, utilizando o Locust como gerador de carga. Foram definidos três cenários de teste (leve, moderado e de pico) para analisar a escalabilidade e a resiliência do sistema sob diferentes níveis de usuários simultâneos.',
          descriptionParagraph2:
            'As métricas observadas incluem o tempo médio e máximo de resposta, requisições por segundo (req/s), total de requisições atendidas e taxa de sucesso nos principais endpoints (consultas e cadastros de donos e veterinários) com cargas variando entre 50, 100 e 200 usuários virtuais em ambiente conteinerizado.',
          technologies: [
            'Python',
            'Docker',
            'Locust',
            'Pandas',
            'Matplotlib',
            'NumPy',
            'Docker Compose',
          ],
          projectUrl: '',
          figmaUrl: '',
          githubUrl: 'https://github.com/EmillySatiro/PetclinicSYS',
          scholarUrl: '',
          image: '/images/petclinic/PetclinicSYS.png',
        },
      ],
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>

<style scoped>
/* Base Page Container - 100% White Typography */
.magazine-projects-page {
  min-height: 100vh;
  background-color: #0b0a0c;
  color: #ffffff;
  padding-top: 6.5rem;
  padding-bottom: 6rem;
  font-family: var(--font-body, 'Inter', sans-serif);
}

.wide-projects-container {
  width: min(1360px, calc(100% - 3rem));
  margin: 0 auto;
}

@media (max-width: 640px) {
  .wide-projects-container {
    width: calc(100% - 1.5rem);
  }
  .magazine-projects-page {
    padding-top: 5rem;
    padding-bottom: 4rem;
  }
}

/* Top Header Bar */
.projects-top-header {
  padding-top: 1.5rem;
  margin-bottom: 4.5rem;
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
  flex-direction: column;
  gap: 0.4rem;
}

.header-eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 0.85;
}

.header-page-title {
  font-family: var(--font-title, 'Cinzel', serif);
  font-size: clamp(2rem, 3.8vw, 2.7rem);
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.01em;
}

.header-meta-group {
  display: flex;
  align-items: center;
}

.header-author-tag {
  font-family: var(--font-title, 'Cinzel', serif);
  font-size: 0.84rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.15em;
}

.header-divider-strong {
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  width: 100%;
}

/* Projects Showcase Feed */
.projects-showcase-feed {
  display: flex;
  flex-direction: column;
  gap: 7rem;
  margin-bottom: 6rem;
}

@media (max-width: 900px) {
  .projects-showcase-feed {
    gap: 4.5rem;
  }
}

.project-showcase-block {
  position: relative;
}

/* Balanced Grid Layout */
.project-showcase-grid {
  display: grid;
  gap: 3.5rem;
  align-items: center;
}

/* 1. VISUAL NA ESQUERDA | TEXTO NA DIREITA */
.layout-visual-left {
  grid-template-columns: 0.95fr 1.05fr;
}

/* 2. TEXTO NA ESQUERDA | VISUAL NA DIREITA */
.layout-visual-right {
  grid-template-columns: 1.05fr 0.95fr;
}

@media (max-width: 1080px) {
  .layout-visual-left,
  .layout-visual-right {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .layout-visual-left .project-visual-col {
    order: 2;
  }

  .layout-visual-left .project-info-col {
    order: 1;
  }
}

/* ==========================================================================
   TEXT / INFO COLUMN
   ========================================================================== */
.project-info-col {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

.project-title-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.project-main-title {
  font-family: var(--font-title, 'Cinzel', serif);
  font-size: clamp(1.85rem, 3.2vw, 2.4rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.25;
  margin: 0;
  letter-spacing: -0.01em;
}

.project-role-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 0 !important;
  color: #ffffff;
  font-size: 0.84rem;
  font-weight: 600;
  width: fit-content;
}

.role-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.76rem;
  font-weight: 700;
  color: #ffffff;
  opacity: 0.75;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.role-value {
  font-weight: 600;
  color: #ffffff;
}

.project-description-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.description-paragraph {
  font-size: 0.96rem;
  color: #ffffff;
  line-height: 1.78;
  margin: 0;
  opacity: 0.92;
  font-weight: 400;
}

.project-actions-section {
  display: flex;
  flex-direction: column;
}

.actions-buttons-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.home-styled-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1.15rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.22);
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 0.84rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 0 !important;
  cursor: pointer;
  transition: all 0.25s ease;
}

.home-styled-link-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: #ffffff;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.inactive-status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.75rem 1.15rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0 !important;
  color: #ffffff;
  opacity: 0.55;
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: default;
}

.inactive-dot {
  width: 6px;
  height: 6px;
  border-radius: 0 !important;
  background: #ffffff;
  opacity: 0.6;
}

.inactive-text {
  font-size: 0.82rem;
  color: #ffffff;
}


/* ==========================================================================
   VISUAL & TECHS COLUMN
   ========================================================================== */
.project-visual-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.project-visual-frame {
  position: relative;
  width: 100%;
  background: #141217;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 0 !important;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.75);
  overflow: hidden;
}

/* Single Static Image Container - Full image preservation */
.single-image-box {
  width: 100%;
  height: 400px;
  background: #0c0b0e;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}

@media (max-width: 900px) {
  .single-image-box {
    height: clamp(240px, 48vw, 360px);
    padding: 0.25rem;
  }
}

.project-single-img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Preserves entire screenshot with zero clipping */
  display: block;
}

/* Live Browser Preview Frame for PREMAUT */
.live-website-browser-box {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.browser-address-bar {
  padding: 0.45rem 0.85rem;
  background: #18161b;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
}

.address-url-box {
  display: inline-flex;
  align-items: center;
  width: 100%;
  background: #0e0d10;
  padding: 0.25rem 0.65rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0 !important;
  font-family: 'Fira Code', monospace;
  font-size: 0.72rem;
}

.address-url-text {
  color: #ffffff;
  opacity: 0.85;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.browser-iframe-container {
  width: 100%;
  height: 380px;
  background: #09080b;
}

@media (max-width: 900px) {
  .browser-iframe-container {
    height: clamp(240px, 48vw, 340px);
  }
}

.live-website-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

/* Technologies Chips Footer Underneath Visual */
.project-technologies-footer {
  width: 100%;
  padding-top: 0.25rem;
}

.technologies-chips-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem;
}

.tech-chip-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.42rem 0.85rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0 !important;
  backdrop-filter: blur(8px);
  white-space: nowrap;
  transition: all 0.25s ease;
  cursor: default;
}

.tech-chip-item:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.08);
}

.chip-icon {
  flex-shrink: 0;
}

.chip-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.02em;
}


/* ==========================================================================
   BOTTOM MASCOT FOOTER
   ========================================================================== */
.projects-mascot-footer-block {
  padding: 5rem 0 2rem 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
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
  filter: drop-shadow(0 15px 35px rgba(255, 255, 255, 0.15));
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
  color: #ffffff;
  opacity: 0.85;
  margin-bottom: 0.6rem;
}

.construction-title {
  font-family: var(--font-title, 'Cinzel', serif);
  font-size: clamp(1.6rem, 3.2vw, 2.2rem);
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.85rem 0;
  line-height: 1.25;
}

.construction-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 0.98rem;
  color: #ffffff;
  opacity: 0.85;
  line-height: 1.65;
  margin: 0 0 2.25rem 0;
}

.square-back-home-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.6rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 0 !important;
  transition: all 0.25s ease;
}

.square-back-home-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: #ffffff;
  color: #ffffff;
  transform: translateY(-2px);
}
</style>
