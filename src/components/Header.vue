<template>
  <header class="header">
    <h1>Japanku</h1>
    <input type="text" v-model="search" placeholder="Search anime..." @input="emitSearch" />
  </header>
</template>

<script setup>
import { ref } from 'vue'
const search = ref('')
const emit = defineEmits(['search'])
const emitSearch = () => emit('search', search.value)
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #b3e5fc;
  padding: 1rem;
}
input {
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
}
</style>