import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue';
import Portfolios from './pages/Portfolios.vue';

const router = createRouter({

  history:createWebHistory(),

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
    
  ]

})

export {router}