import React from 'react'

import './PlayerBar.css'




export default function Player({state,toggle}) {

  console.log('this is state>>>',state);
  const audio = document.getElementById('player-main-main')

  if (toggle) { audio.play() } 
	return (
		<>
    <div className="player-audio">

			<audio id="player-main-main" onClick={()=>(console.log('audio'))}
        className="audio"
        autoplay
				controls
        src="https://cdndl.zaycev.net/track/2440475/6oYDTtLSuwTmSyYEDtiCMgJvQiDLqHtrj99qFvA59uGsrqw6F1J6fLzaE1AkxaUwAVSpc6aZN38JejQdtu7a8Kv3H2WirYRXDeT6U9GjrvtJpnxCUNnfQPTcZQWZWS4UniEfkSjYkDGcrcCknwnWnDvwKqxAakboFwRsWa1yCoyxYw4CterkcAd67gsmBoTPsLwKzUr4DfmzY9tbDVPTEnyW9LQVX2mN4RRbMf8n2CQHS5gNsxshFx6c4Hui98DknUt8wwkhcFcH1tr4RARdDBJ8T3fDthDshU7q6ZPSGwaa8oZcSbFzyceuTmUcvzdxtHzv5i2iEvgYfvZ2ksx4Tx8GAuMLGXwgEzrHi6M5oqpz1vVdQv4F"
        // {`${state}`}
        >
				Your browser does not support the
				<code>audio</code> element.
			</audio>
        </div>
		</>
	)
}
