import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from '../store/provider'
import Home from './home'
import Header from './core/components/header/header'
import Footer from './core/components/footer/footer'

const Features = () => (
  <Router>
    <Provider>
      <Header/>
      <main>
        <Home/>
      </main>
      <Footer/>
    </Provider>
  </Router>
)

export default Features
