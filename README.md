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