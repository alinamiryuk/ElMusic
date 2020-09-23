import {GET_MUSIC} from './action'

const initialState = {}

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MUSIC:
      return {...state, [action.payload]: action.payload}
    default:
        return state
  }
}

export default musicReducer
