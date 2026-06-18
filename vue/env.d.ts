/// <reference types="vite/client" />

// vue3-apexcharts registers <apexchart> globally via app.use(VueApexCharts),
// so make the global component known to vue-tsc for template type-checking.
declare module 'vue' {
  interface GlobalComponents {
    apexchart: (typeof import('vue3-apexcharts'))['default']
  }
}

export {}
