<template>
  <div class="jadwal">
    <h1>Jadwal Rilis Anime Mingguan</h1>
    <p>Cek kapan anime terbaru rilis setiap minggu.</p>

    <div class="hari-container">
      <div class="hari-card" v-for="(animes, hari) in jadwalAnime" :key="hari">
        <h2>{{ hari }}</h2>
        <ul>
          <li v-for="anime in animes" :key="anime">{{ anime }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JadwalRilis',
  data() {
    return {
      jadwalAnime: {
        Senin: ['One Piece', 'Boruto'],
        Selasa: ['Bleach: TYBW'],
        Rabu: ['Attack on Titan: Final Season'],
        Kamis: ['Chainsaw Man', 'Spy x Family'],
        Jumat: ['Jujutsu Kaisen Season 2'],
        Sabtu: ['Demon Slayer', 'Black Clover'],
        Minggu: ['My Hero Academia', 'Tokyo Revengers'],
        Random: ['Naruto', 'Your Name', 'Sword Art Online']
      }
    }
  }
}
</script>

<style scoped>
.jadwal {
  padding: 20px;
  min-height: 100vh;
}

.hari-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.hari-card {
  background-color: white;
  border-radius: 12px;
  padding: 15px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.hari-card h2 {
  margin-top: 0;
  color: #1976d2;
}

.hari-card ul {
  padding-left: 20px;
}

.hari-card li {
  margin-bottom: 5px;
}
</style>
