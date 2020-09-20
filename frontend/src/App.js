import React from 'react'
import {WelcomePage} from './components/WelcomePage/WelcomePage'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { MainComponentPage } from './components/WelcomeListOfArtists/MainComponentPage'
import {MainPlayList} from './components/MainPlayList/MainPlayList'

function App() {
  return (
    <>
    <Router>
      
      <Switch>

      <Route path="/MainPlayList">
    <MainPlayList/>
    </Route>
    <Route path="/choose-artists-first">
    <MainComponentPage/>
    </Route>
    <Route path="/">
      <WelcomePage/>
    </Route>

      </Switch>

    </Router>
    </>
  );
}

export default App
