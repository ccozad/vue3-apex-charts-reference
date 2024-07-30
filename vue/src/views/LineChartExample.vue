<script setup>
import LineChart from '@/components/LineChart.vue';
</script>

<template>
  <div>
    <h1>Simple Line Chart</h1>
    <div class="container-fluid p-2">
        <div class="row">
            <div class="col-9">
                <LineChart />
            </div>
            <div class="col-3">
                This is an example of a line chart
            </div>
        </div>
    </div>
  </div>
</template>