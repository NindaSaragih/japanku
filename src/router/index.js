import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import AnimeList from '../views/AnimeList.vue';
import AddAnime from '../views/AddAnime.vue';
import DetailAnime from '../views/DetailAnime.vue';
import GenreList from '../views/GenreList.vue';
import Ongoing from '../views/BelumTayang.vue';
import ReleaseSchedule from '../views/JadwalRilis.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/anime', component: AnimeList },
    { path: '/anime/add', component: AddAnime },
    { path: '/anime/:id', component: DetailAnime, props: true },
    { path: '/genre', component: GenreList },
    { path: '/ongoing', component: Ongoing },
    { path: '/schedule', component: ReleaseSchedule },
  ]
});

export default router;
