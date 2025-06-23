import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import AnimeList from './views/AnimeList.vue'
import JadwalRilis from './views/JadwalRilis.vue'
import OnGoing from './views/BelumTayang.vue'
import GenreList from './views/GenreList.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/anime-list', component: AnimeList },
  { path: '/jadwal-rilis', component: JadwalRilis },
  { path: '/on-going', component: OnGoing },
  { path: '/genre-list', component: GenreList },
]

export default createRouter({
  history: createWebHistory(),
  routes
})