import { defineStore } from 'pinia'
import axios from 'axios'

export const useAnimeStore = defineStore('anime', {
  state: () => ({
    list: [],
    search: '',
    filterGenre: '',
    dark: false
  }),
  getters: {
    filteredList: (state) =>
      state.list
        .filter(a => !state.filterGenre || a.genre === state.filterGenre)
        .filter(a => a.title.toLowerCase().includes(state.search.toLowerCase()))
  },
  actions: {
    async fetchAnimes() {
      const res = await axios.get('http://localhost:3000/animes')
      this.list = res.data
    },
    async addAnime(data) {
      await axios.post('http://localhost:3000/animes', data)
      this.fetchAnimes()
    },
    toggleDark() {
      this.dark = !this.dark
    }
  }
})
