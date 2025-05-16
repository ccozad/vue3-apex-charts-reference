<script setup>
import BoxChart from '@/components/BoxChart.vue';
</script>

<template>
  <div>
    <h1 class="p-3">Box Chart</h1>
    <div class="container-fluid p-2">
        <div class="row">
            <div class="col-8">
                <BoxChart />
            </div>
            <div class="col-4">
                <h3>
                    Resources
                </h3>
                <ul>
                    <li>
                        <a href="https://github.com/ccozad/vue3-apex-charts-reference/blob/main/vue/src/components/BoxChart.vue" target="_blank">Vue 3 Source Code</a>
                    </li>
                    <li>
                        <a href="https://apexcharts.com/docs/chart-types/boxplot/" target="_blank">Box Chart Documentation</a>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
  </div>
</template>