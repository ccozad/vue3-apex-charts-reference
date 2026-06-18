# Vue 3 + Apex Charts Reference

![Apex Charts Vue 3 Demo](/images/apex-chart-demo.png?raw=true "Apex Charts Vue 3 Demo")

**Live demo: https://ccozad.github.io/vue3-apex-charts-reference/**

A focused, copy-pasteable reference for building data-driven charts with
[Vue 3](https://vuejs.org/), [Apex Charts](https://apexcharts.com/) (via
`vue3-apexcharts`), and [Bootstrap 5](https://getbootstrap.com/). Each page is a
self-contained example of one chart type, written as a small Vue component you
can lift straight into your own project. The app is TypeScript, built with Vite,
and deployed to GitHub Pages.

## What's in this demo

Each example is a view (the page) backed by a chart component (the reusable
chart). Click a chart to see it live, or open the source to copy it.

| Chart | Source | What it shows |
| --- | --- | --- |
| [Area](https://ccozad.github.io/vue3-apex-charts-reference/simple/area-chart) | [AreaChartExample.vue](vue/src/views/AreaChartExample.vue) | Stock high/low values over a date range |
| [Bar](https://ccozad.github.io/vue3-apex-charts-reference/simple/bar-chart) | [BarChartExample.vue](vue/src/views/BarChartExample.vue) | A single series of monthly sales |
| [Box](https://ccozad.github.io/vue3-apex-charts-reference/simple/box-chart) | [BoxChartExample.vue](vue/src/views/BoxChartExample.vue) | Horizontal box plot of a distribution |
| [Column](https://ccozad.github.io/vue3-apex-charts-reference/simple/column-chart) | [ColumnChartExample.vue](vue/src/views/ColumnChartExample.vue) | Stacked columns of monthly spending |
| [Donut](https://ccozad.github.io/vue3-apex-charts-reference/simple/donut-chart) | [DonutChartExample.vue](vue/src/views/DonutChartExample.vue) | Proportions of a whole (non-axis series) |
| [Line](https://ccozad.github.io/vue3-apex-charts-reference/simple/line-chart) | [LineChartExample.vue](vue/src/views/LineChartExample.vue) | Two smoothed series with custom colors |
| [Treemap](https://ccozad.github.io/vue3-apex-charts-reference/simple/treemap-chart) | [TreemapChartExample.vue](vue/src/views/TreemapChartExample.vue) | Hierarchical data sized by value |
| [Complex Area](https://ccozad.github.io/vue3-apex-charts-reference/complex/area-chart) | [KitchenSinkAreaChartExample.vue](vue/src/views/KitchenSinkAreaChartExample.vue) | An area chart with a live toolbar toggle |

The chart components themselves live in [`vue/src/components/`](vue/src/components).

## Run it locally

```sh
git clone https://github.com/ccozad/vue3-apex-charts-reference.git
cd vue3-apex-charts-reference/vue
npm install
npm run dev
```

Then open the URL printed by `npm run dev` (defaults to http://localhost:5173).

Other scripts (run from the `vue` directory):

| Script | Purpose |
| --- | --- |
| `npm run build` | Type-check and build for production |
| `npm run test:unit` | Run unit tests (Vitest) |
| `npm run lint` | Lint and auto-fix |
| `npm run format` | Format with Prettier |

## Adding these to your own project

Want to set up Vue 3 + Apex Charts + Bootstrap from an empty project? See
**[TUTORIAL.md](TUTORIAL.md)** for the step-by-step, install-each-piece
walkthrough.

## Where to go next

Browse the [inventory above](#whats-in-this-demo) for a chart to start from. If
something you need is missing, please file an issue. And if this helped, a star
is appreciated!

## Resources

 - https://vuejs.org/guide/quick-start.html
 - https://apexcharts.com/docs/vue-charts/
 - https://getbootstrap.com
