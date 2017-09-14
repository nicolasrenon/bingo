import { connect } from 'react-redux'

import { drawBallAtRandom, callBingo, startBingo } from '../../actions'

import Controls from './index'

const mapStateToProps = ({ bingo: { status } }) => ({ status })
const mapPropsToDispatch = dispatch => ({
  bingo: () => dispatch(callBingo()),
  next: () => dispatch(drawBallAtRandom()),
  start: () => dispatch(startBingo()),
})

export default connect(mapStateToProps, mapPropsToDispatch)(Controls)
