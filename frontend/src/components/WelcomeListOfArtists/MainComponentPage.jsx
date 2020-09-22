import React from 'react'
import './MainComponentPage.css'
import { avatar } from './AvatarList/AvatarList'
import { useState } from 'react'
import { ArtistImage } from './AvatarList/ArtistImage'

export const MainComponentPage = () => {
	console.log(avatar)
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
					{avatar.map((ava) => (
						<ArtistImage ava={ava} />
					))}
				</div>
				{console.log('массив объектов after >>>,', avatar)}

				<div className="choosenList">
					<a href="/MainPlayList" className="btn btn-green btn-lg">
						Продолжить
					</a>
				</div>
				{/* ) : (
          <div> </div>
        )} */}
			</div>
		</>
	)
}
