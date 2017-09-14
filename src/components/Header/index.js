import React from 'react'

import Controls from '../Controls/container'
import Status from '../Status/container'

import './index.css'

const Header = () =>
  <header className="Header">
    <Controls />
    <Status />
  </header>

export default Header
