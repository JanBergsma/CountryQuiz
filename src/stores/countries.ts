import countries from '@/stores/countries.json'

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

export function getRandomCapitalQuestion() {
  const fourValues = getFourUniqueValues()
  return {
    country: countries[fourValues[0]].country,
    capitals: [
      countries[fourValues[0]].capital,
      countries[fourValues[1]].capital,
      countries[fourValues[2]].capital,
      countries[fourValues[3]].capital
    ]
  }
}

export function getRandomFlagQuestion() {
  const fourValues = getFourUniqueValues()
  return {
    country: countries[fourValues[0]].country,
    flags: [
      countries[fourValues[0]].flag,
      countries[fourValues[1]].flag,
      countries[fourValues[2]].flag,
      countries[fourValues[3]].flag
    ]
  }
}
