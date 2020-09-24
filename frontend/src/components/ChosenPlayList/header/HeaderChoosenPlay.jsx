import React, { useEffect,useState,useContext } from 'react'
import './HeaderChoosenPlay.css'
import { SongsContext } from '../Context/SongsContext'
export const HeaderPlay = ({playlist,id}) => {

  const songs = useContext(SongsContext)

  const [artist,setArtist] = useState()

  const [song,setSong] = useState()


  useEffect(()=>{
    songs.map(el=> el._id === id ? ( (setArtist(el.author),setSong(el.song_name))) : null)
  },[id])

	return (
		<>
			<div className="header-play" style={{backgroundImage: 'https://i.pinimg.com/originals/80/5f/57/805f5790e8a4e70fe7a3d8ddcd043453.jpg'}}>
				<div className="artist-information">
          {playlist ? playlist : null }
          <br/>
          <div style={{fontSize:'40px'}}>
        {artist ?  (`Author ${artist}`) : '' }
        </div>
        <br/>
        <div style={{fontSize:'25px'}}>
        {song ?  (`Now playing  ${song}`) : '' }

        </div>
          </div>
			</div>
		</>
	)
}
