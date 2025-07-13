<template>
  <div class="app-layout">
    <Sidebar v-if="!isLoginPage" class="sidebar" />
    <div class="main-content">
      <Header v-if="!isLoginPage" :onSearch="onSearch" />
      <div class="router-container">
        <router-view :searchQuery="searchQuery" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'

const searchQuery = ref('')
const onSearch = (query) => {
  searchQuery.value = query
}

const route = useRoute()
const isLoginPage = computed(() => route.path === '/login')
</script>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
  background-color: #e0f7fa;
}

.sidebar {
  width: 250px;
  background-color: #90cdf4;
  padding: 1rem;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.router-container {
  flex: 1;
  padding: 1.5rem;
  background-color: #e3f2fd;
}
</style>
