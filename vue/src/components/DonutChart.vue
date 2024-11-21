<script setup>
import { ref } from 'vue';

const options = ref({
    chart: {
        type: 'donut',
        toolbar: {
            show: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    title: {
        text: 'Fruit Preference'
    },
    plotOptions: {
        pie: {
            customScale: 0.8
        }
    },
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana'],
});

const series = ref([44, 55, 41, 17, 15]);
</script>

<template>
    <apexchart :options="options" :series="series" />
</template>