import { defineStore } from 'pinia'
import { ref } from 'vue'

const MAX_QUESTIONS = 4

export const useGameStore = defineStore('scores', () => {
  const questionsAsked = ref(0)
  const questionsCorrect = ref(0)

  function incrementQuestionsAsked() {
    ++questionsAsked.value
  }

  function incrementQuestionsCorrect() {
    ++questionsCorrect.value
  }

  function reset() {
    questionsAsked.value = 0
    questionsCorrect.value = 0
  }

  return {
    incrementQuestionsAsked,
    incrementQuestionsCorrect,
    reset,
    questionsAsked,
    questionsCorrect
  }
})
