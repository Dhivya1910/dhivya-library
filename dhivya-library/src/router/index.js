import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import AccessDeniedView from '@/views/AccessDeniedView.vue'

const routes = [
  { path: '/', component: HomeView },
  { 
    path: '/about', 
    component: AboutView,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('isAuthenticated')
      if (isAuthenticated === 'true') {
        next()
      } else {
        next('/access-denied')
      }
    }
  },
  { path: '/login', component: LoginView },
  { path: '/access-denied', component: AccessDeniedView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
