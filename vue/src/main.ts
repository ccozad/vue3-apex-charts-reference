import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { createApp } from 'vue'
import type { Plugin } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)

app.use(router)
// vue3-apexcharts' default export intersects Component & Plugin; cast to Plugin
// so app.use() resolves to the plugin-install overload.
app.use(VueApexCharts as Plugin)

app.mount('#app')
