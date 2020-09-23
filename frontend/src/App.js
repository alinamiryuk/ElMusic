import React from 'react'
import {WelcomePage} from './components/WelcomePage/WelcomePage'
import {Login} from './components/Auth/Login/Login'
import {SignUp} from './components/Auth/SignUp/SignUp'
import {AboutUs} from './components/WelcomePage/Footer/AboutUs/AboutUs'
import {MainComponentPage} from './components/WelcomeListOfArtists/MainComponentPage'
import {MainPlayList} from './components/MainPlayList/MainPlayList'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
<<<<<<< HEAD
import {ChoosenPlayList} from './components/ChoosenPlayList/ChosenPlayList'
=======
import {ChosenPlayList} from './components/ChoosenPlayList/ChosenPlayList'
>>>>>>> 82b91ee33fe275e2720e03af97f1e6515a51d7b6
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
            <ProtectedRouter path="/main">
              <MainPlayList/>
            </ProtectedRouter>
            <ProtectedRouter path="/playlist/:id">
              <ChosenPlayList/>
            </ProtectedRouter>
            <ProtectedRouter path="/choose-artists-first">
              <MainComponentPage/>
            </ProtectedRouter>
            <Route path="/about-us">
              <AboutUs/>
            </Route>
            <Route path="/">
              <WelcomePage/>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
  )
}

export default App
