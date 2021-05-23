import React from 'react'
import Homepage from './pages/Homepage'
import './App.css'

import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </React.Fragment>
  )
}

export default App
