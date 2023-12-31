import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/width-height',
      name: 'width-height',
      component: () => import('../views/WidthHeightView.vue')
    },
    {
      path: '/margin-padding',
      name: 'Margin-padding',
      component: () => import('../views/MarginPaddingView.vue')
    }
  ]
})

export default router
