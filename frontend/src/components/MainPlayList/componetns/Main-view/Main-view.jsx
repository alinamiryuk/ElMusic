import React, {useEffect} from 'react'
import './Main-view.css'
import {Grid} from '@material-ui/core'
import {PlayingPlaylists} from './playlists/PlayingPlaylists'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUserPlaylists} from '../../../../redux/actionType'
import CircularProgress from '@material-ui/core/CircularProgress'

export const MainView = () => {
  const fetching = useSelector(state => state.fetching)
  const dispatch = useDispatch()
  const playlists = useSelector(state => state.playlists)
  useEffect(() => {
    if (!playlists.playlists.length) dispatch(fetchUserPlaylists())
  }, [])
  return (
      <div>
        {fetching ? <CircularProgress/> : <div>
          {playlists?.playlists ? playlists?.playlists[0]?.playlists?.length !== 0
              ?
              <div>
                <div className="Information">Don't miss top playlists</div>
                <div className="albumsWantsTo">
                  <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                  >
                    {playlists.playlists ? <PlayingPlaylists
                        playlists={playlists.playlists[0]}/> : null}

                  </Grid>
                </div>
              </div>
              : null : null}
          {playlists?.playlists ? playlists?.playlists[2]?.playlists?.length !== 0
              ?
              <div>
                <div className="Information">Recommended for you</div>
                <div className="albumsWantsTo">
                  <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                  >
                    {playlists.playlists ? <PlayingPlaylists
                        playlists={playlists.playlists[2]}/> : null}

                  </Grid>
                </div>
              </div>
              : null : null}
          {playlists?.playlists ? playlists?.playlists[3]?.playlists?.length !== 0
              ?
              <div>
                <div className="Information">Genres</div>
                <div className="albumsWantsTo">
                  <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                  >
                    {playlists.playlists ? <PlayingPlaylists
                        playlists={playlists.playlists[3]}/> : null}

                  </Grid>
                </div>
              </div>
              : null : null}
          {playlists?.playlists ? playlists?.playlists[1]?.playlists?.length !== 0
              ?
              <div>
                <div className="Information">Artists</div>
                <div className="albumsWantsTo">
                  <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                  >
                    {playlists.playlists ? <PlayingPlaylists
                        playlists={playlists.playlists[1]}/> : null}

                  </Grid>
                </div>
              </div>
              : null : null}
        </div>}
      </div>
  )
}
