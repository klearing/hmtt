import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import User from '@/views/User'
import Layout from '@/views/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout/Home'
  },
  {
    path: '/login',
    component: Login
  }, {
    path: '/layout',
    component: Layout,
    children: [{
      path: 'home',
      component: Home
    }, {
      path: 'user',
      component: User
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
