import React from 'react'

import './PlayerBar.css'




export default function Player({music}) {
	return (
		<>
    <div className="player-audio">

			<audio id="player-main-main" onClick={()=>(console.log('audio'))}
        className="audio"
        autoplay
				controls
				src="https://cdndl.zaycev.net/track/5966522/5S7mmVyZ9RcMyk3J6Wn9DXrkgnFGuhRyHP9BzisZZYuaXkJ4mk3PKCoGVnhBph9zsdtr1U1wdrqXXoLTq7U3kvZo9VVj1UxciceorbNP8RjDCFp4kw9hG6XkUc56LLvuQAY8u53d66XBrbEpw2nxjPQJKBhFTqJbbsnrqAeJRRFPuavTxdo911CrXgv15gV5YjsYRfv6GpLUYE89zUxifuhFC6eyH7mgdnpA8bUqchqGShkdUeoy8bzBs3FmFPThmJK2byDqi4gyixcmQm6JZKEfm9bAedw243QtfJQhKp1gAjsJrasDmz7uk66QFUuWNza1b4SYYpFe8a8NA2JwhqSih5PcBXKzPtsb2fWeSVRkLSE5Mpbo"
        >
				Your browser does not support the
				<code>audio</code> element.
			</audio>
        </div>
		</>
	)
}
