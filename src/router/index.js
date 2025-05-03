import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // Aquí agregaremos más rutas luego
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
