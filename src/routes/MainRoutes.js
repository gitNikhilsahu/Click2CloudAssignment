import React, {lazy,Suspense} from "react";
import { Switch, Route } from "react-router-dom";
// import PrivateRoute from './PrivateRoute'

const Loadable = (Component) => props => (
    <Suspense fallback="Lazy Loading..">
      <Component {...props} />
    </Suspense>
);

const LandingPage = Loadable(lazy(() => import('src/pages/LandingPage')));

const Routes = () => {
  return (
    <Switch>

      <Route exact path="/">
        <LandingPage />
      </Route>

      {/* <PrivateRoute path="/admin" component={} /> */}

    </Switch>
  );
};

export default Routes;
