import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Report from '../views/Report.vue'
import AddReport from '../views/AddReport.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/report/:id',
    name: 'Report',
    component: Report
  },
  {
    path: '/add',
    name: 'AddReport',
    component: AddReport
  }
]

const router = new VueRouter({
  routes
})

export default router
