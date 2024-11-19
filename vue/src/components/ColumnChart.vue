<script setup>
import { ref } from 'vue';

const options = ref({
    chart: {
        type: 'bar',
        stacked: true,
        toolbar: {
            show: false,
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    title: {
        text: 'Monthly Household Spending'
    }
});

const series = ref([
    {
        name: 'Housing',
        data: [750, 750, 800, 800, 800, 800, 800, 800, 900, 900, 900, 900]
    },
    {
        name: 'Transportation',
        data: [100, 175, 300, 100, 200, 300, 140, 270, 50, 180, 90, 130]
    },
    {
        name: 'Food',
        data: [200, 250, 300, 350, 220, 150, 300, 250, 100, 450, 100, 150]
    },
    {
        name: 'Entertainment',
        data: [50, 100, 130, 100, 270, 120, 100, 210, 160, 100, 75, 90]
    }
]);
</script>

<template>
    <apexchart :options="options" :series="series" />
</template>