import React from 'react'
import '../Footer/Footer.css'
import {
	Grid,
	List,
	ListItem,
	Divider,
	ListItemText,
	makeStyles,
	ListItemAvatar,
	Avatar,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
		flexGrow: 1,
	},
	gridList: {
		width: 600,
		height: 450,
	},

	control: {
		padding: theme.spacing(20),
	},
	fontSize: {
		font: 100,
	},
	large: {
		width: theme.spacing(5),
		height: theme.spacing(5),
	},
}))

export const Footer = () => {
	const classes = useStyles()

	return (
		<>
			<div className="whole-footer">
				<Grid
					container
					direction="row"
					justify="flex-start"
					alignItems="flex-start"
				>
					<div className="list-footer">
						<List component="nav" aria-label="main mailbox folders">
							<ListItem button>
								<ListItemAvatar>
									<Avatar
										alt="El music"
										src="/images/logo-192x192.png"
										className={classes.large}
									/>
								</ListItemAvatar>
								<ListItemText primary="" />
								<Link to="/">El music</Link>
							</ListItem>

							<ListItem button>
								<ListItemText primary="" />
								<Link to="/about-us">About us</Link>
							</ListItem>
						</List>
						<Divider />
						<List
							component="nav"
							className={classes.fontSize}
							aria-label="secondary mailbox folders"
						>
							<ListItem>
								<ListItemText primary="" />
								<Link to="/">
									<Avatar
										alt="IG"
										src="/images/IG.png"
										className={classes.large}
									/>
								</Link>
								<Link to="/">
									<Avatar
										alt="FB"
										src="/images/FB.png"
										className={classes.large}
									/>
								</Link>
								<Link to="/">
									<Avatar
										alt="VK"
										src="/images/VK.png"
										className={classes.large}
									/>
								</Link>
							</ListItem>
						</List>
					</div>
				</Grid>
				<ListItemText primary=" © 2020 El music" />
			</div>
		</>
	)
}
