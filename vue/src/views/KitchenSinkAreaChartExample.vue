<script setup lang="ts">
import ComplexAreaChart from '@/components/ComplexAreaChart.vue'
import { reactive } from 'vue'

const settings = reactive({
  showToolbar: false,
  showDataLabels: false,
  enableZoom: true,
  showMarkers: true,
  gradientFill: true,
  smoothCurve: true,
  showGrid: true
})

const toggles = [
  { key: 'showToolbar', label: 'Toolbar' },
  { key: 'showDataLabels', label: 'Data labels' },
  { key: 'enableZoom', label: 'Zoom' },
  { key: 'showMarkers', label: 'Markers' },
  { key: 'gradientFill', label: 'Gradient fill' },
  { key: 'smoothCurve', label: 'Smooth curve' },
  { key: 'showGrid', label: 'Grid' }
] as const
</script>

<template>
  <div>
    <h1 class="p-3">Complex Area Chart</h1>
    <div class="container-fluid p-2">
      <div class="row">
        <div class="col-8">
          <ComplexAreaChart v-bind="settings" />
        </div>
        <div class="col-4">
          <h3>Chart options</h3>
          <p>Toggle options to reconfigure the chart live.</p>
          <form>
            <div class="form-check form-switch" v-for="toggle in toggles" :key="toggle.key">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                :id="toggle.key"
                v-model="settings[toggle.key]"
              />
              <label class="form-check-label" :for="toggle.key">{{ toggle.label }}</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
