import React, { useState } from 'react'

export const ArtistImage = ({ava}) => {
  const [hoverFlag, setHoverFlag] = useState(false);
  // const [counter, setCounter] = useState(0);
  return(
  <>
  <div
              onClick={() => {
                setHoverFlag(!hoverFlag)
                // hoverFlag === true ? setCounter(counter + 1) :  setCounter(counter)
                console.log('hoverFlag>>>>',hoverFlag)
                // console.log('counter>>>>',counter)
                return (ava.hide = hoverFlag)

              }}
              className="artistAvatar"
            >
              <div className="dark-hover"> ❤ </div>
              {ava.hide ? (
                <img className="artist" src={ava.img} />
              ) : (
                <img className="artist-choose" src={ava.img} />
              )}
              <div className="artistName">{ava.author}</div>
            </div>
  </>)
} 
