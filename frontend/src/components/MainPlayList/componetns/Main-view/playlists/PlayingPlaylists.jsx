import React from 'react'
import {
	Card,
	CardContent,
	Typography,
	CardActionArea,
	Button,
	CardMedia,
	CardActions,
	makeStyles,
} from '@material-ui/core'
import PlayListCard from './PlayListCard'

export const PlayingPlaylists = ({playlists}) => {

	return (
		<>
			{playlists ? playlists.playlists.map((playlist,i) => {
				return <PlayListCard key={i+playlists.type} playlist={playlist}/>
			}) : null}
		</>
	)
}
