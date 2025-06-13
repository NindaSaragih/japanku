<template>
  <div class="card">
    <img :src="anime.image" :alt="anime.title" />
    <h3>{{ anime.title }}</h3>
    <p>{{ anime.description }}</p>
  </div>
</template>

<script setup>
defineProps(['anime'])
</script>

<style scoped>
.card {
  background: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 0 10px #ccc;
  max-width: 200px;
}
img {
  width: 100%;
  border-radius: 5px;
}
</style>