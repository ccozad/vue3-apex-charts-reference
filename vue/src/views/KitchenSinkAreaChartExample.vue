<script setup>
import AreaChart from '@/components/AreaChart.vue';
import { ref } from 'vue';

const showToolbar = ref(false);
</script>

<template>
  <div>
    <h1 class="p-3">Area Chart</h1>
    <div class="container-fluid p-2">
        <div class="row">
            <div class="col-8">
                <AreaChart :showToolbar="showToolbar" />
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
                        <label class="form-check-label" for="toggleToolbar">
                            Show Toolbar
                        </label>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>