<script setup lang="ts">
import ComplexAreaChart from '@/components/ComplexAreaChart.vue'
import { ref } from 'vue'

const showToolbar = ref(false)
</script>

<template>
  <div>
    <h1 class="p-3">Complex Area Chart</h1>
    <div class="container-fluid p-2">
      <div class="row">
        <div class="col-8">
          <ComplexAreaChart :showToolbar="showToolbar" />
        </div>
        <div class="col-4">
          <form>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="toggleToolbar"
                v-model="showToolbar"
              />
              <label class="form-check-label" for="toggleToolbar"> Show Toolbar </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
