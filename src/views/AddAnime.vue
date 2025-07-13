<template>
  <div class="form-container">
    <h2>Tambah Anime Baru</h2>
    <form @submit.prevent="tambahAnime">
      <input v-model="anime.judul" placeholder="Judul Anime" required />
      <textarea v-model="anime.sinopsis" placeholder="Sinopsis" required></textarea>
      <input type="file" @change="handleFileUpload" />
      <select v-model="anime.genre">
        <option value="Action">Action</option>
        <option value="Romance">Romance</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Fantasy">Comedy</option>
        <option value="Fantasy">Demons</option>
        <option value="Fantasy">Magic</option>
        <option value="Fantasy">Sports</option>
        <option value="Fantasy">Horor</option>
      </select>
      <button type="submit">Tambah Anime</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const anime = ref({
  judul: '',
  sinopsis: '',
  genre: '',
  gambar: ''
});

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      anime.value.gambar = reader.result; // base64 string
    };
    reader.readAsDataURL(file);
  }
}

async function tambahAnime() {
  try {
    await axios.post('http://localhost:3000/anime', anime.value);
    alert('Anime berhasil ditambahkan!');
    router.push('/anime');
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped>
.form-container {
  padding: 2rem;
  max-width: 600px;
  margin: auto;
}
input, textarea, select, button {
  width: 100%;
  margin: 1rem 0;
  padding: 0.5rem;
}
</style>
