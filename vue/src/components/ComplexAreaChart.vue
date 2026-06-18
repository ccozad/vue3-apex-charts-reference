<script setup lang="ts">
import { ref } from 'vue'
import type { ApexOptions } from 'apexcharts'

const props = defineProps<{ showToolbar?: boolean }>()

const options = ref<ApexOptions>({
  chart: {
    type: 'area',
    toolbar: {
      show: props.showToolbar
    }
  },
  xaxis: {
    categories: ['10/17', '10/18', '10/21', '10/22', '10/23', '10/24', '10/25']
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: 'TSLA Stock Price'
  }
})

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
