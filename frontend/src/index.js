import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import {useHistory} from 'react-router-dom'
import {applyMiddleware, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './redux/rootReducer'
import thunk from 'redux-thunk'

const checkTokenExpirationMiddleware = store => next => action => {
  const token =
      JSON.parse(localStorage.getItem("user")) &&
      JSON.parse(localStorage.getItem("user"))["token"];
  console.log(token, '>>>>>>>>')
  if (false) {
    next(action);
    localStorage.clear();
  }
  next(action);
};


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk, checkTokenExpirationMiddleware)
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
