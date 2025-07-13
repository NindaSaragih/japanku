<template>
  <nav class="sidebar">
    <router-link to="/home">Home</router-link>
    <router-link to="/anime">Anime List</router-link>
    <router-link to="/schedule">Jadwal Rilis</router-link>
    <router-link to="/ongoing">On-going Anime</router-link>
    <router-link to="/genre">Genre List</router-link>
    <router-link to="/anime/add">Tambah Anime</router-link>
    <router-link to="/login">Login</router-link>
  </nav>
</template>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #81d4fa;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 150vh;
  box-sizing: border-box;
}

.sidebar a {
  color: #01579b;
  text-decoration: none;
  margin-bottom: 12px;
  font-weight: 500;
  transition: color 0.2s;
}

.sidebar a:hover {
  color: #004d74;
}

.sidebar a.router-link-active {
  font-weight: bold;
  color: #002f4b;
}
</style>
