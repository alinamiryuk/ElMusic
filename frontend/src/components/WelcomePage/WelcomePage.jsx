import React from 'react'
import '../../components/WelcomePage/WelcomePage.css'
import { Albums } from './albumResult/Albums'
import { Footer } from './Footer/Footer'
import { OrangeSpace } from './OrangeSpace/OrangeSpace'
import { NavBar } from '../MainPlayList/componetns/Nav-bar/Navbar'
import { Link } from 'react-router-dom'

export const WelcomePage = (params) => {
	return (
		<>
			<section>
				<NavBar />
			</section>
			<OrangeSpace />
			<section className="album-results-free">
				<div className="container center-white">
					<div className="row row-white">
						<h2 className="h1">Looking for a music?</h2>
						<p className="lead">Start diving to the world of new emotions.</p>
						<Link
							id="segmented-desktop-launch"
							className="btn btn-stroked-dark"
							role="button"
							to={'/main'}
							data-tracking='{"category": "home", "action": "play"}'
						>
							Launch Web Player
						</Link>
						<Albums />
					</div>
				</div>
			</section>
			<section className="footer">
				<Footer />
			</section>
		</>
	)
}
