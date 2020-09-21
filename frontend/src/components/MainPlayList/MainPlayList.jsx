import React from "react"
import "./MainPlayList.css"
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Button,
  CardMedia,
  CardActions,
  makeStyles,
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export const MainPlayList = () => {
  const classes = useStyles()
  return (
    <>
      <div className="play-list">
        
        <div className='card-play-list'>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="20"
                image="https://cdn1.ozone.ru/multimedia/1019138176.jpg"
                title="Contemplative Reptile"
              />
              <Button size="small" color="primary">
                play
              </Button>
            </CardActionArea>
          </Card>
        </div>

      </div>
    </>
  )
}
