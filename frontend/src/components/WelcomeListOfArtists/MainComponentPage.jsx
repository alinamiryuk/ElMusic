import React, {useEffect, useState} from 'react'
import './MainComponentPage.css'
import {ArtistImage} from './AvatarList/ArtistImage'
import {fetchAuthors, fetchGeneratePlaylists} from '../../redux/actionType'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

export const MainComponentPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const authors = useSelector(state => state.authors)
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    dispatch(fetchAuthors())
  }, [])
  return (
      <>
        <div className="full-screen-for-choose-artists">
          <h3 className="full-screen-header onboarding-screen-artists-header ">
            Помогите нам подобрать идеальный плейлист
          </h3>
          <div className="onboarding-screen-artists-sub-title">
            Кто вам нравится больше всего? Выберите не менее трех исполнителей,
            чтобы помочь нам лучше угадать ваше настроение
          </div>
          <div className="onboarding-screen-grid">
            {authors.map((ava) => (
                <ArtistImage key={ava._id} ava={ava} onCounter={setCounter}/>
            ))}
          </div>
          {counter >= 3 ? (
              <div className="choosenList">
                <button className="btn btn-green btn-lg" onClick={(e) => {
                  e.preventDefault()
                  const selected = authors.filter(element => !element.hide)
                  dispatch(fetchGeneratePlaylists(selected))
                }}>
                  Продолжить
                </button>
              </div>
          ) : null}
        </div>
      </>
  )
}
