import React, { useState, useEffect } from 'react'
import './App.css'
import RockHeader from './components/RockHeader/RockHeader'
import NavBar from './components/NavBar/NavBar'
import NowPlaying from './components/NowPlaying/NowPlaying'
import Leaderboard from './components/Leaderboard/Leaderboard'
import axios from 'axios'

function App() {
  const [currentView, setCurrentView] = useState('NOW_PLAYING')
  const [data, setData] = useState()

  // upon mounting
  useEffect(() => {

    setInterval(() => {
      axios
        .get('https://api.rockbot.com/v2/venue/10')
        .then(res => setData(res.data))
    }, 30000)

    return () => { }
  }, [])

  let view;
  if (currentView === 'NOW_PLAYING') {
    view = <NowPlaying trackData={data && data.aNowPlaying} />
  } else {
    view = <Leaderboard />
  }
  return (
    <React.Fragment>
      <RockHeader />
      {view}
      <NavBar changeView={setCurrentView} />
    </React.Fragment>
  )
}

export default App
