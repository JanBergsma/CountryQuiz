<script setup lang="ts">
import "../src/assets/main.css";

// const { appContext } = getCurrentInstance();
// appContext.app.use(mockRouter);
</script>

<template>
    <main class="wrapper">
        <header>
            <h1>Country quiz</h1>
            <img src="../src/assets/undrawAdventure.svg" alt="Country Quiz Picture" />

        </header>
        <slot />
    </main>
</template>


<style>
/* body {
    background: white;
} */
</style>

