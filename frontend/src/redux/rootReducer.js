import {combineReducers} from 'redux'
import userReducer from './userReducer'
import authorsReducer from './authorsReducer'
import playlistsReducer from './playlistsReducer'
import musicReducer from './musicReducer'
import fetchReducer from './fetchReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  authors: authorsReducer,
  playlists: playlistsReducer,
  music: musicReducer,
  fetching: fetchReducer
})
