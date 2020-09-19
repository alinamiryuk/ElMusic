import React from 'react'
import '../Footer/Footer.css'
import {
	Grid,
	List,
	ListItem,
	Divider,
	ListItemText,
	makeStyles,
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
								<ListItemText primary="" />
								LOGO
							</ListItem>
							<ListItem button>
								<ListItemText primary="" />
								All about us
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
