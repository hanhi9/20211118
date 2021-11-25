import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import about from '@/views/about.vue';
import home from '@/views/home.vue';
import login from '@/views/login.vue';
import main from '@/views/main.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'about',
      component: about
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})