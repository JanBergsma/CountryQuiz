<template>
    <section>
        <div v-if="props.questionKind === 'capital'" class="title">
            <h2>{{ question.question }} is the capital of?</h2>
        </div>
        <div v-else class="title">
            <img class="country-flag" :src="question.question" alt="Which country does this flag belong to?" width="500"
                height="600">
            <h2>Which country does this flag belong to?</h2>
        </div>
        <div class="options">
            <button @click="(event) => checkAnswer(option, event)" class="btn btn-option"
                v-for="( option, index ) in  question.options " :key="index">
                <div>{{ getLetter(index) }}</div>
                <div>{{ option }}</div>
            </button>
        </div>
        <RouterLink v-if="ready && answerHasBeenGiven" to="/results" class="btn-next">Next</RouterLink>
        <button v-if="!ready && answerHasBeenGiven" class="btn-next" @click="gameStore.changeKey()">Next</button>
    </section>
</template>

<script setup lang="ts">
import { getRandomCapitalQuestion, getRandomFlagQuestion } from '@/stores/countries';
import { useGameStore } from '@/stores/game';
import { computed, ref } from 'vue';

const props = defineProps<{ questionKind: String }>()
const gameStore = useGameStore()

const getLetter = (index: number): string => {
    switch (index) {
        case 0:
            return 'A'
        case 1:
            return 'B'
        case 2:
            return 'C'
        default:
            return 'D'
    }
}

const question = props.questionKind === "capital" ? getRandomCapitalQuestion() : getRandomFlagQuestion()
const answerHasBeenGiven = ref(false)
const ready = computed(() => gameStore.MAX_QUESTIONS <= gameStore.getQuestionsAsked())

function checkAnswer(option: string, event: Event) {
    let button = event.target as HTMLElement
    while (button && button.parentElement && button.tagName !== 'BUTTON') {
        button = button.parentElement
    }

    if (option === question.correctOption) {
        button.classList.add('correct-answer')
        gameStore.incrementQuestionsCorrect()
    } else {
        button.classList.add('wrong-answer')
    }
    gameStore.incrementQuestionsAsked()
    answerHasBeenGiven.value = true
}

</script>

