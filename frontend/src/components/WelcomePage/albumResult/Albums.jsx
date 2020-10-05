import React from 'react'
import '../albumResult/Albums.css'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, CardActionArea, CardMedia } from '@material-ui/core'

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
		// height: 450,
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
                  onClick={()=>{console.log('it clicked');}}
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
									alt="FEVER 333"
									height="140"
									image="https://avatars.yandex.net/get-music-content/163479/2c29fdd3.a.6646666-1/m1000x1000?webp=false"
									title="FEVER 333"
								/>
							</CardActionArea>
						</Card>
					</div>
					<div className="card-free-album">
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="a day to remember"
									height="140"
									image="https://images.genius.com/9489e9c9edac43e059de6511095f3f18.1000x1000x1.png"
									title="a day to remember"
								/>
							</CardActionArea>
						</Card>
					</div>
					<div className="card-free-album">
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="shawn mendez"
									height="140"
									image="https://pbs.twimg.com/media/EMfQ9M9WsAA95JC.jpg"
									title="shawn mendez"
								/>
							</CardActionArea>
						</Card>

					</div>
				</Grid>
			</div>
      
		</>
	)
}
