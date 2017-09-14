import React from 'react'

import './index.css'

const Grid = ({ numbers, matchingNumbers }) =>
  <ul className="Grid">
  {
    numbers.map((number) => {
      const props = matchingNumbers.includes(number) ? { className: 'is-active' } : {}
      return <li key={number} {...props}>{number}</li>
    })
  }
  </ul>

export default Grid
