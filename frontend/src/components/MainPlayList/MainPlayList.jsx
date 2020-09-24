import React from "react"
import { MainView } from "./componetns/Main-view/Main-view"
import { NavBar } from "./componetns/Nav-bar/Navbar"
import {useSelector} from 'react-redux'

export const MainPlayList = () => {
  const fetching = useSelector(state => state.fetching)

  return (
    <>
      <div className="play-list" style={fetching ? {display: 'flex'}: null}>
        <NavBar/>
        <MainView/>
      </div>
    </>
  )
}
