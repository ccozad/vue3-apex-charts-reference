<script setup>
import { ref } from 'vue';

const options = ref({
    chart: {
        height: 350,
        type: "treemap",
    },
    title: {
        text: 'Resident Population of the US in 2024 (in millions)'
    }
});

const series = ref([
    {
        data: [
          {
            x: "California",
            y: 39.43,
          },
          {
            x: "Texas",
            y: 31.29,
          },
          {
            x: "Florida",
            y: 23.37,
          },
          {
            x: "New York",
            y: 19.87,
          },
          {
            x: "Pennslyvania",
            y: 13.08,
          },
          {
            x: "Illinois",
            y: 12.71,
          },
          {
            x: "Ohio",
            y: 11.88,
          },
          {
            x: "Georgia",
            y: 11.18,
          },
          {
            x: "North Carolina",
            y: 11.05,
          },
          {
            x: "Michigan",
            y: 10.14,
          },
          {
            x: "New Jersey",
            y: 9.5,
          },
          {
            x: "Virginia",
            y: 8.81,
          },
          {
            x: "Washington",
            y: 7.96,
          },
          {
            x: "Arizona",
            y: 7.58,
          },
          {
            x: "Tennessee",
            y: 7.23,
          },
          {
            x: "Massachusetts",
            y: 7.14,
          },
          {
            x: "Indiana",
            y: 6.92,
          },
          {
            x: "Maryland",
            y: 6.26,
          },
          {
            x: "Missouri",
            y: 6.25,
          },
          {
            x: "Colorado",
            y: 5.96,
          },
          {
            x: "Wisconsin",
            y: 5.96,
          },
        ],
    },
]);
</script>

<template>
    <apexchart :options="options" :series="series" />
</template>