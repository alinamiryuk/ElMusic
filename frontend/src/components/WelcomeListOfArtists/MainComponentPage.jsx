import React, {useEffect} from 'react'
import './MainComponentPage.css'
import { useState } from 'react'
import { ArtistImage } from './AvatarList/ArtistImage'
import {fetchAuthors} from '../../redux/actionType'
import {useDispatch, useSelector} from 'react-redux'
import {avatar} from './AvatarList/AvatarList'

export const MainComponentPage = () => {
	const dispatch = useDispatch()
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
						<ArtistImage key={ava._id} ava={ava} onCounter={setCounter} />
					))}
				</div>
				{counter >= 3 ? (
						<div className="choosenList">
							<a href="/MainPlayList" className="btn btn-green btn-lg">
								Продолжить
							</a>
						</div>
				) : null}
			</div>
		</>
	)
}
