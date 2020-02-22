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
import TypeOfNeeds from './TypeOfNeeds'
import SeatTransfer from './SeatTransfer'
import MobilityAid from './MobilityAid';
import Summary from './Summary';

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
          <Route path="/type-of-needs">
            <TypeOfNeeds />
          </Route>
          <Route path="/seat-transfer">
            <SeatTransfer />
          </Route>
          <Route path="/mobility-aid">
            <MobilityAid />
          </Route>
          <Route path="/summary">
            <Summary />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
