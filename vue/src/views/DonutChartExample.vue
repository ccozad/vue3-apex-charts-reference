<script setup>
import DonutChart from '@/components/DonutChart.vue';
</script>

<template>
  <div>
    <h1 class="p-3">Donut Chart</h1>
    <div class="container-fluid">
        <div class="row">
            <div class="col-8">
                <DonutChart />
            </div>
            <div class="col-4">
                <h3>
                    Resources
                </h3>
                <ul>
                    <li>
                        <a href="https://github.com/ccozad/vue3-apex-charts-reference/blob/main/vue/src/components/DonutChart.vue" target="_blank">Vue 3 Source Code</a>
                    </li>
                    <li>
                        <a href="https://apexcharts.com/docs/chart-types/pie-donut/" target="_blank">Donut Chart Documentation</a>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
  </div>
</template>