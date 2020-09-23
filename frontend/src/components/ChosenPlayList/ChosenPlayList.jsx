import React, {useEffect, useState} from 'react'
import './ChosenPlayList.css'
import {HeaderPlay} from './header/HeaderChoosenPlay'
import {Button} from '@material-ui/core'
import Player from './playerBar/PlayerBar'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {fetchMusic} from '../../redux/actionType'
import { SongsContext } from './Context/SongsContext'

export const ChosenPlayList = () => {
  const [state, setState] = useState()
  const [toggle, setToggle] = useState(false)
  const [id, setId] = useState()
  const params = useParams().id
  const dispatch = useDispatch()
  const music = useSelector(state => state.music)
  const playlist = useSelector(state => state.playlists)
  const songs = playlist[params]?.songs || playlist[params]?.music

  useEffect(() => {
    setState(music[id])
  }, [music])
 

  return (
      <>
      <SongsContext.Provider value={songs}>
        <div className="main-view-playing">
          <HeaderPlay playlist={playlist[params]?.type} id={id} />
          <div className="playlist-songs">
            {console.log('songs array',songs)}
            <ul className="table-songs">
              {songs ? songs.map((song, i) => (

                <div className="list-songs" key={song._id}>
                    {i + 1}. Author: {song.author} {'  '}
                    Genre: {song.genre}
                    Song: {song.song_name}
                    <Button style={{  opacity: "0.6"}}  onClick={() => {
                      dispatch(fetchMusic(song._id, song.genre))
                      setToggle(() => !toggle)
                      setId(song._id)
                    }} variant='outlined'>Play</Button>
                  </div>
              )) : null}
            </ul>
          </div>
        </div>
        <Player toggle={toggle} id={state}/>
              </SongsContext.Provider> 

      </>
  )

}
