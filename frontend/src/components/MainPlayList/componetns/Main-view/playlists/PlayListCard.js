import React from 'react'
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
} from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions'

const useStyles = makeStyles({
  root: {
    maxWidth: 160,
    margin: '1em',
  },
})

const PlayListCard = ({playlist}) => {
  const classes = useStyles()
  return(
      <Card className={classes.root}>
        <CardContent>
          <CardMedia
              style={{marginBottom: 20}}
              component="img"
              alt="Contemplative Reptile"
              height="20"
              image="https://cdn1.ozone.ru/multimedia/1019138176.jpg"
              title="Contemplative Reptile"
          />
          {playlist.type || playlist.author}
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary">
            <a href="/ChoosenPlayList">
              play
            </a>
          </Button>
        </CardActions>
      </Card>
  )
}

export default PlayListCard
