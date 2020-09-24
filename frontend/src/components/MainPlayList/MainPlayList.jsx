import React from "react"
import { MainView } from "./componetns/Main-view/Main-view"
import { NavBar } from "./componetns/Nav-bar/Navbar"
import { ToolBar } from "./componetns/Tool-bar/Tool-bar"


export const MainPlayList = () => {

  return (
    <>
      <div className="play-list">
        <NavBar/>
        <MainView/>
      </div>
    </>
  )
}
