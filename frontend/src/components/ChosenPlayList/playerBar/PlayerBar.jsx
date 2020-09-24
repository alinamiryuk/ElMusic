import React, { useEffect } from 'react'

import './PlayerBar.css'

export default function Player({ id, toggle }) {
	const audio = document.getElementById('player-main-main')

	useEffect(() => {
		const audio = document.getElementById('player-main-main')
		if (toggle) {
			audio.play()
		} else {
			audio.pause()
		}
	}, [toggle])

	return (
		<>
				<audio
					id="player-main-main"
					className="audio"
					autoPlay
					controls
					src={id ? `/music/${id}.mp3` : null}
				>
					Your browser does not support the
					<code>audio</code> element.
				</audio>
		</>
	)
}
