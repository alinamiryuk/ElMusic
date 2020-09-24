import React from 'react'
import './Navbar.css'
import {
	List,
	ListItem,
	makeStyles,
	ListItemAvatar,
	Avatar,
} from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {logoutUser} from '../../../../redux/actionType'

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
    padding: '0.2em',
	},
	large: {
		width: theme.spacing(6),
		height: theme.spacing(6),
	},
}))

export const NavBar = () => {
	const classes = useStyles()
	const username = useSelector(state => state.user.username)
	const history = useHistory()
	const dispatch = useDispatch()

	const logOutUser = () => {
		dispatch(logoutUser())
		localStorage.removeItem('user')
		history.push('/login')
	}
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
						<ListItem className={classes.listItemWidthNav} style={{cursor: 'pointer'}}>{username}</ListItem>
						<ListItem className={classes.listItemWidthNav} style={{cursor: 'pointer'}} onClick={() => logOutUser()}>
							<i className="fas fa-sign-out-alt"/>Log Out
						</ListItem>
					</List>
				</div>
			</>
		)
	}

