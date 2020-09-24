import React, {useEffect, useState} from 'react'
import './ChosenPlayList.css'
import {HeaderPlay} from './header/HeaderChoosenPlay'
import {Container, Grid} from '@material-ui/core'
import Player from './playerBar/PlayerBar'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {SongsContext} from './Context/SongsContext'
import {makeStyles} from '@material-ui/core/styles'
import SongCard from './Card/Card'

export const ChosenPlayList = () => {
  const [state, setState] = useState()
  const [toggleEq, setToggleEq] = useState(false)
  const [toggle, setToggle] = useState(false)

  const [id, setId] = useState()
  const params = useParams().id
  const music = useSelector((state) => state.music)
  const playlist = useSelector((state) => state.playlists)

  const songs = playlist[params]?.songs || playlist[params]?.music

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      margin: '2em',
      minWidth: '300px',
      maxWidth: '300px',
      minHeight: '120px',
      maxHeight: '120px',
      opacity: 0.9,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      // marginLeft: '20%',
      width: 'auto',
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }))

  useEffect(() => {
    setState(music[id])
  }, [music])

  const classes = useStyles()

  return (
      <>
        <SongsContext.Provider value={songs}>
          <Container disableGutters={true} maxWidth={false} direction="column"
                    justify="space-between">
            <Grid>
              <div className="main-view-playing">
                <HeaderPlay
                    playlist={playlist[params]?.type}
                    toggleEq={toggleEq}
                    id={id}
                    toggle={toggle}
                />
                <div className="playlist-songs">
                  <Container disableGutters={true} maxWidth={false}>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                    >
                      {songs
                          ? songs.map((song, i) => <SongCard ket={song._id}
                                                             classes={classes}
                                                             i={i} setId={setId}
                                                             setToggle={setToggle}
                                                             song={song}
                                                             toggle={toggle}/>)
                          : null}
                    </Grid>
                  </Container>
                </div>
              </div>

              <div>
                <Player toggle={toggle} id={state} setId={setId}
                        setToggleEq={setToggleEq}/>
              </div>
            </Grid>
          </Container>
        </SongsContext.Provider>
      </>
  )
}
