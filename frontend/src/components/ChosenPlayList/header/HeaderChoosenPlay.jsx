import React, { useEffect, useState, useContext } from 'react'
import './HeaderChoosenPlay.css'
import { SongsContext } from '../Context/SongsContext'

export const HeaderPlay = ({ toggleEq, playlist, id, toggle }) => {
	const songs = useContext(SongsContext)

	const [artist, setArtist] = useState()
	const [song, setSong] = useState()

	useEffect(() => {
		if (songs)
			songs.map((el) =>
				el._id === id ? (setArtist(el.author), setSong(el.song_name)) : null
			)
  }, [id])
  

	const checker = (genre) => {
		switch (genre) {
			case 'Jazz':
				return '/images/JazzBg.jpg'

			case 'Rock':
				return '/images/rockConcert.jpg'

			case 'Metal':
				return '/images/bfmv.jpg'

			case 'Pop':
				return '/images/popMusic.jpeg'

			default:
				return '/images/JazzBg.jpg'
		}
	}
	return (
		<>
			<div
				className="header-play"
				style={{
					backgroundImage: `url(${checker(songs[0].genre)})`,
				}}
			>
				<br />
				<div className="artist-information">
					{playlist ? playlist : null}
					<br />
					<div style={{ fontSize: '40px' }}>
						{artist ? `    ${artist}` : ''}
					</div>
					<br />
					<div style={{ fontSize: '25px' }}>
						{song && toggle ? `now playing :    ${song}` : ''}
					</div>
					{toggleEq && toggle ? (
						<img
							className="equa"
							style={{ width: '100%', height: '80px' }}
							src="https://cdn.orangeable.com/img/javascript-equalizer.gif"
						/>
					) : null}
				</div>
			</div>
		</>
	)
}
