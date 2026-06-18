# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

This is a teaching/reference repo demonstrating how to combine **Vue 3 + ApexCharts (via `vue3-apexcharts`) + Bootstrap 5**. The root `README.md` is a step-by-step tutorial for building the project from scratch; the actual application lives in the `vue/` subdirectory. Each page showcases one chart type alongside links to its source and the upstream ApexCharts docs.

## Commands

All commands run from the `vue/` directory (not the repo root):

```bash
cd vue
npm install
npm run dev          # Vite dev server (default http://localhost:5173)
npm run build        # production build to dist/
npm run preview      # serve the production build
npm run test:unit    # run Vitest (watch mode by default)
npm run lint         # ESLint with --fix over .vue,.js,.jsx,.cjs,.mjs
npm run format       # Prettier over src/
```

Run a single test file: `npx vitest run src/path/to/file.spec.js`. Note: there are currently **no test files** in `src/`, though the Vitest toolchain (jsdom, `@vue/test-utils`) is configured.

## Architecture

The codebase is plain JavaScript (no TypeScript) using Vue 3 `<script setup>` SFCs. There is no state management library (no Pinia/Vuex) and no shared data layer — each chart hardcodes its own demo data.

**Two-slot routing layout.** `src/router/index.js` registers every route with *named* component slots — `default` plus `header` — both rendered by `src/App.vue` via two `<RouterView>`s (`<RouterView name="header" />` then `<RouterView />`). So `Header.vue` is mounted by the router on every route, not imported into `App.vue`. When adding a page, register it in the router with **both** the `default` and `header` components or the nav bar disappears on that route.

**Page = View + Chart pair.** Each chart type follows a strict, repeated convention:
- A **View** in `src/views/<Name>ChartExample.vue` — a Bootstrap `container-fluid` / `row` layout with the chart in one column and a "Resources" list (link to the component's GitHub source + ApexCharts docs) in the other.
- A **Chart component** in `src/components/<Name>Chart.vue` — defines reactive `options` and `series` via `ref()` and renders a single `<apexchart :options="options" :series="series" />`.

To add a new chart type, copy this pair, then add the route (router) and the dropdown link in `src/components/Header.vue`. Routes use the `/simple/<name>-chart` path convention.

**Global registration.** `src/main.js` wires up the app-wide pieces: Bootstrap CSS + JS imports, `vue3-apexcharts` registered via `app.use(VueApexCharts)` (which is what makes the `<apexchart>` element available everywhere), and the router.

**Shared components.** `Header.vue` is the Bootstrap navbar with the chart dropdown (hardcoded `<a href>` links, not `<RouterLink>`). `ChartCard.vue` is a presentational Bootstrap card (title/link/image props) used by the home page gallery.

## Conventions

- The `@` alias maps to `vue/src/` (configured in both `vite.config.js` and `jsconfig.json`). Use `@/components/...` imports.
- Most chart `options` set `chart.toolbar.show: false` to hide the ApexCharts toolbar — match this when adding charts unless the toolbar is intentionally wanted.
- ESLint extends `plugin:vue/vue3-essential` with Prettier formatting deferred to Prettier (`@vue/eslint-config-prettier/skip-formatting`).
