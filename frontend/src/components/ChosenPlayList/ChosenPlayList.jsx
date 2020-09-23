import React, {useEffect, useState} from 'react'
import './ChosenPlayList.css'
import {HeaderPlay} from './header/HeaderChoosenPlay'
import {Button} from '@material-ui/core'
import Player from './playerBar/PlayerBar'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {fetchMusic} from '../../redux/actionType'

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

  const shuffledSongs = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }
  return (
      <>
        <div className="main-view-playing">
          <HeaderPlay/>
          <div className="playlist-songs">
            <ul className="table-songs">
              {songs ? songs.map((song, i) => (
                  <div className="list-songs" key={song._id}>
                    {i + 1}. Author: {song.author} {'  '}
                    Genre: {song.genre}
                    Song: {song.song_name}
                    <Button onClick={() => {
                      dispatch(fetchMusic(song._id, song.genre))
                      setToggle(() => !toggle)
                      setId(song._id)
                    }} variant='contained'>Play</Button>
                  </div>
              )) : null}
            </ul>
          </div>
        </div>
        <Player toggle={toggle} id={state}/>
      </>
  )

}
