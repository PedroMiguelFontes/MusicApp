import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue';
import login from '@/views/login.vue';
import register from '@/views/register.vue';
import playlist from '@/views/playlist.vue';
import shop from '@/view/shop.vue';
import tickets from '@/views/tickets.vue';
import account from '@/views/account.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path:'/tickets',
      name:'tickets',
      component: tickets
    },
    {
      path:'/playlist',
      name:'playlist',
      component: playlist
    }, 
    {
      path:'/shop',
      name:'shop',
      component: shop
    },
    {
      path:'/account',
      name:'account',
      component: account
    }
  ],
})

export default router
