import React from 'react'
import './Navbar.css'
import { useSelector } from 'react-redux'
import {
	Grid,
	List,
	ListItem,
	ListItemText,
	makeStyles,
	ListItemAvatar,
	Avatar,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	fontSize: {
		fontSize: '0.7em',
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingRight: '2em',
	},
	navList: {
		display: 'flex',
	},
	listItemWidthNav: {
		width: '10em',
	},
	large: {
		width: theme.spacing(6),
		height: theme.spacing(6),
	},
}))

export const NavBar = () => {
	const classes = useStyles()
	const userCheck = useSelector((state) => state)
	// const userCheck = useSelector((state) => state.username)
	const successCheck = useSelector((state) => state.user.success)

		return (
			<>
				<div className="navbar">
					<List className={classes.navList}>
						<ListItem>
							<ListItemAvatar>
								<Avatar
									alt="El music"
									src="/images/logo-192x192.png"
									className={classes.large}
								/>
							</ListItemAvatar>
							<a href="/" className={classes.listItemWidth}>
								El music
							</a>
						</ListItem>
						<ListItem className={classes.listItemWidthNav}>
							<Link to="/main">home</Link>
						</ListItem>
						<ListItem className={classes.listItemWidthNav}>username</ListItem>
						<ListItem className={classes.listItemWidthNav}>
							<i className="fas fa-sign-out-alt"/>Log Out
						</ListItem>
					</List>
				</div>
			</>
		)
	}

