import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

import routes_ from './routes';

const routes = [ // asda sd
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', component: () => import('../views/LoginView.vue') },
  { path: '/comofunciona', name: 'comofunciona', component: () => import('../views/comofuncionaView.vue') },
  { path: '/comandos', name: 'comandos', component: () => import('../views/comandosView.vue') },
  { path: '/sourcecode', name: 'sourcecode', component: () => import('../views/sourcecodeView.vue') },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: { auth: true },
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

router.beforeEach(routes_);

export default router;
