import generateRandomNumbers from './random'

function compare(arr1, arr2) {
  return arr1.every((item, index) => item === arr2[index])
}

function checkUniqueness(current, previousOnes) {
  let position = 0
  while (position < previousOnes.length) {
    if (compare(current, previousOnes[position])) {
      return false
    }
    position++
  }
  return true
}

export default function generateMatrices(count, size) {
  const matrices = []
  let matrix = []
  while (count > 0) {
    matrix = generateRandomNumbers(size)
    if (!checkUniqueness(matrix, matrices)) continue
    matrices.push(matrix)
    count--
  }
  return matrices
}
