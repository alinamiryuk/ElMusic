import React, {useEffect, useRef} from 'react'
import './PlayerBar.css'
import CssBaseline from '@material-ui/core/CssBaseline'

export default function Player({id, toggle, setToggleEq, setId}) {



  const audio = useRef()
  useEffect(() => {
    if (toggle) {
      audio.current.play()
    } else {
      setId('')
      audio.current.pause()
    }
  }, [toggle])

  useEffect(() => {
    audio.current.addEventListener('pause', () => setToggleEq(state => !state))
    audio.current.addEventListener('play', () => setToggleEq(state => !state))
  }, [])

  return (
      <>
        <div className="player-div">
          <CssBaseline/>
          <audio
              ref={audio}
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
