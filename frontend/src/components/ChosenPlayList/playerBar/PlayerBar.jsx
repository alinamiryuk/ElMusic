import React from 'react'

import './PlayerBar.css'

export default function Player({id}) {
  return (
      <>
        <div className="player-audio">

          <audio id="player-main-main" onClick={() => (console.log('audio'))}
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
