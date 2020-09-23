import React, { useEffect, useState, useContext } from 'react'
import './HeaderChoosenPlay.css'
import { SongsContext } from '../Context/SongsContext'


export const HeaderPlay = ({ toggleEq, playlist, id }) => {
  	const songs = useContext(SongsContext)

	const [artist, setArtist] = useState()
	const [song, setSong] = useState()

	useEffect(() => {
	songs.map((el) =>
			el._id === id ? (setArtist(el.author), setSong(el.song_name)) : null
		)
	}, [id])
	console.log('header info ', songs)
	console.log('song info ', song)



	return (
		<>
			<div
				className="header-play"
				style={{
					backgroundImage:
						'https://i.pinimg.com/originals/80/5f/57/805f5790e8a4e70fe7a3d8ddcd043453.jpg',
				}}
			>
				<div className="artist-information">
        
					{playlist ? playlist : null}
					<br />
					<br />
					<div style={{ fontSize: '40px' }}>
						{artist ? `author :    ${artist}` : ''}
					</div>
					<br />
					<div style={{ fontSize: '25px' }}>
						{song ? `now playing :    ${song}` : ''}
					</div>
				</div>
            {toggleEq ? 
            <img style={{width:"100%", height:"80px"}} src= 'https://thumbs.gfycat.com/SleepySimpleHeterodontosaurus-size_restricted.gif'/>
        : null}
			</div>
		</>
	)
}
