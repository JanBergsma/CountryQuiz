<template>
    <section>
        <div class="title">
            <h2>{{ question.question }}</h2>
        </div>
        <div class="options">
            <button @click="(event) => checkAnswer(option, event)" class="btn btn-option"
                v-for="(option, index) in question.options" :key="index">
                <div>{{ getLetter(index) }}</div>
                <div>{{ option }}</div>
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">

const props = defineProps<{ questionKind: String }>()
import { getRandomCapitalQuestion, getRandomFlagQuestion } from '@/stores/countries';
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

function checkAnswer(option: string, event: Event) {
    console.log(`checkAnswer(${option}) = ${option === question.correctOption}`)
    console.log(event.target)

    let button = event.target as HTMLElement
    while (button && button.parentElement && button.tagName !== 'BUTTON') {
        button = button.parentElement
    }

    if (option === question.correctOption) {
        button.classList.add('correct-answer')
    } else {
        button.classList.add('wrong-answer')
    }
    event.stopPropagation()
}
</script>

