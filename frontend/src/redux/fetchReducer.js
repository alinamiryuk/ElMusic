import {END_FETCHING, START_FETCHING} from './action'

const initialState = false

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return action.payload
    case END_FETCHING:
      return action.payload
    default:
      return state
  }
}

export default fetchReducer
