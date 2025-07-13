<template>
  <div class="login-container">
    <h2>Login ke Japanku</h2>
    <form @submit.prevent="handleLogin">
      <input
        v-model.trim="nama"
        type="text"
        placeholder="Masukkan Nama Lengkap"
        required
        autofocus
      />
      <input
        v-model.trim="username"
        type="text"
        placeholder="Masukkan Username"
        required
      />
      <input
        v-model="tanggalLahir"
        type="date"
        required
      />
      <button type="submit">Login</button>
    </form>
    <p v-if="peringatan" class="warning">{{ peringatan }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/userStore'

const nama = ref('')
const username = ref('')
const tanggalLahir = ref('')
const peringatan = ref('')

const router = useRouter()
const userStore = useUserStore()

function hitungUmur(tanggal) {
  const lahir = new Date(tanggal)
  const sekarang = new Date()
  let umur = sekarang.getFullYear() - lahir.getFullYear()
  const bulan = sekarang.getMonth() - lahir.getMonth()
  if (bulan < 0 || (bulan === 0 && sekarang.getDate() < lahir.getDate())) {
    umur--
  }
  return umur
}

function handleLogin() {
  // Validasi manual jika ada input kosong
  if (!nama.value || !username.value || !tanggalLahir.value) {
    peringatan.value = '⚠️ Mohon lengkapi semua kolom terlebih dahulu.'
    return
  }

  const umur = hitungUmur(tanggalLahir.value)

  if (umur < 15) {
    peringatan.value =
      '⚠️ Umur Anda di bawah 15 tahun. Tidak semua anime cocok. Disarankan dengan pendamping orang tua.'
    return
  }

  // Reset peringatan
  peringatan.value = ''

  // Simpan ke Pinia store
  userStore.setUser({
    nama: nama.value,
    username: username.value,
    tanggalLahir: tanggalLahir.value,
    umur
  })

  // Redirect ke Home
  router.push('/home')
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  background: #e0f7fa;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

input,
button {
  display: block;
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

button {
  background-color: #00796b;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #004d40;
}

.warning {
  color: red;
  font-weight: bold;
  margin-top: 0.75rem;
}
</style>
