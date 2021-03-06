import {
  ADD_PLAYLIST_REDUCER,
  GENERATE_PLAYLISTS,
  GET_USER_PLAYLISTS,
} from './action'
import {v4 as uuidv4} from 'uuid'
import {loginUser} from './actionType'

const initialState = {
  playlists: []
}

const playlistsReducer = (state = initialState, action) => {
  switch (action.type){
    case GENERATE_PLAYLISTS:
        const keys = Object.keys(action.payload);
        const arr = keys.map(key => action.payload[key])
      return {...state, playlists: arr}
    case GET_USER_PLAYLISTS:
      const withId = action.payload.map(type => ({...type, playlists: type.playlists.map(item => ({...item, id: uuidv4()}))}))
      return {...state, playlists: withId}
    case ADD_PLAYLIST_REDUCER:
      const id = action.payload.id
      return {...state, [id]: action.payload.data}
    default:
        return state
  }
}

export default playlistsReducer
