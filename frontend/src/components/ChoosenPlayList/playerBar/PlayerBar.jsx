import React from 'react'

import './PlayerBar.css'



export default function Player({music}) {
	return (
		<>
    <div className="player-audio">

			<audio onClick={()=>(console.log('audio'))}
        className="audio"
        autoplay
				// controls
				src="https://cdndl.zaycev.net/track/17897115/7CNHd5sc2BQgY3jShGFJP843jpCZxUXmqN8ogb7o1EXbdFyLUvGKDExGcKFGKvqS1w8uQz8xsvJUgS7QBeYnpoJzZ9G3DRkdRK3bxRNfFXPQSqwRPrDYaC5sHPx7gXpxmFTgULH7gWEe9RYVXT2bxf7CaqUTFhZyJggUGeKsR1ARTnveQLz6cUgSu1dZP7wJLfQeHjZVm2DCssvpXEWEketR9tbZLJb8Gz6zbUo7ngmFZaSxH44TxfpeEwaePap4vdsZNnXyuMbV4sCYEoivKMcEjfad3uzxJYdCv59NKGsyJxiebCtxHsNarhL75C1jMu6rJbacqFbmvtBn3tzS26jgyaqda6eEULu4gMLG6p2f9FKzqp1X"
        >
				Your browser does not support the
				<code>audio</code> element.
			</audio>
        </div>
		</>
	)
}
