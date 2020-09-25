import React from 'react'
import '../Footer/Footer.css'
import {
	Grid,
	List,
	ListItem,
	ListItemText,
	makeStyles,
	ListItemAvatar,
	Avatar,
} from '@material-ui/core'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	fontSize: {
		fontSize: '0.7em',
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingRight: '2em',
	},
	large: {
		width: theme.spacing(6),
		height: theme.spacing(6),
	},
	socialMediaLinks: {
		fontSize: '2em',
		margin: '0.2em',
	},
	footerGrid: {
		direction: 'row',
		justify: 'center',
		alignItems: 'center',
	},
	footerList: {
		display: 'flex',
	},
	listItemWidth: {
		width: '5em',
	},
}))

export const Footer = () => {
	const classes = useStyles()

	return (
		<>
			<div className="whole-footer">
				<List className={classes.footerList}>
					<ListItem button>
						<ListItemAvatar>
							<Avatar
								alt="El music"
								src="/images/logo-192x192.png"
								className={classes.large}
							/>
						</ListItemAvatar>
						<Link to={'/'} className={classes.listItemWidth}>
							El music
						</Link>
					</ListItem>

					<ListItem button>
						<Link to="/about-us" className={classes.listItemWidth}>
							About us
						</Link>
					</ListItem>

					<ListItem button>
						<Link to="/deck" className={classes.listItemWidth}>
							Cards
						</Link>
					</ListItem>


					<ListItem>
						<a
							className={classes.socialMediaLinks}
							href="https://www.facebook.com/elbrusbootcamp"
							target="_blank"
						>
							<i className="fab fa-facebook"/>
						</a>
						<ListItemText primary="" />
						<a
							className={classes.socialMediaLinks}
							href="https://www.instagram.com/elbrus.bootcamp/"
							target="_blank"
						>
							<i className="fab fa-instagram"/>
						</a>
						<ListItemText primary="" />
						<a
							className={classes.socialMediaLinks}
							href="https://vk.com/elbrusbootcamp"
							target="_blank"
						>
							<i className="fab fa-vk"/>
						</a>
					</ListItem>
				</List>
				<Grid className={classes.fontSize} container>
					<div>© 2020 El music</div>
				</Grid>
			</div>
		</>
	)
}
