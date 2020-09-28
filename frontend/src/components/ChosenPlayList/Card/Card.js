import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {Button, CardMedia,makeStyles} from '@material-ui/core'
import {fetchMusic} from '../../../redux/actionType'
import Card from '@material-ui/core/Card'
import {useDispatch, useSelector} from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'


const SongCard = ({song, classes, setId, setToggle, toggle, i}) => {
  const dispatch = useDispatch()
  const fetching = useSelector(state => state.fetching)

  return (
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {song.song_name}
            </Typography>
            <Typography variant="h5"
                        color="textSecondary">
              {song.author}
            </Typography>
          </CardContent>

          <div className={classes.controls}>
            {
              fetching ?
                  <CircularProgress style={{color: '#63e35d'}}/>
                  :
                  <Button className={i.toString()}
                          style={{opacity: '0.6'}}
                          onClick={() => {
                            dispatch(
                                fetchMusic(song._id,
                                    song.genre))
                            setId(song._id)
                            setToggle(() => !toggle)
                          }}
                          variant="outlined"
                  >
                    Play
                  </Button>
            }
          </div>
        </div>
      </Card>
  )
}

export default SongCard
