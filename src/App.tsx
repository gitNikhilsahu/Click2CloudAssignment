import React from 'react';
import { Router } from "react-router-dom";
import history from "./history";
import {MainRoutes} from './routes'

function App() {
  return (
    <Router history={history}>
      <MainRoutes/>
    </Router>
  );
}

export default App;
