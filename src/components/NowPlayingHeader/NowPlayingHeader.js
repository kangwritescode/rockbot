import React, { useState, useEffect } from 'react'
import './NowPlayingHeader.css'

const NowPlayingHeader = ({ imageURL, artistName, songTitle }) => {
  return (
    <header className='nowplayingheader'>
      <img className='nowplayingheader__img' src={imageURL} alt='artist'></img>
      <div className='nowplayingheader__info-container'>
        <label className='nowplayingheader__artist'>{artistName}</label>
        <label className='nowplayingheader__song'>{songTitle}</label>
      </div>
    </header>
  )
}

export default NowPlayingHeader
