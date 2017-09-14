import React from 'react'

import './index.css'

const Controls = ({ bingo, next, status, start }) => {
  return (
    <div className="Controls">
      {status === 'idle' && <button onClick={start}>Start game</button>}
      {status === 'playing' && <button onClick={next}>Next ball</button>}
      {status === 'playing' && <button onClick={bingo}>Bingo !</button>}
    </div>
  )
}

export default Controls
