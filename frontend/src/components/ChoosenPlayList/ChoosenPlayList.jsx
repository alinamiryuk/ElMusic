import React from 'react'
import './ChoosenPlayList.css'
import { HeaderPlay } from './header/HeaderChoosenPlay'
import { avatar } from '../WelcomeListOfArtists/AvatarList/AvatarList'
import { Button } from '@material-ui/core'

export const ChoosenPlayList = () => {
	return (
		<>
			<div className="main-view-playing">
				<HeaderPlay />
				<div className="playlist-songs">
					<ul className="table-songs">
						{avatar.map((song, i) => (
							<div className="list-songs">
								{i + 1}. Исполнитель {song.author} {'  '}
								Жанр {song.genre}
								Песня {song.sub_genre}
								<Button variant="outlined"> Play </Button>
							</div>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}
