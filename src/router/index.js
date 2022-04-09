import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/tests-avis-de-chats',
    name: 'Tests',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/prenoms-chats',
    name: 'CatsNames',
    component: () => import( '../views/BlogCategoryNames.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
