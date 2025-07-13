<template>
  <header class="header">
    <h1 class="title">Japanku</h1>
    <input
      type="text"
      placeholder="Search anime..."
      class="search-bar"
      @input="$emit('search', $event.target.value)"
    />
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #b3e5fc; /* biru muda */
  padding: 1rem 2rem;
  border-bottom: 2px solid #81d4fa;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #01579b;
}

.search-bar {
  padding: 0.5rem 1rem;
  border: 1px solid #81d4fa;
  border-radius: 8px;
  width: 250px;
  max-width: 100%;
  font-size: 1rem;
}
</style>
