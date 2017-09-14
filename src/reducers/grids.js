import { START_BINGO, BALL_DRAWN } from '../actions'

import { GRID_COUNT, GRID_SIZE } from '../config'
import generateMatrices from '../utils/matrix'

const initialState = {
  instances: [],
  matchingNumbers: {},
}

export default function grids(state = initialState, action) {
  switch (action.type) {
    case START_BINGO:
      const instances = generateMatrices(GRID_COUNT, GRID_SIZE)
        .reduce((acc, numbers, index) => [...acc, { id: index, numbers }], [])

      return {
        ...state,
        instances,
        matchingNumbers: instances.reduce((acc, { id }) => ({...acc, [id]: []}), {}),
      }

    case BALL_DRAWN:
      const matchingNumbers = {...state.matchingNumbers}
      state.instances.forEach((grid) => {
        if (grid.numbers.includes(action.number)) {
          matchingNumbers[grid.id].push(action.number)
        }
      })

      return {
        ...state,
        matchingNumbers,
      }

    default:
      return state
  }
}
