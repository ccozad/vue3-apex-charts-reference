<script setup>
import BarChart from '@/components/BarChart.vue';
</script>

<template>
  <div>
    <h1>Simple Bar Chart</h1>
    <div class="container-fluid p-2">
        <div class="row">
            <div class="col-9">
                <BarChart />
            </div>
            <div class="col-3">
                This is an example of a bar chart
            </div>
        </div>
    </div>
  </div>
</template>