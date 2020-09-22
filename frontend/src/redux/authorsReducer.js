import {SHOW_AUTHORS} from './action'

const initialState = []

const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_AUTHORS:
      return [...state, ...action.payload]
    default:
      return state
  }
}

export default authorsReducer
