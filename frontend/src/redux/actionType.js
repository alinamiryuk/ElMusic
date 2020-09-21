import {LOG_IN_USER, REGISTER_USER} from './action'

export const loginUser = (user) => ({
  type: LOG_IN_USER,
  payload: user
})

export const registerUser = (status) => ({
  type: REGISTER_USER,
  payload: status
})

export const fetchUserLogin = (body) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  const user = await response.json()
  localStorage.setItem('user', JSON.stringify(user))
  console.log(user)
  dispatch(loginUser(user))
}

export const fetchUserRegistration = (body) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  const result = await response.json()
  dispatch(registerUser(result.success))
}
