<script setup>
import { ref } from 'vue';

const options = ref({
    chart: {
        type: 'bar',
        toolbar: {
            show: false,
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    title: {
        text: 'Monthly Sales'
    }
});

const series = ref([
    {
        name: 'Sales',
        data: [8000, 8450, 8900, 9350, 9800, 10250, 10700, 11150, 9800, 8450, 7100, 7550]
    }
]);
</script>

<template>
    <apexchart :options="options" :series="series" />
</template>