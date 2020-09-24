import React, { useEffect, useState } from 'react'
import './ChosenPlayList.css'
import { HeaderPlay } from './header/HeaderChoosenPlay'
import { Button, Grid } from '@material-ui/core'
import Player from './playerBar/PlayerBar'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchMusic } from '../../redux/actionType'
import { SongsContext } from './Context/SongsContext'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

export const ChosenPlayList = () => {
	const [state, setState] = useState()
	const [toggleEq, setToggleEq] = useState(false)
	const [toggle, setToggle] = useState(false)

	const [id, setId] = useState()
	const params = useParams().id
	const dispatch = useDispatch()
	const music = useSelector((state) => state.music)
	const playlist = useSelector((state) => state.playlists)
	const songs = playlist[params]?.songs || playlist[params]?.music

	const useStyles = makeStyles((theme) => ({
		root: {
			display: 'flex',
			margin: '2em',
			minWidth: '300px',
			maxWidth: '300px',
			minHeight: '120px',
			maxHeight: '120px',
			opacity: 0.9,
		},
		details: {
			display: 'flex',
			flexDirection: 'column',
		},
		content: {
			flex: '1 0 auto',
		},
		cover: {
			marginLeft: '20%',
			width: 151,
		},
		controls: {
			display: 'flex',
			alignItems: 'center',
			paddingLeft: theme.spacing(1),
			paddingBottom: theme.spacing(1),
		},
		playIcon: {
			height: 38,
			width: 38,
		},
	}))

	useEffect(() => {
		setState(music[id])
	}, [music])

	const classes = useStyles()

	return (
		<>
			<SongsContext.Provider value={songs}>
				<Grid direction="column" justify="space-between">
					<div className="main-view-playing">
						<HeaderPlay
							playlist={playlist[params]?.type}
							toggleEq={toggleEq}
              id={id}
              toggle={toggle}
						/>
						<div className="playlist-songs">
							<Grid
								container
								direction="row"
								justify="flex-start"
								alignItems="center"
							>
								{songs
									? songs.map((song, i) => (
                    
											<Card className={classes.root}>
												<div className={classes.details}>
													<CardContent className={classes.content}>
														<Typography component="h5" variant="h5">
															{song.song_name}
														</Typography>
														<Typography variant="h5" color="textSecondary">
															{song.author}
														</Typography>
													</CardContent>
													<div className={classes.controls}>
														<Button className={i}
															style={{ opacity: '0.6' }}
															onClick={() => {
																dispatch(fetchMusic(song._id, song.genre))
																setId(song._id)
																setToggle(() => !toggle)
                                setToggleEq(() => !toggleEq)
                                
															}}
															variant="outlined"
														>
															Play
														</Button>
													</div>
												</div>
											</Card>
									  ))
									: null}
							</Grid>
						</div>
					</div>

					<div>
						<Player toggle={toggle} id={state} />
					</div>
				</Grid>
			</SongsContext.Provider>
		</>
	)
}
