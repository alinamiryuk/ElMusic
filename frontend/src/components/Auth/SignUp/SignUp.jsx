import React from 'react'
import { Link } from 'react-router-dom'

export const SignUp = () => {
	return (
		<>
			{/* sign up witn facebook/gogle etc will be here later */}
			or Sign up with your email address
			<label for="email-signup">What should we call you?</label>
			<input
				id="email-signup"
				type="email"
				name="email"
				placeholder="Enter your email"
			/>
			<label for="password-signup">PASSWORD:</label>
			<input
				id="password-signup"
				type="password"
				name="password"
				placeholder="Create a password"
			/>
			<label for="userName-signup">What should we call you?</label>
			<input
				id="userName-signup"
				type="text"
				name="userName"
				placeholder="Enter a profile name"
			/>
      {/* change to content page */}
      <Link to="/" className="btn btn-green btn-lg">
      Sign up
			</Link>
		
			Have an account?

			<Link to="/api/auth/login">
				Log in
			</Link>
		</>
	)
}
