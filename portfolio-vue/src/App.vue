<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <span class="logo-text">Emilly Sátiro</span>
        </div>

        <ul class="nav-menu" :class="{ active: isMenuOpen }">
          <li class="nav-item" v-for="item in navItems" :key="item.name">
            <a :href="item.href" class="nav-link" @click="closeMenu">{{ item.name }}</a>
          </li>
        </ul>

        <div class="hamburger" :class="{ active: isMenuOpen }" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Olá, eu sou <span class="accent">Emilly Sátiro</span>
            </h1>
            <h2 class="hero-subtitle">Desenvolvedora Fullstack & Especialista em IA</h2>
              <p class="hero-description">
                Crio soluções digitais e aplicações modernas que ajudam empresas e pessoas a alcançarem seus objetivos. 
                Foco em entregar produtos de qualidade, eficientes e inovadores, utilizando as melhores práticas de tecnologia.
              </p>
            <div class="hero-buttons">
              <a href="#projects" class="btn btn-primary">Ver Meus Projetos</a>
              <a href="#contact" class="btn btn-outline">Entrar em Contato</a>
            </div>
          </div>
            <div class="hero-visual">
              <!-- Cards flutuantes com skills -->
              <div class="floating-code" v-for="(skill, idx) in floatingSkills" :key="'skill-'+idx">
                <div v-html="'<span class=\'code-comment\'># '+skill.title+'</span>'"></div>
                <div v-html="'<span class=\'code-keyword\'>Techs:</span> '+skill.techs.join(', ')"></div>
              </div>
            </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section about">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Sobre Mim</h2>
          <p class="section-subtitle">Conheça mais sobre minha formação e experiência</p>
        </div>

        <div class="about-content">
          <div class="about-text">
            <p class="about-paragraph">
              Sou estudante de Sistemas de Informação, apaixonada por desenvolvimento Fullstack e Inteligência Artificial.
              Minha trajetória me levou a criar aplicações robustas e soluções de IA inovadoras.
            </p>
            <p class="about-paragraph">
            Com experiência em desenvolvimento de soluções digitais e tecnologias modernas, contribuo para projetos de forma criativa e eficiente. 
            Tenho interesse em criar produtos escaláveis, funcionais e inovadores que atendam às necessidades de empresas e usuários.
          </p>
            <div class="about-stats">
              <div class="stat-item" v-for="(stat, index) in stats" :key="index">
                <div class="stat-number">{{ stat.number }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>

          <div class="about-image">
            <div class="profile-container">
              <img src="/foto.jpg" alt="Emilly Sátiro" class="profile-image">
            </div>
          </div>
        </div>

        <!-- Skills / Habilidades -->
        <div class="skills-carousel" id="skills-carousel">
          <h3 class="skills-title">Tecnologias</h3>
          <div class="skills-track">
            <div class="skill-card" v-for="(tech, index) in allTech" :key="index">
              {{ tech }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section projects">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Projetos</h2>
          <p class="section-subtitle">Alguns dos meus trabalhos recentes</p>
        </div>

        <div class="projects-scroll">
          <div class="project-card" v-for="(project, index) in projects" :key="index">
            <div class="project-image" :style="{ backgroundImage: 'url(' + project.image + ')' }"></div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-links">
                <a :href="project.link" target="_blank" class="project-link">Ver Projeto</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
<section id="skills" class="section skills">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Habilidades & Competências</h2>
      <p class="section-subtitle">Tecnologias, metodologias e competências que domino:</p>
    </div>

    <div class="skills-categories">
      <div class="skill-category-card" v-for="category in skills" :key="category.name">
        <h3 class="category-title">{{ category.name }}</h3>
        <p class="category-description">{{ category.description }}</p>
        <div class="category-items">
          <span class="category-item" v-for="item in category.items" :key="item.name">
            {{ item.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

    <!-- Contact Section -->
    <section id="contact" class="section contact">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Contato</h2>
          <p class="section-subtitle">Vamos conversar sobre oportunidades ou projetos</p>
        </div>

        <div class="contact-content">
          <!-- Informações de Contato -->
          <div class="contact-info-grid">
            <div class="contact-item" v-for="(method, index) in contactMethods" :key="index">
              <span class="contact-icon">{{ method.icon }}</span>
              <div class="contact-details">
                <h4>{{ method.title }}</h4>
                <a :href="method.link" target="_blank">{{ method.detail }}</a>
              </div>
            </div>
          </div>

          <!-- Formulário -->
          <div class="contact-form">
            <h3 class="form-title">Envie uma Mensagem</h3>
            <form 
              action="https://formspree.io/f/mpwjkpen" 
              method="POST"
            >
              <div class="form-group">
                <label>Nome</label>
                <input type="text" name="name" placeholder="Seu nome" required>
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="Seu email" required>
              </div>
              <div class="form-group">
                <label>Mensagem</label>
                <textarea name="message" rows="5" placeholder="Sua mensagem" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-left">
        <p>© 2025 Emilly Sátiro. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isMenuOpen: false,
      navItems: [
        { name: "Início", href: "#home" },
        { name: "Sobre", href: "#about" },
        { name: "Projetos", href: "#projects" },
        { name: "Habilidades", href: "#skills" }, // aqui
        { name: "Contato", href: "#contact" }
      ],
      mainTech: ["Python", "Vue.js", "PyTorch", "Node.js", "HTML", "CSS", "JavaScript"],
      stats: [
        { number: "3+", label: "Anos de Experiência" },
        { number: "15+", label: "Projetos Concluídos" },
        { number: "10+", label: "Tecnologias" }
      ],
      floatingCodes: [
        [
          '<span class="code-comment"># Construindo o futuro</span>',
          '<span class="code-keyword">class</span> <span class="code-function">Developer</span>:',
          '&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">create_solutions</span>(self):',
          '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">"aplicacoes_inovadoras"</span>'
        ]
      ],
      allTech: [
        "C", "Python", "JavaScript", "TypeScript", "Haskell", "Node.js", "Flask", "Express.js",
        "PyTorch", "Detectron2", "Scikit-learn", "OpenCV", "Pandas", "Numpy", "Docker", "Git", "GitHub",
        "PostgreSQL", "SQLite", "Redis", "Redes", "Servidores", "HTML", "CSS", "React",
        "Figma", "Canva", "Photoshop", "UML", "Scrum", "Kanban", "Vue", "Vercel"
      ],
      floatingSkills: [
      { title: "Desenvolvimento Web", techs: ["HTML", "CSS", "JavaScript", "Vue.js"] },
      { title: "Back-end & APIs", techs: ["Node.js", "Express", "Python", "Flask"] },
      { title: "Machine Learning", techs: ["Python", "PyTorch", "Scikit-learn"] },
      { title: "Documentação & Protótipos", techs: ["Wireframes", "Documentação", "Levantamento de Requisitos"] }
    ],
      projects: [
        {
          title: "Portfólio Vue",
          description: "Meu portfólio pessoal criado com Vue.js e CSS moderno.",
          status: "Concluído",
          tech: ["Vue.js", "CSS", "JavaScript"],
          link: "https://github.com/E/portfolio-vue",
          icon: "💻",
          image: "https://raw.githubusercontent.com/E/portfolio-vue/main/public/portfolio-demo.png"
        },
        {
          title: "Sistema de Cantina",
          description: "Aplicação web de gerenciamento de cantina universitária com dashboard e controle de vendas.",
          status: "Concluído",
          tech: ["Vue.js", "Node.js", "CSS"],
          link: "https://github.com/E/sistema-cantina",
          icon: "🍽️",
          image: "https://raw.githubusercontent.com/E/sistema-cantina/main/demo.png"
        },
        {
          title: "Mask R-CNN Amastigotas",
          description: "Detecção e segmentação de amastigotas usando PyTorch e Mask R-CNN.",
          status: "Concluído",
          tech: ["Python", "PyTorch", "Machine Learning"],
          link: "https://github.com/E/mask-rcnn-amastigotas",
          icon: "🧬",
          image: "https://raw.githubusercontent.com/E/mask-rcnn-amastigotas/main/demo.png"
        },
        {
          title: "Sistema RPG",
          description: "Sistema de criação de personagens de RPG em Haskell, com interface de console interativa.",
          status: "Concluído",
          tech: ["Haskell", "Console App"],
          link: "https://github.com/E/sistema-rpg",
          icon: "🎲",
          image: "https://raw.githubusercontent.com/E/sistema-rpg/main/demo.png"
        }
      ],
      skills: [
      {
        name: "Desenvolvimento Web",
        description: "Criação de websites responsivos, front-end e back-end completos",
        items: [
          { name: "HTML & CSS" },
          { name: "JavaScript & TypeScript" },
          { name: "Vue.js & React" },
          { name: "Node.js & Express" },
          { name: "Flask" }
        ]
      },
      {
        name: "Design & Interfaces",
        description: "Design de UI/UX e prototipação de sistemas",
        items: [
          { name: "Figma" },
          { name: "Photoshop" },
          { name: "Canva" },
          { name: "Prototipação de Sistemas" }
        ]
      },
      {
        name: "Inteligência Artificial & Machine Learning",
        description: "Soluções em visão computacional, redes neurais e aprendizado de máquina",
        items: [
          { name: "Python" },
          { name: "PyTorch & Detectron2" },
          { name: "Scikit-learn" },
          { name: "OpenCV" }
        ]
      },
      {
        name: "Documentação & Processos",
        description: "Organização, levantamento de requisitos e documentação de software",
        items: [
          { name: "Levantamento de Requisitos" },
          { name: "Documentação de Software" },
          { name: "Scrum & Kanban" },
          { name: "UML" }
        ]
      },
      {
        name: "Banco de Dados & Infraestrutura",
        description: "Trabalho com bancos de dados e DevOps para projetos escaláveis",
        items: [
          { name: "PostgreSQL & SQLite" },
          { name: "Redis" },
          { name: "Docker" },
          { name: "Git & GitHub" },
          { name: "Servidores & Redes" }
        ]
      },
      {
        name: "Automação & Implementação",
        description: "Automação de processos e implementação de sistemas completos",
        items: [
          { name: "Automação de Processos" },
          { name: "Implementação de Sistemas" }
        ]
      }
    ],
      contactMethods: [
        { title: "Email", detail: "sousasatiroclaraemilly@gmail.com", link: "mailto:sousasatiroclaraemilly@gmail.com", icon: "✉️" },
        { title: "LinkedIn", detail: "linkedin.com/in/emilly-sátiro", link: "https://www.linkedin.com/in/emilly-s%C3%A1tiro-94912a369/", icon: "🔗" },
        { title: "GitHub", detail: "github.com/EmillySatiro", link: "https://github.com/EmillySatiro", icon: "🐙" },
        { title: "Instagram", detail: "@__urano___", link: "https://www.instagram.com/__urano___/", icon: "📸" }
      ],
      socialLinks: [
        { name: "GitHub", link: "https://github.com/EmillySatiro", icon: "🐙" },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/emilly-s%C3%A1tiro-94912a369/", icon: "🔗" },
        { name: "Instagram", link: "https://www.instagram.com/__urano___/", icon: "📸" }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};
</script>
