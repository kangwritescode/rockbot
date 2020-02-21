import React, { useState, useEffect } from 'react'
import './NavBar.css'

const NavBar = props => {
  return (
    <nav className='navbar'>
      <button className='navbar__now-playing'>Now Playing</button>
      <button className='navbar__leaderboard'>Leaderboard</button>
    </nav>
  )
}

export default NavBar
