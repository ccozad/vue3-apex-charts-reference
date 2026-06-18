<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ApexAxisChartSeries, ApexOptions } from 'apexcharts'

const props = defineProps<{
  showToolbar?: boolean
  showDataLabels?: boolean
  enableZoom?: boolean
  showMarkers?: boolean
  gradientFill?: boolean
  smoothCurve?: boolean
  showGrid?: boolean
}>()

// Computed so each toggle reactively reconfigures the chart.
const options = computed<ApexOptions>(() => ({
  chart: {
    type: 'area',
    toolbar: {
      show: props.showToolbar
    },
    zoom: {
      enabled: props.enableZoom
    }
  },
  xaxis: {
    categories: ['10/17', '10/18', '10/21', '10/22', '10/23', '10/24', '10/25']
  },
  dataLabels: {
    enabled: props.showDataLabels
  },
  stroke: {
    curve: props.smoothCurve ? 'smooth' : 'straight'
  },
  markers: {
    size: props.showMarkers ? 5 : 0
  },
  fill: {
    type: props.gradientFill ? 'gradient' : 'solid'
  },
  grid: {
    show: props.showGrid
  },
  title: {
    text: 'TSLA Stock Price'
  }
}))

const series = ref<ApexAxisChartSeries>([
  {
    name: 'High',
    data: [222.08, 222.28, 220.48, 218.22, 218.72, 262.1199, 269.49]
  },
  {
    name: 'Low',
    data: [217.9, 219.23, 215.726, 215.26, 212.11, 242.65, 255.32]
  }
])
</script>

<template>
  <apexchart :options="options" :series="series" />
</template>
