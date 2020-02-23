import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bulma/css/bulma.css'
import './App.css';
import { StateProvider } from './components/StateProvider'
import { combinedReducer } from './reducers'
import { initialMobilityAid } from './reducers/mobilityAid'
import { initialSeatPreferences } from './reducers/seatPreferences'
import { initialSeatTransfer } from './reducers/seatTransfer';
import { initialNeeds } from './reducers/typeOfNeeds';
import Home from './screens/Home'
import SeatPreferences from './screens/SeatPreferences'
import TypeOfNeeds from './screens/TypeOfNeeds'
import SeatTransfer from './screens/SeatTransfer'
import MobilityAid from './screens/MobilityAid';
import Summary from './screens/Summary';

function App() {

  const initialState = {
    mobilityAid: initialMobilityAid,
    seatPreferences: initialSeatPreferences,
    seatTransfer: initialSeatTransfer,
    needs: initialNeeds
  }

  return (
    <StateProvider className='app' reducer={combinedReducer} initialState={initialState}>
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
    </StateProvider>
  );
}

export default App;
