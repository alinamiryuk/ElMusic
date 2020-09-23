import React, {useEffect, useState} from 'react'
import './MainComponentPage.css'
import {ArtistImage} from './AvatarList/ArtistImage'
import {fetchAuthors, fetchGeneratePlaylists} from '../../redux/actionType'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

export const MainComponentPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const authors = useSelector(state => state.authors)
  const [loading, setLoading] = useState(false)
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    dispatch(fetchAuthors())
  }, [])
  useEffect(() => {
    setLoading(state => !state)
  }, [authors])
  return (
      <>
        <div className="full-screen-for-choose-artists">
          <h3 className="full-screen-header onboarding-screen-artists-header ">
            Help us to create a perfect playlist just for you!
          </h3>
          <div className="onboarding-screen-artists-sub-title">
            Who would you like most? Choose at least 3 artists to get your first playlist:
          </div>
          {loading ?
              <>
                <div className={'onboarding-screen-artists-sub-title'}
                     style={{fontSize: 30, marginBottom: 100}}> Loading!
                </div>
                <div className={'onboarding-screen-grid'}>
                  <CircularProgress size={120} color={'secondary'}/>
                </div>
              </> :
              <div className="onboarding-screen-grid">
                {authors.map((ava) => (
                    <ArtistImage key={ava._id} ava={ava}
                                 onCounter={setCounter}/>
                ))}
              </div>}
          {counter >= 3 ? (
              <div className="choosenList">
                <button className="btn btn-green btn-lg" onClick={(e) => {
                  e.preventDefault()
                  const selected = authors.filter(element => !element.hide)
                  dispatch(fetchGeneratePlaylists(selected))
                  history.push('/main')
                }}>
                  Let's start
                </button>
              </div>
          ) : null}
        </div>
      </>
  )
}
