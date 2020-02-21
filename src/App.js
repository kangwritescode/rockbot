import React, { useState } from 'react'
import './App.css'
import RockHeader from './components/RockHeader/RockHeader'
import NavBar from './components/NavBar/NavBar'
import NowPlaying from './components/NowPlaying/NowPlaying'
import Leaderboard from './components/Leaderboard/Leaderboard'

function App () {
  const [currentView, setCurrentView] = useState('NOW_PLAYING')

  return (
    <React.Fragment>
      <RockHeader />
      {currentView === 'NOW_PLAYING' ? <NowPlaying /> : <Leaderboard />}
      <NavBar changeView={setCurrentView} />
    </React.Fragment>
  )
}

export default App
