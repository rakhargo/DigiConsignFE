import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import HomeView from '../views/HomeView.vue';
import ProfilePage from '../views/ProfilePage.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: { requiresGuest: true }, // Only for guests (not logged in)
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterPage.vue'),
    meta: { requiresGuest: true }, // Only for guests (not logged in)
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
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
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/CartPage.vue'),
  },
  {
    path: '/sell',
    name: 'sell-product',
    component: () => import('../views/SellProductView.vue'),
    meta: { requiresAuth: true }, // Only for logged-in users
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/LogoutView.vue'),
  },
  { path: '/profile', 
    name: 'Profile', 
    component: () => import('../views/ProfilePage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global Navigation Guard
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('token'); // Check for token in localStorage

  if (to.matched.some((record) => record.meta.requiresAuth) && !isLoggedIn) {
    // Redirect to login if not authenticated
    next({ name: 'login' });
  } else if (to.matched.some((record) => record.meta.requiresGuest) && isLoggedIn) {
    // Redirect to home if logged in
    next({ name: 'home' });
  } else {
    // Allow access
    next();
  }
});

export default router;
