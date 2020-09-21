import React from 'react'
import '../albumResult/Albums.css'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, CardActionArea, CardMedia } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
		flexGrow: 1,
		maxWidth: 265,
		maxHeight: 265,
	},
	gridList: {
		width: 600,
		height: 450,
	},
	paper: {
		height: 140,
		width: 100,
	},
	control: {
		padding: theme.spacing(20),
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)',
	},
}))

export const Albums = () => {
	const classes = useStyles()

	return (
		<>
			<div className="album-results">
				<Grid container direction="row" justify="center" alignItems="center">
					<div className="card-free-album">
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Fallout boy"
									height="140"
									image="https://tabs.do.am/oblogka/cent.jpg"
									title="Fallout boy"
								/>
							</CardActionArea>
						</Card>
					</div>
					<div className="card-free-album">
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Rihanna"
									height="140"
									image="https://i.pinimg.com/originals/dc/bf/18/dcbf18b7d7ce59389e97a3117df68a88.jpg"
									title="Rihanna"
								/>
							</CardActionArea>
						</Card>
					</div>
					<div className="card-free-album">
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="NickelBack"
									height="140"
									image="https://upload.wikimedia.org/wikipedia/ru/4/4b/Nickelback_No_Fixed_Adress.jpg"
									title="NickelBack"
								/>
							</CardActionArea>
						</Card>
					</div>
				</Grid>
				<Grid container direction="row" justify="center" alignItems="center">
					<div className="card-free-album">
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Frank Sinatra"
									height="140"
									image="https://img.discogs.com/Ax_H-IhiHl21_HUpZLXEGleVxSw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4451445-1365253803-2034.jpeg.jpg"
									title="Frank Sinatra"
								/>
							</CardActionArea>
						</Card>
					</div>
					<div className="card-free-album">
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="shawn Mendes"
									height="40"
									image="https://f4.bcbits.com/img/a2119552211_10.jpg"
									title="shawn Mendes"
								/>
							</CardActionArea>
						</Card>
					</div>
					<div className="card-free-album">
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="metallica"
									height="140"
									image="https://upload.wikimedia.org/wikipedia/ru/thumb/0/09/Metallica_Death_Magnetic.jpg/274px-Metallica_Death_Magnetic.jpg"
									title="metallica"
								/>
							</CardActionArea>
						</Card>
					</div>
				</Grid>
			</div>
		</>
	)
}
