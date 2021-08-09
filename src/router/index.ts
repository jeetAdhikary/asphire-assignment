import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import CommonView from '@/views/CommonView.vue'
import Load from '@/views/Loan.vue'

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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
