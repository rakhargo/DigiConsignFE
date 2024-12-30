import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue'; // Sesuaikan path dengan komponen Anda
import HomeView from '../views/HomeView.vue';


const routes = [
    {
      path: '/login',
      name: 'login',
      // component: () => import('../views/LoginPage.vue'),
      component: LoginPage
    },
    //export default router;
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterPage.vue'),
    },
    {
      path: '/',
      name: 'home',
      //component: () => import('../views/HomeView.vue'),
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/product/:id',
      name: 'product-detail',
      component: () => import('../views/ProductDetailView.vue'),
      // props: true,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/CartPage.vue'),
    },
    {
      path: '/create-product',
      name: 'create-product',
      component: () => import('../views/ProductPage.vue'),
    },
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
