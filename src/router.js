import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/users',
      name: 'users',
      component: () => import(/* webpackChunkName: "about" */ './views/Users.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/users/:id',
      name: 'user',
      component: () => import(/* webpackChunkName: "about" */ './views/User.vue'),
    }
  ]
})
