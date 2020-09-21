import React from 'react'
import './HeaderChoosenPlay.css'
import {avatar} from '../../WelcomeListOfArtists/AvatarList/AvatarList'
export const HeaderPlay = ()=>{
  return (<>
  <div className="header-play">
     <div className="artist-information">
      {avatar[0].author}
     </div>
    

  </div>
  </>)
}
