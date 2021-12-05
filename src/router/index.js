import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About.vue'
import Main from '@/views/Main.vue'
import Params from '@/views/Params.vue'
//import Params from '@/views/Params.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Main',
      name: 'Main',
      component: Main
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Login',
      //component: Params,
      component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
      name: 'Login',
      props: true
    },
    {
      path: '/Params',
      component: Params,
      name: 'Params'
    },
  ]
})