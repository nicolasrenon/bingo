module.exports = function winningGrids({ grids, size }, drawnBalls) {
  return Object.entries(grids).filter(([, numbers]) => {
    return numbers.length === size && numbers.every((number) => drawnBalls.includes(number))
  })
}
