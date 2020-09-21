import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUserLogin} from '../../../redux/actionType'

export const Login = () => {
  const [state, setState] = useForm({userName: '', password: ''})
  const user = useSelector(state => state.user)
  console.log(user.success)
  const history = useHistory()
  const dispatch = useDispatch()

  return (
      <>
        <label htmlFor="userName-login">Username:</label>
        <input
            id="userName-login"
            type="text"
            name="userName"
            placeholder="Username"
            value={state.userName}
            onChange={setState}
        />
        <label htmlFor="password-login">Password:</label>
        <input
            id="password-login"
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={setState}
        />
        {/* change to content page */}
        <a
            className="btn btn-green btn-lg"
            onClick={() => {
              dispatch(fetchUserLogin(state))
              if (user.success){
              history.push('/choose-artists-first')
              }
            }}
        >
          LOG IN
        </a>

        Don't have an account?

        <Link to="/signup">
          Sign Up for El Music
        </Link>
      </>
  )
}
