import React from 'react'
import { WelcomePage } from './components/WelcomePage/WelcomePage'
import { Login } from './components/Auth/Login/Login'
import { SignUp } from './components/Auth/SignUp/SignUp'
import { MainComponentPage } from './components/WelcomeListOfArtists/MainComponentPage'
import { MainPlayList } from './components/MainPlayList/MainPlayList'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { ChoosenPlayList } from './components/ChoosenPlayList/ChoosenPlayList'

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

      <Route path="/MainPlayList">
    <MainPlayList/>
    </Route>
    <Route path="/ChoosenPlayList">
    <ChoosenPlayList/>
    </Route>
    < path="/choose-artists-first">
    <MainComponentPage/>
    </>

					<Route path="/">
						<WelcomePage />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	)
}
export default App
