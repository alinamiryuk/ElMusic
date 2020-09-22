import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
	Grid,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	Divider,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
		flexGrow: 1,
		maxWidth: 265,
		maxHeight: 500,
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

export const AboutUs = () => {
	const classes = useStyles()

	return (
		<>
			<div className="about-us">
				<Grid container direction="row" justify="center" alignItems="center">
					<div className="card-free-album">
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Miryuk"
									image="/images/Miryuk.JPG"
									title="ALINA MIRYUK"
								/>
								<CardContent>
									<Typography gutterBottom variant="h3" component="h2">
										ALINA <Divider />	MIRYUK
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</div>
					<div className="card-free-album">
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Chernitsyn"
									image="/images/Chernitsyn.JPG"
									title="VLADIMIR CHERNITSYN"
								/>
								<CardContent>
									<Typography gutterBottom variant="h3" component="h2">
										VLADIMIR <Divider />CHERNITSYN
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</div>
					<div className="card-free-album">
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Mesheryakov"
									image="/images/Mesheryakov.JPG"
									title="BORIS MESHERYAKOV"
								/>
								<CardContent>
									<Typography gutterBottom variant="h3" component="h2">
										BORIS <Divider /> MESHERYAKOV
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</div>
				</Grid>
			</div>
		</>
	)
}
