import React from 'react'

import './PlayerBar.css'



export default function Player({music}) {
	return (
		<>
    <div className="player-audio">

			<audio
				className="audio"
				controls
				src="https://cdndl.zaycev.net/track/16591984/7CNHd5sc2BQgY3jShGFJP86i61UVDigAKWWJJDfMubt6eU72h6s6EiagTYRXZLqpYghwb13yBZftwY2LU4VyCYEkmzGic8Zzn9Ej5YYWhZWxCrhoptn9ydiv5syAsKNhCr1o46nnZit5SVin8g5ady2xxwxUnoTErRmZL7JrTueMaomiFeFS3dpJXjPpvmiTx9PGUft6b52sFzK5JWR3DbWrjbXZCzb1m1f8kPrqoBeJhu3gDAjztayQPAQiSpeEZ2uuk5EjqpGAXonTdDNAfQ11Pmb2whfPQfV9HJBPdbryJJSxTw2AHuhmNiQ1ne2CMES19vHwCaZbPbnJpjv1crBAeAbBkuoLcQPS4Lm3kP5AhTC3ffWX"
        >
				Your browser does not support the
				<code>audio</code> element.
			</audio>
        </div>
		</>
	)
}
