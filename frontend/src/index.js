import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import {useHistory} from 'react-router-dom'
import {applyMiddleware, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './redux/rootReducer'
import thunk from 'redux-thunk'

const jwtMiddleWare = store => next => action => {
  const token = JSON.parse(localStorage.getItem('user'))
  if (!token) {
    const history = useHistory()
    history.push('/login')
    next(action)
  }
  const data = atob(token.token.replace('Bearer ', '').split('.')[1])
  if (new Date(JSON.parse(data).exp * 1000) < Date.now()) {
    next(action)
    localStorage.removeItem('user')
  }
  next(action)
}


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk, jwtMiddleWare)
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
