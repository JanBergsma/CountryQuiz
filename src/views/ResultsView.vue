<template>
    <section class="results-section">
        <img class="results-img" src="../assets/undrawWinners.svg" alt="">
        <h2 class="results-header">Results</h2>
        <p class="results-body">You got <span>{{ correctAnswers }}</span> correct answers.</p>
        <a class="btn" href="/">Try again</a>
    </section>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/game';

const gameStore = useGameStore()
const correctAnswers = gameStore.getquestionsCorrect()



</script>

