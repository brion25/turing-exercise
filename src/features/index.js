import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from '../store/provider'
import Home from './home'
import Header from './core/components/header/header'

const Features = () => (
  <Router>
    <Provider>
      <Header/>
      <main>
        <Home/>
      </main>
    </Provider>
  </Router>
)

export default Features
