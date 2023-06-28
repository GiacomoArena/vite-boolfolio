import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue';
import Portfolios from './pages/Portfolios.vue';
import About from './pages/About.vue';
import Detail from './pages/Detail.vue';

const router = createRouter({

  history:createWebHistory(),
  linkExactActiveClass: 'active',
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolios',
      name: 'portfolios',
      component: Portfolios
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/:slug',
      name: 'detail',
      component: Detail
    },
    
  ]

})

export {router}