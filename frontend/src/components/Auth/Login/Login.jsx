import React, {useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserLogin } from '../../../redux/actionType'
import '../Login/Login.css'
import { Grid } from '@material-ui/core'
import { Footer } from '../../WelcomePage/Footer/Footer'


export const Login = () => {
	const [state, setState] = useForm({ userName: '', password: '' })
	const status = useSelector((state) => state.user?.success)
	const history = useHistory()
	const dispatch = useDispatch()

	useEffect(() => {
		if (status) history.push('/main')
	}, [status])

	return (
		<>
			<Grid class="login-collumn" container>
				<label htmlFor="userName-login">Username:</label>
				<input
					id="userName-login"
					type="text"
					name="userName"
					placeholder="Username"
					value={state.userName}
					onChange={setState}
				/>
				<label htmlFor="password-login">Password:</label>
				<input
					id="password-login"
					type="password"
					name="password"
					placeholder="Password"
					value={state.password}
					onChange={setState}
				/>
				<button
					className="btn btn-green btn-lg"
					onClick={(e) => {
						e.preventDefault()
						dispatch(fetchUserLogin(state))
					}}
				>
					LOG IN
				</button>
				<label>Don't have an account?</label>
				<Link className="btn btn-stroked-dark" to="/signup"> Sign Up for El Music</Link>
			</Grid>
      <section
				className="footerUs"
				style={{ position: 'absolute', bottom: 0, width: '100%' }}
			>
				<Footer />
			</section>
		</>
	)
}
