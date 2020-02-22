import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
