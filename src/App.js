import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute'
import BubblePage from './components/BubblePage'
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Route exact path="/" component={Login} />

        <Route path='/private-route'>
          <PrivateRoute/>
        </Route>

        <Route path='/bubble-page'>
          <BubblePage/>
        </Route>

      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.