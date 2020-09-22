import React, { useState } from 'react'

export const ArtistImage = ({ ava, onCounter }) => {
	const [hoverFlag, setHoverFlag] = useState(false)
	// const [counter, setCounter] = useState(0);
	return (
		<>
			<div
				onClick={() => {
					setHoverFlag(!hoverFlag)
					// hoverFlag === true ? setCounter(counter + 1) :  setCounter(counter)
					console.log('hoverFlag>>>>', hoverFlag)
					// console.log('counter>>>>',counter)
					if (ava.hide) {
						onCounter(state => state + 1)
					} else {
						onCounter(state => state - 1)
					}
					return (ava.hide = hoverFlag)
				}}
				className="artistAvatar"
			>
				<div className="dark-hover"> ❤ </div>
				{ava.hide ? (
					<img className="artist" src={ava.avatar} alt={'author'}/>
				) : (
					<img className="artist-choose" src={ava.avatar}  alt={'author'}/>
				)}
				<div className="artistName">{ava.author}</div>
			</div>
		</>
	)
}
