import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Reg from './views/Reg.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      
      component: Home
    },
    {
      path: '/reg',
      component: Reg
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/deilte',
      component: () => import(/* webpackChunkName: "about" */ './views/deilte.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
