<script setup>
import { ref } from 'vue';

const options = ref({
    chart: {
        height: 350,
        type: "treemap",
    },
    dataLabels: {
        enabled: true,
        style: {
            fontSize: '12px',
        },
        formatter: function(text, op) {
            return [text, op.value]
        },
        offsetY: -4,
    },
    plotOptions: {
        treemap: {
          enableShades: false,
        }
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
          {
            x: "Minnesota",
            y: 5.79,
          },
          {
            x: "South Carolina",
            y: 5.48,
          },
          {
            x: "Alabama",
            y: 5.16,
          },
          {
            x: "Louisiana",
            y: 4.6,
          },
          {
            x: "Kentucky",
            y: 4.59,
          },
          {
            x: "Oregon",
            y: 4.27,
          },
          {
            x: "Oklahoma",
            y: 4.1,
          },
          {
            x: "Connecticut",
            y: 3.68,
          },
          {
            x: "Utah",
            y: 3.5,
          },
          {
            x: "Nevada",
            y: 3.27
          },
          {
            x: "Iowa",
            y: 3.24,
          },
          {
            x: "Arkansas",
            y: 3.09,
          },
          {
            x: "Kansas",
            y: 2.97,
          },
          {
            x: "Mississippi",
            y: 2.94,
          },
          {
            x: "New Mexico",
            y: 2.13,
          },
          {
            x: "Nebraska",
            y: 2.01,
          },
          {
            x: "Idaho",
            y: 2,
          },
          {
            x: "West Virginia",
            y: 1.77,
          },
          
          {
            x: "Hawaii",
            y: 1.45,
          },
          {
            x: "Maine",
            y: 1.41,
          },
          {
            x: "New Hampshire",
            y: 1.41,
          },
          {
            x: "Montana",
            y: 1.14,
          },
          {
            x: "Rhode Island",
            y: 1.11,
          },
          {
            x: "Delaware",
            y: 1.05,
          },
          {
            x: "South Dakota",
            y: 0.92,
          },
          {
            x: "North Dakota",
            y: 0.8,
          },
          {
            x: "Alaska",
            y: 0.74,
          },
          {
            x: "Vermont",
            y: 0.65,
          },
          {
            x: "Wyoming",
            y: 0.59,
          },
        ],
    },
]);
</script>

<template>
    <apexchart :options="options" :series="series" />
</template>