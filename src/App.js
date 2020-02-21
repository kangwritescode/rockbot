import React, { useState, useEffect } from 'react'
import './App.css'
import RockHeader from './components/RockHeader/RockHeader'
import NavBar from './components/NavBar/NavBar'
import NowPlaying from './components/NowPlaying/NowPlaying'
import Leaderboard from './components/Leaderboard/Leaderboard'
import axios from 'axios'
import Spinner from './components/Spinner/Spinner'

function App () {
  const [currentView, setCurrentView] = useState('NOW_PLAYING')
  const [data, setData] = useState()

  // upon mounting
  useEffect(() => {
    function fetchMusicData () {
      axios
        .get('https://api.rockbot.com/v2/venue/10')
        .then(res => setData(res.data))
    }
    fetchMusicData()
    setInterval(fetchMusicData, 30000)
  }, [])

  let view = <Spinner />
  if (currentView === 'NOW_PLAYING' && data) {
    view = <NowPlaying trackData={data} />
  } else if (currentView === 'LEADERBOARD' && data) {
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
