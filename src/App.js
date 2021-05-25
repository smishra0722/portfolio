import React, { lazy, Suspense } from 'react'
import Homepage from './pages/Homepage'
import './App.css'

import { Switch, Route } from 'react-router-dom'
// const Homepage = lazy(() => import('./pages/Homepage'))

function App() {
  return (
    // <Suspense fallback={<div>Please wait</div>}>
    <Homepage />
    // </Suspense>
  )
}

export default App
