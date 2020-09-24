import React from 'react'
import PlayListCard from './PlayListCard'
import {v4 as uuidv4} from 'uuid'

export const PlayingPlaylists = ({playlists}) => {
console.log('playlist.type is >>>>',playlists.type);
	return (
		<>
			{playlists ? playlists.playlists.map((playlist,i) => {
				const id = uuidv4()
				return <PlayListCard key={id} playlist={playlist} types={playlists.type}/>
			}) : null}
		</>
	)
}
