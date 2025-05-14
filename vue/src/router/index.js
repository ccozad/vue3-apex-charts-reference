import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import AreaChartExample from '@/views/AreaChartExample.vue'
import BarChartExample from '@/views/BarChartExample.vue'
import BoxChartExample from '@/views/BoxChartExample.vue'
import ColumnChartExample from '@/views/ColumnChartExample.vue'
import DonutChartExample from '@/views/DonutChartExample.vue'
import LineChartExample from '@/views/LineChartExample.vue'
import HomeView from '@/views/HomeView.vue'
import Header from '@/components/Header.vue'
import TreemapChartExample from '@/views/TreemapChartExample.vue'


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
    },
    {
        path: '/simple/area-chart',
        name: 'simpleareachart',
        components: {
          default: AreaChartExample,
          header: Header
        } 
    },
    {
        path: '/simple/column-chart',
        name: 'simplecolumnchart',
        components: {
          default: ColumnChartExample,
          header: Header
        } 
    },
    {
        path: '/simple/box-chart',
        name: 'simpleboxchart',
        components: {
          default: BoxChartExample,
          header: Header
        } 
    },
    {
        path: '/simple/donut-chart',
        name: 'simpledonutchart',
        components: {
          default: DonutChartExample,
          header: Header
        } 
    },
    {
      path: '/simple/treemap-chart',
      name: 'simpletreemapchart',
      components: {
        default: TreemapChartExample,
        header: Header
      } 
  }
  ]
})

export default router
