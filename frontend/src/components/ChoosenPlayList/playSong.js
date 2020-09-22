import React from 'react'
const musicButton = [
  {
    url: "https://cdndl.zaycev.net/track/17897115/7CNHd5sc2BQgY3jShGFJP843jpCZxUXmqN8ogb7o1EXbdFyLUvGKDExGcKFGKvqS1w8uQz8xsvJUgS7QBeYnpoJzZ9G3DRkdRK3bxRNfFXPQSqwRPrDYaC5sHPx7gXpxmFTgULH7gWEe9RYVXT2bxf7CaqUTFhZyJggUGeKsR1ARTnveQLz6cUgSu1dZP7wJLfQeHjZVm2DCssvpXEWEketR9tbZLJb8Gz6zbUo7ngmFZaSxH44TxfpeEwaePap4vdsZNnXyuMbV4sCYEoivKMcEjfad3uzxJYdCv59NKGsyJxiebCtxHsNarhL75C1jMu6rJbacqFbmvtBn3tzS26jgyaqda6eEULu4gMLG6p2f9FKzqp1X",
    letter: "Q",
    numButton: 81,
    soundsName: "Play"
  },
]

export class Music extends React.Component {
  state = {
    music: musicButton,
  }

  onClick = e => {
    if (this.audio) {
      this.audio.pause();
    }
    this.audio = new Audio(e.target.dataset.url);
    this.audio.play();
  }

  render() {
    return (
      <div>
        {this.state.music.map(n => (
          <button onClick={this.onClick} data-url={n.url} key={n.numButton}>{n.soundsName}</button>
        ))}
      </div>
    );
  }
}
