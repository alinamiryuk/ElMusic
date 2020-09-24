import {LOG_IN_USER, REGISTER_USER} from './action'

const initialState = JSON.parse(localStorage.getItem('user')) || {
  success: false,
  registered: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type){
    case LOG_IN_USER:
      return {...state, token: action.payload.user, registered: action.payload.success, success: action.payload.success}
    case REGISTER_USER:
      return {...state, registered: action.payload.success,  token: action.payload.user, success: action.payload.success}
    default:
      return state
  }
}

export default userReducer
