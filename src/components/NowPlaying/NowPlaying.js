import React, { useState, useEffect } from 'react'
import './NowPlaying.css'
import NowPlayingHeader from '../NowPlayingHeader/NowPlayingHeader'

const NowPlaying = ({ nowPlayingData }) => {
  const [data, setData] = useState()

  useEffect(() => {
    nowPlayingData && setData(nowPlayingData)
  }, [nowPlayingData])

  return (
    <main className='nowplaying'>
      <NowPlayingHeader
        imageURL={data && data.sArtwork}
        artistName={data && data.sArtist}
        songTitle={data && data.sSong}
      />
      <h2>Coming Up</h2>
    </main>
  )
}

export default NowPlaying
