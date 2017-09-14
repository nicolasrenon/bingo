import { combineReducers } from 'redux'

import bingo from './bingo'
import grids from './grids'

export default combineReducers({
  bingo,
  grids,
})
