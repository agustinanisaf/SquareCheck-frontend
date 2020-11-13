import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {isLogin} from '../utils/auth'

export const PrivateRoute = ({Component, ...attr}) => {
  
  return (
        <Route
            {...attr}
            render={ (props) => isLogin() ?
                <Component {...props} />
          : <Redirect to="/login" />}
        />
    )
}

export const PublicRoute = ({ Component,restricted, ...attr }) => {
  return (
    <Route
      {...attr}
      render={(props) =>
        isLogin() && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};