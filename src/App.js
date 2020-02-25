import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bulma/css/bulma.css'
import './App.scss';
import Header from './components/Header'
import Footer from './components/Footer'
import A11yAssistant from './components/A11yAssistant'
import { StateProvider } from './components/StateProvider'
import { combinedReducer } from './reducers'
import { initialMobilityAid } from './reducers/mobilityAid'
import { initialMobilityAidStorage } from './reducers/mobilityAidStorage';
import { initialSeatPreferences } from './reducers/seatPreferences'
import { initialSeatTransfer } from './reducers/seatTransfer';
import { initialNeeds } from './reducers/typeOfNeeds';
import { initialA11yAssistant } from './reducers/a11yAssistant';

import Home from './screens/Home'
import SeatPreferences from './screens/SeatPreferences'
import TypeOfNeeds from './screens/TypeOfNeeds'
import SeatTransfer from './screens/SeatTransfer'
import MobilityAid from './screens/MobilityAid';
import MobilityAidStorage from './screens/MobilityAidStorage';
import Summary from './screens/Summary';
import FlightSearch from './screens/FlightSearch'

function App() {

  const initialState = {
    needs: initialNeeds,
    seatPreferences: initialSeatPreferences,
    seatTransfer: initialSeatTransfer,
    mobilityAid: initialMobilityAid,
    mobilityAidStorage: initialMobilityAidStorage,
    a11yAssistant: initialA11yAssistant,
  }

  return (
    <StateProvider className='app' reducer={combinedReducer} initialState={initialState}>
      <div className="app-container">
        <Header />
        <A11yAssistant />
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
              <Route path="/mobility-aid-storage">
                <MobilityAidStorage />
              </Route>
              <Route path="/summary">
                <Summary />
              </Route>
              <Route path="/search-flights">
                <FlightSearch />
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    </StateProvider>
  );
}

export default App;
