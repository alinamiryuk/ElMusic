import {combineReducers} from 'redux'
import userReducer from './userReducer'
import authorsReducer from './authorsReducer'
import playlistsReducer from './playlistsReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  authors: authorsReducer,
  playlists: playlistsReducer
})
