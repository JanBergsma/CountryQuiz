<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useGameStore } from './stores/game';
const route = useRoute()
const gameStore = useGameStore()
</script>

<template>
  <header>
    <h1>Country quiz</h1>
    <img v-if="route.path !== '/results'" src="./assets/undrawAdventure.svg" alt="Country Quiz Picture" />

  </header>
  <main>
    <RouterView :key="gameStore.key" />
  </main>
</template>

