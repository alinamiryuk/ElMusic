import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserRegistration } from '../../../redux/actionType'
import '../SignUp/SignUp.css'
import { Grid } from '@material-ui/core'

export const SignUp = () => {
	const status = useSelector((state) => state.user.registered)
	const history = useHistory()
	const [state, useState] = useForm({ email: '', password: '', userName: '' })
	const dispatch = useDispatch()
	return (
		<>
			<Grid class="signup-collumn" container>
				<h3>Sign up with your email address</h3>
				<label htmlFor="email-signup">What's your email?</label>
				<input
					id="email-signup"
					type="email"
					name="email"
					placeholder="Enter your email"
					value={state.email}
					onChange={useState}
				/>
				<label htmlFor="password-signup">PASSWORD:</label>
				<input
					id="password-signup"
					type="password"
					name="password"
					placeholder="Create a password"
					value={state.password}
					onChange={useState}
				/>
				<label htmlFor="userName-signup">What should we call you?</label>
				<input
					id="userName-signup"
					type="text"
					name="userName"
					placeholder="Enter a profile name"
					value={state.userName}
					onChange={useState}
				/>
				<button
					className="btn btn-green btn-lg"
					onClick={(e) => {
						e.preventDefault()
						dispatch(fetchUserRegistration(state))
						if (status) {
							history.push('/choose-artists-first')
						}
					}}
				>
					Sign up
				</button>
				<label>
					Have an account?
					<Link to="/login"> Log in</Link>
				</label>
			</Grid>
		</>
	)
}
