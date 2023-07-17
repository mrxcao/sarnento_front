import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

 import routes_ from '../router/routes.js';

const routes = [
  { path: '/',    name: 'home',    component: HomeView  },
  { path: '/login',    name: 'login',    component: () => import('../views/LoginView.vue')  },
  { path: '/dashboard',  
    name: 'dashboard',    
    component: () => import('../views/DashboardView.vue'),
    meta: {auth:true  } 
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

 router.beforeEach(routes_);

export default router

