import React, { useState, useEffect } from 'react'
import './ChoosenPlayList.css'
import { HeaderPlay } from './header/HeaderChoosenPlay'
import { avatar } from '../WelcomeListOfArtists/AvatarList/AvatarList'
import { Button } from '@material-ui/core'
import { Deck } from '../CardAnimation'
import Player from './playerBar/PlayerBar'

export const ChosenPlayList = () => {
	const [state, setState] = useState('')
	const [toggle, setToggle] = useState(false)
	// useEffect(() => {
	// 	const audio = document.getElementById('player-main-main')
	// 	console.log(toggle)
	// 	if (toggle) {
	// 		audio.play()
	// 	} else {
	// 		audio.pause()
	// 	}
	// 	// audio.play()
	// }, [toggle])
	// console.log('toggle>>>>', toggle)

	return (
		<>
			<div className="main-view-playing">
				<HeaderPlay />
				<div className="playlist-songs">
					<ul className="table-songs">
						{avatar.map((song, i) => (
							<div className="list-songs">
								{i + 1}. Author {song.author} {'  '}
								Genre {song.genre}
								Song {song.sub_genre}
								<Button
									onClick={() => {
										setToggle(() => !toggle)
										setState(song.song)
									}}
									variant="contained"
								>
									{' '}
									Play
								</Button>
							</div>
						))}
					</ul>
				</div>
			</div>
      {/* Player starts here */}
			<Player state={state} toggle={toggle} />
		
      {/* Player ends here */}


		</>
	)
}
