<script setup>
import { ref } from 'vue';

const options = ref({
    chart: {
        height: 350,
        type: "treemap",
    },
    title: {
        text: 'Population'
    }
});

const series = ref([
    {
        data: [
          {
            x: "New Delhi",
            y: 218,
          },
          {
            x: "Kolkata",
            y: 149,
          },
          {
            x: "Mumbai",
            y: 184,
          },
          {
            x: "Ahmedabad",
            y: 55,
          },
          {
            x: "Bangaluru",
            y: 84,
          },
          {
            x: "Pune",
            y: 31,
          },
          {
            x: "Chennai",
            y: 70,
          }
        ],
    },
]);
</script>

<template>
    <apexchart :options="options" :series="series" />
</template>