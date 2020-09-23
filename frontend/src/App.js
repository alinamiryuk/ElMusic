import React from 'react'
import {WelcomePage} from './components/WelcomePage/WelcomePage'
import {Login} from './components/Auth/Login/Login'
import {SignUp} from './components/Auth/SignUp/SignUp'
import {MainComponentPage} from './components/WelcomeListOfArtists/MainComponentPage'
import {MainPlayList} from './components/MainPlayList/MainPlayList'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {ChoosenPlayList} from './components/ChoosenPlayList/ChosenPlayList'
import ProtectedRouter from './components/shared/ProtectedRouter'

function App() {
  return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/signup">
              <SignUp/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <ProtectedRouter path="/MainPlayList">
              <MainPlayList/>
            </ProtectedRouter>
            <ProtectedRouter path="/ChoosenPlayList">
              <ChoosenPlayList/>
            </ProtectedRouter>
            <ProtectedRouter path="/choose-artists-first">
              <MainComponentPage/>
            </ProtectedRouter>
            <Route path="/">
              <WelcomePage/>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
  )
}

export default App
