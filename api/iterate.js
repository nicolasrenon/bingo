module.exports = function* iterate(numbers) {
  let i = 0
  const limit = numbers.length - 1

  while (true) {
    if (i < limit) {
      yield numbers[i++]
    } else {
      return numbers[i]
    }
  }
}
