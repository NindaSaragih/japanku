<template>
  <nav class="sidebar">
    <router-link to="/">Home</router-link>
    <router-link to="/anime-list">Anime List</router-link>
    <router-link to="/jadwal-rilis">Jadwal Rilis</router-link>
    <router-link to="/on-going">On-Going Anime</router-link>
    <router-link to="/genre-list">Genre List</router-link>
  </nav>
</template>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #81d4fa;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
a {
  color: #01579b;
  text-decoration: none;
  margin-bottom: 10px;
}
a.router-link-active {
  font-weight: bold;
}
</style>