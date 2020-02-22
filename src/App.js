import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bulma/css/bulma.css'
import './App.css';
import Home from './Home'
import SeatPreferences from './SeatPreferences'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/seat+location">
            <SeatPreferences />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
