<script setup>
import { ref } from 'vue';

const options = ref({
    chart: {
        type: 'line',
        toolbar: {
            show: false,
        }
    },
    stroke: {
        curve: 'smooth',
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    title: {
        text: 'Sacramento, CA, Average Temps'
    },
    colors: ["#FF0000", "#0000FF"]
});

const series = ref([
    {
        name: 'Highs (F)',
        data: [54, 60, 65, 71, 80, 87, 92, 91, 87, 78, 64, 54]
    },
    {
        name: 'Lows (F)',
        data: [39, 41, 44, 46, 51, 56, 58, 58, 56, 50, 43, 38]
    }
]);
</script>

<template>
    <apexchart :options="options" :series="series" />
</template>