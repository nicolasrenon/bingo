import { GRID_SIZE } from '../config'
import fetchBingoAPI from '../utils/fetch'
import store from '../utils/store'

export const START_BINGO = 'START_BINGO'
export const CALL_BINGO = 'CALL_BINGO'
export const BINGO_FAKE = 'BINGO_FAKE'
export const BALL_DRAWN = 'BALL_DRAWN'
export const NO_MORE_BALL = 'NO_MORE_BALL'

export function startBingo() {
  return {
    type: START_BINGO,
  }
}

export function drawBallAtRandom() {
  return (dispatch) =>
    fetchBingoAPI('number')
      .then(res => {
        if (res.status === 200) {
          res.json().then(({ number }) => dispatch({ type: BALL_DRAWN, number }))
        } else if (res.status === 204) {
          dispatch({ type: NO_MORE_BALL })
        } else {
          return Promise.reject()
        }
      })
      .catch(error => { throw new Error('Something went wrong with the API') })
}

export function callBingo() {
  return (dispatch) =>
    fetchBingoAPI('bingo', {
      grids: store.getState().grids.matchingNumbers,
      size: GRID_SIZE,
    })
      .then(res => {
        if (res.status === 200) {
          res.json().then(({ count }) => dispatch({ type: CALL_BINGO, count }))
        } else if (res.status === 406) {
          dispatch({ type: BINGO_FAKE })
        } else {
          return Promise.reject()
        }
      })
      .catch(error => { throw new Error('Something went wrong with the API') })
}
