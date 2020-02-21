import React, { useState, useEffect } from 'react'
import './NowPlayingHeader.css'

const NowPlayingHeader = ({ imageURL, artistName, songTitle }) => {
  return (
    <header>
      <img src={imageURL} alt='artist'></img>
      <label>{artistName}</label>
      <label>{songTitle}</label>
    </header>
  )
}

export default NowPlayingHeader
