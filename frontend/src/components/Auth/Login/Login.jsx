import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {

 	return (
		<>
			{/* continue witn facebook/gogle etc will be here later */}
			or
			<label for="userName-login">Username:</label>
			<input
				id="userName-login"
				type="text"
				name="userName"
				placeholder="Username"
			/>
			<label for="password-login">Password:</label>
			<input
				id="password-login"
				type="password"
				name="password"
				placeholder="Password"
			/>
       {/* change to content page */}
			<Link to="/" className="btn btn-green btn-lg">
				LOG IN
			</Link>

			Don't have an account?
      
			<Link to="/signup">
				Sign Up for El Music
			</Link>
		</>
	)
}
