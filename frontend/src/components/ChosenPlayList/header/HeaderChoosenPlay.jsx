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
				return 'https://i.pinimg.com/originals/80/5f/57/805f5790e8a4e70fe7a3d8ddcd043453.jpg'

			case 'Rock':
				return 'https://pbs.twimg.com/profile_banners/121364613/1412268836/1500x500'

			case 'Metal':
				return '/images/bfmv.jpg'

			case 'Pop':
				return 'https://i.pinimg.com/originals/e7/44/5d/e7445d0eb3cce95d6d8cf62597f72129.jpg'

			default:
				return 'https://i.pinimg.com/originals/80/5f/57/805f5790e8a4e70fe7a3d8ddcd043453.jpg'
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
						{song ? `now playing :    ${song}` : ''}
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
