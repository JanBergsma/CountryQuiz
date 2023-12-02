<template>
    <section>
        <div class="title">
            <h2>Welcome</h2>
            <h3>What do you want to be quizzed about?</h3>
        </div>
        <div class="options">
            <a href="capital" class="btn">Quiz me about capitals.</a>
            <a href="flag" class="btn">Quiz me about flags.</a>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/game';
const gameStore = useGameStore()

gameStore.reset()
</script>

