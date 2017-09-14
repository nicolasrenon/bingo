import {
  BALL_DRAWN,
  CALL_BINGO,
  BINGO_FAKE,
  START_BINGO,
  NO_MORE_BALL
} from '../actions'

const initialState = {
  status: 'idle',
  ballsDrawn: [],
  winning: 0,
}

export default function balls(state = initialState, action) {
  switch (action.type) {
    case START_BINGO:
      return {
        ...state,
        status: 'playing',
      }

    case BALL_DRAWN:
      return {
        ...state,
        ballsDrawn: [
          ...state.ballsDrawn,
          action.number,
        ],
      }

    case CALL_BINGO:
      return {
        ...state,
        status: 'won',
        winning: action.count,
      }

    case NO_MORE_BALL:
      return {
        ...state,
        status: 'over',
      }

    case BINGO_FAKE:
      return {
        ...state,
        status: 'fake',
      }

    default:
      return state
  }
}
