<template>
  <div v-if="anime">
    <h2>{{ anime.judul }}</h2>
    <img v-if="anime.gambar" :src="anime.gambar" alt="Gambar Anime" style="max-width: 300px;" />
    <p><strong>Genre:</strong> {{ anime.genre }}</p>
    <p>{{ anime.sinopsis }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const anime = ref(null);
const route = useRoute();

onMounted(async () => {
  try {
    const id = route.params.id;
    const response = await axios.get(`http://localhost:3000/anime/${id}`);
    anime.value = response.data;
  } catch (err) {
    console.error('Gagal mengambil data:', err);
  }
});
</script>
