import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Bingo from './components/Bingo/container'

import store from './utils/store'

import './index.css'

render(
  <Provider store={store}>
    <Bingo />
  </Provider>,
  document.getElementById('root'),
)
