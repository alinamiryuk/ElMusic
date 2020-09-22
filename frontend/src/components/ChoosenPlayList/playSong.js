import React from 'react'
import './playSong.css'

export class CardPlayer extends React.Component {
  state = {
    song: {
      artistName: "One11Twenty", collectionName: "Stuck - Single", trackName: "Stuck", artistViewUrl: "https://itunes.apple.com/us/artist/one11twenty/1059021040?uo=4", collectionViewUrl: "https://itunes.apple.com/us/album/stuck/1194806178?i=1194806285&uo=4", trackViewUrl: "https://itunes.apple.com/us/album/stuck/1194806178?i=1194806285&uo=4",
      previewUrl: "https://cdndl.zaycev.net/track/17897115/7CNHd5sc2BQgY3jShGFJP843jpCZxUXmqN8ogb7o1EXbdFyLUvGKDExGcKFGKvqS1w8uQz8xsvJUgS7QBeYnpoJzZ9G3DRkdRK3bxRNfFXPQSqwRPrDYaC5sHPx7gXpxmFTgULH7gWEe9RYVXT2bxf7CaqUTFhZyJggUGeKsR1ARTnveQLz6cUgSu1dZP7wJLfQeHjZVm2DCssvpXEWEketR9tbZLJb8Gz6zbUo7ngmFZaSxH44TxfpeEwaePap4vdsZNnXyuMbV4sCYEoivKMcEjfad3uzxJYdCv59NKGsyJxiebCtxHsNarhL75C1jMu6rJbacqFbmvtBn3tzS26jgyaqda6eEULu4gMLG6p2f9FKzqp1X"
    },
    playing: undefined,
    imageClicked: false
  }
  imageClick = (e) => {
    const audio = document.getElementById('player')
    this.setState({
      imageClicked: !this.state.imageClicked
    })
    if (this.state.imageClicked) {
      this.setState({
        playing: true
      })
      audio.play()
    } else {
      this.setState({
        playing: false
      })
      audio.pause()
    }
  }
  render() {
    const song = this.state.song
    return (
      <div class="frame">
        <div class="center">
          <div class="main">
            <div class={this.state.playing ? 'artwork-cover play-artwork-cover' : 'artwork-cover'}>
              <img src={this.state.song.artworkUrl100} onClick={this.imageClick} class={this.state.playing ? 'play-artwork' : 'pause-artwork'} />
            </div>
            <audio id="player" src="https://cdndl.zaycev.net/track/7154974/4Ehsii9FgoD6ZoprRLM9h3r96fHuHrsvKJDwaG5izygS9cqyDaqibMjPwGZ7iVYMT66MvHsx8bZiMx3bxZUnyJBZ61nYMnxHVMUifubWTaT91bNmBP3fVW3KeP92pt4Tupch9xQVmpZhZupAhDjXYEhdGYyMEadhJZFjyvRdNDxpcvT3GmNmEFiF3VUL6SV59Qy7CWBRJ6DpzhHqdx67N6QkUXj98PtL2aqxkDgFeSXgX1jsy2aGMLRwSzRXKBp5HKtpVtM3CCkBcjbzhxM8jLkW6NXXhKZf2EZ82psNfxVdDjy9GwJh7uDVwabg6GMXHqc26ANjGKFDZZeE6yTpTrMdgz3nkBSJsnJ6VEMn2Q4Rgz3Kseey" loop />
          </div>
          <div class="right">
            <div class="player-controls">
              <div class="player-control" onClick={this.imageClick}>
                <i class="fas fa-play fa-2x"></i>
              </div>
              <div class="player-control" onClick={this.imageClick}>
                <i class="fas fa-pause fa-2x"></i>
              </div>
              <div class="player-control" onClick={this.imageClick}>
                <i class="fas fa-stop fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

