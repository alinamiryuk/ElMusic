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
  TableContainer,
} from '@material-ui/core'

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
					direction="column"
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
								El music
							</ListItem>

							<ListItem button>
								<ListItemText primary="" />
								About us
							</ListItem>
						</List>
						<Divider />
						<List
							component="nav"
							className={classes.fontSize}
							aria-label="secondary mailbox folders"
						>
							<ListItem button>
								<ListItemText primary="" />
								Social Network
							</ListItem>
						</List>
					</div>
				</Grid>
			</div>
		</>
	)
}
