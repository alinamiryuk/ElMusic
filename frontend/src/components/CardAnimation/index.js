import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import './styles.css'

const cards = [
  'https://i.pinimg.com/736x/e6/68/73/e66873e1584299d28b244496ba8d6c9c.jpg',
  'https://en.24smi.org/public/media/resize/660x-/celebrity/2018/04/23/onttu1yjieic-frank-sinatra.jpg',
  'https://lastfm.freetls.fastly.net/i/u/ar0/ce9defe6cdbb3ef9d0aef857ddecd1ae.jpg',
  'https://img.freedisc.pl/photo/5555316/2/l/nickelback-greatest-hits-2012-front.png',
  'https://yt3.ggpht.com/a/AATXAJzqxoKuPiKVgSup8PkPTdSHAnQaMs4RgfqdSXWm=s900-c-k-c0xffffffff-no-rj-mo',
  'https://www.hawtcelebs.com/wp-content/uploads/2018/06/ariana-grande-sweetener-album-cover-2018-0.jpg'
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

export const Deck = ()=> {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active ca rds lift up a bit
      return { x, rot, scale,  delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return props.map(({ x, y, rot,  scale }, i) => (
    <animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>

      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      <animated.div {...bind(i)}  style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
    </animated.div>
  ))
}

// render(<Deck />, document.getElementById('root'))
