import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    nama: '',
    username: '',
    tanggalLahir: '',
    umur: 0
  }),
  actions: {
    setUser(data) {
      this.nama = data.nama
      this.username = data.username
      this.tanggalLahir = data.tanggalLahir
      this.umur = data.umur
    }
  }
})
