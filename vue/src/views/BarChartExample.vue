<script setup>
import BarChart from '@/components/BarChart.vue';
</script>

<template>
  <div>
    <h1 class="p-3">Simple Bar Chart</h1>
    <div class="container-fluid">
        <div class="row">
            <div class="col-9">
                <BarChart />
            </div>
            <div class="col-3">
                <h3>
                    Resources
                </h3>
                <ul>
                    <li>
                        <a href="https://github.com/ccozad/vue3-apex-charts-reference/blob/main/vue/src/components/BarChart.vue" target="_blank">Source Code</a>
                    </li>
                    <li>
                        <a href="https://apexcharts.com/docs/chart-types/bar-chart/" target="_blank">Bar Chart Documentation</a>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
  </div>
</template>