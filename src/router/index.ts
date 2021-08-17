import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import CommonView from '@/views/CommonView.vue'
import Load from '@/views/Loan.vue'
import Cards from '@/views/Cards.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/loan',
    component: Load,
  },
  {
    path: '/setting',
    component: CommonView,
  },
  {
    path: '/cards',
    component: Cards,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
