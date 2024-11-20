<script setup>
import { ref } from 'vue';

const options = ref({
    chart: {
        type: 'boxPlot',
        toolbar: {
            show: false,
        }
    },
    title: {
        text: '2024 NFL Points For'
    },
    plotOptions: {
        bar: {
            horizontal: true
        }
    }
});

const series = ref([
    {
        data: [
            {
                x: "Steelers",
                y: [13, 18, 24, 28, 37]
            },
            {
                x: "Chiefs",
                y: [16, 21.25, 26, 27, 30]
            }
        ]

    }
]);
</script>

<template>
    <apexchart :options="options" :series="series" />
</template>