<script setup>
import LineChart from '@/components/LineChart.vue';
</script>

<template>
  <div>
    <h1 class="p-3">Simple Line Chart</h1>
    <div class="container-fluid p-2">
        <div class="row">
            <div class="col-9">
                <LineChart />
            </div>
            <div class="col-3">
                <h3>
                    Resources
                </h3>
                <ul>
                    <li>
                        <a href="https://github.com/ccozad/vue3-apex-charts-reference/blob/main/vue/src/components/LineChart.vue" target="_blank">Source Code</a>
                    </li>
                    <li>
                        <a href="https://apexcharts.com/docs/chart-types/line-chart/" target="_blank">Line Chart Documentation</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>