import {combineReducers} from 'redux'
import userReducer from './userReducer'
import authorsReducer from './authorsReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  authors: authorsReducer
})
