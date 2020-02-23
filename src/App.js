import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bulma/css/bulma.css'
import './App.css';
import Home from './screens/Home'
import SeatPreferences from './screens/SeatPreferences'
import TypeOfNeeds from './screens/TypeOfNeeds'
import SeatTransfer from './screens/SeatTransfer'
import MobilityAid from './screens/MobilityAid';
import Summary from './screens/Summary';

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
