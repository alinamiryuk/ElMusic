import React, { useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
} from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addPlaylist } from '../../../../../redux/actionType'

let classType ='linear-gradient(to bottom right, #FFFFF0, #0000002e)'

const useStyles = makeStyles({
  root: {
    maxWidth: 199,
    minWidth: 199,
    minHeight: 220,
    maxHeight: 223,
    margin: '30px 0px 50px 30px',
    // background: `${classType}`
  },
  root2: {
    maxWidth: 199,
    minWidth: 199,
    minHeight: 220,
    maxHeight: 223,
    margin: '30px 0px 50px 30px',
    background: 'linear-gradient(45deg,#DBFDEC,#bcffa6)',
    // background: 'linear-gradient(to bottom right, white, #00000000)'
  },
  img: {
    height: 138,
  },
  
  link: {
    color: 'black',
    opacity: '0.8'
  }

})


//linear-gradient(rgb(244, 191, 96), rgb(255, 195, 98))

const PlayListCard = ({ playlist,types }) => {
  
  const dispatch = useDispatch()
  // const [img,setImg]=useState('https://e-cdns-images.dzcdn.net/images/artist/4ee6e8e0dcdece98291101f73f1b1a38/242x242-000000-80-0-0.jpg')
  const classes = useStyles()
      if (types === 'moodPL') {
        classType = 'linear-gradient(to top, white, #0000002e)';
      }
  

  let image = 'https://e-cdns-images.dzcdn.net/images/artist/4ee6e8e0dcdece98291101f73f1b1a38/242x242-000000-80-0-0.jpg'
  const checkerOfTypes = () => {
    if (playlist.type) {
      switch (playlist.type) {
        case 'Chill Playlist':
          return image = '/images/chill.jpg'
        case 'Hard Playlist':
          return image = '/images/rockPlay.jpg'
        case 'Rock':
          return image = '/images/rocknroll.jpeg'
        case 'Jazz':
          return image = '/images/jazz.jpeg'
        case 'Metal':
          return image = '/images/hardRock.jpg'
        case 'Pop':
          return image = '/images/pop.jpeg'
        default:
          return image = '/images/smiledef.jpg';
      }
    } else {
      switch (playlist.author) {
        case "Виктор Цой":
          return image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ96S0X32OzOHUcX99F5nfK4vvAtvo8AhfL7Q&usqp=CAU';
        case 'Ella Fitzgerald':
          return image = 'https://4.bp.blogspot.com/-rg8yhrSI6JI/WR73XMB17sI/AAAAAAAAEeA/5S9W6Ovlx4o6ma2F27usZQiXH1I9ZLf1QCLcB/s1600/Ella%2BFitzgerald%2B-%2BHello%2BLove.jpg'
        case 'James Brown':
          return image = '/images/jazz.jpeg'
        case 'Jamiroquai':
          return image = '/images/Jamiroquai.jpg'
        case 'Клава Кока':
          return image = '/images/coca.jpeg'
        case 'Егор Крид':
          return image = '/images/creed.jpeg'
        case 'Руки Вверх':
          return image = '/images/vverh.jpeg'
        case 'Shawn Mendes':
          return image = '/images/ShawnMendes.jpg'
        case 'Jony':
          return image = '/images/Jony.jpg'
        case 'Annie Lennox':
          return image = '/images/AnnieLennox.jpg'
        case 'Modern Talking':
          return image = '/images/Modern-Talking.jpg'
        case 'Linkin Park':
          return image = '/images/LinkinPark.jpeg'
        case 'Nirvana':
          return image = '/images/curt.jpeg'
        case 'Scorpions':
          return image = '/images/Scorpions.jpg'
        case 'Би-2':
          return image = '/images/2.jpg'
        case 'Louis Armstrong':
          return image = '/images/LouisArmstrong.jpeg'
        case 'Frank Sinatra':
          return image = '/images/FrankSinatra.jpg'
        case 'Avenged':
          return image = '/images/Avenged.jpg'
        case 'A Day to Remember':
          return image = '/images/adtr.jpg'
        case 'Chelsea Grin':
          return image = '/images/chelsea-grin.jpg'
        case 'Metallica':
          return image = '/images/metallica.jpg'
          case 'Black Veil Brides':
            return image = '/images/black-veil-brides.jpg'
        default:
          return image = '/images/smiledef.jpg';
      }
    }
  }
  return (
    <Card className={types !== 'authorPL' && types !== 'genre' ? classes.root : classes.root2}>
      <CardContent>
        <CardMedia
          className={classes.img}
          style={{ marginBottom: 10 }}
          component="img"
          alt="Contemplative Reptile"
          // height="20"
          image={playlist.type || playlist.author ? `${checkerOfTypes(playlist.type, playlist.author)}` : '/images/smiledef.jpg'}
          title="Contemplative Reptile"
        />
        {playlist.type || playlist.author}
      </CardContent>
      <CardActions>
        <Button size="medium" color="secondary" onClick={() => dispatch(addPlaylist(playlist))}>
          <Link className={classes.link} to={`/playlist/${playlist.id}`}>
            play
            </Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default PlayListCard

// moodPL
//authorPL
//"maybeInterested"
//genre
// Chill Playlist
// Hard Playlist
