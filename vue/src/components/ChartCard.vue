<script setup lang="ts">
const props = defineProps<{ title: string; link: string; image: string }>()
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">
        <a :href="`${props.link}`" class="text-dark text-decoration-none">{{ props.title }}</a>
      </h5>
    </div>
    <div class="card-body">
      <a :href="`${props.link}`"><img :src="props.image" class="card-img-top" alt="..." /></a>
    </div>
  </div>
</template>
