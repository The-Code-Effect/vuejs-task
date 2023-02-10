// Composables
import { createRouter, createWebHistory, } from 'vue-router'
import Main from '@/views/Main.vue'

const routes = [
  {
    path: '/',
    redirect: { path: '/articles' }
  },
  {
    path: '/articles',
    component:Main
  },
  {
    path: '/audio',
    component:Main
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
