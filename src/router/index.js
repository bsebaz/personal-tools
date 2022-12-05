import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SqlGenerator from '../views/SqlGenerator.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/About.vue',
    name: 'About',
    component: AboutView
  },
  {
    path: '/SqlGenerator.vue',
    name: 'SqlGenerator',
    component: SqlGenerator
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
