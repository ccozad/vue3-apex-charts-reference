<script setup lang="ts">
import AreaChart from '@/components/AreaChart.vue'
</script>

<template>
  <div>
    <h1 class="p-3">Area Chart</h1>
    <div class="container-fluid p-2">
      <div class="row">
        <div class="col-8">
          <AreaChart />
        </div>
        <div class="col-4">
          <h3>Resources</h3>
          <ul>
            <li>
              When to use:
              <ul>
                <li>When you want a visual that fills more visible space than a line chart</li>
              </ul>
            </li>
            <li>
              Related charts:
              <ul>
                <li><RouterLink to="/simple/line-chart">Line Chart</RouterLink></li>
              </ul>
            </li>
            <li>
              <a
                href="https://github.com/ccozad/vue3-apex-charts-reference/blob/main/vue/src/components/AreaChart.vue"
                target="_blank"
                >Vue 3 Source Code</a
              >
            </li>
            <li>
              <a href="https://apexcharts.com/docs/chart-types/area-chart/" target="_blank"
                >Area Chart Documentation</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
