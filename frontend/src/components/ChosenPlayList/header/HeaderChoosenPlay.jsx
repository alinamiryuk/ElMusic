import React, { useEffect, useState, useContext } from 'react'
import './HeaderChoosenPlay.css'
import { SongsContext } from '../Context/SongsContext'

export const HeaderPlay = ({ toggleEq, playlist, id, toggle }) => {
	const songs = useContext(SongsContext)

	const [artist, setArtist] = useState()
	const [song, setSong] = useState()

	useEffect(() => {

    if (songs) songs.map((el) =>
			el._id === id ? (setArtist(el.author), setSong(el.song_name)) : null
	)
	}, [id])

	return (
		<>
			<div
				className="header-play"
				style={{
					backgroundImage:
						`url(https://i.pinimg.com/originals/80/5f/57/805f5790e8a4e70fe7a3d8ddcd043453.jpg)`,
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
							style={{ width: '100%', height: '80px' }}
							src="https://cdn.orangeable.com/img/javascript-equalizer.gif"
						/>
					) : null}

				</div>
			</div>
		</>
	)
}
