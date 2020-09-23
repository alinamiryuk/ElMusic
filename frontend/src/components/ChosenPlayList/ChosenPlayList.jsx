import React, { useState } from 'react'
import './ChosenPlayList.css'
import { HeaderPlay } from './header/HeaderChoosenPlay'
import { avatar } from '../WelcomeListOfArtists/AvatarList/AvatarList'
import { Button } from '@material-ui/core'
import { Deck } from '../CardAnimation'
import Player from './playerBar/PlayerBar'

export const ChosenPlayList = () => {
	const [state, setState] = useState('11')
	const [toggle, setToggle] = useState(false)
  
  console.log('toggle>>>>',toggle);

  const audio = document.getElementById('player-main-main')

  if (toggle) { audio.play() } 

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
							<Button onClick={()=>(setToggle(!toggle))} variant='contained'> Play</Button>
              </div>
						))}
					</ul>
				</div>
			</div>
        <Player toggle={toggle} />
		</>
	)
}
