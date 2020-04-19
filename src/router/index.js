import Vue from 'vue'
import VueRouter from 'vue-router'
import EnglishKidsQuarantine from '../views/EnglishKidsQuarantine.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'EnglishKidsQuarantine',
    component: EnglishKidsQuarantine
  }
]

const router = new VueRouter({
  routes
})

export default router
