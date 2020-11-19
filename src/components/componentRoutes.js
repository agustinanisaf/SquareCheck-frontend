import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {isLogin} from '../utils/auth'

export const PrivateRoute = ({component : Component, ...attr}) => {
  
  return (
    <Route
      {...attr}
      render={(props) =>
        isLogin() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", from: props.location }} />
        )
      }
    />
  );
}

export const PublicRoute = ({ component: Component, restricted, ...attr }) => {
  return (
    <Route
      {...attr}
      render={(props) =>
        !isLogin() && restricted ? (
          (<Component {...props} />)
        ) : (
          <Redirect to={{ pathname: "/", from: props.location }} />
        )
      }
    />
  );
};