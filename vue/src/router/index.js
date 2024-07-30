import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import BarChartExample from '@/views/BarChartExample.vue'
import LineChartExample from '@/views/LineChartExample.vue'
import HomeView from '@/views/HomeView.vue'
import Header from '@/components/Header.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        header: Header
      } 
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: AboutView,
        header: Header
      } 
    },
    {
        path: '/simple/bar-chart',
        name: 'simplebarchart',
        components: {
          default: BarChartExample,
          header: Header
        } 
    },
    {
        path: '/simple/line-chart',
        name: 'simplelinechart',
        components: {
          default: LineChartExample,
          header: Header
        } 
    }
  ]
})

export default router
