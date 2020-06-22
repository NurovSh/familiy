import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import( '../components/layout/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      }, {
        path: '/products',
        name: 'Produtcs',
        component: () => import( '../views/Products.vue'),
        beforeEnter: (to, from, next) => {
          store.dispatch('request', {path: 'products', state: 'products'}).then(() => {
            next();
          })
        }
      },
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
