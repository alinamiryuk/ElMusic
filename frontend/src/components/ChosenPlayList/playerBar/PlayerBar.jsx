import React, { useEffect } from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import './PlayerBar.css'
import CssBaseline from '@material-ui/core/CssBaseline'

export default function Player({ id, toggle }) {

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
			<div className="player-div">
				<CssBaseline />
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
			</div>

		</>
	)
}
