import { createRouter, createWebHistory } from 'vue-router'
import DesignerView from './views/DesignerView.vue'
import HomeView from './views/HomeView.vue'
import ResearchView from './views/ResearchView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/designer', name: 'designer', component: DesignerView },
  { path: '/pesquisa', name: 'research', component: ResearchView },
  { path: '/programacao', redirect: { path: '/', hash: '#projects' } },
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
