import {GENERATE_PLAYLISTS} from './action'

const initialState = {}

const playlistsReducer = (state = initialState, action) => {
  switch (action.type){
    case GENERATE_PLAYLISTS:
      return {...state, ...action.payload}
    default:
        return state
  }
}

export default playlistsReducer
