<script setup lang="ts">
const props = defineProps<{ title: string; link: string; image: string }>()
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">
        <RouterLink :to="props.link" class="text-dark text-decoration-none">{{
          props.title
        }}</RouterLink>
      </h5>
    </div>
    <div class="card-body">
      <RouterLink :to="props.link"
        ><img :src="props.image" class="card-img-top" alt="..."
      /></RouterLink>
    </div>
  </div>
</template>
