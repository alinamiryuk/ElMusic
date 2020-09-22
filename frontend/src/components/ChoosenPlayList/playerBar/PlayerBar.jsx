import React from 'react'

import './PlayerBar.css'



export default function Player() {
	return (
		<>
			<audio
				className="audio"
				controls
				src="https://cdndl.zaycev.net/track/3129736/6oYDTtLSuwTmSyYEDtiCMgF8LHv2bfW1dhoU7dJJSD4cn8utt7Ki9hDYM5osbknyncxwA8v31xgLnkNP66dddDcakqY9WeSD2oiXPgHe6ggvUoYw7Pn9GQVxCCX5oMQfDcdvxXsX3R8xeWyD7eJN2XUo1R787b8ArFYFp6jbn1LUqbovm8FzkdgzNpUzCidJa8yy6jjPep8Yzra6VppPaR6mpADd4YTgzZy466tLU4owUqEBY1bEeyWfjeDzL2n9zGkskoVe5yvYnK95VebVYwCVSupguDYhcks2Zqvrc25tRimGjtnguy7twcUYLNnLPErsB5CksCCN8uB5Ezy5yCtdxH1kK8ABwrqE9HnVw7yYCiHHj3Hh"
			>
				Your browser does not support the
				<code>audio</code> element.
			</audio>
		</>
	)
}
