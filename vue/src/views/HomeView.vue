<script setup>
import ChartCard from '@/components/ChartCard.vue';

const charts = [
    {
        title: 'Area Chart',
        image: './area-chart.png',
        link: '/simple/area-chart'
    },
    {
        title: 'Bar Chart',
        image: './bar-chart.png',
        link: '/simple/bar-chart'
    },
    {
        title: 'Box Chart',
        image: './box-chart.png',
        link: '/simple/box-chart'
    },
    {
        title: 'Column Chart',
        image: './column-chart.png',
        link: '/simple/column-chart'
    },
    {
        title: 'Donut Chart',
        image: './donut-chart.png',
        link: '/simple/donut-chart'
    },
    {
        title: 'Line Chart',
        image: './line-chart.png',
        link: '/simple/line-chart'
    },
    {
        title: 'Treemap Chart',
        image: './treemap-chart.png',
        link: '/simple/treemap-chart'
    }
];
</script>

<template>
  <div>
    <div>
        <div class="row p-3">
            <div class="col-12">
                <h2>Simple Examples</h2>
            </div>
        </div>
        <div class="row m-1">
            <div class="col-md-4 col-sm-6 col-xs-12 p-1" v-for="chart in charts">
                <ChartCard :title="chart.title" :image="chart.image" :link="chart.link" />
            </div>
        </div>
    </div>
  </div>
</template>
