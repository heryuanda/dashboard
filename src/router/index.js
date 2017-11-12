import Vue from 'vue'
import Router from 'vue-router'
import util from '@/utils/'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: util.asyncView('Login')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      components: {
        default: util.asyncView('Dashboard'),
        navbar: util.asyncComponent('NavigationBar'),
        footer: util.asyncComponent('Footer')
      }
    },
    {
      path: '/dashboard/cards',
      name: 'cards',
      components: {
        default: util.asyncView('Cards'),
        navbar: util.asyncComponent('NavigationBar'),
        footer: util.asyncComponent('Footer')
      }
    }
  ]
})

export default router
