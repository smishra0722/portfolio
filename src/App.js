import React from 'react'
import Homepage from './pages/Homepage'
import './App.css'
import Three from './pages/Three'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/three' component={Three} />
      </Switch>
    </React.Fragment>
  )
}

export default App
