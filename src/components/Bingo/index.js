import React from 'react'

import Header from '../Header'
import Grid from '../Grid'

import './index.css'

const messages = (status, winning) => {
  switch (status) {
    case 'idle': return 'Ready?'
    case 'over': return 'The game is over, did you fall asleep?'
    case 'won': return `Congratulations! You have ${winning} winning grid(s)!`
    case 'fake': return 'Oh no! You called out "Bingo" way too soon. You\'re dismissed!'
    default: return null
  }
}

const Bingo = ({ status, winning, grids, matchingNumbers }) =>
  <div className="Bingo">
    <Header />
    {
      status !== 'playing' &&
      <div className="Bingo-message">{messages(status, winning)}</div>
    }
    <div className="Bingo-grids">
    {
      grids && grids.map(({ id, numbers }) =>
        <Grid
          key={id}
          numbers={numbers}
          matchingNumbers={matchingNumbers[id]}
        />
      )
    }
    </div>
  </div>

export default Bingo
