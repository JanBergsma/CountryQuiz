<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()

</script>

<template>
  <header>
    <h1>Country quiz</h1>
    <img v-if="route.path !== '/results'" src="./assets/undrawAdventure.svg" alt="Country Quiz Picture" />

  </header>
  <main>
    <RouterView />
  </main>
</template>

