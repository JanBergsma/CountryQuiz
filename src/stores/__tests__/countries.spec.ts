import { describe, expect, it } from 'vitest'
import { getRandomCapitalQuestion, getRandomFlagQuestion } from '../countries'

describe('Countries', () => {
  it('getRandomCapitalQuestion', () => {
    const question = getRandomCapitalQuestion()
    console.log(question)
    expect(question).toHaveProperty('country')
    expect(question).toHaveProperty('capitals')
    expect(question.capitals).toHaveLength(4)
  })

  it('getRandomFlagQuestion', () => {
    const question = getRandomFlagQuestion()
    console.log(question)
    expect(question).toHaveProperty('country')
    expect(question).toHaveProperty('flags')
    expect(question.flags).toHaveLength(4)
  })
})
