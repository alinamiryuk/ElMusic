import React from 'react'

import './PlayerBar.css'



export default function Player({music}) {
	return (
		<>
    <div className="player-audio">

			<audio onClick={()=>(console.log('audio'))}
        className="audio"
        autoplay
				controls
				src="https://cdndl.zaycev.net/track/7154974/4Ehsii9FgoD6ZoprRLM9h3r96fHuHrsvKJDwaG5izygS9cqyDaqibMjPwGZ7iVYMT66MvHsx8bZiMx3bxZUnyJBZ61nYMnxHVMUifubWTaT91bNmBP3fVW3KeP92pt4Tupch9xQVmpZhZupAhDjXYEhdGYyMEadhJZFjyvRdNDxpcvT3GmNmEFiF3VUL6SV59Qy7CWBRJ6DpzhHqdx67N6QkUXj98PtL2aqxkDgFeSXgX1jsy2aGMLRwSzRXKBp5HKtpVtM3CCkBcjbzhxM8jLkW6NXXhKZf2EZ82psNfxVdDjy9GwJh7uDVwabg6GMXHqc26ANjGKFDZZeE6yTpTrMdgz3nkBSJsnJ6VEMn2Q4Rgz3Kseey"
        >
				Your browser does not support the
				<code>audio</code> element.
			</audio>
        </div>
		</>
	)
}
