import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import {useSelector} from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();

  const isLoggedIn = useSelector((state) =>{
      return state.account.isLoggedIn
  })

  return (
    <Route {...rest}>
      {isLoggedIn === true ?
        <Component />
      :
        <Redirect to={{ pathname: "/admin", state: { from: location } }} />
      }
    </Route>
  );
};

export default PrivateRoute;