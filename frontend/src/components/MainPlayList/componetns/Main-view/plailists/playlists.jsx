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

const useStyles = makeStyles({
	root: {
		maxWidth: 145,
		margin: '1em',
	},
})

export const PlayingPlaylists = () => {
	const classes = useStyles()
	return (
		<>

			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="20"
						image="https://cdn1.ozone.ru/multimedia/1019138176.jpg"
						title="Contemplative Reptile"
					/>
					<Button size="small" color="secondary">
						<a href="/ChoosenPlayList">
							play
						</a>
					</Button>
				</CardActionArea>
			</Card>{'  '}
		</>
	)
}
