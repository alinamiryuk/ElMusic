import React, { useEffect } from 'react'

import './PlayerBar.css'

export default function Player({ id, toggle }) {
	const audio = document.getElementById('player-main-main')

	useEffect(() => {
		const audio = document.getElementById('player-main-main')
		console.log(toggle)
		if (toggle) {
			audio.play()
		} else {
			audio.pause()
		}
	}, [toggle])

	console.log('toggle>>>>', toggle)
	return (
		<>
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
		</>
	)
}
