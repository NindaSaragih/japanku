<template>
  <div class="search-bar">
    <input v-model="store.search" placeholder="Search anime..." />
  </div>
</template>
<script setup>
import { useAnimeStore } from '../store/animeStore'
const store = useAnimeStore()
</script>
<style scoped>
.search-bar { text-align: right; margin-bottom:1rem; }
.search-bar input { padding:0.5rem;width:200px;border:1px solid #888;border-radius:5px; }
</style>
