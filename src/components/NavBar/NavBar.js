import React from 'react'
import './NavBar.css'

const NavBar = ({ changeView }) => {
  return (
    <nav className='navbar'>
      <button
        className='navbar__now-playing'
        onClick={() => changeView('NOW_PLAYING')}
      >
        Now Playing
      </button>
      <button
        className='navbar__leaderboard'
        onClick={() => changeView('LEADERBOARD')}
      >
        Leaderboard
      </button>
    </nav>
  )
}

export default NavBar
