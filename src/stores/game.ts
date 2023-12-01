import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

const MAX_QUESTIONS = 4

export const useGameStore = defineStore('scores', () => {
  const questionsAsked = ref(+JSON.parse(localStorage.getItem('questionsAsked') || `0`))
  const questionsCorrect = ref(+JSON.parse(localStorage.getItem('questionsCorrect') || `0`))

  watch(questionsAsked, (newQuestionsAsked) => {
    localStorage.setItem('questionsAsked', JSON.stringify(newQuestionsAsked))
  })
  watch(questionsCorrect, (newQuestionsCorrect) => {
    localStorage.setItem('questionsCorrect', JSON.stringify(newQuestionsCorrect))
  })

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

  function getQuestionsAsked(): number {
    return questionsAsked.value
  }

  function getquestionsCorrect(): number {
    return questionsCorrect.value
  }

  return {
    MAX_QUESTIONS,
    incrementQuestionsAsked,
    incrementQuestionsCorrect,
    reset,
    questionsAsked,
    questionsCorrect,
    getQuestionsAsked,
    getquestionsCorrect
  }
})
