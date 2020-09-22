import React  from 'react'
import './ChoosenPlayList.css'
import {useParams} from 'react-router-dom'
import { HeaderPlay } from './header/HeaderChoosenPlay'
import Player from './playerBar/PlayerBar'
import { Music } from './playSong'
import {useSelector} from 'react-redux'

export const ChosenPlayList = () => {
	const params = useParams().id
	const playlist = useSelector(state => state.playlists)

	const songs = playlist[params].songs
	return (
		<>
			<div className="main-view-playing">
				<HeaderPlay />
				<div className="playlist-songs">
					<ul className="table-songs">
						{songs.map((song, i) => (
							<div className="list-songs">
								{i + 1}. Исполнитель {song.author} {'  '}
								Жанр {song.genre}
								Песня {song.sub_genre}
                <Music/>
							</div>
						))}
					</ul>
				</div>
			</div>
        <Player />

		</>
	)
}
