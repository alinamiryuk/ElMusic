import React from 'react'
import './Main-view.css'
import {
	Card,
	CardContent,
	Typography,
	CardActionArea,
	Button,
	CardMedia,
	CardActions,
	makeStyles,
	Grid,
} from '@material-ui/core'
import { PlayingPlaylists } from './plailists/playlists'
import { SmthNewPlayLists } from './SmthNewPL/SmthNewPL'

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
})

export const MainView = () => {
	const classes = useStyles()
	return (
		<div>
			<div className="Information">Playlists for you</div>
			<div className="albumsRecommend">
				<Grid
					container
					direction="row"
					justify="flex-start"
					alignItems="center"
				>
					<PlayingPlaylists />
				</Grid>
			</div>
			<div className="Information">Based on your recent listening</div>
			<div className="albumsWantsTo">
				<Grid
					container
					direction="row"
					justify="flex-start"
					alignItems="center"
				>
					<SmthNewPlayLists />
				</Grid>
			</div>
		</div>
	)
}
