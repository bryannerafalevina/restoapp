import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Menu from '../views/MenuView.vue';
import BookATable from '../views/BookATableView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
  { path: '/book-a-table', component: BookATable },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;