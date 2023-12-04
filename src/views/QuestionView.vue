<template>
    <section>
        <div v-if="props.questionKind === 'capital'" class="title">
            <h2 v-if="question.question">{{ question.question }} is the capital of?</h2>
            <h2 v-else>Which country has no capital?</h2>
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
        <a v-if="answerHasBeenGiven" :href="nextLink" class="btn-next">Next</a>
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
const nextLink = computed(() => {
    if (gameStore.MAX_QUESTIONS <= gameStore.getQuestionsAsked())
        return '/results'
    return `/${props.questionKind}`

})

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

