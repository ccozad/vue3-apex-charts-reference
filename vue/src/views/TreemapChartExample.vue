<script setup>
import TreemapChart from '@/components/TreemapChart.vue';
</script>

<template>
  <div>
    <h1 class="p-3">Treemap Chart</h1>
    <div class="container-fluid p-2">
        <div class="row">
            <div class="col-8">
                <TreemapChart />
            </div>
            <div class="col-4">
                <h3>
                    Resources
                </h3>
                <ul>
                    <li>When to use:
                        <ul>
                            <li>To show large hierarchical data sets</li>
                            <li>When space efficiency is important</li>
                            <li>To visualize proportions of a whole</li>
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