<script setup>
import ColumnChart from '@/components/ColumnChart.vue';
</script>

<template>
  <div>
    <h1 class="p-3">Column Chart</h1>
    <div class="container-fluid p-2">
        <div class="row">
            <div class="col-8">
                <ColumnChart />
            </div>
            <div class="col-4">
                <h3>
                    Resources
                </h3>
                <ul>
                    <li>When to use:
                        <ul>
                            <li>When you want to compare the same categories over time</li>
                            <li>When you want compare totals of all categories for each time period</li>
                        </ul>
                    </li>
                    <li>Related charts:
                        <ul>
                            <li><a href="/simple/bar-chart">Bar Chart</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://github.com/ccozad/vue3-apex-charts-reference/blob/main/vue/src/components/ColumnChart.vue" target="_blank">Source Code</a>
                    </li>
                    <li>
                        <a href="https://apexcharts.com/docs/chart-types/column-chart" target="_blank">Column Chart Documentation</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>