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

	console.log('toggle>>>>', toggle)
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
							// src="https://cdndl.zaycev.net/track/2440475/6oYDTtLSuwTmSyYEDtiCMgJvQiDLqHtrj99qFvA59uGsrqw6F1J6fLzaE1AkxaUwAVSpc6aZN38JejQdtu7a8Kv3H2WirYRXDeT6U9GjrvtJpnxCUNnfQPTcZQWZWS4UniEfkSjYkDGcrcCknwnWnDvwKqxAakboFwRsWa1yCoyxYw4CterkcAd67gsmBoTPsLwKzUr4DfmzY9tbDVPTEnyW9LQVX2mN4RRbMf8n2CQHS5gNsxshFx6c4Hui98DknUt8wwkhcFcH1tr4RARdDBJ8T3fDthDshU7q6ZPSGwaa8oZcSbFzyceuTmUcvzdxtHzv5i2iEvgYfvZ2ksx4Tx8GAuMLGXwgEzrHi6M5oqpz1vVdQv4F"
						>
							Your browser does not support the
							<code>audio</code> element.
						</audio>
			</div>
		</>
	)
}
