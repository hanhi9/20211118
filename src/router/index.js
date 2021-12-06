import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About.vue'
import Main from '@/views/Main.vue'
import Params from '@/views/Params.vue'
import Info from '@/views/Info.vue'
//import Params from '@/views/Params.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      props: true
    },
    {
      path: '/About',
      name: 'About',
      component: About,
      props: true
    },
    {
      path: '/Login',
      //component: Params,
      component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
      name: 'Login',
      props: true
    },
    {
      path: '/Params',
      component: Params,
      name: 'Params',
      props: true
    },
    {
      path: '/Info',
      component: Info,
      name: 'Info',
      props: true
    }
  ]
})