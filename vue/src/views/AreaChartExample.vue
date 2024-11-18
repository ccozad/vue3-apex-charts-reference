<script setup>
import AreaChart from '@/components/AreaChart.vue';
</script>

<template>
  <div>
    <h1 class="p-3">Area Chart</h1>
    <div class="container-fluid p-2">
        <div class="row">
            <div class="col-9">
                <AreaChart />
            </div>
            <div class="col-3">
                <h3>
                    Resources
                </h3>
                <ul>
                    <li>
                        <a href="https://github.com/ccozad/vue3-apex-charts-reference/blob/main/vue/src/components/AreaChart.vue" target="_blank">Source Code</a>
                    </li>
                    <li>
                        <a href="https://apexcharts.com/docs/chart-types/area-chart/" target="_blank">Area Chart Documentation</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>