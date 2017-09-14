import { connect } from 'react-redux'

import Bingo from './index'

const mapStateToProps = ({
  bingo: { status, winning },
  grids: { instances, matchingNumbers },
}) => ({ status, winning, grids: instances, matchingNumbers })

export default connect(mapStateToProps)(Bingo)
