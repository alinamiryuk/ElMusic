import React from 'react'
import {Redirect,Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
const ProtectedRouter = ({children, ...rest}) => {

  const status = useSelector(state => state.user.success)

  return (
      <Route
          {...rest}
          render={
            (props) => {
              if (status) {
                return children
              } else {
                return <Redirect to={
                  {
                    pathname: '/login'
                  }
                }/>
              }
            }
          }
      />
  )
}
export default ProtectedRouter
