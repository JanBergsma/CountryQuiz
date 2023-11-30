// stores/counter.spec.ts
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useGameStore } from '../game'

describe('Scores Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('Initial state should be 0 for questinonsAsked and questionsCorrect', () => {
    const scores = useGameStore()
    expect(scores.questionsAsked).toBe(0)
    expect(scores.questionsCorrect).toBe(0)
  })

  it('IncrementQuestionsAsked should increase questionsAsked', () => {
    const scores = useGameStore()
    scores.incrementQuestionsAsked()
    expect(scores.questionsAsked).toBe(1)
    expect(scores.questionsCorrect).toBe(0)
  })

  it('IncrementQuestionsCorrect should increase questionsAsked', () => {
    const scores = useGameStore()
    scores.incrementQuestionsCorrect()
    expect(scores.questionsCorrect).toBe(1)
    expect(scores.questionsAsked).toBe(0)
  })
  it('Reset should set both counters to zero', () => {
    const scores = useGameStore()
    scores.incrementQuestionsCorrect()
    scores.incrementQuestionsCorrect()
    scores.reset()
    expect(scores.questionsAsked).toBe(0)
    expect(scores.questionsCorrect).toBe(0)
  })
})
