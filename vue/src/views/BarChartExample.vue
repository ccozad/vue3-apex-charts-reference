<script setup>
import BarChart from '@/components/BarChart.vue';
</script>

<template>
  <div>
    <h1 class="p-3">Bar Chart</h1>
    <div class="container-fluid">
        <div class="row">
            <div class="col-8">
                <BarChart />
            </div>
            <div class="col-4">
                <h3>
                    Resources
                </h3>
                <ul>
                    <li>When to use:
                        <ul>
                            <li>When you want to show variations in a value over time</li>
                            <li>When you want to compare values in multiple data series over time</li>
                        </ul>
                    </li>
                    <li>Related charts:
                        <ul>
                            <li><a href="/simple/column-chart">Column Chart</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://github.com/ccozad/vue3-apex-charts-reference/blob/main/vue/src/components/BarChart.vue" target="_blank">Vue 3 Source Code</a>
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