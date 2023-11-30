import { describe, expect, it } from 'vitest'
import { getRandomCapitalQuestion, getRandomFlagQuestion } from '../countries'

describe('Countries', () => {
  it('getRandomCapitalQuestion', () => {
    const question = getRandomCapitalQuestion()
    console.log(question)
    expect(question).toHaveProperty('question')
    expect(question).toHaveProperty('correctOption')
    expect(question).toHaveProperty('options')
    expect(question.options).toHaveLength(4)
  })

  it('getRandomFlagQuestion', () => {
    const question = getRandomFlagQuestion()
    console.log(question)
    expect(question).toHaveProperty('question')
    expect(question).toHaveProperty('correctOption')
    expect(question).toHaveProperty('options')
    expect(question.options).toHaveLength(4)
  })
})
