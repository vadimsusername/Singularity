import React from "react";
import Nav from './components/Nav'

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import GameCard from "./components/GameCard";


function App() {
  return (
    <>

      <Nav />
      <Router>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Router>

    </>
  );
}

export default App;
