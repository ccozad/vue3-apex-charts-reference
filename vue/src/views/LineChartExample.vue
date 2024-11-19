<script setup>
import LineChart from '@/components/LineChart.vue';
</script>

<template>
  <div>
    <h1 class="p-3">Line Chart</h1>
    <div class="container-fluid p-2">
        <div class="row">
            <div class="col-8">
                <LineChart />
            </div>
            <div class="col-4">
                <h3>
                    Resources
                </h3>
                <ul>
                    <li>When to use:
                        <ul>
                            <li>When you want to show relationships between two variables</li>
                            <li>When you want to show trends over time</li>
                            <li>When you want to show the difference between two or more data series</li>
                        </ul>
                    </li>
                    <li>Related charts:
                        <ul>
                            <li><a href="/simple/area-chart">Area Chart</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://github.com/ccozad/vue3-apex-charts-reference/blob/main/vue/src/components/LineChart.vue" target="_blank">Vue 3 Source Code</a>
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