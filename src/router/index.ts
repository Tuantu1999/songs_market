/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

import { createRouter, createWebHistory } from 'vue-router'

// Composables

const routes = [
  {
    path: '/',
    name: 'MainScreen',
    component: () => import('@/layouts/main-container.vue'),
    children: [
      {
        path: '/',
        redirect: 'home',
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('@/pages/home-page.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
