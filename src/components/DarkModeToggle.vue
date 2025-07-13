<template><button @click="store.toggleDark()">🌙</button></template>
<script setup>
import { useAnimeStore } from '../store/animeStore'
const store = useAnimeStore()
</script>
