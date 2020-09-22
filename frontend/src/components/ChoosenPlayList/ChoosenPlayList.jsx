import React, { useState } from 'react'
import './ChoosenPlayList.css'
import { HeaderPlay } from './header/HeaderChoosenPlay'
import { avatar } from '../WelcomeListOfArtists/AvatarList/AvatarList'
import { Button } from '@material-ui/core'
import { Deck } from '../CardAnimation'
import Player from './playerBar/PlayerBar'

export const ChoosenPlayList = () => {
	const [state, setState] = useState('11')
	const url =
		'7CNHd5sc2BQgY3jShGFJP82xfvj9yVtA43h9faCexwaVUTWGQBiTF6haZwTFbfCwk4xZkpyTH4Hn5mL6oBsPwBg5fH8abVmvna69NDfa5USMdLrEDGbhXxUt7RUaKDoyUQw4DEpeDR7aj6oLygHa8bghpjx83CzotpkE9Wu6RcGHWmC4TdMkVedkEEZiTygDhMwmkb5dChVQHeBmYoZ7BqTMrcczXq87dZgjAexGfbK8x2HpxsVCXNztdwDbQAy8R1j57cBYTr91MWYC9VCUYP3JTgmtdX37XFaKunHURSgnuhgFzPkBRdC241bmmdtGDPoBy8B2ywU78cxAr171xp59Nuwt85uQBHyhVHUEsovReduYWNfz'
	console.log(JSON.stringify(url))
	console.log(state)

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
								<Button onClick={()=>(
                	<audio
                  className="audio"
                  autoplay
                  controls
                  src="https://cdndl.zaycev.net/track/17897115/7CNHd5sc2BQgY3jShGFJP843jpCZxUXmqN8ogb7o1EXbdFyLUvGKDExGcKFGKvqS1w8uQz8xsvJUgS7QBeYnpoJzZ9G3DRkdRK3bxRNfFXPQSqwRPrDYaC5sHPx7gXpxmFTgULH7gWEe9RYVXT2bxf7CaqUTFhZyJggUGeKsR1ARTnveQLz6cUgSu1dZP7wJLfQeHjZVm2DCssvpXEWEketR9tbZLJb8Gz6zbUo7ngmFZaSxH44TxfpeEwaePap4vdsZNnXyuMbV4sCYEoivKMcEjfad3uzxJYdCv59NKGsyJxiebCtxHsNarhL75C1jMu6rJbacqFbmvtBn3tzS26jgyaqda6eEULu4gMLG6p2f9FKzqp1X"
                  >
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>
                )}  variant="outlined">  Play </Button>
							</div>
						))}
					</ul>
				</div>
			</div>
        <Player />
		</>
	)
}
