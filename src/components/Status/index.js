import React from 'react'

import './index.css'

const Status = ({ lastBalls }) =>
  <ul className="Status">
  {
    lastBalls.map((ball, index) => <li key={`b${index}`}>{ball}</li>)
  }
  </ul>

export default Status
