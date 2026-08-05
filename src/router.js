import { createRouter, createWebHistory } from 'vue-router'
import DesignerView from './views/DesignerView.vue'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ResearchView from './views/ResearchView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/designer', name: 'designer', component: DesignerView },
  { path: '/pesquisa', name: 'research', component: ResearchView },
  { path: '/projetos', name: 'projects', component: ProjectsView },
  { path: '/programacao', redirect: { path: '/projetos' } },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
})
