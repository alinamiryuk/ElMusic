import {LOG_IN_USER, REGISTER_USER, SHOW_AUTHORS} from './action'

export const loginUser = (user) => ({
  type: LOG_IN_USER,
  payload: user
})

export const registerUser = (status) => ({
  type: REGISTER_USER,
  payload: status
})

export const showAuthors = (authors) => ({
  type: SHOW_AUTHORS,
  payload: authors
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

export const fetchAuthors = () => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem('user')).token
  const res = await fetch('/api/playlist/authors', {
    method: 'GET',
    headers: {
      'Authorization': token
    }
  })
  const authors = await res.json()
  authors.forEach(obj => obj.hide = true)
  dispatch(showAuthors(authors))
}

export const fetchGeneratePlaylists = (likedAuthorsArray) => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem('user')).token
  const res = await fetch('/api/playlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify({
      likedAuthorsArray
    })
  })
  const playlists = await res.json()
  console.log(playlists)
}
