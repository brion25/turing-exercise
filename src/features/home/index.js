import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomeView from './components/home-view/home-view'
import { homeUrl } from './urls'

const Home = () => (
  <Switch>
    <Route exact path={homeUrl} component={HomeView}/>
  </Switch>
)

export default Home
