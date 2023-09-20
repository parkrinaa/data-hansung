import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Features from './views/Features';
import LoginView from './views/LoginView.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'EmptyLayout',
      component: () => import('./views/layout/EmptyLayout.vue'),
      children: [
        {
          path: '/',
          name: 'login',
          component: LoginView,
        },
      ],
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/features',
      name: 'features',
      component: Features
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
  ]
})
