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
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    margin: '0.2em'
	},
	footerGrid: {
		direction: 'row',
		justify: 'center',
		alignItems: 'center',
	},
	footerList: {
    display: 'flex'
  },
  listItemWidth: {
    width: '5em',
  }
}))

export const Footer = () => {
	const classes = useStyles()

	return (
		<>
			<div className="whole-footer">
				{/* <Grid container className="footerGrid"> */}
					<List className={classes.footerList}>
						<ListItem button>
							<ListItemAvatar>
								<Avatar
									alt="El music"
									src="/images/logo-192x192.png"
									className={classes.large}
								/>
							</ListItemAvatar>
							<a href="/" className={classes.listItemWidth}>
                
                El music</a>
						</ListItem>

						<ListItem button>
							<a href="/about-us" className={classes.listItemWidth}>About us</a>
						</ListItem>

						<ListItem>
							<a className={classes.socialMediaLinks} href="/">
								<i class="fab fa-facebook"></i>
							</a>
							<ListItemText primary="" />
							<a className={classes.socialMediaLinks} href="/">
								<i class="fab fa-instagram"></i>
							</a>
							<ListItemText primary="" />
							<a className={classes.socialMediaLinks} href="/">
								<i class="fab fa-vk"></i>
							</a>
						</ListItem>
					</List>
				{/* </Grid> */}
				<Grid className={classes.fontSize} container>
					<div>© 2020 El music</div>
				</Grid>
			</div>
		</>
	)
}
