import { createRouter, createWebHistory } from 'vue-router'
import { getRoutes } from 'v-route-generate'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: getRoutes(import.meta.glob('../views-pages/**/**.vue'), {
    pathRoot: '../views-pages/',
  }),
})

export default router
