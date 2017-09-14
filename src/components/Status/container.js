import { connect } from 'react-redux'

import Status from './index'

const lastDrawnBalls = balls => {
  let series = [...balls]
  if (balls.length < 4) {
    while(series.length < 4) {
      series = [' '].concat(series)
    }
    return series
  } else {
    return series = balls.slice(balls.length - 4, balls.length)
  }
}

const mapStateToProps = ({ bingo: { ballsDrawn } }) => ({ lastBalls: lastDrawnBalls(ballsDrawn) })

export default connect(mapStateToProps)(Status)
