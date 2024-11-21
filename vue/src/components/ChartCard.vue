<script setup>
const props = defineProps(['title', 'link', 'image']);
</script>

<template>
    <div class="card">
        <div class="card-header">
            <h5 class="card-title">{{ props.title }}</h5>
        </div>
        <div class="card-body">
            <img :src="props.image" class="card-img-top" alt="...">
        </div>
       
    </div>
</template>