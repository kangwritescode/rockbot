import React, { useState } from 'react'
import './App.css'
import RockHeader from './components/RockHeader/RockHeader'
import NavBar from './components/NavBar/NavBar'

function App () {
  return (
    <React.Fragment>
      <RockHeader />
      
      <NavBar />
    </React.Fragment>
  )
}

export default App
