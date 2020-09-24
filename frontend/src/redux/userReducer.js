import {LOG_IN_USER, LOG_OUT_USER, REGISTER_USER} from './action'

const initialState = JSON.parse(localStorage.getItem('user')) || {
  success: false,
  registered: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type){
    case LOG_IN_USER:
      return {...state, ...action.payload.user, registered: action.payload.success, success: action.payload.success}
    case REGISTER_USER:
      return {...state, registered: action.payload.success,   ...action.payload.user, success: action.payload.success}
    case LOG_OUT_USER:
      return action.payload
    default:
      return state
  }
}

export default userReducer
