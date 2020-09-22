import {LOG_IN_USER, REGISTER_USER} from './action'

const initialState = JSON.parse(localStorage.getItem('user')) || {
  success: false,
  registered: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type){
    case LOG_IN_USER:
      return {...state, ...action.payload, registered: true}
    case REGISTER_USER:
      return {...state, registered: action.payload.status}
    default:
      return state
  }
}

export default userReducer
