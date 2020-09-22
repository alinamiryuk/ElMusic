import {
  GENERATE_PLAYLISTS, GET_USER_PLAYLISTS,
  LOG_IN_USER,
  REGISTER_USER,
  SHOW_AUTHORS,
} from './action'

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

export const generatedPlaylists = (playlists) => ({
  type: GENERATE_PLAYLISTS,
  payload: playlists
})

export const showUserPlaylist = (playlists) => ({
  type: GET_USER_PLAYLISTS,
  payload: playlists
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
  for (let i = authors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = authors[i]
    authors[i] = authors[j]
    authors[j] = temp
  }
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
  dispatch(generatedPlaylists(playlists))
}

export const fetchUserPlaylists = () => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem('user')).token
  const response = await fetch('/api/playlist', {
    method: 'GET',
    headers: {
      'Authorization': token
    }
  })
  const playlists = await response.json()
  console.log(playlists)
  dispatch(showUserPlaylist(playlists))
}
