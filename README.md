# Introduction

This repo is a focused example of how to use

 - Vue.js 3 (A reactive front end framework)
 - Apex Charts (A feature rich charting library)
 - Bootstrap (A light weight, grid based UI system)
 - Bootstrap Icons (A SVG based icon library)

 This document will go over how to install each piece individually (for inclusion in existing projects) and how to run the full project locally. Each page in the app has an example of how to show a given chart along with additional references.

# Run the finished project locally

 - Clone the code
 - Change to the `vue` directory
 - Run `npm install`
 - Run `npm run dev`
 - Open a browser and navigate to the address given by the `npm run dev` command

# Create the project from scratch

## Set up the Vue.js project

### Install Dependencies

See the Vue.js quick start documentation for how to setup a project. https://vuejs.org/guide/quick-start.html

In short:
`npm create vue@latest`

For this project we picked
 - Project name: `vue `
 - Typescript? No
 - JSX Support? Yes
 - Vue Router for Single page Application development? Yes
 - Pinia? No
 - Vitest? Yes
 - End-to-end testing solution? No
 - EsLint? Yes
 - Prettier? Yes
 - Vue DevTools? No

`npm install`
 
### Clear out default content

 - Remove all of the files in the `components` directory.
 - Remove all styles from `App.vue`, files in the `views` views directory and CSS styles in the assets directory.

 - Replace the `App.vue` contents with

```vue
<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>
```

 - Replace `views/HomeView.vue` contents with

```vue
<template>
  <div>
    <h1>Home page</h1>
  </div>
</template>
```

 - Replace `views/AboutView.vue` contents with

```vue
<template>
  <div>
    <h1>About page</h1>
  </div>
</template>
```
 - Replace the `router/index.js` contents with

 ```js
 import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
```

### Try it

Make sure everything is working by confirming the urls:

 - http://localhost:5173
 - http://localhost:5173/about

## Set up Apex Charts

See https://apexcharts.com/docs/vue-charts/ for more information

### Install dependencies

You need to install Apex Charts and the Vue 3 wrapper

`npm install apexcharts vue3-apexcharts`

### Make Apex Charts available everywhere in the app

Change `main.js` to import `VueApexCharts` and have the app use it. Your main.js will look like this

```js
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from "vue3-apexcharts"; 

const app = createApp(App)

app.use(router)
app.use(VueApexCharts);

app.mount('#app')
```

### Create a basic chart

In the component directory, create a new file called `BarChart.vue` and add the following content

```vue
<script setup>
import { ref } from 'vue';

const options = ref({
    chart: {
        type: 'bar'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
});

const series = ref([
    {
        name: 'Sales',
        data: [8000, 8450, 8900, 9350, 9800, 10250, 10700, 11150, 9800, 8450, 7100, 7550]
    }
]);
</script>

<template>
    <apexchart type="bar" :options="options" :series="series" />
</template>
```

### Use the chart component

Modify `views/HomeView.vue` to use the chart component.

```vue
<script setup>
import BarChart from '@/components/BarChart.vue';
</script>

<template>
  <div>
    <h1>Home page</h1>
    <BarChart />
  </div>
</template>
```

### View results

You should see a bar graph when you visit the home page.

![Simple Bar Graph](/images/simple-bar-graph.png?raw=true "Simple Bar Graph")

# Resources

 - https://vuejs.org/guide/quick-start.html
 - https://apexcharts.com/docs/vue-charts/