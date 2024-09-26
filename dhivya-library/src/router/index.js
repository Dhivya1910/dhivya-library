import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import AccessDeniedView from '@/views/AccessDeniedView.vue'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import AddBookView from '@/views/AddBookView.vue'
import GetBookCountView from '../views/GetBookCountView.vue';
import AddBookFirebase from '../views/AddBookFirebase.vue';


const routes = [
  { path: '/', component: HomeView },
  { 
    path: '/about', 
    component: AboutView,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      const isRole = localStorage.getItem('role');
      if (isAuthenticated === 'true' && isRole === 'admin') {
        next()
      } else {
        next('/access-denied')
      }
    }
  },
  { path: '/login', component: LoginView },
  { path: '/access-denied', component: AccessDeniedView },
  { path: '/addBook', component: AddBookView},
  
  { path: '/FirebaseSigninView', name: 'FirebaseSigninView', component: FirebaseSigninView }, 
  { path: '/FirebaseRegisterView', name: 'FirebaseRegisterView', component: FirebaseRegisterView },
  {
    path: '/AddBookFirebase',
    name: 'AddBookFirebase',
    component: AddBookFirebase,
  },

  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router
