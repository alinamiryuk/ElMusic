import React from 'react'
import { WelcomePage } from './components/WelcomePage/WelcomePage'
import { Login } from './components/Auth/Login/Login'
import { SignUp } from './components/Auth/SignUp/SignUp'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
        <Route path="/api/auth/signup">
						<SignUp />
					</Route>

					<Route path="/api/auth/login">
						<Login />
					</Route>

					<Route path="/">
						<WelcomePage />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	)
}

export default App
