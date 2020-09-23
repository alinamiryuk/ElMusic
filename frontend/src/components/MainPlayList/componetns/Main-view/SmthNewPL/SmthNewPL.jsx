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
import { borders } from '@material-ui/system'

const useStyles = makeStyles({
	root: {
		maxWidth: 145,
		margin: '1em',
		// border: "1px solid white";
	},
})
const defaultProps = {
	bgcolor: 'background.paper',
	m: 1,
	borderColor: 'orange',
}

export const SmthNewPlayLists = () => {
	const classes = useStyles()
	return (
		<>
			<div className="cardPreview">
				<Card borderColor="white" className={classes.root}>
					<CardActionArea>
						<CardMedia
							component="img"
							alt="Contemplative Reptile"
							height="20"
							image="data:image/jpeg;base64,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"
							title="Contemplative Reptile"
              />
              <Typography>asdasda</Typography>
						<Button href="/ChoosenPlayList" size="small" color="secondary">
							play
						</Button>
					</CardActionArea>
				</Card>{' '}
			</div>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="20"
						image="https://i.pinimg.com/564x/69/95/0f/69950f647a51e2130924cc1e1e94ef04.jpg"
						title="Contemplative Reptile"
					/>
					<Button href="/ChoosenPlayList" size="small" color="secondary">
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
						image="https://i.pinimg.com/originals/c5/34/a4/c534a4dc288c51e8365d5050fc3f81a2.jpg"
						title="Contemplative Reptile"
					/>
					<Button size="small" color="secondary">
						Play
					</Button>
				</CardActionArea>
			</Card>{' '}
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="20"
						image="https://images-na.ssl-images-amazon.com/images/I/61uoEbq4viL._AC_.jpg"
						title="Contemplative Reptile"
					/>
					<Button href="/ChoosenPlayList" size="small" color="secondary">
						Play
					</Button>
				</CardActionArea>
			</Card>{' '}
		</>
	)
}
