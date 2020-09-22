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
						<a href="https://www.youtube.com/watch?v=2yy100V7u3Y&list=PUlkRzsdvg7_RKVhwDwiDZOA&index=25">
							play
						</a>
					</Button>
				</CardActionArea>
			</Card>{' '}
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="20"
						image="https://cdn1.ozone.ru/multimedia/1019138176.jpg"
						title="Contemplative Reptile"
					/>
					<Button size="small" color="primary">
						play
					</Button>
				</CardActionArea>
			</Card>{' '}
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="20"
						image="https://cdn1.ozone.ru/multimedia/1019138176.jpg"
						title="Contemplative Reptile"
					/>
					<Button size="small" color="primary">
						play
					</Button>
				</CardActionArea>
			</Card>{' '}
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="20"
						image="https://cdn1.ozone.ru/multimedia/1019138176.jpg"
						title="Contemplative Reptile"
					/>
					<Button size="small" color="primary">
						play
					</Button>
				</CardActionArea>
			</Card>{' '}
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="20"
						image="https://cdn1.ozone.ru/multimedia/1019138176.jpg"
						title="Contemplative Reptile"
					/>
					<Button size="small" color="primary">
						play
					</Button>
				</CardActionArea>
			</Card>{' '}
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="20"
						image="https://cdn1.ozone.ru/multimedia/1019138176.jpg"
						title="Contemplative Reptile"
					/>
					<Button size="small" color="primary">
						play
					</Button>
				</CardActionArea>
			</Card>

		</>
	)
}
