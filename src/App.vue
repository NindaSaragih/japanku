<template>
  <div class="app">
    <Sidebar />
    <div class="main-content">
      <Header :onSearch="onSearch" />
      <router-view :searchQuery="searchQuery" />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import { ref } from 'vue'

const searchQuery = ref('')
const onSearch = (query) => {
  searchQuery.value = query
}
</script>

<style scoped>
.app {
  display: flex;
  min-height: 100vh;
}
.main-content {
  flex-grow: 1;
  background-color: #e0f7fa;
}
</style>