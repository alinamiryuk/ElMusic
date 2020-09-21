import React from 'react'
import { WelcomePage } from './components/WelcomePage/WelcomePage'
import { Login } from './components/Auth/Login/Login'
import { SignUp } from './components/Auth/SignUp/SignUp'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
        <Route path="/signup">
						<SignUp />
					</Route>

					<Route path="/login">
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
