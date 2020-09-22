import React, {useEffect} from 'react'
import './Main-view.css'
import {Grid} from '@material-ui/core'
import {PlayingPlaylists} from './playlists/PlayingPlaylists'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUserPlaylists} from '../../../../redux/actionType'

export const MainView = () => {

  const dispatch = useDispatch()
  const playlists = useSelector(state => state.playlists)
  useEffect(() => {
    dispatch(fetchUserPlaylists())
  }, [])
  return (
      <div>
        {playlists.playlists ? playlists.playlists[0].playlists.length !== 0 ?
            <div>
              <div className="Information">А вот что мы собрали сами</div>
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
            </div> : null : null}
        {playlists.playlists ? playlists.playlists[2].playlists.length !== 0 ?
            <div>
              <div className="Information">Вам должно понравиться</div>
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
            </div> : null : null}
        {playlists.playlists ? playlists.playlists[3].playlists.length !== 0 ?
            <div>
              <div className="Information">Наши Жанры</div>
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
            </div> : null : null}
        {playlists.playlists ? playlists.playlists[1].playlists.length !== 0 ?
            <div>
              <div className="Information">Наши исполнители</div>
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
            </div> : null : null}
      </div>
  )
}
