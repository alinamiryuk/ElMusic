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
	Avatar,
	IconButton,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub'
import {Footer} from '../Footer'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
		// flexGrow: 1,
		maxWidth: 265,
    maxHeight: 500,
        fontFamily: 'Circular, Helvetica, Arial, sans-serif, IosFix',
    
	},
	// gridList: {
	// 	width: 600,
	// 	height: 450,
	// },
	// paper: {
	// 	height: 140,
	// 	width: 100,
	// },
	// control: {
	// 	padding: theme.spacing(20),
	// },
	// icon: {
	// 	color: 'rgba(255, 255, 255, 0.54)',
	// },
}))

export const AboutUs = () => {
	const classes = useStyles()

	return (
		<>
			<div className="about-us">
				<Grid container direction="row" justify="center" alignItems="center">
					<div>
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Miryuk"
									image="/images/Miryuk.JPG"
									title="ALINA MIRYUK"
								/>
								<CardContent>
																	<Typography gutterBottom variant="h3" component="h2" style={{
												fontFamily:
													'Circular, Helvetica, Arial, sans-serif, IosFix',
											}}>
										ALINA 	<a href="https://github.com/alinamiryuk" target="_blank">
										<GitHubIcon fontSize="large" />
									</a><Divider /> MIRYUK
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</div>
					<div>
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Chernitsyn"
									image="/images/Chernitsyn.JPG"
									title="VLADIMIR CHERNITSYN"
								/>
								<CardContent>
									<Typography gutterBottom variant="h3" component="h2" style={{
												fontFamily:
													'Circular, Helvetica, Arial, sans-serif, IosFix',
											}}>
										VLADIMIR{' '}
										<a href="https://github.com/Flunt1k" target="_blank">
											<GitHubIcon fontSize="large" />
										</a>
										<Divider />
										CHERNITSYN
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</div>
					<div>
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Mesheryakov"
									image="/images/Mesheryakov.JPG"
									title="BORIS MESHERYAKOV"
								/>
								<CardContent>
									<Typography gutterBottom variant="h3" component="h2" style={{
												fontFamily:
													'Circular, Helvetica, Arial, sans-serif, IosFix',
											}}>
										BORIS{' '}
										<a
											href="https://github.com/meshbor"
											target="_blank"
											
										>
											<GitHubIcon fontSize="large" />
										</a>
										<Divider /> MESHERYAKOV
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</div>
				</Grid>
			</div>
      <section className="footerUs">
      <Footer />
      </section>
		</>
	)
}
