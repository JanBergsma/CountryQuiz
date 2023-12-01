import countries from '@/stores/countries.json'
import type { Question } from '@/types/question'

const n = countries.length

export function getRandom(n: number): number {
  return Math.floor(Math.random() * n)
}

function getFourUniqueValues() {
  const fourValues: number[] = []
  while (fourValues.length < 4) {
    const v = getRandom(n)
    if (fourValues.indexOf(v) == -1) {
      fourValues.push(v)
    }
  }
  return fourValues
}

function shuffleArray(indici: number[]) {
  for (let i = indici.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = indici[i]
    indici[i] = indici[j]
    indici[j] = temp
  }
}

export function getRandomCapitalQuestion(): Question {
  const fourValues = getFourUniqueValues()
  const correctAnswer = fourValues[0]
  shuffleArray(fourValues)
  return {
    question: countries[correctAnswer].capital as string,
    correctOption: countries[correctAnswer].country as string,
    options: [
      countries[fourValues[0]].country as string,
      countries[fourValues[1]].country as string,
      countries[fourValues[2]].country as string,
      countries[fourValues[3]].country as string
    ]
  }
}

export function getRandomFlagQuestion(): Question {
  const fourValues = getFourUniqueValues()
  const correctAnswer = fourValues[0]
  shuffleArray(fourValues)
  return {
    question: countries[correctAnswer].flag,
    correctOption: countries[correctAnswer].country as string,
    options: [
      countries[fourValues[0]].country as string,
      countries[fourValues[1]].country as string,
      countries[fourValues[2]].country as string,
      countries[fourValues[3]].country as string
    ]
  }
}
